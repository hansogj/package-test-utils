const Abonnement = require("@hansogj/abonnement-js").Abonnement;
const find = require("@hansogj/find-js").default;
const maybe = require("@hansogj/maybe").default;
const verify = require('../../shared/verify').verify;
const dependencies = require('../../shared/dependencies').dependencies;
const arrayDefined = require("@hansogj/array.utils/lib/defined");
require("@hansogj/array.utils");

const { defined, definedList } = arrayDefined;

export const run = () => {
    dependencies()
    const abonnement = new Abonnement("init");
    verify("hello", () => "commonJS").toEqual("commonJS");
    verify("array.onEmpty", () =>
        [].onEmpty((o) => o.push("is empty")).shift()
    ).toEqual("is empty");
    verify("array.onEmpty", () =>
        ["is not empty"].onEmpty((o) => o.push("is empty")).shift()
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
        find("li", window.document.body).map((e) => e.innerText)
    ).toEqual([
        "@hansogj/abonnement-js@v3.1.0",
        "@hansogj/array.utils@v1.3.0",
        "@hansogj/find-js@v5.1.0",
        "@hansogj/maybe@v2.0.1",
    ]);
    verify("maybe", () =>
        maybe(find("ul"))
            .map((it) => it.first().shift())
            .map((it) => it.nodeName)
            .valueOrExecute(() => "no ul in set")
    ).toEqual("UL");

    abonnement.varsle("oppdatert verdi");
    abonnement.abonner((val) => verify("@hansogj/abonnement", () => val).toDiffer("init"));
};