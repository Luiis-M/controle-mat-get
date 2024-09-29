import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositivosDeRedeComponent } from './dispositivos-de-rede.component';

describe('DispositivosDeRedeComponent', () => {
  let component: DispositivosDeRedeComponent;
  let fixture: ComponentFixture<DispositivosDeRedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DispositivosDeRedeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispositivosDeRedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
