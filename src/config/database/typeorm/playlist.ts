import { Entity, Column, PrimaryGeneratedColumn, ManyToOne,JoinColumn } from "typeorm";
import { PLAYLISTNAME_VALIDATE } from "@/config/helper/constant";
import { Userinfor } from "./user";
import { number } from "joi";
@Entity()
export class PlayList {
  constructor() {
    this.id = 0;
    this.playlistName = "";
    this.userId = 0;
    this.view =0;
    this.image = ""
    this.songList = [];
    this.createdAt = new Date();
    this.updatedAt = new Date();
    // fix typescript bug
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: PLAYLISTNAME_VALIDATE.max })
  playlistName: string;

  @Column()
  image: string;

  @Column({default: 0})
  view: number;

  
  // @JoinColumn({name: 'userId',referencedColumnName: 'id'})
  // @Column()
  @ManyToOne(() =>Userinfor ,user => user.id )
  userId: number;

  @Column("varchar", { length: PLAYLISTNAME_VALIDATE.max ,array: true})
  songList: string[]; // 64 is the size of hash string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
