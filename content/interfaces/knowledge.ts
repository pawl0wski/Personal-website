import TechnologyI from "~/content/interfaces/technology";

export interface KnowledgeI {
    technology: TechnologyI;
    stillLearning: boolean;
}

export interface KnowledgeContentI {
    languages: KnowledgeI[];
    technologies: KnowledgeI[];
    appsServices: KnowledgeI[];
}
