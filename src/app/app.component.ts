import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  config: any;
  fullpage_api: any;
  activePage: number;

  constructor() {
    // for more details on config options please visit fullPage.js docs
    this.config = {
      // fullpage options
      licenseKey: null,
      anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage"],
      menu: "#menu",
      slidesNavigation: true,
      continuousVertical: true,
      afterLoad: (origin, destination) => {
        console.log(destination);
        this.activePage = destination.index;
      },
    };
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }
}
