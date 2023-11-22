import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductoVentaComponent } from './delete-producto-venta.component';

describe('DeleteProductoVentaComponent', () => {
  let component: DeleteProductoVentaComponent;
  let fixture: ComponentFixture<DeleteProductoVentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteProductoVentaComponent]
    });
    fixture = TestBed.createComponent(DeleteProductoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
