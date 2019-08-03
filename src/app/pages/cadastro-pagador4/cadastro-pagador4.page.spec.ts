import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPagador4Page } from './cadastro-pagador4.page';

describe('CadastroPagador4Page', () => {
  let component: CadastroPagador4Page;
  let fixture: ComponentFixture<CadastroPagador4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPagador4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPagador4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
