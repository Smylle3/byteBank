import { transfer } from './../models/transfers.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private transferList: any[];
  private url = 'http://localhost:3000/transfers';

  constructor(private httpClient: HttpClient) {
    this.transferList = [];
  }
  get transfers() {
    return this.transferList;
  }

  getAllTransfers(): Observable<transfer[]> {
    return this.httpClient.get<transfer[]>(this.url);
  }

  setNewTransfer(transfer: transfer): Observable<transfer> {
    this.addNewTransfer(transfer);
    return this.httpClient.post<transfer>(this.url, transfer);
  }

  addNewTransfer(transfer: any) {
    this.setDatas(transfer);
    this.transferList.push(transfer);
  }
  private setDatas(transfer: any) {
    transfer.date = new Date();
  }
}
