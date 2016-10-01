import {Post} from './../objects/post';
import {ElasticClient} from './http/elastic.client.service';
import {YFPostHandler} from './handlers/yf.post.handlers';
import {PostWorkflow} from './workflow/post.workflow';
import {PostForSave} from './../objects/user/dtos/post.for.save.dto'
import {PostListDTO} from './../objects/dtos/postListDTO';


import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http:Http, private elasticClient:ElasticClient, private yfPostHandler:YFPostHandler, private postWorkflow:PostWorkflow){}


    findYFPostById(id:any):Observable<Post[]> {
        return this.http.get(this.elasticClient.findNativeById(id))
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

    loadMoreSavedPost(from:number, to:number):Observable<Post[]> {
        return this.http.get(this.elasticClient.getNewYFNative(from, to))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);
    }

    getAllPostIdsFromSavedPost(savedPosts:PostForSave[]){
        let post_ids:number[] = [];
        for(let saved of savedPosts) {
            post_ids.push(saved.post_id);
        }
        return post_ids;
    }

    getPostsByMultipleIds(savedPosts:any[]){
        let body:any;
        let ids= this.getAllPostIdsFromSavedPost(savedPosts);

        body = JSON.stringify({ query: {constant_score : {filter : {terms :{id : ids} }}} }, null, ' ');


        return this.http.post(ElasticClient.NATIVE_SETS_INDEX, body, this.options)
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);
        }



}
