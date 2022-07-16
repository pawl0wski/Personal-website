import TechnologyI from "~/content/interfaces/technology";

export interface ProjectI {
    id: number;
    name: string;
    color: string;
    images: string[];
    technologies: TechnologyI[];
}
