const { task, src, dest } = require("gulp");
const sass = require("gulp-sass")(require("node-sass"));

task("scss", () => src("./src/assets/scss/main.scss").pipe(sass()).pipe(dest("./src/assets/css")));
