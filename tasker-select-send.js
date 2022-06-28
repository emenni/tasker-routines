function selectToSend() {
  var file = readFile(jsonfile);
  var bd = JSON.parse(file);

 
  var [year, month, day] = startdate.split('-');
  startdate = new Date(+year || new Date().getFullYear(), +month - 1, +day);

  [year, month, day] = enddate.split('-');
  enddate = new Date(+year || new Date().getFullYear(), +month - 1, +day);

  //flash(startdate);

  var resultproductdata = bd.filter(function (a) {
    var hitDates = a.em || {};
    // extract all date strings
    hitDates = Object.keys(hitDates);
    // improvement: use some. this is an improment because .map()
    // and .filter() are walking through all elements.
    // .some() stops this process if one item is found that returns true in the callback function and returns true for the whole expression
    hitDateMatchExists = hitDates.some(function (dateStr) {
      var date = new Date(dateStr);
      return date >= startdate && date <= enddate;
    });
    return hitDateMatchExists;
  });
  
  flash (resultproductdata.length);

  return resultproductdata;

}
var selectedrecords = selectToSend();
