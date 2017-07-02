'use strict';

goog.provide('Blockly.Blocks.bell_titan');
goog.require('Blockly.Blocks');

Blockly.Blocks.bell_titan.HUE = '#525eb9';

Blockly.Blocks['set_titan_servo_data'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "set_titan_servo_data",
				"message0": Blockly.Msg.BELL_SET_TITAN_SERVO_DATA_TITLE,
				"args0": [
					{
						"type": "field_dropdown",
						"name": "motor",
						"options": [
							["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"],
						]
					},
					{
						"type": "field_number",
						"name": "time",
						"value": 1,
						"min": 1,
						"max": 10000
					},
					{
						"type": "field_number",
						"name": "angle",
						"value": 0,
						"min": -180,
						"max": 180,
						"precision": 0.1
					},
				],
				"previousStatement": null,
				"nextStatement": null,
				"colour": Blockly.Blocks.bell_titan.HUE,
				"tooltip": Blockly.Msg.BELL_SET_TITAN_SERVO_DATA_TOOLTIP,
				"helpUrl": Blockly.Msg.BELL_SET_TITAN_SERVO_DATA_HELPURL,
			}
		);
	},
};

Blockly.Blocks['get_titan_servo_data'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "get_titan_servo_data",
				"message0": Blockly.Msg.BELL_GET_TITAN_SERVO_DATA_TITLE,
				"args0": [
					{
						"type": "field_dropdown",
						"name": "motor",
						"options": [
							["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"],
						]
					},
				],
				"output": "Number",
				"colour": Blockly.Blocks.bell_titan.HUE,
				"tooltip": Blockly.Msg.BELL_GET_TITAN_SERVO_DATA_TOOLTIP,
				"helpUrl": Blockly.Msg.BELL_GET_TITAN_SERVO_DATA_HELPURL
			});
	},
};

Blockly.Blocks['start_titan_servo'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "start_titan_servo",
				"message0": Blockly.Msg.BELL_START_TITAN_SERVO_TITLE,
				"previousStatement": null,
				"nextStatement": null,
				"colour": Blockly.Blocks.bell_titan.HUE,
				"tooltip": Blockly.Msg.BELL_START_TITAN_SERVO_TOOLTIP,
				"helpUrl": Blockly.Msg.BELL_START_TITAN_SERVO_HELPURL
			});
	},
};

Blockly.Blocks['set_titan_servo_data2'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "set_titan_servo_data",
				"message0": Blockly.Msg.BELL_SET_TITAN_SERVO_DATA_TITLE,
				"args0": [
					{
						"type": "input_value",
						"name": "motor",
						"check": "Number",
						"value": 1
					},
					{
						"type": "input_value",
						"name": "time",
						"value": 1,
						"check": "Number"
					},
					{
						"type": "input_value",
						"name": "angle",
						"value": 0,
						"check": "Number"
					},
				],
				"previousStatement": null,
				"nextStatement": null,
				"colour": Blockly.Blocks.bell_titan.HUE,
				"tooltip": Blockly.Msg.BELL_SET_TITAN_SERVO_DATA_TOOLTIP,
				"helpUrl": Blockly.Msg.BELL_SET_TITAN_SERVO_DATA_HELPURL,
			}
		);
	},
};

Blockly.Blocks['get_titan_servo_data2'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "get_titan_servo_data",
				"message0": Blockly.Msg.BELL_GET_TITAN_SERVO_DATA_TITLE,
				"args0": [
					{
						"type": "input_value",
						"name": "motor",
						"value": 1,
						"check": "Number"
					},
				],
				"output": "Number",
				"colour": Blockly.Blocks.bell_titan.HUE,
				"tooltip": Blockly.Msg.BELL_GET_TITAN_SERVO_DATA_TOOLTIP,
				"helpUrl": Blockly.Msg.BELL_GET_TITAN_SERVO_DATA_HELPURL
			});
	},
};

Blockly.Blocks['titan_motions'] = {
	init: function () {
		this.jsonInit(
			{
			  "type": "titan_motions",
			  "message0": Blockly.Msg.BELL_TITAN_MOTIONS_TITLE,
			  "args0": [
			    {
			      "type": "field_dropdown",
			      "name": "motion",
			      "options": [
			        [
			          Blockly.Msg.BELL_TITAN_MOTION_01_TITLE,
			          "1"
			        ],
			        [
			          Blockly.Msg.BELL_TITAN_MOTION_02_TITLE,
			          "2"
			        ],
			        [
			          Blockly.Msg.BELL_TITAN_MOTION_03_TITLE,
			          "3"
			        ],
			        [
			          Blockly.Msg.BELL_TITAN_MOTION_04_TITLE,
			          "4"
			        ],
			        [
			          Blockly.Msg.BELL_TITAN_MOTION_05_TITLE,
			          "5"
			        ],
			        [
			          Blockly.Msg.BELL_TITAN_MOTION_06_TITLE,
			          "6"
			        ],
			        [
			          Blockly.Msg.BELL_TITAN_MOTION_07_TITLE,
			          "7"
			        ],
			        [
			          Blockly.Msg.BELL_TITAN_MOTION_08_TITLE,
			          "8"
			        ],
			        [
			          Blockly.Msg.BELL_TITAN_MOTION_09_TITLE,
			          "9"
			        ],
			        [
			          Blockly.Msg.BELL_TITAN_MOTION_10_TITLE,
			          "10"
			        ]
			      ]
			    }
			  ],
			  "previousStatement": null,
			  "nextStatement": null,
			  "colour": Blockly.Blocks.bell_titan.HUE,
			  "tooltip": Blockly.Msg.BELL_TITAN_MOTIONS_TOOLTIP,
			  "helpUrl": Blockly.Msg.BELL_TITAN_MOTIONS_HELPURL
			}
		);
	},
};

Blockly.Blocks['titan_motion_01'] = {
	init: function () {
		this.jsonInit(
			{
			  "type": "titan_motion_01",
			  "message0": Blockly.Msg.BELL_TITAN_MOTION_01_TITLE,
			  "previousStatement": null,
			  "nextStatement": null,
			  "colour": Blockly.Blocks.bell_titan.HUE,
			  "tooltip": Blockly.Msg.BELL_TITAN_MOTION_01_TOOLTIP,
			  "helpUrl": Blockly.Msg.BELL_TITAN_MOTION_01_HELPURL
			});
	},
};

Blockly.Blocks['titan_motion_02'] = {
	init: function () {
		this.jsonInit(
			{
			  "type": "titan_motion_02",
			  "message0": Blockly.Msg.BELL_TITAN_MOTION_02_TITLE,
			  "previousStatement": null,
			  "nextStatement": null,
			  "colour": Blockly.Blocks.bell_titan.HUE,
			  "tooltip": Blockly.Msg.BELL_TITAN_MOTION_02_TOOLTIP,
			  "helpUrl": Blockly.Msg.BELL_TITAN_MOTION_02_HELPURL
			});
	},
};

Blockly.Blocks['titan_motion_03'] = {
	init: function () {
		this.jsonInit(
			{
			  "type": "titan_motion_03",
			  "message0": Blockly.Msg.BELL_TITAN_MOTION_03_TITLE,
			  "previousStatement": null,
			  "nextStatement": null,
			  "colour": Blockly.Blocks.bell_titan.HUE,
			  "tooltip": Blockly.Msg.BELL_TITAN_MOTION_03_TOOLTIP,
			  "helpUrl": Blockly.Msg.BELL_TITAN_MOTION_03_HELPURL
			});
	},
};

Blockly.Blocks['titan_motion_04'] = {
	init: function () {
		this.jsonInit(
			{
			  "type": "titan_motion_04",
			  "message0": Blockly.Msg.BELL_TITAN_MOTION_04_TITLE,
			  "previousStatement": null,
			  "nextStatement": null,
			  "colour": Blockly.Blocks.bell_titan.HUE,
			  "tooltip": Blockly.Msg.BELL_TITAN_MOTION_04_TOOLTIP,
			  "helpUrl": Blockly.Msg.BELL_TITAN_MOTION_04_HELPURL
			});
	},
};

Blockly.Blocks['titan_motion_05'] = {
	init: function () {
		this.jsonInit(
			{
			  "type": "titan_motion_05",
			  "message0": Blockly.Msg.BELL_TITAN_MOTION_05_TITLE,
			  "previousStatement": null,
			  "nextStatement": null,
			  "colour": Blockly.Blocks.bell_titan.HUE,
			  "tooltip": Blockly.Msg.BELL_TITAN_MOTION_05_TOOLTIP,
			  "helpUrl": Blockly.Msg.BELL_TITAN_MOTION_05_HELPURL
			});
	},
};

Blockly.Blocks['titan_motion_06'] = {
	init: function () {
		this.jsonInit(
			{
			  "type": "titan_motion_06",
			  "message0": Blockly.Msg.BELL_TITAN_MOTION_06_TITLE,
			  "previousStatement": null,
			  "nextStatement": null,
			  "colour": Blockly.Blocks.bell_titan.HUE,
			  "tooltip": Blockly.Msg.BELL_TITAN_MOTION_06_TOOLTIP,
			  "helpUrl": Blockly.Msg.BELL_TITAN_MOTION_06_HELPURL
			});
	},
};

Blockly.Blocks['titan_motion_07'] = {
	init: function () {
		this.jsonInit(
			{
			  "type": "titan_motion_07",
			  "message0": Blockly.Msg.BELL_TITAN_MOTION_07_TITLE,
			  "previousStatement": null,
			  "nextStatement": null,
			  "colour": Blockly.Blocks.bell_titan.HUE,
			  "tooltip": Blockly.Msg.BELL_TITAN_MOTION_07_TOOLTIP,
			  "helpUrl": Blockly.Msg.BELL_TITAN_MOTION_07_HELPURL
			});
	},
};

Blockly.Blocks['titan_motion_08'] = {
	init: function () {
		this.jsonInit(
			{
			  "type": "titan_motion_08",
			  "message0": Blockly.Msg.BELL_TITAN_MOTION_08_TITLE,
			  "previousStatement": null,
			  "nextStatement": null,
			  "colour": Blockly.Blocks.bell_titan.HUE,
			  "tooltip": Blockly.Msg.BELL_TITAN_MOTION_08_TOOLTIP,
			  "helpUrl": Blockly.Msg.BELL_TITAN_MOTION_08_HELPURL
			});
	},
};

Blockly.Blocks['titan_motion_09'] = {
	init: function () {
		this.jsonInit(
			{
			  "type": "titan_motion_09",
			  "message0": Blockly.Msg.BELL_TITAN_MOTION_09_TITLE,
			  "previousStatement": null,
			  "nextStatement": null,
			  "colour": Blockly.Blocks.bell_titan.HUE,
			  "tooltip": Blockly.Msg.BELL_TITAN_MOTION_09_TOOLTIP,
			  "helpUrl": Blockly.Msg.BELL_TITAN_MOTION_09_HELPURL
			});
	},
};

Blockly.Blocks['titan_motion_10'] = {
	init: function () {
		this.jsonInit(
			{
			  "type": "titan_motion_10",
			  "message0": Blockly.Msg.BELL_TITAN_MOTION_10_TITLE,
			  "previousStatement": null,
			  "nextStatement": null,
			  "colour": Blockly.Blocks.bell_titan.HUE,
			  "tooltip": Blockly.Msg.BELL_TITAN_MOTION_10_TOOLTIP,
			  "helpUrl": Blockly.Msg.BELL_TITAN_MOTION_10_HELPURL
			});
	},
};
