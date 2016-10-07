import { Component, OnInit } from '@angular/core';
import {SinglePhotoListDTO} from './../../objects/dtos/single.photo.list.dto'
import {UserDashboardService} from './../../services/dashboard/user.dashboard.service';
import {StorageService} from './../../services/authorization/storage.service'
import {PostService} from './../../services/post.service';
import { CollapseDirective } from 'ng2-bootstrap/components/collapse';
import {MessageConfig} from './../../config/message.properties';
import {SetupConfig} from './../../config/setup.config'
import { ROUTER_DIRECTIVES } from '@angular/router';
import {UserDashboardRestClient} from './../../services/http/user.dashboard.rest.client'






@Component({
    selector: 'saved-photos-dashboard',
    templateUrl: 'app/ts/templates/user/saved.photos.dashboard.component.html',
    providers: [PostService, StorageService,UserDashboardService,UserDashboardRestClient ],
    directives: [ROUTER_DIRECTIVES, CollapseDirective]
})

export class SavedPhotosDashboardComponent implements OnInit {
    public title = MessageConfig.SAVED_PHOTOS_TITLE;
    public single_route = SetupConfig.SINGLE_POST_ROUTE;
    public NO_SAVED_PHOTOS = MessageConfig.NO_SAVED_PHOTOS;

    public OPEN_SINGLE_POST = MessageConfig.OPEN_SINGLE_POST;
    private singlePhotoListDTO:SinglePhotoListDTO[] = [];
    public POPUP_PHOTO:string;
    public POPPUP_POST_ID:number;
    public SHOW_ALL_PICS_FULL = MessageConfig.SHOW_ALL_PICS_FULL;
    public loadMorePostPossible:boolean = true;

    public isCollapsedModal:boolean = true;
    public static loadInitAmount:number = 6;
    public static loadMoreAmount:number = 12;
    public static loadOneAmount:number = 1;


    private contentExistence=true;

    constructor(private userDashboardService:UserDashboardService, private storageService:StorageService, private postService:PostService, private userDashboardRestClient:UserDashboardRestClient){}

    ngOnInit() {
        this.getSavedPhotos(SavedPhotosDashboardComponent.loadInitAmount);
    }

    private getSavedPhotos(size:number){
        this.userDashboardService.getSavedPhotos(0, size, this.storageService.getUserId()).subscribe(savedPhotos => {
            this.singlePhotoListDTO = savedPhotos;
            console.log(  this.singlePhotoListDTO);

            this.contentExistence = this.isContentExist(savedPhotos.length);

            this.isLoadMorePossible(savedPhotos.length ,SavedPhotosDashboardComponent.loadInitAmount );

        });
    }

    private isContentExist = (count:number) => {
        return count > 0? true : false;
    }

    deleteSavedPhoto(savedPhoto_id:number){
        this.singlePhotoListDTO.splice(this.singlePhotoListDTO.findIndex(function(savedPhoto){
            return savedPhoto.id == savedPhoto_id;
        }),1)

        this.userDashboardRestClient.deletePhotoById(this.storageService.getUserId(), savedPhoto_id).subscribe( res => {
            this.loadOne();
            this.contentExistence = this.isContentExist(this.singlePhotoListDTO.length);
        });

    }

    private openLargeImage(photo_url:string, post_id:number){
        this.POPUP_PHOTO = photo_url;
        this.POPPUP_POST_ID = post_id;
        this.isCollapsedModal = false;
    }

    loadOne(){
        this.userDashboardService.getSavedPhotos(this.singlePhotoListDTO.length+1, SavedPhotosDashboardComponent.loadOneAmount, this.storageService.getUserId()).subscribe(savedPhotos => {
            this.singlePhotoListDTO = this.singlePhotoListDTO.concat(savedPhotos);
        });
    }

    loadMore(){
        this.userDashboardService.getSavedPhotos(this.singlePhotoListDTO.length, SavedPhotosDashboardComponent.loadMoreAmount, this.storageService.getUserId()).subscribe(savedPhotos => {
            this.singlePhotoListDTO = this.singlePhotoListDTO.concat(savedPhotos);
            this.isLoadMorePossible(savedPhotos.length ,SavedPhotosDashboardComponent.loadMoreAmount );
        });
    }
    private isLoadMorePossible(length:number,amount:number){
        if(length < amount) {this.loadMorePostPossible = false;}
    }

}