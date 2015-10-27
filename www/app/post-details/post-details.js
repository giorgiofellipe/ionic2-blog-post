import {IonicApp, Page, NavController, NavParams} from 'ionic/ionic';


@Page({
  templateUrl: 'app/post-details/post-details.html'
})
export class PostDetails {

  constructor(app: IonicApp, nav: NavController, navParams: NavParams) {
    this.nav = nav;
    // If we navigated to this page, we will have an item available as a nav param
    this.post = navParams.get('post');
  }

}

