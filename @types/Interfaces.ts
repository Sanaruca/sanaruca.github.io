export type Route<Path extends String = string> = {
    path : Path,
    template:{
        filePath: Path
        locals: {} & {title: string}
    }
}