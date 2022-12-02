import { Component, Input } from "@angular/core";


@Component({
  selector: "ngx-tab",
  template: `
    <div [hidden]="!active">
      <ng-content></ng-content>
    </div>
  `
})

export default class TabComponent{
  @Input() tabTitle = '';
  @Input() active = false;
}
