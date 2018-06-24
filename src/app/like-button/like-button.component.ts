import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent implements OnInit {
  numLikes: number;

  liked: boolean = false;

  likeClick()=> {
    numLikes = numLikes + 1;
    liked = true;
  }

  retractLike()=> {
    numLikes = numLikes - 1;
    liked = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
