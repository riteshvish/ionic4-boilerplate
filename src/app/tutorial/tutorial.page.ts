import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController, Slides } from '@ionic/angular';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


// import { Component,ViewChild } from '@angular/core';
// import { IonicPage, NavController, NavParams,MenuController, Slides } from '@ionic/angular';
//
//
// /**
//  * Generated class for the TutorialPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */
//
//  import { Storage } from '@ionic/storage';
//
// @IonicPage()
// @Component({
//   selector: 'app-tutorial',
//   templateUrl: './tutorial.page.html',
//   styleUrls: ['./tutorial.page.scss'],
// })
//
// export class TutorialPage {
//
//   showSkip = true;
//
//   @ViewChild('slides') slides: Slides;
//
//   constructor(
//     public navCtrl: NavController,
//     public menu: MenuController,
//     public storage: Storage
//   ) { }
//
//   startApp() {
//     // this.storage.get('hasLoggedIn')
//     //   .then((hasLoggedIn) => {
//     //     // this.navCtrl.setRoot(hasLoggedIn ? "HomePage" : "LoginPage").then(() => {
//     //       // this.storage.set('hasSeenTutorial', 'true');
//     //     })
//     //   });
//
//
//   }
//
//   onSlideChangeStart(slider: Slides) {
//     this.showSkip = !slider.isEnd();
//   }
//
//   ionViewWillEnter() {
//     this.slides.update();
//   }
//
//   ionViewDidEnter() {
//     // the root left menu should be disabled on the tutorial page
//     this.menu.enable(false);
//   }
//
//   ionViewDidLeave() {
//     // enable the root left menu when leaving the tutorial page
//     this.menu.enable(true);
//   }
//
// }
