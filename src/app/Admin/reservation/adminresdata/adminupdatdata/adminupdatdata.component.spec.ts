import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminupdatdataComponent } from './adminupdatdata.component';

describe('AdminupdatdataComponent', () => {
  let component: AdminupdatdataComponent;
  let fixture: ComponentFixture<AdminupdatdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminupdatdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminupdatdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
