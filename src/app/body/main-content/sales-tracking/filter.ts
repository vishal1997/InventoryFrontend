export class Filter {
    constructor(
      public initialDate?: Date,
      public finalDate?: Date,
      public initialPrice?: number,
      public finalPrice?:number,
      public productName?:string
    ) {}
  }