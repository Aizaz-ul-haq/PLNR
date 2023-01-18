import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  constructor() { }
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

  panels2 = [
    {
      active: false,
      name: 'Where will my listing be viewed by potential buyers?',
      answer: 'Your listing will be sent to the MLS, Zillow, Realtor.com, Trulia, Redfin, Remax, Keller Williams, and all the major sites to gain maximum exposure for your property.',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      name: 'Will Falaya hold Open Houses for my property?',
      answer: 'Falaya offers free Open Houses for the Premium (5%) listing package, but for the other packages Falaya offers Open Houses as a realtor a-la-carte service for only $150. This includes a 2-hour Open House, sign in list for the seller to keep, feedback from potential buyers, and promotion on social media channels.'
    },
    {
      active: false,
      disabled: false,
      name: 'How are purchase agreements handled on the Falaya platform?',
      answer: 'Falaya has automated the purchase agreement process and seamlessly allows buyers to submit a fully executed and legally binding purchase agreement directly to you with just a couple clicks via the Falaya platform. You receive text messages and push notifications telling you the buyer’s name, email and all the particulars of the offer. You can easily accept, reject, or counter the offer using the Falaya platform. This is a total game changer. If at any point you need extra help, you can book a contract negotiation realtor a-la-carte service for only $350 to make sure all the Is are dotted and Ts are crossed.'
    },
    {
      active: false,
      disabled: false,
      name: 'What if a buyer’s agent sends a purchase agreement to Falaya outside the Falaya website?',
      answer: 'Falaya will immediately notify you and send a copy of the contract directly to you. For the Professional (1%) and the Premium (5%), your Falaya agent will negotiate and execute all the necessary documents on your behalf. For the Basic ($399), the seller handles the negotiations and paperwork on their own. Of course, with Falaya, a seller can book a contract negotiation realtor a-la-carte service for $350 by visiting the pricing page under more services. Shoot us a message for support.'
    },
    {
      active: false,
      disabled: false,
      name: 'Can I negotiate the buyer’s agent commissions on a purchase agreement?',
      answer: 'No. The buyer’s agent commission is advertised on the MLS system, and it cannot be changed on a purchase agreement. The commission advertised is time stamped on the MLS, so the realtor board will know what the amount advertised was at the time of the contract and will obligate the seller to honor it. The seller can change the amount advertised at any time by notifying the Falaya team in writing, but you can’t change it in the middle of a contract negotiation.'
    },
    {
      active: false,
      disabled: false,
      name: 'How does the inspection work?',
      answer: 'The inspection period is a timeline set in the contract that allows the buyer to have the property inspected and decide whether or not they want to proceed with the purchase. The timelines can vary widely depending on the market. The Professional (1%) and the Premium (5%) packages include inspection negotiation and support. With the Basic ($399) package, the seller negotiates on their own behalf. Again, with Falaya, the seller can book an inspection and repairs negotiation realtor a-la-carte service for only $350.'
    },
    {
      active: false,
      disabled: false,
      name: 'Who pays for the inspection?',
      answer: 'Normally the buyer pays for the inspection. However, everything is negotiable. The inspection usually lasts two hours and the buyer will receive a detailed report the next day or so. The buyer will submit a repairs request with documentation of any deficiencies to justify the requests. It is best to give the buyer the space to inspect the property.'
    },
    {
      active: false,
      disabled: false,
      name: 'Who orders and pays for the appraisal?',
      answer: 'The appraisal is ordered by the lender through their randomized system, so you cannot pick your appraiser. It is paid for the buyer.'
    },
    {
      active: false,
      disabled: false,
      name: 'What if the appraisal comes in lower than the purchase price?',
      answer: 'There are a couple of options. The seller lowers the sales price to the appraised value, or the buyer comes up with the difference in order to close the sale. There could be a meeting of the minds in the middle as well. Finally, there is a third option, the real estate agent submits other sales to justify the sales price and gets the appraiser to adjust his evaluation. The Professional (1%) and the Premium (5%) package include appraisal and closing support.'
    },
    {
      active: false,
      disabled: false,
      name: 'How does the closing work?',
      answer: 'The Title company does a search on the property to make sure the seller is the owner of the property and has the full right to sell the property to you. Once the Title Attorney has cleared the title and the lender has cleared the loan to close, you have made it to the finish line! Bring the cashier’s check in the amount needed, your driver’s license and your hand to sign the docs. Now all you need to do is post a picture to your social sites tagging Falaya and of course leave us a five-star review… because we got the deal done! Congrats, soak up that victory.'
    }
  ];
  buyerPanels1 = [
    {
      active: false,
      name: 'Do I really save when buying with Falaya?',
      answer: 'Absolutely, there are several ways to save. Falaya charges less than traditional agents, so the seller can price their home lower and net the same amount of money, saving you cash as a buyer. If you can’t find a Falaya listing that works, our team will set you up with one of our top rated Falaya agents that will work to help you find that dream home. The best part is when you close on that non-Falaya listing, you will receive a buyer’s agent rebate for using Falaya saving you possibly thousands.',
      disabled: false
    },
    {
      active: false,
      name: 'How does buying with Falaya differ from buying with a traditional agent?',
      answer: 'Falaya makes the process simple. You can download the Falaya app, search houses on your own, and book tours directly on your phone without talking to anyone. If you decide you want to write an offer, Falaya’s purchase agreement automation makes it simple. With just a couple clicks from your cell phone, you could be under contract on your dream home.',
      disabled: false
    },
    {
      active: false,
      name: 'What if it is my first time buying a house, how will Falaya help me?',
      answer: 'Falaya offers Free Buyer Consultations. During this meeting, our agents will go over the whole real estate process. We will talk about the paperwork involved, the steps and what to expect, and finally connect you to a trustworthy lender that will put you on the path to success.',
      disabled: false
      },
    {
      active: false,
      name: 'Does Falaya employ real estate agents?',
      answer: 'Yes. Falaya is a full-service real estate brokerage. Falaya agents are licensed and experienced agents that must maintain a 4.5 our 5-star rating to continue working with our incoming clients. Our team consists of realtors, transaction coordinators, marketing and sale professionals that ensure your whole experience with Falaya is a smooth one. Just reach out to us, and we would be happy to answer any question you may have about our team.',
      disabled: false
    },
  ]

  buyerPanels2 = [
    {
      active: false,
      name: 'Why is making an offer with Falaya easier?',
      answer: 'Falaya automated the offer process and made the legal documents easy to digest, much like TurboTax did for taxes. You simply input the purchase price, closing cost support requested and all the particulars of the offer. Then you digitally sign the document and send it directly to the seller with just a couple of clicks on your cell phone. The Falaya agents are there for every step and can answer any questions that might come up during the buying process.',
      disabled: false
    },
    {
      active: false,
      name: 'Do I need to be pre-approved to write an offer?',
      answer: 'Yes. Sellers will not accept an offer from a buyer that is not pre-approved. The seller will be taking their house off the market, and they need to know you are a sound buyer. Falaya can connect you to our Premier Partner Lender and the process should take less than 15 minutes.',
      disabled: false
    },
    {
      active: false,
      name: 'Will Falaya handle all the paperwork?',
      answer: 'Of course! Your Falaya agent will be there to handle all the paperwork and our transaction coordinators will make sure the process flows smoothly all the way to closing. Falaya privately stores all your documents under your Falaya profile, so you will always have quick and easy access to them.',
      disabled: false
    },
    {
      active: false,
      name: 'Does Falaya help with Inspection, Appraisals and Mortgages?',
      answer: 'Falaya will be there for you at each step of the transaction. Falaya has relationships with top notch inspectors, lenders, and appraisers, so we can point you in the right direction and make the process flow smoothly towards closing.',
      disabled: false
    },
    {
      active: false,
      name: 'How does the closing work?',
      answer: 'The Title company does a search on the property to make sure the seller is the owner of the property and has the full right to sell the property to you. Once the Title Attorney has cleared the title and the lender has cleared the loan to close, you have made it to the finish line! Bring the cashier’s check in the amount needed, your driver’s license and your hand to sign the docs. Now all you need to do is post a picture on your social sites tagging Falaya and of course leave us a five-star review… because we got the deal done! Congrats, soak up that victory.',
      disabled: false
    },

  ]

  generalPanels = [
    {
      active: false,
      disabled: false,
      name: 'How do I create my Falaya Profile?',
      answer: 'From the home screen, click sign up in the top right corner. You will enter your name, email address, phone number and set a password. Falaya asks for your email and phone number to help coordinate tours and communications with our team exclusively. We will guard your personal information as if it was our own.'
    },
    {
      active: false,
      disabled: false,
      name: 'Do I need an account to list my property?',
      answer: 'Yes. We must link your house to a specific profile in order to save and send all the relevant information for tours, offers, ect.'
    },
    {
      active: false,
      disabled: false,
      name: 'How do I reset my password?',
      answer: 'From the Falaya.com page, click on the top right sign in. On the bottom of the screen, you will see “Forgot your password?”. Click the link, enter your email address and a password reset link will be sent to your email.'
    },
    {
      active: false,
      disabled: false,
      name: 'How do I edit my profile email address?',
      answer: 'From the Falaya.com page, click on the top right sign in and log into your account. Then select your profile in the top right to see the drop down and select settings. There you will see your email address. Delete your old email address, enter your new email address and click save changes.'
    },
    {
      active: false,
      disabled: false,
      name: 'How do I unsubscribe from emails and alerts?',
      answer: 'From the Falaya.com page, click on the top right sign in and log into your account. Then select your profile in the top right to see the drop down and select settings. Then navigate to the notification screen and change your notifications settings.'
    },
    {
      active: false,
      disabled: false,
      name: 'How do I report a fraudulent listing or scam to Falaya ?',
      answer: 'Send an email to contact@falaya.com or just give us a call at 1.800.578.6508.'
    },
  ]


  ngOnInit(): void {
  }

  changePanel(panel:any) {
    panel.active = !panel.active;
  }

}
