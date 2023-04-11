import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminresdataComponent } from './adminresdata.component';

describe('AdminresdataComponent', () => {
  let component: AdminresdataComponent;
  let fixture: ComponentFixture<AdminresdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminresdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminresdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
