'use strict';

goog.provide('Blockly.Msg.en.bell');

goog.require('Blockly.Msg');

Blockly.Msg.BELL_INDEX_HELPURL = function() { return window.AppDir + 'www' + '/guide/MabotHelp.html'; };
// ======================= bell-flow ==========================
Blockly.Msg.BELL_FLOW_START_TITLE = "Start %1 %2";
Blockly.Msg.BELL_FLOW_START_TOOLTIP = "entry point of procedure.";
Blockly.Msg.BELL_FLOW_START_HELPURL = function() { return window.AppDir + 'www' + '/guide/Start.html'; };
Blockly.Msg.BELL_FLOW_WAIT_TITLE = "Wait %1 s";
Blockly.Msg.BELL_FLOW_WAIT_TOOLTIP = "wait for specified seconds.";
Blockly.Msg.BELL_FLOW_WAIT_HELPURL = function() { return window.AppDir + 'www' + '/guide/Wait.html'; };
Blockly.Msg.BELL_FLOW_WAIT_BLOCK_TITLE = "Wait %1";
Blockly.Msg.BELL_FLOW_WAIT_BLOCK_TOOLTIP = "wait until condition turn true.";
Blockly.Msg.BELL_FLOW_WAIT_BLOCK_HELPURL = function() { return window.AppDir + 'www' + '/guide/Wait.html'; };
Blockly.Msg.BELL_FLOW_REPEAT_FINITE_TITLE = "Repeat %1 times %2 %3";
Blockly.Msg.BELL_FLOW_REPEAT_FINITE_TOOLTIP = "Do some statements several times.";
Blockly.Msg.BELL_FLOW_REPEAT_FINITE_HELPURL = function() { return window.AppDir + 'www' + '/guide/While.html'; };
Blockly.Msg.BELL_FLOW_REPEAT_INFINITE_TITLE = "Repeat %1 %2";
Blockly.Msg.BELL_FLOW_REPEAT_INFINITE_TOOLTIP = "Do some statements forever.";
Blockly.Msg.BELL_FLOW_REPEAT_INFINITE_HELPURL = function() { return window.AppDir + 'www' + '/guide/While.html'; };
Blockly.Msg.BELL_FLOW_REPEAT_CONDITION_TITLE = "While %1 %2";
Blockly.Msg.BELL_FLOW_REPEAT_CONDITION_TOOLTIP = "While a value is true, then do some statements.";
Blockly.Msg.BELL_FLOW_REPEAT_CONDITION_HELPURL = function() { return window.AppDir + 'www' + '/guide/While.html'; };
Blockly.Msg.BELL_FLOW_BREAK_TITLE = "Break";
Blockly.Msg.BELL_FLOW_BREAK_TOOLTIP = "break out of loop";
Blockly.Msg.BELL_FLOW_BREAK_HELPURL = function() { return window.AppDir + 'www' + '/guide/While.html'; };
Blockly.Msg.BELL_FLOW_IF_TITLE = "if %1 then %2 %3";
Blockly.Msg.BELL_FLOW_IF_TOOLTIP = "If a value is true, then do some statements.";
Blockly.Msg.BELL_FLOW_IF_HELPURL = function() { return window.AppDir + 'www' + '/guide/If.html'; };
Blockly.Msg.BELL_FLOW_IF_ELSE_TITLE = "if %1 then %2 %3 else %4 %5";
Blockly.Msg.BELL_FLOW_IF_ELSE_TOOLTIP = "If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";
Blockly.Msg.BELL_FLOW_IF_ELSE_HELPURL = function() { return window.AppDir + 'www' + '/guide/If.html'; };
// ======================= bell-motion ==========================
Blockly.Msg.BELL_MOTION_MOVE_INFINITE_TITLE = "Ball %1 mode %2 power %3 %4";
Blockly.Msg.BELL_MOTION_MOVE_INFINITE_TOOLTIP = "drive";
Blockly.Msg.BELL_MOTION_MOVE_INFINITE_HELPURL = function() { return window.AppDir + 'www' + '/guide/Ball.html'; };
Blockly.Msg.BELL_MOTION_MOVE_SEC_TITLE = "Ball %1 %2 power %3 for %4 s";
Blockly.Msg.BELL_MOTION_MOVE_SEC_TOOLTIP = "drive";
Blockly.Msg.BELL_MOTION_MOVE_SEC_HELPURL = function() { return window.AppDir + 'www' + '/guide/Ball.html'; };
Blockly.Msg.BELL_MOTION_MOVE_DISTANCE_TITLE = "Ball %1 %2 power %3 for %4 cm";
Blockly.Msg.BELL_MOTION_MOVE_DISTANCE_TOOLTIP = "drive";
Blockly.Msg.BELL_MOTION_MOVE_DISTANCE_HELPURL = function() { return window.AppDir + 'www' + '/guide/Ball.html'; };
Blockly.Msg.BELL_MOTION_ALL_STOP_TITLE = "All ball stopped %1";
Blockly.Msg.BELL_MOTION_ALL_STOP_TOOLTIP = "stop";
Blockly.Msg.BELL_MOTION_ALL_STOP_HELPURL = function() { return window.AppDir + 'www' + '/guide/Ball2.html'; };
Blockly.Msg.BELL_MOTION_SINGLE_STOP_TITLE = "Ball %1 stopped %2";
Blockly.Msg.BELL_MOTION_SINGLE_STOP_TOOLTIP = "stop";
Blockly.Msg.BELL_MOTION_SINGLE_STOP_HELPURL = function() { return window.AppDir + 'www' + '/guide/Ball1.html'; };
// ======================= bell-light ==========================
Blockly.Msg.BELL_LIGHT_MODE_TITLE = "%1 light mode %2";
Blockly.Msg.BELL_LIGHT_MODE_TOOLTIP = "set light mode";
Blockly.Msg.BELL_LIGHT_MODE_HELPURL = function() { return window.AppDir + 'www' + '/guide/Light.html'; };
Blockly.Msg.BELL_LIGHT_COLOR_TITLE = "%1 light color %2";
Blockly.Msg.BELL_LIGHT_COLOR_TOOLTIP = "set light color";
Blockly.Msg.BELL_LIGHT_COLOR_HELPURL = function() { return window.AppDir + 'www' + '/guide/Light1.html'; };
Blockly.Msg.BELL_LIGHT_OFF_TITLE = "%1 light off";
Blockly.Msg.BELL_LIGHT_OFF_TOOLTIP = "light off";
Blockly.Msg.BELL_LIGHT_OFF_HELPURL = function() { return window.AppDir + 'www' + '/guide/Light2.html'; };
// ======================= bell-sensor ==========================
Blockly.Msg.BELL_SENSOR_GYRO_ANGLE_TITLE = "Gyro %1 Angle";
Blockly.Msg.BELL_SENSOR_GYRO_ANGLE_TOOLTIP = "get gyroscope angle";
Blockly.Msg.BELL_SENSOR_GYRO_ANGLE_HELPURL = function() { return window.AppDir + 'www' + '/guide/Gyro.html'; };
Blockly.Msg.BELL_SENSOR_GYRO_ANGULAR_VELOCITY_TITLE = "Gyro %1 Angular velocity";
Blockly.Msg.BELL_SENSOR_GYRO_ANGULAR_VELOCITY_TOOLTIP = "get gyroscope angular velocity";
Blockly.Msg.BELL_SENSOR_GYRO_ANGULAR_VELOCITY_HELPURL = function() { return window.AppDir + 'www' + '/guide/Gyro1.html'; };
Blockly.Msg.BELL_SENSOR_GYRO_ACCELERATION_TITLE = "Gyro %1 Acceleration";
Blockly.Msg.BELL_SENSOR_GYRO_ACCELERATION_TOOLTIP = "get gyroscope acceleration";
Blockly.Msg.BELL_SENSOR_GYRO_ACCELERATION_HELPURL = function() { return window.AppDir + 'www' + '/guide/Gyro2.html'; };
Blockly.Msg.BELL_SENSOR_GYRO_TOGGLE_TITLE = "Gyro %1";
Blockly.Msg.BELL_SENSOR_GYRO_TOGGLE_TOOLTIP = "gyroscope switch";
Blockly.Msg.BELL_SENSOR_GYRO_TOGGLE_HELPURL = function() { return window.AppDir + 'www' + '/guide/Gyro3.html'; };
Blockly.Msg.BELL_SENSOR_GYRO_STABILITY_TITLE = "Gyro is stable";
Blockly.Msg.BELL_SENSOR_GYRO_STABILITY_TOOLTIP = "Gyro is stable";
Blockly.Msg.BELL_SENSOR_GYRO_STABILITY_HELPURL = function() { return window.AppDir + 'www' + '/guide/Gyro3.html'; };
Blockly.Msg.BELL_SENSOR_GYRO_RESET_TITLE = "Gyro Reset";
Blockly.Msg.BELL_SENSOR_GYRO_RESET_TOOLTIP = "Gyro Reset";
Blockly.Msg.BELL_SENSOR_GYRO_RESET_HELPURL = function() { return window.AppDir + 'www' + '/guide/Gyro4.html'; };
Blockly.Msg.BELL_SENSOR_COLOR_TOGGLE_TITLE = "Color sensor %1 %2";
Blockly.Msg.BELL_SENSOR_COLOR_TOGGLE_TOOLTIP = "color sensor switch";
Blockly.Msg.BELL_SENSOR_COLOR_TOGGLE_HELPURL = function() { return window.AppDir + 'www' + '/guide/ColorSensor.html'; };
Blockly.Msg.BELL_SENSOR_COLOR_MODE_CHANGE_TITLE = "Color sensor %1 mode %2";
Blockly.Msg.BELL_SENSOR_COLOR_MODE_CHANGE_TOOLTIP = "color sensor mode change";
Blockly.Msg.BELL_SENSOR_COLOR_MODE_CHANGE_HELPURL = function() { return window.AppDir + 'www' + '/guide/ColorSensor1.html'; };
Blockly.Msg.BELL_SENSOR_COLOR_READ_VALUE_TITLE = "Value of Color sensor %1";
Blockly.Msg.BELL_SENSOR_COLOR_READ_VALUE_TOOLTIP = "read value of color sensor";
Blockly.Msg.BELL_SENSOR_COLOR_READ_VALUE_HELPURL = function() { return window.AppDir + 'www' + '/guide/ColorSensor2.html'; };
Blockly.Msg.BELL_SENSOR_COLOR_PALETTE_FIELD = "Color";
Blockly.Msg.BELL_SENSOR_COLOR_PALETTE_TOOLTIP = "used to compare color";
Blockly.Msg.BELL_SENSOR_COLOR_PALETTE_HELPURL = function() { return window.AppDir + 'www' + '/guide/Color.html'; };
Blockly.Msg.BELL_SENSOR_IR_TOGGLE_TITLE = "Infrared Ray sensor %1 %2";
Blockly.Msg.BELL_SENSOR_IR_TOGGLE_TOOLTIP = "infrared ray sensor switch";
Blockly.Msg.BELL_SENSOR_IR_TOGGLE_HELPURL = function() { return window.AppDir + 'www' + '/guide/InfraredSensor.html'; };
Blockly.Msg.BELL_SENSOR_IR_READ_VALUE_TITLE = "Value of Infrared Ray sensor %1";
Blockly.Msg.BELL_SENSOR_IR_READ_VALUE_TOOLTIP = "read value of Infrared Ray sensor";
Blockly.Msg.BELL_SENSOR_IR_READ_VALUE_HELPURL = function() { return window.AppDir + 'www' + '/guide/InfraredSensor1.html'; };
Blockly.Msg.BELL_SENSOR_MOTOR_TITLE = "%1 of Motor %2";
Blockly.Msg.BELL_SENSOR_MOTOR_TOOLTIP = "infrared ray sensor switch";
Blockly.Msg.BELL_SENSOR_MOTOR_HELPURL = function() { return window.AppDir + 'www' + '/guide/InfraredSensor.html'; };
Blockly.Msg.BELL_SENSOR_MOTOR_RESET_TITLE = "Motor %1 reset";
Blockly.Msg.BELL_SENSOR_MOTOR_RESET_TOOLTIP = "infrared ray sensor switch";
Blockly.Msg.BELL_SENSOR_MOTOR_RESET_HELPURL = function() { return window.AppDir + 'www' + '/guide/Motor.html'; };
Blockly.Msg.BELL_SENSOR_MOTOR_RESET_ALL_TITLE = "All Motor reset";
Blockly.Msg.BELL_SENSOR_MOTOR_RESET_ALL_TOOLTIP = "All Motor reset";
Blockly.Msg.BELL_SENSOR_MOTOR_RESET_ALL_HELPURL = function() { return window.AppDir + 'www' + '/guide/Motor1.html'; };
Blockly.Msg.BELL_SENSOR_SAMPLE_RATE_TITLE = "%1 sample rate %2";
Blockly.Msg.BELL_SENSOR_SAMPLE_RATE_TOOLTIP = "set sample rate";
Blockly.Msg.BELL_SENSOR_SAMPLE_RATE_HELPURL = function() { return window.AppDir + 'www' + '/guide/SensorSample.html'; };
Blockly.Msg.BELL_SENSOR_AUDIO_NOTE_TITLE = "Play tone %1 %2";
Blockly.Msg.BELL_SENSOR_AUDIO_NOTE_TOOLTIP = "Play tone";
Blockly.Msg.BELL_SENSOR_AUDIO_NOTE_HELPURL = function() { return window.AppDir + 'www' + '/guide/SensorSample.html'; };
Blockly.Msg.BELL_SENSOR_AUDIO_NOISE_TITLE = "Buzzer play %1";
Blockly.Msg.BELL_SENSOR_AUDIO_NOISE_TOOLTIP = "Buzzer play";
Blockly.Msg.BELL_SENSOR_AUDIO_NOISE_HELPURL = function() { return window.AppDir + 'www' + '/guide/SensorSample.html'; };
Blockly.Msg.BELL_SENSOR_AUDIO_STOP_TITLE = "Music stop";
Blockly.Msg.BELL_SENSOR_AUDIO_STOP_TOOLTIP = "set sample rate";
Blockly.Msg.BELL_SENSOR_AUDIO_STOP_HELPURL = function() { return window.AppDir + 'www' + '/guide/SensorSample.html'; };
Blockly.Msg.BELL_SENSOR_AUDIO_SCALE_TITLE = "%1";
Blockly.Msg.BELL_SENSOR_AUDIO_SCALE_TOOLTIP = "";
Blockly.Msg.BELL_SENSOR_AUDIO_SCALE_HELPURL = 'https://en.wikipedia.org/wiki/Musical_note';
Blockly.Msg.BELL_SENSOR_AUDIO_PITCH_TITLE = "%1";
Blockly.Msg.BELL_SENSOR_AUDIO_PITCH_TOOLTIP = "";
Blockly.Msg.BELL_SENSOR_AUDIO_PITCH_HELPURL = 'https://en.wikipedia.org/wiki/Musical_note';
Blockly.Msg.BELL_SENSOR_SWITCH_TOOLTIP = "";
Blockly.Msg.BELL_SENSOR_SWITCH_HELPURL = function() { return window.AppDir + 'www' + '/guide/Gyro.html'; };
Blockly.Msg.BELL_SYSTEM_GET_TIME_TITLE = "System time";
Blockly.Msg.BELL_SYSTEM_GET_TIME_TOOLTIP = "get system time";
Blockly.Msg.BELL_SYSTEM_GET_TIME_HELPURL = function() { return window.AppDir + 'www' + '/guide/SystemTime.html'; };
Blockly.Msg.BELL_SYSTEM_RESET_TIME_TITLE = "Reset system time";
Blockly.Msg.BELL_SYSTEM_RESET_TIME_TOOLTIP = "reset system time";
Blockly.Msg.BELL_SYSTEM_RESET_TIME_HELPURL = function() { return window.AppDir + 'www' + '/guide/SystemTime.html'; };
Blockly.Msg.BELL_PHYSICAL_BUTTON_TITLE = "When button %1 pressed";
Blockly.Msg.BELL_PHYSICAL_BUTTON_TOOLTIP = "";
Blockly.Msg.BELL_PHYSICAL_BUTTON_HELPURL = function() { return window.AppDir + 'www' + '/guide/RemotePanel.html'; };
Blockly.Msg.BELL_REMOTE_RATIO_TITLE = "Remote Panel Ratio Coefficient";
Blockly.Msg.BELL_REMOTE_RATIO_TOOLTIP = "";
Blockly.Msg.BELL_REMOTE_RATIO_HELPURL = function() { return window.AppDir + 'www' + '/guide/Button.html'; };
Blockly.Msg.BELL_REMOTE_COORDINATE_TITLE = "Remote Panel %1 Coordinate";
Blockly.Msg.BELL_REMOTE_COORDINATE_TOOLTIP = "used to control mabot with App";
Blockly.Msg.BELL_REMOTE_COORDINATE_HELPURL = function() { return window.AppDir + 'www' + '/guide/RemotePanel.html'; };
Blockly.Msg.BELL_REMOTE_POWER_TITLE = "Remote Panel %1 Rotation Power";
Blockly.Msg.BELL_REMOTE_POWER_TOOLTIP = "used to control mabot with App";
Blockly.Msg.BELL_REMOTE_POWER_HELPURL = function() { return window.AppDir + 'www' + '/guide/RemotePanel.html'; };
// ======================= bell-logic ==========================
Blockly.Msg.BELL_LOGIC_COMPARE_EQ_TOOLTIP = "Return true if both inputs equal each other.";
Blockly.Msg.BELL_LOGIC_COMPARE_EQ_HELPURL = function() { return window.AppDir + 'www' + '/guide/Newtopic14.html'; };
Blockly.Msg.BELL_LOGIC_COMPARE_NEQ_TOOLTIP = "Return true if both inputs are not equal to each other.";
Blockly.Msg.BELL_LOGIC_COMPARE_NEQ_HELPURL = function() { return window.AppDir + 'www' + '/guide/Newtopic15.html'; };
Blockly.Msg.BELL_LOGIC_COMPARE_LT_TOOLTIP = "Return true if the first input is smaller than the second input.";
Blockly.Msg.BELL_LOGIC_COMPARE_LT_HELPURL = function() { return window.AppDir + 'www' + '/guide/Newtopic13.html'; };
Blockly.Msg.BELL_LOGIC_COMPARE_LTE_TOOLTIP = "Return true if the first input is smaller than or equal to the second input.";
Blockly.Msg.BELL_LOGIC_COMPARE_LTE_HELPURL = function() { return window.AppDir + 'www' + '/guide/Newtopic16.html'; };
Blockly.Msg.BELL_LOGIC_COMPARE_GT_TOOLTIP = "Return true if the first input is greater than the second input.";
Blockly.Msg.BELL_LOGIC_COMPARE_GT_HELPURL = function() { return window.AppDir + 'www' + '/guide/Newtopic12.html'; };
Blockly.Msg.BELL_LOGIC_COMPARE_GTE_TOOLTIP = "Return true if the first input is greater than or equal to the second input.";
Blockly.Msg.BELL_LOGIC_COMPARE_GTE_HELPURL = function() { return window.AppDir + 'www' + '/guide/Newtopic17.html'; };
Blockly.Msg.BELL_LOGIC_OPERATION_AND_TOOLTIP = "Logic operation.";
Blockly.Msg.BELL_LOGIC_OPERATION_AND_HELPURL = function() { return window.AppDir + 'www' + '/guide/And.html'; };
Blockly.Msg.BELL_LOGIC_OPERATION_OR_TOOLTIP = "Logic operation";
Blockly.Msg.BELL_LOGIC_OPERATION_OR_HELPURL = function() { return window.AppDir + 'www' + '/guide/Or.html'; };
Blockly.Msg.BELL_LOGIC_OPERATION_NOT_TOOLTIP = "Logic operation.";
Blockly.Msg.BELL_LOGIC_OPERATION_NOT_HELPURL = function() { return window.AppDir + 'www' + '/guide/Not.html'; };
// ======================= bell-math ==========================
Blockly.Msg.BELL_MATH_NUMBER_TOOLTIP = "A number";
Blockly.Msg.BELL_MATH_NUMBER_HELPURL = Blockly.Msg.BELL_INDEX_HELPURL;

Blockly.Msg.BELL_MATH_ARITHMETIC_ADD_TOOLTIP = "Return the sum of the two numbers.";
Blockly.Msg.BELL_MATH_ARITHMETIC_ADD_HELPURL = Blockly.Msg.BELL_INDEX_HELPURL;
Blockly.Msg.BELL_MATH_ARITHMETIC_MINUS_TOOLTIP = "Return the difference of the two numbers.";
Blockly.Msg.BELL_MATH_ARITHMETIC_MINUS_HELPURL = Blockly.Msg.BELL_INDEX_HELPURL;
Blockly.Msg.BELL_MATH_ARITHMETIC_MULTIPLY_TOOLTIP = "Return the product of the two numbers.";
Blockly.Msg.BELL_MATH_ARITHMETIC_MULTIPLY_HELPURL = Blockly.Msg.BELL_INDEX_HELPURL;
Blockly.Msg.BELL_MATH_ARITHMETIC_DIVIDE_TOOLTIP = "Return the quotient of the two numbers.";
Blockly.Msg.BELL_MATH_ARITHMETIC_DIVIDE_HELPURL = Blockly.Msg.BELL_INDEX_HELPURL;

Blockly.Msg.BELL_MATH_RANDOM_INT_TITLE = "random integer from %1 to %2";
Blockly.Msg.BELL_MATH_RANDOM_INT_TOOLTIP = "Return a random integer between the two specified limits, inclusive.";
Blockly.Msg.BELL_MATH_RANDOM_INT_HELPURL = function() { return window.AppDir + 'www' + '/guide/PickRandom.html'; };
// 取绝对值block label
Blockly.Msg.BELL_MATH_ABS_TITLE = "absolute value of %1";
Blockly.Msg.BELL_MATH_ABS_TOOLTIP = "return absolute value";
Blockly.Msg.BELL_MATH_ABS_HELPURL = function() { return window.AppDir + 'www' + '/guide/AbsoluteValue.html'; };
// 新增触碰球，关节球相关
Blockly.Msg.BELL_LIGHT_SINGLE_MOTOR_TITLE = "set motor %1 light to %2 with mode %3";
Blockly.Msg.BELL_LIGHT_SINGLE_MOTOR_TOOLTIP = ""; //TODO
Blockly.Msg.BELL_LIGHT_SINGLE_MOTOR_HELPURL = ""; //TODO
Blockly.Msg.BELL_LIGHT_MODE_BREATHING = "Breathing";
Blockly.Msg.BELL_LIGHT_MODE_FLASHING = "Flashing";
Blockly.Msg.BELL_LIGHT_MODE_REGULAR = "Regular";
Blockly.Msg.BELL_LIGHT_MODE_NONE = "OFF";
Blockly.Msg.BELL_MOTION_TOUCH_STATE_TITLE = "get touch state of %1";
Blockly.Msg.BELL_MOTION_TOUCH_STATE_TOOLTIP = ""; //TODO
Blockly.Msg.BELL_MOTION_TOUCH_STATE_HELPURL = ""; //TODO
Blockly.Msg.BELL_MOTION_SET_HSERVO_ANGLE_TITLE = "set hservo %1 angle to %2";
Blockly.Msg.BELL_MOTION_SET_HSERVO_ANGLE_TOOLTIP = ""; //TODO
Blockly.Msg.BELL_MOTION_SET_HSERVO_ANGLE_HELPURL = ""; //TODO
Blockly.Msg.BELL_MOTION_GET_HSERVO_ANGLE_TITLE = "get hservo angle of %1";
Blockly.Msg.BELL_MOTION_GET_HSERVO_ANGLE_TOOLTIP = ""; //TODO
Blockly.Msg.BELL_MOTION_GET_HSERVO_ANGLE_HELPURL = ""; //TODO
Blockly.Msg.BELL_MOTION_SET_VSERVO_ANGLE_TITLE = "set vservo %1 angle to %2";
Blockly.Msg.BELL_MOTION_SET_VSERVO_ANGLE_TOOLTIP = ""; //TODO
Blockly.Msg.BELL_MOTION_SET_VSERVO_ANGLE_HELPURL = ""; //TODO
Blockly.Msg.BELL_MOTION_GET_VSERVO_ANGLE_TITLE = "get vservo angle of %1";
Blockly.Msg.BELL_MOTION_GET_VSERVO_ANGLE_TOOLTIP = ""; //TODO
Blockly.Msg.BELL_MOTION_GET_VSERVO_ANGLE_HELPURL = ""; //TODO
//titan相关语句块
Blockly.Msg.BELL_SET_TITAN_SERVO_DATA_TITLE = "set titan servo %1 %2 ms angle to %3 °"
Blockly.Msg.BELL_SET_TITAN_SERVO_DATA_TOOLTIP = "";
Blockly.Msg.BELL_SET_TITAN_SERVO_DATA_HELPURL = "";

Blockly.Msg.BELL_GET_TITAN_SERVO_DATA_TITLE = "get titan servo %1 angle"
Blockly.Msg.BELL_GET_TITAN_SERVO_DATA_TOOLTIP = "";
Blockly.Msg.BELL_GET_TITAN_SERVO_DATA_HELPURL = "";

Blockly.Msg.BELL_START_TITAN_SERVO_TITLE = "start titan servo %1 angle"
Blockly.Msg.BELL_START_TITAN_SERVO_TOOLTIP = "";
Blockly.Msg.BELL_START_TITAN_SERVO_HELPURL = "";

Blockly.Msg.BELL_TITAN_MOTIONS_TITLE = "Dog action: %1";
Blockly.Msg.BELL_TITAN_MOTIONS_TOOLTIP = "";
Blockly.Msg.BELL_TITAN_MOTIONS_HELPURL = "";

Blockly.Msg.BELL_TITAN_MOTION_01_TITLE = "Smell";
Blockly.Msg.BELL_TITAN_MOTION_01_TOOLTIP = "";
Blockly.Msg.BELL_TITAN_MOTION_01_HELPURL = "";

Blockly.Msg.BELL_TITAN_MOTION_02_TITLE = "Guard";
Blockly.Msg.BELL_TITAN_MOTION_02_TOOLTIP = "";
Blockly.Msg.BELL_TITAN_MOTION_02_HELPURL = "";

Blockly.Msg.BELL_TITAN_MOTION_03_TITLE = "Pee";
Blockly.Msg.BELL_TITAN_MOTION_03_TOOLTIP = "";
Blockly.Msg.BELL_TITAN_MOTION_03_HELPURL = "";

Blockly.Msg.BELL_TITAN_MOTION_04_TITLE = "Bark";
Blockly.Msg.BELL_TITAN_MOTION_04_TOOLTIP = "";
Blockly.Msg.BELL_TITAN_MOTION_04_HELPURL = "";

Blockly.Msg.BELL_TITAN_MOTION_05_TITLE = "Afaid";
Blockly.Msg.BELL_TITAN_MOTION_05_TOOLTIP = "";
Blockly.Msg.BELL_TITAN_MOTION_05_HELPURL = "";

Blockly.Msg.BELL_TITAN_MOTION_06_TITLE = "Bodyshake";
Blockly.Msg.BELL_TITAN_MOTION_06_TOOLTIP = "";
Blockly.Msg.BELL_TITAN_MOTION_06_HELPURL = "";

Blockly.Msg.BELL_TITAN_MOTION_07_TITLE = "Kind";
Blockly.Msg.BELL_TITAN_MOTION_07_TOOLTIP = "";
Blockly.Msg.BELL_TITAN_MOTION_07_HELPURL = "";

Blockly.Msg.BELL_TITAN_MOTION_08_TITLE = "Handshake";
Blockly.Msg.BELL_TITAN_MOTION_08_TOOLTIP = "";
Blockly.Msg.BELL_TITAN_MOTION_08_HELPURL = "";

Blockly.Msg.BELL_TITAN_MOTION_09_TITLE = "Lying down";
Blockly.Msg.BELL_TITAN_MOTION_09_TOOLTIP = "";
Blockly.Msg.BELL_TITAN_MOTION_09_HELPURL = "";

Blockly.Msg.BELL_TITAN_MOTION_10_TITLE = "Move forward";
Blockly.Msg.BELL_TITAN_MOTION_10_TOOLTIP = "";
Blockly.Msg.BELL_TITAN_MOTION_10_HELPURL = "";
