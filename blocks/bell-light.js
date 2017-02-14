'use strict';

goog.provide('Blockly.Blocks.bell_light');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.bell_light.HUE = '#00bcd4';

Blockly.Blocks['bell_light_mode'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_light_mode",
        "message0": Blockly.Msg.BELL_LIGHT_MODE_TITLE,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "index",
            "options": [
              [
                "Control ball",
                "0"
              ],
              [
                "Driving ball",
                "1"
              ],
              [
                "All ball",
                "2"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "mode",
            "options": [
              [
                "Breathing",
                "3"
              ],
              [
                "Flashing",
                "2"
              ],
              [
                "Regular",
                "1"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.bell_light.HUE,
        "tooltip": Blockly.Msg.BELL_LIGHT_MODE_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_LIGHT_MODE_HELPURL
      }
    )
  }
};

Blockly.Blocks['bell_light_color'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": Blockly.Msg.BELL_LIGHT_COLOR_TITLE,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "index",
            "options": [
              [
                "Control ball",
                "0"
              ],
              [
                "Driving ball",
                "1"
              ],
              [
                "All ball",
                "2"
              ]
            ]
          },
          {
            "type": "input_dummy",
            "name": "tmp_dummy"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.bell_light.HUE,
        "tooltip": Blockly.Msg.BELL_LIGHT_COLOR_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_LIGHT_COLOR_HELPURL
      }
    )
    this.getInput("tmp_dummy")
        .appendField(this.colorPalette_(), "color");
  },
  colorPalette_: function() {
    var colour = new Blockly.FieldColour('#f45d5d');
    colour.setColours(['#f45d5d','#0eef53','#f6f550','#4d9edc','#d451f8','#07edfb','#f29450','#fcfcfb']).setColumns(4);
    return colour;
  }
};

Blockly.Blocks['bell_light_off'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_light_off",
        "message0": Blockly.Msg.BELL_LIGHT_OFF_TITLE,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "index",
            "options": [
              [
                "Control ball",
                "0"
              ],
              [
                "Driving ball",
                "1"
              ],
              [
                "All ball",
                "2"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.bell_light.HUE,
        "tooltip": Blockly.Msg.BELL_LIGHT_OFF_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_LIGHT_OFF_HELPURL
      }
    )
  }
};
