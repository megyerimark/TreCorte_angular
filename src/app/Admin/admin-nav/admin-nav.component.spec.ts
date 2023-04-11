import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNAVComponent } from './admin-nav.component';

describe('AdminNAVComponent', () => {
  let component: AdminNAVComponent;
  let fixture: ComponentFixture<AdminNAVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNAVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNAVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
