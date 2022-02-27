export class DateObj {
  start: Date;
  end: Date;

  constructor(start: Date, end: Date) {
    this.start = start;
    this.end = end;
  }

  clone(): DateObj {
    return new DateObj(this.start, this.end);
  }

  isEqual(dateObj: DateObj): boolean {
    return this.start === dateObj.start && this.end === dateObj.end;
  }
}
