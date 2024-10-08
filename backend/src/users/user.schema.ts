import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  mainCharacter: string;

  @Prop({ required: true })
  apiKey: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
