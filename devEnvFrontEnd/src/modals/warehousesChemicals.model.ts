export class WarehousesChemicalsModel {
  warehouseid: number;
  chemicalid: number;
  chemicalquantity: number;
  constructor(warehouseid: number, chemicalid: number, chemicalquantity: number){
    this.warehouseid = warehouseid;
    this.chemicalid = chemicalid;
    this.chemicalquantity = chemicalquantity;
  }
}
