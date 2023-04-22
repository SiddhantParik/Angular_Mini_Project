import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushpaComponent } from './pushpa.component';

describe('PushpaComponent', () => {
  let component: PushpaComponent;
  let fixture: ComponentFixture<PushpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushpaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
