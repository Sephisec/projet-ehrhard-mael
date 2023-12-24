import { IsNotEmpty, IsString } from 'class-validator';

export class SearchDto {
  @IsString()
  name: string;
}
