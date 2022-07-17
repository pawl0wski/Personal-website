import TechnologyI from "~/content/interfaces/technology";
import LinkI from "~/content/interfaces/link";

export interface ProjectI {
    id: number;
    name: string;
    color: string;
    images: string[];
    technologies: TechnologyI[];
    links: LinkI[];
}
