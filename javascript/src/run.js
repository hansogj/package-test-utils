

window.run = () => {
    const { defined, definedList } = window.defined;
    const find = window.find.default;

    verify("hello", () => "javascript").toEqual("typescript");
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
        "array.defined"
    ]);

}