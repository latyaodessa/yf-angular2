import {HandlerInterface} from "./handlers.interface";
import {Observable} from 'rxjs/Observable';
import { Response } from '@angular/http';
import {Post} from './../../objects/post';


export class YFPostHandler implements HandlerInterface{
    private posts:Post[]

    extractData(res:Response) {
        this.posts = [];

        res.json().hits.hits.forEach((entry) => {
            this. posts.push(entry._source);
        });

        return this.posts || {};
    }
    handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead TO DO TO SERVER
        return Observable.throw(errMsg);
    }
}