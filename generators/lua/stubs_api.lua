--module name
stubs = {}

print("load lua interface stubs!")

--开启颜色传感器
function stubs.En_color_sensor(id)
	print("En_color_sensor:"..id)
end

--关闭颜色传感器
function stubs.Dis_color_sensor(id)
	print("Dis_color_sensor:"..id)
end

--读取颜色传感器数据
function stubs.Get_color_data(id)
	print("Get_color_data:"..id)
	return 512
end

--本模块内私有打印方法
local function debug_print(desc,...)
    for key,value in ipairs({...})
    do
       desc = desc.." "..value
    end
    print(desc)
end

--打开陀螺仪
function stubs.En_gyro(...)
	debug_print("开启陀螺仪:",...)
end

--关闭陀螺仪
function stubs.Dis_gyro(...)
	debug_print("关闭陀螺仪:",...)
end

--重置陀螺仪
function stubs.Reset_gyro(...)
	debug_print("重置陀螺仪:",...)
end

--获取陀螺仪角度
function stubs.Get_gyro_angle(...)
	debug_print("获取陀螺仪角度:",...)
    return 1;
end

--获取陀螺仪角速度
function stubs.Get_gyro_speed(...)
	debug_print("获取陀螺仪角速度:",...)
    return 1;
end

--获取陀螺仪角速度
function stubs.Get_gyro_accel(...)
	debug_print("获取陀螺仪加速度:",...)
    return 1;
end

--关闭陀螺仪
function stubs.Dis_gyro(...)
	debug_print("关闭陀螺仪:",...)
end

--开启颜色传感
function stubs.En_color_sensor(...)
	debug_print("开启颜色传感器:",...)
end

--关闭颜色传感
function stubs.Dis_color_sensor(...)
	debug_print("关闭颜色传感器:",...)
end

--切换颜色传感
function stubs.Color_sensor_switch(...)
	debug_print("切换颜色传感器:",...)
end

--获取颜色传感数据
function stubs.Get_color_data(...)
	debug_print("Get颜色传感器结果:",...)
    return 1
end

--打开红外传感
function stubs.En_infrared_sensor(...)
	debug_print("开启红外传感器:",...)
end

--获取红外传感数据
function stubs.Get_infrared_data(...)
	debug_print("红外传感器检测距离:",...)
    return 1
end

--获取电机参数
function stubs.Get_motor_data(...)
	debug_print("获取电机的参数:",...)
    return 1
end

--获取系统时钟数值 单位秒(s)
function stubs.Get_time_ms(...)
    return os.clock() * 1000
end

--重置系统时钟
function stubs.Reset_time_ms(...)
	debug_print("重置系统毫秒计数:",...)
end



--led灯模式切换
function stubs.Led_mode_switch(...)
	debug_print("切换灯光模式:",...)
end

--led灯颜色切换
function stubs.Led_set_color(...)
	debug_print("切换灯光颜色:",...)
end

--led灯关闭
function stubs.Led_off(...)
	debug_print("关闭灯光:",...)
end





--所有驱动球状态
local _all_wheels_state = {

}


--直线运动(距离)
function stubs.Two_wheels_straight(s)
	debug_print("两轮直线运动:",s)
	_all_wheels_state[0] = 10
end

--直线运动(延迟时间)
function stubs.Two_wheels_straight_time(s,t)
	debug_print("两轮直线运动 时间:",s,t)
	_all_wheels_state[0] = t
end

--直线运动(定长)
function stubs.Two_wheels_straight_length(s,l)
	debug_print("两轮直线运动 距离:",s,l)
	_all_wheels_state[0] = l/s
end

--左轮转弯
function stubs.Two_wheels_turn_left(...)
	debug_print("两轮左转弯:",...)
	_all_wheels_state[0] = 2
end

--右轮转弯
function stubs.Two_wheels_turn_right(...)
	debug_print("两轮右转弯:",...)
	_all_wheels_state[0] = 2
end





function stubs.Two_wheels_vector(...)
	debug_print("两轮方向矢量控制:",...)
end

function stubs.Single_wheel_ctrl(no,s)
	debug_print("单轮运动控制:",no,s)
	_all_wheels_state[no] = 10
end
function stubs.Single_wheel_time(no,s,t)
	debug_print("单轮运动 时间:",no,s,t)
	_all_wheels_state[no] = t
end

function stubs.Single_wheel_length(no,s,l)
	debug_print("单轮运动 距离:",no,s,l)
	_all_wheels_state[no] = l/s
end



function stubs.Get_wheel_state(mode,no)
	if no == nil then no = 0 end
	local state = _all_wheels_state[no]
	if state == nil or state <= 0 then
		return 100
	end
	_all_wheels_state[no] = state - 1
	return 1
end




function stubs.All_motors_stop(...)
	debug_print("所有在线驱动轮停止:",...)
end

function stubs.Single_wheel_stop(...)
	debug_print("指定轮子停止:",...)
end
function stubs.Delay_ms(...)
	debug_print("等待毫秒:",...)
end
function stubs.System_yield()
	return 0
end

local tones = {
	[1] = "STARTUP音乐",
	[10] = "SHUTDOWN音乐",
	[100] = "WARNING音乐",

	[11] = "低音DO",
	[12] = "低音RE",
	[13] = "低音MI",
	[14] = "低音FA",
	[15] = "低音SO",
	[16] = "低音LA",
	[17] = "低音XI",

	[18] = "中音DO",
	[19] = "中音RE",
	[20] = "中音MI",
	[21] = "中音FA",
	[22] = "中音SO",
	[23] = "中音LA",
	[24] = "中音XI",

	[25] = "高音DO",
	[26] = "高音RE",
	[27] = "高音MI",
	[28] = "高音FA",
	[29] = "高音SO",
	[30] = "高音LA",
	[31] = "高音XI",

	[32] = "停止"
}
function stubs.Beep_play(x)
	debug_print("蜂鸣器播放: ", tones[x])
end

function stubs.Set_all_sensors_smp(...)
	debug_print('传感器采样率: ', ...)
end

function stubs.Reset_motor_pos(...)
	debug_print('重置传感位置: ', ...)
end

function stubs.Get_gyro_stability(...)
	debug_print('获取陀螺仪是否稳定: ', ...)
	return true
end

function stubs.Get_ble_remote_vector(...)
	debug_print('ble控制向量: ', ...)
	return 1
end

function stubs.Single_wheel_free(...)
	debug_print('单轮释放: ', ...)
end

return stubs
