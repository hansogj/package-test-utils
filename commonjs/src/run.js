const Abonnement = require("abonnement-js").Abonnement;
const find = require("find-js").default;
const maybe = require("maybe-for-sure").default;
const verify = require('../../shared/verify').verify;
const arrayDefined = require("array.defined");
require("array.onempty");

const { defined, definedList } = arrayDefined;

export const run = () => {
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
        "find-js",
        "array.onempty",
        "array.defined",
        "maybe-for-sure",
        "abonnement-js",
    ]);
    verify("maybe", () =>
        maybe(find("ul"))
            .map((it) => it.first().shift())
            .map((it) => it.nodeName)
            .valueOrExecute(() => "no ul in set")
    ).toEqual("UL");

    abonnement.abonner((val) => verify("abonnement", () => val).toEqual("init"));
    abonnement.varsle("oppdatert verdi");
};