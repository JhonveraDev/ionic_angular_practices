import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {

  constructor(public loadingController: LoadingController) { }

  ngOnInit() {
  }

  personajes:string[]=['Razor','Quiqui','Noelle','Prota']

  doReorder(event:any){
    console.log(event)
    
    const itemMover= this.personajes.splice(event.detail.from,1)[0];
    this.personajes.splice(event.detail.to,0,itemMover)
    event.detail.complete()
    console.log(this.personajes)
  }

  
  enable:boolean=true

    async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  

}
