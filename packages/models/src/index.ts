export interface CLI {
  version: string;
  bin: { [key: string]: string };
}