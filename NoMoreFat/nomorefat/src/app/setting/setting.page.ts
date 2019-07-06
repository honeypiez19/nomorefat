import {Component, OnInit} from '@angular/core';
import {DatapassService} from '../datapass.service';

@Component({
    selector: 'app-setting',
    templateUrl: './setting.page.html',
    styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

    myValue;

    constructor(private datapass: DatapassService) {
    }

    ngOnInit() {

        // เอาข้อมูลจาก Service ไปใส่ใน myValue
        this.myValue = this.datapass.myData;
        console.log(this.myValue);
    }

    setting() {
    }
}
