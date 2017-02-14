'use strict';

goog.provide('Blockly.Lua.bell_light');

goog.require('Blockly.Lua');

Blockly.Lua['bell_light_mode'] = function(block) {
  var dropdown_index = block.getFieldValue('index');
  var dropdown_mode = block.getFieldValue('mode');

  var code = `Led_mode_switch(${dropdown_index}, ${dropdown_mode})\n`;

  return code;
};

Blockly.Lua['bell_light_color'] = function(block) {
  var dropdown_index = block.getFieldValue('index');
  var colour_color = block.getFieldValue('color');
  var colorArr = ['#f45d5d','#0eef53','#f6f550','#4d9edc','#d451f8','#07edfb','#f29450','#fcfcfb'];
  var colorIndex = colorArr.indexOf(colour_color) + 1;
  // 找不到对应颜色，默认第一个颜色
  if (colorIndex == 0) {
    colorIndex = 1;
  }

  var code = `Led_set_color(${dropdown_index}, ${colorIndex})\n`;

  return code;
};

Blockly.Lua['bell_light_off'] = function(block) {
  var dropdown_index = block.getFieldValue('index');

  var code = `Led_off(${dropdown_index})\n`;

  return code;
};
