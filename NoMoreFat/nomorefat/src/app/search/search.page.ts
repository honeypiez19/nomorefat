import {Component, OnInit} from '@angular/core';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

    name;
    listName;

    constructor(private http: HTTP) {
    }

    ngOnInit() {

    }

    searchMenu() {

        const postdata = {name: this.name};
        this.http.setDataSerializer('json');

        this.http.post('http://nofat.msuproject.net/api/search', postdata, {}).then(value => {

            console.log('zzzzz' + value.data);

        }).catch(reason => {

        });


    }
}
