import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductoVentaComponent } from './update-producto-venta.component';

describe('UpdateProductoVentaComponent', () => {
  let component: UpdateProductoVentaComponent;
  let fixture: ComponentFixture<UpdateProductoVentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProductoVentaComponent]
    });
    fixture = TestBed.createComponent(UpdateProductoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
