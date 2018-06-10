import {Component, Input, OnInit} from '@angular/core';
import {WarehousesService} from '../../../services/warehouses.service';
import {WarehouseModel} from '../../../modals/warehouse.model';
@Component({
  selector: 'warehouses',
  templateUrl: './warehouses.html',
  styleUrls: ['./warehouses.scss']
})
export class Warehouses implements OnInit {
   @Input() token: string;
   warehouses: WarehouseModel[];
  constructor(private warehousesServices: WarehousesService) {

  }

  ngOnInit(): void {
    this.warehousesServices.getWarehouses(this.token).subscribe(warehouses => {
      this.warehouses = warehouses as WarehouseModel[];
      console.log(this.warehouses);
    });
  }
}




