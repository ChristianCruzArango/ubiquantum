import { Component, OnInit } from '@angular/core';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ActionSheetController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { PopComponent } from '../shared/pop/pop.component';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  creditosB:boolean = false;

  constructor(private socialSharing: SocialSharing,
              public  actionSheetController: ActionSheetController,
              private popoverCtrl:PopoverController) { }

  ngOnInit() {
  }

  async lanzarMenu(){     


     const actionSheet = await this.actionSheetController.create({      
       buttons: [{
         text: 'Compartir',
         icon: 'share',
         cssClass:'action-dark',
         handler: () => {
           console.log('Share clicked');
           this.socialSharing.share(
             "Descarga nuestra aplicación en las tiendas oficiales como Ubiqueantum",
             "",
             "",
            "wwww.ubiqueantum.com"
           );
         }
       }]
     });
     await actionSheet.present();
     
   }


   creditos(){

    this.creditosB = true;

      setTimeout(() => {
        this.creditosB = false;
      }, 5000);
      
   }



}
