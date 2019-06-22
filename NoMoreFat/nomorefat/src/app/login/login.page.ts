import {Component, OnInit} from '@angular/core';

import {HTTP} from '@ionic-native/http/ngx';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    email;
    password;

    constructor(private http: HTTP, private  router: Router) {
    }

    login() {

        const postdata = {email: 'Ton', password: 'ton'};
        this.http.setDataSerializer('json');
        this.http.post('http://nofat.msuproject.net/api/login', postdata, {}).then(value => {

            console.log(value.data);

            // if (this.data.length === 1) {
            //     this.router.navigateByUrl('menu');
            // } else {
            //     alert('email or password incorrect');
            // }
        }).catch(reason => {
            console.log(reason);
        });
    }

    ngOnInit(): void {
    }
}
