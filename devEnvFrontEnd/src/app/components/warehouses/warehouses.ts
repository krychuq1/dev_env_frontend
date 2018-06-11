import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WarehousesService} from '../../../services/warehouses.service';
import {WarehouseModel} from '../../../modals/warehouse.model';
import {WarehousesChemicalsModel} from '../../../modals/warehousesChemicals.model';
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
  constructor(private warehousesServices: WarehousesService) {
    // subscrobe to the event form jobhistory and call getWarehouse invatotry to update warehouses 
  }

  ngOnInit(): void {
    this.warehousesServices.getWarehouses(this.token).subscribe(warehouses => {
      this.warehouses = warehouses as WarehouseModel[];
      this.warehousesOutput.emit(this.warehouses);
    });
    this.warehousesServices.getWarehouseInventory(this.token).subscribe(data =>{
      this.inventory = data as WarehousesChemicalsModel[];
      this.warehouseInventoryOutput.emit(this.inventory);
    });
  }
}




