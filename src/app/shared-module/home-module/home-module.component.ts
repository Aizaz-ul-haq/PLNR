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
      name: 'How does selling with Falaya save me money?',
      answer: 'Falaya offers more listing options to sellers giving them the control to pick the plan and options that work best for their personal situation. Falaya offers three listing packages: Basic ($399), 1% (Full Service Virtual Realtor Support), and all the way up to a 5% (Full-Service Option) with targeted google and facebook ads to drive traffic outside of the MLS. Visit our pricing page to see the full breakdowns. On average, our sellers are saving over $7,000+ using Falaya.',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      name: 'What does the Basic ($399) package include?',
      answer: 'For $399, your listing is sent to the MLS system, Zillow, Realtor.com, Redfin and numerous brokerages and third-party sites. You are provided a realtor grade directional and for sale sign to market your property like a professional. You are given scheduling software that allows buyers to submit listing tour requests directly to you all through text message, email, and push notifications. Your phone number and email are kept completely private from the telemarketers and agents trying to get your business. The automated listing and disclosure documents can all be signed online making listing your property a breeze and can all be done without outside support in 15 minutes or less.'
    },
    {
      active: false,
      disabled: false,
      name: 'What exactly does the Professional 1% pricing include?',
      answer: 'The Professional is realtor services at a fair price. A Falaya licensed realtor will be there for you virtually at every step of the transaction. Falaya will perform a listing price analysis, free professional photography, we will follow up with every lead, negotiate and execute the purchase agreements, handle the inspection responses, and ensure the appraisal process goes smoothly all the way to the closing table. Check out the breakdown on the pricing page or shoot us a message today.'
    },
    {
      active: false,
      disabled: false,
      name: 'What does the Premium 5% pricing include?',
      answer: 'You get everything that is included in the Professional, plus free professional videography, sponsored social media ads and targeted google ads to drive traffic outside of the MLS/Zillow, open houses, broker tours, in-person/virtual tours, and pretty much anything our team can think of to market your property and sell it fast for top dollar.'
    },
    {
      active: false,
      disabled: false,
      name: 'How do I list my home on Falaya?',
      answer: 'From the Falaya Sell page, click the “List A Property” button. You will pick the plan that works best for your personal situation, select any additional services – such as professional photos, pricing support or our marketing package, and then you will checkout. After paying you will enter all the characteristics of the house, upload your photos, and digitally sign your disclosures. The Falaya Team will review your listing and then give you a call to confirm any details and answer any of your questions. At that time, we will set a time for your listing to go live to the public to view and book tours.'
    },
    {
      active: false,
      disabled: false,
      name: 'If I start entering my home, will buyers immediately see it?',
      answer: 'Your listing will only be viewable to the sellers and the Falaya team until you tell us otherwise. You can enter and change any details at any time. You set the timetable for when buyers can see your listing. We will not publish it to the public until you are ready and the days on the market will reset to zero when the Falaya team turns the listing on.'
    },
    {
      active: false,
      disabled: false,
      name: 'Does Falaya provide professional photography?',
      answer: 'Falaya provides free professional photography for both The Professional (1%) and The Premium (5%) listing packages. For the $399 listing packages, you can place an order with us for photos by visiting the pricing page and selecting professional photos in the more services section. The cost is $150 for 15 photos, but we can tailor packages depending on how many photos you would like to showcase your property. Just shoot us a message or talk to us during your on-boarding call with the Falaya team.'
    },
    {
      active: false,
      disabled: false,
      name: 'How do I determine the listing price of my home?',
      answer: 'Sellers can research comps on their own by looking at major sites like Zillow and Realtor.com to see what their neighbors’ houses sold for recently. They should only use comps that are less than six months old, because appraisers will only look at recent sales when doing the appraisal for financing. Correct pricing is key for both the speed at which the sale occurs and can affect the amount of money the seller will walk away with at the end of the sale. Falaya offers a competitive market analysis as a realtor a-la-carte services for only $300 to make sure you make the right moves. Visit the pricing page and book your appointment today with a licensed real estate agent.'
    },
    {
      active: false,
      disabled: false,
      name: 'How quickly can my listing go live to the public?',
      answer: 'Honestly as soon as you would like it to go live. We make listings active within 24 hours or less, but ultimately up to you and your timeline. We will be reaching out to you directly to answer questions and set a timeline before making it viewable to the public.'
    },
    {
      active: false,
      disabled: false,
      name: 'How does the buyer’s agent commission work?',
      answer: 'Whether to pay a buyer’s agent commission or not is totally up to you as the seller, but at this point Falaya is required to enter something into the MLS by the board of realtors. The typical market cost of a buyer’s agent commission is currently 2-3%. You will only pay this fee if a licensed real estate agent finds a buyer that closes on your property. The payment will be due at the closing table for the amount advertised. The amount of commission cannot be negotiated on a contract. The amount that is advertised is what is paid, but the amount advertised can be changed by informing the Falaya sales team. The level of commission will affect how motivated realtors are to show the property, so it should be taken into consideration when thinking about pricing and goal sale dates.'
    },
    {
      active: false,
      disabled: false,
      name: 'How do the Realtor a-la-carte services work?',
      answer: 'You can pick a realtor service, date and time that works for you. A realtor will contact you and walk you through the process that you requested. We provide services like pricing support, contract negotiation, inspection response negotiation, and can custom create a plan for your needs upon request. Check out our pricing page to see the options. Who’s the boss? Tony Danza, I don’t think so. You are.'
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
