import { isPlatformServer } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-slick-testimonials',
  templateUrl: './slick-testimonials.component.html',
  styleUrls: ['./slick-testimonials.component.scss']
})
export class SlickTestimonialsComponent implements OnInit {

  @Input() isFeaturesComponent: boolean = false;
  showTestimonial = true;
  slideConfigTestimonials = {
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: "<div class='nav-btn next-slide'><i class='right'></i></div>",
    prevArrow: "<div class='nav-btn prev-slide'><i class='left'></i></div>",
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 490,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1
        },
      },
    ],
  };
  slideConfigTestimonialsFeatures = {
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: "<div class='nav-btn next-slide'><i class='right fe-right'></i></div>",
    prevArrow: "<div class='nav-btn prev-slide'><i class='left fe-left'></i></div>",
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 490,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1
        },
      },
    ],
  };
  slidesTestimonials = [
    {
      address: 'Baton Rouge, LA',
      name: 'Anne Bynum',
      img: 'https://d1um67fy76m42o.cloudfront.net/assets/images/testimonials/Anne_Bynum.jpg',
      message:
        `I highly recommend Falaya as the new way to sell your home "by owner". My home sold in 24 hours for the asking price. Best $400 you could spend to sell your home.`,
    },
    {
      address: 'Baton Rouge, LA',
      name: 'Terri Kring',
      img: 'https://d1um67fy76m42o.cloudfront.net/assets/images/testimonials/Terri_Kring.jpg',
      message:
        `My favorite part about selling my home myself was that we got to meet and get to know the people personally. This made it so much more enjoyable!`,
    },
    {
      address: 'Baton Rouge, LA',
      name: 'Scott Barclay',
      img: 'https://d1um67fy76m42o.cloudfront.net/assets/images/testimonials/Scott_Barclay.jpg',
      message:
        "Great experience all around! Easy to use and efficient.",
    },
    {
      address: 'Baton Rouge, LA',
      name: 'Jeanne Broussard',
      img: 'https://d1um67fy76m42o.cloudfront.net/assets/images/testimonials/Jeanne_Broussard.jpg',
      message:
        "Falaya made selling my home easy and stress free. They went above and beyond what is expected.",
    },

    {
      address: 'Geismar, LA',
      name: 'Chris and Melissa Grill',
      img: 'https://d1um67fy76m42o.cloudfront.net/assets/images/testimonials/Chris_Grill_Pic_3.jpg',
      message:
        "We tried FSBO with no success. After listing with Falaya, we had a contract in two weeks and still saved $12,000 on commissions.",
    },
    {
      address: 'Baton Rouge, LA',
      name: 'Wolfe Washauer',
      img: 'https://d1um67fy76m42o.cloudfront.net/assets/images/testimonials/Wolfe.jpg',
      message:
        'Falaya is fair priced, quick to respond, and easy to use. I highly recommend their services!',
    },
    {
      address: 'Baton Rouge, LA',
      name: 'Kelly and Jami Smith',
      img: 'https://d1um67fy76m42o.cloudfront.net/assets/images/testimonials/Kelly.png',
      message: "Falaya is easy to use and revolutionizing Real Estate",
    },
    {
      address: 'Denham Springs, LA',
      name: 'Denise and Kevin Vernor',
      img: 'https://d1um67fy76m42o.cloudfront.net/assets/images/testimonials/Denise.png',
      message:
        "Falaya works. We got an offer in two weeks and saved $5,000 all in the middle of an epidemic.",
    },
    {
      address: 'Maurepas, LA',
      name: 'Desiree Thomas',
      img: 'https://d1um67fy76m42o.cloudfront.net/assets/images/testimonials/Desiree_Thomas.jpg',
      message:
        'Falaya made the processes so easy. Falaya instantly increased the amount of interest and ultimately saved us over $10,000.',
    },
  ];
  constructor(@Inject(PLATFORM_ID) platformId:any) { 
    this.isServer = isPlatformServer(platformId);
    window.addEventListener('scroll',this.scroll,{passive:true}) //third Argument..
  }
  scroll=()=>{
   let el:any = document.querySelectorAll('.nav-btn');
   if(el){
      // console.log(el)
    for(let i=0;i<el.length;i++){
      el[i].classList.add('fe-nav-btn')
    }
   }
  }

  isServer: boolean;
  ngOnInit(): void {
    if(this.isFeaturesComponent){
      // console.log('called from features',this.isFeaturesComponent)
    }
  }
  ngOnDestroy(){
    let el:any = document.querySelectorAll('.fe-nav-btn');
    if(el){
      //  console.log(el)
     for(let i=0;i<el.length;i++){
       el[i].classList.remove('fe-nav-btn')
     }
    }
  }

}
