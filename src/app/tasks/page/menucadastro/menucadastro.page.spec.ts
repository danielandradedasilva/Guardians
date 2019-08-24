import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucadastroPage } from './menucadastro.page';

describe('MenucadastroPage', () => {
  let component: MenucadastroPage;
  let fixture: ComponentFixture<MenucadastroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenucadastroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenucadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
