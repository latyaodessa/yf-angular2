import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import {Post} from './../objects/post';
import {ElasticClient} from './http/elastic.client.service';
import {YFPostHandler} from './handlers/yf.post.handlers';


@Injectable()
export class PostSearchService {

    constructor(private http:Http, private elasticClient:ElasticClient, private yfPostHandler:YFPostHandler){}

    findByText(from:number, size:number, textQuery:string):Observable<Post[]> {
        return this.http.get(this.elasticClient.findByText(from, size, textQuery))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);

    }

}