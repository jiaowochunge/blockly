'use strict';

goog.provide('Blockly.Lua.bell_motion');

goog.require('Blockly.Lua');

Blockly.Lua['bell_motion_move_infinite'] = function(block) {
  var dropdown_index = block.getFieldValue('index');
  var dropdown_mode = block.getFieldValue('mode');
  var value_power = Blockly.Lua.valueToCode(block, 'power', Blockly.Lua.ORDER_ATOMIC) || 0;
  if (value_power > 100) {
    value_power = 100;
  } else if (value_power < -100) {
    value_power = -100;
  }

	var code = '';
	if (dropdown_mode == 1) {
		code = `Single_wheel_ctrl(${dropdown_index}, ${value_power})\n`;
	} else {
		code = `Single_wheel_free(${dropdown_index}, ${value_power})\n`;
	}

  return code;
};

Blockly.Lua['bell_motion_move_sec'] = function(block) {
  var dropdown_index = block.getFieldValue('index');
  var value_power = Blockly.Lua.valueToCode(block, 'power', Blockly.Lua.ORDER_ATOMIC) || 0;
  var value_sec = Blockly.Lua.valueToCode(block, 'sec', Blockly.Lua.ORDER_ATOMIC) || 0;
  if (value_power > 100) {
    value_power = 100;
  } else if (value_power < -100) {
    value_power = -100;
  }
  if (value_sec < 0) {
    value_sec = 0;
  } else if (value_sec > 65535) {
    value_sec = 65535;
  }

  var code = `Single_wheel_time(${dropdown_index}, ${value_power}, ${value_sec})\n`;
  code += `_wait_for_wheels(${dropdown_index})\n`;

  return code;
};

Blockly.Lua['bell_motion_move_distance'] = function(block) {
  var dropdown_index = block.getFieldValue('index');
  var value_power = Blockly.Lua.valueToCode(block, 'power', Blockly.Lua.ORDER_ATOMIC) || 0;
  var value_distance = Blockly.Lua.valueToCode(block, 'distance', Blockly.Lua.ORDER_ATOMIC) || 0;
  if (value_power > 100) {
    value_power = 100;
  } else if (value_power < -100) {
    value_power = -100;
  }
  if (value_distance < 0) {
    value_distance = 0;
  } else if (value_distance > 10000) {
    value_distance = 10000;
  }

  var code = `Single_wheel_length(${dropdown_index}, ${value_power}, ${value_distance})\n`;
  code += `_wait_for_wheels(${dropdown_index})\n`;

  return code;
};

Blockly.Lua['bell_motion_all_stop'] = function(block) {
  var dropdown_brake = block.getFieldValue('brake');

  var code = `All_motors_stop(${dropdown_brake})\n`;

  return code;
};

Blockly.Lua['bell_motion_stop'] = function(block) {
  var dropdown_index = block.getFieldValue('index');
  var dropdown_brake = block.getFieldValue('brake');

  var code = `Single_wheel_stop(${dropdown_index}, ${dropdown_brake})\n`;

  return code;
};
