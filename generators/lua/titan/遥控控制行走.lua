
zero={0,0,0,0,0,0,0,0,0}

walk1=210
walk2=210

forward1={   0,   0,    0, walk1,    0,     0,    0,     0,    0, walk2}
forward2={   0,   0,walk1,-walk1,    0,     0,    0,     0,walk2,-walk2}
forward3={   0,   0,walk1,-walk1,    0, walk1,    0, walk2,walk2,-walk2}
forward4={   0,   0,    0,     0,    0, walk1,    0, walk2,    0,     0}
forward5={   0,   0,    0,     0,walk1,-walk1,walk2,-walk2,    0,     0}
forward6={   0,   0,    0, walk1,walk1,-walk1,walk2,-walk2,    0, walk2}


backoff1={   0,   0,walk1,-walk1,    0, walk1,    0, walk2,walk2,-walk2}
backoff2={   0,   0,walk1,-walk1,    0,     0,    0,     0,walk2,-walk2}
backoff3={   0,   0,    0, walk1,    0,     0,    0,     0,    0, walk2}
backoff4={   0,   0,    0, walk1,walk1,-walk1,walk2,-walk2,    0, walk2}
backoff5={   0,   0,    0,     0,walk1,-walk1,walk1,-walk2,    0,     0}
backoff6={   0,   0,    0,     0,    0, walk1,    0, walk2,    0,     0}

l_walk1={   0,   0,   0, 100,   0,   0,   0,   0,   0, 210}
l_walk2={   0,   0, 100,-100,   0,   0,   0,   0, 210,-210}
l_walk3={   0,   0, 100,-100,   0, 100,   0, 210, 210,-210}
l_walk4={   0,   0,   0,   0,   0, 100,   0, 210,   0,   0}
l_walk5={   0,   0,   0,   0, 100,-100, 210,-210,   0,   0}
l_walk6={   0,   0,   0, 100, 100,-100, 210,-210,   0, 210}

r_walk1={   0,   0,   0, 210,   0,   0,   0,   0,   0, 100}
r_walk2={   0,   0, 210,-210,   0,   0,   0,   0, 100,-100}
r_walk3={   0,   0, 210,-210,   0, 210,   0, 100, 100,-100}
r_walk4={   0,   0,   0,   0,   0, 210,   0, 100,   0,   0}
r_walk5={   0,   0,   0,   0, 210,-210, 100,-100,   0,   0}
r_walk6={   0,   0,   0, 210, 210,-210, 100,-100,   0, 100}


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

function action(temptbl,datatime)
	for i=1,10,1 do
		Set_Titan_Servo_Data(i,datatime,temptbl[i])
	end
	Start_Titan_Servo()
	r_Delay(datatime)
end


Set_Titan_Servo_Data(1,200,200)
Set_Titan_Servo_Data(2,200,200)
Start_Titan_Servo()
r_Delay(200)
Set_Titan_Servo_Data(1,200,0)
Set_Titan_Servo_Data(2,200,0)
Start_Titan_Servo()
r_Delay(2000)

while true do
	i=Get_ble_remote_vector(1)
	j=Get_ble_remote_vector(2)
	
	
	if i^2+j^2>100 then
		if j<0.8*i and j>-0.8*i then
		--右边
			-- Set_Titan_Servo_Data(1,200,0)
			-- Set_Titan_Servo_Data(2,200,-200)
			-- Set_Titan_Servo_Data(3,200,0)
			-- Set_Titan_Servo_Data(4,200,0)
			-- Set_Titan_Servo_Data(5,200,0)
			-- Set_Titan_Servo_Data(6,200,0)
			-- Set_Titan_Servo_Data(7,200,0)
			-- Set_Titan_Servo_Data(8,200,0)
			-- Set_Titan_Servo_Data(9,200,0)
			-- Set_Titan_Servo_Data(10,200,0)
			-- Start_Titan_Servo()
			action(r_walk1,200)
			action(r_walk2,200)
			action(r_walk3,200)
			action(r_walk4,200)
			action(r_walk5,200)
			action(r_walk6,200)
		elseif j>0.8*i and j<-0.8*i then
		--左边
			-- Set_Titan_Servo_Data(1,200,0)
			-- Set_Titan_Servo_Data(2,200,200)
			-- Set_Titan_Servo_Data(3,200,0)
			-- Set_Titan_Servo_Data(4,200,0)
			-- Set_Titan_Servo_Data(5,200,0)
			-- Set_Titan_Servo_Data(6,200,0)
			-- Set_Titan_Servo_Data(7,200,0)
			-- Set_Titan_Servo_Data(8,200,0)
			-- Set_Titan_Servo_Data(9,200,0)
			-- Set_Titan_Servo_Data(10,200,0)
			-- Start_Titan_Servo()
			action(l_walk1,200)
			action(l_walk2,200)
			action(l_walk3,200)
			action(l_walk4,200)
			action(l_walk5,200)
			action(l_walk6,200)
		elseif j<0.8*i and j<-0.8*i then
		--后面
			-- Set_Titan_Servo_Data(1,200,-200)
			-- Set_Titan_Servo_Data(2,200,0)
			-- Set_Titan_Servo_Data(3,200,0)
			-- Set_Titan_Servo_Data(4,200,0)
			-- Set_Titan_Servo_Data(5,200,0)
			-- Set_Titan_Servo_Data(6,200,0)
			-- Set_Titan_Servo_Data(7,200,0)
			-- Set_Titan_Servo_Data(8,200,0)
			-- Set_Titan_Servo_Data(9,200,0)
			-- Set_Titan_Servo_Data(10,200,0)
			-- Start_Titan_Servo()
			action(backoff1,200)
			action(backoff2,200)
			action(backoff3,200)
			action(backoff4,200)
			action(backoff5,200)
			action(backoff6,200)
		elseif j>0.8*i and j>-0.8*i then
		--前面
			-- Set_Titan_Servo_Data(1,200,200)
			-- Set_Titan_Servo_Data(2,200,0)
			-- Set_Titan_Servo_Data(3,200,0)
			-- Set_Titan_Servo_Data(4,200,0)
			-- Set_Titan_Servo_Data(5,200,0)
			-- Set_Titan_Servo_Data(6,200,0)
			-- Set_Titan_Servo_Data(7,200,0)
			-- Set_Titan_Servo_Data(8,200,0)
			-- Set_Titan_Servo_Data(9,200,0)
			-- Set_Titan_Servo_Data(10,200,0)
			-- Start_Titan_Servo()
			action(forward1,200)
			action(forward2,200)
			action(forward3,200)
			action(forward4,200)
			action(forward5,200)
			action(forward6,200)
		end
	else
		-- Set_Titan_Servo_Data(1,200,0)
		-- Set_Titan_Servo_Data(2,200,0)
		-- Set_Titan_Servo_Data(3,200,0)
		-- Set_Titan_Servo_Data(4,200,0)
		-- Set_Titan_Servo_Data(5,200,0)
		-- Set_Titan_Servo_Data(6,200,0)
		-- Set_Titan_Servo_Data(7,200,0)
		-- Set_Titan_Servo_Data(8,200,0)
		-- Set_Titan_Servo_Data(9,200,0)
		-- Set_Titan_Servo_Data(10,200,0)
		-- Start_Titan_Servo()
		action(zero,200)
	end
	
	-- if ((j<0.8*i and j>-0.8*i) and i>30) then
		-- --右边
		-- Set_Titan_Servo_Data(1,200,0)
		-- Set_Titan_Servo_Data(2,200,-200)
		-- Set_Titan_Servo_Data(3,200,0)
		-- Set_Titan_Servo_Data(4,200,0)
		-- Set_Titan_Servo_Data(5,200,0)
		-- Set_Titan_Servo_Data(6,200,0)
		-- Set_Titan_Servo_Data(7,200,0)
		-- Set_Titan_Servo_Data(8,200,0)
		-- Set_Titan_Servo_Data(9,200,0)
		-- Set_Titan_Servo_Data(10,200,0)
		-- Start_Titan_Servo()
	-- elseif ((j>0.8*i and j<-0.8*i) and i<-30) then
		-- --左边
		-- Set_Titan_Servo_Data(1,200,0)
		-- Set_Titan_Servo_Data(2,200,200)
		-- Set_Titan_Servo_Data(3,200,0)
		-- Set_Titan_Servo_Data(4,200,0)
		-- Set_Titan_Servo_Data(5,200,0)
		-- Set_Titan_Servo_Data(6,200,0)
		-- Set_Titan_Servo_Data(7,200,0)
		-- Set_Titan_Servo_Data(8,200,0)
		-- Set_Titan_Servo_Data(9,200,0)
		-- Set_Titan_Servo_Data(10,200,0)
		-- Start_Titan_Servo()
	-- elseif ((j<0.8*i and j<-0.8*i) and j<-30) then
		-- --后面
		-- Set_Titan_Servo_Data(1,200,-200)
		-- Set_Titan_Servo_Data(2,200,0)
		-- Set_Titan_Servo_Data(3,200,0)
		-- Set_Titan_Servo_Data(4,200,0)
		-- Set_Titan_Servo_Data(5,200,0)
		-- Set_Titan_Servo_Data(6,200,0)
		-- Set_Titan_Servo_Data(7,200,0)
		-- Set_Titan_Servo_Data(8,200,0)
		-- Set_Titan_Servo_Data(9,200,0)
		-- Set_Titan_Servo_Data(10,200,0)
		-- Start_Titan_Servo()
	-- elseif ((j>0.8*i and j>-0.8*i) and j>30) then
		-- --前面
		-- Set_Titan_Servo_Data(1,200,200)
		-- Set_Titan_Servo_Data(2,200,0)
		-- Set_Titan_Servo_Data(3,200,0)
		-- Set_Titan_Servo_Data(4,200,0)
		-- Set_Titan_Servo_Data(5,200,0)
		-- Set_Titan_Servo_Data(6,200,0)
		-- Set_Titan_Servo_Data(7,200,0)
		-- Set_Titan_Servo_Data(8,200,0)
		-- Set_Titan_Servo_Data(9,200,0)
		-- Set_Titan_Servo_Data(10,200,0)
		-- Start_Titan_Servo()
	-- else
		-- Set_Titan_Servo_Data(1,200,0)
		-- Set_Titan_Servo_Data(2,200,0)
		-- Set_Titan_Servo_Data(3,200,0)
		-- Set_Titan_Servo_Data(4,200,0)
		-- Set_Titan_Servo_Data(5,200,0)
		-- Set_Titan_Servo_Data(6,200,0)
		-- Set_Titan_Servo_Data(7,200,0)
		-- Set_Titan_Servo_Data(8,200,0)
		-- Set_Titan_Servo_Data(9,200,0)
		-- Set_Titan_Servo_Data(10,200,0)
		-- Start_Titan_Servo()
	-- end
	
	--r_Delay(100)
end




