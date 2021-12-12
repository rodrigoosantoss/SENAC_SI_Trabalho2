import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaCardapioComponent } from './tabela-cardapio.component';

describe('TabelaCardapioComponent', () => {
  let component: TabelaCardapioComponent;
  let fixture: ComponentFixture<TabelaCardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaCardapioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
