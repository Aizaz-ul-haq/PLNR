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
  showVideoModal:boolean = false;
  constructor(private modalService: NzModalService) { }

  ngOnInit(): void {
  
  }
  openSEBIModal(): void {
    this.showVideoModal = true; 
  }

  handleCancelTop(){
    this.showVideoModal = false;
  }

  handleOkTop(){
    this.showVideoModal = false;
  }

}
