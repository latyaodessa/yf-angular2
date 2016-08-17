import {Post} from './../objects/post';
import {ElasticClient} from './http/elastic.client.service';
import {YFPostHandler} from './handlers/yf.post.handlers'

import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostService {
    constructor(private http:Http, private elasticClient:ElasticClient, private yfPostHandler:YFPostHandler){}

    getYFNativeNew(from:number, size:number):Observable<Post[]> {
        return this.http.get(this.elasticClient.getNewYFNative(from, size))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);

    }
    getYFNativeTop(from:number, size:number):Observable<Post[]> {
        return this.http.get(this.elasticClient.getYFNativeTop(from, size))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);

    }
    loadMoreNative(from:number):Observable<Post[]> {
        return this.http.get(this.elasticClient.getNewYFNative(from, 8))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);
    }


    getYFSetsNew(from:number, size:number):Observable<Post[]> {
        return this.http.get(this.elasticClient.getNewYFSets(from, size))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);
    }

    getYFSetsTop(from:number, size:number):Observable<Post[]> {
        return this.http.get(this.elasticClient.getYFSetsTop(from, size))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);

    }
    loadMoreSets(from:number):Observable<Post[]> {
        return this.http.get(this.elasticClient.getNewYFSets(from, 8))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);
    }

}
