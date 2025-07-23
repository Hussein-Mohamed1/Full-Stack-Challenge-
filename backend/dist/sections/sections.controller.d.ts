import { SectionsService } from './sections.service';
declare class CreateSectionDto {
    idea: string;
}
export declare class SectionsController {
    private readonly sectionsService;
    constructor(sectionsService: SectionsService);
    create(createSectionDto: CreateSectionDto): Promise<import("./section.schema").Section>;
    findByIdea(idea: string): Promise<import("./section.schema").Section>;
}
export {};
