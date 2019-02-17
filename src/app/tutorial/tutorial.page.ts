import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, IonSlides } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {
  showSkip = true;
  @ViewChild('slides') slides: IonSlides;
  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public storage: Storage
  ) { }

  ngOnInit() { }
  startApp() {
    this.storage.get('hasLoggedIn')
      .then((hasLoggedIn) => {
        this.navCtrl.navigateRoot(hasLoggedIn ? "/home" : "/login").then(() => {
          this.storage.set('hasSeenTutorial', 'true');
        })
      });
  }
  onSlideChangeStart(slider: IonSlides) { }

  ionViewWillEnter() {
    this.slides.update();
  }

  ionViewDidEnter() {
    this.menu.enable(false);
  }

  ionViewDidLeave() {

    this.menu.enable(true);
  }


}
