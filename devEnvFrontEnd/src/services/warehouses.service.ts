import {EventEmitter, Injectable} from '@angular/core';
import backend from '../variables';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class WarehousesService {
  private url = backend + 'warehouses/';
  private urlInventoryCrap = backend + 'chemicals/';
  private headers = new HttpHeaders();
  public updateWarehousesEmitter: EventEmitter<boolean> = new EventEmitter();
  constructor(private http: HttpClient) {}
  getWarehouses(token: string) {
    const url = this.url + 'all';
    this.headers = this.headers.set('x-access-token', token);
    return this.http.get(url, {headers: this.headers});
  }
  postInWarehouseInventory(token: string, warehouseid:number, chemicalid:number, chemicalquantity: number){
    return new Promise((resolve, reject) => {
      let inventoryItem = {
        warehouseid: warehouseid,
        chemicalid: chemicalid,
        chemicalquantity: chemicalquantity
      };
      const url = this.urlInventoryCrap + 'chem_wareh';
      this.headers = this.headers.set('x-access-token', token);
      this.http.post(url, inventoryItem, {headers: this.headers}).subscribe(result => {
        this.updateWarehousesEmitter.emit(true);
        resolve(result);
      }, error => {
        reject(error);
      });

    });

  }
  getWarehouseInventory(token: string){
    const url = this.urlInventoryCrap + 'chem_wareh';
    this.headers = this.headers.set('x-access-token', token);
    return this.http.get(url, {headers: this.headers});
  }
}
