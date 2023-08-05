import { Abonnement } from "@hansogj/abonnement-js";

import "@hansogj/array.utils";
import { defined, definedList } from "@hansogj/array.utils/lib/defined";
import find from "@hansogj/find-js";
import maybe from "@hansogj/maybe";

import { verify } from "../../shared/verify";
import { dependencies } from "../../shared/dependencies";

export const run = () => {
  dependencies();
  const abonnement: Abonnement<String> = new Abonnement<String>("init");
  verify("hello", () => "typescript").toEqual("typescript");
  verify("array.onEmpty", () =>
    [].onEmpty((o: any) => o.push("is empty")).shift()
  ).toEqual("is empty");
  verify("array.onEmpty", () =>
    ["is not empty"].onEmpty((o: any) => o.push("is empty")).shift()
  ).toEqual("is not empty");
  verify("array defined", () =>
    [null, false, undefined, 0, 1].defined()
  ).toEqual([0, 1]);
  verify("definedList", () =>
    definedList([null, false, undefined, 0, 1])
  ).toEqual([0, 1]);
  verify("defined", () => [defined(null), defined(""), defined(true)]).toEqual([
    false,
    false,
    true,
  ]);
  verify("allDefined", () => [false, true].allDefined()).toEqual([]);
  verify("array first", () => ["first", "second"].first()).toEqual(["first"]);
  verify("li:", () =>
    find("li", window.document.body).map((e: HTMLElement) => e.innerText)
  ).toEqual([
    "@hansogj/abonnement-js@v3.2.0",
    "@hansogj/array.utils@v1.3.1",
    "@hansogj/find-js@v5.1.1",
    "@hansogj/maybe@v2.2.1",
  ]);
  verify("maybe", () =>
    maybe(find("ul"))
      .map((it: HTMLElement[]) => it.first().shift())
      .map((it) => it.nodeName)
      .valueOrExecute(() => "no ul in set")
  ).toEqual("UL");

  abonnement.abonner((val) =>
    verify("@hansogj/abonnement", () => val).toDiffer("init ")
  );
  abonnement.varsle("oppdatert verdi");
};
