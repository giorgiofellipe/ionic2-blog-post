import {IonicApp, NavController, Page} from 'ionic/ionic';

import {PostDetails} from '../post-details/post-details';
import {PostForm} from '../post-form/post-form';

@Page({
  templateUrl: 'app/post-list/post-list.html'
})
export class PostList {
  constructor(app: IonicApp, nav: NavController) {
    this.nav = nav;
    this.posts = [
      {
        id: 1,
        title: 'Something really cool!',
        description: 'Oh my gosh! there goes some extra info...',
        image: 'post1.jpg'
      },
      {
        id: 2,
        title: 'This cat is awesome',
        description: 'It plays basketball nicely',
        image: 'post2.jpg'
      },
      {
        id: 3,
        title: 'These incredible guys',
        description: 'Take a look on what they did',
        image: 'post3.jpg'
      },
      {
        id: 4,
        title: 'Watta score!',
        description: 'See what this soccer player did tonight',
        image: 'post4.jpg'
      },
      {
        id: 5,
        title: 'I don\'t know',
        description: 'It really looks interesting...',
        image: 'post5.jpg'
      }
    ];
  }

  showPostDetail(post) {

    this.nav.push(PostDetails, {
      post: post
    });
  }

  showPostForm() {
    this.nav.push(PostForm);
  }
}