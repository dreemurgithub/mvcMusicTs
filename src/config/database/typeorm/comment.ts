import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
  constructor() {
    this.id = 0; // assign a default value of 0 to the id property
    this.playlistId = 0; // assign a default value of an empty string to the name property
    this.userId = 0; // assign a default value of an empty string to the username property
    this.content = "";
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  playlistId: number;

  @Column()
  userId: number;

  @Column()
  content: string;


  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
