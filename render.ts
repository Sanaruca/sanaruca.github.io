import path from "path"
import { compileFile } from "pug";
import { writeFile, mkdirSync } from "fs";
import { appRoutes } from "./routes";

for (const { path: routePath, template } of appRoutes) {

    const finalFilePath =  path.join(__dirname, '/build', routePath, 'index.html')
    const renderTemplate = compileFile(template.filePath)

    secureCreateDir(path.dirname(finalFilePath))

    writeFile(
        finalFilePath,
        renderTemplate(template.locals),
        {},
        function () {
            console.log('render template:', template.filePath)
        }
    )
    
}



function secureCreateDir(path:string) {
    mkdirSync(path, {
		recursive: true
	});
}