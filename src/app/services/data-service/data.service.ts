import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';
import { map } from 'rxjs/operators'
import { IAnimal } from 'src/app/config/animals.config';

@Injectable()
export class DataService {
  showAddAnimalForm$ = new BehaviorSubject<boolean>(false);
  animalsData$ = new BehaviorSubject<IAnimal[]>([]);

  constructor(
    private httpService: HttpClient
  ) {}

  getData() {
    return this.httpService.get('assets/data.json').pipe(
      map((data: any) => data.result)
    ).subscribe((animals: IAnimal[]) => this.animalsData$.next(animals));
  }

  deleteRow(rowId: string) {
    return this.httpService.delete('deleteRow', {
      params: new HttpParams().set(`id`, rowId)
    })
    .subscribe();
  }

  editCellData(params: any) {
    const body = {
      fieldName: params.colDef.field,
      animalId: params.data.animalId,
      value: params.newValue
    }
    return this.httpService.patch('updateCell', body)
      .subscribe();
  }

  addNewAnimal(animal: IAnimal) {
    return this.httpService.post('addNewAnimal', animal)
      .subscribe();
  }
}