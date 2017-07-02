--[[ 用于本地测试lua脚本执行情况 add by tiny
local stubs = require('stubs_api')
local En_color_sensor = stubs.En_color_sensor
local Dis_color_sensor = stubs.Dis_color_sensor
local Get_color_data = stubs.Get_color_data
local En_gyro = stubs.En_gyro
local Dis_gyro = stubs.Dis_gyro
local Reset_gyro = stubs.Reset_gyro
local Get_gyro_angle = stubs.Get_gyro_angle
local Get_gyro_speed = stubs.Get_gyro_speed
local Get_gyro_accel = stubs.Get_gyro_accel
local Dis_gyro = stubs.Dis_gyro
local En_color_sensor = stubs.En_color_sensor
local Dis_color_sensor = stubs.Dis_color_sensor
local Color_sensor_switch = stubs.Color_sensor_switch
local Get_color_data = stubs.Get_color_data
local En_infrared_sensor = stubs.En_infrared_sensor
local Get_infrared_data = stubs.Get_infrared_data
local Get_motor_data = stubs.Get_motor_data
local Get_time_ms = stubs.Get_time_ms
local Reset_time_ms = stubs.Reset_time_ms
local Led_mode_switch = stubs.Led_mode_switch
local Led_set_color = stubs.Led_set_color
local Led_off = stubs.Led_off
local Two_wheels_straight = stubs.Two_wheels_straight
local Two_wheels_straight_time = stubs.Two_wheels_straight_time
local Two_wheels_straight_length = stubs.Two_wheels_straight_length
local Two_wheels_turn_left = stubs.Two_wheels_turn_left
local Two_wheels_turn_right = stubs.Two_wheels_turn_right
local Two_wheels_vector = stubs.Two_wheels_vector
local Single_wheel_ctrl = stubs.Single_wheel_ctrl
local Single_wheel_time = stubs.Single_wheel_time
local Single_wheel_length = stubs.Single_wheel_length
local Get_wheel_state = stubs.Get_wheel_state
local All_motors_stop = stubs.All_motors_stop
local Single_wheel_stop = stubs.Single_wheel_stop
local Delay_ms = stubs.Delay_ms
local System_yield = stubs.System_yield
--]]

-- merge form _coroutine_group.lua

local _cg_func_tab  = {}-- all functions:{name={[function],[function],...}}
local _cg_co_list  = {}-- all coroutines:{[coroutine],[coroutine],...}
local _cg_co_list_count = 0
local _cg_co_queued  = {}-- queued coroutines:{[coroutine],[coroutine],...}
local _cg_co_returned = false

-- system help functions
local _cg_sys_coroutine_resume = coroutine.resume
local _cg_sys_coroutine_status = coroutine.status
local _cg_sys_coroutine_yield = coroutine.yield


function cg_def(name,func)
local list = _cg_func_tab[name]
  if list == nil then
    list = {}
    _cg_func_tab[name] = list
  end
  table.insert(list,function()
    func()
    _cg_co_returned = true
  end)
end

local function cg_call(name,...)
  local list = _cg_func_tab[name]
  if _cg_co_queued == nil then
    _cg_co_queued = {}
  end
  --=-print("cg_call:"..name..">"..#list)
  for _, func in ipairs(list) do
    local co = coroutine.create(func)
    local r,msg = _cg_sys_coroutine_resume(co,...)
    if _cg_sys_coroutine_status (co) == "dead" then
      if r == false then
        print("coroutine fail :"..msg)
      end
      --=-print("coroutine returned!")
    else
      table.insert(_cg_co_queued,co)
    end
  end
end


local function cg_loop_frame()
  if _cg_co_queued ~=nil then
    for _, co in ipairs(_cg_co_queued) do
      table.insert(_cg_co_list,co)
      _cg_co_list_count = _cg_co_list_count+1
    end
    _cg_co_queued = nil
  end
  local i = 1
  while i<=_cg_co_list_count do
    local co = _cg_co_list[i]
    _cg_co_returned = false
    local r,msg = _cg_sys_coroutine_resume(co)
    if _cg_co_returned == true then
      if r == false then
        print("coroutine fail :"..msg)
      end
      table.remove(_cg_co_list,i)
      _cg_co_list_count = _cg_co_list_count-1
    else
      i = i+1
    end
  end
end

exit = false -- 协程里可以通过该标记，退出程序
--[[
  added by tiny
  退出lua执行有三种情况：

  1. System_yield()判断主程序中标记退出，例如app发送退出lua执行指令
  2. lua脚本生成时在对应的协程中将lua flag ‘exit’置为true(这个目前不推荐使用，正常流程，用户不可触)
  3. 协程中没有执行的函数时，自动退出 @see cg_loop()中的quit_flag
--]]
local function cg_loop()

  local quit_flag = 0
  repeat
    cg_loop_frame()
    quit_flag = System_yield()
  until _cg_co_list_count==0 or quit_flag == 1 or exit
end

local mg_yield = _cg_sys_coroutine_yield


local function Get_time_s()
  return Get_time_ms()/1000.0
end
--为了避免协程堵塞，这里使用循环Delay和Yield
local function r_Delay(time_s)
  local time_ms = time_s *1000 - 1
  if(time_ms <1) then
    time_ms = 1
  end
  local startTime = Get_time_ms()
  local nowtime = startTime
  while nowtime - startTime < time_ms do
    mg_yield()
    nowtime = Get_time_ms()
  end
end

local function r_wait_for(func)
  while func()==false do
    mg_yield()
  end
end

local function _wait_for_wheels(no)
  while Get_wheel_state(1,no) ~= 100 do
    r_Delay(0.5)
  end
end

local function r_wait_for_key1()
  while Get_key1_data()~=1 do
    mg_yield()
  end
end
local function r_wait_for_key2()
  while Get_key2_data()~=1 do
    mg_yield()
  end
end
local function r_wait_for_long_key(code)
  local enter_time = 0
  while enter_time > 1000 do
    if Get_key_data()==code then
      enter_time = enter_time + 1
    else
      enter_time = 0
    end
    mg_yield()
  end
end
--titan apis start
--common
local function tt_r_Delay(de_time)
	local quit_flag = 0
	local startTime = Get_time_ms()
    local nowtime = startTime
    while nowtime - startTime < de_time
    do
   		quit_flag = System_yield()
   		if quit_flag == 1 then
   			return 1
   		end
        nowtime = Get_time_ms()
    end
    return 0
end
--01
tt_1_globalTime=500
tt_1_num1={-200,   0, -300, 300,    0,   50, -300, 300,    0,  50}
tt_1_num2={-200,-200, -300, 300,    0,   50, -300, 300,    0,  50}
tt_1_num3={-200, 200, -300, 300,    0,   50, -300, 300,    0,  50}
tt_1_num4={-200,   0, -300, 300,    0,   50, -300, 300,    0,  50}
tt_1_num5={   0,   0,    0,   0,    0,   0,    0,   0,    0,   0}
tt_1_num6={   0,   0,    0, 210,    0,   0,    0,   0,    0, 210}
tt_1_num7={   0,   0,  210,-210,    0,   0,    0,   0,  210,-210}
tt_1_num8={   0,   0,  210,-210,    0, 210,    0, 210,  210,-210}
tt_1_num9={   0,   0,    0,   0,    0, 210,    0, 210,    0,   0}
tt_1_num10={   0,   0,    0,   0,  210,-210,  210,-210,    0,   0}
tt_1_num11={   0,   0,    0, 210,  210,-210,  210,-210,    0, 210}
tt_1_num12={   0,   0,    0,   0,    0,   0,    0,   0,    0,   0}
function tt_1_Set_All_LED(color,mode)
	Led_set_color(2,color)
	Led_mode_switch(2,mode)
end

function tt_1_Stop_All_LED()
	Led_off(2)
end

function tt_1_Init_Angle()
	for i=1,10,1 do
		Set_Titan_Servo_Data(i,tt_1_globalTime,0)
	end
	Start_Titan_Servo()
	tt_r_Delay(tt_1_globalTime)
	--latetbl={0,0,0,0,0,0,0,0,0,0}
end

function tt_1_action(temptbl,datatime)
	local globalTime=datatime
	for i=1,10,1 do
		--if temptbl[i]~=latetbl[i] then
			Set_Titan_Servo_Data(i,globalTime,temptbl[i])
		--end
	end
	Start_Titan_Servo()
	tt_r_Delay(globalTime)
	--latetbl=temptbl
end

function tt_1_test(tempTime)
	tt_1_action(tt_1_num1,tempTime)
	tt_1_action(tt_1_num2,tempTime)
	tt_1_action(tt_1_num3,tempTime)
	tt_1_action(tt_1_num2,tempTime)
	tt_1_action(tt_1_num3,tempTime)
	tt_r_Delay(1000)
	tt_1_action(tt_1_num4,tempTime)
	tt_1_action(tt_1_num5,tempTime)
	tt_r_Delay(1000)
	tt_1_action(tt_1_num6,tempTime)
	tt_1_action(tt_1_num7,tempTime)
	tt_1_action(tt_1_num8,tempTime)
	tt_1_action(tt_1_num9,tempTime)
	tt_1_action(tt_1_num10,tempTime)
	tt_1_action(tt_1_num11,tempTime)
	tt_1_action(tt_1_num12,tempTime)
end

function tt_1_run()
  do
  	tt_1_Set_All_LED(1,3)
  	tt_1_test(500)
  	tt_1_test(500)
  	tt_1_test(500)
  	tt_1_Stop_All_LED()
  	tt_1_Init_Angle()
  end
end
--02
tt_2_globalTime=500
tt_2_num1={-200,   0,    0,-200,  280, 280,    0,-200,  280, 280}
tt_2_num2={   0,   0,    0,   0,    0,   0,    0,   0,    0,   0}

tt_2_xyz=210

tt_2_num3={   0, 200,    0, tt_2_xyz,    0,   0,    0,   0,    0, tt_2_xyz}
tt_2_num4={   0,   0,  tt_2_xyz,-tt_2_xyz,    0,   0,    0,   0,  tt_2_xyz,-tt_2_xyz}
tt_2_num5={   0,-200,  tt_2_xyz,-tt_2_xyz,    0, tt_2_xyz,    0, tt_2_xyz,  tt_2_xyz,-tt_2_xyz}

tt_2_num6={   0,   0,    0,   0,    0, tt_2_xyz,    0, tt_2_xyz,    0,   0}
tt_2_num7={   0, 200,    0,   0,  tt_2_xyz,-tt_2_xyz,  tt_2_xyz,-tt_2_xyz,    0,   0}
tt_2_num8={   0,-200,    0, tt_2_xyz,  tt_2_xyz,-tt_2_xyz,  tt_2_xyz,-tt_2_xyz,    0, tt_2_xyz}

tt_2_num9={0,0,0,0,0,0,0,0,0,0}
function tt_2_Set_All_LED(color,mode)
	Led_set_color(2,color)
	Led_mode_switch(2,mode)
end

function tt_2_Stop_All_LED()
	Led_off(2)
end

function tt_2_Init_Angle()
	for i=1,10,1 do
		Set_Titan_Servo_Data(i,tt_2_globalTime,0)
	end
	Start_Titan_Servo()
	tt_r_Delay(tt_2_globalTime)
end

function tt_2_action(temptbl,datatime)
	local globalTime=datatime
	for i=1,10,1 do
			Set_Titan_Servo_Data(i,globalTime,temptbl[i])
	end
	Start_Titan_Servo()
	tt_r_Delay(globalTime)
end

function tt_2_test()
	tt_2_action(tt_2_num1,1000)
	tt_r_Delay(2000)
	tt_2_Set_All_LED(1,1)
	tt_2_action(tt_2_num2,500)
	tt_r_Delay(2000)
	tt_2_action(tt_2_num3,1000)
	tt_2_action(tt_2_num4,1000)
	tt_2_action(tt_2_num5,1000)
	tt_2_action(tt_2_num6,1000)
	tt_2_action(tt_2_num7,1000)
	tt_2_action(tt_2_num8,1000)
	tt_2_action(tt_2_num9,1000)
end

function tt_2_run()
  do
  	tt_2_test()
  	tt_2_test()
  	tt_2_test()
  	tt_2_Stop_All_LED()
  	tt_2_Init_Angle()
  end
end

--03
tt_3_globalTime=500
tt_3_num1={   0,   0, -350, 350,    0,   0, -350, 350,    0,   0}
tt_3_num2={   0,   0, -350, 350,    0,   0, -350,-200,    0,-550}
tt_3_num3={   0,   0, -350, 350,    0,   0, -350,-200, -600, 250}
function tt_3_Set_All_LED(color,mode)
	Led_set_color(2,color)
	Led_mode_switch(2,mode)
end

function tt_3_Stop_All_LED()
	Led_off(2)
end

function tt_3_Init_Angle()
	for i=1,10,1 do
		Set_Titan_Servo_Data(i,tt_3_globalTime,0)
	end
	Start_Titan_Servo()
	tt_r_Delay(tt_3_globalTime)
	--latetbl={0,0,0,0,0,0,0,0,0,0}
end

function tt_3_action(temptbl,datatime)
	local globalTime=datatime
	for i=1,10,1 do
		--if temptbl[i]~=latetbl[i] then
			Set_Titan_Servo_Data(i,globalTime,temptbl[i])
		--end
	end
	Start_Titan_Servo()
	tt_r_Delay(globalTime)
	--latetbl=temptbl
end

function tt_3_test()
	tt_3_action(tt_3_num1,500)
	tt_r_Delay(500)
	tt_3_action(tt_3_num2,500)
	tt_r_Delay(500)
	tt_3_Set_All_LED(1,2)
	tt_3_action(tt_3_num3,500)
	tt_r_Delay(3000)
end

function tt_3_run()
  do
  	tt_3_Set_All_LED(1,1)
  	tt_3_test()
  	tt_3_Stop_All_LED()
  	tt_3_Init_Angle()
  end
end

--04
local tt_4_globalTime = 500
local tt_4_num1 = {-100,   0, -300, 300, -100, 100, -300, 300, -100, 100}
local tt_4_num2 = {   0,   0,    0,   0,    0,   0,    0,   0,    0,   0}
function tt_4_Set_All_LED(color,mode)
	Led_set_color(2,color)
	Led_mode_switch(2,mode)
end

function tt_4_Stop_All_LED()
	Led_off(2)
end

function tt_4_Init_Angle()
	for i=1,10,1 do
		Set_Titan_Servo_Data(i,tt_4_globalTime,0)
	end
	Start_Titan_Servo()
	tt_r_Delay(tt_4_globalTime)
	--latetbl={0,0,0,0,0,0,0,0,0,0}
end

function tt_4_action(temptbl,datatime)
	local globalTime=datatime
	for i=1,10,1 do
		--if temptbl[i]~=latetbl[i] then
			Set_Titan_Servo_Data(i,globalTime,temptbl[i])
		--end
	end
	Start_Titan_Servo()
	tt_r_Delay(globalTime)
	--latetbl=temptbl
end

function tt_4_test()
	tt_4_Set_All_LED(1,3)
	tt_4_action(tt_4_num1,500)
	tt_r_Delay(200)
	tt_4_action(tt_4_num2,80)
	tt_4_action(tt_4_num1,200)
	tt_4_action(tt_4_num2,80)
	tt_4_action(tt_4_num1,200)
	tt_4_action(tt_4_num2,80)
	tt_4_action(tt_4_num1,200)
	tt_4_action(tt_4_num2,80)
	tt_4_action(tt_4_num1,200)
end

function tt_4_run()
  do
  	tt_4_test()
  	tt_4_Stop_All_LED()
  	tt_4_Init_Angle()
  end
end
--05
tt_5_globalTime=500
tt_5_num1={-300,   0,    0,   0,    0,   0,    0,   0,    0,   0}
tt_5_num2={-300, 100,  280, 340,  280, 280,  280, 340,  280, 280}
tt_5_num3={-300,-100,  280, 340,  280, 280,  280, 340,  280, 280}
tt_5_num4={-300,   0,  280, 340,  280, 280,  280, 340,  280, 280}

tt_5_xyz=210

tt_5_act1={   0,   0,  tt_5_xyz,-tt_5_xyz,    0, tt_5_xyz,    0, tt_5_xyz,  tt_5_xyz,-tt_5_xyz}
tt_5_act2={   0,   0,  tt_5_xyz,-tt_5_xyz,    0,   0,    0,   0,  tt_5_xyz,-tt_5_xyz}
tt_5_act3={   0,   0,    0, tt_5_xyz,    0,   0,    0,   0,    0, tt_5_xyz}
tt_5_act4={   0,   0,    0, tt_5_xyz,  tt_5_xyz,-tt_5_xyz,  tt_5_xyz,-tt_5_xyz,    0, tt_5_xyz}
tt_5_act5={   0,   0,    0,   0,  tt_5_xyz,-tt_5_xyz,  tt_5_xyz,-tt_5_xyz,    0,   0}
tt_5_act6={   0,   0,    0,   0,    0, tt_5_xyz,    0, tt_5_xyz,    0,   0}
function tt_5_Set_All_LED(color,mode)
	Led_set_color(2,color)
	Led_mode_switch(2,mode)
end

function tt_5_Stop_All_LED()
	Led_off(2)
end

function tt_5_Init_Angle()
	for i=1,10,1 do
		Set_Titan_Servo_Data(i,tt_5_globalTime,0)
	end
	Start_Titan_Servo()
	tt_r_Delay(tt_5_globalTime)
end

function tt_5_action(temptbl,datatime)
	local globalTime=datatime
	for i=1,10,1 do
		--if temptbl[i]~=latetbl[i] then
			Set_Titan_Servo_Data(i,globalTime,temptbl[i])
		--end
	end
	Start_Titan_Servo()
	tt_r_Delay(globalTime)
	--latetbl=temptbl
end

function tt_5_houtui()
	tt_5_action(tt_5_act1,800)
	tt_5_action(tt_5_act2,800)
	tt_5_action(tt_5_act3,800)
	tt_5_action(tt_5_act4,800)
	tt_5_action(tt_5_act5,800)
	tt_5_action(tt_5_act6,800)
end

function tt_5_test()
	tt_5_action(tt_5_num1,500)
	tt_r_Delay(500)
	tt_5_action(tt_5_num2,1000)
	tt_r_Delay(500)
	tt_5_action(tt_5_num3,500)
	tt_r_Delay(500)
	tt_5_action(tt_5_num4,500)
	tt_r_Delay(1500)
end

function tt_5_run()
  do
  	tt_5_Set_All_LED(1,1)
  	tt_r_Delay(2000)
  	tt_5_houtui()
  	tt_5_Set_All_LED(1,2)
  	tt_5_test()
  	tt_5_Stop_All_LED()
  	tt_5_Init_Angle()
  end
end
--06
tt_6_globalTime=500
tt_6_xyz=210
tt_6_num1={   0,   0, -tt_6_xyz, tt_6_xyz, -tt_6_xyz, tt_6_xyz,    0,   0,    0,   0}
tt_6_num2={   0,   0,    0,   0,    0,   0, -tt_6_xyz, tt_6_xyz, -tt_6_xyz, tt_6_xyz}
tt_6_num3={   0,   0, -tt_6_xyz, tt_6_xyz, -tt_6_xyz, tt_6_xyz,    0,   0,    0,   0}
tt_6_num4={   0,   0,    0,   0,    0,   0, -tt_6_xyz, tt_6_xyz, -tt_6_xyz, tt_6_xyz}
tt_6_num5={   0,   0, -tt_6_xyz, tt_6_xyz, -tt_6_xyz, tt_6_xyz,    0,   0,    0,   0}
tt_6_num6={   0,   0,    0,   0,    0,   0, -tt_6_xyz, tt_6_xyz, -tt_6_xyz, tt_6_xyz}
tt_6_num7={   0,   0, -tt_6_xyz, tt_6_xyz, -tt_6_xyz, tt_6_xyz,    0,   0,    0,   0}
tt_6_num8={   0,   0,    0,   0,    0,   0, -tt_6_xyz, tt_6_xyz, -tt_6_xyz, tt_6_xyz}
function tt_6_Set_All_LED(color,mode)
	Led_set_color(2,color)
	Led_mode_switch(2,mode)
end

function tt_6_Stop_All_LED()
	Led_off(2)
end

function tt_6_Init_Angle()
	for i=1,10,1 do
		Set_Titan_Servo_Data(i,tt_6_globalTime,0)
	end
	Start_Titan_Servo()
	tt_r_Delay(tt_6_globalTime)
	--latetbl={0,0,0,0,0,0,0,0,0,0}
end

function tt_6_action(temptbl,datatime)
	local globalTime=datatime
	for i=1,10,1 do
		--if temptbl[i]~=latetbl[i] then
			Set_Titan_Servo_Data(i,globalTime,temptbl[i])
		--end
	end
	Start_Titan_Servo()
	tt_r_Delay(globalTime)
	--latetbl=temptbl
end

function tt_6_test()
	tempTime=100
	tt_6_action(tt_6_num1,tempTime)
	tt_6_action(tt_6_num2,tempTime)
	tt_6_action(tt_6_num1,tempTime)
	tt_6_action(tt_6_num2,tempTime)
	tt_6_action(tt_6_num1,tempTime)
	tt_6_action(tt_6_num2,tempTime)
end

function tt_6_run()
  do
  	tt_6_Set_All_LED(1,1)
  	tt_6_test()
  	tt_6_Stop_All_LED()
  	tt_6_Init_Angle()
  end
end
--07
tt_7_globalTime=500
tt_7_num0={   0,   0,    0,   0,    0,   0,    0,   0,    0,   0}

tt_7_squat={   0,   0,    0,-200,  250, 280,    0,-200,  250, 280}	--����


tt_7_xyz=200
tt_7_abc=90

tt_7_round1={   0,   0,    0, tt_7_abc,    0,   0,    0,   0,    0, tt_7_xyz}	--����
tt_7_round2={   0,   0,  tt_7_abc,-tt_7_abc,    0,   0,    0,   0,  tt_7_xyz,-tt_7_xyz}	--����
tt_7_round3={   0,   0,  tt_7_abc,-tt_7_abc,    0, tt_7_abc,    0, tt_7_xyz,  tt_7_xyz,-tt_7_xyz}	--����
tt_7_round4={   0,   0,    0,   0,    0, tt_7_abc,    0, tt_7_xyz,    0,   0}	--����
tt_7_round5={   0,   0,    0,   0,  tt_7_abc,-tt_7_abc,  tt_7_xyz,-tt_7_xyz,    0,   0}	--����
tt_7_round6={   0,   0,    0, tt_7_abc,  tt_7_abc,-tt_7_abc,  tt_7_xyz,-tt_7_xyz,    0, tt_7_xyz}	--����
function tt_7_Set_All_LED(color,mode)
	Led_set_color(2,color)
	Led_mode_switch(2,mode)
end

function tt_7_Stop_All_LED()
	Led_off(2)
end

function tt_7_Init_Angle()
	for i=1,10,1 do
		Set_Titan_Servo_Data(i,tt_7_globalTime,0)
	end
	Start_Titan_Servo()
	tt_r_Delay(tt_7_globalTime)
	--latetbl={0,0,0,0,0,0,0,0,0,0}
end

function tt_7_action(temptbl,datatime)
	local globalTime=datatime
	for i=1,10,1 do
		--if temptbl[i]~=latetbl[i] then
			Set_Titan_Servo_Data(i,globalTime,temptbl[i])
		--end
	end
	Start_Titan_Servo()
	tt_r_Delay(globalTime)
	--latetbl=temptbl
end


function tt_7_test()
	tempTime=200
	tt_7_action(tt_7_round1,tempTime)
	tt_7_action(tt_7_round2,tempTime)
	tt_7_action(tt_7_round3,tempTime)
	tt_7_action(tt_7_round4,tempTime)
	tt_7_action(tt_7_round5,tempTime)
	tt_7_action(tt_7_round6,tempTime)
end

function tt_7_run()
  do
  	tt_7_Set_All_LED(1,1)
  	tt_7_action(tt_7_squat,500)
  	tt_r_Delay(1500)
  	tt_7_action(tt_7_num0,500)
  	tt_r_Delay(1000)
  	tt_7_test()
  	tt_7_test()
  	tt_7_test()
  	tt_7_Set_All_LED()
  	tt_7_Init_Angle()
  end
end
--08
tt_8_globalTime=500
--			ͷ     ��ǰ��		����     ��ǰ��      �Һ���
tt_8_num0={   0,   0,    0,-200,  280, 280,    0,-200,  280, 280}	--������

tt_8_num1={   0,   0,  150, 200,  280, 280,    0,-200,  280, 280}	--̧����ǰצ
tt_8_num2={   0,   0,  220, 350,  280, 280,    0,-200,  280, 280}	--����������
tt_8_num3={   0,   0,    0,-200,  280, 280,  150, 200,  280, 280}	--�������ҿ�
tt_8_num4={   0,   0,    0,-200,  280, 280,  220, 350,  280, 280}	--������ǰ��
function tt_8_Set_All_LED(color,mode)
	Led_set_color(2,color)
	Led_mode_switch(2,mode)
end

function tt_8_Stop_All_LED()
	Led_off(2)
end

function tt_8_Init_Angle()
	for i=1,10,1 do
		Set_Titan_Servo_Data(i,tt_8_globalTime,0)
	end
	Start_Titan_Servo()
	tt_r_Delay(tt_8_globalTime)
	--latetbl={0,0,0,0,0,0,0,0,0,0}
end

function tt_8_action(temptbl,datatime)
	local globalTime=datatime
	for i=1,10,1 do
		--if temptbl[i]~=latetbl[i] then
			Set_Titan_Servo_Data(i,globalTime,temptbl[i])
		--end
	end
	Start_Titan_Servo()
	tt_r_Delay(globalTime)
	--latetbl=temptbl
end


function tt_8_test1()
	--����
	tt_8_action(tt_8_num0,500)
	tt_r_Delay(500)

	--̧����ǰצ
	tt_8_action(tt_8_num1,500)
	--��ǰצ��ǰ������
	tt_8_action(tt_8_num2,500)
	tt_8_action(tt_8_num1,500)
	tt_8_action(tt_8_num2,500)
	tt_8_action(tt_8_num1,500)
	tt_r_Delay(500)
end

function tt_8_test2()
	--����
	tt_8_action(tt_8_num0,500)
	tt_r_Delay(500)

	--̧����ǰצ
	tt_8_action(tt_8_num3,500)
	tt_r_Delay(500)
	--��ǰצ��ǰ������
	tt_8_action(tt_8_num4,500)
	tt_8_action(tt_8_num3,500)
	tt_8_action(tt_8_num4,500)
	tt_8_action(tt_8_num3,500)
	tt_r_Delay(500)
end

function tt_8_run()
  do
  	--��λ���ó�ʼ��
  	tt_8_Set_All_LED(1,1)
  	tt_8_test1()
  	tt_8_test2()
  	--����
  	tt_8_action(tt_8_num0,500)
  	tt_r_Delay(500)
  	tt_8_Stop_All_LED()
  	tt_8_Init_Angle()
  end
end
--09
tt_9_globalTime=500
--			ͷ     ��ǰ��		������     ��ǰ��      �Һ���
tt_9_num1={   0,   0, -450,-700, -450,-700,    0,   0,    0,   0}	--�෭
tt_9_num2={   0,   0,    0,   0,    0,   0,    0,   0,    0,   0}	--�ظ�����
tt_9_num3={   0,   0,  110, 140, -150,-100, -150,-100,  140, 140}	--����1
tt_9_num4={   0,   0, -150,-100,  130, 110,   90, 140, -150,-100}	--����2
function tt_9_Set_All_LED(color,mode)
	Led_set_color(2,color)
	Led_mode_switch(2,mode)
end

function tt_9_Stop_All_LED()
	Led_off(2)
end

function tt_9_Init_Angle()
	for i=1,10,1 do
		Set_Titan_Servo_Data(i,tt_9_globalTime,0)
	end
	Start_Titan_Servo()
	tt_r_Delay(tt_9_globalTime)
	--latetbl={0,0,0,0,0,0,0,0,0,0}
end

function tt_9_action(temptbl,datatime)
	local globalTime=datatime
	for i=1,10,1 do
		--if temptbl[i]~=latetbl[i] then
			Set_Titan_Servo_Data(i,globalTime,temptbl[i])
		--end
	end
	Start_Titan_Servo()
	tt_r_Delay(globalTime)
	--latetbl=temptbl
end

function tt_9_test()
	tt_9_action(tt_9_num1,500)
	tt_r_Delay(500)
	tt_9_Set_All_LED(1,3)
	tt_9_action(tt_9_num2,500)
	tt_9_action(tt_9_num3,100)
	tt_9_action(tt_9_num4,100)
	tt_9_action(tt_9_num3,100)
	tt_9_action(tt_9_num4,100)
end

function tt_9_run()
  do
  	--��λ���ó�ʼ��
  	tt_9_Set_All_LED(1,1)
  	tt_9_test()
  	tt_9_Stop_All_LED()
  	tt_9_Init_Angle()
  end
end
--10
tt_10_globalTime=500
tt_10_num1={   0,   0,    0, 200,    0,   0,    0,   0,    0, 200}
tt_10_num2={   0,   0,  200,-200,    0,   0,    0,   0,  200,-200}
tt_10_num3={   0,   0,  200,-200,    0, 200,    0, 200,  200,-200}

tt_10_num4={   0,   0,    0,   0,    0, 200,    0, 200,    0,   0}
tt_10_num5={   0,   0,    0,   0,  200,-200,  200,-200,    0,   0}
tt_10_num6={   0,   0,    0, 200,  200,-200,  200,-200,    0, 200}
function tt_10_Set_All_LED(color,mode)
	Led_set_color(2,color)
	Led_mode_switch(2,mode)
end

function tt_10_Stop_All_LED()
	Led_off(2)
end

function tt_10_Init_Angle()
	for i=1,10,1 do
		Set_Titan_Servo_Data(i,tt_10_globalTime,0)
	end
	Start_Titan_Servo()
	tt_r_Delay(tt_10_globalTime)
	--latetbl={0,0,0,0,0,0,0,0,0,0}
end

function tt_10_action(temptbl,datatime)
	local globalTime=datatime
	for i=1,10,1 do
		--if temptbl[i]~=latetbl[i] then
			Set_Titan_Servo_Data(i,globalTime,temptbl[i])
		--end
	end
	Start_Titan_Servo()
	tt_r_Delay(globalTime)
	--latetbl=temptbl
end


function tt_10_test()
	temptime=200
	tt_10_action(tt_10_num1,temptime)
	tt_10_action(tt_10_num2,temptime)
	tt_10_action(tt_10_num3,temptime)
	tt_10_action(tt_10_num4,temptime)
	tt_10_action(tt_10_num5,temptime)
	tt_10_action(tt_10_num6,temptime)
end


function tt_10_run()
  do
  	tt_10_Set_All_LED(1,1)
  	tt_10_test()
  	tt_10_test()
  	tt_10_test()
  	tt_10_Stop_All_LED()
  	tt_10_Init_Angle()
  end
end
--titan apis end

-- link point start

-- link point content

-- link point end

cg_call("Start")
cg_loop()
