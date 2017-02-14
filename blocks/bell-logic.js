'use strict';

goog.provide('Blockly.Blocks.bell_logic');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.bell_logic.HUE = '#ec407a';

Blockly.Blocks['bell_logic_compare_eq'] = {
  /**
   * Block for comparison operator.
   * @this Blockly.Block
   */
  init: function() {
    var rtlOperator = '=';
    var ltrOperator = '=';
    var OPERATOR = this.RTL ? rtlOperator : ltrOperator;
    this.setHelpUrl(Blockly.Msg.BELL_LOGIC_COMPARE_EQ_HELPURL);
    this.setColour(Blockly.Blocks.bell_logic.HUE);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A')
        .setCheck('Number');
    this.appendValueInput('B')
        .setCheck('Number')
        .appendField(new Blockly.FieldLabel(OPERATOR), 'OP');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.BELL_LOGIC_COMPARE_EQ_TOOLTIP);
    this.prevBlocks_ = [null, null];
  },
  /**
   * Called whenever anything on the workspace changes.
   * Prevent mismatched types from being compared.
   * @param {!Blockly.Events.Abstract} e Change event.
   * @this Blockly.Block
   */
  onchange: function(e) {
    var blockA = this.getInputTargetBlock('A');
    var blockB = this.getInputTargetBlock('B');
    // Disconnect blocks that existed prior to this change if they don't match.
    if (blockA && blockB &&
        !blockA.outputConnection.checkType_(blockB.outputConnection)) {
      // Mismatch between two inputs.  Disconnect previous and bump it away.
      // Ensure that any disconnections are grouped with the causing event.
      Blockly.Events.setGroup(e.group);
      for (var i = 0; i < this.prevBlocks_.length; i++) {
        var block = this.prevBlocks_[i];
        if (block === blockA || block === blockB) {
          block.unplug();
          block.bumpNeighbours_();
        }
      }
      Blockly.Events.setGroup(false);
    }
    this.prevBlocks_[0] = blockA;
    this.prevBlocks_[1] = blockB;
  }
};

Blockly.Blocks['bell_logic_compare_neq'] = {
  /**
   * Block for comparison operator.
   * @this Blockly.Block
   */
  init: function() {
    var rtlOperator = '\u2260';
    var ltrOperator = '\u2260';
    var OPERATOR = this.RTL ? rtlOperator : ltrOperator;
    this.setHelpUrl(Blockly.Msg.BELL_LOGIC_COMPARE_NEQ_HELPURL);
    this.setColour(Blockly.Blocks.bell_logic.HUE);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A')
        .setCheck('Number');
    this.appendValueInput('B')
        .setCheck('Number')
        .appendField(new Blockly.FieldLabel(OPERATOR), 'OP');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.BELL_LOGIC_COMPARE_NEQ_TOOLTIP);
    this.prevBlocks_ = [null, null];
  },
  /**
   * Called whenever anything on the workspace changes.
   * Prevent mismatched types from being compared.
   * @param {!Blockly.Events.Abstract} e Change event.
   * @this Blockly.Block
   */
  onchange: function(e) {
    var blockA = this.getInputTargetBlock('A');
    var blockB = this.getInputTargetBlock('B');
    // Disconnect blocks that existed prior to this change if they don't match.
    if (blockA && blockB &&
        !blockA.outputConnection.checkType_(blockB.outputConnection)) {
      // Mismatch between two inputs.  Disconnect previous and bump it away.
      // Ensure that any disconnections are grouped with the causing event.
      Blockly.Events.setGroup(e.group);
      for (var i = 0; i < this.prevBlocks_.length; i++) {
        var block = this.prevBlocks_[i];
        if (block === blockA || block === blockB) {
          block.unplug();
          block.bumpNeighbours_();
        }
      }
      Blockly.Events.setGroup(false);
    }
    this.prevBlocks_[0] = blockA;
    this.prevBlocks_[1] = blockB;
  }
};

Blockly.Blocks['bell_logic_compare_lt'] = {
  /**
   * Block for comparison operator.
   * @this Blockly.Block
   */
  init: function() {
    var rtlOperator = '\u200F<\u200F';
    var ltrOperator = '<';
    var OPERATOR = this.RTL ? rtlOperator : ltrOperator;
    this.setHelpUrl(Blockly.Msg.BELL_LOGIC_COMPARE_LT_HELPURL);
    this.setColour(Blockly.Blocks.bell_logic.HUE);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A')
        .setCheck('Number');
    this.appendValueInput('B')
        .setCheck('Number')
        .appendField(new Blockly.FieldLabel(OPERATOR), 'OP');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.BELL_LOGIC_COMPARE_LT_TOOLTIP);
    this.prevBlocks_ = [null, null];
  },
  /**
   * Called whenever anything on the workspace changes.
   * Prevent mismatched types from being compared.
   * @param {!Blockly.Events.Abstract} e Change event.
   * @this Blockly.Block
   */
  onchange: function(e) {
    var blockA = this.getInputTargetBlock('A');
    var blockB = this.getInputTargetBlock('B');
    // Disconnect blocks that existed prior to this change if they don't match.
    if (blockA && blockB &&
        !blockA.outputConnection.checkType_(blockB.outputConnection)) {
      // Mismatch between two inputs.  Disconnect previous and bump it away.
      // Ensure that any disconnections are grouped with the causing event.
      Blockly.Events.setGroup(e.group);
      for (var i = 0; i < this.prevBlocks_.length; i++) {
        var block = this.prevBlocks_[i];
        if (block === blockA || block === blockB) {
          block.unplug();
          block.bumpNeighbours_();
        }
      }
      Blockly.Events.setGroup(false);
    }
    this.prevBlocks_[0] = blockA;
    this.prevBlocks_[1] = blockB;
  }
};

Blockly.Blocks['bell_logic_compare_lte'] = {
  /**
   * Block for comparison operator.
   * @this Blockly.Block
   */
  init: function() {
    var rtlOperator = '\u200F\u2264\u200F';
    var ltrOperator = '\u2264';
    var OPERATOR = this.RTL ? rtlOperator : ltrOperator;
    this.setHelpUrl(Blockly.Msg.BELL_LOGIC_COMPARE_LTE_HELPURL);
    this.setColour(Blockly.Blocks.bell_logic.HUE);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A')
        .setCheck('Number');
    this.appendValueInput('B')
        .setCheck('Number')
        .appendField(new Blockly.FieldLabel(OPERATOR), 'OP');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.BELL_LOGIC_COMPARE_LTE_TOOLTIP);
    this.prevBlocks_ = [null, null];
  },
  /**
   * Called whenever anything on the workspace changes.
   * Prevent mismatched types from being compared.
   * @param {!Blockly.Events.Abstract} e Change event.
   * @this Blockly.Block
   */
  onchange: function(e) {
    var blockA = this.getInputTargetBlock('A');
    var blockB = this.getInputTargetBlock('B');
    // Disconnect blocks that existed prior to this change if they don't match.
    if (blockA && blockB &&
        !blockA.outputConnection.checkType_(blockB.outputConnection)) {
      // Mismatch between two inputs.  Disconnect previous and bump it away.
      // Ensure that any disconnections are grouped with the causing event.
      Blockly.Events.setGroup(e.group);
      for (var i = 0; i < this.prevBlocks_.length; i++) {
        var block = this.prevBlocks_[i];
        if (block === blockA || block === blockB) {
          block.unplug();
          block.bumpNeighbours_();
        }
      }
      Blockly.Events.setGroup(false);
    }
    this.prevBlocks_[0] = blockA;
    this.prevBlocks_[1] = blockB;
  }
};

Blockly.Blocks['bell_logic_compare_gt'] = {
  /**
   * Block for comparison operator.
   * @this Blockly.Block
   */
  init: function() {
    var rtlOperator = '\u200F>\u200F';
    var ltrOperator = '>';
    var OPERATOR = this.RTL ? rtlOperator : ltrOperator;
    this.setHelpUrl(Blockly.Msg.BELL_LOGIC_COMPARE_GT_HELPURL);
    this.setColour(Blockly.Blocks.bell_logic.HUE);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A')
        .setCheck('Number');
    this.appendValueInput('B')
        .setCheck('Number')
        .appendField(new Blockly.FieldLabel(OPERATOR), 'OP');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.BELL_LOGIC_COMPARE_GT_TOOLTIP);
    this.prevBlocks_ = [null, null];
  },
  /**
   * Called whenever anything on the workspace changes.
   * Prevent mismatched types from being compared.
   * @param {!Blockly.Events.Abstract} e Change event.
   * @this Blockly.Block
   */
  onchange: function(e) {
    var blockA = this.getInputTargetBlock('A');
    var blockB = this.getInputTargetBlock('B');
    // Disconnect blocks that existed prior to this change if they don't match.
    if (blockA && blockB &&
        !blockA.outputConnection.checkType_(blockB.outputConnection)) {
      // Mismatch between two inputs.  Disconnect previous and bump it away.
      // Ensure that any disconnections are grouped with the causing event.
      Blockly.Events.setGroup(e.group);
      for (var i = 0; i < this.prevBlocks_.length; i++) {
        var block = this.prevBlocks_[i];
        if (block === blockA || block === blockB) {
          block.unplug();
          block.bumpNeighbours_();
        }
      }
      Blockly.Events.setGroup(false);
    }
    this.prevBlocks_[0] = blockA;
    this.prevBlocks_[1] = blockB;
  }
};

Blockly.Blocks['bell_logic_compare_gte'] = {
  /**
   * Block for comparison operator.
   * @this Blockly.Block
   */
  init: function() {
    var rtlOperator = '\u200F\u2265\u200F';
    var ltrOperator = '\u2265';
    var OPERATOR = this.RTL ? rtlOperator : ltrOperator;
    this.setHelpUrl(Blockly.Msg.BELL_LOGIC_COMPARE_GTE_HELPURL);
    this.setColour(Blockly.Blocks.bell_logic.HUE);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A')
        .setCheck('Number');
    this.appendValueInput('B')
        .setCheck('Number')
        .appendField(new Blockly.FieldLabel(OPERATOR), 'OP');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.BELL_LOGIC_COMPARE_GTE_TOOLTIP);
    this.prevBlocks_ = [null, null];
  },
  /**
   * Called whenever anything on the workspace changes.
   * Prevent mismatched types from being compared.
   * @param {!Blockly.Events.Abstract} e Change event.
   * @this Blockly.Block
   */
  onchange: function(e) {
    var blockA = this.getInputTargetBlock('A');
    var blockB = this.getInputTargetBlock('B');
    // Disconnect blocks that existed prior to this change if they don't match.
    if (blockA && blockB &&
        !blockA.outputConnection.checkType_(blockB.outputConnection)) {
      // Mismatch between two inputs.  Disconnect previous and bump it away.
      // Ensure that any disconnections are grouped with the causing event.
      Blockly.Events.setGroup(e.group);
      for (var i = 0; i < this.prevBlocks_.length; i++) {
        var block = this.prevBlocks_[i];
        if (block === blockA || block === blockB) {
          block.unplug();
          block.bumpNeighbours_();
        }
      }
      Blockly.Events.setGroup(false);
    }
    this.prevBlocks_[0] = blockA;
    this.prevBlocks_[1] = blockB;
  }
};

Blockly.Blocks['bell_logic_operation_and'] = {
  /**
   * Block for logical operations: 'and', 'or'.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATOR = Blockly.Msg.LOGIC_OPERATION_AND;
    this.setHelpUrl(Blockly.Msg.BELL_LOGIC_OPERATION_AND_HELPURL);
    this.setColour(Blockly.Blocks.bell_logic.HUE);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A')
        .setCheck('Boolean');
    this.appendValueInput('B')
        .setCheck('Boolean')
        .appendField(new Blockly.FieldLabel(OPERATOR), 'OP');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.BELL_LOGIC_OPERATION_AND_TOOLTIP);
  }
};

Blockly.Blocks['bell_logic_operation_or'] = {
  /**
   * Block for logical operations: 'and', 'or'.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATOR = Blockly.Msg.LOGIC_OPERATION_OR;
    this.setHelpUrl(Blockly.Msg.BELL_LOGIC_OPERATION_OR_HELPURL);
    this.setColour(Blockly.Blocks.bell_logic.HUE);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A')
        .setCheck('Boolean');
    this.appendValueInput('B')
        .setCheck('Boolean')
        .appendField(new Blockly.FieldLabel(OPERATOR), 'OP');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.BELL_LOGIC_OPERATION_OR_TOOLTIP);
  }
};

Blockly.Blocks['bell_logic_negate'] = {
  /**
   * Block for negation.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOGIC_NEGATE_TITLE,
      "args0": [
        {
          "type": "input_value",
          "name": "BOOL",
          "check": "Boolean"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "colour": Blockly.Blocks.bell_logic.HUE,
      "tooltip": Blockly.Msg.BELL_LOGIC_OPERATION_NOT_TOOLTIP,
      "helpUrl": Blockly.Msg.BELL_LOGIC_OPERATION_NOT_HELPURL
    });
  }
};

Blockly.Blocks['bell_logic_boolean_true'] = {
  /**
   * Block for boolean data type: true and false.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOGIC_BOOLEAN_TRUE,
      "output": "Boolean",
      "colour": Blockly.Blocks.bell_logic.HUE,
      "tooltip": Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP,
      "helpUrl": Blockly.Msg.LOGIC_BOOLEAN_HELPURL
    });
  }
};

Blockly.Blocks['bell_logic_boolean_false'] = {
  /**
   * Block for boolean data type: true and false.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOGIC_BOOLEAN_FALSE,
      "output": "Boolean",
      "colour": Blockly.Blocks.bell_logic.HUE,
      "tooltip": Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP,
      "helpUrl": Blockly.Msg.LOGIC_BOOLEAN_HELPURL
    });
  }
};
