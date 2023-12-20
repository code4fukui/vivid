import { dir2array } from "https://js.sabae.cc/dir2array.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const fns = await dir2array("./icons/");
fns.sort();
await Deno.writeTextFile("./icons.csv", CSV.stringify(fns.filter(i => i.endsWith(".svg")).map(i => ({ name: i.substring(0, i.indexOf(".")), icon: "icons/" + i }))));
