import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './services/data-service/data.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { ColDef } from 'ag-grid-community';
import { IAnimal, getColumnDefs } from './config/animals.config';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  animals$ = new BehaviorSubject<IAnimal[]>([]);
  onDestroy$ = new Subject<any>();

  isFormShown: boolean;
  colDefs: ColDef[];

  constructor(
    private dataService: DataService
  ) {}
  
  ngOnInit() {
    this.colDefs = getColumnDefs(this.dataService);
    this.dataService.getData();
    this.animals$ = this.dataService.animalsData$;
    this.dataService.showAddAnimalForm$.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe((shouldShow: boolean) => this.isFormShown = shouldShow);
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  showAddAnimalForm() {
    this.dataService.showAddAnimalForm$.next(!this.dataService.showAddAnimalForm$.getValue());
  }

  onGridSizeChanged(params: any) {
    params.api.resetRowHeights();
  }

  onFirstDataRendered(params: any) {
    params.api.resetRowHeights();
  }
}
