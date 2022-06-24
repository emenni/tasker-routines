function readJson() {
  //result.push(http_data)

  var allText = JSON.parse(readFile('Documents/SMSCartao.json'));

  return allText;
}

var result = readJson();
