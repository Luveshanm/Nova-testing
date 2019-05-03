import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourAreaComponent } from './your-area.component';

describe('YourAreaComponent', () => {
  let component: YourAreaComponent;
  let fixture: ComponentFixture<YourAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
