import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-here',
  templateUrl: './start-here.component.html',
  styleUrls: ['./start-here.component.scss']
})
export class StartHereComponent implements OnInit {
  constructor() { 
    this.checkMobile();

  }
  @HostListener('window:resize', ['$event'])
  @HostListener('window:load', ['$event'])
  onEvent(event:any) {
    this.checkMobile();
  }
  isMobile: boolean = false;
  isTab: boolean = false;

  ngOnInit(): void {
  }
  resize(){
    this.checkMobile();
  }

  checkMobile() {
    const windowWidth =
      window.screen.width < window.outerWidth
        ? window.screen.width
        : window.outerWidth;
    if (windowWidth < 480) {
      this.isMobile = true;
    } else if (windowWidth <= 1024 && windowWidth > 480) {
      this.isTab = true;
    } else {
      this.isMobile = false;
    }
  }

}
