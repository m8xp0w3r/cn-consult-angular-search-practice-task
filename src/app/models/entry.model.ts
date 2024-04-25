export class Entry {
  public title: string;
  public text: string;
  public date: Date;
  /**
   * @param text {string} The text of this entry.
   * @param title {string} The title of this entry.
   * @param date {Date} The date of this entry.
   */
  constructor(title: string, text: string, date: Date)
  {
    this.title = title;
    this.text = text;
    this.date = date;
  }
}