import { Response } from '@angular/http';
import {Post} from './../../objects/post';


export interface HandlerInterface {
    handleError(error:any);
    extractData(res:Response, posts:Post[]);
}