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
  constructor(private modalService: NzModalService) { }

  ngOnInit(): void {
  
  }
  openSEBIModal(): void {
    this.seconds = 5;
    var interval = setInterval(() => {
      this.seconds = this.seconds - 1;
      return this.seconds;
    }, 1000)
    
    const modal = this.modalService.success({
      nzTitle: 'Regulatory Disclosure ',
      nzContent: this.sayHelloTemplate
    });
    

    setTimeout(() => {
      this.seconds = 5;
      modal.destroy();
      clearInterval(interval)
    }, 50000);
    
  }

}
