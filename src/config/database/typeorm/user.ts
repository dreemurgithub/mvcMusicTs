import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  constructor() {
    this.id = 0; // assign a default value of 0 to the id property
    this.name = ""; // assign a default value of an empty string to the name property
    this.username = ""; // assign a default value of an empty string to the username property
    this.password = "";
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 32 })
  name: string;

  @Column("varchar", { length: 32 })
  username: string;

  @Column("varchar", { length: 64 })
  password: string; // 64 is the size of hash string
}
