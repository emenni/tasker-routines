
var propriedades = [bt_name,bt_address];
propriedadesEnum = Object.keys(propriedades);

for (prop in propriedades) {  
  flash(propriedadesEnum[prop])  
  propriedades[prop].forEach((valor)=>{
   flash(valor)
  })
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
