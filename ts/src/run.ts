import find from "find-js";
import "array.onempty";
import { defined, definedList } from "array.defined";
import "array.defined/lib/polyfill";
import maybe from "maybe-for-sure";
let i = 0;
const expectedLogs = 9;
const log = (...output: any[]) => {
  i = i + 1;
  output.map(console.log);
  find("pre")
    .first()
    .map((pre) => {
      pre.innerHTML = `${pre.innerHTML} \n> ${output
        .map((it) => JSON.stringify(it, null, 4))
        .join(", ")}`;
    });
};

export const run = () => {
  log("hello typescript");
  [].onEmpty(() => log("Array is empty"));
  log(["array defined", null, false, undefined, 0, 1].defined().join(", "));
  log(definedList(["definedList", null, false, undefined, 0, 1]).join(", "));
  log("defined", defined(null), defined(""), defined(true));
  log("allDefined", [false, true].allDefined());
  log("array first", ["first", "second"].first());

  log(
    "li:",
    find("li", window.document.body).map((e) => e.innerText)
  );
  maybe(find("ul"))
    .map((it: HTMLElement[]) => it.first().shift())
    .map((it) => it.nodeName)
    .ifSomething((it) => log(`found one ${it} in set`))
    .valueOrExecute(() => log("no ul in set") as any);

  setTimeout(() => {
    if (i !== expectedLogs) {
      log(`You have logged ${i} times - expected to log ${expectedLogs} times`);
    }
  }, 1000);
};
