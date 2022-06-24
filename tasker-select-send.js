function selectToSend() {
  var file = readFile(jsonfile);
  var bd = JSON.parse(file);

  var startDate = new Date(startdate);
  var endDate = new Date(enddate);

  var resultProductData = bd.filter(function (a) {
    var hitDates = a.em || {};
    // extract all date strings
    hitDates = Object.keys(hitDates);
    // improvement: use some. this is an improment because .map()
    // and .filter() are walking through all elements.
    // .some() stops this process if one item is found that returns true in the callback function and returns true for the whole expression
    hitDateMatchExists = hitDates.some(function (dateStr) {
      var date = new Date(dateStr);
      return date >= startDate && date <= endDate;
    });
    return hitDateMatchExists;
  });
  return resultProductData;
}
var selectedrecords = selectToSend();
