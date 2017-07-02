'use strict';

goog.provide('Blockly.Msg.zh.hans.bell');

goog.require('Blockly.Msg');

Blockly.Msg.BELL_INDEX_HELPURL = function() { return window.AppDir + 'www' + '/guide/MabotHelp.html'; };
// ======================= bell-flow ==========================
Blockly.Msg.BELL_FLOW_START_TITLE = "开始 %1 %2";
Blockly.Msg.BELL_FLOW_START_TOOLTIP = "程序入口.";
Blockly.Msg.BELL_FLOW_START_HELPURL = function() { return window.AppDir + 'www' + '/guide/Start.html'; };
Blockly.Msg.BELL_FLOW_WAIT_TITLE = "等待 %1 秒";
Blockly.Msg.BELL_FLOW_WAIT_TOOLTIP = "等待指定时间";
Blockly.Msg.BELL_FLOW_WAIT_HELPURL = function() { return window.AppDir + 'www' + '/guide/Wait.html'; };
Blockly.Msg.BELL_FLOW_WAIT_BLOCK_TITLE = "等待 %1";
Blockly.Msg.BELL_FLOW_WAIT_BLOCK_TOOLTIP = "等待条件成立";
Blockly.Msg.BELL_FLOW_WAIT_BLOCK_HELPURL = function() { return window.AppDir + 'www' + '/guide/Wait.html'; };
Blockly.Msg.BELL_FLOW_REPEAT_FINITE_TITLE = "重复 %1 次数 %2 %3";
Blockly.Msg.BELL_FLOW_REPEAT_FINITE_TOOLTIP = "执行语句指定次数";
Blockly.Msg.BELL_FLOW_REPEAT_FINITE_HELPURL = function() { return window.AppDir + 'www' + '/guide/While.html'; };
Blockly.Msg.BELL_FLOW_REPEAT_INFINITE_TITLE = "重复 %1 %2";
Blockly.Msg.BELL_FLOW_REPEAT_INFINITE_TOOLTIP = "一直执行语句";
Blockly.Msg.BELL_FLOW_REPEAT_INFINITE_HELPURL = function() { return window.AppDir + 'www' + '/guide/While.html'; };
Blockly.Msg.BELL_FLOW_REPEAT_CONDITION_TITLE = "循环 %1 %2";
Blockly.Msg.BELL_FLOW_REPEAT_CONDITION_TOOLTIP = "当条件成立时, 重复执行语句";
Blockly.Msg.BELL_FLOW_REPEAT_CONDITION_HELPURL = function() { return window.AppDir + 'www' + '/guide/While.html'; };
Blockly.Msg.BELL_FLOW_BREAK_TITLE = "跳出";
Blockly.Msg.BELL_FLOW_BREAK_TOOLTIP = "跳出循环";
Blockly.Msg.BELL_FLOW_BREAK_HELPURL = function() { return window.AppDir + 'www' + '/guide/While.html'; };
Blockly.Msg.BELL_FLOW_IF_TITLE = "如果 %1 那么 %2 %3";
Blockly.Msg.BELL_FLOW_IF_TOOLTIP = "如果条件成立, 那么执行语句";
Blockly.Msg.BELL_FLOW_IF_HELPURL = function() { return window.AppDir + 'www' + '/guide/If.html'; };
Blockly.Msg.BELL_FLOW_IF_ELSE_TITLE = "如果 %1 那么 %2 %3 否则 %4 %5";
Blockly.Msg.BELL_FLOW_IF_ELSE_TOOLTIP = "如果条件成立，执行第一个语句块；否则执行第二个语句块";
Blockly.Msg.BELL_FLOW_IF_ELSE_HELPURL = function() { return window.AppDir + 'www' + '/guide/If.html'; };
// ======================= bell-motion ==========================
Blockly.Msg.BELL_MOTION_MOVE_INFINITE_TITLE = "驱动球 %1 以模式 %2 移动 %3 %4";
Blockly.Msg.BELL_MOTION_MOVE_INFINITE_TOOLTIP = "移动";
Blockly.Msg.BELL_MOTION_MOVE_INFINITE_HELPURL = function() { return window.AppDir + 'www' + '/guide/Ball.html'; };
Blockly.Msg.BELL_MOTION_MOVE_SEC_TITLE = "驱动球 %1 %2 以功率 %3 移动 %4 秒";
Blockly.Msg.BELL_MOTION_MOVE_SEC_TOOLTIP = "计时移动";
Blockly.Msg.BELL_MOTION_MOVE_SEC_HELPURL = function() { return window.AppDir + 'www' + '/guide/Ball.html'; };
Blockly.Msg.BELL_MOTION_MOVE_DISTANCE_TITLE = "驱动球 %1 %2 以功率 %3 移动 %4 厘米";
Blockly.Msg.BELL_MOTION_MOVE_DISTANCE_TOOLTIP = "移动距离";
Blockly.Msg.BELL_MOTION_MOVE_DISTANCE_HELPURL = function() { return window.AppDir + 'www' + '/guide/Ball.html'; };
Blockly.Msg.BELL_MOTION_ALL_STOP_TITLE = "所有驱动球停止 %1";
Blockly.Msg.BELL_MOTION_ALL_STOP_TOOLTIP = "停止所有驱动球";
Blockly.Msg.BELL_MOTION_ALL_STOP_HELPURL = function() { return window.AppDir + 'www' + '/guide/Ball2.html'; };
Blockly.Msg.BELL_MOTION_SINGLE_STOP_TITLE = "驱动球 %1 停止 %2";
Blockly.Msg.BELL_MOTION_SINGLE_STOP_TOOLTIP = "停止某个驱动球";
Blockly.Msg.BELL_MOTION_SINGLE_STOP_HELPURL = function() { return window.AppDir + 'www' + '/guide/Ball1.html'; };
// ======================= bell-light ==========================
Blockly.Msg.BELL_LIGHT_MODE_TITLE = "%1 灯光模式 %2";
Blockly.Msg.BELL_LIGHT_MODE_TOOLTIP = "设置灯光模式";
Blockly.Msg.BELL_LIGHT_MODE_HELPURL = function() { return window.AppDir + 'www' + '/guide/Light.html'; };
Blockly.Msg.BELL_LIGHT_COLOR_TITLE = "设置 %1 灯光颜色 %2";
Blockly.Msg.BELL_LIGHT_COLOR_TOOLTIP = "设置灯光颜色";
Blockly.Msg.BELL_LIGHT_COLOR_HELPURL = function() { return window.AppDir + 'www' + '/guide/Light1.html'; };
Blockly.Msg.BELL_LIGHT_OFF_TITLE = "%1 灯光关闭";
Blockly.Msg.BELL_LIGHT_OFF_TOOLTIP = "关灯";
Blockly.Msg.BELL_LIGHT_OFF_HELPURL = function() { return window.AppDir + 'www' + '/guide/Light2.html'; };
// ======================= bell-sensor ==========================
Blockly.Msg.BELL_SENSOR_GYRO_ANGLE_TITLE = "陀螺仪 %1 角度";
Blockly.Msg.BELL_SENSOR_GYRO_ANGLE_TOOLTIP = "获得陀螺仪角度";
Blockly.Msg.BELL_SENSOR_GYRO_ANGLE_HELPURL = function() { return window.AppDir + 'www' + '/guide/Gyro.html'; };
Blockly.Msg.BELL_SENSOR_GYRO_ANGULAR_VELOCITY_TITLE = "陀螺仪 %1 角速度";
Blockly.Msg.BELL_SENSOR_GYRO_ANGULAR_VELOCITY_TOOLTIP = "获得陀螺仪角速度";
Blockly.Msg.BELL_SENSOR_GYRO_ANGULAR_VELOCITY_HELPURL = function() { return window.AppDir + 'www' + '/guide/Gyro1.html'; };
Blockly.Msg.BELL_SENSOR_GYRO_ACCELERATION_TITLE = "陀螺仪 %1 加速度";
Blockly.Msg.BELL_SENSOR_GYRO_ACCELERATION_TOOLTIP = "获得陀螺仪加速度";
Blockly.Msg.BELL_SENSOR_GYRO_ACCELERATION_HELPURL = function() { return window.AppDir + 'www' + '/guide/Gyro2.html'; };
Blockly.Msg.BELL_SENSOR_GYRO_TOGGLE_TITLE = "陀螺仪 %1";
Blockly.Msg.BELL_SENSOR_GYRO_TOGGLE_TOOLTIP = "陀螺仪开关";
Blockly.Msg.BELL_SENSOR_GYRO_TOGGLE_HELPURL = function() { return window.AppDir + 'www' + '/guide/Gyro3.html'; };
Blockly.Msg.BELL_SENSOR_GYRO_STABILITY_TITLE = "陀螺仪已经稳定";
Blockly.Msg.BELL_SENSOR_GYRO_STABILITY_TOOLTIP = "如果陀螺仪已经稳定，返回真";
Blockly.Msg.BELL_SENSOR_GYRO_STABILITY_HELPURL = function() { return window.AppDir + 'www' + '/guide/Gyro3.html'; };
Blockly.Msg.BELL_SENSOR_GYRO_RESET_TITLE = "重置陀螺仪";
Blockly.Msg.BELL_SENSOR_GYRO_RESET_TOOLTIP = "重置陀螺仪各个数据";
Blockly.Msg.BELL_SENSOR_GYRO_RESET_HELPURL = function() { return window.AppDir + 'www' + '/guide/Gyro4.html'; };
Blockly.Msg.BELL_SENSOR_COLOR_TOGGLE_TITLE = "颜色传感器 %1 %2";
Blockly.Msg.BELL_SENSOR_COLOR_TOGGLE_TOOLTIP = "颜色传感器开关";
Blockly.Msg.BELL_SENSOR_COLOR_TOGGLE_HELPURL = function() { return window.AppDir + 'www' + '/guide/ColorSensor.html'; };
Blockly.Msg.BELL_SENSOR_COLOR_MODE_CHANGE_TITLE = "颜色传感器 %1 设置模式 %2";
Blockly.Msg.BELL_SENSOR_COLOR_MODE_CHANGE_TOOLTIP = "设置颜色传感器工作模式";
Blockly.Msg.BELL_SENSOR_COLOR_MODE_CHANGE_HELPURL = function() { return window.AppDir + 'www' + '/guide/ColorSensor1.html'; };
Blockly.Msg.BELL_SENSOR_COLOR_READ_VALUE_TITLE = "颜色传感器 %1 的值";
Blockly.Msg.BELL_SENSOR_COLOR_READ_VALUE_TOOLTIP = "读取颜色传感器数据";
Blockly.Msg.BELL_SENSOR_COLOR_READ_VALUE_HELPURL = function() { return window.AppDir + 'www' + '/guide/ColorSensor2.html'; };
Blockly.Msg.BELL_SENSOR_COLOR_PALETTE_FIELD = "颜色";
Blockly.Msg.BELL_SENSOR_COLOR_PALETTE_TOOLTIP = "用来比较颜色";
Blockly.Msg.BELL_SENSOR_COLOR_PALETTE_HELPURL = function() { return window.AppDir + 'www' + '/guide/Color.html'; };
Blockly.Msg.BELL_SENSOR_IR_TOGGLE_TITLE = "红外传感器 %1 %2";
Blockly.Msg.BELL_SENSOR_IR_TOGGLE_TOOLTIP = "红外传感器开关";
Blockly.Msg.BELL_SENSOR_IR_TOGGLE_HELPURL = function() { return window.AppDir + 'www' + '/guide/InfraredSensor.html'; };
Blockly.Msg.BELL_SENSOR_IR_READ_VALUE_TITLE = "红外传感器 %1 的值";
Blockly.Msg.BELL_SENSOR_IR_READ_VALUE_TOOLTIP = "读取红外传感器数据";
Blockly.Msg.BELL_SENSOR_IR_READ_VALUE_HELPURL = function() { return window.AppDir + 'www' + '/guide/InfraredSensor1.html'; };
Blockly.Msg.BELL_SENSOR_MOTOR_TITLE = "电机 %2 的 %1";
Blockly.Msg.BELL_SENSOR_MOTOR_TOOLTIP = "读取电机数据";
Blockly.Msg.BELL_SENSOR_MOTOR_HELPURL = function() { return window.AppDir + 'www' + '/guide/InfraredSensor.html'; };
Blockly.Msg.BELL_SENSOR_MOTOR_RESET_TITLE = "重置电机 %1";
Blockly.Msg.BELL_SENSOR_MOTOR_RESET_TOOLTIP = "重置电机数据";
Blockly.Msg.BELL_SENSOR_MOTOR_RESET_HELPURL = function() { return window.AppDir + 'www' + '/guide/Motor.html'; };
Blockly.Msg.BELL_SENSOR_MOTOR_RESET_ALL_TITLE = "重置所有电机";
Blockly.Msg.BELL_SENSOR_MOTOR_RESET_ALL_TOOLTIP = "重置所有电机";
Blockly.Msg.BELL_SENSOR_MOTOR_RESET_ALL_HELPURL = function() { return window.AppDir + 'www' + '/guide/Motor1.html'; };
Blockly.Msg.BELL_SENSOR_SAMPLE_RATE_TITLE = "%1 sample rate %2";
Blockly.Msg.BELL_SENSOR_SAMPLE_RATE_TOOLTIP = "设置采样率";
Blockly.Msg.BELL_SENSOR_SAMPLE_RATE_HELPURL = function() { return window.AppDir + 'www' + '/guide/SensorSample.html'; };
Blockly.Msg.BELL_SENSOR_AUDIO_NOTE_TITLE = "播放音频 %1 %2";
Blockly.Msg.BELL_SENSOR_AUDIO_NOTE_TOOLTIP = "播放音频";
Blockly.Msg.BELL_SENSOR_AUDIO_NOTE_HELPURL = function() { return window.AppDir + 'www' + '/guide/SensorSample.html'; };
Blockly.Msg.BELL_SENSOR_AUDIO_NOISE_TITLE = "蜂鸣器 %1";
Blockly.Msg.BELL_SENSOR_AUDIO_NOISE_TOOLTIP = "蜂鸣器播放预设旋律";
Blockly.Msg.BELL_SENSOR_AUDIO_NOISE_HELPURL = function() { return window.AppDir + 'www' + '/guide/SensorSample.html'; };
Blockly.Msg.BELL_SENSOR_AUDIO_STOP_TITLE = "停止播放声音";
Blockly.Msg.BELL_SENSOR_AUDIO_STOP_TOOLTIP = "停止播放声音";
Blockly.Msg.BELL_SENSOR_AUDIO_STOP_HELPURL = function() { return window.AppDir + 'www' + '/guide/SensorSample.html'; };
Blockly.Msg.BELL_SENSOR_AUDIO_SCALE_TITLE = "%1";
Blockly.Msg.BELL_SENSOR_AUDIO_SCALE_TOOLTIP = "音阶";
Blockly.Msg.BELL_SENSOR_AUDIO_SCALE_HELPURL = 'https://en.wikipedia.org/wiki/Musical_note';
Blockly.Msg.BELL_SENSOR_AUDIO_PITCH_TITLE = "%1";
Blockly.Msg.BELL_SENSOR_AUDIO_PITCH_TOOLTIP = "音高";
Blockly.Msg.BELL_SENSOR_AUDIO_PITCH_HELPURL = 'https://en.wikipedia.org/wiki/Musical_note';
Blockly.Msg.BELL_SENSOR_SWITCH_TOOLTIP = "开关";
Blockly.Msg.BELL_SENSOR_SWITCH_HELPURL = function() { return window.AppDir + 'www' + '/guide/Gyro.html'; };
Blockly.Msg.BELL_SYSTEM_GET_TIME_TITLE = "系统时间";
Blockly.Msg.BELL_SYSTEM_GET_TIME_TOOLTIP = "获得机器人内部系统时间";
Blockly.Msg.BELL_SYSTEM_GET_TIME_HELPURL = function() { return window.AppDir + 'www' + '/guide/SystemTime.html'; };
Blockly.Msg.BELL_SYSTEM_RESET_TIME_TITLE = "重置系统时间";
Blockly.Msg.BELL_SYSTEM_RESET_TIME_TOOLTIP = "重置机器人内部系统时间";
Blockly.Msg.BELL_SYSTEM_RESET_TIME_HELPURL = function() { return window.AppDir + 'www' + '/guide/SystemTime.html'; };
Blockly.Msg.BELL_PHYSICAL_BUTTON_TITLE = "当按钮 %1 按下时";
Blockly.Msg.BELL_PHYSICAL_BUTTON_TOOLTIP = "";
Blockly.Msg.BELL_PHYSICAL_BUTTON_HELPURL = function() { return window.AppDir + 'www' + '/guide/RemotePanel.html'; };
Blockly.Msg.BELL_REMOTE_RATIO_TITLE = "遥控比例系数";
Blockly.Msg.BELL_REMOTE_RATIO_TOOLTIP = "";
Blockly.Msg.BELL_REMOTE_RATIO_HELPURL = function() { return window.AppDir + 'www' + '/guide/Button.html'; };
Blockly.Msg.BELL_REMOTE_COORDINATE_TITLE = "%1 遥控坐标";
Blockly.Msg.BELL_REMOTE_COORDINATE_TOOLTIP = "手机App的遥控坐标";
Blockly.Msg.BELL_REMOTE_COORDINATE_HELPURL = function() { return window.AppDir + 'www' + '/guide/RemotePanel.html'; };
Blockly.Msg.BELL_REMOTE_POWER_TITLE = "%1 遥控功率";
Blockly.Msg.BELL_REMOTE_POWER_TOOLTIP = "经过换算之后的电机功率";
Blockly.Msg.BELL_REMOTE_POWER_HELPURL = function() { return window.AppDir + 'www' + '/guide/RemotePanel.html'; };
// ======================= bell-logic ==========================
Blockly.Msg.BELL_LOGIC_COMPARE_EQ_TOOLTIP = "两个数相等时返回真";
Blockly.Msg.BELL_LOGIC_COMPARE_EQ_HELPURL = function() { return window.AppDir + 'www' + '/guide/Newtopic14.html'; };
Blockly.Msg.BELL_LOGIC_COMPARE_NEQ_TOOLTIP = "两个数不相等时返回真";
Blockly.Msg.BELL_LOGIC_COMPARE_NEQ_HELPURL = function() { return window.AppDir + 'www' + '/guide/Newtopic15.html'; };
Blockly.Msg.BELL_LOGIC_COMPARE_LT_TOOLTIP = "第一个数小于第二个数时返回真";
Blockly.Msg.BELL_LOGIC_COMPARE_LT_HELPURL = function() { return window.AppDir + 'www' + '/guide/Newtopic13.html'; };
Blockly.Msg.BELL_LOGIC_COMPARE_LTE_TOOLTIP = "第一个数小于或等于第二个数时返回真";
Blockly.Msg.BELL_LOGIC_COMPARE_LTE_HELPURL = function() { return window.AppDir + 'www' + '/guide/Newtopic16.html'; };
Blockly.Msg.BELL_LOGIC_COMPARE_GT_TOOLTIP = "第一个数大于第二个数时返回真";
Blockly.Msg.BELL_LOGIC_COMPARE_GT_HELPURL = function() { return window.AppDir + 'www' + '/guide/Newtopic12.html'; };
Blockly.Msg.BELL_LOGIC_COMPARE_GTE_TOOLTIP = "第一个数大于或等于第二个数时返回真";
Blockly.Msg.BELL_LOGIC_COMPARE_GTE_HELPURL = function() { return window.AppDir + 'www' + '/guide/Newtopic17.html'; };
Blockly.Msg.BELL_LOGIC_OPERATION_AND_TOOLTIP = "逻辑与";
Blockly.Msg.BELL_LOGIC_OPERATION_AND_HELPURL = function() { return window.AppDir + 'www' + '/guide/And.html'; };
Blockly.Msg.BELL_LOGIC_OPERATION_OR_TOOLTIP = "逻辑或";
Blockly.Msg.BELL_LOGIC_OPERATION_OR_HELPURL = function() { return window.AppDir + 'www' + '/guide/Or.html'; };
Blockly.Msg.BELL_LOGIC_OPERATION_NOT_TOOLTIP = "逻辑非";
Blockly.Msg.BELL_LOGIC_OPERATION_NOT_HELPURL = function() { return window.AppDir + 'www' + '/guide/Not.html'; };
// ======================= bell-math ==========================
Blockly.Msg.BELL_MATH_NUMBER_TOOLTIP = "一个数字";
Blockly.Msg.BELL_MATH_NUMBER_HELPURL = Blockly.Msg.BELL_INDEX_HELPURL;

Blockly.Msg.BELL_MATH_ARITHMETIC_ADD_TOOLTIP = "返回两个数字的和";
Blockly.Msg.BELL_MATH_ARITHMETIC_ADD_HELPURL = Blockly.Msg.BELL_INDEX_HELPURL;
Blockly.Msg.BELL_MATH_ARITHMETIC_MINUS_TOOLTIP = "返回两个数字的差";
Blockly.Msg.BELL_MATH_ARITHMETIC_MINUS_HELPURL = Blockly.Msg.BELL_INDEX_HELPURL;
Blockly.Msg.BELL_MATH_ARITHMETIC_MULTIPLY_TOOLTIP = "返回两个数字的积";
Blockly.Msg.BELL_MATH_ARITHMETIC_MULTIPLY_HELPURL = Blockly.Msg.BELL_INDEX_HELPURL;
Blockly.Msg.BELL_MATH_ARITHMETIC_DIVIDE_TOOLTIP = "返回两个数字的商";
Blockly.Msg.BELL_MATH_ARITHMETIC_DIVIDE_HELPURL = Blockly.Msg.BELL_INDEX_HELPURL;

Blockly.Msg.BELL_MATH_RANDOM_INT_TITLE = "随机数从 %1 到 %2";
Blockly.Msg.BELL_MATH_RANDOM_INT_TOOLTIP = "返回介于两个数字之间的随机数（包含边界）";
Blockly.Msg.BELL_MATH_RANDOM_INT_HELPURL = function() { return window.AppDir + 'www' + '/guide/PickRandom.html'; };
// 取绝对值block label
Blockly.Msg.BELL_MATH_ABS_TITLE = "绝对值 %1";
Blockly.Msg.BELL_MATH_ABS_TOOLTIP = "返回绝对值";
Blockly.Msg.BELL_MATH_ABS_HELPURL = function() { return window.AppDir + 'www' + '/guide/AbsoluteValue.html'; };
// 新增触碰球，关节球相关
Blockly.Msg.BELL_LIGHT_SINGLE_MOTOR_TITLE = "设置驱动球 %1 灯光为 %2 模式为 %3";
Blockly.Msg.BELL_LIGHT_SINGLE_MOTOR_TOOLTIP = ""; //TODO
Blockly.Msg.BELL_LIGHT_SINGLE_MOTOR_HELPURL = ""; //TODO
Blockly.Msg.BELL_LIGHT_MODE_BREATHING = "呼吸";
Blockly.Msg.BELL_LIGHT_MODE_FLASHING = "闪烁";
Blockly.Msg.BELL_LIGHT_MODE_REGULAR = "常亮";
Blockly.Msg.BELL_LIGHT_MODE_NONE = "关闭";
Blockly.Msg.BELL_MOTION_TOUCH_STATE_TITLE = "获取触碰球 %1 是否按下状态";
Blockly.Msg.BELL_MOTION_TOUCH_STATE_TOOLTIP = ""; //TODO
Blockly.Msg.BELL_MOTION_TOUCH_STATE_HELPURL = ""; //TODO
Blockly.Msg.BELL_MOTION_SET_HSERVO_ANGLE_TITLE = "设置水平关节球 %1 角度为 %2";
Blockly.Msg.BELL_MOTION_SET_HSERVO_ANGLE_TOOLTIP = ""; //TODO
Blockly.Msg.BELL_MOTION_SET_HSERVO_ANGLE_HELPURL = ""; //TODO
Blockly.Msg.BELL_MOTION_GET_HSERVO_ANGLE_TITLE = "获取水平关节球 %1 的角度";
Blockly.Msg.BELL_MOTION_GET_HSERVO_ANGLE_TOOLTIP = ""; //TODO
Blockly.Msg.BELL_MOTION_GET_HSERVO_ANGLE_HELPURL = ""; //TODO
Blockly.Msg.BELL_MOTION_SET_VSERVO_ANGLE_TITLE = "设置摇摆关节球 %1 角度为 %2";
Blockly.Msg.BELL_MOTION_SET_VSERVO_ANGLE_TOOLTIP = ""; //TODO
Blockly.Msg.BELL_MOTION_SET_VSERVO_ANGLE_HELPURL = ""; //TODO
Blockly.Msg.BELL_MOTION_GET_VSERVO_ANGLE_TITLE = "获取摇摆关节球 %1 的角度";
Blockly.Msg.BELL_MOTION_GET_VSERVO_ANGLE_TOOLTIP = ""; //TODO
Blockly.Msg.BELL_MOTION_GET_VSERVO_ANGLE_HELPURL = ""; //TODO

//titan相关语句块
Blockly.Msg.BELL_SET_TITAN_SERVO_DATA_TITLE = "设置泰坦舵机 %1 时间 %2 ms 到 %3 °"
Blockly.Msg.BELL_SET_TITAN_SERVO_DATA_TOOLTIP = "";
Blockly.Msg.BELL_SET_TITAN_SERVO_DATA_HELPURL = "";

Blockly.Msg.BELL_GET_TITAN_SERVO_DATA_TITLE = "获取泰坦舵机 %1 角度"
Blockly.Msg.BELL_GET_TITAN_SERVO_DATA_TOOLTIP = "";
Blockly.Msg.BELL_GET_TITAN_SERVO_DATA_HELPURL = "";

Blockly.Msg.BELL_START_TITAN_SERVO_TITLE = "启动泰坦舵机"
Blockly.Msg.BELL_START_TITAN_SERVO_TOOLTIP = "";
Blockly.Msg.BELL_START_TITAN_SERVO_HELPURL = "";

Blockly.Msg.BELL_TITAN_MOTIONS_TITLE = "机器狗做 %1";
Blockly.Msg.BELL_TITAN_MOTIONS_TOOLTIP = "";
Blockly.Msg.BELL_TITAN_MOTIONS_HELPURL = "";

Blockly.Msg.BELL_TITAN_MOTION_01_TITLE = "嗅闻搜索";
Blockly.Msg.BELL_TITAN_MOTION_01_TOOLTIP = "";
Blockly.Msg.BELL_TITAN_MOTION_01_HELPURL = "";

Blockly.Msg.BELL_TITAN_MOTION_02_TITLE = "警示";
Blockly.Msg.BELL_TITAN_MOTION_02_TOOLTIP = "";
Blockly.Msg.BELL_TITAN_MOTION_02_HELPURL = "";

Blockly.Msg.BELL_TITAN_MOTION_03_TITLE = "小便状";
Blockly.Msg.BELL_TITAN_MOTION_03_TOOLTIP = "";
Blockly.Msg.BELL_TITAN_MOTION_03_HELPURL = "";

Blockly.Msg.BELL_TITAN_MOTION_04_TITLE = "狗吠";
Blockly.Msg.BELL_TITAN_MOTION_04_TOOLTIP = "";
Blockly.Msg.BELL_TITAN_MOTION_04_HELPURL = "";

Blockly.Msg.BELL_TITAN_MOTION_05_TITLE = "胆怯";
Blockly.Msg.BELL_TITAN_MOTION_05_TOOLTIP = "";
Blockly.Msg.BELL_TITAN_MOTION_05_HELPURL = "";

Blockly.Msg.BELL_TITAN_MOTION_06_TITLE = "全身抖动";
Blockly.Msg.BELL_TITAN_MOTION_06_TOOLTIP = "";
Blockly.Msg.BELL_TITAN_MOTION_06_HELPURL = "";

Blockly.Msg.BELL_TITAN_MOTION_07_TITLE = "友好";
Blockly.Msg.BELL_TITAN_MOTION_07_TOOLTIP = "";
Blockly.Msg.BELL_TITAN_MOTION_07_HELPURL = "";

Blockly.Msg.BELL_TITAN_MOTION_08_TITLE = "握手";
Blockly.Msg.BELL_TITAN_MOTION_08_TOOLTIP = "";
Blockly.Msg.BELL_TITAN_MOTION_08_HELPURL = "";

Blockly.Msg.BELL_TITAN_MOTION_09_TITLE = "躺倒";
Blockly.Msg.BELL_TITAN_MOTION_09_TOOLTIP = "";
Blockly.Msg.BELL_TITAN_MOTION_09_HELPURL = "";

Blockly.Msg.BELL_TITAN_MOTION_10_TITLE = "向前行走";
Blockly.Msg.BELL_TITAN_MOTION_10_TOOLTIP = "";
Blockly.Msg.BELL_TITAN_MOTION_10_HELPURL = "";
