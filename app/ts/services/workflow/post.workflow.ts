import {Post} from './../../objects/post';
import {Photo} from './../../objects/photo';
import {PostDetailsDTO} from './../../objects/dtos/postDetailsDTO';
import {PostListDTO} from './../../objects/dtos/postListDTO';
import { Injectable}     from '@angular/core';

@Injectable()
export class PostWorkflow {
    private regexTag = /^[^_]*@youngfolks/;
    private newLine = '\n';
    private regexIdbrackets = /\[id\d+\|/g;
    private regexClubbrackets = /\[club\d+\|/g;
    private backBracket = /\]/g;
    private regexWebSite = /(faceb(.*?)+$)|(www\.(.*?)+$)|(http:.(.*?)+$)|(http:.(.*?)+$)|(instag.(.*?)+$)/g;
    private phRegex = /(Ph:.*)|(Ph.*)/i;
    private mdRegex = /(Md:.*)|(Md.*)/i;

    constructor(){
    }

    findPhotosForPostDetails(post:Post){
        let photos:string[] = [];
        post.postPhoto.forEach(function(photo){
            if(photo.photo_2560) photos.push(photo.photo_2560);
            else if (photo.photo_1280) photos.push(photo.photo_1280);
            else if (photo.photo_807) photos.push(photo.photo_807);
            else if (photo.photo_604) photos.push(photo.photo_604);
        })
        return photos;
    }

     findThumbnail(post:Post){
        let photo = post.postPhoto[0];
            if(photo.photo_604) return photo.photo_604;
            else if (photo.photo_807) return photo.photo_807;
            else if (photo.photo_1280) return photo.photo_1280;

        return null;
    }

    regexPostText(post:Post){
        let postDetailsDTO:PostDetailsDTO = new PostDetailsDTO();
        postDetailsDTO.id = post.id;
        let cleanText = this.getCleanText(post.text);
        postDetailsDTO.text = cleanText;
        postDetailsDTO.ph = this.getPh(cleanText);
        postDetailsDTO.md = this.getMd(cleanText);

        return postDetailsDTO;
    }

    getCleanText(text:string){
        return text.replace(this.regexTag,"").replace(this.regexIdbrackets,"").replace(this.regexClubbrackets,"").replace(this.backBracket,"").replace(this.regexWebSite, "");

    }

    getPh(cleanText: string){
        let phText  = this.phRegex.exec(cleanText.replace(":",""));
        if(phText) {
            return phText[0].replace(/ph/gi, "").replace(":", "").trim();
        } else return null;
    }
    getMd(cleanText: string){
        let mdText  = this.mdRegex.exec(cleanText.replace(":",""));
        if(mdText) {
            return mdText[0].replace(/md/gi, "").replace(":", "").trim();
        } else return null;
    }

    postToPostListDTO(posts:Post[]){
        let postListDto:PostListDTO[] = [];
        for(let post of posts){
             let cleanText = this.getCleanText(post.text);
             postListDto.push(new PostListDTO(post.id,this.getMd(cleanText),this.getPh(cleanText),this.findThumbnail(post)));
        }
        return postListDto;
    }

    findSuggestedPosts(posts:Post[], currentPostId:number, size:number){
        let postListDTO:PostListDTO[] = [];
            for(let post of posts){
                if(post.id != currentPostId && postListDTO.length<size){
                    let cleanText = this.getCleanText(post.text);
                    postListDTO.push(new PostListDTO(post.id, this.getMd(cleanText), this.getPh(cleanText), this.findThumbnail(post)));
                }
            }
        return postListDTO;
    }

}
