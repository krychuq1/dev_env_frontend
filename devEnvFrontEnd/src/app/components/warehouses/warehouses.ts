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
  constructor(private warehousesServices: WarehousesService) {}
  ngOnInit(): void {
    this.warehousesServices.getWarehouses(this.token).subscribe(warehouses => {
      this.warehouses = warehouses as WarehouseModel[];
      this.warehousesOutput.emit(this.warehouses);
      console.log(this.warehouses);
    });
    this.warehousesServices.getWarehouseInventory(this.token).subscribe(data =>{
      this.inventory = data as WarehousesChemicalsModel[];
      this.warehouseInventoryOutput.emit(this.inventory);
      for (var key in this.inventory) {
        console.log("Key: " + key);
        console.log("Value: " + this.inventory[key]);
      }
    });
  }
}




