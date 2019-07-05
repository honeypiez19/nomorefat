import {Component, OnInit} from '@angular/core';

import {HTTP} from '@ionic-native/http/ngx';
import {Router} from '@angular/router';
import {Facebook, FacebookLoginResponse} from '@ionic-native/facebook/ngx';
import {DatapassService} from '../datapass.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    email;
    password;
    name;

    // user: any = {};

    constructor(private http: HTTP,
                private  router: Router,
                private fb: Facebook,
                private datapass: DatapassService) {
    }

    login() {

        // ส่งค่าที่ login ไป


        const postdata = {email: this.email, password: this.password};
        this.http.setDataSerializer('json');

        console.log('===>>' + JSON.stringify(postdata));
        this.http.post('http://nofat.msuproject.net/api/login', postdata, {}).then(value => {

            console.log('xxxxxx ' + value.data);
            this.datapass.myData = {email: this.email};
            this.router.navigateByUrl('menu');
            // if (this.data.length === 1) {
            //     this.router.navigateByUrl('menu');
            // } else {
            //     alert('email or password incorrect');
            // }
        }).catch(reason => {
            console.log(reason);
        });
    }

    loginFacebook() {
        // Login with permissions
        this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
            .then((res: FacebookLoginResponse) => {

                // The connection was successful
                if (res.status === 'connected') {

                    // Get user ID and Token
                    let fb_id = res.authResponse.userID;
                    let fb_token = res.authResponse.accessToken;

                    // Get user infos from the API
                    this.fb.api('/me?fields=name,gender,birthday,email', []).then((user) => {

                        // Get the connected user details
                        // let gender = user.gender;
                        // let birthday = user.birthday;
                        const name = user.name;
                        const email = user.email;

                        console.log('=== USER INFOS ===');
                        // console.log('Gender : ' + gender);
                        // console.log('Birthday : ' + birthday);
                        console.log('Name : ' + name);
                        console.log('Email : ' + email);

                        // => Open user session and redirect to the next page

                    });

                } else {

                    console.log('An error occurred...');

                }

            })
            .catch((e) => {
                console.log('Error logging into Facebook', e);
            });
    }

//     getData(access_token:string){
// let url =
//     }

    ngOnInit(): void {
    }


}
