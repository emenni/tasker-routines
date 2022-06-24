function writeNewEntry() {
  var file = readFile(jsonfile);
  var bd = JSON.parse(file);
  bd.push(JSON.parse(http_data));
  var changes = JSON.stringify(bd);
  writeFile(jsonfile, changes, false);
}
writeNewEntry();
