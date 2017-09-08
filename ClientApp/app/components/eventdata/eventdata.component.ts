import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'eventdata',
    templateUrl: './eventdata.component.html'
})
export class EventDataComponent {
    public events: any;

    constructor(http: Http, @Inject('ORIGIN_URL') originUrl: string) {
        http.get(originUrl + '/api/EventData/GetEventData').subscribe(result => {
            this.events = result.json() as EventData[];
        });
    }
}

interface EventData {
    id: any;
    name: any;
    date: any;
    time: any;
}