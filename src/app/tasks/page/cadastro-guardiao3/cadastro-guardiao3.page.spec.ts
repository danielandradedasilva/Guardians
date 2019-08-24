import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroGuardiao3Page } from './cadastro-guardiao3.page';

describe('CadastroGuardiao3Page', () => {
  let component: CadastroGuardiao3Page;
  let fixture: ComponentFixture<CadastroGuardiao3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroGuardiao3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroGuardiao3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
