import {IonicApp, NavController, Page} from 'ionic/ionic';

@Page({
  templateUrl: 'app/post-form/post-form.html';
})
export class PostForm {
  constructor(app: IonicApp, nav: NavController) {
    this.nav = nav;
  }
}