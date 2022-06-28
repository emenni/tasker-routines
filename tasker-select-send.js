function selectToSend() {
  var file = readFile(jsonfile);
  var bd = JSON.parse(file);

  startdate = formatDate(startdate);
  enddate = formatDate(enddate);

  function formatDate(inputtodate) {
    [year, month, day] = inputtodate.split('-');
    inputtodate = new Date(+year || new Date().getFullYear(), +month - 1, +day);

    return inputtodate;
  }

  var foundrecords = bd.filter((record) => {
    recorddate = new Date(record.em);
    return startdate <= recorddate && enddate >= recorddate;
  });

  var sumup = 0;
  foundrecords.forEach((record) => {
    if (typeof record.RS === 'number') {
      sumup += record.RS;
    }
  });


  return [foundrecords , sumup];
}

writeFile(selectedrecords, JSON.stringify(selectToSend()[0]), false);
