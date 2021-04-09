import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menumeasurement',
  templateUrl: './menumeasurement.page.html',
  styleUrls: ['./menumeasurement.page.scss'],
})
export class MenumeasurementPage implements OnInit {

  param = "";
  param2 = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.param = this.route.snapshot.paramMap.get('id')
    this.param2 = this.route.snapshot.paramMap.get('name')
  }

}
