import { PrimaryColumn, Column, Entity, Unique } from 'typeorm';

@Entity({ name: 'Note' })
@Unique(["note"])
export class Note {
  @PrimaryColumn()
  public note!: Buffer;

  @Column()
  public blockNum!: number;

  @Column()
  public nullifier!: boolean;

  @Column({ nullable: true })
  public owner!: string;
}