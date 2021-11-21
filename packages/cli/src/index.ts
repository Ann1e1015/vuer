import { initExec } from '@vuer/commands';

export interface CLI {
  version: string;
  bin: { [key: string]: string };
}