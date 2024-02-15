// resolves to node_modules/consola/dist/browser
import { consola, createConsola } from "consola";

export default defineEventHandler(async () => {

    // Output is very basic. No date-time, no colors (i guess BasicReporter is used)
    // taken from https://github.com/unjs/consola/?tab=readme-ov-file#getting-started
    consola.info("Using consola 3.0.0");
    consola.start("Building project...");
    consola.warn("A new version of consola is available: 3.0.1");
    consola.success("Project built!");
    consola.error(new Error("This is an example error. Everything is fine!"));
    consola.box("I am a simple box");


    const logger = createConsola({
        level: 4,
        
        // Unable to set fancy reporter here:
        // Object literal may only specify known properties, and 'fancy' does not exist in type 'Partial<ConsolaOptions>'
        // fancy: true
        
        formatOptions: {
            columns: 80,
            colors: true,
            compact: false,
            date: true,
        },
    });

    // no date or colors are printed
    logger.error('I am a error :-)')

})