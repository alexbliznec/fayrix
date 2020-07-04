import { TestBed } from '@angular/core/testing';

import { DataInterceptor } from './data.interceptor';
import { DataService } from '../services/data-service/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DataInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DataInterceptor,
      DataService
      ],
      imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const interceptor: DataInterceptor = TestBed.inject(DataInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
