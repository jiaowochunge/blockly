'use strict';

goog.provide('Blockly.Lua.bell_titan');
goog.require('Blockly.Lua');

Blockly.Lua['set_titan_servo_data'] = function (block) {
  var motor = block.getFieldValue('motor');
  var time = block.getFieldValue('time');
  var angle = block.getFieldValue('angle');
  var code = `set_titan_servo_data(${motor}, ${time}, ${angle})\n`;
  return code;
};

Blockly.Lua['get_titan_servo_data'] = function (block) {
  var motor = block.getFieldValue('motor');
  var code = `get_titan_servo_data(${motor})\n`;
  return code;
};

Blockly.Lua['start_titan_servo'] = function (block) {
  var code = `start_titan_servo()\n`;
  return code;
};
