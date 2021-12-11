import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovocadastroComponent } from './novocadastro.component';

describe('NovocadastroComponent', () => {
  let component: NovocadastroComponent;
  let fixture: ComponentFixture<NovocadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovocadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovocadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
