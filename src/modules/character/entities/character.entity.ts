import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { GenderEnum } from '../enums/gender.enums';

@Entity()
export class Character {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id: string;

    @Column({ name: 'name', nullable: false, type: 'varchar' })
    name: string;

    @Column({ name: 'gender', nullable: false, enum: GenderEnum })
	gender: GenderEnum;

    @Column({ name: 'age', nullable: false, type: 'integer' })
    age: number;

    @Column({ name: 'film_status', default: false, type: 'boolean' })
    filmStatus: boolean;

    @ManyToMany(type => Character)
    @JoinTable()
    knownAccomplices: Character[];

    @ManyToMany(type => Character)
    @JoinTable()
    knownEnemies: Character[];

    @CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date;
}
