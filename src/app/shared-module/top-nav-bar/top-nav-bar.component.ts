import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, RoutesRecognized } from '@angular/router';



@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {
  hideNavbar: boolean = false;
  isMobile: boolean = false;
  isTab: boolean = false;
  isToggled: boolean = false;
  constructor(private router: Router) { 
    router.events
      .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
      .subscribe((events: RoutesRecognized[]) => {
        console.log(events)
        if (!(events[1].urlAfterRedirects.length > 2)) {
          console.log('if')
          setTimeout(() => {
          window.location.href = ''
          },5)
        } else {
          console.log('else')
        }
      });
  }

  ngOnInit(): void {
    this.checkMobile();
  }

  @HostListener('window:resize', ['$event'])
  @HostListener('window:load', ['$event'])
  onEvent(event:any) {
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
  toggleMobileMenu() {
    this.isToggled = !this.isToggled;
  }
  closeMobileMenu() {
    console.log('what is happening; before: ', this.isToggled)
    this.isToggled = false;
    console.log('what is happening; After: ', this.isToggled)

  }

  closeMenu(route:string) {
    this.isToggled = false;
    this.router.navigate([`/${route}`]);
  }

}
