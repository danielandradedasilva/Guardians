import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroGuardiao4Page } from './cadastro-guardiao4.page';

describe('CadastroGuardiao4Page', () => {
  let component: CadastroGuardiao4Page;
  let fixture: ComponentFixture<CadastroGuardiao4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroGuardiao4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroGuardiao4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
