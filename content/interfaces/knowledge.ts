export interface KnowledgeI {
    icon: string;
    name: string;
}

export interface KnowledgeContentI {
    languages: KnowledgeI[];
    technologies: KnowledgeI[];
    appsServices: KnowledgeI[];
}
