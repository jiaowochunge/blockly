'use strict';

goog.provide('Blockly.Blocks.bell_flow');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.bell_flow.HUE = '#ef5350';

Blockly.Blocks['bell_flow_start'] = {
  init: function() {
      this.jsonInit(
          {
          "type": "block_type",
          "message0": Blockly.Msg.BELL_FLOW_START_TITLE,
          "args0": [
            {
              "type": "input_dummy"
            },
            {
              "type": "input_statement",
              "name": "NAME"
            }
          ],
          "colour": Blockly.Blocks.bell_flow.HUE,
          "tooltip": Blockly.Msg.BELL_FLOW_START_TOOLTIP,
          "helpUrl": Blockly.Msg.BELL_FLOW_START_HELPURL
        }
    );
  }
};

Blockly.Blocks['bell_flow_wait'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_flow_wait",
        "message0": Blockly.Msg.BELL_FLOW_WAIT_TITLE,
        "args0": [
          {
            "type": "input_value",
            "name": "sec",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.bell_flow.HUE,
        "tooltip": Blockly.Msg.BELL_FLOW_WAIT_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_FLOW_WAIT_HELPURL
      }
    )
  }
};

Blockly.Blocks['bell_flow_wait_block'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_flow_wait_block",
        "message0": Blockly.Msg.BELL_FLOW_WAIT_BLOCK_TITLE,
        "args0": [
          {
            "type": "input_value",
            "name": "block",
            "check": "Boolean"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.bell_flow.HUE,
        "tooltip": Blockly.Msg.BELL_FLOW_WAIT_BLOCK_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_FLOW_WAIT_BLOCK_HELPURL
      }
    )
  }
};

Blockly.Blocks['bell_flow_repeat_finite'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_flow_repeat_finite",
        "message0": Blockly.Msg.BELL_FLOW_REPEAT_FINITE_TITLE,
        "args0": [
          {
            "type": "input_value",
            "name": "count",
            "check": "Number"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "exp"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.bell_flow.HUE,
        "tooltip": Blockly.Msg.BELL_FLOW_REPEAT_FINITE_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_FLOW_REPEAT_FINITE_HELPURL
      }
    )
  }
};

Blockly.Blocks['bell_flow_repeat_infinite'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_flow_repeat_infinite",
        "message0": Blockly.Msg.BELL_FLOW_REPEAT_INFINITE_TITLE,
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "exp"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.bell_flow.HUE,
        "tooltip": Blockly.Msg.BELL_FLOW_REPEAT_INFINITE_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_FLOW_REPEAT_INFINITE_HELPURL
      }
    )
  }
};

Blockly.Blocks['bell_flow_if'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": Blockly.Msg.BELL_FLOW_IF_TITLE,
        "args0": [
          {
            "type": "input_value",
            "name": "condition",
            "check": "Boolean"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "exp"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.bell_flow.HUE,
        "tooltip": Blockly.Msg.BELL_FLOW_IF_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_FLOW_IF_HELPURL
      }
    )
  }
};

Blockly.Blocks['bell_flow_if_else'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": Blockly.Msg.BELL_FLOW_IF_ELSE_TITLE,
        "args0": [
          {
            "type": "input_value",
            "name": "condition",
            "check": "Boolean"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "if_exp"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "else_exp"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.bell_flow.HUE,
        "tooltip": Blockly.Msg.BELL_FLOW_IF_ELSE_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_FLOW_IF_ELSE_HELPURL
      }
    )
  }
};

Blockly.Blocks['bell_flow_repeat_condition'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": Blockly.Msg.BELL_FLOW_REPEAT_CONDITION_TITLE,
        "args0": [
          {
            "type": "input_value",
            "name": "condition",
            "check": "Boolean"
          },
          {
            "type": "input_statement",
            "name": "exp"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.bell_flow.HUE,
        "tooltip": Blockly.Msg.BELL_FLOW_REPEAT_CONDITION_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_FLOW_REPEAT_CONDITION_HELPURL
      }
    )
  }
};

Blockly.Blocks['bell_flow_break'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": Blockly.Msg.BELL_FLOW_BREAK_TITLE,
        "inputsInline": true,
        "previousStatement": null,
        "colour": Blockly.Blocks.bell_flow.HUE,
        "tooltip": Blockly.Msg.BELL_FLOW_BREAK_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_FLOW_BREAK_HELPURL
      }
    )
  }
};
