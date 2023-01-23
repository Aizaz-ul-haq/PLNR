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
  panels = [
    {
      active: false,
      name: 'Are you Robo advisors?',
      answer: 'No, we are not Robo advisors.',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      name: 'What is your annual fee?',
      answer: `First Year – 11,000 +18% GST (if applicable)
Renewal Fee – 5,000 +18% GST (if applicable)- Renewal fee will increase by 10% after every 2 years.
`
    },
    {
      active: false,
      disabled: false,
      name: 'Is the annual fee per person or per couple?',
      answer: 'It is per couple (including dependent children and dependent parents). However, if you want to work with us separately from your spouse or partner, it is two separate fees. '
    },
    {
      active: false,
      disabled: false,
      name: 'Is your annual fee really this small? ',
      answer: 'Yes, our annual fee is really that small. We don’t generate referral fees, assets under management charges, commissions, or any other fee.'
    },
    {
      active: false,
      disabled: false,
      name: 'Why your annual fee is so low?',
      answer: 'We want to change the concept of financial planning in India and want to help people that don’t have much extra money. Also, we realized that if we use technology efficiently it doesn’t take much time to provide professional, personal guidance and we could service many clients and still make a profit.'
    },
    {
      active: false,
      disabled: false,
      name: 'Do you offer any discount?',
      answer: 'No, we are already giving you the services at a much lower cost than our counterparts. There is no further scope for discount.'
    },
    {
      active: false,
      disabled: false,
      name: 'Is Renewal mandatory or voluntary?',
      answer: 'It is voluntary. There is no compulsion for renewal.'
    },
    {
      active: false,
      disabled: false,
      name: 'Can I renew after a gap of 2-3 years?',
      answer: 'Yes, you can renew after 2-3 years. The fee would be charged as a new client.'
    },
    {
      active: false,
      disabled: false,
      name: 'Why pay for advice that I could get for free?',
      answer: 'Free advice is more expensive than Fee advice. If you’re not paying for it; you are the product.'
    },
    {
      active: false,
      disabled: false,
      name: 'Why pay for advice that I could research and do it myself?',
      answer: `Charles Portis once said,” You must pay for everything in this world one way and another. There is nothing free except the Grace of God.” You either pay with time or money. 
 
If you have enough time to research and do it yourself, please do. We would be happy to help you- Please refer to our calculators and blog, if you want to learn more.
`
    }
  ];
  maxWidth: number = 0;
  hasRendered: boolean = false;
  hasLoaded: boolean = false;
  showServices: boolean = false;
  constructor() { }

  changePanel(panel:any) {
    // console.log('change panel');

    panel.active = !panel.active;
  }

  

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
