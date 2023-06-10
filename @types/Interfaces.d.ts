export interface Route<Path extends String = string> {
    path : Path,
    template:{
        filePath: Path
        locals: {[key:string]: any} & {title: string}
    }
}

export interface Project {
    name: string,
    description: string,
    usedSkills: string[],
    images: [string, string?, string?]
    githubRepo: string
}

export interface TiemelineProps {
  data: {
    position: string;
    formYear: number;
    toYear: number;
    description: string;
    company: string;
  }
}