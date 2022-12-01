import { Component } from '@angular/core';
import { transfer } from '../models/transfers.models';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
})
export class ExtractComponent {
  transfers: any[];

  constructor(private service: TransferService) {}

  ngOnInit() {
    this.service.getAllTransfers().subscribe((transfers: transfer[]) => {
      console.table(transfers);
      this.service.getAllTransfers().subscribe((res) => (this.transfers = res));
    });
  }
}
