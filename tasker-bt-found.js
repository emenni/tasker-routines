var leituras = {
  //bt_alias,
  //bt_battery_level,
  //bt_class,
  //bt_class_name,
  bt_connected,
  bt_encrypted,
  bt_address,
  bt_major_class,
  bt_major_class_name,
  bt_name,
  bt_paired,
  bt_signal_strength,
  bt_type
};
gravarLeitura = [];

for (leitura in bt_address) {
  flash({
    //btAlias: leituras.bt_alias[leitura] || 'notDeclared',
    //btBatteryLevel: leituras.bt_battery_level[leitura] || 'notDeclared',
    //btClass: leituras.bt_class[leitura] || 'notDeclared',
    //btClassName: leituras.bt_class_name[leitura] || 'notDeclared',
    btConnected: leituras.bt_connected[leitura] || 'notDeclared',
    btEncrypted: leituras.bt_encrypted[leitura] || 'notDeclared',
    btAddress: leituras.bt_address[leitura] || 'notDeclared',
    btMajorClass: leituras.bt_major_class[leitura] || 'notDeclared',
    btMajorClassName: leituras.bt_major_class_name[leitura] || 'notDeclared',
    btName: leituras.bt_name[leitura] || 'notDeclared',
    btPaired: leituras.bt_paired[leitura] || 'notDeclared',
    btSignalStrength: leituras.bt_signal_strength[leitura] || 'notDeclared',
    btType: leituras.bt_type[leitura] || 'notDeclared',
  });
}

/* bt_alias(),
bt_battery_level(),
bt_class(),
bt_class_name(),
bt_connected(),
bt_encrypted(),
bt_address(),
bt_major_class(),
bt_major_class_name(),
bt_name(),
bt_paired(),
bt_signal_strength(),
bt_type(), */
