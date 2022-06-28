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

  var sumup = 0;

  var foundrecords = bd.filter((record) => {
    recorddate = new Date(record.em);

    if (typeof record.RS === 'number') {
      sumup += record.RS;
    }

    return startdate <= recorddate && enddate >= recorddate;
  });

  flash(sumup);

  return foundrecords;
}

writeFile(selectedrecords, JSON.stringify(selectToSend()), false);
