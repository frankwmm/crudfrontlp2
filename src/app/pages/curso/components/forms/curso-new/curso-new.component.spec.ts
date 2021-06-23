import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoNewComponent } from './curso-new.component';

describe('CursoNewComponent', () => {
  let component: CursoNewComponent;
  let fixture: ComponentFixture<CursoNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
