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