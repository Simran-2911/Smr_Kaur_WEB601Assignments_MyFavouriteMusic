import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Smr_Kaur_MyFavouriteMusic';
  theme='Music';
}
const Content = {
  id:1,
  description:1,
  creator: 1,
  type: 1,
  imgURL: 1,
  body: 1,
  tags: []
}