import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippoComponent } from './zippo.component';

describe('ZippoComponent', () => {
  let component: ZippoComponent;
  let fixture: ComponentFixture<ZippoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZippoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZippoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
