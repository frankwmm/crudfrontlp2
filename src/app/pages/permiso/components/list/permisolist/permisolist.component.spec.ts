import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisolistComponent } from './permisolist.component';

describe('PermisolistComponent', () => {
  let component: PermisolistComponent;
  let fixture: ComponentFixture<PermisolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisolistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermisolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
