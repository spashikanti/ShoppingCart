export class Product {
    public id: string;
    public productName: string;
    public description: string;
    public specification: Specification;
    public image: string;
    public createdDate: Date;
    public createdBy: string;
    public modifiedDate: Date;
    public modifiedBy: string;
  }
  export class Specification {
    public size: string;
    public price: number;
  }
  