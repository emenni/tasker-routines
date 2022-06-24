function bulkLoad() {
  var filename = 'Documents/antigos.json';
  var file = readFile(filename);
  var bd = JSON.parse(file);
  for (var i = 0; i < bd.length; i++){
     SMSRB = bd[0]
  }
}
bulkLoad();
