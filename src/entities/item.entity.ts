import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('items')
export class ItemEntity {
  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  public name: string;

  @Column({ type: 'varchar', length: 36, nullable: false })
  public category_id: string;
}
