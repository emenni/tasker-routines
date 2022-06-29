gravarLeitura = [];
var timestamp = new Date(Date.now()).toLocaleString();
for (leitura in bt_address) {
  gravarLeitura.push({
    readDate: timestamp,
    //btAlias: bt_alias[leitura],
    //btBatteryLevel : bt_battery_level[leitura] ,
    btClass: bt_class[leitura] ,
    btClassName: bt_class_name[leitura] ,
    btConnected: bt_connected[leitura] ,
    btEncrypted: bt_encrypted[leitura] ,
    btAddress: bt_address[leitura],
    btMajorClass: bt_major_class[leitura] ,
    btMajorClassName:bt_major_class_name[leitura] ,
    btName: bt_name[leitura] ,
    btPaired: bt_paired[leitura] ,
    btSignalStrength:     bt_signal_strength[leitura] ,
    btType: bt_type[leitura] ,
  });
}
  var changes = JSON.stringify(gravarLeitura);
  writeFile(jsonfile, changes, false);

