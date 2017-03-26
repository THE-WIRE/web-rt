import {Component} from '@angular/core'
import {nodemailer} from 'nodemailer/lib/nodemailer'
import {AngularFire, FirebaseListObservable} from 'angularfire2'


@Component({
    selector: "<join-component></join-component>",
    templateUrl: './join.component.html'
})
export class JoinComponentClass {

    // items: FirebaseListObservable<any>;
    // constructor(af: AngularFire) {
    //     this.items = af.database.list('/users')
    // }

    // userExistsCallBack(uid, exists){
    //     if(exists){
    //         alert('user' + uid + 'exists!');
    //     } else {
    //         alert('user' + uid + 'does not exist!');
    //     }
    // }

    // checkIfUserExists(uid){
    //    if(uid == member_uid){
        
    //    }
    // }
}