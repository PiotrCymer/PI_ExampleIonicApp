
export class Plant {
  constructor(
    public id: number,
    public name: string,
    public img: string,
    public description: string,
    public category_id: number,
    public insolation: number,
    public humidity: number,
    public temperature: number,
    public difficulty: number,
    public category_name: string
  ) {}
}
