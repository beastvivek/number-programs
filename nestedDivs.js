function generateDivs(limit, indentation) {
  if (limit === 0) {
    return;
  }
  console.log(indentation + "<div>");
  generateDivs(limit - 1, "  " + indentation);
  console.log(indentation + "</div>");
}

function divs(limit) {
  generateDivs(limit, "");
}

function loopDivs(limit) {
  let openingDivs = "";
  let closingDivs = "";
  let spaces = "";
  let allDivs = "";
  for (let i = 1; i <= limit; i++) {
    openingDivs = openingDivs + spaces + "<div>\n";
    closingDivs = spaces + "</div>\n" + closingDivs;
    spaces = spaces + "  ";
  }
  allDivs = openingDivs + closingDivs;
  console.log(allDivs);
}

function main() {
  console.log("Using recursion");
  divs(3);
  console.log("\nUsing loop");
  loopDivs(3);
}

main();