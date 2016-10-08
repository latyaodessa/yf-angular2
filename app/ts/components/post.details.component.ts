import { Component, OnInit, ViewChild } from '@angular/core';
import {PostService} from './../services/post.service';
import {SuggestedPostsComponent} from './../components/sugessted.posts.component';
import {ElasticClient} from './../services/http/elastic.client.service';
import {YFPostHandler} from './../services/handlers/yf.post.handlers'
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import {NewNativeComponent} from './post.new.native.component';
import {NewSetsComponent} from './post.new.sets.component';
import {PostDetailsDTO} from './../objects/dtos/postDetailsDTO';
import { Title }     from '@angular/platform-browser';
import {MessageConfig} from './../config/message.properties';
import {SetupConfig} from './../config/setup.config'
import {UserDashboardService} from './../services/dashboard/user.dashboard.service'
import {StorageService} from './../services/authorization/storage.service'
import {DateTimeService} from './../services/core/date.time.service'
import {UserDashboardRestClient} from './../services/http/user.dashboard.rest.client'
import {YFUserHandler} from './../services/handlers/yf.user.handlers'
import { CollapseDirective } from 'ng2-bootstrap/components/collapse';
import {LoginComponent} from './../components/core/login.component';
import {SocialService} from './../services/core/social.servcie'
import {PostWorkflow} from './../services/workflow/post.workflow';





@Component({
    selector: 'post-details',
    templateUrl: 'app/ts/templates/post.details.component.html',
    providers: [PostService, ElasticClient, YFPostHandler, Title, UserDashboardService,
                StorageService, DateTimeService,UserDashboardRestClient, YFUserHandler, SocialService,
                PostWorkflow],
    directives: [ROUTER_DIRECTIVES, SuggestedPostsComponent,LoginComponent, NewNativeComponent, NewSetsComponent, CollapseDirective]
})

export class PostDetailsComponent implements OnInit {
    public user_dashboard_route = SetupConfig.DASHBOARD_ROUTE;

    private sub:any;
    private postDetailsDTO:PostDetailsDTO;
    private phForSuggested:string;
    private mdForSuggested:string;
    private isExist:boolean = false;
    public isCollapsedModal:boolean = true;

    public DETAILS_SAVE_POST_IN_DASHBOARD = MessageConfig.DETAILS_SAVE_POST_IN_DASHBOARD;
    public SAVED_POST = MessageConfig.DETAILS_POST_ALREADY_SAVED;

    public loginNeeded:boolean = false;
    public isPostAlreadySaved:boolean = false;

    public CLOSE_MODAL = MessageConfig.CLOSE_MODAL;
    public MODAL_TITLE:string;
    public MODAL_TEXT:string;
    public single_post_text:string;
    public single_photo_text_img_url:string;

    public SHARE_BUTTON_TEXT = MessageConfig.SHARE_BUTTON_TEXT;
    public OPEN_POST_IN_VK = MessageConfig.OPEN_POST_IN_VK;




    constructor(private postService: PostService, private route: ActivatedRoute, private titleService: Title,
                private userDashboardService:UserDashboardService, private storageService:StorageService,
                private userDashboardRestClient:UserDashboardRestClient, private socialService:SocialService,
                private postWorkflow:PostWorkflow) {
        this.postDetailsDTO = new PostDetailsDTO(null, null,null,null,null);
        this.isCollapsedModal = true;
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
                this.postService.findYFPostById(params['id']).subscribe(post => {
                    if(post.length != 0){
                        this.isExist = true;
                        this.postDetailsDTO = this.postWorkflow.postToPostDetailsDTO(post[0]);
                        this.postDetailsDTO.photos = this.postService.findPhotosForPostDetails(post[0]);
                        this.phForSuggested = this.postDetailsDTO.ph;
                        this.mdForSuggested = this.postDetailsDTO.md;
                        this.setTitle(this.postDetailsDTO.ph, this.postDetailsDTO.md, this.postDetailsDTO.text);
                        this.isPostAlreadySavedToUser();
                    }
                });



        });

    }

    private shareButton(social:string){
        if(social == 'vk'){
            window.open(this.socialService.getVkShareLink(this.postDetailsDTO.photos[0]),"");
        } else if(social == 'fb'){
            this.socialService.getFbShareLink(this.postDetailsDTO.photos[0]);
        }else if(social == 'tumblr'){
            window.open(this.socialService.getTumblrLink(),"_blank");
        }
    }

    private isPostAlreadySavedToUser(){
        if(this.storageService.getUserId()) {
            this.userDashboardRestClient.isPostAlreadySavedToUser(this.storageService.getUserId(), this.postDetailsDTO.id)
                .subscribe(result =>{
                    this.isPostAlreadySaved = result
                }
                );
        }
    }

    public setTitle(ph:string, md:string, text:string) {
        if(ph && md) {
            this.titleService.setTitle(MessageConfig.MD_DETAILS_TITLE + " " + md + " | " + MessageConfig.PH_DETAILS_TITLE + " " +ph);
        } else if(md){
            this.titleService.setTitle(MessageConfig.MD_DETAILS_TITLE + " " +  md);
        } else if(ph){
            this.titleService.setTitle(MessageConfig.PH_DETAILS_TITLE + " " + ph);
        } else {
            this.titleService.setTitle(text);
        }
    }

    savePostToDashboard(){
        if(!this.storageService.getUserId()){
            this.isCollapsedModal = false;
            this.MODAL_TITLE = MessageConfig.MODAL_TITLE_PHOTOSET;
            this.MODAL_TEXT = MessageConfig.MODAL_TEXT_NOT_LOGGED_IN;
            this.loginNeeded = true;
            return;
        }

        if(!this.isPostAlreadySaved){
            this.isCollapsedModal = true;
            this.userDashboardService.savePostTODashboard(this.postDetailsDTO.id, this.storageService.getUserId());
            this.isPostAlreadySaved = true;
            this.SAVED_POST = MessageConfig.DETAILS_POST_SUCCESSFULLY_SAVED;
        }

    }

    saveSinglePhoto(photo:string){
        if(!this.storageService.getUserId()){
            this.isCollapsedModal = false;
            this.MODAL_TITLE = MessageConfig.MODAL_TITLE_SINGLE_PHOTO;
            this.MODAL_TEXT = MessageConfig.MODAL_TEXT_NOT_LOGGED_IN;
            this.loginNeeded = true;
            return;
        }
            this.userDashboardRestClient.savePhotoToUserDashboard(this.userDashboardService.generatePhotoSaveDTOForUser(this.storageService.getUserId(), photo,
                                                                                                                        this.postDetailsDTO.ph, this.postDetailsDTO.md,
                                                                                                                            this.postDetailsDTO.id))
                .subscribe(result =>{
                    this.single_photo_text_img_url = photo;
                    if(result){
                        this.single_post_text = MessageConfig.DETAILS_SAVED_PHOTO_IN_DASHBOARDS;
                    } else {
                        this.single_post_text = MessageConfig.DETAILS_ALREADY_SAVED_PHOTO_IN_DASHBOARDS;

                    }
                }
            );

    }


    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}