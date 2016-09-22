var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];

  for (var j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];

    if (node.nodeType === 3) {
      var text = node.nodeValue;
      var replacedText = text.replace(/\b(\w+( J)? )?Trump\b/gi, function repl(match) {
        words = match.split(" ")
        var family = ["melania", "ivanka", "ivana", "eric", "tiffany"]
        if (family.indexOf(words[0].toLowerCase()) != -1) {
          return match
        }
        var names = ["donald", "trump"]
        if (names.indexOf(words[0].toLowerCase()) == -1) {
          return words[0] + " Ivanka's Dad"
        }
        return "Ivanka's Dad"
      })

      if (replacedText !== text) {
        element.replaceChild(document.createTextNode(replacedText), node);
      }
    }
  }
}
