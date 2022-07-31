import { Route } from "./@types";

export const appRoutes: Route[] = [
    {
        path: '/',
        template: {
            filePath: './templates/index.pug',
            locals: {title: 'sanaruca'}
        }
    }
]