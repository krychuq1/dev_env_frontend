import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WarehousesService} from '../../../services/warehouses.service';
import {WarehouseModel} from '../../../modals/warehouse.model';
import {WarehousesChemicalsModel} from '../../../modals/warehousesChemicals.model';
import {JobService} from "../../../services/job.service";
import {JobHistoryService} from "../../../services/jobHistory.service";
@Component({
  selector: 'warehouses',
  templateUrl: './warehouses.html',
  styleUrls: ['./warehouses.scss']
})
export class Warehouses implements OnInit {
   @Input() token: string;
   @Output() warehousesOutput: EventEmitter<WarehouseModel[]> = new EventEmitter();
   @Output() warehouseInventoryOutput: EventEmitter<WarehousesChemicalsModel[]> = new EventEmitter();
   warehouses: WarehouseModel[];
   inventory: WarehousesChemicalsModel[];
  constructor(private warehousesServices: WarehousesService, private warehousesService: WarehousesService) {
    this.warehousesService.updateWarehousesEmitter.subscribe(next => {
      console.log('I am subscribing! ');
      this.getWarehousesInventory();
    });
  }

  ngOnInit(): void {
    this.warehousesServices.getWarehouses(this.token).subscribe(warehouses => {
      this.warehouses = warehouses as WarehouseModel[];
      this.warehousesOutput.emit(this.warehouses);
    });
    this.getWarehousesInventory();
  }

  getWarehousesInventory(){
    this.warehousesServices.getWarehouseInventory(this.token).subscribe(data =>{
      this.inventory = data as WarehousesChemicalsModel[];
      console.log('Inventory is: ', this.inventory);
      this.warehouseInventoryOutput.emit(this.inventory);
    });
  }
}




