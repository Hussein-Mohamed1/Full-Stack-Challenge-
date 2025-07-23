import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Section extends Document {
  @Prop({ required: true })
  idea: string;

  @Prop({ type: [String], required: true })
  sections: string[];
}

export const SectionSchema = SchemaFactory.createForClass(Section);
