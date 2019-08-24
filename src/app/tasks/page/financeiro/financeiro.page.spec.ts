import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceiroPage } from './financeiro.page';

describe('FinanceiroPage', () => {
  let component: FinanceiroPage;
  let fixture: ComponentFixture<FinanceiroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceiroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
