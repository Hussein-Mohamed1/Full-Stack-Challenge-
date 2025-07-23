import { Document } from 'mongoose';
export declare class Section extends Document {
    idea: string;
    sections: string[];
}
export declare const SectionSchema: import("mongoose").Schema<Section, import("mongoose").Model<Section, any, any, any, Document<unknown, any, Section, any> & Section & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Section, Document<unknown, {}, import("mongoose").FlatRecord<Section>, {}> & import("mongoose").FlatRecord<Section> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
