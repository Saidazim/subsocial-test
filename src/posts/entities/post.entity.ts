import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @CreateDateColumn()
  createdAtTime: Date;

  @Column()
  ownerId: string;

  @Column()
  spaceId: string;

  @Column({ nullable: true })
  body: string;

  @Column({ nullable: true })
  tags: string[];

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  syncedBlock: string;

  @Column({ nullable: true })
  syncedContentId: string;
}
