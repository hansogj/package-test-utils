export const verify = (title, ...output) => {
  output.map(console.log);
  const area = document.querySelector("#verification");
  const pre = document.createElement("pre");

  const actual = `${output.map((it) => JSON.stringify(it)).join(", ")}`.replace(
    /"/g,
    ""
  );

  return {
    toEqual: (expectation) => {
      if (expectation === actual) {
        pre.classList.add("success");
        pre.innerText = `>test "${title}" ran successfully:\n\t "${actual}"`;
      } else {
        pre.classList.add("error");
        pre.innerText = `>test "${title}" ran with error: \n\texpected "${actual}" to equal "${expectation}"`;
      }

      area.appendChild(pre);
    },
  };
};
