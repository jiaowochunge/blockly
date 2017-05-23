'use strict';

goog.provide('Blockly.Lua.bell_titan');
goog.require('Blockly.Lua');

Blockly.Lua['set_titan_servo_data'] = function (block) {
  var motor = block.getFieldValue('motor');
  var time = block.getFieldValue('time');
  var angle = parseInt(block.getFieldValue('angle') * 10);
  var code = `Set_Titan_Servo_Data(${motor}, ${time}, ${angle})\n`;
  return code;
};

Blockly.Lua['get_titan_servo_data'] = function (block) {
  var motor = block.getFieldValue('motor');
  var code = `Get_Titan_Servo_Data(${motor})\n`;
  return code;
};

Blockly.Lua['start_titan_servo'] = function (block) {
  var code = `Start_Titan_Servo()\n`;
  return code;
};
