export class Sold{
    constructor(
        public invoiceNumber?:number,
        public serialNumber?:number,
        public quantity?:number,
        public price?:number,
        public date?:Date
    ) {}
  }