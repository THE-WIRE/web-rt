import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: '<create-component></create-component>',
  templateUrl: './create.component.html',
   styleUrls: ['./create.component.css']
})
export class CreateComponentClass {
    texty: any;
    linkGen: any;
    show: boolean = false;
    constructor(private af: AngularFire){
        // af.database.list('/active/kjLOGRTSOiTioVUJlJHBkjjJHJBD/code').subscribe(data => {
        //       this.texty = data;

    }

    create(formData) {
         if(formData) {
            formData.teamId = btoa(formData.teamName + Date.now());
            this.af.auth.createUser({
                email: formData.email,
                password: formData.passwd
            }).then(
                    (success) => {
                        const usersList = this.af.database.object('users/' + success.uid);

                        usersList.set(formData)
                            .then((snap) => {

                                    const teamList = this.af.database.object('team/' + formData.teamId + '/members');
                                    teamList.set({
                                            member_uid: success.uid
                                    });

                                    const teamNameObs = this.af.database.object('team/' + formData.teamId);
                                    teamNameObs.update({ team_name: formData.teamName });

                                    this.genLink(formData.email,formData.teamId);
                            });
            }).catch(
                (err) => {
                console.log(err);
            });
        }
    }

    genLink(email, hashKey){
        this.linkGen = hashKey;
        this.show = true;
        this.sendMail(email, 'TEAM TOKEN SHARING', 'THIS IS YOUR TEAM TOKEN : ' + hashKey);
    }

    sendMail = function(emailId,subject,message){
        window.open("mailto:"+ emailId + "?subject=" + subject+"&body="+message,"_self");
    }
}
