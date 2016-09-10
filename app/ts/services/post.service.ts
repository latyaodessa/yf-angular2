import {Post} from './../objects/post';
import {ElasticClient} from './http/elastic.client.service';
import {YFPostHandler} from './handlers/yf.post.handlers';
import {PostWorkflow} from './workflow/post.workflow';

import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostService {
    constructor(private http:Http, private elasticClient:ElasticClient, private yfPostHandler:YFPostHandler, private postWorkflow:PostWorkflow){}


    findYFPostById(id:string):Observable<Post[]> {
        return this.http.get(this.elasticClient.findNativeById(id))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);

    }

    findByText(from:number, size:number, textQuery:string):Observable<Post[]> {
        return this.http.get(this.elasticClient.findByText(from, size, textQuery))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);

    }

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
    loadMoreNative(from:number, to:number):Observable<Post[]> {
        return this.http.get(this.elasticClient.getNewYFNative(from, to))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);
    }

//Categories LISTS
    getYFSilhouettesNew(from:number, size:number):Observable<Post[]> {
        return this.http.get(this.elasticClient.getYFSilhouettesNew(from, size))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);
    }

    getYFSetsNew(from:number, size:number):Observable<Post[]> {
        return this.http.get(this.elasticClient.getNewYFSets(from, size))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);
    }

    getYFSetsNativeNew(from:number, size:number):Observable<Post[]> {
        return this.http.get(this.elasticClient.getYFSetsNativeNew(from, size))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);
    }

    getYFSetsTop(from:number, size:number):Observable<Post[]> {
        return this.http.get(this.elasticClient.getYFSetsTop(from, size))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);

    }
    loadMoreSets(from:number, to:number):Observable<Post[]> {
        return this.http.get(this.elasticClient.getNewYFSets(from, to))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);
    }

    findPhotosForPostDetails(post:Post){
        return this.postWorkflow.findPhotosForPostDetails(post);
    }
    regexPostText(post:Post){
        return this.postWorkflow.regexPostText(post);
    }

    postToPostListDTO(posts:Post[]){
        return this.postWorkflow.postToPostListDTO(posts);
    }


}
