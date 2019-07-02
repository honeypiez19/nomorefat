import {Component, OnInit} from '@angular/core';

import {HTTP} from '@ionic-native/http/ngx';
import {Router} from '@angular/router';
import {Facebook, FacebookLoginResponse} from '@ionic-native/facebook/ngx';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    email;
    password;
    user: any = {};

    constructor(private http: HTTP, private  router: Router, private fb: Facebook) {
    }

    login() {

        const postdata = {email: this.email, password: this.password};
        this.http.setDataSerializer('json');

        console.log('===>>' + JSON.stringify(postdata));
        this.http.post('http://nofat.msuproject.net/api/login', postdata, {}).then(value => {

            console.log('xxxxxx ' + value.data);
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
        this.fb.login(['public_profile', 'email'])
            .then((res: FacebookLoginResponse) => {
                if (res.status === 'connected') {
                    this.user.img = 'http://graph.facebook.com/' + res.authResponse.userID + '/picture?type=square';
                } else {
                    alert('Login Failed');
                }
                console.log('Logged into Facebook!', res);
            })
            .catch(e => console.log('Error logging into Facebook', e));
    }
//     getData(access_token:string){
// let url =
//     }

    ngOnInit(): void {
    }


}
