import {GeneralUser} from './../../objects/user/general.user';
import {Injectable}     from '@angular/core';


@Injectable()
export class UserWorkflow {

    vkUserToGeneralUser = (id:number) =>  new GeneralUser(id, null, 'vk', false);
}