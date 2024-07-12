import { Component } from '@angular/core';
import experienceData from '../../../data/experience.json'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class Resume {
  experience = experienceData.data
}
