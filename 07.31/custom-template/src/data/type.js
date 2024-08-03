import { exact, string } from "prop-types";

export const itemTypes = exact({
  name: string,
  author: string,
  writtenIn: string,
  type: string,
  license: string,
});
