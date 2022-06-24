function writeNewEntry() {
  var filename = 'Documents/SMSCartao.json';
  var file = readFile(filename);
  var bd = JSON.parse(file);
  bd.push(http_data);
  var changes = bd;
  writeFile(filename, changes, false);
}
writeNewEntry();
