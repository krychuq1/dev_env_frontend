import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WarehousesService} from '../../../services/warehouses.service';
import {WarehouseModel} from '../../../modals/warehouse.model';
@Component({
  selector: 'warehouses',
  templateUrl: './warehouses.html',
  styleUrls: ['./warehouses.scss']
})
export class Warehouses implements OnInit {
   @Input() token: string;
   @Output() warehousesOutput: EventEmitter<WarehouseModel[]> = new EventEmitter();
   warehouses: WarehouseModel[];
  constructor(private warehousesServices: WarehousesService) {

  }

  ngOnInit(): void {
    this.warehousesServices.getWarehouses(this.token).subscribe(warehouses => {
      this.warehouses = warehouses as WarehouseModel[];
      this.warehousesOutput.emit(this.warehouses);
      console.log(this.warehouses);
    });
  }
}




