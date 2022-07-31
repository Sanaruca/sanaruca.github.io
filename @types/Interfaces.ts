export interface Route<Path extends String = string> {
    path : Path,
    template:{
        filePath: Path
        locals: {} & {title: string}
    }
}

export interface Project {
    name: string,
    description: string,
    usedSkills: string[],
}