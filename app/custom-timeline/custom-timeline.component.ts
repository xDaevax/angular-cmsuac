import { Component, OnInit } from '@angular/core';
export type TimelineItem = {date: Date, label: string, type: string, subject: string};
@Component({
  selector: 'app-custom-timeline',
  templateUrl: './custom-timeline.component.html',
  styleUrls: ['./custom-timeline.component.scss']
})
export class CustomTimelineComponent implements OnInit {

  public data: TimelineItem[];
  constructor() { }

  public ngOnInit(): void {
    this.data = [
      {
        date: new Date(),
        label: 'Hello',
        type: 'add',
        subject: 'Test'
      },
      {
        date: new Date(),
        label: 'Test',
        type: 'Edit',
        subject: 'MCID'
      },
      {
        date: new Date(),
        label: 'Test 2',
        type: 'Delete',
        subject: 'Equipment Class'
      }
    ];
  }

}