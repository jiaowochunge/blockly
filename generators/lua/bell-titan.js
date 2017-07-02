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
  return [code, Blockly.Lua.ORDER_ATOMIC];
};

Blockly.Lua['start_titan_servo'] = function (block) {
  var code = `Start_Titan_Servo()\n`;
  return code;
};

Blockly.Lua['set_titan_servo_data2'] = function (block) {
  var motor = Blockly.Lua.valueToCode(block, 'motor', Blockly.Lua.ORDER_ATOMIC) || 1;
  var time = Blockly.Lua.valueToCode(block, 'time', Blockly.Lua.ORDER_ATOMIC) || 1;
  var angle = Blockly.Lua.valueToCode(block, 'angle', Blockly.Lua.ORDER_ATOMIC) || 0;
  var code = `Set_Titan_Servo_Data(${motor}, ${time}, ${angle})\n`;
  return code;
};

Blockly.Lua['get_titan_servo_data2'] = function (block) {
  var motor = Blockly.Lua.valueToCode(block, 'motor', Blockly.Lua.ORDER_ATOMIC) || 1;
  var code = `Get_Titan_Servo_Data(${motor})\n`;
  return [code, Blockly.Lua.ORDER_ATOMIC];
};

Blockly.Lua['titan_motions'] = function (block) {
  var motion = Number(block.getFieldValue('motion'));
  var code = `tt_${motion}_run()\n`;
  return code;
};

Blockly.Lua['titan_motion_01'] = function (block) {
  var code = 'tt_1_run()\n';
  return code;
};

Blockly.Lua['titan_motion_02'] = function (block) {
  var code = 'tt_2_run()\n';
  return code;
};

Blockly.Lua['titan_motion_03'] = function (block) {
  var code = 'tt_3_run()\n';
  return code;
};

Blockly.Lua['titan_motion_04'] = function (block) {
  var code = 'tt_4_run()\n';
  return code;
};

Blockly.Lua['titan_motion_05'] = function (block) {
  var code = 'tt_5_run()\n';
  return code;
};

Blockly.Lua['titan_motion_06'] = function (block) {
  var code = 'tt_6_run()\n';
  return code;
};

Blockly.Lua['titan_motion_07'] = function (block) {
  var code = 'tt_7_run()\n';
  return code;
};

Blockly.Lua['titan_motion_08'] = function (block) {
  var code = 'tt_8_run()\n';
  return code;
};

Blockly.Lua['titan_motion_09'] = function (block) {
  var code = 'tt_9_run()\n';
  return code;
};

Blockly.Lua['titan_motion_10'] = function (block) {
  var code = 'tt_10_run()\n';
  return code;
};
