'use strict';

goog.provide('Blockly.Lua.bell_flow');

goog.require('Blockly.Lua');

Blockly.Lua['bell_flow_start'] = function(block) {
  var statements_name = Blockly.Lua.statementToCode(block, 'NAME');

  var code = '--Start\n';
  code += 'cg_def("Start",function ()\n';
  code += statements_name;
  code += 'end)\n';

  return code;
};

Blockly.Lua['bell_flow_wait'] = function(block) {
  var value_sec = Blockly.Lua.valueToCode(block, 'sec', Blockly.Lua.ORDER_ATOMIC) || 0;

  var code = `r_Delay(${value_sec})\n`;

  return code;
};

Blockly.Lua['bell_flow_wait_block'] = function(block) {
  var value_block = Blockly.Lua.valueToCode(block, 'block', Blockly.Lua.ORDER_ATOMIC) || false;

  var code = `r_wait_for( function() return ${value_block} end)\n`;

  return code;
};

Blockly.Lua['bell_flow_repeat_finite'] = function(block) {
  var value_count = Blockly.Lua.valueToCode(block, 'count', Blockly.Lua.ORDER_ATOMIC) || 0;
  var statements_exp = Blockly.Lua.statementToCode(block, 'exp');

  var code = `for count = 1, ${value_count} do\n`;
  code += statements_exp;
  code += Blockly.Lua.INDENT + 'mg_yield()\n';
  code += 'end\n';

  return code;
};

Blockly.Lua['bell_flow_repeat_infinite'] = function(block) {
  var statements_exp = Blockly.Lua.statementToCode(block, 'exp') || '-- loop statement\n';

  var code = 'repeat\n';
  code += statements_exp;
  code += Blockly.Lua.INDENT + 'mg_yield()\n';
  code += 'until (false)\n'

  return code;
};

Blockly.Lua['bell_flow_repeat_condition'] = function(block) {
  var value_condition = Blockly.Lua.valueToCode(block, 'condition', Blockly.Lua.ORDER_ATOMIC) || false;
  var statements_exp = Blockly.Lua.statementToCode(block, 'exp') || '-- loop statement\n';

  var code = `while (${value_condition}) do\n`;
  code += statements_exp;
  code += Blockly.Lua.INDENT + 'mg_yield()\n';
  code += 'end\n';

  return code;
};

Blockly.Lua['bell_flow_break'] = function(block) {
  var code = 'break\n';
  return code;
};

Blockly.Lua['bell_flow_if'] = function(block) {
  var value_condition = Blockly.Lua.valueToCode(block, 'condition', Blockly.Lua.ORDER_ATOMIC) || false;
  var statements_exp = Blockly.Lua.statementToCode(block, 'exp') || '-- if statement\n';

  var code = `if (${value_condition}) then\n`;
  code += statements_exp;
  code += 'end\n';

  return code;
};

Blockly.Lua['bell_flow_if_else'] = function(block) {
  var value_condition = Blockly.Lua.valueToCode(block, 'condition', Blockly.Lua.ORDER_ATOMIC) || false;
  var statements_if_exp = Blockly.Lua.statementToCode(block, 'if_exp') || '-- if statement\n';
  var statements_else_exp = Blockly.Lua.statementToCode(block, 'else_exp') || '-- else statement\n';

  var code = `if (${value_condition}) then\n`;
  code += statements_if_exp;
  code += 'else\n';
  code += statements_else_exp;
  code += 'end\n'

  return code;
};
