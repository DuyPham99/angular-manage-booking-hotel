import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagerTableComponent } from './user-manage-table.component';

describe('UserManageTableComponent', () => {
  let component: UserManagerTableComponent;
  let fixture: ComponentFixture<UserManagerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManagerTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
