const verify = (title, test) => {
    const area = document.querySelector("#verification");
    const pre = document.createElement("pre");
    let actual;
    try {
        actual = JSON.stringify(test());
    } catch (error) {
        actual = `${error.stack}`;
    }
    console.log(actual);

  return {
    toEqual: (expectation) => {
      if (JSON.stringify(expectation) === actual) {
        pre.classList.add("success");
        pre.innerText = `>test "${title}" ran successfully:\n\t ${actual}`;
      } else {
        pre.classList.add("error");
        pre.innerText = `>test ${title} ran with error: \n\texpected ${actual} to equal ${expectation}`;
      }
      area.appendChild(pre);
    },
  };
};

try{
    module.exports.verify = verify
} catch {
    window.verify = verify;
}