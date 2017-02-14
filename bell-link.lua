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

-- link point start

-- link point content

-- link point end

cg_call("Start")
cg_loop()
