import { Project, Route } from "./@types";

export const appRoutes: Route[] = [
    {
        path: '/',
        template: {
            filePath: './templates/index.pug',
            locals: { title: 'sanaruca' }
        }
    },
    {
        path: '/shoppingapp',
        template: {
            filePath: './templates/project.pug',
            locals: {
                title: 'sanaruca',
                project: {
                    name: 'shoppingapp',
                    description: "Shoppingapp is a face-to-face development android app written with React Native. Its function is to help keep track of the purchases that are made regularly in the supermarket in order to save on purchase costs by writing down each product that is being deposited in the shopping cart. In other words, while the user is in the supermarket, he can write down the prices of the products he is going to take.",
                    usedSkills: ['react-native', 'explo', 'typescript', 'mobile']
                } as Project
            }
        }
    },
]