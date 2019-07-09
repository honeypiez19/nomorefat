import {Component, OnInit} from '@angular/core';
import {DatapassService} from '../datapass.service';

@Component({
    selector: 'app-setting',
    templateUrl: './setting.page.html',
    styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

    Semail;
    Spassword;
    Sfacebook;

    constructor(private datapass: DatapassService) {
    }

    ngOnInit() {
        // เอาข้อมูลจาก Service ไปใส่ใน Semail
        this.Semail = this.datapass.myData;
        // เอาข้อมูลจาก Service ไปใส่ใน Spassword
        this.Spassword = this.datapass.myData;

        this.Sfacebook = this.datapass.myData;

        console.log('datapass' + JSON.stringify(this.datapass));
    }
    setting() {
    }
}
