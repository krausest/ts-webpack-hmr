import * as mod_a from "./a";

let a: typeof mod_a = <any>require("./a.ts");

console.log("This is main.ts => This line should not be repeated when reloading module a.ts");

if (module.hot) {
    console.log("module is hot");
    module.hot.accept(["./a.ts"], function () {
        console.log("module: accept a");
        a = <any>require("./a.ts");
        updateDivContents();
    });
} else {
    console.log("module is not hot. Can't reload the module.");
}

let updateDivContents = function() {
    document.getElementById("a_contents").innerText = a.iAmReloadable();
}
document.addEventListener("DOMContentLoaded", () => { updateDivContents(); });