import { renameSync } from "fs";
import { join } from "path";

(() => {
  ["en", "fr"].forEach((loc) => {
    let root = join(__dirname, `../data/${loc}/menu/item-`);
    for (let i = 11; i >= 1; i--) {
      renameSync(root + i, root + (i + 1));
    }
  });
})();
