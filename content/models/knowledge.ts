import type TechnologyModel from "~/content/models/technology";

export interface KnowledgeModel {
    technology: TechnologyModel;
    stillLearning: boolean;
}

export interface KnowledgeContentModel {
    languages: KnowledgeModel[];
    technologies: KnowledgeModel[];
    appsServices: KnowledgeModel[];
}
