--[[
��������:�Ѻ�

����:����->����->��һȦ


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

num0={   0,   0,    0,   0,    0,   0,    0,   0,    0,   0}

squat={   0,   0,    0,-200,  250, 280,    0,-200,  250, 280}	--����


xyz=200
abc=90

round1={   0,   0,    0, abc,    0,   0,    0,   0,    0, xyz}	--����
round2={   0,   0,  abc,-abc,    0,   0,    0,   0,  xyz,-xyz}	--����
round3={   0,   0,  abc,-abc,    0, abc,    0, xyz,  xyz,-xyz}	--����
round4={   0,   0,    0,   0,    0, abc,    0, xyz,    0,   0}	--����
round5={   0,   0,    0,   0,  abc,-abc,  xyz,-xyz,    0,   0}	--����
round6={   0,   0,    0, abc,  abc,-abc,  xyz,-xyz,    0, xyz}	--����


--�ȴ�1s
--�ָ�ԭ״
-- 1��̧����ǰצ
-- 2����ǰצ��ǰ������
-- 3���ָ����
-- 4��̧����ǰצ
-- 5����ǰצ��ǰ������
-- 6���ָ����

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
	tempTime=200
	action(round1,tempTime)
	action(round2,tempTime)
	action(round3,tempTime)
	action(round4,tempTime)
	action(round5,tempTime)
	action(round6,tempTime)
end


do
	--�ƹ�����
	Set_All_LED(1,1)
	action(squat,500)
	r_Delay(1500)
	action(num0,500)
	r_Delay(1000)
	test()
	test()
	test()
	Set_All_LED()
	Init_Angle()




end








