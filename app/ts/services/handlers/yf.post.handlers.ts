import {HandlerInterface} from "./handlers.interface";
import {Observable} from 'rxjs/Observable';
import { Response } from '@angular/http';
import {Post} from './../../objects/post';
import {SinglePhotoListDTO} from './../../objects/dtos/single.photo.list.dto'



export class YFPostHandler implements HandlerInterface{
    private posts:Post[]
    private post:Post;
    private singlePhotoListDTO:SinglePhotoListDTO[];

    extractData(res:Response) {
        this.posts = [];

        res.json().hits.hits.forEach((entry) => {
            this. posts.push(entry._source);
        });

        return this.posts || {};
    }

    extractSinglePhotosData(res:Response){
        this.singlePhotoListDTO = [];
        res.json().hits.hits.forEach((entry) => {
            this.singlePhotoListDTO.push(entry._source);
        });

        return this.singlePhotoListDTO;
    }

    handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead TO DO TO SERVER
        return Observable.throw(errMsg);
    }
}