import { Project } from "../@types";

export const projects: Project[] = [

  {
    name: 'shoppingapp',
    description: "Shoppingapp is a face-to-face development android app written with React Native. Its function is to help keep track of the purchases that are made regularly in the supermarket in order to save on purchase costs by writing down each product that is being deposited in the shopping cart. In other words, while the user is in the supermarket, he can write down the prices of the products he is going to take.",
    usedSkills: ['react-native', 'expo', 'typescript', 'mobile'],
    imageUrl: ['/public/images/screenshots/shoppingapp.png', 'https://internetmedica.com/wp-content/uploads/2022/01/placeholder-5.png', 'https://internetmedica.com/wp-content/uploads/2022/01/placeholder-5.png'],
    githubRepo: '#'
  },
  {
    name: 'wordfinder-cli',
    description: 'After spending hours trying to discover the word to be found in a crossword puzzle from a series of characters, the need arises to reduce the amount of time spent stuck for not finding the correct word. Why not take advantage of technology to solve this? This is where Worfinder is born.\n\n'
      + 'Wordfinder is a tool capable of finding words that follow a given format or number of characters with a series of letters provided by the user. This tool was developed with the intention of helping to complete levels in games such as "word of wonders" where with a series of letters you must fill in the blanks of a crossword puzzle.',
    usedSkills: ['Node.js', 'typescript', 'cli'],
    imageUrl: ['/public/images/screenshots/wfinder.png', '/public/images/screenshots/wfinder-2.png', '/public/images/screenshots/wfinder-3.png'],
    githubRepo: 'https://github.com/sanaruca/wordfinder-cli'
  },
  {
    name: 'sanaruca-website',
    description: 'This is my website where you can get to know yourself a little more.\n\nAbout the project:\n\nThe project repository is in my github @sanaruca, it is developed with pug.js and sass.',
    usedSkills: ['Node.js', 'typescript', 'cli'],
    imageUrl: ['/public/images/screenshots/website.png', 'https://internetmedica.com/wp-content/uploads/2022/01/placeholder-5.png', 'https://internetmedica.com/wp-content/uploads/2022/01/placeholder-5.png'],
    githubRepo: 'https://github.com/sanaruca/sanaruca.github.io'
  },
]