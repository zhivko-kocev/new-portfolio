import {Component, OnInit, HostListener} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SideBar} from './components/sidebar/sidebar.component';
import {Home} from './components/home/home.component';
import {About} from './components/about/about.component';
import {Contact} from './components/contact/contact.component';
import {Blog} from './components/blog/blog.component';
import {Resume} from './components/resume/resume.component';
import {CommonModule, ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideBar, Home, Contact, About, Blog, Resume, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  showScrollToTop = false;

  constructor(private scroll: ViewportScroller) {
  }

  ngOnInit(): void {
    this.scroll.scrollToAnchor('home');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showScrollToTop = yOffset > 100;
  }

  scrollToTop(): void {
    this.scroll.scrollToAnchor('home')
  }
}
