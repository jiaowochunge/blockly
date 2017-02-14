'use strict';

goog.provide('Blockly.Blocks.bell_motion');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.bell_motion.HUE = '#ff9800';

Blockly.Blocks['bell_motion_move_infinite'] = {
	init: function() {
		this.jsonInit(
			{
			  "type": "bell_motion_move_infinite",
			  "message0": Blockly.Msg.BELL_MOTION_MOVE_INFINITE_TITLE,
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
			          "Close-loop",
			          "1"
			        ],
			        [
			          "Open-loop",
			          "2"
			        ]
			      ]
			    },
			    {
			      "type": "input_dummy"
			    },
			    {
			      "type": "input_value",
			      "name": "power",
			      "check": "Number"
			    }
			  ],
			  "inputsInline": true,
			  "previousStatement": null,
			  "nextStatement": null,
			  "colour": Blockly.Blocks.bell_motion.HUE,
			  "tooltip": Blockly.Msg.BELL_MOTION_MOVE_INFINITE_TOOLTIP,
			  "helpUrl": Blockly.Msg.BELL_MOTION_MOVE_INFINITE_HELPURL
			}
		);
	},
	onchange: function(changeEvent) {
		var warnText = null;

		var powerBlock = this.getInputTargetBlock('power');
		if (!powerBlock) {
			warnText = 'Must have an input block for `power`.';
		} else {
			var power = powerBlock.getFieldValue('NUM');
			if (power > 100 || power < -100) {
				warnText = 'power must between -100 and 100';
			}
		}

		if (warnText) {
			this.setWarningText(warnText);
		}
  },
}

Blockly.Blocks['bell_motion_move_sec'] = {
	init: function() {
		this.jsonInit(
			{
			  "type": "bell_motion_move_sec",
			  "message0": Blockly.Msg.BELL_MOTION_MOVE_SEC_TITLE,
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
			      "type": "input_dummy"
			    },
			    {
			      "type": "input_value",
			      "name": "power",
			      "check": "Number"
			    },
			    {
			      "type": "input_value",
			      "name": "sec",
			      "check": "Number"
			    }
			  ],
			  "inputsInline": true,
			  "previousStatement": null,
			  "nextStatement": null,
			  "colour": Blockly.Blocks.bell_motion.HUE,
			  "tooltip": Blockly.Msg.BELL_MOTION_MOVE_SEC_TOOLTIP,
			  "helpUrl": Blockly.Msg.BELL_MOTION_MOVE_SEC_HELPURL
			}
		);
	},
	onchange: function(changeEvent) {
		var warnText = null;

		var powerBlock = this.getInputTargetBlock('power');
		if (!powerBlock) {
			warnText = 'Must have an input block for `power`.';
		} else {
			var power = powerBlock.getFieldValue('NUM');
			if (power > 100 || power < -100) {
				warnText = 'power must between -100 and 100';
			}
		}

		var secBlock = this.getInputTargetBlock('sec');
		if (!secBlock) {
			warnText = 'Must have an input block for `second`.';
		} else {
			var sec = secBlock.getFieldValue('NUM');
			if (sec < 0) {
				warnText = 'second must be a positive value';
			}
		}

		if (warnText) {
			this.setWarningText(warnText);
		}
  },
}

Blockly.Blocks['bell_motion_move_distance'] = {
	init: function() {
		this.jsonInit(
			{
			  "type": "bell_motion_move_distance",
			  "message0": Blockly.Msg.BELL_MOTION_MOVE_DISTANCE_TITLE,
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
			      "type": "input_dummy"
			    },
			    {
			      "type": "input_value",
			      "name": "power",
			      "check": "Number"
			    },
			    {
			      "type": "input_value",
			      "name": "distance",
			      "check": "Number"
			    }
			  ],
			  "inputsInline": true,
			  "previousStatement": null,
			  "nextStatement": null,
			  "colour": Blockly.Blocks.bell_motion.HUE,
			  "tooltip": Blockly.Msg.BELL_MOTION_MOVE_DISTANCE_TOOLTIP,
			  "helpUrl": Blockly.Msg.BELL_MOTION_MOVE_DISTANCE_HELPURL
			}
		);
	},
	onchange: function(changeEvent) {
		var warnText = null;

		var powerBlock = this.getInputTargetBlock('power');
		if (!powerBlock) {
			warnText = 'Must have an input block for `power`.';
		} else {
			var power = powerBlock.getFieldValue('NUM');
			if (power > 100 || power < -100) {
				warnText = 'power must between -100 and 100';
			}
		}

		var distanceBlock = this.getInputTargetBlock('distance');
		if (!distanceBlock) {
			warnText = 'Must have an input block for `distance`.';
		} else {
			var distance = distanceBlock.getFieldValue('NUM');
			if (distance < 0) {
				warnText = 'distance must be a positive value';
			}
		}

		if (warnText) {
			this.setWarningText(warnText);
		}
  },
}

Blockly.Blocks['bell_motion_all_stop'] = {
	init: function() {
		this.jsonInit(
			{
			  "type": "bell_motion_all_stop",
			  "message0": Blockly.Msg.BELL_MOTION_ALL_STOP_TITLE,
			  "args0": [
			    {
			      "type": "field_dropdown",
			      "name": "brake",
			      "options": [
			        [
			          "without brake",
			          "0"
			        ],
			        [
			          "with brake",
			          "1"
			        ]
			      ]
			    }
			  ],
			  "previousStatement": null,
			  "nextStatement": null,
			  "colour": Blockly.Blocks.bell_motion.HUE,
			  "tooltip": Blockly.Msg.BELL_MOTION_ALL_STOP_TOOLTIP,
			  "helpUrl": Blockly.Msg.BELL_MOTION_ALL_STOP_HELPURL
			}
		);
	},
}

Blockly.Blocks['bell_motion_stop'] = {
	init: function() {
		this.jsonInit(
			{
			  "type": "bell_motion_stop",
			  "message0": Blockly.Msg.BELL_MOTION_SINGLE_STOP_TITLE,
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
			      "name": "brake",
			      "options": [
			        [
			          "without brake",
			          "0"
			        ],
			        [
			          "with brake",
			          "1"
			        ]
			      ]
			    }
			  ],
			  "previousStatement": null,
			  "nextStatement": null,
			  "colour": Blockly.Blocks.bell_motion.HUE,
			  "tooltip": Blockly.Msg.BELL_MOTION_SINGLE_STOP_TOOLTIP,
			  "helpUrl": Blockly.Msg.BELL_MOTION_SINGLE_STOP_HELPURL
			}
		);
	},
}
