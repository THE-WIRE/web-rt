import {Component} from '@angular/core'
import {nodemailer} from 'nodemailer/lib/nodemailer'
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2'

@Component({
    selector: "<join-component></join-component>",
    templateUrl: './join.component.html'
})
export class JoinComponentClass {
    uid
    item: FirebaseObjectObservable<any>;
    
    show: boolean = false;

    constructor (private af: AngularFire){              
    }



    join(formData, event: Event) {
        event.preventDefault();
         if(formData) {
            this.af.auth.createUser({
                email: formData.email,
                password: formData.passwd
            }).then(
                    (success) => {

                        this.af.database.object('team/' + formData.teamId).subscribe(data => {
                                this.item = data.team_name;
                                this.uid = success.uid;

                                 const usersList = this.af.database.object('users/' + success.uid);

                                    usersList.set({
                                        username: formData.username,
                                        email: formData.email,
                                        passwd: formData.passwd,
                                        teamName: this.item,
                                        teamId: formData.teamId
                                    }).then((snap) => {
                                            this.show = true;
                                }); 
            });
        })
    }
    }
}