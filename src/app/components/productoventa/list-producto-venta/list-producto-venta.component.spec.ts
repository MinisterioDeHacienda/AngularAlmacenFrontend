import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductoVentaComponent } from './list-producto-venta.component';

describe('ListProductoVentaComponent', () => {
  let component: ListProductoVentaComponent;
  let fixture: ComponentFixture<ListProductoVentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProductoVentaComponent]
    });
    fixture = TestBed.createComponent(ListProductoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
