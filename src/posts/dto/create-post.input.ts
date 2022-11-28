import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class ContentType {
  @Field()
  body: string;

  @Field(type => [String])
  @IsOptional()
  tags: string[];

  @Field()
  @IsOptional()
  image: string;

  @Field()
  @IsOptional()
  title: string;
}
@InputType()
export class CreatePostInput {
  @Field()
  spaceId: string;

  @Field()
  ownerId: string;

  @Field(type => ContentType)
  content: ContentType
}
