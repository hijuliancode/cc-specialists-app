export interface Specialist {
  id: string;
  image: string;
  prefix: string;
  name: string;
  career: string;
  rate: number;
  location: string;
  availability: Date;
  detail: {
    description: string;
    specialities: string[]
  }
}
