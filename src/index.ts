import dict from "./dict";
import { IConvert, IBreak } from "../types";

// 分词
const wordBreak: IBreak = (input) => {
  return input
    .split("")
    .filter((char) => !!char && /[\u4e00-\u9fa5a-zA-Z0-9]/.test(char));
};

const convert: IConvert = (input, options) => {
  if (!input || typeof input !== "string") {
    return input;
  }
  const { format = "first", upper = true, hyphen = "" } = options || {};
  let result = "";
  let array = wordBreak(input).map((char) => dict[char] || char);
  if (format === "first") {
    array = array.map((char) => char.charAt(0));
  }
  result = array.join(hyphen);

  return upper ? result.toUpperCase() : result.toLocaleLowerCase();
};

export default convert;
