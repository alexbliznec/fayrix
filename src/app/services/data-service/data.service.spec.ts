import { DataService } from "./data.service";

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { IAnimal } from 'src/app/config/animals.config';

describe('dataService', () => {
  let httpTestingController: HttpTestingController;
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService],
      imports: [HttpClientTestingModule]
    });
  });

  beforeEach(() => {
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data', (done: DoneFn) => {
    service.getData();
    const req = httpTestingController.expectOne('assets/data.json');

    expect(req.request.method).toEqual('GET');
    done();
  });

  it('should delete row', (done: DoneFn) => {
    const mockAnimalId = '111';
    service.deleteRow(mockAnimalId);

    const req = httpTestingController.expectOne(`deleteRow?id=${mockAnimalId}`);
    expect(req.request.method).toEqual('DELETE');
    done();
  });

  it('should update row', (done: DoneFn) => {
    const mockParams = {
      colDef: {
        field: '1'
      },
      data: {
        animalId: '1'
      },
      newValue: '2'
    }
    const body = {
      fieldName: mockParams.colDef.field,
      animalId: mockParams.data.animalId,
      value: mockParams.newValue
    }

    service.editCellData(mockParams);

    const req = httpTestingController.expectOne('updateCell');

    expect(req.request.body).toEqual(body);
    expect(req.request.method).toEqual('PATCH');
    done();
  });

  it('should add new animal', (done: DoneFn) => {
    const mockAnimal = {
      animalId: '111'
    }

    service.addNewAnimal(mockAnimal as IAnimal);

    const req = httpTestingController.expectOne('addNewAnimal');

    expect(req.request.body).toEqual(mockAnimal);
    expect(req.request.method).toEqual('POST');
    done();
  });
});
