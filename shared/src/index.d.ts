type equal = (val: any) => void;

export declare const html: (template: string) => DocumentFragment;
export declare const suite: (prop: string) => any;
export declare const dependencies: () => void;
export declare const versions: string[];
export declare const verify: (
  title: string,
  cb: () => void
) => {
  toEqual: equal;
  toDiffer: equal;
};
