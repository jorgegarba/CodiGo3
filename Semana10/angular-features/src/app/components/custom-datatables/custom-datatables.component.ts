import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-datatables',
  templateUrl: './custom-datatables.component.html',
  styleUrls: ['./custom-datatables.component.css']
})
export class CustomDatatablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadScript('assets/datatables/task_manager_list.js'); 
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
