import {Component, OnInit} from '@angular/core';

import {HTTP} from '@ionic-native/http/ngx';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

    Rusername; // ชื่อผู้ใช้
    Remail; // อีเมล
    Rpassword; // รหัสผ่าน
    Rdate; // วันเดือนปี
    Rgender; // เพศ
    Rweight; // น้ำหนัก
    Rheight; // ส่วนสูง

    // ----- เป้าหมาย -----
    RloseWeight; // ลดน้ำหนัก
    RgainWeight; // เพิ่มน้ำหนัก
    RfixedWeight; // น้ำหนักคงที่

    RdesiredWeight; // น้ำหนักที่ต้องการเพิ่ม/ลด

    // ----- กิจกรรม -----
    RveryLittle; // น้อยมาก
    Rlittle; // น้อย
    Rmiddle; // ปานกลาง
    Rheavy; // หนัก
    RveryHeavy; // หนักมาก

    // public form = [
    //     { val: 'ลดน้ำหนัก', isChecked: true },
    //     { val: 'เพิ่มน้ำหนัก', isChecked: false },
    //     { val: 'น้ำหนักคงที่', isChecked: false }
    // ];

    constructor(private http: HTTP, private  router: Router) {
    }

    ngOnInit() {
    }

    register() {

        // const {name, email, password, gender, date, weight} = this;

        const postdata = {
            Rusername: this.Rusername, Remail: this.Remail, Rpassword: this.Rpassword
            , Rdate: this.Rdate, Rgender: this.Rgender, Rweight: this.Rweight, Rheight: this.Rheight
            , RfixedWeight: this.RfixedWeight, RdesiredWeight: this.RdesiredWeight, RveryLittle: this.RveryLittle
            , Rlittle: this.Rlittle, Rmiddle: this.Rmiddle, Rheavy: this.Rheavy, RveryHeavy: this.RveryHeavy
        };
        this.http.setDataSerializer('json');

        console.log('===>>' + JSON.stringify(postdata));
        this.http.post('http://nofat.msuproject.net/api/register', postdata, {}).then(value => {

            console.log('xxxxxx ' + value.data);

            if (this.Rusername !== '' && this.Remail !== '' && this.Rpassword !== '' && this.Rdate !== '' && this.Rweight !== '') {
                if (this.Rgender === 'F' || this.Rgender === 'M') {
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
