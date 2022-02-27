export class User {
  id: string;
  displayName: string;
  brandId: string;
  brandName: string;
  brandLogo: string;

  constructor(
    id: string,
    displayName: string,
    brandId: string,
    brandName: string,
    brandLogo: string
  ) {
    this.id = id;
    this.displayName = displayName;
    this.brandId = brandId;
    this.brandName = brandName;
    this.brandLogo = brandLogo;
  }
}
