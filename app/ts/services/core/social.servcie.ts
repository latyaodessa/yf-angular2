import {MessageConfig} from './../../config/message.properties'
declare const FB: any;

export class SocialService{

    public URL:string;
    public TITLE:string;
    public DESCRIPTION_ADDITON = MessageConfig.DESCRIPTION_ADDITON;

    initData(){
        //this.URL = document.URL;
        this.URL = "http://youngfolks.ru";
        this.TITLE = document.title;
    }

    getVkShareLink(img:string){

        this.initData();

        return "http://vk.com/share.php" +
            "?url=" + this.URL +
            "&title="+this.TITLE +
            "&description="+this.TITLE + " - " + this.DESCRIPTION_ADDITON +
            "&image=" + img +
            "&noparse=true";
    }

    getFbShareLink(img:string){
        this.initData();
        FB.ui(
            {
                method: 'feed',
                link: this.URL,
                picture: img,
                caption: this.TITLE,
                description: this.TITLE + " - " + this.DESCRIPTION_ADDITON
            }
        );
    }

    getTumblrLink(){
        this.initData();

        return 'http://www.tumblr.com/share?v=3' +
            '&u='+this.URL +
            '&t='+this.TITLE;

    }

}