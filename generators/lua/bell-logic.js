'use strict';

goog.provide('Blockly.Lua.bell_logic');

goog.require('Blockly.Lua');

Blockly.Lua['bell_logic_compare_eq'] = function(block) {
  var operator = '==';
  var argument0 = Blockly.Lua.valueToCode(block, 'A',
      Blockly.Lua.ORDER_RELATIONAL) || '0';
  var argument1 = Blockly.Lua.valueToCode(block, 'B',
      Blockly.Lua.ORDER_RELATIONAL) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, Blockly.Lua.ORDER_RELATIONAL];
};

Blockly.Lua['bell_logic_compare_neq'] = function(block) {
  var operator = '~=';
  var argument0 = Blockly.Lua.valueToCode(block, 'A',
      Blockly.Lua.ORDER_RELATIONAL) || '0';
  var argument1 = Blockly.Lua.valueToCode(block, 'B',
      Blockly.Lua.ORDER_RELATIONAL) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, Blockly.Lua.ORDER_RELATIONAL];
};

Blockly.Lua['bell_logic_compare_lt'] = function(block) {
  var operator = '<';
  var argument0 = Blockly.Lua.valueToCode(block, 'A',
      Blockly.Lua.ORDER_RELATIONAL) || '0';
  var argument1 = Blockly.Lua.valueToCode(block, 'B',
      Blockly.Lua.ORDER_RELATIONAL) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, Blockly.Lua.ORDER_RELATIONAL];
};

Blockly.Lua['bell_logic_compare_lte'] = function(block) {
  var operator = '<=';
  var argument0 = Blockly.Lua.valueToCode(block, 'A',
      Blockly.Lua.ORDER_RELATIONAL) || '0';
  var argument1 = Blockly.Lua.valueToCode(block, 'B',
      Blockly.Lua.ORDER_RELATIONAL) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, Blockly.Lua.ORDER_RELATIONAL];
};

Blockly.Lua['bell_logic_compare_gt'] = function(block) {
  var operator = '>';
  var argument0 = Blockly.Lua.valueToCode(block, 'A',
      Blockly.Lua.ORDER_RELATIONAL) || '0';
  var argument1 = Blockly.Lua.valueToCode(block, 'B',
      Blockly.Lua.ORDER_RELATIONAL) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, Blockly.Lua.ORDER_RELATIONAL];
};

Blockly.Lua['bell_logic_compare_gte'] = function(block) {
  var operator = '>=';
  var argument0 = Blockly.Lua.valueToCode(block, 'A',
      Blockly.Lua.ORDER_RELATIONAL) || '0';
  var argument1 = Blockly.Lua.valueToCode(block, 'B',
      Blockly.Lua.ORDER_RELATIONAL) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, Blockly.Lua.ORDER_RELATIONAL];
};

Blockly.Lua['bell_logic_operation_and'] =
Blockly.Lua['bell_logic_operation_or'] = function(block) {
  // Operations 'and', 'or'.
  var operator = block.getFieldValue('OP');
  var order = (operator == 'and') ? Blockly.Lua.ORDER_AND :
      Blockly.Lua.ORDER_OR;
  var argument0 = Blockly.Lua.valueToCode(block, 'A', order);
  var argument1 = Blockly.Lua.valueToCode(block, 'B', order);
  if (!argument0 && !argument1) {
    // If there are no arguments, then the return value is false.
    argument0 = 'false';
    argument1 = 'false';
  } else {
    // Single missing arguments have no effect on the return value.
    var defaultArgument = (operator == 'and') ? 'true' : 'false';
    if (!argument0) {
      argument0 = defaultArgument;
    }
    if (!argument1) {
      argument1 = defaultArgument;
    }
  }
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.Lua['bell_logic_negate'] = function(block) {
  // Negation.
  var argument0 = Blockly.Lua.valueToCode(block, 'BOOL',
      Blockly.Lua.ORDER_UNARY) || 'true';
  var code = 'not ' + argument0;
  return [code, Blockly.Lua.ORDER_UNARY];
};

Blockly.Lua['bell_logic_boolean_true'] = function(block) {
  return ['true', Blockly.Lua.ORDER_ATOMIC];
}

Blockly.Lua['bell_logic_boolean_false'] = function(block) {
  return ['false', Blockly.Lua.ORDER_ATOMIC];
};
