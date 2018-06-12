export class Job {
  warehouseid: number;
  chemicalid: number;
  chemicalquantity: number;
  special_status: string;
  constructor(warehouseid: number, chemicalid: number, chemicalquantity: number, special_status: string ) {
    this.warehouseid = warehouseid;
    this.chemicalid = chemicalid;
    this.chemicalquantity = chemicalquantity;
    this.special_status = special_status;
  }
}
