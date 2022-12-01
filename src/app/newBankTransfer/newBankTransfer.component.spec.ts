/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewBankTransferComponent } from './newBankTransfer.component';

describe('NewBankTransferComponent', () => {
  let component: NewBankTransferComponent;
  let fixture: ComponentFixture<NewBankTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBankTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBankTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
