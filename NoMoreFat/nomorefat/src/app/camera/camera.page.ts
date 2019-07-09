import {Component, OnInit} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {Router} from '@angular/router';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
    selector: 'app-camera',
    templateUrl: './camera.page.html',
    styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

    image;

    imgData = {imageB64: ''};
    // public getImage: any;
    // public base64Image: string;
    private base64: any;

    constructor(private camera: Camera, private router: Router, private http: HTTP) {
    }

    ngOnInit() {
        this.image = [];
    }

    takePhoto() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            // sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(value => {
            this.image = 'data:image/jpeg;base64,' + value;

            // console.log(value);
        }).catch(reason => {

        });
    }

    openGallery() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(value => {
            this.image = 'data:image/jpeg;base64,' + value;
            this.base64 = value;
            // console.log(value);
        }).catch(reason => {

        });
    }

    uploadImage() {

        const spilt = this.image.split('');
        console.log('xxxx' + spilt);

        const postdata = {img: this.base64};
        console.log('xxxxxx' + this.base64);

        this.http.setDataSerializer('json');
        console.log(JSON.stringify(postdata));

        this.http.post('http://203.150.243.38:8000/prediction',
            postdata, {}).then(value => {
            console.log(value.data);
            alert('ไม่บอกหรอกว่าอะไร :P');

        }).catch(reason => {
            console.log(reason);
        });


    }
}
