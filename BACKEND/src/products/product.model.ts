import { Column, DataType, Model, PrimaryKey } from 'sequelize-typescript';

export class Product extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @Column({
    type: DataType.REAL,
  })
  price: number;
}
