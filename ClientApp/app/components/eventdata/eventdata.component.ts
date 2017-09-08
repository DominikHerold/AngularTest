import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'eventdata',
    templateUrl: './eventdata.component.html'
})
export class EventDataComponent implements OnInit {
    ngOnInit(): void {
        this.http.get(this.originUrl + '/api/EventData/GetEventData').subscribe(result => {
            this.events = result.json() as IEventData[];
        }); }

    public events: any;

    constructor(private http: Http, @Inject('ORIGIN_URL') private originUrl: string) {
    }
}

interface IEventData {
    id: any;
    name: any;
    date: any;
    time: any;
}