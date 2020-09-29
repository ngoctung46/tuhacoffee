export class MenuItem {
  name: string;
  url: string;
  items?: MenuItem[];

  constructor(obj?: any) {
    (this.name = (obj && obj.name) || ''),
      (this.url = (obj && obj.url) || ''),
      (this.items = (obj && obj.items) || []);
  }
}
