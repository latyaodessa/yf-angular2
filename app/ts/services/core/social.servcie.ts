import {MessageConfig} from './../../config/message.properties'
declare const FB: any;
import { Injectable}     from '@angular/core';


@Injectable()
export class SocialService{

    public URL:string;
    public TITLE:string;
    public DESCRIPTION_ADDITON = MessageConfig.DESCRIPTION_ADDITON;


    getVkShareLink(img:string){
        return "http://vk.com/share.php" +
            "?url=" + document.URL +
            "&title="+document.title +
            "&description="+document.title + " - " + this.DESCRIPTION_ADDITON +
            "&image=" + img +
            "&noparse=true";
    }

    getFbShareLink(img:string){
        FB.ui(
            {
                method: 'feed',
                link: document.URL,
                picture: img,
                caption: document.title,
                description: document.title + " - " + this.DESCRIPTION_ADDITON
            }
        );
    }

    getTumblrLink(){
        return 'http://www.tumblr.com/share?v=3' +
            '&u='+document.URL+
            '&t='+document.title;
    }

}