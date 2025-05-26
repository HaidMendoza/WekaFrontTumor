import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionCodigoComponent } from './informacion-codigo.component';

describe('InformacionCodigoComponent', () => {
  let component: InformacionCodigoComponent;
  let fixture: ComponentFixture<InformacionCodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacionCodigoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
