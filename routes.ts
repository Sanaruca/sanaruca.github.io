import { Project, Route } from "./@types";
import { projects } from "./constants/projects";

export const appRoutes: Route[] = [
    {
        path: '/',
        template: {
            filePath: './templates/index.pug',
            locals: { title: 'sanaruca' }
        }
    },
]
// adding projects
.concat(projects.map((project) => ({
    path: `/${project.name}`,
    template: {
        filePath: './templates/project.pug',
        locals: {
            title: `sanaruca | ${project.name}`,
            project
        }
    }
})))