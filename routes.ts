import { Route } from "./@types";

export const appRoutes: Route[] = [
    {
        path: '/',
        template: {
            filePath: './templates/index.pug',
            locals: {title: 'sanaruca'}
        }
    },
    {
        path: '/shoppingapp',
        template: {
            filePath: './templates/project.pug',
            locals: {title: 'sanaruca'}
        }
    },
]