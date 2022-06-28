function selectToSend() {
  var file = readFile(jsonfile);
  var bd = JSON.parse(file);

  var [year, month, day] = startdate.split('-');
  startdate = new Date(+year || new Date().getFullYear(), +month - 1, +day);

  [year, month, day] = enddate.split('-');
  enddate = new Date(+year || new Date().getFullYear(), +month - 1, +day);

  //flash(startdate);

  var resultproductdata = bd.filter(function (a) {
    var hitdates = a.em || {};
    // extract all date strings
    hitdates = Object.keys(hitdates);
    // improvement: use some. this is an improment because .map()
    // and .filter() are walking through all elements.
    // .some() stops this process if one item is found that returns true in the callback function and returns true for the whole expression
    hitdatematchexists = hitdates.some(function (datestr) {
      var date = new Date(datestr);
      flash(date.toString())
      flash(startdate.toString())
      flash(enddate.toString())
      return date >= startdate && date <= enddate;
    });
    return hitdatematchexists;
  });

  return resultproductdata;
}
var selectedrecords = selectToSend();
