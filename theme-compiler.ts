import { theme } from "./src/night-jellyfish.ts";
const json = JSON.stringify(theme);

try {
  Deno.writeTextFileSync(`./themes/night-jellyfish.json`, json);
} catch (e) {
  console.error("error", e);
}

console.info(`night-jellyfish.json file compiled!`);
