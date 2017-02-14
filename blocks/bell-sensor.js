'use strict';

goog.provide('Blockly.Blocks.bell_sensor');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.bell_sensor.HUE = '#8bc34a';

Blockly.Blocks['bell_sensor_gyro_angle'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": Blockly.Msg.BELL_SENSOR_GYRO_ANGLE_TITLE,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "angle",
            "options": [
              [
                "X-Axis",
                "1"
              ],
              [
                "Y-Axis",
                "2"
              ],
              [
                "Z-Axis",
                "3"
              ]
            ]
          }
        ],
        "output": "Number",
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_SENSOR_GYRO_ANGLE_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_SENSOR_GYRO_ANGLE_HELPURL
      }
    )
  }
};

Blockly.Blocks['bell_sensor_gyro_angular_velocity'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": Blockly.Msg.BELL_SENSOR_GYRO_ANGULAR_VELOCITY_TITLE,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "angle",
            "options": [
              [
                "X-Axis",
                "1"
              ],
              [
                "Y-Axis",
                "2"
              ],
              [
                "Z-Axis",
                "3"
              ]
            ]
          }
        ],
        "output": "Number",
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_SENSOR_GYRO_ANGULAR_VELOCITY_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_SENSOR_GYRO_ANGULAR_VELOCITY_HELPURL
      }
    )
  }
};

Blockly.Blocks['bell_sensor_gyro_gravity_acceleration'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": Blockly.Msg.BELL_SENSOR_GYRO_ACCELERATION_TITLE,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "angle",
            "options": [
              [
                "X-Axis",
                "1"
              ],
              [
                "Y-Axis",
                "2"
              ],
              [
                "Z-Axis",
                "3"
              ]
            ]
          }
        ],
        "output": "Number",
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_SENSOR_GYRO_ACCELERATION_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_SENSOR_GYRO_ACCELERATION_HELPURL
      }
    )
  }
};

Blockly.Blocks['bell_sensor_gyro_toggle'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_sensor_gyro_toggle",
        "message0": Blockly.Msg.BELL_SENSOR_GYRO_TOGGLE_TITLE,
        "args0": [
          {
            "type": "input_value",
            "name": "switch",
            "check": "Boolean"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_SENSOR_GYRO_TOGGLE_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_SENSOR_GYRO_TOGGLE_HELPURL
      }
    )
  }
};

Blockly.Blocks['bell_sensor_gyro_stability'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_sensor_gyro_stability",
        "message0": Blockly.Msg.BELL_SENSOR_GYRO_STABILITY_TITLE,
        "output": "Boolean",
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_SENSOR_GYRO_STABILITY_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_SENSOR_GYRO_STABILITY_HELPURL
      }
    )
  }
};

Blockly.Blocks['bell_sensor_gyro_reset'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": Blockly.Msg.BELL_SENSOR_GYRO_RESET_TITLE,
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_SENSOR_GYRO_RESET_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_SENSOR_GYRO_RESET_HELPURL
      }
    )
  }
};

Blockly.Blocks['bell_sensor_color_switch_toggle'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_sensor_color_switch_toggle",
        "message0": Blockly.Msg.BELL_SENSOR_COLOR_TOGGLE_TITLE,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "index",
            "options": [
              [
                "1",
                "1"
              ],
              [
                "2",
                "2"
              ],
              [
                "3",
                "3"
              ],
              [
                "4",
                "4"
              ],
              [
                "5",
                "5"
              ],
              [
                "6",
                "6"
              ],
              [
                "7",
                "7"
              ],
              [
                "8",
                "8"
              ],
              [
                "9",
                "9"
              ],
              [
                "10",
                "10"
              ],
              [
                "11",
                "11"
              ],
              [
                "12",
                "12"
              ],
              [
                "13",
                "13"
              ],
              [
                "14",
                "14"
              ],
              [
                "15",
                "15"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "switch",
            "check": "Boolean"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_SENSOR_COLOR_TOGGLE_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_SENSOR_COLOR_TOGGLE_HELPURL
      }
    )
  }
}

Blockly.Blocks['bell_sensor_color_mode_change'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_sensor_color_mode_change",
        "message0": Blockly.Msg.BELL_SENSOR_COLOR_MODE_CHANGE_TITLE,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "index",
            "options": [
              [
                "1",
                "1"
              ],
              [
                "2",
                "2"
              ],
              [
                "3",
                "3"
              ],
              [
                "4",
                "4"
              ],
              [
                "5",
                "5"
              ],
              [
                "6",
                "6"
              ],
              [
                "7",
                "7"
              ],
              [
                "8",
                "8"
              ],
              [
                "9",
                "9"
              ],
              [
                "10",
                "10"
              ],
              [
                "11",
                "11"
              ],
              [
                "12",
                "12"
              ],
              [
                "13",
                "13"
              ],
              [
                "14",
                "14"
              ],
              [
                "15",
                "15"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "mode",
            "options": [
              [
                "Ambient Light Intensity",
                "0"
              ],
              [
                "Reflected Light Intensity",
                "1"
              ],
              [
                "Color Recognization",
                "2"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_SENSOR_COLOR_MODE_CHANGE_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_SENSOR_COLOR_MODE_CHANGE_HELPURL
      }
    )
  }
}

Blockly.Blocks['bell_sensor_color_read_value'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_sensor_color_read_value",
        "message0": Blockly.Msg.BELL_SENSOR_COLOR_READ_VALUE_TITLE,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "index",
            "options": [
              [
                "1",
                "1"
              ],
              [
                "2",
                "2"
              ],
              [
                "3",
                "3"
              ],
              [
                "4",
                "4"
              ],
              [
                "5",
                "5"
              ],
              [
                "6",
                "6"
              ],
              [
                "7",
                "7"
              ],
              [
                "8",
                "8"
              ],
              [
                "9",
                "9"
              ],
              [
                "10",
                "10"
              ],
              [
                "11",
                "11"
              ],
              [
                "12",
                "12"
              ],
              [
                "13",
                "13"
              ],
              [
                "14",
                "14"
              ],
              [
                "15",
                "15"
              ]
            ]
          }
        ],
        "output": "Number",
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_SENSOR_COLOR_READ_VALUE_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_SENSOR_COLOR_READ_VALUE_HELPURL
      }
    )
  }
}

Blockly.Blocks['bell_sensor_color_palette'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BELL_SENSOR_COLOR_PALETTE_FIELD)
        .appendField(this.colorPalette_(), "color");
    this.setOutput(true, "Number");
    this.setColour(Blockly.Blocks.bell_sensor.HUE);
    this.setTooltip(Blockly.Msg.BELL_SENSOR_COLOR_PALETTE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.BELL_SENSOR_COLOR_PALETTE_HELPURL);
  },
  colorPalette_: function() {
    var colour = new Blockly.FieldColour('#737373');
    colour.setColours(['#737373', '#000000','#0050dc','#78fa00','#ffff00','#ff1428','#ffffff','#c81eff','#ff9800']).setColumns(3);
    return colour;
  }
};

Blockly.Blocks['bell_sensor_ir_switch_toggle'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_sensor_ir_switch_toggle",
        "message0": Blockly.Msg.BELL_SENSOR_IR_TOGGLE_TITLE,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "index",
            "options": [
              [
                "1",
                "1"
              ],
              [
                "2",
                "2"
              ],
              [
                "3",
                "3"
              ],
              [
                "4",
                "4"
              ],
              [
                "5",
                "5"
              ],
              [
                "6",
                "6"
              ],
              [
                "7",
                "7"
              ],
              [
                "8",
                "8"
              ],
              [
                "9",
                "9"
              ],
              [
                "10",
                "10"
              ],
              [
                "11",
                "11"
              ],
              [
                "12",
                "12"
              ],
              [
                "13",
                "13"
              ],
              [
                "14",
                "14"
              ],
              [
                "15",
                "15"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "switch",
            "check": "Boolean"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_SENSOR_IR_TOGGLE_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_SENSOR_IR_TOGGLE_HELPURL
      }
    )
  }
}

Blockly.Blocks['bell_sensor_ir_read_value'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_sensor_ir_read_value",
        "message0": Blockly.Msg.BELL_SENSOR_IR_READ_VALUE_TITLE,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "index",
            "options": [
              [
                "1",
                "1"
              ],
              [
                "2",
                "2"
              ],
              [
                "3",
                "3"
              ],
              [
                "4",
                "4"
              ],
              [
                "5",
                "5"
              ],
              [
                "6",
                "6"
              ],
              [
                "7",
                "7"
              ],
              [
                "8",
                "8"
              ],
              [
                "9",
                "9"
              ],
              [
                "10",
                "10"
              ],
              [
                "11",
                "11"
              ],
              [
                "12",
                "12"
              ],
              [
                "13",
                "13"
              ],
              [
                "14",
                "14"
              ],
              [
                "15",
                "15"
              ]
            ]
          }
        ],
        "output": "Number",
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_SENSOR_IR_READ_VALUE_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_SENSOR_IR_READ_VALUE_HELPURL
      }
    )
  }
}

Blockly.Blocks['bell_sensor_motor_situation'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_sensor_motor_situation",
        "message0": Blockly.Msg.BELL_SENSOR_MOTOR_TITLE,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "cat",
            "options": [
              [
                "angle",
                "0"
              ],
              [
                "speed",
                "1"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "index",
            "options": [
              [
                "1",
                "1"
              ],
              [
                "2",
                "2"
              ],
              [
                "3",
                "3"
              ],
              [
                "4",
                "4"
              ],
              [
                "5",
                "5"
              ],
              [
                "6",
                "6"
              ],
              [
                "7",
                "7"
              ],
              [
                "8",
                "8"
              ],
              [
                "9",
                "9"
              ],
              [
                "10",
                "10"
              ],
              [
                "11",
                "11"
              ],
              [
                "12",
                "12"
              ],
              [
                "13",
                "13"
              ],
              [
                "14",
                "14"
              ],
              [
                "15",
                "15"
              ]
            ]
          }
        ],
        "output": "Number",
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_SENSOR_MOTOR_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_SENSOR_MOTOR_HELPURL
      }
    )
  }
}

Blockly.Blocks['bell_sensor_motor_reset'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_sensor_motor_reset",
        "message0": Blockly.Msg.BELL_SENSOR_MOTOR_RESET_TITLE,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "index",
            "options": [
              [
                "1",
                "1"
              ],
              [
                "2",
                "2"
              ],
              [
                "3",
                "3"
              ],
              [
                "4",
                "4"
              ],
              [
                "5",
                "5"
              ],
              [
                "6",
                "6"
              ],
              [
                "7",
                "7"
              ],
              [
                "8",
                "8"
              ],
              [
                "9",
                "9"
              ],
              [
                "10",
                "10"
              ],
              [
                "11",
                "11"
              ],
              [
                "12",
                "12"
              ],
              [
                "13",
                "13"
              ],
              [
                "14",
                "14"
              ],
              [
                "15",
                "15"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_SENSOR_MOTOR_RESET_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_SENSOR_MOTOR_RESET_HELPURL
      }
    )
  }
}

Blockly.Blocks['bell_sensor_motor_reset_all'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_sensor_motor_reset_all",
        "message0": Blockly.Msg.BELL_SENSOR_MOTOR_RESET_ALL_TITLE,
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_SENSOR_MOTOR_RESET_ALL_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_SENSOR_MOTOR_RESET_ALL_HELPURL
      }
    )
  }
}

Blockly.Blocks['bell_sensor_sample_rate'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_sensor_sample_rate",
        "message0": Blockly.Msg.BELL_SENSOR_SAMPLE_RATE_TITLE,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "sensor",
            "options": [
              [
                "All sensors",
                "0"
              ],
              [
                "Motor position sensors",
                "1"
              ],
              [
                "Color sensors",
                "2"
              ],
              [
                "Infrared sensors",
                "3"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "rate",
            "options": [
              [
                "Low speed",
                "1"
              ],
              [
                "Medium speed",
                "2"
              ],
              [
                "High speed",
                "3"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_SENSOR_SAMPLE_RATE_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_SENSOR_SAMPLE_RATE_HELPURL
      }
    )
  }
}

Blockly.Blocks['bell_system_get_time'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_system_get_time",
        "message0": Blockly.Msg.BELL_SYSTEM_GET_TIME_TITLE,
        "output": "Number",
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_SYSTEM_GET_TIME_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_SYSTEM_GET_TIME_HELPURL
      }
    )
  }
}

Blockly.Blocks['bell_system_reset_time'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_system_reset_time",
        "message0": Blockly.Msg.BELL_SYSTEM_RESET_TIME_TITLE,
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_SYSTEM_RESET_TIME_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_SYSTEM_RESET_TIME_HELPURL
      }
    )
  }
}

Blockly.Blocks['bell_sensor_audio_note'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_sensor_audio_note",
        "message0": Blockly.Msg.BELL_SENSOR_AUDIO_NOTE_TITLE,
        "args0": [
          {
            "type": "input_value",
            "name": "pitch",
            "check": "bell_sensor_audio_pitch"
          },
          {
            "type": "input_value",
            "name": "scale",
            "check": "bell_sensor_audio_scale"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_SENSOR_AUDIO_NOTE_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_SENSOR_AUDIO_NOTE_HELPURL
      }
    )
  }
}

Blockly.Blocks['bell_sensor_audio_pitch'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_sensor_audio_pitch",
        "message0": Blockly.Msg.BELL_SENSOR_AUDIO_PITCH_TITLE,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "pitch",
            "options": [
              [
                "Treble",
                "1"
              ],
              [
                "Alto",
                "2"
              ],
              [
                "Bass",
                "3"
              ]
            ]
          }
        ],
        "output": "bell_sensor_audio_pitch",
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_SENSOR_AUDIO_PITCH_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_SENSOR_AUDIO_PITCH_HELPURL
      }
    )
  }
}

Blockly.Blocks['bell_sensor_audio_scale'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_sensor_audio_scale",
        "message0": Blockly.Msg.BELL_SENSOR_AUDIO_SCALE_TITLE,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "scale",
            "options": [
              [
                "1",
                "1"
              ],
              [
                "2",
                "2"
              ],
              [
                "3",
                "3"
              ],
              [
                "4",
                "4"
              ],
              [
                "5",
                "5"
              ],
              [
                "6",
                "6"
              ],
              [
                "7",
                "7"
              ]
            ]
          }
        ],
        "output": "bell_sensor_audio_scale",
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_SENSOR_AUDIO_SCALE_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_SENSOR_AUDIO_SCALE_HELPURL
      }
    )
  }
}

Blockly.Blocks['bell_sensor_audio_stop'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_sensor_audio_stop",
        "message0": Blockly.Msg.BELL_SENSOR_AUDIO_STOP_TITLE,
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_SENSOR_AUDIO_STOP_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_SENSOR_AUDIO_STOP_HELPURL
      }
    )
  }
}

Blockly.Blocks['bell_sensor_audio_preset_snippet'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_sensor_audio_preset_snippet",
        "message0": Blockly.Msg.BELL_SENSOR_AUDIO_NOISE_TITLE,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "scale",
            "options": [
              [
                "Start up",
                "1"
              ],
              [
                "Shut down",
                "10"
              ],
              [
                "Warning",
                "100"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_SENSOR_AUDIO_NOISE_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_SENSOR_AUDIO_NOISE_HELPURL
      }
    )
  }
}

Blockly.Blocks['bell_sensor_physical_button'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_sensor_physical_button",
        "message0": Blockly.Msg.BELL_PHYSICAL_BUTTON_TITLE,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "index",
            "options": [
              [
                "1",
                "1"
              ],
              [
                "2",
                "2"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_PHYSICAL_BUTTON_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_PHYSICAL_BUTTON_HELPURL
      }
    )
  }
}

Blockly.Blocks['bell_sensor_remote_ratio'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_sensor_remote_ratio",
        "message0": Blockly.Msg.BELL_REMOTE_RATIO_TITLE,
        "output": "Number",
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_REMOTE_RATIO_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_REMOTE_RATIO_HELPURL
      }
    )
  }
}

Blockly.Blocks['bell_sensor_remote_motion_coordinate'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_sensor_remote_motion_coordinate",
        "message0": Blockly.Msg.BELL_REMOTE_COORDINATE_TITLE,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "axis",
            "options": [
              [
                "x-axis",
                "1"
              ],
              [
                "y-axis",
                "2"
              ]
            ]
          }
        ],
        "output": "Number",
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_REMOTE_COORDINATE_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_REMOTE_COORDINATE_HELPURL
      }
    )
  }
}

Blockly.Blocks['bell_sensor_remote_power'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_sensor_remote_power",
        "message0": Blockly.Msg.BELL_REMOTE_POWER_TITLE,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "side",
            "options": [
              [
                "Left Side",
                "1"
              ],
              [
                "Right Side",
                "2"
              ]
            ]
          }
        ],
        "output": "Number",
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_REMOTE_POWER_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_REMOTE_POWER_HELPURL
      }
    )
  }
}

// private blocks

Blockly.Blocks['bell_sensor_switch'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "bell_sensor_switch",
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "state",
            "options": [
              [
                "on",
                "true"
              ],
              [
                "off",
                "false"
              ]
            ]
          }
        ],
        "output": "Boolean",
        "colour": Blockly.Blocks.bell_sensor.HUE,
        "tooltip": Blockly.Msg.BELL_SENSOR_SWITCH_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_SENSOR_SWITCH_HELPURL
      }
    )
  }
};
