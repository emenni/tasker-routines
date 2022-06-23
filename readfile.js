function readJson() {
  var allText = readFile('file://storage/emulated/0/Documents/SMSCartao.json');

  return allText;
}

var result = readJson();
