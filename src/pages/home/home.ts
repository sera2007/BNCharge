import {Component, ViewChild} from '@angular/core';
import {AlertController, App, LoadingController, NavController, Slides} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public loginForm: any;
	public backgroundImage = 'assets/imgs/bg_home.png';

  constructor(
	  public loadingCtrl: LoadingController,
	  public alertCtrl: AlertController,
	  public app: App
  ) { }

  // Slider methods
  @ViewChild('slider') slider: Slides;
  @ViewChild('innerSlider') innerSlider: Slides;

	goToStart() {
		this.slider.slideTo(0);
	}

  	goToButtons() {
		this.slider.slideTo(1);
	}

	goToLogin() {
		this.slider.slideTo(2);
	}

	slideNext() {
		this.innerSlider.slideNext();
	}

	slidePrevious() {
		this.innerSlider.slidePrev();
	}

	presentLoading(message) {
		const loading = this.loadingCtrl.create({
			duration: 500
		});

		loading.onDidDismiss(() => {
			const alert = this.alertCtrl.create({
				title: 'Success',
				subTitle: message,
				buttons: ['Dismiss']
			});
			alert.present();
		});

		loading.present();
	}

	login() {
		this.presentLoading('Thanks for signing up!');
		// this.navCtrl.push(HomePage);
	}

	signup() {
		this.presentLoading('Thanks for signing up!');
		// this.navCtrl.push(HomePage);
	}
	resetPassword() {
		this.presentLoading('An e-mail was sent with your new password.');
	}

}
