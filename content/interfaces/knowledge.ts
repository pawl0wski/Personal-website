export interface KnowledgeI {
    icon: string;
    name: string;
    stillLearning: boolean;
}

export interface KnowledgeContentI {
    languages: KnowledgeI[];
    technologies: KnowledgeI[];
    appsServices: KnowledgeI[];
}
