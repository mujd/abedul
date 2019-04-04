import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
declare function init_plugins();
@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"]
})
export class CarouselComponent implements OnInit {
  public _router: any;

  constructor(private router: Router) {
    this._router = router;
  }

  ngOnInit() {
    init_plugins();
  }
}
