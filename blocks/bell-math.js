'use strict';

goog.provide('Blockly.Blocks.bell_math');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.bell_math.HUE = '#3f51b5';


Blockly.Blocks['bell_math_number'] = {
  /**
   * Block for numeric value.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
    this.setColour(Blockly.Blocks.bell_math.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber('0'), 'NUM');
    this.setOutput(true, 'Number');
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    // Number block is trivial.  Use tooltip of parent block if it exists.
    this.setTooltip(function() {
      var parent = thisBlock.getParent();
      return (parent && parent.getInputsInline() && parent.tooltip) ||
          Blockly.Msg.MATH_NUMBER_TOOLTIP;
    });
  }
};

Blockly.Blocks['bell_math_arithmetic_add'] = {
  /**
   * Block for basic arithmetic operator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 %3",
      "args0": [
        {
          "type": "input_value",
          "name": "A",
          "check": "Number"
        },
        {
          "type": "field_label",
          "name": "OP",
          "text": Blockly.Msg.MATH_ADDITION_SYMBOL
        },
        {
          "type": "input_value",
          "name": "B",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": Blockly.Blocks.bell_math.HUE,
      "tooltip": Blockly.Msg.BELL_MATH_ARITHMETIC_ADD_TOOLTIP,
      "helpUrl": Blockly.Msg.BELL_MATH_ARITHMETIC_ADD_HELPURL
    });
  }
};

Blockly.Blocks['bell_math_arithmetic_minus'] = {
  /**
   * Block for basic arithmetic operator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 %3",
      "args0": [
        {
          "type": "input_value",
          "name": "A",
          "check": "Number"
        },
        {
          "type": "field_label",
          "name": "OP",
          "text": Blockly.Msg.MATH_SUBTRACTION_SYMBOL
        },
        {
          "type": "input_value",
          "name": "B",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": Blockly.Blocks.bell_math.HUE,
      "tooltip": Blockly.Msg.BELL_MATH_ARITHMETIC_MINUS_TOOLTIP,
      "helpUrl": Blockly.Msg.BELL_MATH_ARITHMETIC_MINUS_HELPURL
    });
  }
};

Blockly.Blocks['bell_math_arithmetic_multiply'] = {
  /**
   * Block for basic arithmetic operator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 %3",
      "args0": [
        {
          "type": "input_value",
          "name": "A",
          "check": "Number"
        },
        {
          "type": "field_label",
          "name": "OP",
          "text": Blockly.Msg.MATH_MULTIPLICATION_SYMBOL
        },
        {
          "type": "input_value",
          "name": "B",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": Blockly.Blocks.bell_math.HUE,
      "tooltip": Blockly.Msg.BELL_MATH_ARITHMETIC_MULTIPLY_TOOLTIP,
      "helpUrl": Blockly.Msg.BELL_MATH_ARITHMETIC_MULTIPLY_HELPURL
    });
  }
};

Blockly.Blocks['bell_math_arithmetic_divide'] = {
  /**
   * Block for basic arithmetic operator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 %3",
      "args0": [
        {
          "type": "input_value",
          "name": "A",
          "check": "Number"
        },
        {
          "type": "field_label",
          "name": "OP",
          "text": Blockly.Msg.MATH_DIVISION_SYMBOL
        },
        {
          "type": "input_value",
          "name": "B",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": Blockly.Blocks.bell_math.HUE,
      "tooltip": Blockly.Msg.BELL_MATH_ARITHMETIC_DIVIDE_TOOLTIP,
      "helpUrl": Blockly.Msg.BELL_MATH_ARITHMETIC_DIVIDE_HELPURL
    });
  }
};

Blockly.Blocks['bell_math_random_int'] = {
  /**
   * Block for random integer between [X] and [Y].
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.BELL_MATH_RANDOM_INT_TITLE,
      "args0": [
        {
          "type": "input_value",
          "name": "FROM",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "TO",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": Blockly.Blocks.bell_math.HUE,
      "tooltip": Blockly.Msg.BELL_MATH_RANDOM_INT_TOOLTIP,
      "helpUrl": Blockly.Msg.BELL_MATH_RANDOM_INT_HELPURL
    });
  }
};

Blockly.Blocks['bell_math_absolute_int'] = {
  /**
   * Block for random integer between [X] and [Y].
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.BELL_MATH_ABS_TITLE,
      "args0": [
        {
          "type": "input_value",
          "name": "PARAM1",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": Blockly.Blocks.bell_math.HUE,
      "tooltip": Blockly.Msg.BELL_MATH_ABS_TOOLTIP,
      "helpUrl": Blockly.Msg.BELL_MATH_ABS_HELPURL
    });
  }
};
