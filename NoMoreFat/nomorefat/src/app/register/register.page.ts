import {Component, OnInit} from '@angular/core';

import {HTTP} from '@ionic-native/http/ngx';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

    username = '';
    email = '';
    password = '';
    date = '';
    gender = '';
    weight = '';
    height = '';

    constructor(private http: HTTP, private  router: Router) {
    }

    ngOnInit() {
    }

    register() {

        // const {name, email, password, gender, date, weight} = this;

        const postdata = {
            name: this.username, email: this.email, password: this.password
            , date: this.date, gender: this.gender, weight: this.weight, height: this.height
        };
        this.http.setDataSerializer('json');

        console.log('===>>' + JSON.stringify(postdata));
        this.http.post('http://nofat.msuproject.net/api/register', postdata, {}).then(value => {

            console.log('xxxxxx ' + value.data);

            if (this.username !== '' && this.email !== '' && this.password !== '' && this.date !== '' && this.weight !== '') {
                if (this.gender === 'F' || this.gender === 'M') {
                    alert('สมัครสมาชิกเรียบร้อย !');
                    this.router.navigateByUrl('menu');
                }
            } else {
                alert('กรุณาตรวจสอบความถูกต้อง !');
            }

        }).catch(reason => {
            console.log(reason);
        });


    }
}
