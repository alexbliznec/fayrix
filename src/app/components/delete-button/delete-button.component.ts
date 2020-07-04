import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent implements ICellRendererAngularComp {
  params: ICellRendererParams;
  constructor(
    private dataService: DataService
  ) { }

  agInit(params: ICellRendererParams) {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }

  deleteCurrentRow() {
    this.dataService.deleteRow(this.params.data.animalId);
  }
}
