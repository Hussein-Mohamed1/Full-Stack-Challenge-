import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { SectionsService } from './sections.service';

class CreateSectionDto {
  idea: string;
}

@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {}

  @Post()
  async create(@Body() createSectionDto: CreateSectionDto) {
    const section = await this.sectionsService.createSections(
      createSectionDto.idea,
    );
    return section;
  }

  @Get(':idea')
  async findByIdea(@Param('idea') idea: string) {
    const section = await this.sectionsService.getSectionsByIdea(idea);
    if (!section) {
      throw new NotFoundException('Sections not found for this idea');
    }
    return section;
  }
}
