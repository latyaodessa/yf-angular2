import { Component, OnInit } from '@angular/core';
import {PostListDTO} from './../../objects/dtos/postListDTO';
import {PostService} from './../../services/post.service';
import {ElasticClient} from './../../services/http/elastic.client.service';
import {YFPostHandler} from './../../services/handlers/yf.post.handlers';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {WindowSize} from './../../services/core/window.size';
import {MessageConfig} from './../../config/message.properties';
import {SetupConfig} from './../../config/setup.config';
import {UserDashboardService} from './../../services/dashboard/user.dashboard.service';
import {StorageService} from './../../services/authorization/storage.service'
import {PostForSave} from './../../objects/user/dtos/post.for.save.dto'
import {UserDashboardRestClient} from './../../services/http/user.dashboard.rest.client'



@Component({
    selector: 'saved-posts-dashboard',
    templateUrl: 'app/ts/templates/user/saved.posts.dashboard.component.html',
    providers: [PostService, ElasticClient, YFPostHandler, WindowSize, StorageService, UserDashboardRestClient],
    directives: [ ROUTER_DIRECTIVES],
    inputs: ['posts']
})

export class SavedPostDashboardComponent implements OnInit {
    public NO_SAVED_POSTS = MessageConfig.NO_SAVED_POSTS;
    public title = MessageConfig.SAVED_POSTS_TITLE;
    private postListDTO:PostListDTO[] = [];
    public show_all_pics = MessageConfig.SHOW_ALL_PICS;
    public route: string = SetupConfig.NATIVE_LIST_ROUTE;
    public single_route = SetupConfig.SINGLE_POST_ROUTE;
    public loadMorePostPossible:boolean = true;

    public static loadInitAmount:number = 6;
    public static loadMoreAmount:number = 12;
    public static loadOneAmount:number = 1;


    private contentExistence=true;

    constructor(private postService: PostService, private windowSize:WindowSize, private userDashboardService:UserDashboardService, private storageService:StorageService, private userDashboardRestClient:UserDashboardRestClient){}


    ngOnInit() {
        this.getPosts(SavedPostDashboardComponent.loadInitAmount);

    }

    private getPosts(size:number){
      this.userDashboardService.getSavedPosts(0, size, this.storageService.getUserId()).subscribe(savedPosts => {

          this.contentExistence = this.isContentExist(savedPosts.length);

          this.postService.getPostsByMultipleIds(savedPosts).subscribe(posts=> {
              if(posts.length < SavedPostDashboardComponent.loadInitAmount) {this.loadMorePostPossible = false;}
              this.sortPostsByDate(savedPosts,this.postService.postToPostListDTO(posts));
          });

        });
    }

    sortPostsByDate(savedPosts:any[], postListDTO:PostListDTO[]){
        for(let saved of savedPosts){
                this.postListDTO.push(this.findPostListDTOById(saved,postListDTO));
        }

    }

    findPostListDTOById(saved:PostForSave, postListDTO:PostListDTO[]){
        return postListDTO.find(function(p) {
            return p.id == saved.post_id;
        })
    }

    loadOne(){
        this.userDashboardService.getSavedPosts(this.postListDTO.length+1, SavedPostDashboardComponent.loadOneAmount, this.storageService.getUserId()).subscribe(savedPosts => {

            this.postService.getPostsByMultipleIds(savedPosts).subscribe(posts=> {
                //this.postListDTO = this.postService.postToPostListDTO(posts);
                this.sortPostsByDate(savedPosts,this.postService.postToPostListDTO(posts));
            });

        });
    }

    loadMore(){
        this.userDashboardService.getSavedPosts(this.postListDTO.length, SavedPostDashboardComponent.loadMoreAmount, this.storageService.getUserId()).subscribe(savedPosts => {

            this.postService.getPostsByMultipleIds(savedPosts).subscribe(posts=> {
                this.isLoadMorePossible(posts.length, SavedPostDashboardComponent.loadMoreAmount);
               this.sortPostsByDate(savedPosts,this.postService.postToPostListDTO(posts));
            });

        });
    }

    deleteSavedPost(postid:number){
        this.postListDTO.splice(this.postListDTO.findIndex(function(post){
            return post.id == postid;
        }),1)

        this.userDashboardRestClient.deletePostById(this.storageService.getUserId(), postid).subscribe( res => {
            this.loadOne();
            this.contentExistence = this.isContentExist(this.postListDTO.length);

        });

    }

    private isLoadMorePossible(length:number,amount:number){
        if(length < amount) {this.loadMorePostPossible = false;}
    }

    private isContentExist = (count:number) => {
        return count > 0? true : false;
    }

}