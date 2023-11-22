import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductoVentaComponent } from './add-producto-venta.component';

describe('AddProductoVentaComponent', () => {
  let component: AddProductoVentaComponent;
  let fixture: ComponentFixture<AddProductoVentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductoVentaComponent]
    });
    fixture = TestBed.createComponent(AddProductoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
