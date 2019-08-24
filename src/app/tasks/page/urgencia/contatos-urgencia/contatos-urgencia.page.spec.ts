import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosUrgenciaPage } from './contatos-urgencia.page';

describe('ContatosUrgenciaPage', () => {
  let component: ContatosUrgenciaPage;
  let fixture: ComponentFixture<ContatosUrgenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatosUrgenciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosUrgenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
