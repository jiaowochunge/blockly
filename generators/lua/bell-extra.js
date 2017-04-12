'use strict';

goog.provide('Blockly.Lua.bell_extra');
goog.require('Blockly.Lua');

Blockly.Lua['bell_single_motor_light'] = function (block) {
  var sequence = block.getFieldValue('motor');
  var colorList = ['#f45d5d','#0eef53','#f6f550','#4d9edc','#d451f8','#07edfb','#f29450','#fcfcfb'];
  var color = colorList.indexOf(block.getFieldValue('colour')) + 1;
  var mode = block.getFieldValue('mode');
  var code = `Set_motor_led(${sequence}, ${mode}, ${color})\n`;
  return code;
};

Blockly.Lua['bell_touch_state'] = function (block) {
  var sequence = block.getFieldValue('sequence');
  var code = `(Get_touch_state(${sequence}) == 1)\n`;
  return [code, Blockly.Lua.ORDER_ATOMIC];
};

Blockly.Lua['bell_set_hservo_angle'] = function (block) {
  var sequence = block.getFieldValue('sequence');
  var angle = Blockly.Lua.valueToCode(block, 'angle', Blockly.Lua.ORDER_ATOMIC) || 0;
  var code = `Set_hservo_angle(${sequence}, ${angle} + 90)\n`;
  return code;
};

Blockly.Lua['bell_get_hservo_angle'] = function (block) {
  var sequence = block.getFieldValue('sequence');
  var code = `(Get_hservo_angle(${sequence}) - 90)\n`;
  return [code,, Blockly.Lua.ORDER_ATOMIC];
};

Blockly.Lua['bell_set_vservo_angle'] = function (block) {
  var sequence = block.getFieldValue('sequence');
  var angle = Blockly.Lua.valueToCode(block, 'angle', Blockly.Lua.ORDER_ATOMIC) || 0;
  var code = `Set_vservo_angle(${sequence}, ${angle} + 90)\n`;
  return code;
};

Blockly.Lua['bell_get_vservo_angle'] = function (block) {
  var sequence = block.getFieldValue('sequence');
  var code = `(Get_vservo_angle(${sequence}) - 90)\n`;
  return [code,, Blockly.Lua.ORDER_ATOMIC];
};
