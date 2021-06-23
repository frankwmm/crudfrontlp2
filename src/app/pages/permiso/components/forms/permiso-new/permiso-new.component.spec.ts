import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisoNewComponent } from './permiso-new.component';

describe('PermisoNewComponent', () => {
  let component: PermisoNewComponent;
  let fixture: ComponentFixture<PermisoNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisoNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermisoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
