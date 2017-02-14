'use strict';

goog.provide('Blockly.Lua.bell_sensor');

goog.require('Blockly.Lua');

Blockly.Lua['bell_sensor_gyro_angle'] = function(block) {
  var dropdown_angle = block.getFieldValue('angle');

  var code = `Get_gyro_angle(${dropdown_angle})`;

  return [code, Blockly.Lua.ORDER_ATOMIC];
};

Blockly.Lua['bell_sensor_gyro_angular_velocity'] = function(block) {
  var dropdown_angle = block.getFieldValue('angle');

  var code = `Get_gyro_speed(${dropdown_angle})`;

  return [code, Blockly.Lua.ORDER_ATOMIC];
};

Blockly.Lua['bell_sensor_gyro_gravity_acceleration'] = function(block) {
  var dropdown_angle = block.getFieldValue('angle');

  var code = `Get_gyro_accel(${dropdown_angle})`;

  return [code, Blockly.Lua.ORDER_ATOMIC];
};

Blockly.Lua['bell_sensor_gyro_toggle'] = function(block) {
  var value_switch = Blockly.Lua.valueToCode(block, 'switch', Blockly.Lua.ORDER_ATOMIC);

  if (value_switch == 'true') {
    return 'En_gyro()\n';
  } else if (value_switch == 'false') {
    return 'Dis_gyro()\n';
  } else {
    var code = `if (${value_switch}) then\n`;
    code += Blockly.Lua.INDENT + 'En_gyro()\n';
    code += 'else\n';
    code += Blockly.Lua.INDENT + 'Dis_gyro()\n';
    code += 'end\n';

    return code;
  }
};

Blockly.Lua['bell_sensor_gyro_reset'] = function(block) {
  return 'Reset_gyro()\n';
};

Blockly.Lua['bell_sensor_gyro_stability'] = function(block) {
  var code = 'Get_gyro_stability()';
  return [code, Blockly.Lua.ORDER_ATOMIC];
};

Blockly.Lua['bell_sensor_color_switch_toggle'] = function(block) {
  var dropdown_index = block.getFieldValue('index');
  var value_switch = Blockly.Lua.valueToCode(block, 'switch', Blockly.Lua.ORDER_ATOMIC) || 'false';

  if (value_switch == 'true') {
    return `En_color_sensor(${dropdown_index})\n`;
  } else if (value_switch == 'false') {
    return `Dis_color_sensor(${dropdown_index})\n`;
  } else {
    var code = `if (${value_switch}) then\n`;
    code += `${Blockly.Lua.INDENT}En_color_sensor(${dropdown_index})\n`;
    code += 'else\n';
    code += `${Blockly.Lua.INDENT}Dis_color_sensor(${dropdown_index})\n`;
    code += 'end\n';

    return code;
  }
};

Blockly.Lua['bell_sensor_color_mode_change'] = function(block) {
  var dropdown_index = block.getFieldValue('index');
  var dropdown_mode = block.getFieldValue('mode');

  var code = `Color_sensor_switch(${dropdown_index}, ${dropdown_mode})\n`;

  return code;
};

Blockly.Lua['bell_sensor_color_read_value'] = function(block) {
  var dropdown_index = block.getFieldValue('index');

  var code = `Get_color_data(${dropdown_index})`;

  return [code, Blockly.Lua.ORDER_ATOMIC];
};

Blockly.Lua['bell_sensor_color_palette'] = function(block) {
  var colour_color = block.getFieldValue('color');

  var colorSpace = ['#737373', '#000000','#0050dc','#78fa00','#ffff00','#ff1428','#ffffff','#c81eff','#ff9800'];
  var color_index = colorSpace.indexOf(colour_color);
  if (color_index == -1) {
    color_index = 0;
  }

  var code = `${color_index}`;

  return [code, Blockly.Lua.ORDER_ATOMIC];
};

Blockly.Lua['bell_sensor_ir_switch_toggle'] = function(block) {
  var dropdown_index = block.getFieldValue('index');
  var value_switch = Blockly.Lua.valueToCode(block, 'switch', Blockly.Lua.ORDER_ATOMIC) || 'false';

  if (value_switch == 'true') {
    return `En_infrared_sensor(${dropdown_index})\n`;
  } else if (value_switch == 'false') {
    return `Dis_infrared_sensor(${dropdown_index})\n`;
  } else {
    var code = `if (${value_switch}) then\n`;
    code += `${Blockly.Lua.INDENT}En_infrared_sensor(${dropdown_index})\n`;
    code += 'else\n';
    code += `${Blockly.Lua.INDENT}Dis_infrared_sensor(${dropdown_index})\n`;
    code += 'end\n';

    return code;
  }
};

Blockly.Lua['bell_sensor_ir_read_value'] = function(block) {
  var dropdown_index = block.getFieldValue('index');

  var code = `Get_infrared_data(${dropdown_index})`;

  return [code, Blockly.Lua.ORDER_ATOMIC];
};

Blockly.Lua['bell_sensor_motor_situation'] = function(block) {
  var dropdown_cat = block.getFieldValue('cat');
  var dropdown_index = block.getFieldValue('index');

  var code = `Get_motor_data(${dropdown_index}, ${dropdown_cat})`;

  return [code, Blockly.Lua.ORDER_ATOMIC];
};

Blockly.Lua['bell_sensor_motor_reset'] = function(block) {
  var dropdown_index = block.getFieldValue('index');

  var code = `Reset_motor_pos(${dropdown_index})\n`;

  return code;
};

Blockly.Lua['bell_sensor_motor_reset_all'] = function(block) {
  return 'Reset_all_motors_pos()\n';
};

Blockly.Lua['bell_sensor_sample_rate'] = function(block) {
  var dropdown_sensor = block.getFieldValue('sensor');
  var dropdown_rate = block.getFieldValue('rate');

  var code = `Set_all_sensors_smp(${dropdown_rate}, ${dropdown_sensor})\n`;

  return code;
};

Blockly.Lua['bell_system_get_time'] = function(block) {
  return ['Get_time_ms()', Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['bell_system_reset_time'] = function(block) {
  return 'Reset_time()\n';
};



Blockly.Lua['bell_sensor_audio_note'] = function(block) {
  var value_pitch = Blockly.Lua.valueToCode(block, 'pitch', Blockly.Lua.ORDER_ATOMIC);
  var value_scale = Blockly.Lua.valueToCode(block, 'scale', Blockly.Lua.ORDER_ATOMIC);

  var map = {
    "11": "11", "12": "12", "13": "13", "14": "14", "15": "15", "16": "16", "17": "17",
    "21": "18", "22": "19", "23": "20", "24": "21", "25": "22", "26": "23", "27": "24",
    "31": "25", "32": "26", "33": "27", "34": "28", "35": "29", "36": "30", "37": "31"
  }

  var code = `Beep_play(${map[value_pitch + value_scale]})\n`;
  return code;
};

Blockly.Lua['bell_sensor_audio_pitch'] = function(block) {
  var dropdown_pitch = block.getFieldValue('pitch');

  return [dropdown_pitch, Blockly.Lua.ORDER_ATOMIC];
};

Blockly.Lua['bell_sensor_audio_scale'] = function(block) {
  var dropdown_scale = block.getFieldValue('scale');

  return [dropdown_scale, Blockly.Lua.ORDER_ATOMIC];
};

Blockly.Lua['bell_sensor_audio_stop'] = function(block) {
  return 'Beep_play(32)\n';
};

Blockly.Lua['bell_sensor_audio_preset_snippet'] = function(block) {
  var dropdown_scale = block.getFieldValue('scale');

  return `Beep_play(${dropdown_scale})\n`;
};

Blockly.Lua['bell_sensor_physical_button'] = function(block) {
  var dropdown_index = block.getFieldValue('index');

  if (dropdown_index == 1) {
    return 'r_wait_for_key1()\n';
  } else {
    return 'r_wait_for_key2()\n';
  }
};

Blockly.Lua['bell_sensor_remote_ratio'] = function(block) {
  return ['Get_ble_remote_ratio()', Blockly.Lua.ORDER_ATOMIC];
};

Blockly.Lua['bell_sensor_remote_motion_coordinate'] = function(block) {
  var dropdown_axis = block.getFieldValue('axis');

  return [`Get_ble_remote_vector(${dropdown_axis})`, Blockly.Lua.ORDER_ATOMIC];
};

Blockly.Lua['bell_sensor_remote_power'] = function(block) {
  var dropdown_side = block.getFieldValue('side');

  return [`Get_ble_remote_spd(${dropdown_side})`, Blockly.Lua.ORDER_ATOMIC];
};

// private blocks

Blockly.Lua['bell_sensor_switch'] = function(block) {
  var dropdown_state = block.getFieldValue('state');

  var code = dropdown_state;

  return [code, Blockly.Lua.ORDER_ATOMIC];
};
