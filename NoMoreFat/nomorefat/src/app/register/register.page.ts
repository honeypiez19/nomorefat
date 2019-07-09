import {Component, OnInit} from '@angular/core';

import {HTTP} from '@ionic-native/http/ngx';
import {Router} from '@angular/router';
import {DatapassService} from '../datapass.service';


@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

    // ----- ข้อมูลผู้ใช้ -----
    Rusername; // ชื่อผู้ใช้
    Remail; // อีเมล
    Rpassword; // รหัสผ่าน
    Rdate = new Date(); // วันเดือนปี
    Rgender = 'm'; // เพศ
    Rweight = '58'; // น้ำหนัก
    Rheight = '165'; // ส่วนสูง

    // ----- เป้าหมาย -----
    RloseWeight; // ลดน้ำหนัก
    RgainWeight = 'Gainweight'; // เพิ่มน้ำหนัก
    RfixedWeight; // น้ำหนักคงที่

    // ----- กิจกรรม -----
    RveryLittle = '1.2'; // น้อยมาก
    Rlittle; // น้อย
    Rmiddle; // ปานกลาง
    Rheavy; // หนัก
    RveryHeavy; // หนักมาก

    RdesiredWeight = '5'; // น้ำหนักที่ต้องการเพิ่ม/ลด
    RWeightThatWillBeReducedEachWeek = '0.33'; // น้ำหนักที่จะลดลงในแต่ละสัปดาห์

    RfacebookID;

    // ส่ง user.id จากหน้า login ของ FB มาหน้า Regis
    /// ตัวแปรซ้ายใน Service ขวาของแอป

    constructor(private http: HTTP, private  router: Router, private datapass: DatapassService) {
    }

    ngOnInit() {
        this.RfacebookID = this.datapass.myData;
        console.log(this.RfacebookID);
        console.log('===>>' + JSON.stringify(this.RfacebookID));
    }

    register() {

        // const {name, email, password, gender, date, weight} = this;

        const postdata = {
            username: this.Rusername, email: this.Remail, password: this.Rpassword
            , date: this.Rdate, gender: this.Rgender
            , weight: this.Rweight, hight: this.Rheight

            // เป้าหมาย
            , distination: this.RgainWeight

            // กิจกรรม
            , activities: this.RveryLittle

            // น้ำหนักที่ต้องการเพิ่ม/ลด
            , desiredweight: this.RdesiredWeight

            // น้ำหนักที่จะลดลงในแต่ละสัปดาห์
            , WeightThatWillBeReducedEachWeek: this.RWeightThatWillBeReducedEachWeek

            // this.Rlittle
            // this.Rmiddle
            // this.Rheavy
            // this.RveryHeavy

        };
        this.http.setDataSerializer('json');

        console.log('===>>' + JSON.stringify(postdata));
        this.http.post('http://nofat.msuproject.net/api/register', postdata, {}).then(value => {

            console.log('xxxxxx' + this.Rweight);
            console.log('xxxxxx' + this.Rheight);
            console.log('xxxxxx' + this.RveryLittle);
            console.log('xxxxxx' + this.RgainWeight);
            console.log('xxxxx' + this.RdesiredWeight);
            console.log('xxxxx' + this.RWeightThatWillBeReducedEachWeek);

            console.log('xxxxxx ' + value.data);

            // ส่งค่า
            this.datapass.username = this.Rusername;
            this.datapass.email = this.Remail;
            this.datapass.password = this.Rpassword;



            if (this.Rusername !== null && this.Remail !== null && this.Rpassword !== null
                && this.Rweight !== null && this.Rheight !== null) {
                if (this.Rgender === 'f' || this.Rgender === 'm' && this.RveryLittle === '1.2' && this.RgainWeight === this.RgainWeight
                    && this.RWeightThatWillBeReducedEachWeek === '0.33' && this.RdesiredWeight === '5') {
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
