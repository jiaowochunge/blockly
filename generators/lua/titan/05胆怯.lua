--[[
��������:����

1���ƹ�����
2����ͷ
3��ſ�� ���ҿ�
4������ſ��1s
5������ָ�ԭ״


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
--			ͷ     ��ǰ��	  �����     ��ǰ��      �Һ���
num1={-300,   0,    0,   0,    0,   0,    0,   0,    0,   0}	--��ͷ
num2={-300, 100,  280, 340,  280, 280,  280, 340,  280, 280}	--��������
num3={-300,-100,  280, 340,  280, 280,  280, 340,  280, 280}	--�������ҿ�
num4={-300,   0,  280, 340,  280, 280,  280, 340,  280, 280}	--������ǰ��
--�ȴ�1s
--�ָ�ԭ״

--����
xyz=210

act1={   0,   0,  xyz,-xyz,    0, xyz,    0, xyz,  xyz,-xyz}	--����
act2={   0,   0,  xyz,-xyz,    0,   0,    0,   0,  xyz,-xyz}	--����
act3={   0,   0,    0, xyz,    0,   0,    0,   0,    0, xyz}	--����
act4={   0,   0,    0, xyz,  xyz,-xyz,  xyz,-xyz,    0, xyz}	--����
act5={   0,   0,    0,   0,  xyz,-xyz,  xyz,-xyz,    0,   0}	--����
act6={   0,   0,    0,   0,    0, xyz,    0, xyz,    0,   0}	--����


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
	--�ƹ�����
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



