import { Component, OnInit } from '@angular/core';
import { PlayaService } from '../../services/playa.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(private _sPlaya: PlayaService) { }

  ngOnInit() {

  }
  pagar() {
    let objPago = {
      "amount": 1500,
      "currency_code": "PEN",
      "email": "jorgegarba@gmail.com",
      "source_id": "tkn_test_N56x6d9HXeyEuzLH"
    }
    this._sPlaya.pagarConCulqi(objPago);
  }

}
