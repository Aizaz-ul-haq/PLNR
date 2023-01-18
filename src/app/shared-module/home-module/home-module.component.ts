import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-home-module',
  templateUrl: './home-module.component.html',
  styleUrls: ['./home-module.component.scss']
})
export class HomeModuleComponent implements OnInit {
  @ViewChild('TestimonialsHost', { read: ViewContainerRef, static: false }) TestimonialsHost: ViewContainerRef | undefined;
  TestimonialsComponentContainer:any;
  sections: Array<any> = [];
  maxWidth: number = 0;
  hasRendered: boolean = false;
  hasLoaded: boolean = false;
  showServices: boolean = false;
  constructor() { }

  

  ngOnInit(): void {
    /* GSAP CODE */









    let that = this;
    // window.addEventListener("load", function (event) {
    that.hasLoaded = true;


    // const isInView = that.isInViewPort();
    // if (isInView) {
    //   gsap.set("#watch-btn", {
    //     transformOrigin: "center center",
    //     scaleY: 0,
    //     scaleX: 0.01
    //   });

    //   const tl = gsap.timeline({
    //     delay: 0.8
    //   });

    //   const scaleY = gsap.to("#watch-btn", {
    //     scaleY: 1
    //   });

    //   const scaleX = gsap.to("#watch-btn", {
    //     scaleX: 1,
    //     borderRadius: 49
    //   });

    //   const inner = gsap.from("#watch-btn-inn", {
    //     scale: 0,
    //     transformOrigin: "center"
    //   });

    //   tl.add(scaleY).add(scaleX).add(inner);
    //   that.hasRendered = true;
    // }





    // })




















    // if (!this.isMobile) {
    gsap.registerPlugin(ScrollTrigger)   // plugins must be registered before using them.
    gsap.fromTo(
      '.card:not(:first-child)',
      {
        x: () => window.innerWidth / 2 + 100,
      },
      {
        x: 0,
        stagger: 0.5,
        rotate: 0,
        ease: "power3.inOut",
        scrollTrigger: {
          pin: '.how_it_works',
          scrub: true,
          start: 'top top',
          end: "+=2000",
          invalidateOnRefresh: true,
        },
      }
    );
    // }



    /* GSAP ENDS HERE */
  }

  

  viewLess() {
    let section: any = document.getElementById('button-section');
    // console.log('If I cant find it I cant go there. what do you what me to do here mister!?')
    if (section) {
      // console.log('found it and I just wont go. make me go there. I dare you!')
      section.scrollIntoView();
    }
  }

  toggleServices() {
    this.showServices = !this.showServices;
  }

}
