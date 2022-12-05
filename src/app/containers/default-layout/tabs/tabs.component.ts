import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit
} from "@angular/core";

import TabComponent from "./tab.component";

@Component({
  selector: "ngx-tabs",
  template: `
    <div>
        <div class="ex-btn-list" data-aos="fade-up" data-aos-delay="300">
            <button href="" *ngFor="let tab of tabs" class="ex-btn ex-btn-primary" (click)="selectTab(tab)" [ngClass]="{'active': tab.active === true }">
              {{tab.tabTitle}}
            </button>
        </div>
        <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./../../../../styles.scss']
})
export default class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  constructor() {
    console.log(this.tabs);
  }

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter(tab => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach(tab => (tab.active = false));
    tab.active = true;
  }
}
