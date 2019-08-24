import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCadastroPage } from './menu-cadastro.page';

describe('MenuCadastroPage', () => {
  let component: MenuCadastroPage;
  let fixture: ComponentFixture<MenuCadastroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCadastroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
