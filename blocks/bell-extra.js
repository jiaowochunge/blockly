'use strict';

goog.provide('Blockly.Blocks.bell_extra');
goog.require('Blockly.Blocks');

Blockly.Blocks.bell_extra.HUE = '#123456';

Blockly.Blocks['bell_extra_get_touch_state'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BELL_EXTRA_GET_TOUCH_TITLE)
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"]]), "sequence_name");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.bell_extra.HUE);
    this.setTooltip(Blockly.Msg.BELL_EXTRA_GET_TOUCH_TOOLTIP);
    // TODO
    this.setHelpUrl('../file_path_to_help.html');
  }
};

Blockly.Blocks['bell_extra_set_hservo_angle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BELL_EXTRA_SET_HSERVO_TITLE)
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"]]), "sequence_name")
        .appendField(new Blockly.FieldNumber(90, 0, 180, 1), "angle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.bell_extra.HUE);
    this.setTooltip(Blockly.Msg.BELL_EXTRA_SET_HSERVO_TOOLTIP);
    // TODO
    this.setHelpUrl('../file_path_to_help.html');
  }
};
