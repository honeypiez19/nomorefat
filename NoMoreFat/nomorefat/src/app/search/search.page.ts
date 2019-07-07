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

        console.log('===>>' + JSON.stringify(postdata));
        this.http.post('http://nofat.msuproject.net/api/search', postdata, {}).then(value => {

            let jsonData = JSON.parse(value.data);
            console.log(jsonData);
            this.listName = jsonData.data;
            console.log('zzzzz' + this.listName);

        }).catch(reason => {

        });


    }
}
