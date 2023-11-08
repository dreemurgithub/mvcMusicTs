import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class playList {
  constructor() {
    this.id = 0;
    this.playlistName = "";
    this.userId = 0;
    this.songId = [""];
    this.createdAt = new Date();
    this.updatedAt = new Date();
    // fix typescript bug
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 32 })
  playlistName: string;

  @Column("varchar", { length: 32 })
  userId: number;

  @Column("varchar", { length: 32 })
  songId: string[]; // 64 is the size of hash string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
