--[[
动作名称:胆怯

1、灯光设置
2、低头
3、趴下 左右看
4、保持趴下1s
5、身体恢复原状


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
--			头     左前腿	  左后腿     右前腿      右后腿
num1={-300,   0,    0,   0,    0,   0,    0,   0,    0,   0}	--低头
num2={-300, 100,  280, 340,  280, 280,  280, 340,  280, 280}	--蹲下向左看
num3={-300,-100,  280, 340,  280, 280,  280, 340,  280, 280}	--蹲下向右看
num4={-300,   0,  280, 340,  280, 280,  280, 340,  280, 280}	--蹲下向前看
--等待1s
--恢复原状

--后退
xyz=210

act1={   0,   0,  xyz,-xyz,    0, xyz,    0, xyz,  xyz,-xyz}	--行走
act2={   0,   0,  xyz,-xyz,    0,   0,    0,   0,  xyz,-xyz}	--行走
act3={   0,   0,    0, xyz,    0,   0,    0,   0,    0, xyz}	--行走
act4={   0,   0,    0, xyz,  xyz,-xyz,  xyz,-xyz,    0, xyz}	--行走
act5={   0,   0,    0,   0,  xyz,-xyz,  xyz,-xyz,    0,   0}	--行走
act6={   0,   0,    0,   0,    0, xyz,    0, xyz,    0,   0}	--行走


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

function houtui()
	action(act1,800)
	action(act2,800)
	action(act3,800)
	action(act4,800)
	action(act5,800)
	action(act6,800)
end

function test()
	--灯光设置
	action(num1,500)
	r_Delay(500)
	action(num2,1000)
	r_Delay(500)
	action(num3,500)
	r_Delay(500)
	action(num4,500)
	r_Delay(1500)
end

do
	Set_All_LED(1,1)
	r_Delay(2000)
	houtui()
	Set_All_LED(1,2)
	test()
	Stop_All_LED()
	Init_Angle()
end



