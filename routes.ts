import { Project, Route } from "./@types";
import { projects } from "./src/constants/projects";

export const appRoutes: Route[] = [
    {
        path: '/',
        template: {
            filePath: './src/templates/index.pug',
            locals: { title: 'sanaruca' }
        }
    },
]
// adding projects
.concat(projects.map((project) => ({
    path: `/${project.name}`,
    template: {
        filePath: './src/templates/project.pug',
        locals: {
            title: `sanaruca | ${project.name}`,
            project
        }
    }
})))