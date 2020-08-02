import { renameSync } from "fs";

(() => {
  ["en", "fr"].forEach((loc) => {
    let root = `../data/${loc}/menu/item-`;
    for (let i = 1; i < 11; i++) {
      renameSync(root + i, root + (i + 1));
    }
  });
})();
