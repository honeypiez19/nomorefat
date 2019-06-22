import {Component, OnInit} from '@angular/core';

import {HTTP} from '@ionic-native/http/ngx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  name = '';
  email = '';
  password = '';
  date = '';
  gender = '';

  constructor(private http: HTTP, private  router: Router) {
  }

  ngOnInit() {
  }

  register() {
    const {name, email, password, gender} = this;
    // อย่าลืม date

    if (name !== '' && email !== '' && password !== '') {
      if (gender === 'F' || gender === 'M') {
        alert('สมัครสมาชิกเรียบร้อย !');
        this.router.navigateByUrl('menu');
      }
    } else {
      alert('กรุณาตรวจสอบความถูกต้อง !');
    }

  }
}
