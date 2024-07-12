import { Component } from '@angular/core';
import { AutoClickDirective } from '../auto-click/auto-click.directive';
import { ClickStyleDirective } from '../click-style/click-style.directive';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [AutoClickDirective,ClickStyleDirective],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SideBar {
  public anchors:any ;
  ngOnInit(): void {
    this.anchors = document.querySelectorAll('div.navbar-content a')
    // console.log(this.anchors)
  }

}
