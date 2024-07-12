import { Component } from '@angular/core';
import aboutData from '../../../data/about.json'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class About {
  data = aboutData.text
}
