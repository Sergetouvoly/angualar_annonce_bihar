import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncecreateComponent } from './annoncecreate.component';

describe('AnnoncecreateComponent', () => {
  let component: AnnoncecreateComponent;
  let fixture: ComponentFixture<AnnoncecreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoncecreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnoncecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
