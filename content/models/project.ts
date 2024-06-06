import type TechnologyModel from "~/content/models/technology";
import type LinkModel from "~/content/models/link";

export interface ProjectModel {
    id: number;
    name: string;
    color: string;
    images: string[];
    technologies: TechnologyModel[];
    links: LinkModel[];
}
