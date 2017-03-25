import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: '<create-component></create-component>',
  templateUrl: './create.component.html',
   styleUrls: ['./create.component.css']
})
export class CreateComponentClass {
    constructor(private af: AngularFire){
        // af.database.list('/teams').subscribe(data => {
        //      console.log(data);
        // });
    }
    create(formData) {
         if(formData) {
        console.log(formData);
        this.af.auth.createUser({
            email: formData.email,
            password: formData.passwd
        }).then(
            (success) => {
                const usersList = this.af.database.object('users/' + success.uid);
                usersList.set(formData)
                    .then((snap) => {
                        console.log(snap);
                    });
        }).catch(
            (err) => {
            console.log(err);
        });
        }
    }
}
