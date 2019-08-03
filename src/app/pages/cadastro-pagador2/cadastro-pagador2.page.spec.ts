import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPagador2Page } from './cadastro-pagador2.page';

describe('CadastroPagador2Page', () => {
  let component: CadastroPagador2Page;
  let fixture: ComponentFixture<CadastroPagador2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPagador2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPagador2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
