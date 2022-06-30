(function foundBTDevices() {
  typeof bt_alias === 'undefined' ? (bt_alias = '') : false;
  typeof bt_battery_level === 'undefined' ? (bt_battery_level = '') : false;
  typeof bt_class === 'undefined' ? (bt_class = '') : false;
  typeof bt_class_name === 'undefined' ? (bt_class_name = '') : false;
  typeof bt_connected === 'undefined' ? (bt_connected = '') : false;
  typeof bt_encrypted === 'undefined' ? (bt_encrypted = '') : false;
  typeof bt_address === 'undefined' ? (bt_address = '') : false;
  typeof bt_major_class === 'undefined' ? (bt_major_class = '') : false;
  typeof bt_major_class_name === 'undefined'
    ? (bt_major_class_name = '')
    : false;
  typeof bt_name === 'undefined' ? (bt_name = '') : false;
  typeof bt_paired === 'undefined' ? (bt_paired = '') : false;
  typeof bt_signal_strength === 'undefined' ? (bt_signal_strength = '') : false;
  typeof bt_type === 'undefined' ? (bt_type = '') : false;

  var file = readFile(jsonfile);
  var db = JSON.parse(file);

  var knowdevices = JSON.parse(readFile(knowdevicesdb));

  foundDevices = [];

  var timestamp = new Date(Date.now()).toLocaleString();

  for (leitura in bt_address) {
    foundDevices.push({
      readDate: timestamp,
      location: gl_map_url,
      btAlias: bt_alias[leitura],
      btBatteryLevel: bt_battery_level[leitura],
      btClass: bt_class[leitura],
      btClassName: bt_class_name[leitura],
      btConnected: bt_connected[leitura],
      btEncrypted: bt_encrypted[leitura],
      btAddress: bt_address[leitura],
      btMajorClass: bt_major_class[leitura],
      btMajorClassName: bt_major_class_name[leitura],
      btName: bt_name[leitura],
      btPaired: bt_paired[leitura],
      btSignalStrength: bt_signal_strength[leitura],
      btType: bt_type[leitura],
    });
  }

  foundDevices.forEach((found) => {
    var matched = db.filter((previous) => {
      return previous.btAddress === found.btAddress;
    });

    var foundknowdevice = knowdevices.filter((know) => {
      return know.btAddress === found.btAddress;
    });

    if (foundknowdevice.length === 0) {
      db.push(found);

      var changes = JSON.stringify(db);
      writeFile(jsonfile, changes, true);
    }
  });
})();
