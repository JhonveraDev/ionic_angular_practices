import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverinfoComponent } from 'src/app/components/popoverinfo/popoverinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverinfoComponent,
      event: ev,
      translucent: true
    });
    await popover.present();
    const {data} = await popover.onWillDismiss();
    console.log(data)
  }

  ngOnInit() {
  }

}
