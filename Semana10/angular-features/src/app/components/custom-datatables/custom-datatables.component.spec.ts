import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDatatablesComponent } from './custom-datatables.component';

describe('CustomDatatablesComponent', () => {
  let component: CustomDatatablesComponent;
  let fixture: ComponentFixture<CustomDatatablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDatatablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDatatablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
