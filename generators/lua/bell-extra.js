'use strict';

goog.provide('Blockly.Lua.bell_extra');
goog.require('Blockly.Lua');

Blockly.Lua['bell_extra_get_touch_state'] = function(block) {
  var dropdown_sequence_name = block.getFieldValue('sequence_name');
  // TODO: Assemble Lua into code variable.
  var code = 'Get_touch_state(' + dropdown_sequence_name + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['bell_extra_set_hservo_angle'] = function(block) {
  var dropdown_sequence_name = block.getFieldValue('sequence_name');
  var number_angle = block.getFieldValue('angle');
  // TODO: Assemble Lua into code variable.
  var code = 'Set_hservo_angle(' + dropdown_sequence_name + ', ' + number_angle + ')';
  return code;
};
