import { Component } from '@angular/core';
import { StepperStep } from '@progress/kendo-angular-layout/dist/es2015/stepper/types';

@Component({
  selector: 'my-app',
  templateUrl: `app.component.html`,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public steps: Array<Partial<StepperStep>> = [
    { label: 'Account Info', date: new Date(),  type: 'add', icon: 'circle' },
    { label: 'Personal Info', date: new Date(), type: 'edit', icon: 'user' },
    { label: 'Payment Details', date: new Date(), type: 'delete', icon: 'cart' },
  ];
}
