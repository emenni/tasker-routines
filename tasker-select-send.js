function selectToSend() {
  var file = readFile(jsonfile);
  var bd = JSON.parse(file);

  var [year, month, day] = startdate.split('-');
  startdate = new Date(+year || new Date().getFullYear(), +month - 1, +day);

  [year, month, day] = enddate.split('-');
  enddate = new Date(+year || new Date().getFullYear(), +month - 1, +day);

  return bd.filter((record) => {
    recorddate = new Date(record.em);
    return startdate <= recorddate && enddate >= recorddate;
  });

}

var selectedrecords = selectToSend();
