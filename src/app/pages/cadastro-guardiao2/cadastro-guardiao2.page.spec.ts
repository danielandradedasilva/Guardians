import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroGuardiao2Page } from './cadastro-guardiao2.page';

describe('CadastroGuardiao2Page', () => {
  let component: CadastroGuardiao2Page;
  let fixture: ComponentFixture<CadastroGuardiao2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroGuardiao2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroGuardiao2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
