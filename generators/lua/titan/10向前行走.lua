--[[
动作名称:行走

简单行走:对角足同步行走


功能：	规范零位设置的方法
使用：	零位值给一个zeroParam的数组用来存放，这个值对应机械狗初始角度值
		控制舵机转动的时候只要传递正负值，会自动转变为向某个方向旋转，参考下面的内容
		其中头部舵机1，上为正
		头部舵机2，左为正
		左边舵机，后为正
		右边舵机，前为正


]]

--Set_Titan_Servo_Data(No,Time,Angle)
--Get_Titan_Servo_Data(No)
--Start_Titan_Servo()

--延时方法
function r_Delay(de_time)
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



globalTime=500
--			头     左前腿		左后腿     右前腿      右后腿

num1={   0,   0,    0, 200,    0,   0,    0,   0,    0, 200}	--行走
num2={   0,   0,  200,-200,    0,   0,    0,   0,  200,-200}	--行走
num3={   0,   0,  200,-200,    0, 200,    0, 200,  200,-200}	--行走

num4={   0,   0,    0,   0,    0, 200,    0, 200,    0,   0}	--行走
num5={   0,   0,    0,   0,  200,-200,  200,-200,    0,   0}	--行走
num6={   0,   0,    0, 200,  200,-200,  200,-200,    0, 200}	--行走

--num3={   0,   0, -110,-140,  150, 100, -150,-100,  140, 140}	--抖腿1
--num4={   0,   0,  150, 100, -130,-110,   90, 140, -150,-100}	--抖腿2

--等待1s
--恢复原状
-- 1、抬起左前爪
-- 2、左前爪向前挠两下
-- 3、恢复零点
-- 4、抬起右前爪
-- 5、右前爪向前挠两下
-- 6、恢复零点

--latetbl={0,0,0,0,0,0,0,0,0,0}

function Set_All_LED(color,mode)
	Led_set_color(2,color)
	Led_mode_switch(2,mode)
end

function Stop_All_LED()
	Led_off(2)
end

function Init_Angle()
	for i=1,10,1 do
		Set_Titan_Servo_Data(i,globalTime,0)	
	end
	Start_Titan_Servo()
	r_Delay(globalTime)	
	--latetbl={0,0,0,0,0,0,0,0,0,0}
end

function action(temptbl,datatime)
	local globalTime=datatime
	for i=1,10,1 do
		--if temptbl[i]~=latetbl[i] then
			Set_Titan_Servo_Data(i,globalTime,temptbl[i])
		--end
	end
	Start_Titan_Servo()
	r_Delay(globalTime)
	--latetbl=temptbl
end


function test()
	temptime=200
	action(num1,temptime)
	action(num2,temptime)
	action(num3,temptime)
	action(num4,temptime)
	action(num5,temptime)
	action(num6,temptime)
end


do
	--零位设置初始化
	Set_All_LED(1,1)
	test()
	test()
	test()
	Stop_All_LED()
	Init_Angle()
end







