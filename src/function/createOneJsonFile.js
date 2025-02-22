import fs from "fs";
import { dataToJsonStringify } from "./dataToJsonStringify.js";

function createOneJsonFile(data) {
  const dataJson = dataToJsonStringify(data);
  fs.writeFileSync('data.JSON', dataJson);
}

export { createOneJsonFile }