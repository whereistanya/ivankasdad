var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];

  for (var j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];

    if (node.nodeType === 3) {
      var text = node.nodeValue;
      var replacedText = text.replace(/\b(\w+( J)? )?Trump\b/gi, function repl(match) {
        var names = ["donald trump", "donald j trump", "trump"]
        if (names.indexOf(match.toLowerCase()) == -1) {
          return match
        }
        return "Ivanka's Dad"
      })

      if (replacedText !== text) {
        element.replaceChild(document.createTextNode(replacedText), node);
      }
    }
  }
}
