import { DateObj } from "./DateObj";
import { User } from "./User";

export class Opportunity {
  id: string;
  title: string;
  description: string;
  validity: DateObj;
  categories: string[];
  region: string;
  user?: User;

  constructor(
    id: string,
    title: string,
    description: string,
    validity: DateObj,
    categories: string[],
    region: string,
    user?: User
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.validity = validity.clone();
    this.categories = categories;
    this.region = region;
    this.user = user;
  }

  clone(): Opportunity {
    return new Opportunity(
      this.id,
      this.title,
      this.description,
      this.validity,
      this.categories,
      this.region,
      this.user
    );
  }

  isEqual(opportunity: Opportunity): boolean {
    return (
      this.id === opportunity.id &&
      this.title === opportunity.title &&
      this.description === opportunity.description &&
      this.validity.isEqual(opportunity.validity) &&
      this.region === opportunity.region &&
      this.arraysEqual(this.categories, opportunity.categories) && JSON.stringify(this.user) === JSON.stringify(opportunity.user)
    );
  }

  private arraysEqual(a: string[], b: string[]) {
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    const first_sorted_array = [...a].sort((a, b) => this.sortStrings(a, b));
    const second_sorted_array = [...b].sort((a, b) => this.sortStrings(a, b));

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.

    for (var i = 0; i < a.length; ++i) {
      if (first_sorted_array[i] !== second_sorted_array[i]) return false;
    }
    return true;
  }

  private sortStrings(a: string, b: string) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }
}
