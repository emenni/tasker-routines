function selectToSend() {
  var file = readFile(jsonfile);
  var bd = JSON.parse(file);

  
 startdate = formatDate(startdate);
   enddate = formatDate(enddate);

function formatDate(convertDate){
  
  [year, month, day] = convertDate.split('-');
  convertDate = new Date(+year || new Date().getFullYear(), +month - 1, +day);

  return convertDate;

}


  return bd.filter((record) => {
    recorddate = new Date(record.em);
    return startdate <= recorddate && enddate >= recorddate;
  });

}

writeFile(selectedrecords,JSON.stringify(selectToSend()),false);

;
