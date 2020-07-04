import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteButtonComponent } from './delete-button.component';
import { DataService } from 'src/app/services/data-service/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DeleteButtonComponent', () => {
  let component: DeleteButtonComponent;
  let fixture: ComponentFixture<DeleteButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteButtonComponent],
      providers: [DataService],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
