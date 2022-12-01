import { Router } from '@angular/router';
import { transfer } from './../models/transfers.models';
import { Component, Output, EventEmitter } from '@angular/core';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-newBankTransfer',
  templateUrl: './newBankTransfer.component.html',
  styleUrls: ['./newBankTransfer.component.scss'],
})
export class NewBankTransferComponent {
  @Output() onTransfer = new EventEmitter<any>();

  value: number;
  destiny: string;

  constructor(private service: TransferService, private router: Router) {}

  setNewTrasnfer() {
    if (this.destiny && this.value > 0) {
      const exportValue: transfer = {
        value: this.value,
        destiny: this.destiny,
      };
      this.service.setNewTransfer(exportValue).subscribe(
        (res) => {
          console.log(res);
          this.value = undefined;
          this.destiny = '';
          this.router.navigateByUrl('extract')
        },
        (error) => console.error()
      );
    } else {
      alert('Insira os valores corretamente!');
    }
  }
}
