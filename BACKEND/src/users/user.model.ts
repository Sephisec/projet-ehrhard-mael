import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column({
    type: DataType.TEXT,
    field: 'prenom',
  })
  firstname: string;

  @Column({
    type: DataType.TEXT,
    field: 'nom',
  })
  lastname: string;

  @Column({
    type: DataType.TEXT,
    field: 'adresse',
  })
  address: string;

  @Column({
    type: DataType.CHAR(5),
    field: 'codepostal',
  })
  postCode: number;

  @Column({
    type: DataType.TEXT,
    field: 'ville',
  })
  city: string;

  @Column({
    type: DataType.TEXT,
    validate: {
      isEmail: true,
    },
  })
  email: string;

  @Column({
    type: DataType.CHAR(1),
    field: 'sexe',
  })
  sex: string;

  @Column({
    type: DataType.TEXT,
  })
  login: string;

  @Column({
    type: DataType.TEXT,
  })
  password: string;

  @Column({
    type: DataType.CHAR(20),
  })
  telephone: number;
}