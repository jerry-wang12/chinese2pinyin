interface IOptions {
  format: "first" | "complete";
  upper: boolean;
  hyphen: string;
}
export type IDict = { [key: string]: string };
export type IBreak = (input: string) => Array<string>;
export type IConvert = (input: string, options?: IOptions) => string;
