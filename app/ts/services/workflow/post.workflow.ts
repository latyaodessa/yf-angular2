import {Post} from './../../objects/post';
import {Photo} from './../../objects/photo';
import {PostDetailsDTO} from './../../objects/dtos/postDetailsDTO';
import {PostListDTO} from './../../objects/dtos/postListDTO';
import { Injectable}     from '@angular/core';
import {SetupConfig} from './../../config/setup.config';

@Injectable()
export class PostWorkflow {

    public static REGEX_CLEAN_TAG = /#.*@youngfolks/i;

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


    postToPostListDTO(posts:Post[]){
        let postListDto:PostListDTO[] = [];
        for(let post of posts){

            let text:string = this.cleanTag(post.text);

            if(SetupConfig.TRANSLIT){
                postListDto.push(new PostListDTO(post.id,post.md_translit,post.ph_translit,text, this.findThumbnail(post)));
            } else {
                postListDto.push(new PostListDTO(post.id,post.md,post.ph,text, this.findThumbnail(post)));
            }
        }
        return postListDto;
    }

    cleanTag(text:string){
        return text.replace(PostWorkflow.REGEX_CLEAN_TAG, "");
    }
    postToPostDetailsDTO(post:Post){
        let text:string = this.cleanTag(post.text);

        if(SetupConfig.TRANSLIT){
            return new PostDetailsDTO(post.id, text, post.md_translit, post.ph_translit, null);
        } else {
            return new PostDetailsDTO(post.id, text, post.md, post.ph, null);
        }

    }

    findSuggestedPosts(posts:Post[], currentPostId:number, size:number){
        let postListDTO:PostListDTO[] = [];
            for(let post of posts){
                if(post.id != currentPostId && postListDTO.length<size){
                    let text:string = this.cleanTag(post.text);

                    if(SetupConfig.TRANSLIT){
                        postListDTO.push(new PostListDTO(post.id,post.md_translit,post.ph_translit,text, this.findThumbnail(post)));
                    } else {
                        postListDTO.push(new PostListDTO(post.id,post.md,post.ph,text,this.findThumbnail(post)));
                    }
                }
            }
        return postListDTO;
    }


}
