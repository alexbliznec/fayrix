import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DataService } from '../services/data-service/data.service';
import { IAnimal } from '../config/animals.config';

@Injectable()
export class DataInterceptor implements HttpInterceptor {

  constructor(
    private dataService: DataService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes('deleteRow')) {
      const deleteReq = request.clone();
      return next.handle(deleteReq).pipe(
        tap(() => {
          const rowToDelete = this.dataService.animalsData$
            .getValue()
            .find((animal) => animal.animalId === request.params.get('id'));
          const updatedAnimals = this.dataService.animalsData$
            .getValue()
            .filter((animal: IAnimal) => animal.animalId !== rowToDelete.animalId);
          this.dataService.animalsData$.next(updatedAnimals);
        })
      )
    }
    if (request.url.includes('updateCell')) {
      const updateReq = request.clone();
      return next.handle(updateReq).pipe(
        tap(() => {
          const rowToUpdate = this.dataService.animalsData$
            .getValue()
            .find((animal: IAnimal) => animal.animalId === request.body.animalId);
          rowToUpdate[request.body.fieldName] = request.body.value;
          const updatedAnimals = this.dataService.animalsData$.getValue().map((animal) => 
            animal.animalId === request.body.animalId ? rowToUpdate : animal);
          this.dataService.animalsData$.next(updatedAnimals);
        })
      )
    }
    if (request.url.includes('addNewAnimal')) {
      const addAnimalReq = request.clone();
      return next.handle(addAnimalReq).pipe(
        tap(() => {
          const newAnimal: IAnimal = request.body;
          this.dataService.animalsData$.next([newAnimal, ...this.dataService.animalsData$.getValue()]);
        })
      )
    }
    return next.handle(request);
  }
}
