--[[
动作名称：xxxx

描述：xxxx

动作顺序：（用于整理看情况）

]]

--Set_Titan_Servo_Data(No,Time,Angle)
--Get_Titan_Servo_Data(No)
--Start_Titan_Servo()

--Led_set_color(No,Color)
--Led_mode_switch(No,Mode)
--Led_off(No)

--延时方法
function r_Delay(de_time)
	local quit_flag=0
	local startTime=Get_time_ms()
	local nowTime=statTime
	while nowtime-startTime<de_time do
		quit_flag=System_yield()
		if quit_flag==1 then
			return 1
		end
		nowTime=Get_time_ms()
	end
	return 0
end

globalTime=500

num0={0,0,0,0,0,0,0,0,0,0}

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
end

function action(temptbl,datatime)
	for i=1,10,1 do
		Set_Titan_Servo_Data(i,datatime,temptbl[i])
	end
	Start_Titan_Servo()
	r_Delay(datatime)	
end

function test()
	action(num0,500)	
end

do
	test()
	Init_Angle()
end










