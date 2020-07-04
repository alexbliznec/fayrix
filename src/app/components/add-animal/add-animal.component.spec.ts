import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnimalComponent } from './add-animal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from 'src/app/services/data-service/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddAnimalComponent', () => {
  let component: AddAnimalComponent;
  let fixture: ComponentFixture<AddAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnimalComponent ],
      providers: [DataService],
      imports: [ReactiveFormsModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
