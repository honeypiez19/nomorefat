import {Component, OnInit} from '@angular/core';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

    name: any[] = [];

    constructor(private http: HTTP) {
    }

    ngOnInit() {

    }

    search(event) {

        this.http.post('http://nofat.msuproject.net/api/search', {}, {}).then(value => {

            console.log(value);
            // this.name = value;
        }).catch(reason => {

        });


    }
}
