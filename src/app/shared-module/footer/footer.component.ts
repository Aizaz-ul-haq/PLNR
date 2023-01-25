import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
@ViewChild('sayHelloTemplate', { read: TemplateRef }) sayHelloTemplate:TemplateRef<any> | undefined;
  seconds: any = 5;
  showVideoModal: boolean = false;
  interval: any;
  constructor(private modalService: NzModalService) { }

  ngOnInit(): void {
  
  }
  openSEBIModal(): void {
    this.showVideoModal = true; 
    this.seconds = 5;
    this.interval?.clearInterval();
    this.interval = setInterval(() => {
      if (this.seconds == 0) {
        this.showVideoModal = false;
      } else {
        this.seconds = this.seconds - 1;
      } 
    },1000)
  }

  handleCancelTop(){
    this.showVideoModal = false;
  }

  handleOkTop(){
    this.showVideoModal = false;
  }

}
