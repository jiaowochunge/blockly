'use strict';

goog.provide('Blockly.Blocks.bell_extra');
goog.require('Blockly.Blocks');

Blockly.Blocks.bell_extra.HUE = '#123456';

Blockly.Blocks['bell_single_motor_light'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "bell_single_motor_light",
        "message0": Blockly.Msg.BELL_LIGHT_SINGLE_MOTOR_TITLE,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "motor",
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
            "type": "field_colour",
            "name": "colour",
            "colour": "#f45d5d"
          },
          {
            "type": "field_dropdown",
            "name": "mode",
            "options": [
              [
                Blockly.Msg.BELL_LIGHT_MODE_BREATHING,
                "3"
              ],
              [
                Blockly.Msg.BELL_LIGHT_MODE_FLASHING,
                "2"
              ],
              [
                Blockly.Msg.BELL_LIGHT_MODE_REGULAR,
                "1"
              ],
              [
                Blockly.Msg.BELL_LIGHT_MODE_NONE,
                "0"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.bell_light.HUE,
        "tooltip": Blockly.Msg.BELL_LIGHT_SINGLE_MOTOR_TOOLTIP,
        "helpUrl": Blockly.Msg.BELL_LIGHT_SINGLE_MOTOR_HELPURL
      }
    );
    this.getField('colour')
      .setColours(['#f45d5d','#0eef53','#f6f550','#4d9edc','#d451f8','#07edfb','#f29450','#fcfcfb'])
      .setColumns(4);
  },
};

Blockly.Blocks['bell_touch_state'] = {
	init: function () {
		this.jsonInit(
			{
			  "type": "bell_touch_state",
			  "message0": Blockly.Msg.BELL_MOTION_TOUCH_STATE_TITLE,
			  "args0": [
			    {
			      "type": "field_dropdown",
			      "name": "sequence",
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
				"output": "Boolean",
				"colour": Blockly.Blocks.bell_motion.HUE,
			  "tooltip": Blockly.Msg.BELL_MOTION_TOUCH_STATE_TOOLTIP,
			  "helpUrl": Blockly.Msg.BELL_MOTION_TOUCH_STATE_HELPURL
			});
	},
};

Blockly.Blocks['bell_set_hservo_angle'] = {
	init: function () {
		this.jsonInit(
			{
			  "type": "bell_set_hservo_angle",
			  "message0": Blockly.Msg.BELL_MOTION_SET_HSERVO_ANGLE_TITLE,
			  "args0": [
			    {
			      "type": "field_dropdown",
			      "name": "sequence",
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
			      "name": "angle",
			      "check": "Number"
			    }
			  ],
				"inputsInline": true,
			  "previousStatement": null,
			  "nextStatement": null,
			  "colour": Blockly.Blocks.bell_motion.HUE,
			  "tooltip": Blockly.Msg.BELL_MOTION_SET_HSERVO_ANGLE_TOOLTIP,
			  "helpUrl": Blockly.Msg.BELL_MOTION_SET_HSERVO_ANGLE_HELPURL
			});
	},

	onchange: function (e) {
		var warnText;
		var block = this.getInputTargetBlock('angle');
		if (!block) {
			warnText = 'Must have an input block for `angle`.';
		} else {
			var angle = block.getFieldValue('NUM');
			if (angle > 90 || angle < -90) {
				warnText = 'angle must between -90 and 90';
			}
		}
		this.setWarningText(warnText);
	},
};

Blockly.Blocks['bell_get_hservo_angle'] = {
	init: function () {
		this.jsonInit(
			{
			  "type": "bell_get_hservo_angle",
			  "message0": Blockly.Msg.BELL_MOTION_GET_HSERVO_ANGLE_TITLE,
			  "args0": [
			    {
			      "type": "field_dropdown",
			      "name": "sequence",
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
			  "colour": Blockly.Blocks.bell_motion.HUE,
			  "tooltip": Blockly.Msg.BELL_MOTION_GET_HSERVO_ANGLE_TOOLTIP,
			  "helpUrl": Blockly.Msg.BELL_MOTION_GET_HSERVO_ANGLE_HELPURL
			});
	},
};

Blockly.Blocks['bell_set_vservo_angle'] = {
	init: function () {
		this.jsonInit(
			{
			  "type": "bell_set_vservo_angle",
			  "message0": Blockly.Msg.BELL_MOTION_SET_VSERVO_ANGLE_TITLE,
			  "args0": [
			    {
			      "type": "field_dropdown",
			      "name": "sequence",
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
			      "name": "angle",
			      "check": "Number"
			    }
			  ],
				"inputsInline": true,
			  "previousStatement": null,
			  "nextStatement": null,
			  "colour": Blockly.Blocks.bell_motion.HUE,
			  "tooltip": Blockly.Msg.BELL_MOTION_SET_VSERVO_ANGLE_TOOLTIP,
			  "helpUrl": Blockly.Msg.BELL_MOTION_SET_VSERVO_ANGLE_HELPURL
			});
	},

	onchange: function (e) {
		var warnText;
		var block = this.getInputTargetBlock('angle');
		if (!block) {
			warnText = 'Must have an input block for `angle`.';
		} else {
			var angle = block.getFieldValue('NUM');
			if (angle > 90 || angle < -90) {
				warnText = 'angle must between -90 and 90';
			}
		}
		this.setWarningText(warnText);
	},
};

Blockly.Blocks['bell_get_vservo_angle'] = {
	init: function () {
		this.jsonInit(
			{
			  "type": "bell_get_vservo_angle",
			  "message0": Blockly.Msg.BELL_MOTION_GET_VSERVO_ANGLE_TITLE,
			  "args0": [
			    {
			      "type": "field_dropdown",
			      "name": "sequence",
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
			  "colour": Blockly.Blocks.bell_motion.HUE,
			  "tooltip": Blockly.Msg.BELL_MOTION_GET_VSERVO_ANGLE_TOOLTIP,
			  "helpUrl": Blockly.Msg.BELL_MOTION_GET_VSERVO_ANGLE_HELPURL
			});
	},
};
