import {Injectable} from '@angular/core';
import backend from '../variables';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class InventoryServices {
  private url = backend + 'chemicals/';
  private urlInventoryCrap = backend + 'chemicals/';
  private headers = new HttpHeaders();
  constructor(private http: HttpClient) {}
  getWarehouses(token: string) {
    console.log(token, 'whs');
    const url = this.url + 'all';
    this.headers = this.headers.set('x-access-token', token);
    return this.http.get(url, {headers: this.headers});
  }
  getWarehouseInventory(token: string){
    console.log(token, 'whs');
    const url = this.urlInventoryCrap + 'chem_wareh';
    this.headers = this.headers.set('x-access-token', token);
    return this.http.get(url, {headers: this.headers});
  }

}
