--[[
��������:����

����:�۾������ƹ⣬����ǰ�����У�ͷ��̧������ҡ����ͬʱǰ��ҡ��

����˳��
	1���ƹⱬ��		--δʵ��
	2����ǰ��һ��
	3����ͷ�������۲��Ƴ���
	4����ֱ�߻������ߣ�ͬʱ�������


���ܣ�	�淶��λ���õķ���
ʹ�ã�	��λֵ��һ��zeroParam������������ţ����ֵ��Ӧ��е����ʼ�Ƕ�ֵ
		���ƶ��ת����ʱ��ֻҪ��������ֵ�����Զ�ת��Ϊ��ĳ��������ת���ο����������
		����ͷ�����1����Ϊ��
		ͷ�����2����Ϊ��
		��߶������Ϊ��
		�ұ߶����ǰΪ��


]]

--Set_Titan_Servo_Data(No,Time,Angle)
--Get_Titan_Servo_Data(No)
--Start_Titan_Servo()

--��ʱ����
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
--			ͷ     ��ǰ��		�����     ��ǰ��      �Һ���
num1={-100,   0, -300, 300, -100, 100, -300, 300, -100, 100}
num2={   0,   0,    0,   0,    0,   0,    0,   0,    0,   0}


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
	Set_All_LED(1,3)
	action(num1,500)
	r_Delay(200)
	action(num2,80)
	action(num1,200)
	action(num2,80)
	action(num1,200)
	action(num2,80)
	action(num1,200)
	action(num2,80)
	action(num1,200)
end

do
	test()
	Stop_All_LED()
	Init_Angle()
end







