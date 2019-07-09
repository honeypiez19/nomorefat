import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DatapassService {

    username: any;
    email: any;
    password: any;
    facebookID: any;

    public myData;



    constructor() {

    }
}
