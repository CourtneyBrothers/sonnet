let sonnet = document.getElementById("sonnet");
let output = document.getElementById("output");

let sonnetText = sonnet.innerHTML;

console.log("sonnet text", sonnetText,"orphans",sonnetText.indexOf("orphans,"),"length",sonnetText.length);

let replaceSonnet = sonnetText.replace("winter","yuletide").replace("winter's","yuletide's").replace("the","a large");
console.log(replaceSonnet);
output.innerHTML = `${sonnetText.indexOf("orphans,")} ${sonnetText.length} ${replaceSonnet}`;