import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: '<create-component></create-component>',
  templateUrl: './create.component.html',
   styleUrls: ['./create.component.css']
})
export class CreateComponentClass {
    texty: any;
    constructor(private af: AngularFire){
        af.database.list('/active/kjLOGRTSOiTioVUJlJHBkjjJHJBD/code').subscribe(data => {
              this.texty = data;
        });
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
                            });
            }).catch(
                (err) => {
                console.log(err);
            });
        }
    }
}
