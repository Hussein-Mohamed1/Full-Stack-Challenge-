import { Model } from 'mongoose';
import { Section } from './section.schema';
export declare class SectionsService {
    private sectionModel;
    constructor(sectionModel: Model<Section>);
    createSections(idea: string): Promise<Section>;
    getSectionsByIdea(idea: string): Promise<Section | null>;
}
