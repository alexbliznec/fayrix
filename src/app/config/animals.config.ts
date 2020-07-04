import { ColDef } from 'ag-grid-community';
import { DeleteButtonComponent } from '../components/delete-button/delete-button.component';

export interface IAnimal {
  healthIndex?: string,
  endDate?: string,
  minValueDateTime?: string,
  type?: string,
  cowId: string,
  animalId: string,
  eventId: string,
  deletable?: string,
  lactationNumber?: string,
  daysInLactation?: string,
  ageInDays?: string,
  startDateTime?: string,
  reportingDateTime?: string,
  alertType?: string,
  duration?: string,
  originalStartDateTime?: string,
  endDateTime?: string,
  daysInPregnancy?: string,
  newGroupId?: string,
  newGroupName?: string,
  currentGroupId?: string,
  currentGroupName?: string,
  destinationGroup?: string,
  calvingEase?: string,
  oldLactationNumber?: string,
  newborns?: string,
  cowEntryStatus?: string,
  sire?: string,
  breedingNumber?: string,
  isOutOfBreedingWindow?: string,
  interval?: string,
  birthDateCalculated?: string,
  heatIndexPeak?: string,
}

export function getColumnDefs(dataService): ColDef[] {
  return [
    {
      headerName: 'Delete',
      maxWidth: 100,
      cellRendererFramework: DeleteButtonComponent,
      cellStyle: {'padding': '5px'}
    },
    {
      headerName: 'cowId',
      field: 'cowId',
      maxWidth: 100
    },
    {
      headerName: 'animalId',
      field: 'animalId',
      maxWidth: 100
    },
    {
      headerName: 'eventId',
      field: 'eventId',
      maxWidth: 100
    },
    {
      headerName: 'healthIndex',
      field: 'healthIndex',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'endDate',
      field: 'endDate',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'minValueDateTime',
      field: 'minValueDateTime',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'type',
      field: 'type',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'deletable',
      field: 'deletable',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'lactationNumber',
      field: 'lactationNumber',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'daysInLactation',
      field: 'daysInLactation',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'ageInDays',
      field: 'ageInDays',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'startDateTime',
      field: 'startDateTime',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'reportingDateTime',
      field: 'reportingDateTime',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'alertType',
      field: 'alertType',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'duration',
      field: 'duration',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'originalStartDateTime',
      field: 'originalStartDateTime',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'endDateTime',
      field: 'endDateTime',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'daysInPregnancy',
      field: 'daysInPregnancy',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'newGroupId',
      field: 'newGroupId',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'newGroupName',
      field: 'newGroupName',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'currentGroupId',
      field: 'currentGroupId',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'currentGroupName',
      field: 'currentGroupName',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'destinationGroup',
      field: 'destinationGroup',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'calvingEase',
      field: 'calvingEase',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'oldLactationNumber',
      field: 'oldLactationNumber',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'newborns',
      field: 'newborns',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'cowEntryStatus',
      field: 'cowEntryStatus',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'sire',
      field: 'sire',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'breedingNumber',
      field: 'breedingNumber',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'isOutOfBreedingWindow',
      field: 'isOutOfBreedingWindow',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'interval',
      field: 'interval',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'birthDateCalculated',
      field: 'birthDateCalculated',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
    {
      headerName: 'heatIndexPeak',
      field: 'heatIndexPeak',
      maxWidth: 100,
      editable: true,
      onCellValueChanged: (params) => dataService.editCellData(params)
    },
  ]
}