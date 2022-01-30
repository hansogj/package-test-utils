export const verify = (title: string, ...output: any[]) => {
  output.map(console.log);
  const area = document.querySelector("#verification");
  const pre = document.createElement("pre");

  const actual = `${output.map((it) => JSON.stringify(it)).join(", ")}`.replace(
    /"/g,
    ""
  );

  return {
    toEqual: (expectation: string) => {
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
