import find from "find-js";
import "array.onempty";
import { defined, definedList } from "array.defined";
import "array.defined/lib/polyfill";
import maybe from "maybe-for-sure";
import { verify } from "./verify";

export const run = () => {
  verify("hello", "typescript").toEqual("typescript");
  verify("goodbye", "javascript").toEqual("typescript");
  verify(
    "array.onEmpty",
    [].onEmpty((o: any) => o.push("is empty")).shift()
  ).toEqual("is empty");
  verify(
    "array.onEmpty",
    ["is not empty"].onEmpty((o: any) => o.push("is empty")).shift()
  ).toEqual("is not empty");
  verify("array defined", [null, false, undefined, 0, 1].defined()).toEqual(
    "[0,1]"
  );
  verify("definedList", definedList([null, false, undefined, 0, 1])).toEqual(
    "[0,1]"
  );
  verify("defined", defined(null), defined(""), defined(true)).toEqual(
    "false, false, true"
  );
  verify("allDefined", [false, true].allDefined()).toEqual("[]");
  verify("array first", ["first", "second"].first()).toEqual("[first]");

  verify(
    "li:",
    find("li", window.document.body).map((e: HTMLElement) => e.innerText)
  ).toEqual("[find-js,array.onempty,array.defined,maybe-for-sure]");
  verify(
    "maybe",
    maybe(find("ul"))
      .map((it: HTMLElement[]) => it.first().shift())
      .map((it) => it.nodeName)
      .valueOrExecute(() => "no ul in set")
  ).toEqual("UL");
 
};
