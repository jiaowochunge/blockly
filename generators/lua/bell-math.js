'use strict';

goog.provide('Blockly.Lua.bell_math');

goog.require('Blockly.Lua');

Blockly.Lua['bell_math_number'] = function(block) {
  // Numeric value.
  var code = parseFloat(block.getFieldValue('NUM'));
  var order = code < 0 ? Blockly.Lua.ORDER_UNARY :
              Blockly.Lua.ORDER_ATOMIC;
  return [code, order];
};

Blockly.Lua['bell_math_arithmetic_add'] = function(block) {
  var order = Blockly.Lua.ORDER_ADDITIVE;
  var operator = block.getFieldValue('OP');
  var argument0 = Blockly.Lua.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.Lua.valueToCode(block, 'B', order) || '0';
  var code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.Lua['bell_math_arithmetic_minus'] = function(block) {
  var order = Blockly.Lua.ORDER_ADDITIVE;
  var operator = block.getFieldValue('OP');
  var argument0 = Blockly.Lua.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.Lua.valueToCode(block, 'B', order) || '0';
  var code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.Lua['bell_math_arithmetic_multiply'] = function(block) {
  var order = Blockly.Lua.ORDER_MULTIPLICATIVE;
  var operator = '*';//block.getFieldValue('OP');
  var argument0 = Blockly.Lua.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.Lua.valueToCode(block, 'B', order) || '0';
  var code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.Lua['bell_math_arithmetic_divide'] = function(block) {
  var order = Blockly.Lua.ORDER_MULTIPLICATIVE;
  var operator = '/';//block.getFieldValue('OP');
  var argument0 = Blockly.Lua.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.Lua.valueToCode(block, 'B', order) || '0';
  var code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.Lua['bell_math_random_int'] = function(block) {
  // Random integer between [X] and [Y].
  var argument0 = Blockly.Lua.valueToCode(block, 'FROM',
      Blockly.Lua.ORDER_NONE) || '0';
  var argument1 = Blockly.Lua.valueToCode(block, 'TO',
      Blockly.Lua.ORDER_NONE) || '0';
  var code = 'math.random(' + argument0 + ', ' + argument1 + ')';
  return [code, Blockly.Lua.ORDER_HIGH];
};

Blockly.Lua['bell_math_absolute_int'] = function(block) {
  var argument0 = Blockly.Lua.valueToCode(block, 'PARAM1',
      Blockly.Lua.ORDER_NONE) || '0';
  var code = 'math.abs(' + argument0 + ')';
  return [code, Blockly.Lua.ORDER_HIGH];
};
