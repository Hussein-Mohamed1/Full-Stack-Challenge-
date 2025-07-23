import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Section } from './section.schema';

@Injectable()
export class SectionsService {
  constructor(
    @InjectModel(Section.name) private sectionModel: Model<Section>,
  ) {}

  async createSections(idea: string): Promise<Section> {
    // Generate 3 dummy sections
    const sections = ['Hero', 'About', 'Contact'];
    const created = new this.sectionModel({ idea, sections });
    return created.save();
  }

  async getSectionsByIdea(idea: string): Promise<Section | null> {
    return this.sectionModel.findOne({ idea }).exec();
  }
}
