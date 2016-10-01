import { Injectable }     from '@angular/core';
import {PostForSave} from './../../objects/user/dtos/post.for.save.dto'
import {PhotoForSave} from './../../objects/user/dtos/photo.for.save.dto'
import {DateTimeService} from './../core/date.time.service'
import {UserDashboardRestClient} from './../http/user.dashboard.rest.client'
import {Observable} from 'rxjs/Observable';
import {Post} from './../../objects/post';
import {ElasticClient} from './../http/elastic.client.service';
import {YFPostHandler} from './../handlers/yf.post.handlers';
import { Http, Response } from '@angular/http';
import {SinglePhotoListDTO} from './../../objects/dtos/single.photo.list.dto'





@Injectable()
export class UserDashboardService{

    private postForSave:PostForSave;

    constructor(private http:Http, private dateTimeService:DateTimeService, private elasticClient:ElasticClient, private userDashboardRestClient:UserDashboardRestClient, private yfPostHandler:YFPostHandler){}

    savePostTODashboard = (post_id:number, user_id:number) => {
        if(!post_id && !user_id) {return null;}


        this.postForSave = new PostForSave(post_id, user_id,  this.dateTimeService.getCurrentDateTime(), "");
        return this.userDashboardRestClient.savePostToUserDashboard(this.postForSave).subscribe(savedPost => savedPost);


    }

    generatePhotoSaveDTOForUser= (user_id:number, photo_url:string, ph:string, md:string,post_id:number) => new PhotoForSave(photo_url, user_id, "", "", ph, md, post_id);

    getSavedPosts(from:number, size:number, userId:number):Observable<Post[]> {
        return this.http.get(this.elasticClient.getSavedUserPosts(from, size, userId))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);

    }

    getSavedPhotos(from:number, size:number, userId:number):Observable<SinglePhotoListDTO[]> {
        return this.http.get(this.elasticClient.getSavedUserPhotos(from, size, userId))
            .map(this.yfPostHandler.extractSinglePhotosData)
            .catch(this.yfPostHandler.handleError);

    }

}