export class Job {
  warehouseid: number;
  chemicaltype: string;
  chemicalquantity: number;
  special_status: string;
  constructor(warehouseid: number, chemicaltype: string, chemicalquantity: number, special_status: string ) {
    this.warehouseid = warehouseid;
    this.chemicaltype = chemicaltype;
    this.chemicalquantity = chemicalquantity;
    this.special_status = special_status;
  }
}
