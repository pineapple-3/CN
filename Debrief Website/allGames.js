function getGenders(){
	CHILDNAME=document.getElementById("childName").value;
	var gender = document.getElementById("gender").value;
	if (gender == "Male"){
		HESHE="He"
		heshe="he"
		HISHER="His"
		hisher="his"
		HIMHER="Him"
		himher="him"
		themselves="himself"
	}
	if (gender == "Female"){
		HESHE="She"
		heshe="she"
		HISHER="Her"
		hisher="her"
		HIMHER="Her"
		himher="her"
		themselves="herself"
	}
	if (gender == "They"){
		HESHE = "They"
		heshe = "they"
		HISHER = "Their"
		hisher = "their"
		HIMHER="Them"
		himher="them"
		themselves="themselves"
	}
	
	sensei="<p class='debrief'>Nathan"

	orientationD = "<p class='debrief'>It was great to see you all today and for "+CHILDNAME+" to begin "+hisher+" coding journey with us! "+
	"Today we bestowed "+CHILDNAME+" with "+hisher+" white band so "+heshe+" can now scan in to "+hisher+" account and start coding "+
	"through our projects and developing awesome skills!"+
	"<br>"+
	"<br>"+
	"In the orientation, the main focus was for "+CHILDNAME+" to familiarize "+himher+" self with our Game Development Platform and "+
	"altering object properties. New vocabulary and concepts that we initially explored include objects, syntax, properties, "+
	"and scale. These are all very key and foundational topics that we are going to use in order to grow great projects together!"+
	"<br>"+
	"<br>"+
	"The main pivotal step in any of our new Ninjas development is to give " + CHILDNAME+" the tools to excellently code "+hisher+" first function in "+
	"JavaScript using the GDP spin function! "+HESHE+" also learnt further by ensuring that "+heshe+" references an object by "+
	"name and investigated how changing parameters affect the targeted object. "+CHILDNAME+" and I also took the time to explain "+
	"debugging, this is essentially the process of fixing broken code. As computers are literal, we need to ensure that we "+
	"are typing in the correct syntax otherwise our code won’t run and the game will not work! This is an absolutely key "+
	"practise to understand as this will be something "+heshe+" will use in all computing careers."+
	"<br>"+
	"<br>"+
	CHILDNAME+" moved onto the Seeing stars project where "+heshe+" practiced using the spin function on three different objects, "+
	CHILDNAME+" used logical reasoning to explain how some simple algorithms work and to detect and correct errors in algorithms "+
	"and programs. This game highlights the importance of object name identification as we need to ensure that the computer knows "+
	"what it is communicating with at any given time."+
	"<br>"+
	"<br>"+
	CHILDNAME+" did great today and "+heshe+" had a wonderful time being introduced into the dojo and all of the new concepts we will be covering! "+
	"There were a few occasions today when I was sat with "+himher+", and whenever "+heshe+" would ask any questions about something "+heshe+" was unsure about "+
	heshe+" listened intently as I explained it to "+himher+". This is something we encourage in all of our Ninjas and its great to see "+CHILDNAME+" already "+
	"have the confidence to ask when unsure about a concept. Great stuff today "+CHILDNAME+", looking forward to seeing you in soon!"+
	"</pre>"+
	"<br>"/*+
	//"<img src='Images/Ori.png' class='debriefimg' width='200'>"+
	//"<img src='Images/SpinCode.png'  width='200'>"+
	//"<img src='Images/SeeingStars.png' width='200'>"*/

	wallBounceD = "<p class='debrief'>In the second session for "+CHILDNAME+", we got straight into learning about our Wall Bounce Project! "+
	"In this project, "+CHILDNAME+" used the GDP’s moveX function to move a ball and then write "+
	"the if statement that bounces the ball if it touches the wall. This introduced "+HIMHER+" to Boolean Logic which operates on a"+
	"true/false or on/off basis concept and we will be revisiting this later in a more advanced nature. "+HESHE+" also utilized if "+
	"statements, these are conditionals that trigger when a condition is met, for example Thing #1 will happen IF Thing #2 occurs. "+
	"This is a staple to JavaScript and we will be using it in every project going forward!"+
	"</pre>"+
	"<br>"
	//"<img src='Images/WallBounce.png' class='debriefimg' width='200'>"

	laserChaseD = "<p class='debrief'>In Laser Chase, "+CHILDNAME+" created two if statements to link the position of our mouse to our laser object. "+
	"We used coordinates on the X axis to identify our mouses position in space and then commanded the computer to move our object based "+
	"on these coordinates, this was "+hisher+" first attempt at a basic control scheme and we will be harnessing these skills and pushing "+
	"them further as our games become much more complex. This is a quick jump up from using our if statements in wall bounce as we now delve "+ 
	"into user input using lots of Maths concepts like “is less than” and “is greater than” along the X coordinate to move our laser left and right."+
	"</pre>"+
	"<br>"
	//"<img src='Images/LaserChase.png' class='debriefimg' width='200'>"+
	//"<img src='Images/LaserChaseC.png' width='200'>"

	spaceZapperD= "<p class='debrief'>In Space Zapper, "+CHILDNAME+" had to develop and apply "+hisher+" analytical, problem-solving, designing and computational "+
	"thinking skills! "+CHILDNAME +" used what "+heshe+" knew about if statements, conditional statements, and the mouse to move an object in order "+
	"to complete this first mini test. This is a great step in "+CHILDNAME+"'s coding journey as it our first chance to test competency after being "+
	"shown JavaScript basics. Here we are mainly testing that "+CHILDNAME+" can make logical changes to a project based on past exposure."+
	"</pre>"+
	"<br>"
	////"<img src='Images/SpaceZapper.png' class='debriefimg' width='200'>"

	walllaserspace = wallBounceD = "<p class='debrief'>In the second session for "+CHILDNAME+", we got straight into learning about our Wall Bounce Project! "+
	"<br>"+
	"<br>"+
	"In this project, "+CHILDNAME+" used the GDP’s moveX function to move a ball in its x coordinates and then wrote "+
	"the if statement that bounces the ball if it touches the wall. This introduced "+himher+" to Boolean Logic which operates on a"+
	"true/false or on/off basis  and we will be revisiting this later many times in a more advanced nature. "+HESHE+" also learned about if "+
	"statements, these are conditionals that trigger when a condition is met, for example Thing #1 will happen IF Thing #2 occurs. "+
	"This is a staple to JavaScript and we will be using it in every project going forward!"+
	"<br>"+
	"<br>"+
	"In Laser Chase, "+CHILDNAME+" created two if statements to link the position of our mouse to our laser object. "+
	"We used coordinates on the X axis to identify our mouses position in space and then commanded the computer to move our object based "+
	"on these coordinates. This was "+hisher+" first attempt at a basic control scheme and we will be harnessing these skills and pushing "+
	"them further as our games become much more complex. This is a quick jump up from using our if statements in wall bounce as we now delve "+ 
	"into user input using lots of Maths concepts like “is less than” and “is greater than” along the X coordinate to move our laser left and right."+
	"<br>"+
	"<br>"+
	"In Space Zapper, "+CHILDNAME+" had to develop and apply "+hisher+" analytical, problem-solving, designing and computational "+
	"thinking skills! "+CHILDNAME +" used what "+heshe+" knew about if statements, conditional statements, and the mouse to move an object in order "+
	"to complete this first mini test. This is a great step in "+CHILDNAME+"'s coding journey as it our first chance to test competency after being "+
	"shown JavaScript basics. Here we are mainly testing that "+CHILDNAME+" can make logical changes to a project based on past exposure. The test is to "+
	"move the rocket object up and down using our mouse controls to fight off asteroids! It's a super fun game and a great reward for how well "+CHILDNAME+" has done today! Great work "+CHILDNAME+"!"+
	"</pre>"
	
	coconutChaosD= "<p class='debrief'>Today "+CHILDNAME+" jumped straight back into "+hisher+" projects with arrow key movement in Coconut Chaos!"+
	"<br>"+
	"<br>"+
	"In Coconut Chaos we got introduced into one of the most important concepts so far! How to use our arrow keys! Using our "+
	"knowledge of if statements from before, we created one which would always be checking for when we press it! Also we got to experiment further "+
	"with how to control speed in our games! We could see by using both positive and negative x coordinate speeds how it would impact the direction "+
	"our ninja would move in. Using arrow keys will be vital to just about all of our games in future so it's great to get introduced in a nice way "+
	"like this! Great work!"+
	"</pre>"+
	"<br>"
	////"<img src='Images/CoconutChaos.png' class='debriefimg' width='200'>"+
	////"<img src='Images/CoconutChaosC.png' width='200'>"

	hungryHungryNinjaD="<p class='debrief'>"+CHILDNAME+" started "+hisher+" lesson today learing how to use our arrow keys to teleport!"+
	"<br>"+
	"<br>"+
	"In Hungry Hungry Ninja, instead of just simply moving in either direction, we used all of our keys to teleport to a specific "+
	"X and Y coordinate. This is very useful for us to ensure we end up in the same place every time so we always are in the right place to collect our food! "+
	"This format to “teleport” is how we move most of our objects and it will always be seen in this format, so it is a great core skill to go over here in "+
	"white belt. Also a score system was created and executed, and then just under that we used the “text” function to display that score for us! Great stuff!"+
	"</pre>"+
	"<br>"
	//"<img src='Images/HungryHungryNinja.png' class='debriefimg' width='200'>"+
	//"<img src='Images/HungryHungryNinjaC.png' width='200'>"

	cocoHungry = "<p class='debrief'>Today "+CHILDNAME+" jumped straight back into "+hisher+" projects with arrow key movement in Coconut Chaos!"+
	"<br>"+
	"<br>"+
	"In Coconut Chaos "+CHILDNAME+" got introduced into one of the most important concepts so far! How to use our arrow keys! Using our "+
	"knowledge of if statements from before, "+heshe+" created one which would always be checking for when we press a key on the keyboard! Also we got to experiment further "+
	"with how to control speed in our games inside this if statement! We could see by using both positive and negative x coordinate speeds how it would impact the direction "+
	"our ninja would move in. Using arrow keys will be vital to just about all of our games in future so it's great to get introduced in a nice way "+
	"like this! Once all was finished we had a great juggling game keeping coconuts in the air with a trampoline! Great work!"+
	"<br>"+
	"<br>"+	
	"In Hungry Hungry Ninja, instead of just simply moving in either direction, we instead used all of our keys to teleport to a specific X and Y coordinates. This is very useful "+
	"for "+CHILDNAME+" to ensure "+heshe+" ends up in the same place every time to collect our food! This format to “teleport” is how we move most of our objects and it will "+
	"always be seen in this format, so it is a great core skill to go over here in white belt!"+
	"<br>"+
	"<br>"+	
	"This feature requires a lot of code to implement and so needed a lot of focus from "+CHILDNAME+" to finish it all today! "+HESHE+" did really well to code through it "+
	"all as "+heshe+" is becoming more confident in "+hisher+" computer skills! Once this was finished off we then got into another core concept, score systems! It works by "+
	"firstly checking whenever the ninja eats food, adding up a score when it does."+
	"<br>"+
	"<br>"+	
	"Once "+CHILDNAME+" did this we played the game and "+CHILDNAME+" quickly realised that the score wasn’t working! This is because, even though the score code is "+
	"correct, we hadn’t told the game to actually display this new score! "+CHILDNAME+" then added in the new code to display our score our label each time food is "+
	"consumed by our Ninja. Fantastic work "+CHILDNAME+"! Looking forward to seeing you in again soon!"+
	"<p>"

	airHockeyD = "<p class='debrief'>Firstly, a huge congratulations to "+CHILDNAME+" for graduating up to Yellow Belt! We are so proud! To crown this massive achievement, "+
	CHILDNAME+" successfully took on the last game of white belt!!" +
	"<br>"+
	"<br>"+
	"Using all of "+CHILDNAME+"’s brand new abilities and computing skills, the last objective for "+himher+" was to build a functioning air hockey game from "+
	"scratch! If you look at the game screenshot above, you may think it has a resemblance to the first ever computer game created; PONG."+
	"<br>"+
	"<br>"+
	"That’s right, "+CHILDNAME+" recreated the first ever game all by "+themselves+"! This challenge puts all of our fundamental teaching together by firstly "+
	"getting "+himher+" to connect both up and down movement to the left side paddle and a mouse controlled moving scheme tot the right. This allowed the game "+
	"to be two players where "+CHILDNAME+" can compete against another ninja, a sensei or even "+themselves+"!!"+
	"<br>"+
	"<br>"+ 
	CHILDNAME+" next used teleportation to send the ball back to our centre-based coordinates after going past either ‘goal’ side of screen. As this wouldn’t be "+
	"a very fun or complete game if the ball floated off and was never seen again after 1 point scored! "+CHILDNAME+" achieved this by using our very important "+
	"conditional; the if statement. So we said IF the ball touches a certain side, the corresponding player would receive a point! "+HESHE+" also displayed a "+
	"text label that was connected to the players scores so we could keep track."+
	"<br>"+
	"<br>"+
	"This is a massive project that tests all of "+CHILDNAME+"'s learning throughout White belt and gets "+himher+" ready for moving up to Yellow Belt! We are all "+
	"so pleased to see "+CHILDNAME+ " taking "+hisher+" time throughout Air hockey and keeping focussed as we all know it's "+hisher+" last hurdle before "+heshe+" are bestowed "+
	"the mighty new band! Fantastic work "+CHILDNAME+"!"+	
	"</pre>"+
	"<br>"
	//"<img src='Images/AirHockey.png' class='debriefimg' width='200'>"+
	//"<img src='Images/AirHockeyCele.png' width='200'>"+
	//"<img src='Images/AirHockey2.png' width='200'>"

	rainC1="<p class='debrief'>In rain catcher 1 we have an outside scene with a cloud that moves and randomly drops rain, and underneath we have a turtle who is trying to catch the "+
	"raindrops, the only problem is the raindrops aren’t falling, they're just staying in the air! We then learnt how to refer to an object without having to type "+
	"out it's name, “$this”. In this case we made the raindrops move down the screen, and had to be careful not to make the whole scene fall down! As “$this” refers "+
	"to the object selected, so we need to make sure we don't select the background!"+
	"</pre>"+
	"<br>"
	//"<img src='Images/RainC1.png' class='debriefimg' width='200'>"

	rainC2="<p class='debrief'>In this game the raindrops were working fine, but the turtle wasn’t moving at all, we want to be able to control the turtle, we can do this by saying, "+
	"if(isKeyPressed(Keys.rightArrow)){ and then what we want to happen e.g. moveX($this) making sure that all the brackets are then closed. We also used variables to "+
	"shorten our code so instead of having to say isKeyPressed(Keys.rightArrow) we can say var right = isKeyPressed(Keys.rightArrow) ,and from now on we can say right "+
	"and it will mean the same thing."+
	"<br>"+
	"<br>"+
	CHILDNAME+" also got to animate "+hisher+" turtle to move his legs around! This was done by incrementing the animation of it! When we increment an animation the "+
	"object flicks through all of the images inside it's spritesheet like a flipbook over and over. This way it looked like the turtle was waddling his little legs when "+
	"he moved! We then also moved the code inside our movement if statements so the turtle would only waddle when he was moving to look more realistic!"+
	CHILDNAME+" proved "+hisher+" understanding of the if statements we had just done by finding out in the bonus step that the code has to go inside the movement statements "+
	"we just made!"+
	"</pre"
	//"<img src='Images/RainC2.png' class='debriefimg' width='200'>"

	rainC3="<p class='debrief'>In the next game, we can move the turtle by using the arrow buttons, but the raindrops are only spawning in one spot that the turtle can't quite reach, "+
	"we needed to work out how to make them spawn in random places where the turtle can catch it. For this we made a variable for a random location and set it as for the "+
	"x axis of where the drop spawns, we don't need to randomize the position along the y axis as we always want it to drop from the same height."+
	"</pre>"


	rainC4="<p class='debrief'>For this scene, we wanted to make a lightning bolt randomly spawn, we already had the timer coded for us which made it spawn every few seconds. We did "+
	"this by first using the code to clone the lightning bolt that we started off with and saying that it’ll spawn at a random x coordinate between 40 and 760, which made "+
	"sure it's easily within our screen, then just like last time we made it spawn at the top of our screen which in our case was 10."+
	"</pre>"


	rainC5="<p class='debrief'>This time we wanted to add in a snowflake as well, but this time we had to do it completely from scratch, so firstly we made a timer, this function tells "+
	"us how many seconds we have between each snowflake spawns, if we want it to be 3 seconds we would put 3000 as the computer counts in milliseconds. Next we made the "+
	"code to clone as in the previous games and the coordinates of where it spawns. We tried changing the timer for the snowflake to see the difference it made in our game"+
	"</pre>"+
	"<br>"
	//"<img src='Images/RainC5.png' class='debriefimg' width='200'>"

	rainC1to5 = "<p class = 'debrief'>"+CHILDNAME+" has done brilliantly today in "+hisher+" first Yellow Belt session, finishing 5 parts of Yellow Belts mighty 'Rain Catcher'!"+
	"<br>"+
	"<br>"+
	"The start of rain catcher introduces "+CHILDNAME+" into a new way of referencing our objects, '$this'. '$this' replaces the object's name in our code, simplifying it greatly "+
	"when we start creating clones! Every clone has a new name, like 'rain_1', 'rain_2'.... so we need a way to talk about each object at once! The code inside our objects is cloned "+
	"so the '$this' inside 'rain_1' works exactly the same as the '$this' inside 'rain_459'! The code we used was '$this.moveY(100)', so as the rain cloned, it all had this code inside "+
	"to move down!"+
	"<br>"+
	"<br>"+
	"The second part of Rain Catcher introduces a new concept, 'variables'! Variables start of as essentially an empty box, that "+CHILDNAME+" can call whatever they want (the "+
	"'nickname') and then "+heshe+" places code inside it. We put the code 'isKeyPressed(Keys.rightArrow)' inside a box called 'right'. As you can see this shortens down how much "+
	"we have to type out by a lot, and we will use this much more to streamline our games and the code behind them!"+
	"<br>"+
	"<br>"+
	"parts 3, 4 and 5 introduced "+CHILDNAME+" to 'timers'. These timers run on milliseconds, so a timer with 1000 set as its time runs every 1 second. When this timer went off "+
	"we ran code that would clone our raindrop. Cloning was again a new topic covered today, and is used with the code 'objectname.clone();' so we made a new 'nickname' called "+
	"'ndrop' (new drop) and put 'drop.clone();' inside it!"+
	"<br>"+
	"<br>"+
	"Now onto placing the clone! We wanted all of our clones to spawn in random places, as otherwise the rain would just come down as one big blob! We made a new nickname called "+
	"'rainX' and put the code 'random(760,40);' inside it. This way, whenever we talked to the computer about this 'rainX' nickname, it would generate a random number between 760 and 40."+
	"this is the width of our game scene, so our rain could spawn anywhere in our scene! Brilliant work from "+CHILDNAME+" today, learning lots of new concepts that we will be reinforcing "+
	"much more throughout Yellow Belt! "+
	"</p>"
	//"<img src='Images/RainC5.png' class='debriefimg' width='200'>"+
	//"<img src='Images/RainC2.png' class='debriefimg' width='200'>"

	rainC6="<p class='debrief'>Today "+CHILDNAME+" jumped straight back into "+hisher+" rain catcher projects with Colour manipulation!"+
	"<br>"+
	"<br>"+
	"In the previous game our snowflake made the turtles bucket change colour, but this time it didn't seem to be working! When the snowflake touches the bucket "+
	"we wanted to make the bucket turn blue then wait 2 seconds before resetting it to grey again. When we code colours we call this <b>HEXADECIMALS</b> and it simply lets us tell "+
	"the computer how much of each colour red, blue or green we want to use. We then coded a 2 second timer, at the end of which the powerup ends and we can use an if "+
	"statement to reset the colour back to grey!"+
	"</pre>"
	//"<img src='Images/RainC6.png' class='debriefimg' width='200'>"

	colourChange="<p class='debrief'>Continuing from last lesson, "+CHILDNAME+" used "+hisher+" knowledge of Hexadecimals in a mini test to change the colours of objects based on other ones!"+
	"<br>"+
	"<br>"+
	"Colour change had "+CHILDNAME+" explore the concept of <b>HEXADECIMALS</b> in much greater detail that in the final Rain Catcher Project. "+HESHE+" coded 5 buttons’ mouse click events so that "+
	"when they are clicked, the rectangle in the middle would change to that colour. Hexadecimals are 6 numbers or letters, the first 2 are for RED the middle two are for "+
	"GREEN and the last two are for BLUE. Using this knowledge we used our code like an artist would use a colour pallet! "+CHILDNAME+" did really well in this mini test and even added in "+
	hisher+" own objects with different colours!"+
	"</pre>"+
	"<br>"
	//"<img src='Images/ColourChange.png' class='debriefimg' width='200'>"

	meteor1="<p class='debrief'>Today "+CHILDNAME+" started on the second Unit of Yellow Belt! The first project is meteors part 1 - coding the beginnings of the familiar 'ASTEROIDS' arcade game!"+
	"<br>"+
	"<br>"+
	"In this first exercise we wanted to randomise the direction of a meteor when it was clicked on. For this we used the rotation function which simply takes in two properties, the object we want "+
	"to rotate, and then a number. This number then dicatates the degrees the object points in along a circle from 0 to 359. So now we had to do something that is used often in the second unit of Yellow Belt, "+
	"creating a variable and storing a number inside it to use later! "+CHILDNAME+" generated a random number between 359 and 0, put it inside a variable and then put this variable in the rotation function! Violla! "+
	"The best bit about using this in a variable is that we can also use it to alter the meteors speed by simply adding it the a moveX & moveY function we have used before to really shake them up when we click the meteor!"
	"</pre>"+
	"<br>"
	//"<img src='Images/Meteor1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Meteor12.png' class='debriefimg' width='200'>"

	meteor2="<p class='debrief'>At the start of "+CHILDNAME+"'s lesson, we continued on our 'ASTEROIDS' arcade game!"+
	"<br>"+
	"<br>"+
	"In the second part of our Meteors project, we could control the spaceship by rotating left and right and we could shoot bullets using the space key. But when the bullet hits the meteor, "+
	"the meteor only just got smaller and smaller! So of course we got to making it much more fun by creating a clone! If the meteor was bigger than a quarter size, then we would create a clone and half "+
	"in size! This way we can shoot the meteor twice creating clones and then the final shot will remove it! Whenever the clones were created they would both shoot off in "+
	"random directions to create a proper meteors game from the code in meteor part one! Of course we then added in hundreds of meteors to really fill the scene up with space rocks, Great work ninja! "+
	"This ones quite a lot of fun to play too in a true test of rocket steering precision!"+
	"</pre>"+
	"<br>"
	//"<img src='Images/Meteor2.png'  class='debriefimg' width='200'>"+
	//"<img src='Images/Meteor12.png' class='debriefimg' width='200'>"

	meteor12 = "<p class='debrief'>Today "+CHILDNAME+" started on the second Unit of Yellow Belt! The first project is meteors part 1 - coding the beginnings of the familiar 'ASTEROIDS' arcade game!"+
	"<br>"+
	"<br>"+
	"In this first exercise we wanted to randomise the direction of a meteor when it was clicked on. For this we used the rotation function which simply takes in two properties, the object we want "+
	"to rotate, and then a number. This number then dicatates the degrees the object points in along a circle from 0 to 359. So now we had to do something that is used often in the second unit of Yellow Belt, "+
	"creating a variable and storing a number inside it to use later! "+CHILDNAME+" generated a random number between 359 and 0, put it inside a variable and then put this variable in the rotation function! Violla! "+
	"The best bit about using this in a variable is that we can also use it to alter the meteors speed by simply adding it the a moveX & moveY function we have used before to really shake them up when we click the meteor!"+
	"<br>"+
	"<br>"+
	"In the second part of our Meteors project, we could control the spaceship by rotating left and right and we could shoot bullets using the space key. But when the bullet hits the meteor, "+
	"the meteor only just got smaller and smaller! So of course we got to making it much more fun by creating a clone! If the meteor was bigger than a quarter size, then we would create a clone and half "+
	"in size! This way we can shoot the meteor twice creating clones and then the final shot will remove it! Whenever the clones were created they would both shoot off in "+
	"random directions to create a proper meteors game from the code in meteor part one! Of course we then added in hundreds of meteors to really fill the scene up with space rocks, Great work ninja! "+
	"This ones quite a lot of fun to play too in a true test of rocket steering precision!"+
	"</pre>"

	rollingDice="<p class='debrief'>After finishing "+hisher+" 'ASTEROIDS' project, "+CHILDNAME+" got into a more technical challenge, Rolling Dice!"+
	"<br>"+
	"<br>"+
	"Here we have a game with 2 dice, each of the dice have 6 different animations which the computer labelled 0-5, as an index always starts at 0! We used "+
	"the random function again to put a random number inside a variable, then assign this variable to our dice’s frame! We made sure that our number had no decimals using "+
	"Math.round to get to the nearest whole number. Then a score was required to tell us the total number that we rolled! We did this by adding the 2 random numbers "+
	"together and then, because the computer starts at 0 unlike the dice, we had to add 1 for each dice!"+
	"</pre>"+
	"<br>"
	//"<img src='Images/RollingDice.png'class='debriefimg' width='200'>"

	hidingNinja1="<p class='debrief'>In "+CHILDNAME+"'s first project of unit 3 "+heshe+" had to learn how to make the ninja object become invisible using Boolean logic. The purpose of "+
	"this lesson is to use toggleVisible function to make a ninja vanish and reappear. This is how we will be exercising control over an objects state by making it "+
	"visible to the player (true) or invisible (false). We use this mechanic to a great extent in later belts as not only will we be dealing with many layers of code, "+
	"but several layers of graphical components as well!"
	"</pre>"+
	"<br>"

	hidingNinja2="<p class='debrief'>In the second activity of unit 3 we used our knowledge of togglevisible to make a proper game! Applying the logic to 4 separate objects and putting the code into "+
	"different events we managed to fix a game that had lots of ninjas disappearing and reappearing, but no way to play it! "+CHILDNAME+ " added in functionality of the Ninjas to not only pop in and out, "+
	"but also to randomly, on a 30% chance, get bigger! These bigger ninjas are like mines that we cant click on! If we click on these bigger ninjas the game ends and a message is sent through the code to the "+
	"player, saying 'YOU LOSE' or whichever effect "+CHILDNAME+" wanted!"+
	"<br>"+
	"<br>"+
	"The way to create a 30% chance seemed quite simple but used a fair bit of computing logic in a nice way for "+CHILDNAME+". We first made a variable called 'randomNumber' and made it equal a random number between "+
	"0 and 100. We then had an if statement checking if(randomNumber < 30 ) so, if the random number between 100 and 0 is less than 30, which is 30%! Brilliant work making this fun minigame "+CHILDNAME+" keep it up!"+
	"</pre>"+
	"<br>"
	//"<img src='Images/HidingNinja2.png' class='debriefimg' width='200'>"+
	//"<img src='Images/HidingNinja21.png' class='debriefimg' width='200'>"

	hidingninja12="<p class='debrief'>Today "+CHILDNAME+" got to start unit 3! This unit has lots to do with altering properties of our objects in simple ways to make complex games!"+
	"<br>"+
	"<br>"+
	"In "+CHILDNAME+"'s first project of unit 3 "+heshe+" had to learn how to make a ninja object become invisible using Boolean logic. The purpose of "+
	"this lesson is to use toggleVisible function to make a ninja vanish and reappear. This is how we will be exercising control over an objects state by making them "+
	"visible to the player (true) or invisible (false). We use this mechanic to a great extent in later belts as not only will we be dealing with many layers of code, "+
	"but several layers of graphical components as well!"+
	"<br>"+
	"<br>"+
	"In the second activity of unit 3 we used our knowledge of togglevisible to make a proper game! Applying the logic to 4 separate objects and putting the code into "+
	"different events we managed to fix a game that had lots of ninjas disappearing and reappearing. This was great, but there was no way to play it! "+CHILDNAME+ " added in functionality of the Ninjas to not only pop in and out, "+
	"but also to randomly, on a 30% chance, get bigger! These bigger ninjas are like dangerous mines that we shouldn't click on! If we click on these bigger ninjas the game ends and a message is sent through the code to the "+
	"player, saying 'YOU LOSE' or whichever effect "+CHILDNAME+" wanted!"+
	"<br>"+
	"<br>"+
	"The way to create a 30% chance used a fair bit of computing logic in a nice way for "+CHILDNAME+" to learn. We first made a variable called 'randomNumber' and made it equal a random number between "+
	"1 and 100. We then had an if statement checking if(randomNumber < 30 ) so, if any random number between 100 and 1 is less than 30, which is 30% of the time! Brilliant work making this fun minigame "+CHILDNAME+" keep it up!"+
	"</pre>"+
	"<br>"

	whackANinja="<p class='debrief'>"+CHILDNAME+" started "+hisher+" session today looking into making "+hisher+" biggest game yet! Whack A Ninja!"+
	"<br>"+
	"<br>"+
	"Ever played whack a mole? Well today "+CHILDNAME+" got to code it! Using "+hisher+" new knowledge of how to toggle visibility using both the initialize when scene "+
	"starts event and the mouse click event, we had our ninjas popping in and out at all kinds of speeds! From rain catcher "+CHILDNAME+ " had knowledge of creating timers, "+
	"and from rolling dice we had knowledge of random numbers inside variables. So here we put the 2 together so our ninjas all popped in and out at random times! This "+
	"project is a lot of fun to play to see what kind of score the ninjas can get clicking on the icons popping in and out! The project is very useful putting multiple "+
	"concepts together and conveys just how much our Ninjas have learned along the way!"+
	"</pre>"+
	"<br>"
	//"<img src='Images/WhackANinja.png'class='debriefimg' width='200'>"+
	//"<img src='Images/WhackANinja1.png'class='debriefimg' width='200'>"

	hidingNinja123="<p class='debrief'>In "+CHILDNAME+"'s first project of unit 3 "+heshe+" had to learn how to make the ninja object become invisible using Boolean logic. The purpose of "+
	"this mini project was to use the toggleVisible function to make a ninja vanish and reappear. This is how we will be exercising control over an objects state by making it "+
	"visible to the player (true) or invisible (false). We use this mechanic to a great extent in later belts as not only will we be dealing with many layers of code, "+
	"but several layers of graphical components as well!"+
	"<br>"+
	"<br>"+
	"In the second activity of unit 3 we used our knowledge of togglevisible to make a proper mini game! Applying the logic to 4 separate objects and putting the code into "+
	"different events we managed to fix a game that had lots of ninjas disappearing and reappearing, but no way to really play it! "+CHILDNAME+ " added in functionality of the Ninjas to not only pop in and out, "+
	"but also to randomly, on a 30% chance, get bigger! These bigger ninjas are like mines that we cant click on or they get us! If we click on these bigger ninjas the game ends and a message is sent through the code to the "+
	"player, saying 'YOU LOSE' or whichever effect "+CHILDNAME+" wanted!"+
	"<br>"+
	"<br>"+
	"For the final project of the day - a fully fledged whack a mole! Using "+hisher+" new knowledge of how to toggle visibility using both the initialize when scene "+
	"starts event and the mouse click event, we had our ninjas popping in and out at all kinds of speeds! From rain catcher "+CHILDNAME+ " had knowledge of creating timers, "+
	"and from rolling dice we had knowledge of random numbers inside variables. So here we put the 2 together so our ninjas all popped in and out at random times! This "+
	"project is a lot of fun to play to see what kind of score the ninjas can get clicking on the icons popping in and out! The project is very useful putting multiple "+
	"concepts together and conveys just how much our Ninjas have learned along the way!"+
	"</pre>"+
	"<br>"

	ninjaSupplies="<p class='debrief'>Today "+CHILDNAME+" jumped straight back into the end of unit 4 with Inventory Management!"+
	"<br>"+
	"<br>"+
	"In Ninja Supplies, we learned how to use toggle draggable with multiple layered objects. This more object oriented programming sets precedence "+
	"for the multiple objects in the next games. There are 3 sets of code to complete inside the katana, the star and the staff. We use both if statements and else "+
	"statements to check both if the supplies are touching the ninja, or if we missed. Once we got them all we returned our Ninja to his SUPER SIZE! This was our "+
	"first chance at coding in a chain of command for the objects which will very important when we move towards more advanced game development."+
	"</pre>"+
	"<br>"
	//"<img src='Images/NinjaSupplies1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/NinjaSupplies2.png' width='200'>"+
	//"<img src='Images/NinjaSupplies3.png' width='200'>"

	ninjaSupplieswhackANinja="<p class='debrief'>"+CHILDNAME+" started "+hisher+" session today looking into making "+hisher+" biggest game yet! Whack A Ninja!"+
	"<br>"+
	"<br>"+
	"Ever played whack a mole? Well thats what "+CHILDNAME+" got to code today! Using "+hisher+" new knowledge of how to toggle visibility using both the initialize when scene "+
	"starts event and the mouse click event, we had our ninjas popping in and out at all kinds of speeds! From rain catcher "+CHILDNAME+ " had knowledge of creating timers, "+
	"and from rolling dice we had knowledge of random numbers inside variables. So here we put the 2 together so our ninjas all popped in and out at random times! This "+
	"project is a lot of fun to play to see what kind of score the ninjas can get clicking on the icons popping in and out! The project is very useful putting multiple "+
	"concepts together and conveys just how much our Ninjas have learned along the way!"+
	"<br>"+
	"<br>"+
	"In Ninja Supplies, we learned how to use toggle draggable with multiple layered objects. This more object oriented programming sets precedence "+
	"for the multiple objects in the next games. There are 3 sets of code to complete inside the katana, the star and the staff. We use both if statements and else "+
	"statements to check both if the supplies are touching the ninja, or if we missed. Once we got them all we returned our Ninja to his SUPER SIZE! This was our "+
	"first chance at coding in a chain of command for the objects which will very important when we move towards more advanced game development."+
	"</pre>"+
	"<br>"
	
	whatsInside="<p class='debrief'>In this prove yourself test, "+CHILDNAME+"'s objective was to open various doors and all the random objects hiding behind. "+
	"The purpose of this challenge is to figure out how to create the mechanics to open the doors and display randomised images  "+
	"so it becomes a game of chance. "+CHILDNAME+" revisited "+hisher+" Boolean logic skills (true/false) to toggle the visible state of the "+
	"door images, so that when the open door was clicked it became ‘false’ and the closed door image became ‘true’ - therefore creating "+
	"an animation of the action."+
	"<br>"+
	"<br>"+
	CHILDNAME+" achieved this whilst also using the random sprite skill practised prior to have this function "+
	"work in a way to randomise what image would be displayed! Also the term '$this' was heavily focused on in this project as it is a great way to learn more about its uses. "+
	"'$this' is a way to refer to the object the code itself is in. so if I enter the rectangle's code and type '$this.scaleX(5)' the '$this' refers to the rectangle, so this code would "+
	"make the rectangles scaleX 5 times bigger than normal! In this case we just ensure that the door the player clicks on disappears with '$this.visible(false)' "+
	"Great work on this project "+CHILDNAME+"!"+
	"</pre>"+
	"<br>"
	//"<img src='Images/WhatsInside.png'class='debriefimg' width='200'>"
	
	rockPaperScissors="<p class='debrief'>Rock Paper Scissors is a lovely prove yourself test, and the midpoint of Yellow Belt! "+
	CHILDNAME+" had to do what it says on the tin, creat a rock-paper-scissors game! The purpose of this challenge is to figure out how to use a "+
	"win/lose condition and make images appear and disappear based on events and actions in the game! "+CHILDNAME+" achieved this by linking the "+
	"opponents sprite images (rock, paper or scissors) to a number, and then creating a random number when we clicked on of the options to use for our opponents selection! "+
	"This way, our opponents choice was randomised, and our choice would be whatever button was selected! Great work "+CHILDNAME+"!"+
	"</pre>"+
	"<br>"
	//"<img src='Images/RockPaperScissors.png'class='debriefimg' width='200'>"+
	//"<img src='Images/RPS1.png' width='200'>"
	
	rockPaperScissors2="<p class='debrief'>"+CHILDNAME+" then did brilliantly today with our rock paper scissors test project! "+HESHE+" had the challenge of "+
	"re-creating this age old classic but with the illusion of having a real opponent to compete against! "+CHILDNAME+" used "+hisher+"knowledge of "+
	"allocating frames within an animated sprite to a number, and then changing the picture they were showing using that number. This time around "+CHILDNAME+" "+
	"used a random number generator for the sprite."+
	"<br>"+
	"<br>"+
	"This is very similar to the Rolling dice game where we want our sprites to show a random frame, but this time we need to use it to compare against our selection "+
	"as well. To do this "+CHILDNAME+" made a set of if statements which checked the random number the computer chose, to the selection we made of Rock, paper or Scissors. "+
	"The selections were assigned with Rock=0, Paper=1 and Scissors=2 so this was another great project to compound more coding knowledge with a little bit of algebra aswell as "+
	"we look to store numbers inside our words/letters!"+
	"<br>"+
	"<br>"+
	"Fantastic work today "+CHILDNAME+" finishing this project means you are over halfway through Yellow Belt, and you are doing brilliantly every session! Keep up the great work and I "+
	"am looking forward to seeing you again next session!"+
	"</pre>"+
	"<br>"
	//"<img src='Images/RockPaperScissors.png'class='debriefimg' width='200'>"+
	//"<img src='Images/RPS1.png' width='200'>"

	robotBuilder = "<p class='debrief'>Today "+CHILDNAME+" built a robot in a technical challenge! We already had set up a template with all the correct locations "+
	"of the pieces of the robot, so our job was to drag them into the correct place!  Figuring out how to drag and assemble objects is great practise for when we start to "+
	"manipulate scenery on a much wider scale. "+
	"<br>"+
	"<br>"+
	" "+CHILDNAME+" used ‘Mouse Button Up’, which will run our code whenever we let go of the mouse after dragging an object! Then we will check if it's touching it's correct "+
	"space on the robot, and snap it in! As you can see in the code above, "+CHILDNAME+" ran an if statement to say IF the object body part (arm) is touching the predetermined "+
	"coordinate of the space (arm space), the object will utilise those same coordinates so it fits there perfectly. Finally, the draggable function becomes false so the object "+
	"cannot be moved after it’s placed. "+
	"<br>"+
	"<br>"+
	"This is a fun mini test which gets "+CHILDNAME+" to start thinking about how our objects can be manipulated as part of a chain of command as "+
	"a prelude into it’s focus within the upcoming unit. "+HESHE+" was given guidance for how to attach the body of our robot but had to use previous projects concepts and sheer "+
	"brainpower to attach all other parts! Great job "+CHILDNAME+"! Let's hope he’s not an angry robot! "+ 
	"</p>"
	//"<img src='Images/RobotBuilder.png' class='debriefimg' width='200'>"+
	//"<img src='Images/RobotBuilderC.png' width='200'>"
	
	bumperCar = "<p class='debrief'>In 'Bumper car' we start the game with a... Bumper Car! We use the code $this.moveX to get the car to start moving and then we started experimenting "+
	"with a new function flipDirection to change the direction of the car under the condition that it collides with our coordinate parameter "+
	"(which we set to the edge of the screen). "+CHILDNAME+" linked these conditions together with an operator! The operator was '| |' and it means 'OR'. "+
	"So, if we hit the left wall, OR we hit the left wall, flip direction. These exercises focus and practise how we set the confines of which we "+
	"want objects to operate within and how they react to it. We also got to see how to use scaleX to invert our car so that it appeared the car’s "+
	"perspective was being tracked! These techniques are subtle and can be tricky but bringing them together allows for more realistic movements in game development."+
	"</pre>"+
	"<br>"
	//"<img src='Images/BumperCar.png'class='debriefimg' width='200'>"
	
	balloonProtect="<p class='debrief'>"+CHILDNAME+" got stuck right back into "+hisher+" coding projects today, taking on some mighty dots in a fight for the balloon!"+
	"<br>"+
	"<br>"+
	CHILDNAME+" had a great time in this 'balloon protect' game where "+heshe+" programmed our balloon object to disappear when one of the dots collided with it. Using the flipDirection "+
	"this time with the mouse click events we tried to make this into a workable protection game! "+
	"<br>"+
	"<br>"+
	"We got the dots moving towards our balloon initially and if they were clicked on they would flipDirection and head for the corners of the screen again! If they hit the corners of the "+
	"screen they could then flip back again and start heading towards the balloon! That was quite a few ‘if’ statements, so our code would start to look more and more messy with so much "+
	"going on! "+CHILDNAME+" then got to use the same ‘ | | ‘ OR operator from Bumper Car to make the flip direction code run whenever these things happened. Now we can say: If (the circle "+
	"is clicked | | circle hits right wall | | circle hits left wall) instead of having 3 statements one after another, we have only one! Great work!"+
	"<br>"+
	"<br>"+
	"This game conveys to Ninjas that the same concept when applied differently in different events and objects can turn simple code into full games! Great work on this one "+CHILDNAME+"!"+
	"</pre>"+
	"<br>"
	//"<img src='Images/BalloonProtect.png'class='debriefimg' width='200'>"
	
	ninjaSnacks="<p class='debrief'>"+CHILDNAME+" expanded upon balloon protect by not only using direct object pathing based on a trigger but using the remove "+
	"function to delete them from this scene once they reached the designated coordinates, this gave the look of the object being obtained whilst also "+
	"being great for project optimisation as we are deleting unwanted items once their purpose is served."+
	"</pre>"+
	"<br>"
	//"<img src='Images/NinjaSnacks.png'class='debriefimg' width='200'>"

	shurikenToss1="<p class='debrief'>In this task we introduced and explored the moveTo function which tells our shuriken in the game to move to the target we "+
	"clicked! This is a really key concept in our code and can help us going further onto the next game where we will use these functions again to "+
	"explore space, next onto part two of this game where we will throw the shuriken’s at moving targets! "+
	"</pre>"+
	"<br>"

	spaceTour="<p class='debrief'>In this small project, "+CHILDNAME+" was focusing on one principle and ensuring that it worked flawlessly. The aim of this game was quite "+
	"simple in theory, to get a rocketship to manoeuvre  to various meteors in space. But, the tricky part came when "+CHILDNAME+" had to do this with an "+
	"unfamiliar technique. "+HESHE+" used a new function to automatically path one object to another on the trigger of a mouse click, so the "+
	"rocketship would find the most direct line to a certain linked meteor. This comes in handy when we introduce difficult layers to these games as "+
	"now, "+CHILDNAME+" can set up a command for objects to move in a pre designated manner within a chain of command. This means "+heshe+" doesn’t "+
	"need to worry about manually telling everything what to do! "+
	"</pre>"+
	"<br>"
	//"<img src='Images/SpaceTour.png'class='debriefimg' width='200'>"

	shurikenToss2="<p class='debrief'>Here "+CHILDNAME+" got to grips with fully applying our pointTo and moveForwardByRotation concepts by applying them to a full game! "+
	"The purpose of this game is to move the shuriken towards our targets based on the position of the mouse and to reset the shuriken should it miss! "+
	"We got a proper look into else statements which we used to ensure that our shuriken remained inside the scene at all times. Also getting to use "+
	"our “&&” AND operator inside the if statement to check if all the coordinates are correct, and that the object was remaining in the scene. "+
	"Then inside the background we ran an if statement to actually throw our star based on where we placed the mouse! Great work "+CHILDNAME+"! "+
	"</pre>"+
	"<br>"
	//"<img src='Images/ShurikenTossPart2.png' class='debriefimg' width='200'>"+
	//"<img src='Images/ShurikenTossPart2C.png' width='200'>"

	ninjaBattlePartOne= "<p class = 'debrief'>Today "+CHILDNAME+" got right back into the end of unit 5 with the massive 'Ninja Battle'!"+
	"<br>"+
	"<br>"+
	"In our first look at the Ninja Battle test activity, "+CHILDNAME+" was shown the battle of a lifetime! "+HESHE+" "+
	"had to create an avoidance game as an enemy ninja will be tossing shurikens towards "+hisher+" controlled character and the aim was to survive! This one is quite "+
	"the technical challenge so requires many more steps than "+CHILDNAME+" is accustomed to."+
	"<br>"+
	"<br>"+
	"Firstly, "+heshe+" had to code our controlled ninja to move up and down with our arrows to ensure we could actually dodge something! Then "+CHILDNAME+" had "+
	"to code clones of the shuriken that will try and hit us! To do this, "+heshe+" had to place the shuriken object into our opponents hand, create a variable "+
	"(which we will use later), then implement our pointToObject and Rotation functions so that the shuriken follows our ninja!"+
	"<br>"+
	"<br>"+
	"To top off this session, "+CHILDNAME+" created a scoring system ! "+HESHE+" added in text, then call the label “score” and made it's description just a 0. In "+
	"order to display our score, "+CHILDNAME+" made a global variable called $this.scene.score and have it display on our text! Next session we will top off the "+
	"shurikens functionality! Great stuff today!"+
	"</pre>"+
	"<br>"
	//"<img src='Images/NinjaBattle.png' class='debriefimg' width='200'>"+
	//"<img src='Images/NinjaBattleC.png' width='200'>"+
	//"<img src='Images/NinjaBattleC2.png' width='200'>"

	ninjaBattlePartTwo= "<p class = 'debrief'>Today "+CHILDNAME+" got right back into the end of unit 5 with the massive 'Ninja Battle'!"+
	"<br>"+
	"<br>"+
	"Following on from last session, "+CHILDNAME+" used the global variable we made inside each clone to make them move "+
	"forwards based on where they were rotating! This rotation will always follow our ninja so we have to dodge it! "+CHILDNAME+" also used the  “&&” AND Operator "+
	"to serve in our if statement controlling the ninjas' up and down movement to ensure they wouldn't fall off the roof or fall through the floor! "+
	"<br>"+
	"<br>"+
	"We then finally added the functionality of our shurikens! If they made contact with the pcNinja, we would reduce our score and remove the shuriken. If the "+
	"shuriken made it all the way to the far left of the scene, we scored a point and still removed the shuriken to optimize our game!"+
	"<br>"+
	"<br>"+
	"This tested "+CHILDNAME+"'s skills from the previous target-based projects, coupled with computer controlled actions and a movement scheme. This is a very "+
	"large project so great job to "+CHILDNAME+" for completing it today!"+
	"</pre>"+
	"<br>"
	//"<img src='Images/NinjaBattle.png' class='debriefimg' width='200'>"+
	//"<img src='Images/NinjaBattleC.png' width='200'>"+
	//"<img src='Images/NinjaBattleC2.png' width='200'>"

	ninjaBattle="<p class='debrief'>Today "+CHILDNAME+" got right back into the end of unit 5 with the massive 'Ninja Battle'!"+
	"<br>"+
	"<br>"+
	"Ninja Battle is a very large project, and "+CHILDNAME+" has done superbly to complete all of it today! "+CHILDNAME+" "+
	"had to create an avoidance game as an enemy ninja will be tossing shurikens towards "+hisher+" controlled character and the aim was to survive! This one is quite "+
	"the technical challenge so required many more steps than "+CHILDNAME+" is accustomed to."+
	"<br>"+
	"<br>"+
	"Firstly, "+heshe+" had to code our controlled ninja to move up and down with our arrows to ensure we could actually dodge something! Then "+CHILDNAME+" had "+
	"to code clones of the shuriken that will try and hit us! To do this, "+heshe+" had to place the shuriken object into our opponents hand, and then implement "+
	"our pointToObject and Rotation functions so that the shuriken follows our ninja!"+
	"<br>"+
	"<br>"+
	"To top off this session, "+CHILDNAME+" created a scoring system ! "+HESHE+" added in text, then call the label “score” and made it's description just a 0. In "+
	"order to display our score, "+CHILDNAME+" made a global variable called $this.scene.score and have it display on our text! IF the shurikens hit us, we would reduce "+
	"the score, but if we dodged them and they fell off the scene, we gained a point! Both times we would remove the shuriken object to preserve optimization in our game "+
	"<br>"+
	"<br>"+
	"Brilliant work from "+CHILDNAME+" on this project today! It's not easy to finish this one in one session, and "+heshe+" showed great focus to complete it all!"+
	"</pre>"+
	"<br>"
	//"<img src='Images/NinjaBattle.png' class='debriefimg' width='200'>"+
	//"<img src='Images/NinjaBattleC.png' width='200'>"+
	//"<img src='Images/NinjaBattleC2.png' width='200'>"

	candySortFULL = "<p class='debrief'>"+CHILDNAME+" jumped right back into "+hisher+" game creation with a new sorting game, Candy Sort!"+
	"<br>"+
	"<br>"+
	"Candy Sort is a game which tests our Ninjas problem solving skills, as we are presented with a very severe problem that requires a fast solution! An infinitely "+
	"spawning candy generator! These candies would spawn as either Yellow, Green or Red. We needed these candies to be placed down their correct chute to score points!. "+
	"If we missed and placed the wrong colour down a chute, we would lose points!"+
	"<br>"+
	"<br>"+
	"To do this "+CHILDNAME+" started by moving the candy towards the chutes. This was done by making an if statement connected to the X coordinate of the end of our conveyor "+
	"belt. If the candy was to the left of the end of the belt, it would move right. Then an else statement (so if the candy WAS at the end of the conveyor belt) it would move "+
	"down into the chute! This is a simple system but very handy for our precise movements into the chutes! "+CHILDNAME+" then controlled the chutes! When we pressed the left arrow, they would "+
	"all shift to the left and a 'chutes.colour' variable would change to 2 (green). This is how we will compare our active chute to the candy!"+
	"<br>"+
	"<br>"+
	"Once "+CHILDNAME+" had wired in all the arrows to move our chutes and change their colours, we needed to start spawning in the candies over and over! A timer was used to repeat "+
	"over and over at a random time, something we had covered back in unit 3 where our Ninjas popped in and out randomly for a whack a mole game! As these candies randomly "+
	"spawn in, they already start moving from our if statement we made before. We create a random number between 0 and 2, and use these to select either red, green or yellow. "+
	"<br>"+
	"<br>"+
	"Now back onto the candies code for the final step! Another if statement would check when the candy makes it to the Y coordinate of the chutes, and then remove it once it did "+
	"Then another if statement (inside this one!) Would check if the 'chutes.colour' equalled the 'candy.colour' if so, we gain 10 points! If not, the janitor of the factory wouldn't "+
	"be too pleased so we lose 50 points!!! This is a great all around game following on from Ninja Battle that "+CHILDNAME+" adapted to brilliantly, great work!"+
	"</p>"
	"<br>"
	//"<img src='Images/CandySort1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/CandySortC.png' width='200'>"+
	//"<img src='Images/CandySort2.png' width='200'>"

	candySort1 = "<p class='debrief'>"+CHILDNAME+" jumped right back into "+hisher+" game creation with a new sorting game, Candy Sort!"+
	"<br>"+
	"<br>"+
	"Candy Sort is a game which tests our Ninjas problem solving skills, as we are presented with a very severe problem that requires a fast solution! An infinitely "+
	"spawning candy generator! These candies would spawn as either Yellow, Green or Red. We needed these candies to be placed down their correct chute to score points!. "+
	"If we missed and placed the wrong colour down a chute, we would lose points!"+
	"<br>"+
	"<br>"+
	"To do this "+CHILDNAME+" started by moving the candy towards the chutes. This was done by making an if statement connected to the X coordinate of the end of our conveyor "+
	"belt. If the candy was to the left of the end of the belt, it would move right. Then an else statement (so if the candy WAS at the end of the conveyor belt) it would move "+
	"down into the chute! This is a simple system but very handy for our precise movements into the chutes! "+CHILDNAME+" then controlled the chutes! When we pressed the left arrow, they would "+
	"all shift to the left and a 'chutes.colour' variable would change to 2 (green). This is how we will compare our active chute to the candy!"+
	"<br>"+
	"<br>"+
	"Next lesson "+CHILDNAME+" will wire up "+hisher+" arrow keys to move the chutes around! Once the shutes have moved by enough, we change the active colour! Brillinat work today "+CHILDNAME+"! Keep up the focus, "+
	"you're doing great!"+
	"<br>"+
	"<br>"
	//"<img src='Images/CandySort1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/CandySortC.png' width='200'>"+
	//"<img src='Images/CandySort2.png' width='200'>"

	candySort2 = "<p class='debrief'>"+CHILDNAME+" jumped right back into "+hisher+" Candy Sort and finished it all off!"+
	"<br>"+
	"<br>"+
	"Firstly "+CHILDNAME+" had to wire in all the arrows to move our chutes and change their colours, we also needed to start spawning in the candies over and over! A timer was used to repeat "+
	"over and over at a random time, something we had covered back in unit 3 where our Ninjas popped in and out randomly for a whack a mole game! As these candies randomly "+
	"spawn in, they already start moving from our if statement we made before. We create a random number between 0 and 2, and use these to select either red, green or yellow. "+
	"<br>"+
	"<br>"+
	"Now back onto the candies code for the final step! Another if statement would check when the candy makes it to the Y coordinate of the chutes, and then remove it once it did "+
	"Then another if statement (inside this one!) Would check if the 'chutes.colour' equalled the 'candy.colour' if so, we gain 10 points! If not, the janitor of the factory wouldn't "+
	"be too pleased so we lose 50 points!!! This is a great all around game following on from Ninja Battle that "+CHILDNAME+" adapted to brilliantly, great work!"+
	"</p>"
	"<br>"
	//"<img src='Images/CandySort1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/CandySortC.png' width='200'>"+
	//"<img src='Images/CandySort2.png' width='200'>"

	starScape="<p class='debrief'>Here we used our knowledge of the remove function as well as our usage of coordinates to start thinking about properly implementing our new idea, "+
	"optimization! We had a nice rocket game that was cloning so so many stars that it started to slow our computers down! Tasked with trying to "+
	"fix our broken game we started to think about how we would want to remove our many stars. The way we thought of to do this is to remove them whenever "+
	"their x coordinate started to fall below zero! A very nice project that uses knowledge from different places to fix something that’s broken!"+
	"</pre>"+
	"<br>"
	//"<img src='Images/StarScape.png' class='debriefimg' width='200'>"

	spaceZapper="<p class='debrief'>Today was "+CHILDNAME+"'s first look at the && AND Operator! So far "+heshe+" has been using if statements for all of our code, and whilst that "+
	"can be very useful to link single conditions to our code, it does become very limiting! For this game we needed 2 conditions to be true in order "+
	"to run our code to delete our spaceships. They were firstly that our aliens were touching our beam, and also that the beam itself was visible! "+	
	"As the computer still knows that the invisible beam is touching the bugs, so it would look like they are being destroyed even when there is no "+
	"beam there! This is a nice simple way to get introduced into something that has endless possibilities and will be used a lot more throughout "+
	"yellow and especially in Orange too!"+
	"<br>"+
	"<br>"+
	"We carried on developing our space zapper game to really lock in the concepts that we have just learnt. We used our createTimer and "+
	"clone functions that we have used in previous games as well as if($this.()>800) { $this.remove() } to remove the enemy once it reached "+
	"the other side of the screen!"+
	"</pre>"+
	"<br>"
	//"<img src='Images/Zapper.png'class='debriefimg' width='200'>"

	starscapeZapper="<p class='debrief'>Today "+CHILDNAME+" created some space themed projects!!"+
	"<br>"+
	"<br>"+
	CHILDNAME+" used "+hisher+" knowledge of the remove function as well as our previous usage of coordinates to start thinking about properly implementing our new idea, "+
	"optimization! We had a nice rocket game that was cloning so so many stars that it started to slow our computers down! Tasked with trying to "+
	"fix our broken game we started to think about how we would want to remove our many stars. The way we thought of to do this is to remove them whenever "+
	"their x coordinate started to fall below zero! A very nice project that uses knowledge from different places to fix something that’s broken!"+
	"<br>"+
	"<br>"+
	"Then it was time for "+CHILDNAME+"'s first look at the && AND Operator! So far "+heshe+" has been using if statements for all of our code, and whilst that "+
	"can be very useful to link single conditions to our outputs in games, it does become very limiting for bigger games! For this game we needed 2 conditions to be true in order "+
	"to run our code to delete the enemy spaceships. They were firstly that our aliens were touching our beam, and also that the beam itself was visible! "+	
	"As the computer still knows that the invisible beam is touching the bugs, it ended up looking like the enemies are being destroyed even when there is no "+
	"beam there! This is a nice simple way to get introduced into something that has endless possibilities and will be used a lot more throughout "+
	"yellow and especially in Orange too! Great work "+CHILDNAME+"!"+
	"</pre>"+
	"<br>"

	wallBlaster="<p class='debrief'>Today we added a new and complex concept to "+CHILDNAME+"’s Ninja skillset! For loops! When we want the same code "+
	"to run more than once, we put it in a loop! For loops look complicated but can be broken down well as I did with "+CHILDNAME+" today. "+HESHE+" "+
	"took to it very well and listened keenly."+
	"<br>"+
	"<br>"+
	"This lesson was abit of a technical one, giving us a chance to thoroughly explain to "+CHILDNAME+"  how loops work with lots of practise! These are very useful,"+
	"especially as "+heshe+" continues to code in JavaScript, loops are even integral to the other programming languages we use like LUA and C#. So, if we can reinforce "+
	"them well now, "+CHILDNAME+" will have a brilliant foundation! "+
	"<br>"+
	"<br>"+
	"We used this new ability to create the basis of a game similar to the old school classic ‘Breakout’, "+CHILDNAME+" was working to code a row of bricks that respawn "+
	"into the game after being destroyed. Using loops here allows us to be efficient with our scripting and have some mechanics become autonomous. I went through how our "+
	"variable started at 1, checked if 1 was less than 9, then the variable increased to 2 and the loop started again. It would start over and over until it reached 10, "+
	"when the condition would no longer be true and our wall would have been made!"+
	"<br>"+
	"<br>"+
	"Well done today to "+CHILDNAME+" they have completed a very complex game here! "+
	"</pre>"+
	"<br>"
	//"<img src='Images/WallBlaster.png' class='debriefimg' width='200'>"+
	//"<img src='Images/WallBlasterC.png' width='200'>"+
	//"<img src='Images/WallBlaster12.png' width='200'>"


	liftOff="<p class='debrief'>Today "+CHILDNAME+" got to fly into space! (Well, at least as part of our test!). "+HESHE+" had to collect all 4 of our supplies "+
	"and we wanted our rocket to move up firing it's engine all the way! We used scores to tell the computer that each time we dragged a supply over "+
	"to the rocket we would add 1. We then had an if statement that would check when our score got up to 4, and only fire the engines when that had "+
	"happened! But here was the first time we got a look at GLOBAL variables, nicknames for code that apply in every object!"+
	"<br>"+
	"<br>"+
	"It would be no "+
	"use if our score only worked in one of the supplies as we would never be able to take off from this planet! "+CHILDNAME+" then added the code to the 3 other supplies and fired up the boosters into the galaxy! "+
	"This game is a great introduction into the very useful concept of Global Variables that we will be using much more in the end of yellow and throughout Orange! Great stuff "+CHILDNAME+"! "+
	"</pre>"+
	"<br>"
	//"<img src='Images/LiftOff.png'class='debriefimg' width='200'>"

	meteorsDeluxeFIRSTHALF="<p class='debrief'>"+CHILDNAME+" is very much in the end zone of Yellow Belt now, "+heshe+" has been tackling the penultimate project;'Meteors Deluxe'. "+
	"This game goes through lots of concepts covered throughout yellow and is very large with over 70 lines of codes in many different objects and events. "+
	"<br>"+
	"<br>"+
	"In this game we wanted our meteors to fly around whilst we tried to shoot them from our spaceship to split them into smaller and smaller clones. This game "+
	"starts from scratch with absolutely nothing in scene so we had to add all the code and all the objects ourselves. "+
	"<br>"+
	"<br>"+
	"To start, "+CHILDNAME+" had to design and import "+hisher+" own background along with the object assets that we will be coding from scratch, so this project "+
	"really does start from the ground up. To get the functionality off of the ground the next code created random speeds in the X and the Y coordinates and a "+
	"variable called “rot” which we will use for the rotation. The frameIndex will be randomized to show the different images of the meteor. Inside the meteors "+
	"update every frame event we now want our meteor to move and rotate at these random speeds we have made! We also had made sure our rock would never fall off the screen! "+
	"If it goes too far to the left, it resets back over to the right. If it gets too high, it teleports back to the floor."+
	"</pre>"+
	"<br>"
	//"<img src='Images/MeteorsDeluxe.png' class='debriefimg' width='200'>"+
	//"<img src='Images/MeteorsDeluxe2.png' width='200'>"+
	//"<img src='Images/MeteorsDeluxe3.png' width='200'>"

	meteorsDeluxeSECONDHALF="<p class='debrief'>This time around on 'Meteors Deluxe', "+CHILDNAME+" began by creating our bullet! Firstly "+heshe+" added a circle, changed "+
	"the circle's name to “bullet”. Then "+heshe+" changed the scaleX and scaleY of this “bullet” to 0.2. This new “bullet” was then "+
	"connected to our spaceShip so that when we press the spacebar, bullet.moving becomes true! And if bullet.moving is true, then move the bullet "+
	"forward By it's rotation! But now, If the bullet has not been fired we would like it to stay with the rocket. "+
	"<br>"+
	"<br>"+
	CHILDNAME+" had to state that if our bullet falls off the screen, we set bullet.moving to false. This will put the bullet back into the rocket and "+
	"get us ready to shoot again! Now for the last piece of the puzzle! We coded the meteor to split when shot! Blimey, that was a lot of code wasn't it!"+
	"<br>"+
	"<br>"+
	"Finishing this one is no mean feat and "+CHILDNAME+" has worked really hard to get it all finished. Brilliant work!!"+
	"</pre>"+
	"<br>"
	//"<img src='Images/MeteorsDeluxe.png' class='debriefimg' width='200'>"+
	//"<img src='Images/MeteorsDeluxe2.png' width='200'>"+
	//"<img src='Images/MeteorsDeluxe3.png' width='200'>"

	meteorsDeluxeFULL="<p class='debrief'>"+CHILDNAME+" is very much in the end zone of Yellow Belt now, "+heshe+" has been tackling the penultimate project;'Meteors Deluxe'. "+
	"This game goes through lots of concepts covered throughout yellow and is very large with over 70 lines of codes in many different objects and events. "+
	"<br>"+
	"<br>"+
	"In this game we wanted our meteors to fly around whilst we tried to shoot them from our spaceship to split them into smaller and smaller clones. This game "+
	"starts from scratch with absolutely nothing in scene so we had to add all the code and all the objects ourselves. "+
	"<br>"+
	"<br>"+
	"To start, "+CHILDNAME+" had to design and import "+hisher+" own background along with the object assets that we will be coding from nothing, so this project "+
	"really does start from the ground up. To get the functionality off of the ground the next code created random speeds in the X and the Y coordinates and a "+
	"variable called “rot” which we will use for the rotation. The frameIndex will be randomized to show the different images of the meteor. Inside the meteors "+
	"update every frame event we now want our meteor to move and rotate at these random speeds we have made! We also had made sure our rock would never fall off the screen! "+
	"If it goes too far to the left, it resets back over to the right. If it gets too high, it teleports back to the floor."+
	"<br>"+
	"Then we created our bullet! Firstly "+heshe+" added a circle, changed "+
	"the circle's name to “bullet”. Then "+heshe+" changed the scaleX and scaleY of this “bullet” to 0.2. This new “bullet” was then "+
	"connected to our spaceShip so that when we press the spacebar, bullet.moving becomes true! And if bullet.moving is true, then move the bullet "+
	"forward By it's rotation! But now, If the bullet has not been fired we would like it to stay with the rocket. "+
	"<br>"+
	"<br>"+
	CHILDNAME+" had to state that if our bullet falls off the screen, we set bullet.moving to false. This will put the bullet back into the rocket and "+
	"get us ready to shoot again! Now for the last piece of the puzzle! We coded the meteor to split when shot! Blimey, that was a lot of code wasn't it!"+
	"<br>"+
	"<br>"+
	"Finishing this one is no mean feat and "+CHILDNAME+" has worked really hard to get it all finished. Brilliant work!!"+
	"</pre>"+
	"<br>"
	//"<img src='Images/MeteorsDeluxe.png' class='debriefimg' width='200'>"+
	//"<img src='Images/MeteorsDeluxe2.png' width='200'>"+
	//"<img src='Images/MeteorsDeluxe3.png' width='200'>"

	bugInvadersHalf="<p class='debrief'>Today "+CHILDNAME+" was developing the final game in yellow belt! This project was one of the hardest games that "+heshe+" has "+
	"done. We took inspiration from the code we had in past games and used our initiative to adjust them for this project!"+
	"<br>"+
	"<br>"+
	"Similar to the previous project 'Meteors Deluxe', "+CHILDNAME+" had to follow an even more simple brief of instructions. We helped guide what "+
	"we wanted certain bits of code to do but not how to do it! This had "+himher+" really use some massive brain power to piece it all together! "+
	"<br>"+
	"<br>"+
	"Just like the classic game Space Invaders, we had a ninja that was shooting to stop the enemies from progressing from the top to the bottom of "+
	"the screen. The movement scheme was put together with either arrow key or WASD allocation to move left or right so we had the manoeuvrability to "+
	"zap the pesky bugs! "+HESHE+" then used Boolean logic to control a global variable that contained a function to move our bullet up the y axis. "+
	"This was coded by telling the game that whenever we press the spacebar, the bullet.moving variable will become true! "+
	"</p>"
	//"<img src='Images/bugInvaders.png' class='debriefimg' width='200'>"+
	//"<img src='Images/bugInvadersC1.png' width='200'>"+
	//"<img src='Images/bugInvadersC2.png' width='200'>"+
	//"<img src='Images/bugInvaders2.png' width='200'>"
	

	bugInvadersSecondHalf="<p class='debrief'>The bullet.moving variable variable from last session was today used in an if statement that got our bullet to go up the Y "+
	"axis with a moveY function. We also used this to great effect to ‘reload’ our weapon by stating if the variable is false, so if the bullet isn’t moving, we "+
	"put it back into our ninja's gun! "+
	"<br>"+
	"<br>"+
	"Now onto our final stage, coding this spooky bug! In order to make this game really fun and true, we needed a point system, as who doesn't love "+
	"getting a high score? "+CHILDNAME+" set it so that each bug would be worth a point when destroyed, but we also lose points if the bugs manage to pass a "+
	"certain coordinate point. "+HESHE+" also coded the collision system for this to work with conditionals, so that when the ‘bullet’ touched a "+
	"‘bug’ the bug would be removed from the game, appearing to have been destroyed. "+
	"<br>"+
	"<br>"+
	"Thinking back to the huge Rain Catcher project at the start of "+CHILDNAME+"'s Yellow Belt journey. "+HESHE+" again used the Y axis to move the bugs down the "+
	"screen just like how the bullet would travel up to them. Also, we had to ensure the bugs were on a timer to clone in periodically so we could keep "+
	"going to get more points! As, it wouldn't be very fun at all if it was just a lone Bug Invader."+
	"<br>"+
	"<br>"+
	"And there you have it! "+CHILDNAME+" has successfully recreated another age old classic. This project has definitely proved that "+heshe+" is ready to move "+
	"onto the orange belt, and to start even bigger projects! Super Super work today!! "+
	"</p>"
	//"<img src='Images/bugInvaders.png' class='debriefimg' width='200'>"+
	//"<img src='Images/bugInvadersC1.png' width='200'>"+
	//"<img src='Images/bugInvadersC2.png' width='200'>"+
	//"<img src='Images/bugInvaders2.png' width='200'>"+
	//"<img src='Images/bugInvadersCele.png' width='200'>"

	bugInvadersFULL="<p class='debrief'>Today "+CHILDNAME+" was developing the final game in yellow belt! This project was one of the hardest games that "+heshe+" has "+
	"done. We took inspiration from the code we had in past games and used our initiative to adjust them for this project!"+
	"<br>"+
	"<br>"+
	"Similar to the previous project 'Meteors Deluxe', "+CHILDNAME+" had to follow an even more simple brief of instructions. We helped guide what "+
	"we wanted certain bits of code to do but not how to do it! This had "+himher+" really use some massive brain power to piece it all together! "+
	"<br>"+
	"<br>"+
	"Just like the classic game Space Invaders, we had a ninja that was shooting to stop the enemies from progressing from the top to the bottom of "+
	"the screen. The movement scheme was put together with either arrow key or WASD allocation to move left or right so we had the manoeuvrability to "+
	"zap the pesky bugs! "+HESHE+" then used Boolean logic to control a global variable that contained a function to move our bullet up the y axis. "+
	"This was coded by telling the game that whenever we press the spacebar, the bullet.moving variable will become true! "+
	"<br>"+
	"this was then used in an if statement that got our bullet to go up the Y "+
	"axis with a moveY function if bullet.moving is true. We also used this to great effect to ‘reload’ our weapon by stating if the variable is false, "+
	"so if the bullet isn’t moving, we put it back into our ninja's gun! "+
	"<br>"+
	"<br>"+
	"Now onto our final stage, coding this spooky bug! In order to make this game really fun and true, we needed a point system, as who doesn't love "+
	"getting a high score? "+CHILDNAME+" set it so that each bug would be worth a point when destroyed, but we also lose points if the bugs manage to pass a "+
	"certain coordinate point. "+HESHE+" also coded the collision system for this to work with conditionals, so that when the ‘bullet’ touched a "+
	"‘bug’ the bug would be removed from the game, appearing to have been destroyed. "+
	"<br>"+
	"<br>"+
	"Thinking back to the huge Rain Catcher project at the start of "+CHILDNAME+"'s Yellow Belt journey. "+HESHE+" again used the Y axis to move the bugs down the "+
	"screen just like how the bullet would travel up to them. Also, we had to ensure the bugs were on a timer to clone in periodically so we could keep "+
	"going to get more points! As, it wouldn't be very fun at all if it was just a lone Bug Invader."+
	"<br>"+
	"<br>"+
	"And there you have it! "+CHILDNAME+" has successfully recreated another age old classic. This project has definitely proved that "+heshe+" is ready to move "+
	"onto the orange belt, and to start even bigger projects! Super Super work today!"+
	"</p>"
	//"<img src='Images/bugInvaders.png' class='debriefimg' width='200'>"+
	//"<img src='Images/bugInvadersC1.png' width='200'>"+
	//"<img src='Images/bugInvadersC2.png' width='200'>"+
	//"<img src='Images/bugInvaders2.png' width='200'>"+
	//"<img src='Images/bugInvadersCele.png' width='200'>"

	WANIshort = "<p class='debrief'> Today we had our first look at orange belt, it is noticeably harder than yellow, but "+CHILDNAME+" did incredibly well. "+
	"Completing the first half of "+hisher+" first large Orange Belt project is a big step in "+CHILDNAME+"'s coding adventure!"+
	"<br>"+
	"<br>"+
	" "+CHILDNAME+" got introduced in this game to how useful global variables will be going forward! We wanted a random Ninja to move up "+
	"then, once we clicked on it, make it move back down. We would then select a new random Ninja whilst keeping a score. For this we used a variable named  popUp  that "+
	"contained the position we wanted the ninja to move up to, which was 200 units above it's start position. Just below is an example of the code used to move the Ninja "+
	"up and down in the Y coordinate with both popUp and popDown."+
	"<br>"+
	"<br>"+
	"We find that this is a brilliant easer into more complex concepts as "+CHILDNAME+" will be familiar with this game somewhat, as it was used as a test in Yellow Belt. "+
	"The ability to revisit a project and improve it with advanced learning is not only good for progress but a great indicator of technical adaptability. This is often used in "+
	"Orange Belt as we look to reinforce many concepts from before whilst learning all the new things that can be done to make our games more complex and more FUN! Great work today "+CHILDNAME+"!"+
	"</p>"
	//"<img src='Images/WhackANinjaImproved.png' class='debriefimg' width='200'>"+
	//"<img src='Images/WhackANinjaImprovedC.png' width='200'>"+
	//"<img src='Images/WhackANinjaImproved2.png' width='200'>"

	WANIsecondhalf = "<p class='debrief'> Today "+CHILDNAME+" marked a huge milestone finishing "+hisher+" first Orange Belt project!"+
	"<br>"+
	"<br>"+
	"The game naturally grows into a test to face the computer in a progressively more complex sequence as "+CHILDNAME+" coded the ninja pop-ups to become faster whilst "+heshe+" added further alterations to "+
	"help or hinder the player. This is where the true brilliant nature of this projects seemingly basic objective arises. Throughout Yellow Belt, "+CHILDNAME+" has seen multiple "+
	"ways "+heshe+" can change game mechanics and will undoubtedly be aware of many of interesting mechanics to add! "+
	"<br>"+
	"<br>"+
	"What can begin as a relatively simplistic "+
	"‘whack a mole’ clone can be expanded with object speed variations for difficulty, different colour sprites or characters altogether that symbolise aids or punishments "+
	"when clicked and even the addition of a menu label to turn features on and off at will. This was fantastic as we really got to flex "+CHILDNAME+"'s creative mind and to see "+
	hisher+" tackle a prospective project upgrade in "+hisher+" own way so that we can really view "+hisher+" independent competency! Brilliant work today "+CHILDNAME+"! Looking forward to continuing the Orange Belt adventure soon!"+
	"</p>"
	//"<img src='Images/WhackANinjaImproved.png' class='debriefimg' width='200'>"+
	//"<img src='Images/WhackANinjaImprovedC.png' width='200'>"+
	//"<img src='Images/WhackANinjaImproved2.png' width='200'>"

	WANIlong =  "<p class='debrief'> Today we had our first look at orange belt, it is noticeably harder than yellow, but "+CHILDNAME+" did incredibly well. "+
	"Completing this first project is a big step in "+CHILDNAME+"'s coding adventure!"+
	"<br>"+
	"<br>"+
	" "+CHILDNAME+" got introduced in this game to how useful global variables will be going forward! We wanted a random Ninja to move up "+
	"then, once we clicked on it, make it move back down. We would then select a new random Ninja whilst keeping a score. For this we used a variable named  popUp  that "+
	"contained the position we wanted the ninja to move up to, which was 200 units above it's start position. Just below is an example of the code used to move the Ninja "+
	"up and down in the Y coordinate with both popUp and popDown."+
	"<br>"+
	"<br>"+
	"We find that this is a brilliant easer into more complex concepts as "+CHILDNAME+" will be familiar with this game somewhat, as it was used as a test in Yellow Belt. "+
	"The ability to revisit a project and improve it with advanced learning is not only good for progress but a great indicator of technical adaptability."+
	"<br>"+
	"<br>"+
	"This naturally grows into a test to face the computer in a progressively more complex sequence as the ninja pop-ups become faster and we have further alterations to "+
	"help or hinder us. This is where the true brilliant nature of this projects seemingly basic objective arises. Throughout Yellow Belt, "+CHILDNAME+" has seen multiple "+
	"ways we can change game mechanics and will undoubtedly be aware of many of "+hisher+" own from enjoying games. "+
	"<br>"+
	"<br>"+
	"What can begin as a relatively simplistic "+
	"‘whack a mole’ clone can be expanded with object speed variations for difficulty, different colour sprites or characters altogether that symbolise aids or punishments "+
	"when clicked and even the addition of a menu label to turn features on and off at will. This was fantastic as we really got to flex "+CHILDNAME+"'s creative mind and to see "+
	hisher+" tackle a prospective project upgrade in "+hisher+" own way so that we can really view "+hisher+" independent competency!"+
	"</p>"
	//"<img src='Images/WhackANinjaImproved.png' class='debriefimg' width='200'>"+
	//"<img src='Images/WhackANinjaImprovedC.png' width='200'>"+
	//"<img src='Images/WhackANinjaImproved2.png' width='200'>"

	dojoPracticeFirstHalf = "<p class='debrief'>Today "+CHILDNAME+" got right back into the swing of Orange Belt with Dojo Practice!"+
	"<br>"+
	"<br>"+
	"In this second game of orange belt an entirely new concept is introduced to "+CHILDNAME+" ! Arrays! Arrays are like lists that the computers "+
	"use to store data. This game was a memory game, where a set of animal pictures would change, then we had to click them in the correct order. "+CHILDNAME+" used the lists to "+
	"store a set of random numbers. Then, using these random numbers, we made the set of pictures change in order. "+
	"<br>"+
	"<br>"+
	"Using the lists we could then if the player clicks a button, does it match the random number stored? As you can see this is a very "+
	"complex project, "+CHILDNAME+" truly is becoming a coding master as "+heshe+" begins to tackle it! "+CHILDNAME+" has made the foundations of this project today being introduced "+
	"to all the new concepts on display, this project takes a lot of planning and setting up and once we have it all working fluidly "+CHILDNAME+" will start to see how these "+
	"complex ideas and concepts can be broken down into each of their chunks to create our games."+
	"</p>"
	//"<img src='Images/DojoPractice.png' class='debriefimg' width='200'>"+
	//"<img src='Images/DojoPracticeC.png'  width='200'>"+
	//"<img src='Images/DojoPracticeC2.png' width='200'>"

	dojoPracticeSecondHalf = "<p class='debrief'>Once again "+CHILDNAME+" has shown immense focus to complete the next step of our Array’s challenge! Building from "+
	"‘Dojo Practice’ in the last session, we got into the bulk of the project coding our functionality with the comparison of our lists. This naturally grows into a challenge "+
	"to face the computer in a progressively more complex game similar to Simon Says! This was fantastic as we really got to flex "+CHILDNAME+"’s creative mind and to see "+
	himher+" tackle a challenge in "+hisher+" own way, in both planning of the concept and execution of the code, so that we can really view "+hisher+" competency!"+
	"<br>"+
	"<br>"+
	"great job from "+CHILDNAME+" as this project is very large indeed! When we finished it we had a few bugs to clean up (as expected!) and it made into another great lesson "+
	"as we looked into why our game wasnt working as we wanted it to and what code must be incorrect. This is always going to be a skill we want to keep up and it was great "+
	"to test it when our buttons decided to record our inputs! "+CHILDNAME+" was listening intently as I explained the reasons behind this and did brilliantly at spotting the errors!"+
	"</p>"
	//"<img src='Images/DojoPractice.png' class='debriefimg' width='200'>"+
	//"<img src='Images/DojoPracticeC.png'  width='200'>"+
	//"<img src='Images/DojoPracticeC2.png' width='200'>"

	dojoPracticeFULL = "<p class='debrief'>Today "+CHILDNAME+" got right back into the swing of Orange Belt with 'Dojo Practice'!"+
	"<br>"+
	"<br>"+
	"In the second game of orange belt an entirely new concept was introduced! Arrays! Arrays are like lists that the computers "+
	"use to store data. This game was a memory game, where a animal pictures would change, then we had to click them in the correct order. "+CHILDNAME+" used the lists to "+
	"store a set of random numbers. Then, using these random numbers, we made the pictures change in order. "+
	"<br>"+
	"<br>"+
	"Using the lists, we could then check whenever the player clicks a button, that it matches the random number stored - complicated stuff! As you can see this is a very "+
	"complex game, "+CHILDNAME+" is truly becoming a coding masters as they tackle this project! "+CHILDNAME+" finished all of Dojo Practice which is a brilliant testament to "+
	"how far "+heshe+" has come since white belt! 50 lines of code is a very large amount to get through and the focus "+CHILDNAME+" showed was fantastic today. This game once "+
	"finished is a great tool to look deep into how massive complex lines of code, when broken down into each of their components, can be understood. "+
	"<br>"+
	"<br>"+
	"great job from "+CHILDNAME+" as this project is very large indeed! When we finished it we had a few bugs to clean up (as expected!) and it made into another great lesson "+
	"as we looked into why our game wasnt working as we wanted it to and what code must be incorrect. This is always going to be a skill we want to keep up and it was great "+
	"to test it when our buttons decided to record our inputs! "+CHILDNAME+" was listening intently as I explained the reasons behind this and did brilliantly at spotting the errors!"+
	"<br>"+
	"<br>"+
	"A lot of planning and "+
	"setup went into this game and thats a great introduction into how most of our Orange Belt games will go, as with the life of a programmer! Great work "+CHILDNAME+"!!!"+
	"</p>"
	//"<img src='Images/DojoPractice.png' class='debriefimg' width='200'>"+
	//"<img src='Images/DojoPracticeC.png' width='200'>"+
	//"<img src='Images/DojoPracticeC2.png' width='200'>"

	shurikenDodgefirsthalf = "<p class='debrief'>Shuriken dodge is a game where we try to control an avatar to dodge falling shurikens from the sky. "+CHILDNAME+" is tasked with "+
	"making these fall faster and faster as the game goes on! This was done by, firstly, cloning our shurikens and then incrementing (adding 1 to) a global variable. Once "+
	"this variable got to a certain number, we reset it to 0 and increased the speed of the shurikens!"+
	"<br>"+
	"<br>"+
	CHILDNAME+" was also introduced into the Game Development Programs “Avatar”! This is how we can creatively and artistically set up new characters, avatars and "+
	"scenes for our projects. This really gets "+CHILDNAME+" into the mindset of project work as each stage of production will have a significant undertaking that needs "+
	"focus. So, our Avatar was pre programmed to move as we have done in the previous belts but has some nice costumes too, we will be using this little guy a few more "+
	"times on Orange but loads in Green belt! This game uses lots of concepts covered before and combines it with these new ones. "+
	"<br>"+
	"<br>"+
	"Adding in the Avatar along with the shuriken sets "+CHILDNAME+" up with the base of the game, but not much else! "+HESHE+" then went on to coding the shuriken to begin falling "+
	"at a standard speed, similar to some Yellow Belt games. This time however, the speed was set by a variable, this way we can change the variables value to change the speed of the timer! "+
	"Timer manupulation can be complex, and will take a lot of covering next lesson! Fantastic work today "+CHILDNAME+", looking forward to seeing you in again soon!"+
	"</p>"
	//"<img src='Images/ShurikenDodge.png' class='debriefimg' width='200'>"+
	//"<img src='Images/ShurikenDodgeC.png' width='200'>"+
	//"<img src='Images/ShurikenDodge1.png' width='200'>"

	shurikenDodgesecondhalf = "<p class='debrief'>"+CHILDNAME+" jumped straight back into their project from last lesson, and completed the rest of it today! Great work!"+
	"<br>"+
	"<br>"+
	"We had already set up the avatar and the shuriken to fall, but this made for a simple game of falling shurikens that didnt do too much even if they hit us! The first "+
	"thing to do, was to make them fall faster and faster as the game goes on! This variable difficulty is used in a lot of games and makes for a much nicer experiecne "+
	"as the game gets harder as you get better at it! To do this, we had to change the variable "+CHILDNAME+" entered into the timer which the shurikens were spawning from."+
	"<br>"+
	"<br>"+
	"To do this everytime 3 shurikens had spawned, we needed an in statement with a temporary 'score', "+CHILDNAME+" did really well here and used "+hisher+" yellow belt knowledge "+
	"to put this in! We created a variable called 'ShurikenCount' and "+CHILDNAME+" added one to it everytime a shuriken was made. If this number got to 3, we reduced the timer variable and reset 'ShurikenCount'! "+
	"That way, it all gets faster every time 3 shurikens spawn! Lastly, "+CHILDNAME+" restarted the timer by placing it inside a function and calling this function when we had "+
	"spawned 3 shurikens, so it kept spawning! Great work today "+CHILDNAME+" keep it up!"+
	"</p>"
	//"<img src='Images/ShurikenDodge.png' class='debriefimg' width='200'>"+
	//"<img src='Images/ShurikenDodgeC.png' width='200'>"+
	//"<img src='Images/ShurikenDodge1.png' width='200'>"

	shurikenDodge = "<p class='debrief'>Shuriken dodge is a game where we try to control an avatar to dodge falling shurikens from the sky. "+CHILDNAME+" is tasked with "+
	"making these fall faster and faster as the game goes on! This was done by, firstly, cloning our shurikens and then incrementing (adding 1 to) a global variable. Once "+
	"this variable got to a certain number, we reset it to 0 and increased the speed of the shurikens. In this code example, when the starCount gets up to 3, we set the "+
	"starCount back to 0, increase the spawn timer and increase the shuriken speed! We also added a “alert” which made our score show up in a google chrome notification "+
	"when we lose! Very nice! "+
	"<br>"+
	"<br>"+
	"This game is a great technical introduction into how to create our timers that are not just simply set to run at one time over and over. Introducing "+CHILDNAME+" "+
	"into a concept and then building on it over and over is a great way to reinforce them and learn. Our  timers used to run every X number of miliseconds, now they run "+
	"based on the value of a variable that "+CHILDNAME+" created, so we can then adjust this variable as time goes on, making our game harder and harder!"+
	"<br>"+
	"<br>"+
	CHILDNAME+" was also introduced into the Game Development Programs “Avatar”! This is how we can creatively and artistically set up new characters, avatars and "+
	"scenes for our projects. This really gets "+CHILDNAME+" into the mindset of project work as each stage of production will have a significant undertaking that needs "+
	"focus. So, our Avatar was pre programmed to move as we have done in the previous belts but has some nice costumes too, we will be using this little guy a few more "+
	"times on Orange but loads in Green belt! This game uses lots of concepts covered before and combines it with these new ones. Great job "+CHILDNAME+", you’re "+
	"starting to get into the swing of Orange now!"+
	"</p>"
	//"<img src='Images/ShurikenDodge.png' class='debriefimg' width='200'>"+
	//"<img src='Images/ShurikenDodgeC.png' width='200'>"+
	//"<img src='Images/ShurikenDodge1.png' width='200'>"

	ninjaRacefirsthalf = "<p class='debrief'>Movement is the key in this Ninja Race, or at least the illusion of it! Here "+CHILDNAME+" got to learn about parallax scrolling! Our bike would "+
	"stay still the whole time, but we would be moving the background instead. That way everything on the scene would appear still as our biker travelled through, but it "+
	"was actually the opposite! To do this we cloned our background and set it to constantly move down at a speed we could change, then when it hits the bottom it would "+
	"jump back to the top! We also had our first look at custom functions here too for our opponents movement!"+
	"<br>"+
	"<br>"+
	"Many arcade games use this feature and its great to start to show "+CHILDNAME+" how to spot it being used! Once you learn about it it's very easy to see how often 'parallax' "+
	"is used in media. By making a background scroll along it is simple to make the illusion that something is moving forever, often this can be found in arcade games but even in "+
	"advertising and websites too! "+CHILDNAME+" found out today that it is a very simple concept to code but it made for a great tool in our race!"+
	"<br>"+
	"<br>"+
	"Next lesson "+CHILDNAME+" will be adding in some boosts to impact both the road speed and the speed of our opponent! These are going to be using a function with custom parameters "+
	"for the first time! Back in white belt we would say 'spin(star,10);' with 'star' being the object parameter and '10' being the speed parameter. In Ninja race we will be using parameters "+
	"to shorten down our code and allow us to enter into the function: 'BoostArrow' or 'Mud' and that would change wether the road gets faster or slower! Great work today "+CHILDNAME+", keep it "+
	"up and we can finish this all off next lesson!"
	//"<img src='Images/NinjaRace.png' class='debriefimg' width='200'>"+
	//"<img src='Images/NinjaRaceC.png' width='200'>"+
	//"<img src='Images/NinjaRace2.png' width='200'>"+
	//"<img src='Images/NinjaRaceC1.png' width='200'>"

	ninjaRacesecondhalf = "<p class='debrief'>Today "+CHILDNAME+" got straight back into Ninja race and finished it all off! Great work "+CHILDNAME+"!"+
	"<br>"+
	"<br>"+
	"This session was all about implementing our powerups to alter the games momentum, "+CHILDNAME+" had a green boost arrow that would speed the road variable up and a patch of mud that slowed "+
	"it down upon collision! We used a 'hittable' variable which we made true whenever the mud or arrow spawned in, and we made false the moment it made contact with the bike. "+
	"This way, even though our if statement is checking 30 times a second if we hit the mud, it will only run once as we turn 'hittable' off after to first hit! "+
	"<br>"+
	"<br>"+
	"When the boost is hit, we run a function that "+CHILDNAME+" named 'getPowerup', this function also used a parameter for the object. If we hit the mud, we put 'mud' in the brackets of "+
	"the function, like this: 'getPowerup(mud);' and over in the function itself, the name of that 'mud' becomes 'object' - Magic! "+CHILDNAME+" then coded the 'object' to move to a new random "+
	"place, and increase or decrease the score depending on an if statement checking if 'object'=='mud' or 'boost'! Great work today "+CHILDNAME+" keep up the great Orange Belt work, you are doing brilliantly!"
	//"<img src='Images/NinjaRace.png' class='debriefimg' width='200'>"+
	//"<img src='Images/NinjaRaceC.png' width='200'>"+
	//"<img src='Images/NinjaRace2.png' width='200'>"+
	//"<img src='Images/NinjaRaceC1.png' width='200'>"
	
	ninjaRace = "<p class='debrief'>Movement is the key in this Ninja Race, or at least the illusion of it! Here "+CHILDNAME+" got to learn about parallax scrolling! Our bike would "+
	"stay still the whole time, but we would be moving the background instead. That way everything on the scene would appear still as our biker travelled through, but it "+
	"was actually the opposite! To do this we cloned our background and set it to constantly move down at a speed we could change, then when it hits the bottom it would "+
	"jump back to the top! We also had our first look at custom functions here too for our opponents movement!"+
	"<br>"+
	"<br>"+
	"Many arcade games use this feature and its great to start to show "+CHILDNAME+" how to spot it being used! Once you learn about it it's very easy to see how often 'parallax' "+
	"is used in media. By making a background scroll along it is simple to make the illusion that something is moving forever, often this can be found in arcade games but even in "+
	"advertising and websites too! "+CHILDNAME+" found out today that it is a very simple concept to code but it made for a great tool in our race!"+
	"<br>"+
	"<br>"+
	"We even implemented some powerups to alter the games momentum, "+CHILDNAME+" had a green boost arrow that would speed the road variable up and a patch of mud that slowed "+
	"it down upon collision! We used a 'hittable' variable which we made true whenever the mud spawned in, and we made false the moment it made contact with the bike. "+
	"This way, even though our if statement is checking 30 times a second if we hit the mud, it will only run once as we turn 'hittable' off after to first hit! "+
	"This really rounds out a game as even simple changes can make these projects really begin to feel interactive and this focus on "+
	"detail and mechanics will be carried forward and built upon throughout Orange Belt. Great stuff today "+CHILDNAME+
	"</p>"
	//"<img src='Images/NinjaRace.png' class='debriefimg' width='200'>"+
	//"<img src='Images/NinjaRaceC.png' width='200'>"+
	//"<img src='Images/NinjaRace2.png' width='200'>"+
	//"<img src='Images/NinjaRaceC1.png' width='200'>"
	
	ballToss = "<p class='debrief'> Today "+CHILDNAME+" developed Ball Toss which is a brilliant all around game introducing "+himher+" to the use of gravity in our code as well as the usefulness of creating our "+
	"custom functions! "+CHILDNAME+" was tasked with firing a cannonball towards a basket when the spacebar is pressed. The speed and direction of the ball will be taken from the position of the mouse "+
	"relative to the cannon. "+
	"<br>"+
	"<br>"+
	"Once the speed was taken from wherever the mouse’s position was when the spacebar was pressed, we gave it to the ball! Although this would look a little boring and strange with the cannonball "+
	"just flying towards the mouse in a straight line. To change this we added a new speed every single frame to the Y direction. There are roughly 30~ frames per second in our games, so even if our "+
	"gravity was only a small number, it would be added 30 times every single second to our object!"+
	"<br>"+
	"<br>"+
	"This makes our object slowly start to fall back down to earth in a nice arc looking very natural and also making the game have an added level of difficulty! Once we got all the code finished to "+
	"move around our ball towards the basket we made the game a little harder still! We added in some simple code to get our basket moving around to make this game much more addictive!"+
	"<br>"+
	"<br>"+
	"Adding artificial gravity and projectile arcs into games is something integral to anything physics based. Some of the most popular games ever on the IOS or Android app stores are considerably basic "+
	"concepts with implemented physics which goes to show how popular these hyper casual games can be, if "+CHILDNAME+" created one and monetized it in the future "+heshe+" could take you both away on many holidays! "+	
	"</p>"
	//"<img src='Images/BallToss.png' class='debriefimg' width='200'>"+
	//"<img src='Images/BallTossC.png' width='200'>"+
	//"<img src='Images/BallToss2.png' width='200'>"

	ballTossFirstHalf = "<p class='debrief'> Today "+CHILDNAME+" started off learning a new concept in a new game, Ball Toss!"+
	"<br>"+
	"<br>"+
	"Ball Toss is a brilliant all around game introducing "+CHILDNAME+" to the use of gravity in our code as well as the usefulness of creating our "+
	"own custom functions! "+CHILDNAME+" was tasked with firing a cannonball towards a basket when the spacebar is pressed. The speed and direction of the ball will be taken from the position of the mouse "+
	"relative to the cannon at the exact time we make the shot!"+
	"<br>"+
	"<br>"+
	"Once the speed was taken from wherever the mouse’s position was when the spacebar was pressed, we gave it to the ball! Although this would look a little boring and strange with the cannonball "+
	"just flying towards the mouse in a straight line. To change this we added a new speed every single frame to the Y direction. There are roughly 30~ frames per second in our games, so even if our "+
	"gravity was only a small number, it would be added 30 times every single second to our object!"+
	"<br>"+
	"<br>"+
	"This is a great start to this project today "+CHILDNAME+"! Completing the main gravity concept we now need to work on making this game have more game like moving our basket around and getting a score system!"+
	"</p>"
	//"<img src='Images/BallToss.png' class='debriefimg' width='200'>"+
	//"<img src='Images/BallTossC.png' width='200'>"+
	//"<img src='Images/BallToss2.png' width='200'>"

    ballTossSecondHalf = "<p class='debrief'>"+CHILDNAME+" jumped straight back into Ball Toss today and finished it all off! Great work today!"+
	"<br>"+
	"<br>"+
	"Last session "+CHILDNAME+" had already created the gravity strength and applied it to the ball for every frame it was in the air. This makes our object slowly start to fall back down to earth in a nice "+
	"arc looking very natural and also added a level of difficulty! Once we got all the code finished to "+
	"move around our ball towards the basket we now had to make the game a little harder still! "+
	"<br>"+
	"<br>"+
	"We added in some simple code to get our basket moving around in random directions to make this game much more addictive and prevent the player just holding the mouse in the same place! If the basket didn't randomly move "+
	"you could just hold the mouse in the same place and press space over and over to ensure perfect hits every time! Now the player has to think about how to get new points in the score system we also made today!"+
	"<br>"+
	"<br>"+
	"Adding artificial gravity and projectile arcs into games is something integral to anything physics based. Some of the most popular games ever on the IOS or Android app stores are considerably basic "+
	"concepts with implemented physics which goes to show how popular these hyper casual games can be, if "+CHILDNAME+" created one and monetized it in the future "+heshe+" could take you both away on many holidays! Great work "+CHILDNAME+	
	"</p>"
	//"<img src='Images/BallToss.png' class='debriefimg' width='200'>"+
	//"<img src='Images/BallTossC.png' width='200'>"+
	//"<img src='Images/BallToss2.png' width='200'>"

	circusBounce = "<p class='debrief'>Circus Bounce is not only a great technical challenge, but also our last game of Orangebelt!! There's been a lot of new concepts, "+
	"over a thousand lines of code and a lot of fun games created and played! "+CHILDNAME+" had to do a lot of this "+
	"one "+himher+"self just like the bug invaders game, the last one of yellow belt!"+
	"<br>"+
	"<br>"+
	"We firstly coded our trampoline to follow the mouse! The code uses the getPointerPos, which will get the coordinate position of our mouse, to move the trampoline! "+
	"The rest of our code was inside the Ninja to have "+himher+" interact with our scene for the game! Firstly, we make $this.speedX a random value between whatever "+CHILDNAME+
	" chooses, to start off our Ninja moving from left to right."+
	"<br>"+
	"<br>"+
	"We also coded the game to increase the falling speed of our ninja by the value of a gravity variable. If gravity was 4, then every frame the Y speed increases by 4! "+
	CHILDNAME+" also made the ninja spin in the air over time to look more realistic! Finally we moved onto making our ninja bounce! A simple isTouching function checking "+
	"if we touch the trampoline. if it does, the vertical axis speed would be increased to make the ninja bounce back up! This way the Ninja moves along to the right, does loads of spinning somersaults and bounces off the trampoline! "+
	"<br>"+
	"<br>"+
	"Finally, "+CHILDNAME+" made the ninja reset back to the middle of the screen if he fell off the trampoline or bounced too far off screen! This is so we can keep "+
	"the fun going on and on to get those high scores! Many more challenges await on the Green Belt path for our ninja, but we are sure "+heshe+" is ready for the next level! HI-YAH! "+
	"</p>"	
	//"<img src='Images/CircusBounce.png' class='debriefimg' width='200'>"+
	//"<img src='Images/OddBall2.png' width='200'>"+
	//"<img src='Images/CircusBounceC.png' width='200'>"

	circusBounceFirstHalf = "<p class='debrief'>"+CHILDNAME+" is finally here! The final game of Orange Belt! This is a massive project and "+heshe+" has completed much of it today!"+
	"<br>"+
	"<br>"+
	"There's been a lot of new concepts, "+
	"over a thousand lines of code and loads of fun games created and played to get up to here! "+CHILDNAME+" had to do a lot of this "+
	"one "+himher+"self just like the bug invaders game, the last one of yellow belt!"+
	"<br>"+
	"<br>"+
	"We firstly coded our trampoline to follow the mouse! The code uses the getPointerPos function, which will get the coordinate position of our mouse, to move the trampoline! "+
	"The rest of our code was inside the Ninja to have "+himher+" interact with our scene for the game! Firstly, "+CHILDNAME+" made the $this.speedX of the Ninja a random value between whatever numbers "+CHILDNAME+
	" chooses, to start off our Ninja moving from left to right."+
	"<br>"+
	"<br>"+
	"We also coded the game to increase the falling speed of our ninja by the value of a gravity variable. If gravity was 4, then every frame the Y speed increases by 4! "+
	CHILDNAME+" also made the ninja spin in the air over time to look more realistic! Finally we moved onto making our ninja bounce! A simple isTouching function checking "+
	"if we touch the trampoline. if it does, the vertical axis speed would be increased to make the ninja bounce back up! This way the Ninja moves along to the right, does loads of spinning somersaults and bounces off the trampoline! "+
	"<br>"+
	"<br>"+
	"This is great work so far but next lesson we need to add an objective to the game! There will be hoops to jump through and score to be lost if we miss the trampoline! Great work so far "+CHILDNAME+"! Keep it up!"+
	"</p>"	
	//"<img src='Images/CircusBounce.png' class='debriefimg' width='200'>"+
	//"<img src='Images/OddBall2.png' width='200'>"+
	//"<img src='Images/CircusBounceC.png' width='200'>"

	circusBounceSecondHalf = "<p class='debrief'>"+CHILDNAME+" has done it! Amazing job! The final game of Orange Belt is completed!!!"+
	"<br>"+
	"<br>"+
	"Continuing from last lesson, "+CHILDNAME+" made the ninja reset back to the middle of the screen if he fell off the trampoline or bounced too far off screen! This is so we can not only keep "+
	"the fun going on to get those high scores, but to have a challenge that reduces our score if we mess up!"+
	"<br>"+
	"<br>"+
	"So, about those scores! "+CHILDNAME+" created a function that would spawn in hoops whenever the Ninja made it to the far side of the screen. This was done with very little input from myself as "+
	CHILDNAME+" followed the challenge brilliantly and used a simple for loop which ran 3 times and spawned in our hoops! These were placed inside a function to allow us to easily spawn new hoops whenever "+CHILDNAME+" needed to."+
	"<br>"+
	"<br>"+
	"The player would spawn a hoop when they made it to the end of the screen using the trampoline, or when the player collects a hoop! This gives a never ending supply of hoops for the player to collect! The longer the game goes on, the more hoops there are! "+
	"Amazing work today "+CHILDNAME+", its been great watching you grow in the Dojo with us and to see you get up to Green Belt is amazing! Keep up the great work and we are all so proud!"+
	"</p>"	
	//"<img src='Images/CircusBounce.png' class='debriefimg' width='200'>"+
	//"<img src='Images/OddBall2.png' width='200'>"+
	//"<img src='Images/CircusBounceC.png' width='200'>"


    hangmanFirstHalf = "<p class='debrief'>Hangman! A very identifiable classic that I'm sure most children have played in their lifetime. Now "+CHILDNAME+" gets "+hisher+" brain "+
	"flowing by building it from the ground up!"+
	"<br>"+
	"<br>"+
	"Re-creating Hangman uses lots of problem solving abilities and is a fantastic tool to brush up on all the different skills we’ve been learning so far in Orange Belt! Firstly, "+
	"we use our knowledge of arrays and variables to randomly select a word from our array, then we want to display it as a bunch of question marks! "+
	"<br>"+
	"<br>"+
	"To do this "+CHILDNAME+" created a for loop and connected the condition to the length of the random word, so it would loop as many times as there were letters in the word! "+
	"Everytime it ran, we added a question mark. This would fill our text with “?” equal to the activeWord’s length! If we select a 3 letter word, we get 3 “???”. "+
	"Lovely stuff! We will continue with the sorting functions next lesson to get it all finished and ready to start guessing! "+
	"</p>"
	//"<img src='Images/Hangman.png' class='debriefimg' width='200'>"+
	//"<img src='Images/HangmanC.png' width='200'>"+
	//"<img src='Images/HangmanC2.png' width='200'>"

	hangmanSecondHalf = "<p class='debrief'> Our final step of building Hangman can be quite complex but it is a brilliant game to build from scratch as it is so widely known and "+
	"the techniques required closely align with where "+CHILDNAME+" is in our Orange curriculum. Firstly, we use our knowledge of arrays and variables to randomly select a word to "+
	"use for our array, then a for loop to display that word as question marks! "+
	"<br>"+
	"<br>"+
	"We then built our own custom function to check all the letters in our word and see if we have clicked the correct one! It would use a for loop and check if every letter was equal "+
	"to our own parameter called “letterweclick”. If it was, we would display it. if it wasn't, we would leave it as a question mark and check the next letter! "+
	"A very complex game which with the right guidance can be broken down into it's easier to understand segments. Brilliant work completing this very tough one Ninja! "+
	"</p>"
	//"<img src='Images/Hangman.png' class='debriefimg' width='200'>"+
	//"<img src='Images/HangmanC.png' width='200'>"+
	//"<img src='Images/HangmanC2.png' width='200'>"

	hangmanFULL = "<p class='debrief'>Hangman! A very identifiable classic that I'm sure most children have played in their lifetime. Now "+CHILDNAME+" gets "+hisher+" brain "+
	"flowing by building it from the ground up!"+
	"<br>"+
	"<br>"+
	"Re-creating Hangman uses lots of problem solving abilities and is a fantastic tool to brush up on all the different skills we’ve been learning so far in Orange Belt! Firstly, "+
	"we use our knowledge of arrays and variables to randomly select a word from our array, then we want to display it as a bunch of question marks! "+
	"<br>"+
	"<br>"+
	"To do this "+CHILDNAME+" created a for loop and connected the condition to the length of the random word, so it would loop as many times as there were letters in the word! "+
	"Everytime it ran, we added a question mark. This would fill our text with “?” equal to the activeWord’s length! If we select a 3 letter word, we get 3 “???”. "+
	"Lovely stuff!"+
	"<br>"+
	"<br>"+
	"We then built our own custom function to check all the letters in our word and see if we have clicked the correct one! It would use a for loop and check if every letter was equal "+
	"to our own parameter called “letterweclick”. If it was, we would display it. if it wasn't, we would leave it as a question mark and check the next letter! "+
	"A very complex game which with the right guidance can be broken down into it's easier to understand segments. Brilliant work completing this very tough one Ninja! "+
	"</p>"
	//"<img src='Images/Hangman.png' class='debriefimg' width='200'>"+
	//"<img src='Images/HangmanC.png' width='200'>"+
	//"<img src='Images/HangmanC2.png' width='200'>"
	

	dungeonEscapeFirstHALF = "<p class='debrief'>"+CHILDNAME+" has been laying the foundations of a new project today. In this game I showed "+CHILDNAME+" a great "+
	"new skill to use, nested loops! Nested loops are for loops inside for loops, sounds confusing! In reality they arent too bad and we mainly use them to "+
	"create grids! One for loop will create clones of rows, and the other will create clones of columns."+
	"<br>"+
	"<br>"+
	"Today we used this concept to create a maze of walls, firstly we made the nested loop to create a massive grid filled with walls. Then we introduced an if "+
	"statement that would make walls only spawn in 30%~ of the time. This was done by the code 'if(random(10,0) < 3)', so if a random number between 0 and 10 was "+
	"less than 3, we would spawn a clone. This way our maze would be random every single time. These foundations of dungeon escape will be built upon in the next "+
	"lesson  to finish the new concept of switch cases we have been working on."+
	"<br>"+
	"<br>"+
	"Brilliant work today "+CHILDNAME+", lets finish this project off next lesson!"+
	"</p>"
	//"<img src='Images/DungeonEscape.png' class='debriefimg' width='200'>"+
	//"<img src='Images/DungeonEscapeC.png' width='200'>"+
	//"<img src='Images/DungeonEscape1.png' width='200'>"

	dungeonEscapeSecondHALF = "<p class='debrief'>"+CHILDNAME+" finished off Dungeon Escape today! Once again we got into coding in a new concept, switch cases! "+
	"they are a great new skill to use, essentially another form of conditionals like if statements and if else statements. Switch statements are used to perform "+
	"different actions based on many different conditions! So, this way we can have a nice case list of options that executed if there is a match, and skipped onto "+
	"the next case if there wasnt!"+
	"<br>"+
	"<br>"+
	"For Dungeon Escape we used these 'switch cases' to move our ninja up, down, left & right. Whenever we pressed an arrow key, we would store that input inside a "+
	"variable. We used this variable in a switch case checking what was stored inside it, for example if the upkey was stored in there, move the ninja up. This was "+
	"very useful when it came to bumping into our walls! If the ninja was touching the wall, we would get the same global variable, and if it contained 'rightkey' "+
	"bump the ninja to the left, if it contained 'upkey' we would bump the ninja down! Complicated stuff! Great work to "+CHILDNAME+" today as we even got to add in "+
	"some nice functionality by requiring the player to collect a coin in the maze before we could escape. Brilliant stuff!"+
	"</p>"
	//"<img src='Images/DungeonEscape.png' class='debriefimg' width='200'>"+
	//"<img src='Images/DungeonEscapeC.png' width='200'>"+
	//"<img src='Images/DungeonEscape1.png' width='200'>"

	dungeonEscapeFULL="<p class='debrief'>"+CHILDNAME+" started today laying the foundations of a new project. In Dungeon Escape I showed "+CHILDNAME+" a great "+
	"new skill to use, nested loops! Nested loops are for loops inside for loops, sounds confusing! In reality they arent too bad and we mainly use them to "+
	"create grids! One for loop will create clones of rows, and the other will create clones of columns."+
	"<br>"+
	"<br>"+
	"Today we used this concept to create a maze of walls, firstly we made the nested loop to create a massive grid filled with walls. Then we introduced an if "+
	"statement that would make walls only spawn in 30%~ of the time. This was done by the code 'if(random(10,0) < 3)', so if a random number between 0 and 10 was "+
	"less than 3, we would spawn a clone. This way our maze would be random every single time."+
	"<br>"+
	"<br>"+
	CHILDNAME+" finished off Dungeon Escape today by once again coding in a new concept, switch cases! "+
	"they are a great new skill to use, essentially another form of conditionals like if statements and if else statements. Switch statements are used to perform "+
	"different actions based on many different conditions! So, this way we can have a nice case list of options that executed if there is a match, and skipped onto "+
	"the next case if there wasnt!"+
	"<br>"+
	"<br>"+
	"For Dungeon Escape we used these 'switch cases' to move our ninja up, down, left & right. Whenever we pressed an arrow key, we would store that input inside a "+
	"variable. We used this variable in a switch case checking what was stored inside it, for example if the upkey was stored in there, move the ninja up. This was "+
	"very useful when it came to bumping into our walls! If the ninja was touching the wall, we would get the same global variable, and if it contained 'rightkey' "+
	"bump the ninja to the left, if it contained 'upkey' we would bump the ninja down! Complicated stuff! Great work to "+CHILDNAME+" today as we even got to add in "+
	"some nice functionality by requiring the player to collect a coin in the maze before we could escape. Brilliant stuff!"+
	"</p>"
	//"<img src='Images/DungeonEscape.png' class='debriefimg' width='200'>"+
	//"<img src='Images/DungeonEscapeC.png' width='200'>"+
	//"<img src='Images/DungeonEscape1.png' width='200'>"

	scrambleFirstHALF="<p class='debrief'>Today "+CHILDNAME+" finished all of the base of our Scramble Array Project!"+
	"<br>"+
	"<br>"+
	"In Scramble "+CHILDNAME+" got started by using the concept we had covered before in Dungeon Escape, Nested Loops! We used this here "+
	"to create a new grid of cards. We also assigned each of these cards a number from a shuffled array. These numbers were 8 pairs of numbers, so each of our cards "+
	"had a matching pair somewhere in the grid! Our job was to match these up! We stored a variable inside each card equal to the order they were cloned in. This is how we use arrays "+
	"a lot like we use a book, we simply number each 'page' then ask the computer what is on that page later on!"+
	"<br>"+
	"<br>"+
	"We will use this "+
	"next lesson to search our shuffled array and display what's behind it! We also created the inital global variables which we will use to compare the 2 cards we select "+
	"and check if they match! Great work today "+CHILDNAME+"!"
	
	//"<img src='Images/Scramble.png' class='debriefimg' width='200'>"+
	//"<img src='Images/ScrambleC.png' width='200'>"+
	//"<img src='Images/ScrambleC2.png' width='200'>"

	scrambleSecondHALF = "<p class='debrief'>Today "+CHILDNAME+" finished all the rest of the Scramble project in another super focused session, great work!"+
	"<br>"+
	"<br>"+
	"Firstly, "+CHILDNAME+" had to shuffle the contents of the array, and then check for matching contents at those "+
	"array elements. When we click on the first card we save it's data in 2 global variable’s (one to check if they match, and one to know what object we have "+
	"to remove if they do match) and set firstTileClicked = false. When we click on the next tile it checks if FirstTileClicked is false, and because it is now, "+
	"we compare the second selection to our saved data in card 1, if they are the same, we delete both and score a point! "+
	"<br>"+
	"<br>"+
	CHILDNAME+" did very well with this game "+
	"today which is very complex and use of global variables in this game can be very tough to understand, but whenever "+CHILDNAME+" was unsure "+heshe+" would always ask me "+
	"for help. This was a very complex but a very nice puzzle!! Great stuff today "+CHILDNAME+"!"+
	"</p>"
	//"<img src='Images/Scramble.png' class='debriefimg' width='200'>"+
	//"<img src='Images/ScrambleC.png' width='200'>"+
	//"<img src='Images/ScrambleC2.png' width='200'>"



	scrambleFULL="<p class='debrief'>In Scramble "+CHILDNAME+" got started by using the concept we had covered before in Dungeon Escape, Nested Loops! We used this here "+
	"to create a new grid of cards. We also assigned each of these cards a number from a shuffled array. These numbers were 8 pairs of numbers, so each of our cards "+
	"had a matching pair somewhere in the grid! Our job was to match these up! We then created 2 global variables which we will use later on to compare the cards! "+
	"<br>"+
	"<br>"+
	"Arrays gain a new level of complexity in this game, as "+CHILDNAME+" had to shuffle the contents of the array, and then check for matching contents at those "+
	"array elements. When we click on the first card we save it's data in 2 global variable’s (one to check if they match, and one to know what object we have "+
	"to remove if they do match) and set firstTileClicked = false. When we click on the next tile it checks if FirstTileClicked is false, and because it is now, "+
	"we compare the second selection to our saved data in card 1, if they are the same, we delete both and score a point! Very complex but a very nice puzzle!! "+
	"Great stuff today "+CHILDNAME+"!"+
	"</p>"
	//"<img src='Images/Scramble.png' class='debriefimg' width='200'>"+
	//"<img src='Images/ScrambleC.png' width='200'>"+
	//"<img src='Images/ScrambleC2.png' width='200'>"

	ninjaPuzzleFULL = "<p class='debrief'>Ninja puzzle is a very complex game using custom functions and 2 dimensional arrays for the first time! All of our tiles "+
	"have a tileNumber and that is put inside our array. The empty space tile has a tileNumber of 0."+
	"<br>"+
	"<br>"+
	"Due to this, whenever we click on one of our tiles, we need a "+
	"function to look for the tileNumber of 0 (the empty tile). If it is 1 tiles ahead, that means it is to the right of us, if it is 1 tiles behind, that "+
	"means it is to the left of us. "+
	"<br>"+
	"<br>"+
	"We then used this in our function to state that if 'clickedTileLocation+1' is the empty tile, we move the tile to the right. Then we need set the empty tile "+
	"to now equal our clicked tileNumber, because it has moved there, and then set the clicked tileNumber to the empty tile, as now the empty tile is where we clicked. "+
	"<br>"+
	"<br>"+
	"Because this was made using a 4x4 grid of our tiles, the array is 2D! 2D arrays are a very complex concept but covering it here with "+CHILDNAME+" was a lot of fun and "+
	heshe+" used it to great effect! This game is massive overall which is a great testament to "+CHILDNAME+"'s focus for completing it today!"+
	"</p>"
	//"<img src='Images/NinjaPuzzle.png' class='debriefimg' width='200'>"+
	//"<img src='Images/NinjaPuzzleC.png' width='200'>"+
	//"<img src='Images/NinjaPuzzleC2.png' width='200'>"+
	//"<img src='Images/NinjaPuzzle12.png' width='200'>"
	
	ninjaPuzzleFirstHALF = "<p class='debrief'>Ninja puzzle is a very complex game using custom functions and 2 dimensional arrays for the first time! All of our tiles "+
	"have a tileNumber and that is put inside our array. The empty space tile has a tileNumber of 0. So whenever we click on one of our tiles, we need a "+
	"function to look for the tileNumber of 0 (the empty tile). If it is 1 tiles ahead, that means it is to the right of us, if it is 1 tiles behind, that "+
	"means it is to the left of us. "+
	"<br>"+
	"<br>"+
	"This project is very large and setting up the global variables to prepare us for continuing it next lesson is a big task. We have created the nested loop which "+
	"creates our grid of our puzzle tiles including one empty tile in the corner. Each Tile has been given its tile number and we will use them next lesson to finish moving "+
	"every tile for our puzzle. Great work today "+CHILDNAME+"!"+
	"</p>"
	//"<img src='Images/NinjaPuzzle.png' class='debriefimg' width='200'>"+
	//"<img src='Images/NinjaPuzzleC.png' width='200'>"+
	//"<img src='Images/NinjaPuzzleC2.png' width='200'>"+
	//"<img src='Images/NinjaPuzzle12.png' width='200'>"

	ninjaPuzzleSecondHALF = "<p class='debrief'>Today "+CHILDNAME+" finished Ninja Puzzle by moving our tiles around that we had created last lesson. "+
	"We used this in our function to state that if 'clickedTileLocation+1' is the empty tile, we move the tile to the right. Then we need set the empty tile "+
	"to now equal our clicked tileNumber, because it has moved there, and then set the clicked tileNumber to the empty tile, as now the empty tile is where we clicked. "+
	"As this is made in a 4x4 grid of our tiles, this is a 2D array. 2D arrays are a very complex concept but covering it here with "+CHILDNAME+" was a lot of fun and "+
	heshe+" used it to great effect! "+
	"<br>"+
	"<br>"+
	"The concepts covered in the last lesson were applied fantastically by +"+CHILDNAME+" today and finishing this game today is certainly not easy! "+
	"This game is massive overall which is a great testament to "+CHILDNAME+"'s focus for completing it! Great work!"+
	"</p>"
	//"<img src='Images/NinjaPuzzle.png' class='debriefimg' width='200'>"+
	//"<img src='Images/NinjaPuzzleC.png' width='200'>"+
	//"<img src='Images/NinjaPuzzleC2.png' width='200'>"+
	//"<img src='Images/NinjaPuzzle12.png' width='200'>"

	wallBlaster2FULL = "<p class = 'debrief'>In this lesson "+CHILDNAME+" worked on wall blaster 2, this is a more interesting and complex version of wall "+
	"blaster in yellow belt. This time there were multiple rows of bricks, created by our knowledge of NESTED loops. We also had "+CHILDNAME+" give our bricks certain "+
	"properties based on the row we created them on! The higher up the brick, the higher its health! Each different row will also have a completely new random colour! "+
	"This might sound a bit like a game you know, Breakout! Breakout is a fantastic educational game that allows us to reinforce our variable, cloning, score, movement, loops "+
	"and function concepts whilst taking a new look at randomizing colours!"+
	"<br>"+
	"<br>"+
	"These properties that were stored inside each of our bricks were called whenever the brick was hit by our ball! When the ball came into contact with a brick we would reduce its "+
	"health by 1 and then run a function called 'updateColour'. "+CHILDNAME+" coded a simple if statement that linked our bricks health variable to check if the health had gone down to zero. "+
	"If the health had fallen to zero then, you guessed it, we removed the brick! We would also then remove a single point from our 'Bricks Remaining' variable too! Our score would then increase by "+
	"100, or whatever "+CHILDNAME+" thought was the best score!"+
	"<br>"+
	"<br>"+
	"That 'updateColour' function would take in a random hexadecimal colour based on the current health of the brick! When the game started and we created all of our rows of bricks, we also "+
	"Added a random six digit number into a list. These numbers would represent the colour of what that row would be! We then used the health of the brick in this function to select one of "+
	"these colours, and now we have a randomised colour generator for our rows! "+
	"<br>"+
	"<br>"+
	"Also today, in the beginning of the game, "+CHILDNAME+" needed the ball to actually move! Getting the paddle to follow the mouse was only one line of code back from White Belt, but moving the "+
	"ball was a bit different! We want our ball to bounce off the paddle in a realistic way, so the ball hits the right of the paddle, we want it to ping off far to the right! "+
	"to do this, we needed the coordinate of the center of the paddle, and the center of the ball. Once we had both of these, we simply subtracted the paddle's coordinate from the ball's. This way "+
	"If the ball hit the paddle on the left side, we would get a negative number like '-5' and we could then multiply that by 10 to make it bounce away at a speed of -50! Complicated stuff!"+
	"<br>"+
	"<br>"+
	"As you can see above, we can use the framework written by "+CHILDNAME+" today expand out to 3D game development and beyond! This looping with collisions "+
	"tactic will be utilised again and again as we progress. This is why we love to really focus on foundational skills as we find ourselves using them over "+
	"and over! Just like the bricks in our game, bricks in real life can be used to build a small hut or a vast castle! The skills and the vision are the differentiator "+
	"between each game and project. Brilliant work today "+CHILDNAME+"!"+
	"</p>"
	//"<img src='Images/WallBlaster2.png' class='debriefimg' width='200'>"+
	//"<img src='Images/WallBlaster2C.png' width='200'>"+
	//"<img src='Images/WallBlaster2C2.png' width='200'>"+
	//"<img src='Images/WallBlaster22.png' width='200'>"

	wallBlaster2FirstHalf = "<p class = 'debrief'>In this lesson "+CHILDNAME+" worked on wall blaster 2, this is a more interesting and complex version of wall "+
	"blaster in yellow belt. This time there will be multiple rows of bricks, each row having an entirely different colour and health value! Our job was to break down "+
	"these colorful bricks, scoring points all along the way! You may have heard of this game before, the mighty BREAKOUT! "+
	"<br>"+
	"<br>"+
	"Today "+CHILDNAME+" was tasked with creating and coding the objects that would be used to attack the walls! The ball and paddle! Coding the paddle was relatively simple "+
	"Once "+CHILDNAME+" had created it, the code used some knowledge from way back in White Belt! Making the paddle follow the mouse was the first section, and then we needed our ball "+
	"to interact with it! We made 2 functions today inside our ball, one function would always be checking if the ball hits the paddle, and the other checks if the ball ever hits a wall! "+
	"<br>"+
	"<br>"+
	"We want our ball to bounce off the paddle in a realistic way, so the ball hits the right of the paddle, we want it to ping off far to the right! "+
	"to do this, we needed the coordinate of the center of the paddle, and the center of the ball. Once we had both of these, we simply subtracted the paddle's coordinate from the ball's. This way "+
	"If the ball hit the paddle on the left side, we would get a negative number like '-5' and we could then multiply that by 10 to make it bounce away at a speed of -50! Complicated stuff!"+
	"Once this function was created, we made the function to bounce our wall around inside our scene box! If the ball touched the left or right wall, its X speed was flipped. If the ball hit "+
	"the top wall, its Y coordinate was flipped. Lastly if the ball hit the bottom of the scene we reset it into the middle, ready for our paddle again! Fantastic work today "+CHILDNAME+"!"+
	"</p>"
	//"<img src='Images/WallBlaster2.png' class='debriefimg' width='200'>"+
	//"<img src='Images/WallBlaster2C.png' width='200'>"+
	//"<img src='Images/WallBlaster2C2.png' width='200'>"+
	//"<img src='Images/WallBlaster22.png' width='200'>"

	wallBlaster2SecondFILLER = "<p class = 'debrief'>"+CHILDNAME+" got straight back into "+hisher+" Wall blaster 2 project in a debugging exercise to fix "+hisher+" ball and paddle! These exercises are "+
	"a great way to reinforce the concepts that are taught all throughout this project, and even learn new ones! "+CHILDNAME+"'s game was working flawlessly from last lesson, so some code changed around! "+
	"Instead of the ball simply flipping its speed around when it hit a wall, we made the ball swap its 'Y' coordinate speed when it hit a side wall, and its 'X' Coordinate speed when it hit a top wall. "+
	CHILDNAME+" did superbly today and spotted this bug almost immediately showing that "+hisher+" coordinate knowledge is coming along brilliantly!"+
	"<br>"+
	"<br>"+
	"The next step in the wall blaster game, was to create an 'updateColour' function, that we will be running as we spawn our bricks. We wanted these colours to all be saved inside a list so we created a for loop"+
	"that ran for as many rows in our game, and each time it ran it would push (add) a random six digit number into a list! This would be used as a Hexadecimal code for the colour! Because we saved this inside a list, "+
	"we can use it next session to not only change our rows colour, but also the bricks colour as its health changed. If the radom generator made row 1 = blue and row 2 = red, when we hit the second (red) rows brick "+
	"it would lose  a life and then run this updateColour function with only 1 health remaining, and turn the red brick blue, then after we hit the blue brick it would disappear and we would get a point!"+
	"<br>"+
	"<br>"+
	"Brilliant work today "+CHILDNAME+"! Keep at it as you are doing brilliantly making this huge Orange Belt project! See you in again soon!"+
	"</p>"
	//"<img src='Images/WallBlaster2.png' class='debriefimg' width='200'>"+
	//"<img src='Images/WallBlaster2C.png' width='200'>"+
	//"<img src='Images/WallBlaster2C2.png' width='200'>"+
	//"<img src='Images/WallBlaster22.png' width='200'>"

	wallBlaster2SecondHalf = "<p class = 'debrief'>Expanding upon 'Wall Blaster 2' from "+CHILDNAME+"'s previous session, we got to make the bricks! Unlike wall blaster 1 in Yellow Belt "+
	"we had multiple rows of bricks created by our nested loop, and gave them all properties based on the row we created them on! The higher up the brick, the higher its health! Each "+
	"different row will also have a completely new random colour! "+
	"This might sound a bit like a game you know, Breakout! Breakout is a fantastic educational game that allows us to reinforce our variable, cloning, score, movement, loops "+
	"and function concepts whilst taking a new look at randomizing colours!"+
	"<br>"+
	"<br>"+
	"These properties that were stored inside each of our bricks were called whenever the brick was hit by our ball! When the ball came into contact with a brick we would reduce its "+
	"health by 1 and then run a function called 'updateColour'. "+CHILDNAME+" coded a simple if statement that linked our bricks health variable to check if the health had gone down to zero. "+
	"If the health had fallen to zero then, you guessed it, we removed the brick! We would also then remove a single point from our 'Bricks Remaning' variable too! Our score would then increase by "+
	"100, or whatever "+CHILDNAME+" thought was the best score!"+
	"<br>"+
	"<br>"+
	"That 'updateColour' function would take in a random hexadecimal colour based on the current health of the brick! When the game started and we created all of our rows of bricks, we also "+
	"Added a random six digit number into a list. These numbers would represent the colour of what that row would be! We then used the health of the brick in this function to select one of "+
	"these colours, and now we have a randomised colour generator for our rows! "+
	"between each game and project. absolutely brilliant job today "+CHILDNAME+"!"+
	"</p>"
	//"<img src='Images/WallBlaster2.png' class='debriefimg' width='200'>"+
	//"<img src='Images/WallBlaster2C.png' width='200'>"+
	//"<img src='Images/WallBlaster2C2.png' width='200'>"+
	//"<img src='Images/WallBlaster22.png' width='200'>"

	flyingNinjaFull = "<p class = 'debrief'>Today "+CHILDNAME+" started off with our Flying Ninja project which showed us how to start a scene from scratch by adding our ninja, "+
	"background and obstacles into the scene and this is something "+CHILDNAME+" will do more in green belt! In this game "+heshe+" also learnt more about parallax scrolling "+
	"which means that we have multiple background layers moving at different speeds to make the scene look three dimensional and contact with any obstacles would result in a "+
	"10 point deduction! The character is continually in motion, "+CHILDNAME+"does not need to control his speed, simply "+hisher+" movement along the vertical axis! As we expand "+
	"upon this concept, the original objective of the game can be developed from travelling as far as possible to also collecting coins, avoid hazards such as zappers, missiles "+
	"and high-intensity laser beams! "+
	"<br>"+
	"<br>"+
	"We used our mouse to control our ninja in the vertical axis, and had the gliding ninja also rotate to our mouse position. if the rotation demanded was more than 30 degrees "+
	"then we set it to 30, if it was lower than -30, we set it to -30. This way he could rotate up and down but at a realistic amount you would expect a glider to move at! "+
	"we then added the functionality of our mites so that the bottom mite would move, and the top mite would simply follow the bottom one at a random distance away. This random "+
	"distance would be what creates our gap to fly through!"+
	"<br>"+
	"<br>"+
	"This side-scrolling endless runner genre of games has been extremely popular this decade and if "+CHILDNAME+" can flesh one out fully, it can be great preparation to port "+
	"it to the IOS Android App Store or other systems. Think of all the holidays! Great work today "+CHILDNAME+"!"+
	"</p>"
	//"<img src='Images/FlyingNinja.png' class='debriefimg' width='200'>"+
	//"<img src='Images/FlyingNinja2.png' width='200'>"

	flyingNinjaFirstHalf = "<p class = 'debrief'>Today "+CHILDNAME+" started off with our Flying Ninja project which showed us how to start a scene from scratch by adding our ninja, "+
	"background and obstacles into the scene and this is something "+CHILDNAME+" will do more in green belt! In this game "+heshe+" also learnt more about parallax scrolling "+
	"which means that we have multiple background layers moving at different speeds to make the scene look three dimensional and contact with any obstacles would result in a "+
	"10 point deduction! "+
	"<br>"+
	"<br>"+
	"Our ninja would always be flying along as we have added in both backgrounds moving at different speeds behind us to simulate a 3D environment. "+
	"We control the direction the ninja takes to avoid the mite's which we will code next lesson. Our ninja flies through the 3D cave and flies along both up and down which "+
	"is a brilliant foundation to build upon next lesson! Great work "+CHILDNAME+"!"+
	"</p>"
	//"<img src='Images/FlyingNinja.png' class='debriefimg' width='200'>"+
	//"<img src='Images/FlyingNinja2.png' width='200'>"

	flyingNinjaSecondHalf = "<p class = 'debrief'>Great job to "+CHILDNAME+" for finishing all the remainder of Flying Ninja today! Because we used the mouse to control our "+
	"ninja in the vertical axis, we could also rotate him to point at the mouse! if the rotation demanded was more than 30 degrees "+
	"then we set it to 30, if it was lower than -30, we set it to -30. This way he could rotate up and down but at a realistic amount you would expect a glider to move at! "+
	"we then added the functionality of our mites so that the bottom mite would move, and the top mite would simply follow the bottom one at a random distance away. This random "+
	"distance would be what creates our gap to fly through!"+
	"<br>"+
	"<br>"+
	"This side-scrolling endless runner genre of games has been extremely popular this decade and if "+CHILDNAME+" can flesh one out fully, it can be great preparation to port "+
	"it to the IOS Android App Store or other systems. Think of all the holidays! Great work today "+CHILDNAME+"!"+
	"</p>"
	//"<img src='Images/FlyingNinja.png' class='debriefimg' width='200'>"+
	//"<img src='Images/FlyingNinja2.png' width='200'>"


   wordScrambleFull = "<p class = 'debrief'>"+CHILDNAME+" moved onto our Word Scramble project where the aim of the game was to unscramble the mystery word! "+CHILDNAME+" had to "+
   "figure out how to shuffle the individual letters of a word, and then check for a matching player input. "+HESHE+" learnt how to use while loops and improved our use of arrays by "+
   "splicing them! Wow! that's a lot of new concepts! Well, let's explain it! A while loop is very simple, it's just like a for loop, except there is no increment on the end! So it's "+
   "just a constant loop that will run so long as something is true! We have to be very careful with these though, as it's very easy to get an infinite loop to form which will crash your game! "+
   "So we always save our project before using it! "+
   "<br>"+
   "<br>"+
   "The for loop "+CHILDNAME+" created today pushed every letter of our 'activeWord' into the 'normalWord' array. So if 'activeWord' was 'abc' the 'normalWord' array would now be [“a”,”b”,”c”];. "+
   "Setting up our functions and global variables is the great base needed to begin this project, next time we will be looking at splicing and how to create the guessing mechanic. "+
   "<br>"+
   "<br>"+
   "After our setup up of functions, arrays and our while loop. "+HESHE+" had to create the feature to be able to select a random word from our array, then we would jumble it up by selecting "+
   "a random letter, adding that to a new array and then deleting that random letter from our original array. We do this by splicing the array! "+
   "<br>"+
   "<br>"+
   "Splice is a new keyword when it comes to arrays. Splicing is how we DELETE something from an array. It looks like this  'example.splice( 3 , 1 );' The first number is the index of where we "+
   "want to start deleting, and the second number is how many things we want to delete. We use it here to randomly select a letter from our 'normalWord', push it into our 'shuffledWord', "+
   "then delete it by splicing! This way our “shuffledWord” will be randomly filled up with letters from our “normalWord”, whilst the 'normalWord' is deleted. The while loop makes us keep going "+
   "until the “normalWord” is deleted! "+
   "Overall, a while loop would be running so long as our original array still contained letters, so once everything had been deleted from our original array, our new array would be filled up with "+
   "a jumbled up word! It's a very tough game to wrap your head around when coding but "+CHILDNAME+" did brilliantly with it! "+
   "</p>"
   //"<img src='Images/WordScramble.png' class='debriefimg' width='200'>"+
	//"<img src='Images/WordScrambleC.png' width='200'>"

   wordScrambleFirstHalf = "<p class = 'debrief'>"+CHILDNAME+" moved onto our Word Scramble project where the aim of the game was to unscramble the mystery word! "+CHILDNAME+" had to "+
   "figure out how to shuffle the individual letters of a word, and then check for a matching player input. "+HESHE+" learnt how to use while loops and improved our use of arrays by "+
   "splicing them! Wow! that's a lot of new concepts! Well, let's explain it! A while loop is very simple, it's just like a for loop, except there is no increment on the end! So it's "+
   "just a constant loop that will run so long as something is true! We have to be very careful with these though, as it's very easy to get an infinite loop to form which will crash your game! "+
   "So we always save our project before using it! "+
   "<br>"+
   "<br>"+
   "The for loop "+CHILDNAME+" created today pushed every letter of our 'activeWord' into the 'normalWord' array. So if 'activeWord' was 'abc' the 'normalWord' array would now be [“a”,”b”,”c”];. "+
   "Setting up our functions and global variables is the great base needed to begin this project, next time we will be looking at splicing and how to create the guessing mechanic. Well done for "+
   "being so incredible in our first development stage ninja, it's upwards and onwards next time!"+
   "</p>" 
   //"<img src='Images/WordScramble.png' class='debriefimg' width='200'>"+
	//"<img src='Images/WordScrambleC.png' width='200'>"


   wordScrambleSecondHalf = "<p class = 'debrief'>We continued work on our 'Word Scramble' game today! After our setup up of functions, arrays and our while loop. "+HESHE+" had to create "+
   "the feature to be able to select a random word from our array, then we would jumble it up by selecting a random letter, adding that to a new array and then deleting that random letter "+
   "from our original array. We do this by splicing the array! "+
   "<br>"+
   "<br>"+
   "Splice is a new keyword when it comes to arrays. Splicing is how we DELETE something from an array. It looks like this  “example.splice( 3 , 1 );” The first number is the index of where we "+
   "want to start deleting, and the second number is how many things we want to delete. We use it here to randomly select a letter from our “normalWord”, push it into our “shuffledWord”, "+
   "then delete it by splicing! This way our “shuffledWord” will be randomly filled up with letters from our “normalWord”, whilst the “normalWord” is deleted. The while loop makes us keep going "+
   "until the “normalWord” is deleted! "+
   "Overall, a while loop would be running so long as our original array still contained letters, so once everything had been deleted from our original array, our new array would be filled up with "+
   "a jumbled up word! It's a very tough game to wrap your head around when coding but "+CHILDNAME+" did brilliantly with it! "+
   "</p>"
   //"<img src='Images/WordScramble.png' class='debriefimg' width='200'>"+
	//"<img src='Images/WordScrambleC.png' width='200'>"

    
   shutTheBoxFull = "<p class = 'debrief'>"+CHILDNAME+" tackled one of the biggest tests of Orange Belt today! The task of recreating the age old 'Shut the Box' is not easy, "+
	"this historic game takes lots of coding, 70 lines in just the scene itself! "+
	"<br>"+
	"<br>"+
	"Firstly, "+CHILDNAME+" had to add in all of the dice, the tiles, and the numbers on the tiles inside a group. "+HESHE+" also had to correctly name all of our objects so that "+
	" "+HESHE+" could reference them in the code appropriately! (Above all this is a very handy organisational habit as our projects are forever growing in scope). "+
	"<br>"+
	"<br>"+
	"We also had a start at coding the dice, similarly to the rolling dice test in yellow belt whilst also creating a few functions! "+CHILDNAME+" began by coding a for loop to "+
	"create 9 tiles. The for loop variable is placed in the text that shows in front of the tile and is also pushed inside our boxNumbers array. So this array will be = [1,2,3,4,...]. "+
	"Then we put our loop variable inside a variable called number stored in each clone, then finally "+HESHE+" cloned the tiles and make the first tile invisible! "+
	"Then we created a function to roll the dice! We are only able to once we have reduced the remainingScore down to 0. Next session "+HESHE+" will be coding the tiles "+
	"and the score to check the values we’re given and to work out when  Adding in all these texts, tiles and placing the background all in the correct places takes a lot of "+
	"time and planning but is much more akin to the Green belt games coming up soon! "+
	"<br>"+
	"<br>"+
	"Once "+CHILDNAME+" had correctly named all of our objects, we got into referencing them in our code! We firstly created a for loop to create all of our tile group clones, "+
	"and based on how far through the loop the clone was made, give it a number. So our tiles go up from 1-9! "+
	"<br>"+
	"<br>"+
	"Once we created a function to roll our dice and add up the score on them with a variable. We then had to build up this score by selecting our tiles with a function that "+
	"processed the tile number when clicked. "+HESHE+" also made a  for loop run for every value inside the array, then an if statement that will only be true once we found the "+
	" 'num' we clicked on, then just splice (remove) that value. This allowed us to remove the tile numbers from it as we went so we could always check what our lowest possible tile "+
	"was, if the score was lower than that, then we had no way to continue! "+
	"<br>"+
	"<br>"+
	"So then we displayed our score and ended the game! It's a very large game, but managing to code these 70 lines is testament to how far "+CHILDNAME+" has come since Yellow Belt! "+ 
	"Fantastic work Ninja, keep up the good work! "+
	"</p>"
	//"<img src='Images/ShutTheBox.png' class='debriefimg' width='200'>"+
	//"<img src='Images/ShutTheBox2.png' width='200'>"+
	//"<img src='Images/ShutTheBoxC.png' width='200'>"+
	//"<img src='Images/ShutTheBoxC2.png' width='200'>"
	

	shutTheBoxFirstHalf = "<p class = 'debrief'>"+CHILDNAME+" tackled one of the biggest tests of Orange Belt today! The task of recreating the age old 'Shut the Box' is not easy, "+
	"this historic game takes lots of coding, 70 lines in just the scene itself! "+
	"<br>"+
	"<br>"+
	"Firstly, "+CHILDNAME+" had to add in all of the dice, the tiles, and the numbers on the tiles inside a group. "+HESHE+" also had to correctly name all of our objects so that "+
	" "+HESHE+" could reference them in the code appropriately! (Above all this is a very handy organisational habit as our projects are forever growing in scope). "+
	"<br>"+
	"<br>"+
	"We also had a start at coding the dice, similarly to the rolling dice test in yellow belt whilst also creating a few functions! "+CHILDNAME+" began by coding a for loop to "+
	"create 9 tiles. The for loop variable is placed in the text that shows in front of the tile and is also pushed inside our boxNumbers array. So this array will be = [1,2,3,4,...]. "+
	"Then we put our loop variable inside a variable called number stored in each clone, then finally "+HESHE+" cloned the tiles and make the first tile invisible! "+
	"<br>"+
	"<br>"+
	"Then we created a function to roll the dice! We are only able to once we have reduced the remainingScore down to 0. Next session "+HESHE+" will be coding the tiles "+
	"and the score to check the values we’re given and to work out when  Adding in all these texts, tiles and placing the background all in the correct places takes a lot of "+
	"time and planning but is much more akin to the Green belt games coming up soon! Great work today "+CHILDNAME+" and lets finish this one off next session!"+
	"<br>"+
	"<br>"+
	"</p>"
	//"<img src='Images/ShutTheBox.png' class='debriefimg' width='200'>"+
	//"<img src='Images/ShutTheBox2.png' width='200'>"+
	//"<img src='Images/ShutTheBoxC.png' width='200'>"+
	//"<img src='Images/ShutTheBoxC2.png' width='200'>"

	shutTheBoxSecondHalf = "<p class = 'debrief'>Today "+CHILDNAME+" continued with his development of 'Shut the Box' from last session! Once "+CHILDNAME+" had correctly named all of our objects, we got into referencing "+
	"them in our code! We firstly created a for loop to create all of our tile group clones, and based on how far through the loop the clone was made, give it a number. So our tiles go up from 1-9! "+
	"<br>"+
	"<br>"+
	"Once we created a function to roll our dice and add up the score on them with a variable. We then had to build up this score by selecting our tiles with a function that "+
	"processed the tile number when clicked. "+HESHE+" also made a  for loop run for every value inside the array, then an if statement that will only be true once we found the "+
	" 'num' we clicked on, then just splice (remove) that value. This allowed us to remove the tile numbers from it as we went so we could always check what our lowest possible tile "+
	"was, if the score was lower than that, then we had no way to continue! "+
	"<br>"+
	"<br>"+
	"So then we displayed our score and ended the game! It's a very large game, but managing to code these 70 lines is testament to how far "+CHILDNAME+" has come since Yellow Belt! "+ 
	"Fantastic work Ninja, keep up the good work! "+
	"</p>"
	//"<img src='Images/ShutTheBox.png' class='debriefimg' width='200'>"+
	//"<img src='Images/ShutTheBox2.png' width='200'>"+
	//"<img src='Images/ShutTheBoxC.png' width='200'>"+
	//"<img src='Images/ShutTheBoxC2.png' width='200'>"


    oddBallFull = "<p class = 'debrief'>A very well done to "+CHILDNAME+" !! "+HESHE+"  has been finished developing "+hisher+"  one of the largest challenges in Orange belt! In Oddball we don't have a game though, "+
	"we have a technical challenge using switch cases, nested loops, for loops, while loops, array shuffling, and all manner of global variables to do something that, on the tin, sounds simple! "+
	"<br>"+
	"<br>"+
	"For this puzzle we will spawn 9 Ninjas, 8 of the Ninjas will be in pairs wearing the same clothes, but there will be 1 odd one out we have to find! Firstly, "+CHILDNAME+" created a nested loop "+
	"to create our clones. We also made the first group invisible and variables to keep track of all the clone names and numbers. We have three interchangeable part of the costumes  which are the hands, "+
	"shirt and head. When we make a clone of the hands, shirt and head they become “hands_1” “hands_2” “hands_3” and so on and so on. So to call to them "+CHILDNAME+" used the function findName on our "+
	"ninjaClone to create an increment so that every time we make a clone, the computer sees it as“hands_1”,”hands_2”.... "+ 
	"<br>"+
	"<br>"+
	" "+HESHE+" then booted up the test to see our first demo run! And it appeared  to work so far! All our Ninjas were given a costume! But it's the same one!! Next "+CHILDNAME+" will needed "+
	"to figure out how to randomly allocate costume parts to shuffle our components we have set up! "+
	"<br>"+
	"<br>"+
	" "+CHILDNAME+" solved the analytical thinking check by recommending how to randomise the item parts! "+HESHE+" created 5 arrays and filled them with random numbers between 0 and 3 because "+
	"that's the amount of costumes there are for each body part, the hand, head and body! Once they were created, "+CHILDNAME+" then pushed random numbers into them all! "+HESHE+" made a variable "+
	"to set up a for loop for 3 runs. (head, arms, body). "+
	"<br>"+
	"<br>"+
	"After the next demo test, they still all unfortunately wear the same stuff! To fix this "+CHILDNAME+" took some inspiration from a previous test Word Scramble! "+HESHE+" firstly created an "+
	"array with 4 pairs of numbers and one on it's own, then shuffled them like we did with the while loop in word scramble. Now we have a shuffled up array with our 4 pairs of numbers and an odd "+
	"one out, we will use it in our function with a switch case! Each case being a costume pre-set for our Ninjas! "+
	"<br>"+
	"<br>"+
	"Then we want our Ninjas to show their new costumes! We need our cloneNumber to start at 0 for our switch case, otherwise it will miss the first thing in the shuffling array. But we need it to "+
	"start at 1 when we do the costume array so "+HESHE+" made a new variable! "+
	"<br>"+
	"<br>"+
	"Now after running the project our Ninjas and costumes with all the switch cases, nested loops, for loops, while loops, array shuffling, and all manner of global variables are working! "+
	"This technical game challenge is massive in scope and calls upon all of "+CHILDNAME+" 's previous knowledge pull it off successfully, so absolutely fantastic work "+CHILDNAME+"! "+
	"<br>"+
	"<br>"+
	"</p>"
	//"<img src='Images/OddBall.png' class='debriefimg' width='200'>"+
	//"<img src='Images/OddBallC1.png' width='200'>"+
	//"<img src='Images/OddBallC2.png' width='200'>"

    oddBallFirstHalf = "<p class = 'debrief'>A very well done to "+CHILDNAME+" !! "+HESHE+"  has been developing "+hisher+" one of the largest challenges in Orange belt! In Oddball we don't have "+
	"a game though, we have a technical challenge using switch cases, nested loops, for loops, while loops, array shuffling, and all manner of global variables to do something that, on the tin, sounds simple! "+
	"<br>"+
	"<br>"+
	"For this puzzle we will spawn 9 Ninjas, 8 of the Ninjas will be in pairs wearing the same clothes, but there will be 1 odd one out we have to find! Firstly, "+CHILDNAME+" created a nested loop "+
	"to create our clones. We also made the first group invisible and variables to keep track of all the clone names and numbers. We have three interchangeable part of the costumes  which are the hands, "+
	"shirt and head. When we make a clone of the hands, shirt and head they become “hands_1” “hands_2” “hands_3” and so on and so on. So to call to them "+CHILDNAME+" used the function findName on our "+
	"ninjaClone to create an increment so that every time we make a clone, the computer sees it as“hands_1”,”hands_2”.... "+ 
	"<br>"+
	"<br>"+
	" "+HESHE+" then booted up the test to see our first demo run! And it appeared  to work so far! All our Ninjas were given a costume! But it's the same one!! For the next step "+CHILDNAME+" will need "+
	"to figure out how to randomly allocate costume parts! We completed a lot of code for this first part of development, next time we will be looking at how to shuffle our components we have set up "+
	"to gamify this framework! "+
	"</p>"
	//"<img src='Images/OddBall.png' class='debriefimg' width='200'>"+
	//"<img src='Images/OddBallC1.png' width='200'>"+
	//"<img src='Images/OddBallC2.png' width='200'>"


    oddBallSecondHalf = "<p class = 'debrief'>"+CHILDNAME+" dove into OddBall and solved the analytical thinking check by recommending how to randomise the item parts! "+HESHE+" created 5 arrays and "+
	"filled them with random numbers between 0 and 3 because that's the amount of costumes there are for each body part, the hand, head and body! Once they were created, "+CHILDNAME+" then pushed random "+
	"numbers into them all! "+HESHE+" made a variable to set up a for loop for 3 runs. (head, arms, body). "+
	"<br>"+
	"<br>"+
	"After the next demo test, they still all unfortunately wear the same stuff! To fix this "+CHILDNAME+" took some inspiration from a previous test Word Scramble! "+HESHE+" firstly created an "+
	"array with 4 pairs of numbers and one on it's own, then shuffled them like we did with the while loop in word scramble. Now we have a shuffled up array with our 4 pairs of numbers and an odd "+
	"one out, we will use it in our function with a switch case! Each case being a costume pre-set for our Ninjas! "+
	"<br>"+
	"<br>"+
	"Then we want our Ninjas to show their new costumes! We need our cloneNumber to start at 0 for our switch case, otherwise it will miss the first thing in the shuffling array. But we need it to "+
	"start at 1 when we do the costume array so "+HESHE+" made a new variable! "+
	"<br>"+
	"<br>"+
	"Now after running the project our Ninjas and costumes with all the switch cases, nested loops, for loops, while loops, array shuffling, and all manner of global variables are working! "+
	"This technical game challenge is massive in scope and calls upon all of "+CHILDNAME+" 's previous knowledge pull it off successfully, so absolutely fantastic work "+CHILDNAME+"! "+
	"<br>"+
	"<br>"+
	"</p>"
	//"<img src='Images/OddBall.png' class='debriefimg' width='200'>"+
	//"<img src='Images/OddBallC1.png' width='200'>"+
	//"<img src='Images/OddBallC2.png' width='200'>"

	rooftopRunnerFULL = "<p class = 'debrief'> Welcome to Green Belt young master "+CHILDNAME+"!"+
	"<br>"+
	"<br>"+
	"Here "+CHILDNAME+" has had "+hisher+" introduction to the new format our Green belt games will be taking! There is much more emphasis on game "+
	"creation and testing in green belt, and it starts with Rooftop Runner! Using previous knowledge of parallax scrolling from Ninja Race, we make our game seem endless with our rooftops! When they hit the side we "+
	"create a new one to appear randomly on the other side our ninja has to jump to. This is just like before but this time horizontally instead "+
	"of vertically!"+
	"<br>"+
	"<br>"+	
	"Gravity is used once again to make this game feel much more real alongside a new function in Green, platforms.checkCollision($this). This "+
	"function is used to talk to whatever object we assign the “floor” role, and it stops us falling through! "+CHILDNAME+" used variables to store "+
	"data on  the ninja's current speed, gravity, maximum fall speed and the ninja’s jump strength so we can call it easily later. Then, "+hisher+" "+
	"gameplay mechanics are triggered within a chain of command consisting of calling our variables and functions within an if-else statement. Our "+
	"main condition to set off "+hisher+" if-else statement is the checkCollision function which we allocated a variable earlier. This means that "+
	"we are checking if our ninja character IS touching the roof, so the subsequent code can run. After all, we want our game to operate on a clear "+
	"ruleset! If the ninja is on the roof "+CHILDNAME+"  set the speed to 0 and allowed the ninja to jump if the spacebar is pressed!"+
	"<br>"+
	"<br>"+
	"We now have to set up the basic physics, boundaries and rules that our games will operate within. "+
	"This is giving "+CHILDNAME+"  a new perspective of how whole development is structured. Myself and "+CHILDNAME+" had a mind map of how we could "+
	"expand upon “Rooftop Runner” to make it more fun and creative!"+
	" As we progress with Green Belt we will be looking "+
	"at design choices like this in much more depth! This very same style of gameplay is used within globally recognised games such as Pitfall, Subway Surfers "+
	"and Temple Run! I wonder what "+CHILDNAME+" ‘s own version of this will look like!?"+
	"<br>"+
	"<br>"+	
	"This project is fantastic as it really brings together the main approaches of all of "+hisher+" work prior, whilst it may not be the most technically "+
	"taxing of projects. We are getting "+himher+" to start approaching game creation with a different view. Well done finishing this very first project "+CHILDNAME+", we hope you’re going to enjoy Green Belt with us!!!!"+
	"</p>"
	//"<img src='Images/RooftopRunner1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/RooftopRunner2.png' width='200'>"+
	//"<img src='Images/RooftopRunnerC.png' width='200'>"
	

	rooftopRunnerFirstHalf = "<p class = 'debrief'>Welcome to Green Belt young master "+CHILDNAME+"!"+
	"<br>"+
	"<br>"+
	"Here "+CHILDNAME+" has had "+hisher+" introduction to the new format our Green belt games will be taking! There is much more emphasis on game "+
	"creation and testing in green belt, and it starts with Rooftop Runner! "+
	"<br>"+
	"<br>"+
	"Using previous knowledge of parallax scrolling from Ninja Race, we make our game seem endless with our rooftops! When they hit the side we "+
	"create a new one to appear randomly on the other side our ninja has to jump to. This is just like before but this time horizontally instead "+
	"of vertically!"+
	"<br>"+
	"<br>"+	
	"Gravity is used once again to make this game feel much more real alongside a new function in Green, platforms.checkCollision($this). This "+
	"function is used to talk to whatever object we assign the “floor” role, and it stops us falling through! "+CHILDNAME+" used variables to store "+
	"data on  the ninja's current speed, gravity, maximum fall speed and the ninja’s jump strength so we can call it easily later. "+
	"<br>"+
	"<br>"+	
	"Great work making a start to Green Belt "+CHILDNAME+"! We got to use the Collision of our runner here to run some simple code to ensure the ninja doesnt "+
	"fall through the floor but next lesson we will expand on this to make a proper game using the variables we made here today where our player has to survive "+
	"jumping from roof to roof! See you soon "+CHILDNAME+"!"+
	"</p>"
	//"<img src='Images/RooftopRunner1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/RooftopRunner2.png' width='200'>"+
	//"<img src='Images/RooftopRunnerC.png' width='200'>"


	rooftopRunnerSecondHalf = "<p class = 'debrief'>Now "+CHILDNAME+" had to set the result if the condition of touching the floor is not met! So, the "+
	"‘else’ part! IF the ninja was not touching the floor, it therefore must "+
	"have fallen off, so we coded the ninja to fall faster and faster until it met the maximum speed value. Then added in the ninja to reset at the beginning "+
	"coordinates to restart the game!"+
	"<br>"+
	"<br>"+
	"We now have to set up the basic physics, boundaries and rules that our games will operate within. Unlike previously where we had some framework to work "+
	"with. This is giving "+CHILDNAME+"  a new perspective of how whole development is structured. Myself and "+CHILDNAME+" had a mind map of how we could "+
	"expand upon “Rooftop Runner” to make it more fun and creative. We could add a scoring system that gains us points the longer we played or per roof we "+
	"managed to jump. Even adding assets and sprites to act as collectibles and enemies would be awesome. As we progress with Green Belt we will be looking "+
	"at design choices like this in much more depth! This very same style of gameplay is used within globally recognised games such as Pitfall, Subway Surfers "+
	"and Temple Run! I wonder what "+CHILDNAME+"‘s own version of this will look like!?"+
	"<br>"+
	"<br>"+	
	"This project is fantastic as it really brings together the main approaches of all of "+hisher+" work prior, whilst it may not be the most technically "+
	"taxing of projects. We are getting "+himher+" to start approaching game creation with a different view. “Rooftop Runner” encapsulates the basics of "+
	"having layers of conditionals to operate the boundaries of a game whilst blending newer techniques to become more challenging. It is a great example "+
	"of always relying on the fundamentals, in whatever "+CHILDNAME+" creates!"+
	"<br>"+
	"<br>"+
	"Well done finishing this very first project "+CHILDNAME+", we hope you’re going to enjoy Green Belt with us!!!!"+
	"</p>"
	//"<img src='Images/RooftopRunner1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/RooftopRunner2.png' width='200'>"+
	//"<img src='Images/RooftopRunnerC.png' width='200'>"




	ninjaPuzzle2FULL = "<p class = 'debrief'>I see "+CHILDNAME+" is back for round 2 of Green Belt! Well, there is no better way to progress more into the "+
	"curriculum than with a good ol’ previously seen base that we have to make 10x more awesome! "+
	"<br>"+
	"<br>"+
	"Just like "+CHILDNAME+" is used to, we began with a completely blank scene. We set up a variable to store all of our sprite images templates. The puzzle "+
	"consisted of 5 objects each with 4 images inside their frameIndex. "+CHILDNAME+"'s next task was to get them all cloned and showing each frame, then "+
	"snapping them onto our board! "+
	"<br>"+
	"<br>"+
	"We achieved this by.. you guessed it, a nested loop! "+HESHE+" would use a “currentpiece” variable to clone the columns and give them the correct position, "+
	"and then we used the row loop to select the correct frame in the object. So, we would first clone the column 5 times, then select one of the 4 frames inside "+
	"it. Then, "+CHILDNAME+" got the computer to comb through and then jumble the pieces up to the side of our board, but how do we win!?"+
	"<br>"+
	"<br>"+
	"To do this "+CHILDNAME+" created a function called “checkpiece” comprised of 3 variables. The first being ‘wiggleroom’; essentially the amount of slack "+
	"that we wanted to give the player. A lower value placed in here would mean that a correct piece would need to be placed very accurately to snap in, whereas "+
	"a higher value would mean we can slot it in from much further away (the preferred option for myself!). Theseond and third variables are needed to calculate "+
	"how far away the piece's current location was from it’s correct slot. "+HESHE+" used an absolute value function to make any number positive, we did this on our "+
	"coordinates so that no matter if the correct location was 50 units away "+
	"in the x coordinate or -50 units away the computer would just see it as 50 units!"+
	"<br>"+
	"<br>"+
	"This was a really tough game to work through with lots of script and covering some very interesting concepts. “Ninja Puzzle 2: Electric Boogaloo” got "+
	CHILDNAME+" well and truly back into a much more technically charged approach. Next session we will be revisiting more game design elements to fold some "+
	"technical and artistic approaches together. Fantastic work superstar!!!!"+
	"</p>"
	//"<img src='Images/NinjaPuzzle2C1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/NinjaPuzzle2C2.png' width='200'>"+
	//"<img src='Images/NinjaPuzzle21.png' width='200'>"+
	//"<img src='Images/NinjaPuzzle22.png' width='200'>"

	ninjaPuzzle2FirstHalf = "<p class = 'debrief'>I see "+CHILDNAME+" is back for round 2 of Green Belt! Well, there is no better way to progress more into the "+
	"curriculum than with a good ol’ previously seen base that we have to make 10x more awesome! "+
	"<br>"+
	"<br>"+
	HESHE+" elaborated on our Ninja Puzzle project from before in Orange Belt! We can call it “Ninja Puzzle: Strikes Back” as last time we used so many nested loops "+
	hisher+" head started to spin, and this time it may fall off! "+
	"<br>"+
	"<br>"+
	"Just like "+CHILDNAME+" is used to, we began with a completely blank scene. We set up a variable to store all of our sprite images templates. The puzzle "+
	"consisted of 5 objects each with 4 images inside their frameIndex. "+CHILDNAME+"'s next task was to get them all cloned and showing each frame, then "+
	"snapping them onto our board! "+
	"<br>"+
	"<br>"+
	"We achieved this by.. you guessed it, a nested loop! "+HESHE+" would use a “currentpiece” variable to clone the columns and give them the correct position, "+
	"and then we used the row loop to select the correct frame in the object. So, we would first clone the column 5 times, then select one of the 4 frames inside "+
	"it. Then, "+CHILDNAME+" got the computer to comb through and then jumble the pieces up to the side of our board, next lesson we will start snapping them into "+
	"their correct places!"+
	"</p>"
	//"<img src='Images/NinjaPuzzle2C1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/NinjaPuzzle2C2.png' width='200'>"+
	//"<img src='Images/NinjaPuzzle21.png' width='200'>"+
	//"<img src='Images/NinjaPuzzle22.png' width='200'>"

	ninjaPuzzle2SecondHalf = "<p class = 'debrief'>Following on from last lesson "+CHILDNAME+" wanted to start snapping our pieces into place! So we created a function "+
	"called “checkpiece” comprised of 3 variables. The first being ‘wiggleroom’; essentially the amount of slack that we wanted to give the player. A lower value placed "+
	"in here would mean that a correct piece would need to be placed very accurately to snap in, whereas "+
	"a higher value would mean we can slot it in from much further away (the preferred option for myself!). The secondary and tertiary variables needed to calculate "+
	"how far away the piece's current location was from it’s correct slot. "+
	"<br>"+
	"<br>"+
	HESHE+" used an absolute value function to make any number positive, we did this on our coordinates so that no matter if the correct location was 50 units away "+
	"in the x coordinate or -50 units away the computer would just see it as 50! Then we can simply check if this piece was close enough, dependent on if "+CHILDNAME+
	"wanted to test a really tricky puzzle out on us with low wiggle room! The piece would snap in and be "+
	"set to that coordinate so it couldn't be accidentally moved again (we’ve all felt the pain of knocking a puzzle and ruining it !). We then simply set the "+
	"“checkpiece” function to run when we let go of the mouse. As opposed to just a mouse click, as the clicks have 2 instances; the initial and the second when "+
	"released. We wanted it to operate on the latter to more correctly simulate letting go of an object. Viola! We now have an incredible puzzle made by your amazing Ninja!"+
	"<br>"+
	"<br>"+
	"This was a really tough game to work through with lots of script and covering some very interesting concepts. “Ninja Puzzle 2: Electric Boogaloo” got "+
	CHILDNAME+" well and truly back into a much more technically charged approach. Next session we will be revisiting more game design elements to fold some "+
	"technical and artistic approaches together. Fantastic work superstar!!!!"+
	"</p>"
	//"<img src='Images/NinjaPuzzle2C1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/NinjaPuzzle2C2.png' width='200'>"+
	//"<img src='Images/NinjaPuzzle21.png' width='200'>"+
	//"<img src='Images/NinjaPuzzle22.png' width='200'>"

	movingYourAvatarFULL = "<p class = 'debrief'> "+CHILDNAME+" was back at it again with even more game design! Now we’re going to start looking into more platforming concepts! "+
    "In this game we discussed how we can assign roles to all of our objects and use them to interact with an avatar. Our avatar is a preset character with some animations "+
	"and costumes ready to roll. Our focus is to use this base to learn how to get the avatar to respond to certain commands. "+
	"<br>"+
	"<br>"+
	"Up until this point, our teaching method has mainly been for "+CHILDNAME+" to apply new concepts learnt to ‘half baked’ projects to fill out the remaining functionality. "+
	"As of Green Belt we want alot to work from the ground up. We started by coded the platforms to act as our floors and walls to act with collisions after coding the avatar to "+
	"move around and change its appearance. "+
	"<br>"+
	"<br>"+
	" "+HESHE+" then assigned the horizontal platforms the role of ‘floor’ and the verticals the role of ‘wall’. The best way to think about roles is within the hierarchy of game design. "+
	CHILDNAME+" knows how to configure movement schemes, sprites, loops, artificial gravity, collisions and so forth. So, now we need to teach "+CHILDNAME+" how to place "+himher+" self "+
	"in the “director’s chair” so to speak. As coding the mechanics is one thing, but to successfully piece a full game together we need to be able to layer assets on top of the script skeleton "+
	"to really bring it to life! "+
	"<br>"+
	"<br>"+
	"Think of it like this, "+CHILDNAME+" has great knowledge of how to make things function and how to apply it, we now need to build the world for these ideas and code to work in. "+
	"After setting our floor and wall boundaries in this large introduction to many of the design concepts we are going to be using throughout Green belt. We created a small mini-game with our "+
	"new platforms to get our avatar to the top of the screen! As we look to develop complex platform games using our avatar in tandem with floor & wall collision it sets an extraordinary "+
	"foundation for "+CHILDNAME+" to grow. Great work today "+CHILDNAME+"!"+
	"</p>"
	//"<img src='Images/MovingYourAvatar1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/MovingYourAvatar2.png' width='200'>"
	

	movingYourAvatarFirstHalf = "<p class = 'debrief'>"+CHILDNAME+" was back at it again with even more game design! Now we’re going to start looking into more platforming concepts! "+
    "In this game we discussed how we can assign roles to all of our objects and use them to interact with an avatar. Our avatar is a preset character with some animations "+
	"and costumes ready to roll. Our focus is to use this base to learn how to get the avatar to respond to certain commands. "+
	"<br>"+
	"Up until this point, our teaching method has mainly been for "+CHILDNAME+" to apply new concepts learnt to ‘half baked’ projects to fill out the remaining functionality. "+
	"As of Green Belt we want alot to work from the ground up. We started by coded the platforms to act as our floors and walls to act with collisions after coding the avatar to "+
	"move around and change its appearance. "+
    "This is an excellent start to this feature project, as we've newly introduced in Green Belt the set-up is a whole other step that needs to be incorporated! And great games rely on great fondations! "+
	"</p>"
	//"<img src='Images/MovingYourAvatar1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/MovingYourAvatar2.png' width='200'>"

	movingYourAvatarSecondHalf = "<p class = 'debrief'> This session we followed on with practisng how to put togther our very own Super Mario like 2D Platformer! "+CHILDNAME+" began by assigning the "+
	"horizontal platforms the role of ‘floor’ and the verticals the role of ‘wall’. The best way to think about roles is within the hierarchy of game design. "+CHILDNAME+" knows how to configure movement "+
	"schemes, sprites, loops, artificial gravity, collisions and so forth. So, now we need to teach "+CHILDNAME+" how to place "+himher+" self in the “director’s chair” so to speak. As coding "+
	"the mechanics is one thing, but to successfully piece a full game together we need to be able to layer assets on top of the script skeleton to really bring it to life! "+
	"<br>"+
	"Think of it like this, "+CHILDNAME+" has great knowledge of how to make things function and how to apply it, we now need to build the world for these ideas and code to work in. "+
	"After setting our floor and wall boundaries in this large introduction to many of the design concepts we are going to be using throughout Green belt. We created a small mini-game with our "+
	"new platforms to get our avatar to the top of the screen! As we look to develop complex platform games using our avatar in tandem with floor & wall collision it sets an extraordinary "+
	"foundation for "+CHILDNAME+" to grow. "+
	"</p>"
	//"<img src='Images/MovingYourAvatar1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/MovingYourAvatar2.png' width='200'>"

	basicPlatformingFULL = "<p class = 'debrief'> Today we got to build on our concepts from the previous project to start building a proper platforming game! Adding in floors, walls & ceilings to be interacted with "+
	"by our avatar even after hiding them behind our background. "+CHILDNAME+"  started by importing our platforming land before coding in the in world rules and roles. "+HESHE+" added rectangular "+
	"platforms to use where our avatar was standing. We had to ensure that the roles of floor or wall were correct as they have different operational conditions and could cause some crazy bugs in our game!"+
	"We repeated this step until "+CHILDNAME+"  was satisfied that all roles had been given in our world. "+
	"<br>"+
	"<br>"+
	"So, we have our top and side of our platform covered but we don't have anything for the lower portion! To accomplish this we will be introducing yet another role, ceilings! This allowed us to "+
	"ensure that our avatar cannot jump and clip through the underside of our level. "+CHILDNAME+" 's next challenge was enemy placement! This may sound quite simple, but great enemies and their "+
	"placements can make all the difference! Take for example classic games such as Super Mario and Sonic the Hedgehog, on the surface they are pretty straightforward platformers just like "+CHILDNAME+" "+
	"is starting to create but they had character and a very interesting assortment of levels and designs. "+
	"<br>"+
	"<br>"+
	" "+HESHE+" started with a single enemy turtle, as the road to Black Belt game design starts with a single enemy!  This way our game can look much more realistic and we even added in a collision "+
	"mechanic that would result in a lost life or game over if touched so we had to dodge! We coded our turtle and avatar to move and swap direction when the enemy reaches the walls to stop it from falling "+
	"off the edge. To finalise our basic level design we need a way out or a goal! So "+CHILDNAME+" used our hit function to state that when our rectangle “exit door” was touched the level ended. We can even "+
	"use this tactic and apply it to a gem or coin so that when it is ‘collected’ our goal is accomplished and so the level is finished. "+
	"<br>"+
	"<br>"+
	"The script written today was relatively simplistic but our focus was all about applying these concepts to more game formats, this will eventually and preparing "+himher+" for the jump up to 3D design "+
	"in Blue belt as well as reinforcing the concepts already covered! Great stuff today "+CHILDNAME+"! "+
	"</p>"
	//"<img src='Images/BasicPlatforming1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/BasicPlatformingC.png' width='200'>"+
	//"<img src='Images/BasicPlatforming2.png' width='200'>"

	basicPlatformingFirstHalf = "<p class = 'debrief'> Today we got to build on our concepts from the previous project to start building a proper platforming game! Adding in floors, walls & ceilings to be interacted with "+
	"by our avatar even after hiding them behind our background. "+CHILDNAME+"  started by importing our platforming land before coding in the in world rules and roles. "+HESHE+" added rectangular "+
	"platforms to use where our avatar was standing. We had to ensure that the roles of floor or wall were correct as they have different operational conditions and could cause some crazy bugs in our game!"+
	"We repeated this step until "+CHILDNAME+"  was satisfied that all roles had been given in our world. "+
	"<br>"+
	"<br>"+
	"So, we have our top and side of our platform covered but we don't have anything for the lower portion! To accomplish this we will be introducing yet another role, ceilings! This allowed us to "+
	"ensure that our avatar cannot jump and clip through the underside of our level. "+CHILDNAME+" 's next challenge was enemy placement! This may sound quite simple, but great enemies and their "+
	"placements can make all the difference! Take for example classic games such as Super Mario and Sonic the Hedgehog, on the surface they are pretty straightforward platformers just like "+CHILDNAME+" "+
	"is starting to create but the they had character and a very interesting assortment of levels and designs. "+
    "</p>"
	//"<img src='Images/BasicPlatforming1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/BasicPlatformingC.png' width='200'>"+
	//"<img src='Images/BasicPlatforming2.png' width='200'>"

	basicPlatformingSecondHalf = "<p class = 'debrief'> Diving straight back into our Platforming Project, "+HESHE+" started with a single enemy turtle, as the road to Black Belt game design starts "+
	"with a single enemy!  This way our game can look much more realistic and we even added in a collision mechanic that would result in a lost life or game over if touched so we had to dodge! "+
	"We coded our turtle and avatar to move and swap direction when the enemy reaches the walls to stop it from falling off the edge. To finalise our basic level design we need a way out or a goal! "+
	"So "+CHILDNAME+" used our hit function to state that when our rectangle “exit door” was touched the level ended. We can even use this tactic and apply it to a gem or coin so that when it is "+
	"‘collected’ our goal is accomplished and so the level is finished. "+
	"<br>"+
	"<br>"+
	"The script written today was relatively simplistic but our focus was all about applying these concepts to more game formats, this will eventually and preparing "+himher+" for the jump up to 3D design "+
	"in Blue belt as well as reinforcing the concepts already covered! Great stuff today "+CHILDNAME+"! "+
	"</p>"
	//"<img src='Images/BasicPlatforming1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/BasicPlatformingC.png' width='200'>"+
	//"<img src='Images/BasicPlatforming2.png' width='200'>"

	exploringTheForestFULL = "<p class = 'debrief'> In today’s project we took it to the next level! Now was the time to really explore what can be done with our game development platform and how to make our "+
	"games as efficient as possible."+
	"<br>"+
	""+CHILDNAME+" used a large ‘world’ that extended beyond the edges of the scene, this is useful when we have enemies that we want to surprise the player (hiding just off screen) or for a whole host of "+
	"other goodies!"+
	"<br>"+
	"<br>"+
	"To kick things off  "+CHILDNAME+" used the fundamentals of platformer creation as "+heshe+" has done in previous games to add in the floors, walls and ceilings, then hiding them from view. Putting "+
	"together this back-end is absolutely vital but of course we do not want the player to be able to view that as it will break immersion. "+HESHE+" also had a look at how to edit our environment, for "+
	"this we can import assets of our choosing such as hills and walls to allocate roles for them. This allowed us to make use of the full height of the screen and to take our game and character movement "+
	"both horizontally and vertically."+
	"<br>"+
	"<br>"+
	"After this we went on to include our avatar so that we can interact and walk through the scene, as well as our enemies for us to attack or avoid and coins or objects that we can use to make a point "+
	"system. We looked at using new sprites for our project and were thinking about if we can use them as friend or foe! Just as before, this project has a primary focus of overall game design. "+CHILDNAME+ 
	"had to dictate enemy placement, character pathing and collectable pacing! All these factors can really affect how the game actually works and player enjoyment! This more ‘interior design’ approach "+
	"will be fantastic going forward and now "+CHILDNAME+" can combine "+hisher+" technical skills with some artsy ambition!"+
	"<br>"+
	"<br>"+
	"By "+CHILDNAME+" starting to implement these more creative ideas within our games we can also look at ways to win and lose, for instance using tools we have learned to create score systems inside our "+
	"global variables seamlessly!  Woah! We have covered a lot today and with this big brain, I wonder if "+CHILDNAME+" will end up creating the next big hit!"+
	"</p>"
	//"<img src='Images/ExploreTheForest1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/ExploreTheForest2.png' width='200'>"

	exploringTheForestFirstHalf = "<p class = 'debrief'> In today’s project we took it to the next level! Now was the time to really explore what can be done with our game development platform and how to make "+
	"our games as efficient as possible."+
	"<br>"+
	"<br>"+
	""+CHILDNAME+" used a large ‘world’ that extended beyond the edges of the scene, this is useful when we have enemies that we want to surprise the player (hiding just off screen) or for a whole host of other "+
	"goodies!" +
	"<br>"+
	"<br>"+
	"To kick things off  "+CHILDNAME+" used the fundamentals of platformer creation as "+heshe+" has done in previous games to add in the floors, walls and ceilings, then hiding them from view. Putting together "+
	"this back-end is absolutely vital but of course we do not want the player to be able to view that as it will break immersion. "+HESHE+" also had a look at how to edit our environment, for this we can import "+
	"assets of our choosing such as hills and walls to allocate roles for them. This allowed us to make use of the full height of the screen and to take our game and character movement both horizontally and "+
	"vertically. Next session we’re going to look at introducing an avatar, enemies and other objects that we can interact with."+
	"</p>"
	//"<img src='Images/ExploreTheForest1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/ExploreTheForest2.png' width='200'>"


	exploringTheForestSecondHalf = "<p class = 'debrief'> Last session we made the scene and codeine the physics of it, such as walls floors and gravity, today we started off by including our avatar so that "+
	"we can interact and walk through the scene, as well as our enemies for us to attack or avoid and coins or objects that we can use to make a point system. We looked at using new sprites for our project "+
	"and were thinking about if we can use them as friend or foe! Just as before, this project has a primary focus of overall game design. "+CHILDNAME+" had to dictate enemy placement, character pathing and "+
	"collectable pacing! All these factors can really affect how the game actually works and player enjoyment! This more ‘interior design’ approach will be fantastic going forward and now "+CHILDNAME+" can "+
	"combine "+hisher+" technical skills with some artsy ambition!"+
	"<br>"+
	"<br>"+
	"By "+CHILDNAME+"  starting to implement these more creative ideas within our games we can also look at ways to win and lose, for instance using tools we have learned to create score systems inside our "+
	"global variables seamlessly!  Woah! We have covered a lot today and with this big brain, I wonder if "+CHILDNAME+" will end up creating the next big hit!"+
	"</p>"
	//"<img src='Images/ExploreTheForest1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/ExploreTheForest2.png' width='200'>"

	spaceBumpersFULL = "<p class = 'debrief'> The time has finally come! "+CHILDNAME+" will now be working on a project that combines technicality with creativity. This game is much like those at an arcade "+
	"when our coins fall down the pegs! To achieve this it uses lots of logic we have utilised previously and certainly some new ones too! "+
	"<br>"+
	"<br>"+
	"To set the scene and to get the space ball rolling, our launch spot was checking if our ball had gone off of our screen. We had to ensure that if it did cross these coordinates it would become inactive "+
	"and return to its starting position. If it was still in play, it would speed up to simulate gravity to eventually fall off and ‘reload’. "+HESHE+" used a nested loop to generate our pegs into a perfect "+
	"grid formation so we were ready to go!"+
	"<br>"+
	"<br>"+
	"Well almost,  "+CHILDNAME+" has a pretty cool looking ball launching system, but now "+heshe+" had to implement how the ball and pegs will interact with each other. We wanted our pegs to have a slightly "+
	"larger hitbox than they seemed too, so we used Math.abs to get the absolute value of the difference between the ball and the peg, and in our if statement so long as that was less than the wiggleroom(our hitbox) "+
	"we would make it ping off! Since the ball can hit the peg from the top, bottom, left or right, "+CHILDNAME+" made it so it would ping off based on the x & yDifference so it would look realistic, bouncing "+
	"to the right if it came from the right etc. "+
	"<br>"+
	"<br>"+
	CHILDNAME+" added in an awesome looking portal asset to make our launch spot look cool and to set the launch speed of our ball! This portal was coded to move left and right across the top of our screen "+
	"and as our pegs were offset after each turn, the game became quite random and fun! Using these basic physics can create fun, random and a dynamic experience for the player provides a unique set of challenges "+
	"each time."+
	"<br>"+
	"<br>"+
	"Like always, we are looking to forever expand on our frameworks to get "+hisher+" brain ticking even more! For instance, some ideas we discussed to improve ‘Space Bumpers’ was to add a celebratory message "+
	"to display to the player when they had cleared the board of pegs. To do this we would create a variable to store the amount of hit pegs and it would be incremented if a peg and ball collide. So, when the "+
	"pegs are all destroyed, we get a ‘Congratulations!’. An idea to make this harder would be to add a life system for the player so if we run out we would have to begin all again!"+
	"<br>"+
	"<br>"+
	"This was a massive game in total so fantastic work "+CHILDNAME+"! "+HESHE+" only one more curriculum based game in all of Green Belt to go, then onto the Prove Yourselves tests where "+CHILDNAME+" can look "+
	"at using that imagination to put together much more customized bodies of work."+
	"</p>"
	//"<img src='Images/SpaceBumpers1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/SpaceBumpers2.png' width='200'>"+
	//"<img src='Images/SpaceBumpersC.png' width='200'>"

	spaceBumpersFirstHalf = "<p class ='debrief'> The time has finally come! "+CHILDNAME+" will now be working on a project that combines technicality with creativity. This game is much like those at an arcade when "+
	"our coins fall down the pegs! To achieve this it uses lots of logic we have utilised previously and certainly some new ones too! "+
	"<br>"+
	"To set the scene and to get the space ball rolling, our launch spot was checking if our ball had gone off of our screen. We had to ensure that if it did cross these coordinates it would become inactive and "+
	"return to its starting position. If it was still in play, it would speed up to simulate gravity to eventually fall off and ‘reload’. "+HESHE+" used a nested loop to generate our pegs into a perfect grid formation."+
	"<br>"+
	"<br>"+
	CHILDNAME+" also added in an awesome looking portal asset to make our launch spot look cool this will also set the launch speed of our ball! This portal was coded to move left and right across the top of our "+
	"screen and as our pegs were offset after each turn, it’ll make the game quite random! Next week we’ll focus more on the interactions between our objects. Great work so far today "+CHILDNAME+"!"+
	"</p>"
	//"<img src='Images/SpaceBumpers1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/SpaceBumpers2.png' width='200'>"+
	//"<img src='Images/SpaceBumpersC.png' width='200'>"

	spaceBumpersSecondHalf = "<p class = 'debrief'> Last session we made our launch spot, pegs and set up the games gravity, but today we needed to implement how the ball and pegs will interact with each other. We "+
	"wanted our pegs to have a slightly larger hitbox than they seemed too, so we used Math.abs to get the absolute value of the difference between the ball and the peg, and in our if statement so long as that was "+
	"less than the wiggleroom(our hitbox) we would make it ping off! Since the ball can hit the peg from the top, bottom, left or right, "+CHILDNAME+" made it so it would ping off based on the x & yDifference so it "+
	"would look realistic, bouncing to the right if it came from the right etc. "+
	"<br>"+
	"<br>"+
	"Like always, we are looking to forever expand on our frameworks to get "+hisher+" brain ticking even more! For instance, some ideas we discussed to improve ‘Space Bumpers’ was to add a celebratory message to "+
	"display to the player when they had cleared the board of pegs. To do this we would create a variable to store the amount of hit pegs and it would be incremented if a peg and ball collide. So, when the pegs are "+
	"all destroyed, we get a ‘Congratulations!’. An idea to make this harder would be to add a life system for the player so if we run out we would have to begin all again!" +
	"<br>"+
	"<br>"+
	"This was a massive game in total so fantastic work "+CHILDNAME+"! "+HESHE+"only one more curriculum based game in all of Green Belt to go, then onto the Prove Yourselves tests where "+CHILDNAME+" can look "+
	"at using that imagination to put together much more customized bodies of work. Brilliant stuff today "+CHILDNAME+"!"+
	"</p>"
	//"<img src='Images/SpaceBumpers1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/SpaceBumpers2.png' width='200'>"+
	//"<img src='Images/SpaceBumpersC.png' width='200'>"

	ninjaQuestFULL= "<p class = 'debrief'>Welcome, "+CHILDNAME+" to the final destination, the edge of the universe, the be all and end all…"+
	"<br>"+
	"<br>"+
	"Well, not quite yet!! Ninja Quest is the last curriculum game of all of Green Belt! Once this game is completed we will be moving onto our final Prove Yourself "+
	"activities where "+CHILDNAME+" will be creating our games with more independence using a short brief detailing how we want the game to look when it is finished! "+
	"<br>"+
	"<br>"+
	"This will test all of  "+CHILDNAME+"‘s coding skills whilst also being a great lesson in how to develop and tackle chunks of larger projects piece by piece. "+
	"Which is especially handy when we use more professional software throughout Blue Belt and beyond!"+
	"<br>"+
	"<br>"+
	"In the Ninja quest which we completed today, "+CHILDNAME+" added in a ninja character asset and coded it to move around with the arrow keys but this time "
	+"selecting the relevant frame to appear like it was animated and moving in each direction. "+HESHE+" allocated our floor, wall and ceiling roles to our "+
	"game world so this limited our ninjas multi-directional movement, depending on where we wanted guide the players path."+
	"<br>"+
	"<br>"+
	CHILDNAME+" then created our ‘interactables’ objects of a BlueDoor, PinkDoor and GoldenDoor with their respective keys and an if statement with a collison "+
	"to ‘remove/open’ them if the correct key was in hand. A tricky challenge that "+heshe+" faced when playtesting our game at this stage was our role allocation. "+
	"As this game was from top down perspective, objects that would constitute ‘ceilings’ and ‘floors’ in a 2D side scroller would now in fact be ‘walls’. "+
	"This would prevent our ninja character from falling through some parts of our maze-like structure as we progressed."+
	"<br>"+
	"<br>"+
	"Then we needed to give ourselves a true test! "+CHILDNAME+" inserted some enemy ninja assets and had them throwing shurikens at us. This was coded with some "+
	"forward speed functions, coordinate resets and a remove feature for our hero ninja so we were reset if hit. "+CHILDNAME+" could add in as many of these enemies "+
	"as "+heshe+" liked to turn the game into a crazy ninja battle fiasco!"+
	"<br>"+
	"<br>"+
	"This entire game was designed and coded from scratch by "+CHILDNAME+", we are incredibly impressed and next up we will yet again be kicking it up another gear "+
	"to get one step closer to mastering 2D game design! Absolutely fantastic job today!"+
	"</p>"
	//"<img src='Images/NinjaQuest1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/NinjaQuestC.png' width='200'>"

	snapFull = "<p class = 'debrief'>Here we are going to play some snap! We started by in adding an asset which is a deck of cards with corresponding frames. "+
	CHILDNAME+" began the framework with 2 card arrays, for the 2 decks! Then a for loop that runs 52 times, each time pushing (adding) itself into the cardsArr deck."+
	"<br>"+
	"<br>"+
	"These games will be giving much more independence to "+CHILDNAME+" as "+heshe+" looks to put "+hisher+" skills to the test in our projects! This is a change of pace "+
	"from our usual structure but "+CHILDNAME+" did amazingly and adapted superbly to this new challenge today!"+
	"<br>"+
	"<br>"+
	"We then moved into making a clone of the cards, and started a timer that lasted as long as "+CHILDNAME+" wanted! "+HESHE+" set up our variables and ensured that "+
	"our 2 decks would operate to simulate card selection! We get this number from the length of our array, so as the deck gets shorter, so do our selections!"+
	"<br>"+
	"<br>"+
	"Finally, when both cards display their random numbers, we deleted the card we just displayed from the deck using a splice! If the 2 cards are equal, we make "+
	"‘$this.snap’ true. Otherwise, make it false! if "+heshe+" Clicked a button and '$this.snap' was true, we would win the game! If '$this.snap was false, we would "+
	"lose! Brilliant job "+CHILDNAME+"!"+
	"</p>"
	//"<img src='Images/Snap1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/SnapC.png' width='200'>"

	snapFirstHalf = "<p class = 'debrief'>Today "+CHILDNAME+" set up all the foundations for "+hisher+" first Green Belt Prove Yourself, Snap!"+
	"<br>"+
	"<br>"+
	"We started by in adding an asset which is a single card along with 52 with corresponding frames for each other card you can get in a deck of cards! "+
	CHILDNAME+" began the framework with 2 card arrays, for the 2 decks! Then a for loop that runs 52 times, each time pushing (adding) itself into the cardsArr deck."+
	"<br>"+
	"<br>"+
	"These games will be giving much more independence to "+CHILDNAME+" as "+heshe+" looks to put "+hisher+" skills to the test in our projects! This is a change of pace "+
	"from our usual structure but "+CHILDNAME+" did amazingly and adapted superbly to this new challenge today! Next session we will continue this foundation and finish off by running a constant loop "+
	"to select new cards and compare the two of them to eachother! Great work today "+CHILDNAME+"!"+
	"</p>"
	//"<img src='Images/Snap1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/SnapC.png' width='200'>"

	snapSeocndHalf = "<p class = 'debrief'>Today "+CHILDNAME+" completed "+hisher+" first Green Belt Prove Yourself, brilliant work today!"+
	"<br>"+
	"<br>"+
	"From before, we already had setup the 2 decks of cards but needed to create the timer to draw new cards every few seconds! "+CHILDNAME+" firstly made a clone of the cards, and started a timer that lasted as "+
	"long as "+heshe+" wanted! "+HESHE+" set up our variables and ensured that "+
	"our 2 decks would operate to simulate card selection! We get this number from the length of our array, so as the deck gets shorter, so do our selections!"+
	"<br>"+
	"<br>"+
	"Finally, when both cards display their random numbers, we deleted the card we just displayed from the deck using a splice! If the 2 cards are equal, we make "+
	"‘$this.snap’ true. Otherwise, make it false! if "+heshe+" Clicked a button and '$this.snap' was true, we would win the game! If '$this.snap was false, we would "+
	"lose! Brilliant job "+CHILDNAME+"!"+
	"</p>"
	//"<img src='Images/Snap1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/SnapC.png' width='200'>"

	calculator= "<p class = 'debrief'>For our second Green Belt prove yourself test "+CHILDNAME+" tackled making a calculator! We began the lesson by setting up the actual "+
	"body of the calculator. To do this we input a rectangle (call it ‘button’) and a label (call it ‘number’). "+CHILDNAME+" grouped these 2 things together so whenever we cloned the group, we would get "+
	"new buttons and new text boxes to display what the button will do! Finally "+heshe+" used our handy nested loops to create all of our blocks in a grid and a cloneIncrement to give each clone a number , just like "+
	"in our Scramble project long ago!"+
	"<br>"+
	"<br>"+
	"Building a calculator in javaScript is a great test of the skills that "+CHILDNAME+" has been learning throughout "+hisher+" belts. As "+CHILDNAME+" progresses through the "+
	"curriculum "+heshe+" is growing more and more confident in "+hisher+" coding abilities! Once the nested loop was made for cloning each of the groups, we then created an "+
	"array which contained everything we wanted to display on our calculator. It started from left to right and we would form all of these into a 4x4 grid afterwards, to turn this "+
	"one dimensional array, into a 2D one for our calculator with all of its inputs available."+
	"<br>"+
	"<br>"+
	"We started by adding a new array, called 'Calculations', and every time a button was clicked, we added the number that was displaying on that button into it! This way we build up an array filled with"+
	"every selection we have made so far! Then we can evaluate it when we press the '=' key. To assign each of our buttons something from the original array which had "+
	"all our numbers on, we created a cloneIncrement back from last lesson. CloneIncrement started at 0, and every time we made a new clone, we added one to it. This way every clone of our "+
	"button had a corresponding number assigned to it. That way we could use this number to select a value in our array, making a 4x4 grid!"+
	"<br>"+
	"<br>"+
	"Now onto our if statements for clicking "+
	"the equals sign! If the button clicked is an equals sign, we want to add it all up of course! To calculate our inputs, we use ‘eval’ which evaluates any input inside its brackets! "+
	"If I said, ‘eval(12+4)’ it would be 16! However Our 'Calculations' will look like [1,2,+,4], as thats how an array looks when we add things into it one by one with each button press! so we need to "+
	"remove all the commas! We do that with ‘.join(“”)’. And Viola! Now the computer looks at our array as simply 12+4! "+CHILDNAME+" has created "+hisher+" own "+
	"functional calculator using javaScript! This is a brilliant piece of work and a brilliant job by "+CHILDNAME+" today!"+
	"</p>"
	//"<img src='Images/Calculator1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/CalculatorC.png' width='200'>"

	calculatorFirstHalf = "<p class = 'debrief'>For our second Green Belt prove yourself test "+CHILDNAME+" started making a calculator! We began the lesson by setting up the actual "+
	"body of the calculator. To do this we input a rectangle (call it ‘button’) and a label (call it ‘number’). "+CHILDNAME+" grouped these 2 things together so whenever we cloned the group, we would get "+
	"new buttons and new text boxes to display what the button will do! Finally "+heshe+" used our handy nested loops to create all of our blocks in a grid and a cloneIncrement to give each clone a number , just like "+
	"in our Scramble project long ago!"+
	"<br>"+
	"<br>"+
	"Building a calculator in javaScript is a great test of the skills that "+CHILDNAME+" has been learning throughout "+hisher+" belts. As "+CHILDNAME+" progresses through the "+
	"curriculum "+heshe+" is growing more and more confident in "+hisher+" coding abilities! Once the nested loop was made for cloning each of the groups, we then created an "+
	"array which contained everything we wanted to display on our calculator. It started from left to right and we would form all of these into a 4x4 grid later, to turn this "+
	"one dimensional array, into a 2D one for our calculator with all of its inputs available."+
	"<br>"+
	"<br>"+
	"Today "+CHILDNAME+" created the entire base of the calculator on the front end side, and added all of the neccesarry inputs we would need for a calculator on the back end. "+
	"Next lesson "+CHILDNAME+" will jump straight into linking these together to get a fully functioning personalised calculator! Great work today "+CHILDNAME+"!"+
	"</p>"
	//"<img src='Images/Calculator1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/CalculatorC.png' width='200'>"

	calculatorSecondHalf = "<p class = 'debrief'>"+CHILDNAME+" jumped straight back into Calculator today and finished linking our front end buttons with the back end input code!"+
	"<br>"+
	"<br>"+
	"We started by adding a new array, called 'Calculations', and every time a button was clicked, we added the number that was displaying on that button into it! This way we build up an array filled with"+
	"every selection we have made so far! Then we can evaluate it when we press the '=' key. To assign each of our buttons something from the original array which had "+
	"all our numbers on, we created a cloneIncrement back from last lesson. CloneIncrement started at 0, and every time we made a new clone, we added one to it. This way every clone of our "+
	"button had a corresponding number assigned to it. That way we could use this number to select a value in our array, making a 4x4 grid!"+
	"<br>"+
	"<br>"+
	"Now onto our if statements for clicking "+
	"the equals sign! If the button clicked is an equals sign, we want to add it all up of course! To calculate our inputs, we use ‘eval’ which evaluates any input inside its brackets! "+
	"If I said, ‘eval(12+4)’ it would be 16! However Our 'Calculations' will look like [1,2,+,4], as thats how an array looks when we add things into it one by one with each button press! so we need to "+
	"remove all the commas! We do that with ‘.join(“”)’. And Viola! Now the computer looks at our array as simply 12+4! "+CHILDNAME+" has created "+hisher+" own "+
	"functional calculator using javaScript! This is a brilliant piece of work and a brilliant job by "+CHILDNAME+" today!"+
	"</p>"
	//"<img src='Images/Calculator1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/CalculatorC.png' width='200'>"

	rhythm = "<p class = 'debrief'>If you’re a bit of a gamer and have some feisty footwork, You may have heard of or even busted some moves to such classics as "+
	"Dance Dance Revolution, PaRappa Rapper, Guitar Hero or a newest hit trend Friday Night Funkin'! Well, in today's session we got "+CHILDNAME+" to create "+hisher+ " "+
	"own version of this early-to-mid 2000s play style with a ninja aesthetic."+
	"<br>"+
	"<br>"+
	"The aim of this game revolves around "+CHILDNAME+"‘s character having to win a musical contest! To achieve this "+heshe+" has to mimic the opponent's notes with "+
	"timed inputs while trying to get the best accuracy score for duration of the song!  During the game a pattern of notes (represented as arrows), which "+CHILDNAME+
	"must then mirror by using the arrow keys or the keys W, A, S, and D."+
	"<br>"+
	"<br>"+
	"We kicked this off by setting up our objects within our scene, such as the rockstar stage background, quicktime buttons and a ‘playing area’ where our inputs "+
	"would constitute as correct when pressed. Now let's get coding! Firstly we "+heshe+" created our score, arrow speeds and time global variables. "+HESHE+" also "+
	"add $this.scene.missed which we will use to judge accuracy! Next we had to make a timer for the arrows and inside this timer "+heshe+" made a random number, "+
	"then a switch case! Each case was linked to each of the four arrow key clones."+
	"<br>"+
	"<br>"+
	"Then the real beat and rhythm can be created! Inside our arrows "+CHILDNAME+" set the speed and downward momentum to fall into our ‘playing area’ when the scene "+
	"is set into its play state (which is when we start the game). "+HESHE+" also created the variable to contain the info when we press the correct key on "+
	"the keyboard. If the correct key is pressed when the object is touching our target, we score a point! On "+
	"the flip side, if the arrow makes it all the way to the bottom of our scene, then we add one to our ‘missed’ tracker!"+
	"<br>"+
	"<br>"+
	"Underneath this big and groovy behemoth of code, "+CHILDNAME+" placed another timer which will contain a percentage of our accuracy after a while! We could even "+
	"change all the variables up top to change the difficulty, which could consist of increasing the speed of incoming arrows or the patterns of arrows becoming more "+
	"complicated. Using variables for our speeds difficulty allow for a lot of easy customisation at the end of the lesson, which makes for great fun! Great job "+CHILDNAME+"!"+
	"</p>"
	//"<img src='Images/Rhythm1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/RhythmC.png' width='200'>"+
	//"<img src='Images/Rhythm2.png' width='200'>"

	rythmFirstHalf = "<p class = 'debrief'>"+CHILDNAME+" got to make the first half of one of the most popular games of all time!"+
	"<br>"+
	"<br>"+
	"If you’re a bit of a gamer and have some feisty footwork, You may have heard of or even busted some moves to such classics as "+
	"Dance Dance Revolution, PaRappa Rapper, Guitar Hero or a newest hit trend Friday Night Funkin'! In today's session we got "+CHILDNAME+" to create most of "+hisher+ " "+
	"own version of this early-to-mid 2000s play style with a ninja aesthetic!"+
	"<br>"+
	"<br>"+
	"The aim of this game revolves around "+CHILDNAME+"‘s character having to win a musical contest! To achieve this "+heshe+" has to mimic the opponent's notes with "+
	"timed inputs while trying to get the best accuracy score for duration of the song!  During the game a pattern of notes (represented as arrows), which "+CHILDNAME+
	"must then mirror by using the arrow keys or the keys W, A, S, and D."+
	"<br>"+
	"<br>"+
	"We kicked this off by setting up our objects within our scene, such as the rockstar stage background, quicktime buttons and a ‘playing area’ where our inputs "+
	"would constitute as correct when pressed. Now let's get coding! Firstly we "+heshe+" created our score, arrow speeds and time global variables. "+HESHE+" also "+
	"add $this.scene.missed which we will use to judge accuracy next lesson! "+CHILDNAME+" had to make a timer for the arrows and inside this timer "+heshe+" made a random number, "+
	"then a switch case! Each case was linked to each of the four arrow key clones and would randomly clone them over time to start falling down!"+
	"<br>"+
	"<br>"+
	"This was a brilliant start to this massive game from "+CHILDNAME+" today! Keep up the great progress!"+
	"</p>"
	//"<img src='Images/Rhythm1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/RhythmC.png' width='200'>"+
	//"<img src='Images/Rhythm2.png' width='200'>"

	rythmSecondHalf  = "<p class = 'debrief'>"+CHILDNAME+" got right back into Green Belt today, and finished all of the super fun 'Rythm' game!"+
	"<br>"+
	"<br>"+
	"Firstly it was time to create the real beat and rythm of the game! Inside our arrows "+CHILDNAME+" set the speed and downward momentum to fall into our ‘playing area’ when the scene "+
	"is set into its play state (which is when we start the game). "+HESHE+" also created the variable to contain the info when we press the correct key on "+
	"the keyboard. If the correct key is pressed when the object is touching our target, we score a point! On "+
	"the flip side, if the arrow makes it all the way to the bottom of our scene, then we add one to our ‘missed’ tracker! Not good!"+
	"<br>"+
	"<br>"+
	"Underneath this big and groovy behemoth of code, "+CHILDNAME+" placed another timer which would contain a checker of our accuracy after a while! We could even "+
	"change all the variables up top to change the difficulty, which could consist of increasing the speed of incoming arrows or the patterns of arrows becoming more "+
	"complicated and fast! "+
	"<br>"+
	"<br>"+
	"Using variables for our speeds & difficulty allow for a lot of easy customisation at the end of the lesson, which makes for great fun! Great job today "+CHILDNAME+"!"
	//"<img src='Images/Rhythm1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/RhythmC.png' width='200'>"+
	//"<img src='Images/Rhythm2.png' width='200'>"

	naughtsAndCrosses = "<p class = 'debrief'>Today "+CHILDNAME+" got to create a complex naughts and crosses game! "+
	"<br>"+
	"<br>"+
	"It’s a simple game to play but is a very large game to "+
	"code properly. "+CHILDNAME+" firstly create our nested loop to make clones of all of our tiles into a 3x3 grid, and store a number inside each one using our cloneIncrement. Clone Increment "+
	"started at 0 and each time the loop ran we created a tile, put the cloneIncrement inside the Tile, and added one to the cloneIncrement! We then set the players turn to true "+
	"to prepare for our selection of the tiles!"+
	"<br>"+
	"<br>"+
	"But we cant just select any old tile! There are conditions to the game of noughts and crosses we need to know! One cannot simply click on a tile that has already been used! "+
	"To cater for these conditions, "+CHILDNAME+" created an array containing every tile's number! Once a tile is clicked on, this will be removed. When we click on a "+
	"tile "+CHILDNAME+" created a function that would remove the tile from our allTiles array as well as making it highlight blue! This allTiles array "+
	"became incredibly useful as when we called the function to let the opponent take their turn they would select a random card from whatever was left in the array. "+
	"This way as we made our selections and removed the tiles the computer could not make the same selection and overwrite ourselves."+
	"<br>"+
	"<br>"+
	"This is a simple use of an opponent and a great example of how to add other inputs into our projects to fight against! Once we made a selection, we would then run a function that would "+
	"if we had won the game! To do this we ran a for loop running through our allTiles array checking if we had all the tiles in the top row removed, all tiles in the middle "+
	"row removed, and so on and so on. As this was a function using a parameter, we didnt have to copy the code again to check if the opponent won! We simply changed what was in the '( )' brackets "+
	"to opponentArray and it would check the opponents selection and say that we lost the game! "+
	"<br>"+
	"<br>"+
	CHILDNAME+" is becoming much more adept at creating and calling "+hisher+" own functions and has accustomed brilliantly to the new "+
	"and more independent format of these Green Belt Projects! "+CHILDNAME+" is doing brilliantly, keep it up!"+
	"</p>"
	//"<img src='Images/NaughtsAC1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/NaughtsACC.png' width='200'>"

	naughtsAndCrossesFirstHalf = "<p class = 'debrief'>Today "+CHILDNAME+" got to create the first half of a complex naughts and crosses game! "+
	"<br>"+
	"<br>"+
	"It’s a simple game to play but is a very large game to "+
	"code properly. "+CHILDNAME+" firstly create our nested loop to make clones of all of our tiles into a 3x3 grid, and store a number inside each one using our cloneIncrement. Clone Increment "+
	"started at 0 and each time the loop ran we created a tile, put the cloneIncrement inside the Tile, and added one to the cloneIncrement! We then set the players turn to true "+
	"to prepare for our selection of the tiles!"+
	"<br>"+
	"<br>"+
	"But we cant just select any old tile! There are conditions to the game of noughts and crosses we need to know! One cannot simply click on a tile that has already been used! "+
	"To cater for these conditions, "+CHILDNAME+" created an array containing every tile's number! Once a tile is clicked on, this will be removed. When we click on a "+
	"tile "+CHILDNAME+" created a function that would remove the tile from our allTiles array as well as making it highlight blue! This allTiles array "+
	"will be incredibly useful when we create the function to let the opponent take their turn they would select a random card from whatever was left in the array. Two birds with one stone! "+
	"<br>"+
	"<br>"+
	"This was great work from "+CHILDNAME+" today, laying the foundations of another large Green Belt project in a focused session! Keep it up!"+
	"</p>"
	//"<img src='Images/NaughtsAC1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/NaughtsACC.png' width='200'>"

	naughtsAndCrossesSecondHalf = "<p class = 'debrief'>Today "+CHILDNAME+" finished off all of our complex naughts and crosses game! "+
	"<br>"+
	"<br>"+
	CHILDNAME+" begun the lesson by creating a function to give the opponent a chance! This function utilised the allTiles array from before! Whenever the player selected a tile, its corresponding "+
	"number was removed from this array, so after a while it became a very useful tool allowing the computer to see exactly which tiles where remaining. "+CHILDNAME+" used a loop to randomly look through "+
	"this array and slect a tile. Once the tile was selected it would then highlight RED and, once again, remove its number from the allTiles array!"+
	"<br>"+
	"<br>"+
	"This is a simple use of an opponent and a great example of how to add other inputs into our projects to fight against! Once we made a selection, we would then run a function that would "+
	"if we had won the game! To do this we ran a for loop running through our allTiles array checking if we had all the tiles in the top row removed, all tiles in the middle "+
	"row removed, and so on and so on. As this was a function using a parameter, we didnt have to copy the code again to check if the opponent won! We simply changed what was in the '( )' brackets "+
	"to opponentArray and it would check the opponents selection and say that we lost the game!"+
	"<br>"+
	"<br>"+
	CHILDNAME+" is becoming much more adept at creating and calling "+hisher+" own functions and has accustomed brilliantly to the new "+
	"and more independent format of these Green Belt Projects! "+CHILDNAME+" is doing brilliantly, keep it up!"+
	"</p>"
	//"<img src='Images/NaughtsAC1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/NaughtsACC.png' width='200'>"

	tankRace = "<p class = 'debrief'>Today "+CHILDNAME+" got to create one of the funnest games at all Code Ninjas, TANK RACE!"+
	"<br>"+
	"<br>"+
	"It is A dodging tank game! We had tanks flying from "+
	"in front of us and behind us at different speeds making for a very difficult 2D arcade style retro game! We firstly added the red & blue tanks before then rotating them "+
	"correctly along with a score system giving the player extra points as time goes by. The road that we added would be the main focus point of the game of course!"+
	"<br>"+
	"<br>"+
	"Just like Ninja Race in Orange Belt, we won't be moving the tanks, we’ll be moving the road along the bottom to give us the illusion that the tanks are moving along very quickly! "+
	"At the start of the game a clone of the road was placed higher up off the screen, and they were both coded to move down. When a road hit the bottom it teleported back to the top to give a "+
	"never ending illusion of movement! "+CHILDNAME+" also created a random number generator for only 2 numbers, so a 50/50! It would either run a function to make a tank appear from in front of us and fall backwards, or appear behind "+
	"us and move forward to overtake us!"+
	"<br>"+
	"<br>"+
	"These functions contained all the neccessary speeds for the tanks to allow this to happen, along with the strength of gravity to make them appear like they are moving faster or slower up the screen! "+
	"Then we needed to code an objective to the game of course! If the player tank hit a blue tank we would reduce points as well as make the tank spin out! The player could move by using the W, A, S or D keys and the spinning out tank "+
	"was handled by "+CHILDNAME+" creating a 'Contact' function!"+
	"<br>"+
	"<br>"+
	"These functions are a great way to shorten down our code and were vital to making the code readable and adjustable! This skill to look into how best to shorten down our code is "+
	"starting to get very important as we look into bigger and bigger scripts for our games. For example a 50/50 if statement that runs a function called 'MoveTankForward' and the opposite of the "+
	"50/50 to run a function called 'MoveTankBackward' looks very simple and it much easier to code and debug that the 50/50 running the 15 lines of code to make the tank move forwards or backwards, then things start "+
	"to get very confusing, especially when there is a bug!"+
	"<br>"+
	"<br>"+
	"Fantastic work finishing this one "+CHILDNAME+" glad you got to give it a good play and dodge all the tanks flying from everywhere!"+
	"</p>"
	//"<img src='Images/TankRaceC.png' class='debriefimg' width='200'>"+
	//"<img src='Images/TankRace1.png' width='200'>"+
	//"<img src='Images/TankRace2.png' width='200'>"

	tankRaceFirstHalf = "<p class = 'debrief'> Today "+CHILDNAME+" got to begin creating one of the funnest games at all Code Ninjas, TANK RACE!"+
	"<br>"+
	"<br>"+
	"It is A dodging tank game! We had tanks flying from "+
	"in front of us and behind us at different speeds making for a very difficult 2D arcade style retro game! We firstly added the red & blue tanks before then rotating them "+
	"correctly along with a score system giving the player extra points as time goes by. The road that we added would be the main focus point of the game of course!"+
	"<br>"+
	"<br>"+
	"Just like Ninja Race in Orange Belt, we won't be moving the tanks, we’ll be moving the road along the bottom to give us the illusion that the tanks are moving along very quickly! "+
	"At the start of the game a clone of the road was placed higher up off the screen, and they were both coded to move down. When a road hit the bottom it teleported back to the top to give a "+
	"never ending illusion of movement! "+CHILDNAME+" also created a random number generator for only 2 numbers, so a 50/50! It would either run a function to make a tank appear from in front of us and fall backwards, or appear behind "+
	"us and move forward to overtake us!"+
	"<br>"+
	"<br>"+
	"Next session we will be creating these functions to move the tanks forwards or backwards along with coding the tanks to smash into eachother and lose us points if we couldnt dodge it! Great work so far on this project "+CHILDNAME+"! Keep it up!"+
	"</p>"
	//"<img src='Images/TankRaceC.png' class='debriefimg' width='200'>"+
	//"<img src='Images/TankRace1.png' width='200'>"+
	//"<img src='Images/TankRace2.png' width='200'>"

	tankRaceSecondHalf = "<p class = 'debrief'> Today "+CHILDNAME+" got straight back into "+hisher+" TANK RACE by creating the function to move our tanks up the screen (overtake the player) or down the screen! (be overtaken by the player)"+
	"<br>"+
	"<br>"+
	"These functions contained all the neccessary speeds for the tanks to allow this to happen, along with the strength of gravity to make them appear like they are moving faster or slower up the screen! "+
	"Then we needed to code an objective to the game of course! If the player tank hit a blue tank we would reduce points as well as make the tank spin out! The player could move by using the W, A, S or D keys and the spinning out tank "+
	"was handled by "+CHILDNAME+" creating a 'Contact' function!"+
	"<br>"+
	"<br>"+
	"These functions are a great way to shorten down our code and were vital to making the code readable and adjustable! This skill to look into how best to shorten down our code is "+
	"starting to get very important as we look into bigger and bigger scripts for our games. For example a 50/50 if statement that runs a function called 'MoveTankForward' and the opposite of the "+
	"50/50 to run a function called 'MoveTankBackward' looks very simple and it much easier to code and debug that the 50/50 running the 15 lines of code to make the tank move forwards or backwards, then things start "+
	"to get very confusing, especially when there is a bug!"+
	"<br>"+
	"<br>"+
	"Fantastic work finishing this one "+CHILDNAME+" glad you got to give it a good play and dodge all the tanks flying from everywhere!"+
	"</p>"
	//"<img src='Images/TankRaceC.png' class='debriefimg' width='200'>"+
	//"<img src='Images/TankRace1.png' width='200'>"+
	//"<img src='Images/TankRace2.png' width='200'>"

	soduku = "<p class = 'debrief'>Time for another technical classic! Creating Soduku reinforces a lot of our concepts covered over all of these Green Belt projects with Nested loops "+
	"and function creation. This time however when we clone our things, we are cloning a group with many objects inside! This makes selecting the objects inside this group to change their properties rather challenging!"+
	"<br>"+
	"<br>"+
	"Firstly we have to create a variable which selects the group, then using that 'group' variable we look inside again for the objects themselves! GroupCeption! Now we have them selected, we can change them around. In this case "+
	"we want to change the selected rectangle’s colour (so we know what we have selected) and get the number in the box ready to be changed to whatever number we press on our keyboard!"+
	"<br>"+
	"<br>"+
	CHILDNAME+" used a global variable called 'makeSelection' which we could make true whenever we were preparing to change a number in the puzzle. If it was true then we could press a number "+
	"on our keyboard to replace the currently selected tile’s text with that number we pressed. An available numbers array held all of the numbers from 1-9, and whenever we made a selection we would delete that "+
	"number from this array. This way we never repeated any inputs! This is very similar to the Naughts and Crosses game but instead of limiting what we could select, we limit what numbers can be used"+
	"<br>"+
	"<br>"+
	"This would cause an issue if we made a mistake whilst playing the game! What if I accidentally pressed the number 3 when I meant to press 4? That number 3 would be permanently deleted from other selections! Not Good atall! "+
	"The fix to this was a great problem solving mini test for "+CHILDNAME+" which "+heshe+" solved really well with tips from me! The fix was to simply add the currently selected number on the tile we select back into "+
	"the array, so if we accidentally press 3 and delete it, when we go to change the number again it will add 3 back into the available numbers!"+
	"<br>"+
	"<br>"+
	"Finally, we need to check when we win! The code to check if we won was checking our allNumbersSelected array, which contains all the selections we had made, and then adding them all up! If all the rows and columns added up to "+
	"15, then we won! If they didn't, then we displayed a different message that "+CHILDNAME+" got to choose! Great work from "+CHILDNAME+" to complete another technical challenge today, keep up the great work! Only 2 left!"+
	"</p>"
	//"<img src='Images/Soduku1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/SodukuC1.png' width='200'>"+
	//"<img src='Images/SodukuC2.png' width='200'>"

	sodukuFirstHalf = "<p class = 'debrief'>Today "+CHILDNAME+" started off another another technical classic! Soduku!"+
	"<br>"+
	"<br>"+
	"Creating Soduku reinforces a lot of our concepts covered over all of these Green Belt projects with Nested loops "+
	"and function creation. This time however when we clone our things, we are cloning a group with many objects inside! This makes selecting the objects inside this group to change their properties rather challenging!"+
	"<br>"+
	"<br>"+
	"Firstly "+CHILDNAME+" had to create a variable which selects the group, then using that 'group' variable we look inside again for the objects themselves! GroupCeption! Now we have them selected, we can change them around. In this case "+
	"we want to change the selected rectangle’s colour (so we know what we have selected) and get the number in the box ready to be changed to whatever number we press on our keyboard!"+
	"<br>"+
	"<br>"+
	CHILDNAME+" used a global variable called 'makeSelection' which we could make true whenever we were preparing to change a number in the puzzle. If it was true then we could press a number "+
	"on our keyboard to replace the currently selected tile’s text with that number we pressed. But soduku has more rules than this! For example we cannot use the same number more than once in a 3x3 grid, so next session "+
	CHILDNAME+" will have to create an array containing all the available numbers!"+
	"<br>"+
	"<br>"+
	"Great work on this project so far "+CHILDNAME+"! Keep up the great focus you showed today and you will be a Blue Belt in no time atall!"+
	"</p>"
	//"<img src='Images/Soduku1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/SodukuC1.png' width='200'>"+
	//"<img src='Images/SodukuC2.png' width='200'>"

	sodukuSecondHalf = "<p class = 'debrief'>Today "+CHILDNAME+" finished all of "+hisher+" technical classic! Soduku!"+
	"<br>"+
	"<br>"+
	"Last session "+heshe+" created the grid of tiles and the code neccesarry to select each tile and change its number when we wanted. Now we needed to abide by the games rules! Firstly, the rule that you cant repeat numbers in a 3x3 grid!"+
	CHILDNAME+" created an AllNumbers array to hold all of the numbers from 1-9, and whenever we made a selection we would delete that "+
	"number from this array. This way we never repeated any inputs! This is very similar to the Naughts and Crosses game but instead of limiting what we could select, we limit what numbers can be used"+
	"<br>"+
	"<br>"+
	"This would cause an issue if we made a mistake whilst playing the game! What if I accidentally pressed the number 3 when I meant to press 4? That number 3 would be permanently deleted from other selections! Not Good atall! "+
	"The fix to this was a great problem solving mini test for "+CHILDNAME+" which "+heshe+" solved really well with tips from me! The fix was to simply add the currently selected number on the tile we select back into "+
	"the array, so if we accidentally press 3 and delete it, when we go to change the number again it will add 3 back into the available numbers!"+
	"<br>"+
	"<br>"+
	"Finally, we need to check when we win! The code to check if we won was checking our allNumbersSelected array, which contains all the selections we had made, and then adding them all up! If all the rows and columns added up to "+
	"15, then we won! If they didn't, then we displayed a different message that "+CHILDNAME+" got to choose! Great work from "+CHILDNAME+" to complete another technical challenge today, keep up the great work! Only 2 left!"+
	"</p>"
	//"<img src='Images/Soduku1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/SodukuC1.png' width='200'>"+
	//"<img src='Images/SodukuC2.png' width='200'>"

	twentyOne = "<p class = 'debrief'>Now it's time to make another classic! Twenty One is a great coding exercise as we get to learn much more about creating our functions and entering "+
	"values into them which can be carried forwards as a parameter. This helps us so much in this game, and in many other games, to shorten down our code and allow as much automation in the game as possible."+
	"<br>"+
	"<br>"+
	"Wherever possible we always want to cut down on ‘hard coding’ certain aspects of our game, which means that we want to be able to change many values at once without having to go through "+
	"each and every object to make even simple changes. Our function called ‘showCards();’ is a great example of this concept. Whenever "+CHILDNAME+" created a card "+heshe+" would simply "+
	"run the showcards function and input the cards object name, and the label will then update. Either our label, or the dealers (pc) label. This would be selected based on what the parameter was, "+
	"so we didnt have to rewrite the entire function for the opponent, just change the parameter of the function!"+
	"<br>"+
	"<br>"+
	"We then made this function take in that card object and label selected to display a random card face and push the score on the card into an array. If the card was a normal number card, then we pushed whatever "+
	"the random number was +1 (because computers start counting from 0). If it was a picture card, then we pushed 10 into the score."+
	"<br>"+
	"<br>"+
	"Using another function ‘calculateTotal’ we could then make the score show in the selected label using the parameter for the player or the opponents label. Once we had finished with our turn, we would hit a button to let the dealer play! So long as their "+
	"score was below ours, they would keep drawing a new card. So for this they needed to know what our score was! We added this as a parameter 'playerScore' and in a loop we run the condition 'DealerScore < playerScore' so "+
	"This way the dealer would keep drawing cards until they went over 21, or beat the condition, and "+CHILDNAME+" :(, by having a higher score! Drawing the extra cards was actually very simple to do as we simply needed to run the showCards "+
	"function we had already made, but this time updating the dealers "+
	"label and score instead!"+
	"<br>"+
	"<br>"+
	"this is a brilliant exercise in making a set order of functions which automate our games and "+
	"allow for easy changes to be made. For example if "+CHILDNAME+" wanted, "+heshe+" could simply change the score each card gives by changing what is pushed into the score array in the "+
	"showCards function, and it would work along all of our cards! Great work today finishing this mega project! Not long to go until Blue Belt now Ninja!"+
	"</p>"
	//"<img src='Images/TwentyOne1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/TwentyOneC1.png' width='200'>"+
	//"<img src='Images/TwentyOneC2.png' width='200'>"

	twentyOneFirstHalf = "<p class = 'debrief'>"+CHILDNAME+" today created all of the foundation of another classic! Twenty One!"+
	"<br>"+
	"<br>"+
	"Twenty One is a great coding exercise as we get to learn much more about creating our functions and entering "+
	"values into them which can be carried forwards as a parameter. This helps us so much in this game, and in many other games, to shorten down our code and allow as much automation in the game as possible."+
	"<br>"+
	"<br>"+
	"Wherever possible we always want to cut down on ‘hard coding’ certain aspects of our game, which means that we want to be able to change many values at once without having to go through "+
	"each and every object to make even simple changes. Our function called ‘showCards();’ is a great example of this concept. Whenever "+CHILDNAME+" created a card "+heshe+" would simply "+
	"run the showcards function and input the cards object name, and the label will then update. Either our label, or the dealers (pc) label. This would be selected based on what the parameter was, "+
	"so we didnt have to rewrite the entire function for the opponent, just change the parameter of the function!"+
	"<br>"+
	"<br>"+
	"We then made this function take in that card object and label selected to display a random card face and push the score on the card into an array. If the card was a normal number card, then we pushed whatever "+
	"the random number was +1 (because computers start counting from 0). If it was a picture card, then we pushed 10 into the score array."+
	"<br>"+
	"<br>"+
	"This is a load of set up that "+CHILDNAME+" completed today, and will make "+hisher+" life a lot easier when we continue by adding up the score and displaying it on our label, as well as code the dealer! Great work today "+CHILDNAME+
	"</p>"
	//"<img src='Images/TwentyOne1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/TwentyOneC1.png' width='200'>"+
	//"<img src='Images/TwentyOneC2.png' width='200'>"

	twentyOneSecondHalf = "<p class = 'debrief'>"+CHILDNAME+" today finished all of the penultimate game of Green Belt! Twenty One!"+
	"<br>"+
	"<br>"+
	"We started right where we left off! Last session "+CHILDNAME+" finished by adding the randomly selected cards score into a score array!"+
	"Using another function ‘calculateTotal’ we could then make the score show in the selected label using the parameter for the player or the opponents label. Once we had finished with our turn, we would hit a button to let the dealer play! So long as their "+
	"score was below ours, they would keep drawing a new card."+
	"<br>"+
	"<br>"+
	"For this to work, the dealer needed to know what our score was! We added this as a parameter 'playerScore' and in a loop we run the condition 'DealerScore < playerScore' so "+
	"This way the dealer would keep drawing cards until they went over 21, or beat the condition, and "+CHILDNAME+" :(, by having a higher score! Drawing the extra cards was actually very simple to do as we simply needed to run the showCards "+
	"function we had already made, but this time updating the dealers "+
	"label and score instead!"+
	"<br>"+
	"<br>"+
	"this is a brilliant exercise in making a set order of functions which automate our games and "+
	"allow for easy changes to be made. For example if "+CHILDNAME+" wanted, "+heshe+" could simply change the score each card gives by changing what is pushed into the score array in the "+
	"showCards function, and it would work along all of our cards and opponents cards! Great work today finishing this mega project! Not long to go until Blue Belt now Ninja!"+
	"</p>"
	//"<img src='Images/TwentyOne1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/TwentyOneC1.png' width='200'>"+
	//"<img src='Images/TwentyOneC2.png' width='200'>"


	minesweeper = "<p class = 'debrief'>You must remember Minesweeper! This original from way back in the 60’s has been an absolute staple in the computing and gaming industries ever since. "+
	"As you may recall, the objective of the game is to clear a rectangular board containing hidden mines without detonating any of them, with help from clues about the number of neighboring "+
	"mines in each field."+
	"<br>"+
	"<br>"+
	"To start with, "+CHILDNAME+" created a Tile on an 8x8 grid, and gave each clone a variable, "+
	"called ‘number’ that is simply the cloneIncrement of each tile. So the first tile has a number of 0, the second has a number of 1, and so on and so on."+
	"To finish off the setup, we remove the original tile and create an array called ‘mines’. We then use an if statement with a random number to create a 20% chance to add a number 1 into the 'Mines' array, "+
	"and an 80% chance to simply add a number 0 into the array. The number 1’s will be our mines!"+
	"<br>"+
	"<br>"+
	CHILDNAME+" next created a button in the corner of the game. When we click it we will be able to flag "+
	"tiles we think contain mines! We simply are turning a global variable true or false as we "+
	"click the button, and displaying it's current state in our text up top!"+
	"<br>"+
	"<br>"+
	"When making the function for tile selection we select the correct tile using it's number variable. If the flag variable is true, the tile turns blue. If the flag is off, we check it! If the mines array "+
	"contains a ‘1’ at that tiles location, you clicked in a mine :( So it turns red, then after 1.5 seconds, a for loop runs to show all the mines up as red. If there isn't a mine, "+CHILDNAME+" made the "+
	"tile disappear, and ran a mineCheck function which "+CHILDNAME+" made to check how many mines are around us."+
	"<br>"+
	"<br>"+
	"If the location - 8 has a mine, then that means it’s above us (as we are on an 8x8 grid). But this is only true for tiles that are NOT on the first row! Because there is nothing above the first row! So if location - 8 has a "+
	"mine, AND the num is bigger than 7, only then add one to the minesAround variable! Now we want to check for left and right! If the location plus 1 has a mine, it's to the right, and "+
	"if the location -1 has a mine, its to the left! What if the tile is on the far left or right side though?"+
	"<br>"+
	"<br>"+
	"If dividing the tileL by 8 gives us a whole number then that means the mine is on the far RIGHT hand side. This is because all the tiles on the right are called tile 8, 16, 24, 32, and so on "+
	"so we can check for them by trying to divide by 8! If it makes a whole number we dont check anymore to the right as theres no mines there! "+
	"If (Tile location -1) can be divided by 8, then the tile is on the far LEFT hand side, as they go 7, 15, 23, 31 and so on. So here we dont want to check for mines any more to the left! Finally, spawn a "+
	"clone of our text and have it display all the mines that are around us!"+
	"<br>"+
	"<br>"+
	"And there we have it! "+CHILDNAME+" has created another classic and as you can see this is probably the most technical game "+CHILDNAME+" has yet completed, but they did so well at it today, it feels like a "+
	"very long time ago when "+heshe+" was making "+hisher+" start to White Belt, but here they are at Blue Belt with so much more ahead of them! You thoroughly deserve it "+CHILDNAME+"! Amazing job!!!"+
	"</p>"
	//"<img src='Images/Minesweeper1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/MinesweeperC1.png' width='200'>"+
	//"<img src='Images/MinesweeperC2.png' width='200'>"+
	//"<img src='Images/MinesweeperC3.png' width='200'>"+
	//"<img src='Images/MinesweeperC4.png' width='200'>"

	minesweeperFirstHalf = "<p class = 'debrief'>"+CHILDNAME+" today got started on the FINAL GREEN BELT PROJECT!! Minesweeper!"+
	"<br>"+
	"<br>"+
	"This original from way back in the 60’s has been an absolute staple in the computing and gaming industries ever since. "+
	"As you may recall, the objective of the game is to clear a rectangular board containing hidden mines without detonating any of them, with help from clues about the number of neighboring "+
	"mines in each field."+
	"<br>"+
	"<br>"+
	"To start with, "+CHILDNAME+" created a Tile on an 8x8 grid, and gave each clone a variable, "+
	"called ‘number’ that is simply the cloneIncrement of each tile. So the first tile has a number of 0, the second has a number of 1, and so on and so on."+
	"To finish off the setup, we remove the original tile and create an array called ‘mines’. We then use an if statement with a random number to create a 20% chance to add a number 1 into the 'Mines' array, "+
	"and an 80% chance to simply add a number 0 into the array. The number 1’s will be our mines!"+
	"<br>"+
	"<br>"+
	CHILDNAME+" next created a button in the corner of the game. When we click it we will be able to flag "+
	"tiles we think contain mines! We simply are turning a global variable true or false as we "+
	"click the button, and displaying it's current state in our text up top!"+
	"<br>"+
	"<br>"+
	"When making the function for tile selection we select the correct tile using it's number variable. If the flag variable is true, the tile turns blue. If the flag is off, we check it! If the mines array "+
	"contains a ‘1’ at that tiles location, you clicked in a mine :( So it turns red, then after 1.5 seconds, a for loop runs to show all the mines up as red. If there isn't a mine, "+CHILDNAME+" made the "+
	"tile disappear, and ran a mineCheck which "+CHILDNAME+" will be making next session!"+
	"<br>"+
	"<br>"+
	"Fantastic work so far on this project "+CHILDNAME+"! Next session we will create the function to check all around the mine we clicked and more importantly... Get that Blue Belt!"+
	"</p>"
	//"<img src='Images/Minesweeper1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/MinesweeperC1.png' width='200'>"+
	//"<img src='Images/MinesweeperC2.png' width='200'>"+
	//"<img src='Images/MinesweeperC3.png' width='200'>"+
	//"<img src='Images/MinesweeperC4.png' width='200'>"

	minesweeperSecondHalf = "<p class = 'debrief'>Super well done to "+CHILDNAME+" for finishing all of White, Yellow, Orange and Green Belt today! You're a Star!"+
	"<br>"+
	"<br>"+
	"jumping right back into minesweeper, "+CHILDNAME+" had to create the function to check every tile around the one we clicked on."+
	"If the location - 8 has a mine, then that means it’s above us (as we are on an 8x8 grid). But this is only true for tiles that are NOT on the first row! Because there is nothing above the first row! So if location - 8 has a "+
	"mine, AND the num is bigger than 7, only then add one to the minesAround variable! Now we want to check for left and right! If the location plus 1 has a mine, it's to the right, and "+
	"if the location -1 has a mine, its to the left! What if the tile is on the far left or right side though?"+
	"<br>"+
	"<br>"+
	"If dividing the tileL by 8 gives us a whole number then that means the mine is on the far RIGHT hand side. This is because all the tiles on the right are called tile 8, 16, 24, 32, and so on "+
	"so we can check for them by trying to divide by 8! If it makes a whole number we dont check anymore to the right as theres no mines there! "+
	"If (Tile location -1) can be divided by 8, then the tile is on the far LEFT hand side, as they go 7, 15, 23, 31 and so on. So here we dont want to check for mines any more to the left! Finally, spawn a "+
	"clone of our text and have it display all the mines that are around us!"+
	"<br>"+
	"<br>"+
	"And there we have it! "+CHILDNAME+" has created another classic and as you can see this is probably the most technical game "+CHILDNAME+" has yet completed, but they did so well at it today, it feels like a "+
	"very long time ago when "+heshe+" was making "+hisher+" start to White Belt, but here they are at Blue Belt with so much more ahead of them! You thoroughly deserve it "+CHILDNAME+"! Amazing job!!!"+
	"</p>"
	//"<img src='Images/Minesweeper1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/MinesweeperC1.png' width='200'>"+
	//"<img src='Images/MinesweeperC2.png' width='200'>"+
	//"<img src='Images/MinesweeperC3.png' width='200'>"+
	//"<img src='Images/MinesweeperC4.png' width='200'>"

	

	minecraftMS1= "<p class = 'debrief'>Welcome to our Minecraft modding Camp! Today we got to find out just how much "+CHILDNAME+" loves Minecraft and it was great to see "+himher+" create "+hisher+" own mods with us!"+
	"<br>"+
	"<br>"+
	"Today "+CHILDNAME+" started discovering some brand new pieces of software to bring all of "+hisher+" new ideas to life in Minecraft! We started by installing "+
	"'Mcreator' and then the Forge Mod, "+CHILDNAME+" then created their own workspace within this 'Mcreator' program to store all future creations. We had a look around this brand new "+
	"UI as it is of course the first time "+CHILDNAME+" is using it! After grasping the basics of Mcreator, "+CHILDNAME+" booted up the game client and created two new minecraft worlds, one "+
	"creative to play test our new mods and one survival to really put them to the test later!"+
	"<br>"+
	"<br>"+
	"Next the real fun really began! Our first camp challenge was for "+CHILDNAME+" to design and import "+hisher+" very own original Minecraft block! This could be "+
	"absolutely anything, from sapphire coloured grass to rainbow dirt, the creativity is endless! "+HESHE+" did this by creating a new resource and could either "+
	"import a complex texture pack for a template, or design "+hisher+" very own from scratch with the object editing window. Then after a brilliant mind mapping "+
	"design session (and many colour combination decisions later) we had our own original block!"+
	"<br>"+
	"<br>"+
	"The last stage is now the greatest of them all, as what good is just the ultra-fun design if we can’t play & build with it! After setting the base properties of the "+
	"object/block to function with, "+CHILDNAME+" now had an original block ready for our client to run."+
	"<br>"+
	"<br>"+
	"Viola! "+CHILDNAME+" has now successfully brought "+hisher+" own conception to life in Minecraft! The only thing left is now an awesome objective to use it with. "+
	"We of course ended this lesson with a building competition to re-create "+hisher+" favourite structure with their very first modifications as they remade loads more new blocks too! brilliant work today creating all of "+
	"these fantastic creations in only your first Minecraft Sessions today "+CHILDNAME+"!"+
	"</p>"

	
	minecraftMS2="<p class = 'debrief'>Today "+CHILDNAME+" got right back into "+hisher+" minecraft modding world with "+hisher+" creative hat on today!"+
	"<br>"+
	"<br>"+
	"Biome’s are minecraft’s names for large sections of the map, they each have a unique feel and can represent dense jungles, sparse grasslands "+
	"and even areas filled with mushroom trees as tall as your regular wooden ones! "+CHILDNAME+" got to create their very own from scratch today, "+
	"diving into the depths of Mcreator’s details to code how they would look and feel. We used our own block that we created from last lesson as "+
	"well as created many custom trees with particle effects custom drops too!"+
	"<br>"+
	"<br>"+
	"Making our own structures with our modded blocks is a great way to feel connected to the minecraft world "+CHILDNAME+" is creating, but having "+
	"the game itself generate entire natural landscapes using their block captures "+CHILDNAME+"’s imagination as "+heshe+" now get to walk through all these "+
	"randomly generated worlds with "+hisher+" own trees, blocks, particle effects and even tall mountains! "+CHILDNAME+" is starting to really get into the swing of our creations "+
	"and beginning to change up the minecraft worlds we all know and love to however "+heshe+" wants it! "+
	"<br>"+
	"<br>"+
	"Brilliant stuff "+CHILDNAME+"! we’ll be building our own ore’s and ingots next, and building our first smelting recipes! Great work!"+
	"</p>"
	
	minecraftMS3="<p class ='debrief'>Our Minecraft Pro is back again for more modification knowledge! Fantastic!"+
	"<br>"+
	"<br>"+
	"This session slightly took it up a gear to introduce design layers and some Minecraft gameplay functionality. "+CHILDNAME+"'s first objective was "+
	"to create another new resource which would be the foundation for "+hisher+" custom Ore! To do this we needed a slight variation as we only had "+
	"to affect the base layer of the Ore design, rather than the entirety of the stone block surrounding our ore. This is because no matter what design or colour we wanted the Ore to be (we had "+
	"a few votes for a candy floss effect today!), the dominant layer would still have a stone/granite effect, giving the Ore block the desired effect of the "+
	"metal or mineral yet to be excavated! Of course once this was finished the Ninjas could go back and adjust their ore to whatever sweety goodness they wanted the base to be!!"+
	"<br>"+
	"<br>"+
	CHILDNAME+" then had to create another resource to represent the next progression of this material, the Ingot! Keeping in line with our design choices "+
	"from the Ore, this Ingot would be the product of smelting down "+hisher+" Ore, ready to make some awesome things like tools and armor! But, any Minecraft fan like "+CHILDNAME+
	" knows that Ingots are not very handy just on their own, we need to be able to make them on mass to be able to create all that we need!"+
	"<br>"+
	"<br>"+
	"Building our first recipe for smelting is a new thing that we are moving into as "+CHILDNAME+" looks to not only effect the appearance of our world’s "+
	"scenery, but the tools and inner workings behind it all. "+CHILDNAME+" got to add in "+hisher+" custom made ore as the input to the furnace, and then add the ingot as the output! "+
	"Great work today "+CHILDNAME+" we hope you are loving the camp along with all of your Ninja peers!"+
	"</p>"

	minecraftMS4="<p class ='debrief'>"+CHILDNAME+" Jumped right back into "+hisher+" creations today as we started creating the go to weapon of minecraft - the SWORD!"+
	"<br>"+
	"<br>"+
	"Swords in minecraft are all uniform in appearance, changing only the colour of the blade based on the material used to craft them. Wooden swords are the "+
	"weakest, Netherite & Diamond are the strongest! Here "+CHILDNAME+" created their own custom sword, changing not only the appearance of the sword’s colour, "+
	"but the entire entity itself! We got to take a look at everybody’s creations and each Ninja would decide their favourite one! "+
	"<br>"+
	"<br>"+
	"Once "+CHILDNAME+" had created and tested the texture of "+hisher+" sword, we went about coding its recipe and properties! We made our first crafting recipe following on "+
	"from our smelting recipe in the last session, using our very own ingot we created! This is great work from "+CHILDNAME+" as we are starting to look more into the "+
	"technical side of our creations, as "+heshe+" begins to become a master of creating their pixel textures! "+
	"<br>"+
	"<br>"+
	"We gave the sword the ‘sword’ role, which includes the animation of the swing and the proper way our character would hold the weapon. To make this a very unique "+
	"weapon, we got to increase the damage to as high as we wanted and reign supreme over the land! Then "+CHILDNAME+" got to code under the 'trigger' tab of the tools properties. "+
	HESHE+" chose the 'when entity hit with tool' trigger, and got to add different effects! From lightning striking the target to an explosion occurring where they are, the possibilities are "+
	"endless! Great work today on another super fun session "+CHILDNAME+"!"
	"</p>"

	minecraftMS5="<p class ='debrief'>"+CHILDNAME+" started today by designing the most important clothes in Minecraft, our Armor!"+
	"<br>"+
	"<br>"+
	"Armor is vital in Minecraft to block incoming attacks from enemy ‘mobs’ that try to take our precious materials! Like swords, armor comes in unique "+
	"types based on the metal used to create it. Building a new suit to fit our character would certainly challenge "+CHILDNAME+"'s creative skills using Mcreator! "+
	"We started with a base template of our character and built it from there!"+
	"<br>"+
	"<br>"+
	"Using custom colours based off of the ingot "+CHILDNAME+" has already created "+heshe+" began drawing up the armor and changing all the details to "+hisher+" liking! "+
	"Designing custom armor is a very interesting look into design in a more structured way as all of our costumes have to fit the character! "+CHILDNAME+" then created a "+
	"procedure for the armor for the first time! These procedures are ways of adding multiple outcomes based on a set of conditions. "+
	"<br>"+
	"<br>"+
	"This look into coding our mods is based of the BootsWear event, to run a line of code when our boots are equipped. The code would turn the isFlying variable "+
	"true, allowing our character to fly when wearing the boots! A very unique set of shoes to say the least! "+CHILDNAME+" then added a potion inside the LegginsWear event, "+
	"to make our character get super speed when wearing our super pants!"+
	"<br>"+
	"<br>"+
	"Using these triggers we went back to the sword we made earlier, and added code to the ‘SwordHitsLivingEntity’ event. In the spirit of creating an all powerful "+
	"weapon alongside our super armor, "+CHILDNAME+" made a bolt of lightning strike down onto the entity we hit! A brilliant arsenal of armor and sword has been created by "+
	CHILDNAME+", and "+heshe+" is doing so well throughout each of our sessions!"+
	"</p>"

	minecraftFINAL="<p class ='debrief'>"+CHILDNAME+" has been brilliant all week and finished off today by designing the most important clothes in Minecraft, our Armor!"+
	"<br>"+
	"<br>"+
	"Armor is vital in Minecraft to block incoming attacks from enemy ‘mobs’ that try to take our precious materials! Like swords, armor comes in unique "+
	"types based on the metal used to create it. Building a new suit to fit our character would certainly challenge "+CHILDNAME+"'s creative skills using Mcreator! "+
	"We started with a base template of our character and built it from there!"+
	"<br>"+
	"<br>"+
	"Using custom colours based off of the ingot "+CHILDNAME+" has already created "+heshe+" began drawing up the armor and changing all the details to "+hisher+" liking! "+
	"Designing custom armor is a very interesting look into design in a more structured way as all of our costumes have to fit the character! "+CHILDNAME+" then created a "+
	"procedure for the armor to add multiple outcomes based on a set of conditions. "+
	"<br>"+
	"<br>"+
	"This look into coding our mods is based of the BootsWear event, to run a line of code when our boots are equipped. The code would turn the isFlying variable "+
	"true, allowing our character to fly when wearing the boots! A very unique set of shoes to say the least! "+CHILDNAME+" then added a potion inside the LegginsWear event, "+
	"to make our character get super speed when wearing our super pants!"+
	"<br>"+
	"<br>"+
	"It was great fun to have "+CHILDNAME+" in the Dojo this week and we hope "+heshe+" had a lovely time with us! Have a fantastic rest of the Holidays and I hope to see you again soon!"
	"</p>"

	minecraftMS6="<p class ='debrief'>Today "+CHILDNAME+" got into adding the final piece of our armory, a ranged weapon worthy of any Ninja! The Shuriken!"+
	"<br>"+
	"<br>"+
	"Shurikens are a brilliant tool that Ninjas use to remain sneaky during a raid! Creating a ranged weapon does prevent some unique challenges that "+CHILDNAME+" worked "+
	"through really well today! Creating a ranged weapon’s texture has become second nature to "+CHILDNAME+" now, as "+heshe+" works through the MCreator with ease! We put this "+
	"shuriken image in both the hotbar icon (what it appears as in our inventory), and the bullet image, so we can see what it looks like as it flies through the air towards "+
	"our enemies!"+
	"<br>"+
	"<br>"+
	"Procedures step up a little in these creations, as we look to add more functionality to these shurikens! On the ‘throw’ event we added the movement speed, the "+
	"shuriken image and of course the damage value! We also made an event that would run when the shuriken hit a block, instead of an enemy! "+CHILDNAME+" added a ‘spawn’ "+
	"block, which would simply make another shuriken appear below the block we hit. This way we give the illusion that the shuriken bounced off the wall, and we "+
	"can go pick it back up again! "+
	"<br>"+
	"<br>"+
	"The last step in our code was to add the recipe using our own ingot to create these shurikens when needed! "+CHILDNAME+" is becoming very adept at this mod "+
	"creation system and "+heshe+" is having a blast with everyone they sit with throughout this week, keep up the great work!"+
	"</p>"
	minecraftMS7= "<p class ='debrief'>Now that we’ve got ourselves armed with all manner of colourful and wacky designs. "+CHILDNAME+" needed something to battle against today!"+
	"<br>"+
	"<br>"+
	"To do this we created some custom mobs! Basically, Minecraft mobs are living, moving game entities such as enderman, creepers, zombies and pigs. For instance, "+
	"we can dress up our animals to make them our own. Like adding sunglasses for a pig, recolouring a horse, or even making zombies less scary! "+
	"<br>"+
	"<br>"+
	CHILDNAME+" can even change the look and behaviour of these mobs. We can transform a wolf to a dinosaur and then modify its behaviour with block based programming "+
	"or script. Each entity in the game has it's own class that defines how it behaves, for example the way skeletons work is controlled by EntitySkeleton. To modify "+
	"these behaviours we need to create our own class that gets used instead of the vanilla one! "+
	"<br>"+
	"<br>"+
	"Mobs can be categorized according to their behaviour into passive, neutral, and hostile! Some mobs can even be only spawned with a command. Each kind of mob in "+
	"Minecraft has a certain AI system with various behaviours and dynamics and while most mobs are affected by the environment in the same ways as the player, some "+
	"mobs may be resistant or immune to certain hazards. "+CHILDNAME+" had a go at altering these AI systems, such as; turning a passive villager hostile or an hostile zombie "+
	"neutral! "+
	"<br>"+
	"<br>"+
	"This slight exposure into artificial intelligence is a fantastic glimpse at what can be achieved with it and how it is implemented into almost everyday things!"+
	"</p>"
	
	minecraftMS8 = "<p class ='debrief'>"+CHILDNAME+" come a long way creating their own textures, blocks, biomes, weapons and so much more in this camp, hopefully "+
	"having a brilliant time! Now it's time to publish our Mod online!"+
	"<br>"+
	"<br>"+
	"To publish our mod online, we use Mcreator’s publishing tool placing it in the Mcreator forums! This can now be shared to find "+CHILDNAME+"'s bundle of creations! "+
	"Publishing our mods was a technical challenge which "+CHILDNAME+" accustomed to brilliantly! The forums of Mcreator contain many different types of mods, so we also "+
	"then learned how to add these mods to our game! "+
	"<br>"+
	"<br>"+
	"Using Forge - "+CHILDNAME+" downloaded a new programme and connected it to their Minecraft world. They could then simply download the Java file that contains all of "+
	CHILDNAME+"’s creations, and start playing with their mod! We had to assign the Forge programme to look into a new ‘mods’ folder we created in the Minecraft "+
	"save, and then put our Java file in that place!"+
	"<br>"+
	"<br>"+
	"Brilliant work from "+CHILDNAME+" throughout this week, we will next be looking into other forms of mod Creation on minecraft and the unique challenges that can bring. "+
	"Congratulations to "+CHILDNAME+" for publishing their own Minecraft Mod! We look forward to the many more to come!"+
	"</p>"

	minecraftMS9 = "<p class ='debrief'>After publishing our Mods in the last session, "+CHILDNAME+" began to explore new systems to create mods, TynkerCAD and Skindex!"+
	"<br>"+
	"<br>"+
	"Amazing! Together me and "+CHILDNAME+" have explored how to apply their artistic vision to our Minecraft skins! If you're not up to date with the "+
	"latest MC lingo (we can’t blame you) a Minecraft Skin allows you to change how your player looks to others in the Minecraft world."+
	"<br>"+
	"<br>"+
	"Using the multiple award-winning software; Tynker. We were able to utilize a lovely user interface to bring "+CHILDNAME+"'s character designs leaping "+
	"into reality! Just like designing our blocks, items and mobs, "+CHILDNAME+" can transform "+hisher+" character into anything. Want to look like Spider-Man? "+
	"No problem! Want to resemble a bright yellow alien? You got it! Want to be a historical explorer? Well, you get the idea."+
	"<br>"+
	"<br>"+
	"We had some pre-made skins in the directory to act as a launching pad to set of "+hisher+" creative mind. We can’t wait to see these skins shown off to the "+
	"rest of their friends!"+
	"</p>"
	
	minecraftMS10 = "<p class ='debreif'> Minecraft Modding. As you know by now, It’s kind of a big deal! Whether "+CHILDNAME+" has wanted to turn water into "+
	"gold, build instant cities, or create multi-player games. With using modifications and learning scripting, hisher imagination is the only limit!"+
	"<br>"+
	"<br>"+
	"As "+CHILDNAME+" has built mods and created add-ons this camp week, "+heshe+" has learnt to code, think critically, and write programs. Hopefully "+CHILDNAME+" will "+
	"see coding as a tool "+heshe+" can use to bring anything in their dreams to life."+
	"<br>"+
	"<br>"+
	"This grand finale had "+CHILDNAME+" blend everything together from the technical aspects to the artistic to craft an adventure map. This is essentially a "+
	"smaller or even larger game that takes place in their Minecraft world. To achieve this we mind mapped a lot of awesome ideas. Such as placing traps and mobs "+
	"in and depending on our map's theme, we could even add things like lava pits or steep falls. A great example of a clever trap  is a pit with cactus in it, "+
	"or a skeleton with a bow placed near a narrow walkway!"+
	"<br>"+
	"<br>"+
	HESHE+" then had to weave in story elements and details to keep our player entertained. This can be a well thought out narrative or even directions to help "+
	"navigate more confusing levels. There are a few ways to add directions to our map; like signs which are the easiest and most common way to leave a message "+
	"for a player. Or, books if we wanted to go for a slightly more subtle instructional method!"+
	"<br>"+
	"<br>"+
	"Finally, once we’ve added most design elements and have a structure. It could be time for "+CHILDNAME+" to add in any consumable or equippable items, as well as "+
	"power sources and other technical items. One fun tactic is to try hiding tools or health items behind false walls, or placing chests with desirable items "+
	"in hard-to-reach places!"+
	"<br>"+
	"<br>"+
	"Well done to this superstar! "+CHILDNAME+" has completed our summer camp, we hope "+heshe+" has thoroughly enjoyed this expanding on their love for Minecraft and "+
	"combining it with coding!"+
	"</p>"

	theSkyIsFalling="<p class = 'debrief'>The Sky Is Falling prove yourself test is very similar to the last game "+CHILDNAME+" completed in Yellow Belt! The huge bug "+
	"Invaders! Except this time we are trying to use a shuriken to push clouds away as they fall, instead of simply removing bugs with a bullet! This technical challenge is a brilliant way to act as a refresher "+
	"as "+CHILDNAME+" progresses through Orange Belt and gets to reuse global variables and the mighty 'Gravity'!"+
	"<br>"+
	"<br>"+
	"To set this off "+heshe+" created a variable called shuriken.moving this time instead of bullet.moving as compared to the final bug invaders test. "+HESHE+" also rigged "+
	"together a movement scheme for our Ninja character to move with our A & D or arrow keys!"+
	"<br>"+
	"<br>"+
	"Then the next step is to code our variable to become true with a conditional and Boolean upon the condition that our space bar is pressed, so this button acts as our "+
	"trigger! "+HESHE+" then flipped the boolean to false whenever the shuriken hit the roof of the scene! "+
	CHILDNAME+" then had to set up the scene so that our cloud object was cloned, but not only that, it had to be linked to a random timer so this would occur every few seconds! "+
	"<br>"+
	"<br>"+
	"If the shuriken touches the cloud "+CHILDNAME+" coded our shuriken.moving variable to change to false and then use a function to change the gravity to a negative value so "+
	"that it goes the other way! Thus, upon collision the cloud gets pushed back up. Once the cloud was pushed off the screen we can remove it with a remove function! But, if "+
	"the cloud makes it to us though we want to stop and get a game over!!"+
	"<br>"+
	"<br>"+
	"We also discussed how we can adapt this game further. For one, we could create a difficulty setting that altered the cloud speed down the Y coordinate to challenge us more. "+
	"These clouds could even be represented by different colours or even completely different objects all together! "+HESHE+" could incorporate power ups to help or hinder us "+
	"just like we did in the Orange Belt game Ninja race! There is a whole host of things we can tinker with and change and this is something we bring to the forefront a lot more in Green Belt!"+
	"</p>"
	//"<img src='Images/TheSkyIsFalling1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/TheSkyIsFalling2.png' width='200'>"+
	//"<img src='Images/TheSkyIsFallingC.png' width='200'>"

	theSkyIsFallingFirstHalf="<p class = 'debrief'>Today "+CHILDNAME+" begun the first Prove Yourself test of Orange Belt, The Sky Is Falling!"+
	"<br>"+
	"<br>"+
	"the Sky Is Falling is very similar to the last game "+CHILDNAME+" completed in Yellow Belt! The huge bug "+
	"Invaders! Except this time we are trying to use a shuriken to push clouds away as they fall, instead of simply removing bugs with a bullet! This technical challenge is a brilliant way to act as a refresher "+
	"as "+CHILDNAME+" progresses through Orange Belt and gets to reuse global variables and the mighty 'Gravity'!"+
	"<br>"+
	"<br>"+
	"To set this off "+heshe+" created a variable called shuriken.moving this time instead of bullet.moving as compared to the final bug invaders test. "+HESHE+" also rigged "+
	"together a movement scheme for our Ninja character to move with our A & D or arrow keys!"+
	"<br>"+
	"<br>"+
	"Then the next step is to code our variable to become true with a conditional and Boolean upon the condition that our space bar is pressed, so this button acts as our "+
	"trigger! "+HESHE+" then flipped the boolean to false whenever the shuriken hit the roof of the scene! "+
	CHILDNAME+" then had to set up the scene so that our cloud object was cloned, but not only that, it had to be linked to a random timer so this would occur every few seconds! "+
	"<br>"+
	"<br>"+
	"Next session we will be coding these clouds to begin to fall with gravity, and the interaction the shuriken would have to give the effect of pushing the clouds back up again! Great work so far "+CHILDNAME+"!"+
	"</p>"
	//"<img src='Images/TheSkyIsFalling1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/TheSkyIsFalling2.png' width='200'>"+
	//"<img src='Images/TheSkyIsFallingC.png' width='200'>"

	theSkyIsFallingSecondHalf="<p class = 'debrief'>Today "+CHILDNAME+" finished off all of the first Prove Yourself test of Orange Belt, The Sky Is Falling!"+
	"<br>"+
	"<br>"+
	"Starting off from before, we needed to code the shurikens interaction with the clouds above! "+
	"If the shuriken touches the cloud "+CHILDNAME+" coded our shuriken.moving variable to change to false and then use a function to change the gravity to a negative value so "+
	"that it goes the other way! Thus, upon collision the cloud gets pushed back up. Once the cloud was pushed off the screen we can remove it with a remove function! But, if "+
	"the cloud makes it to us though we want to stop and get a game over!!"+
	"<br>"+
	"<br>"+
	"We also discussed how we can adapt this game further. For one, we could create a difficulty setting that altered the cloud speed down the Y coordinate to challenge us more. "+
	"These clouds could even be represented by different colours or even completely different objects all together! "+HESHE+" could incorporate power ups to help or hinder us "+
	"just like we did in the Orange Belt game Ninja race! There is a whole host of things we can tinker with and change and this is something we bring to the forefront a lot more in Green Belt!"+
	"<br>"+
	"<br>"+
	"Great work today "+CHILDNAME+" only 3 games to go on Orange Belt now! Keep it up!"+
	"</p>"
	//"<img src='Images/TheSkyIsFalling1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/TheSkyIsFalling2.png' width='200'>"+
	//"<img src='Images/TheSkyIsFallingC.png' width='200'>"



	robloxCamp1="<p class = 'debrief'>Today, "+CHILDNAME+"  started on "+hisher+" journey into Roblox studio with our week of Roblox! Roblox Studio allows simple access for Ninjas to "+
	"get introduced into the basics of 3D game design, and how to script using Roblox’s coding language, Lua! "+
	"<br>"+
	"<br>"+
	"We explored together the Create Studio and how to navigate its quite professional looking user interface. We began with basic 3D object sculpting and allocation, incorporating "+
	"collisions and anchoring to make certain objects behave different ways, for example our brick had collisions on but anchoring off so that we could run into it and move it, whereas "+
	"objects like our baseplate flags had both collisions on and anchoring on, this meant it would float in the sky, and we wouldn't fall through it!"+
	"<br>"+
	"<br>"+
	CHILDNAME+" then looked into the properties of each block, and the various ways they can be edited. We initially looked into how to change it using the Create Studio’s own interface, "+
	"by the properties tab of each block. Then "+CHILDNAME+" began changing the objects properties using Lua, which is how we will be editing our objects later on when we interact with our game! "+
	"<br>"+
	"<br>"+
	"After editing the objects transparency, colours, movability and every property we could think of, "+CHILDNAME+" learned how to publish "+hisher+" creations into roblox itself! This will be how "+
	"we access all of our saves, but also is how we share our game with others! Brilliant work "+CHILDNAME+"!"+
	"</p>"

	robloxCamp2 = "<p class = 'debrief'>"+CHILDNAME+" jumped right back into the Create Studio today creating "+hisher+" own obstacle course!"+
	"<br>"+
	"<br>"+
	"Creating our own detailed obstacle course ‘Obby’ is a brilliant task that introduces "+CHILDNAME+" into more of the 3D design concepts and grows "+hisher+" confidence in using the Create Studio’s "+
	"software. Breaking out the new tools "+heshe+" learned about part manipulation, "+CHILDNAME+" got to work by incorporating 3D objects into an awesome and creative formation! "+
	"<br>"+
	"<br>"+
	"Before the fun could fully begin, "+heshe+" had to remove our worlds baseplate (the floor) so our obstacle course would be ‘floating’ and we would off if the player missed a step! Then we learned "+
	"how to add the most important block of all, the ‘SpawnLocation’! This would set where all of our courses would begin, and where would respawn should we fall off!"+
	"<br>"+
	"<br>"+
	"Building from last lesson where "+CHILDNAME+" had a look into anchoring objects, it was much more important here! If we did not ‘anchor’ our objects in space they would just fall forever as we "+
	"have already deleted the floor of our game. Last lesson we also got introduced into how to change the positions & size of our objects, but here we got to change the ‘orientation’ of each object, "+
	"allowing for much more complex shapes to be used! Brilliant work "+CHILDNAME+"!"+
	"</p>"

	robloxCamp3 = "<p class = 'debrief'>It was lovely seeing "+CHILDNAME+" back in again, and "+heshe+" has done brilliantly in "+hisher+" Lua coding session today!"+
	"<br>"+
	"<br>"+
	"Lua is the code language of Roblox, and here "+CHILDNAME+" was getting to grips with some more advanced coding concepts that are brilliantly visualised by Roblox’s Create Studio. We started by "+
	"learning how to create a block from nothing but our code in lua! Firstly we created a variable and assigned our new part’s ‘instance’ to it. We then assigned this variable to the scene, so a new "+
	"part would spawn in our scene!"+
	"<br>"+
	"<br>"+
	CHILDNAME+" then changed the properties of this new brick by referencing our new variable. We edited the colour’s of it, as well as changing the amount of bricks we spawned with our function! Creating "+
	"a function is a simple way of running multiple things at the same time. We put all the code about creating our brick and placing it in the scene inside one ‘generateDomino()’ function, so we could use "+
	"it much easier in a ‘for loop’!"+
	"<br>"+
	"<br>"+
	"A for loop is a way of making our code repeat over and over, and we used it here to generate lots of dominos! The first part of the for loop sets where our counter will begin, and the next part tells "+
	"it how long to go on for. The final part tells the counter how much to add up by every time the loop runs! We made our loop run 20 times, spawning a domino on top of the other one and then waiting for "+
	"half a second before going again! "+
	"<br>"+
	"<br>"+
	"This was a brilliant session and a great introduction for "+CHILDNAME+" into a new coding language! Keep up the great work!"+
	"</p>"

	robloxCamp4 = "<p class = 'debrief'><br>"+CHILDNAME+" jumped right back into "+hisher+" Lua scripting today, using it to solve puzzles in "+hisher+" games!"+
	"<br>"+
	"<br>"+
	"Last lesson "+CHILDNAME+" was introduced into how to create for loops and use them to spawn bricks on top of eachother during each loop. This time we wanted to specifically place each block based "+
	"on how far through the loop was. We used the loop variable (the thing that goes up every time we make a clone), multiplied it by 10 and then put this number in the clones ‘vector’. A ‘vector’ is "+
	"the Roblox word for coordinates, so this way every clone would be 10 units away from the last one, making a set of dominoes!"+
	"<br>"+
	"<br>"+
	CHILDNAME+" was also introduced into the ‘random’ function and "+heshe+" used it inside the bricks colour! So every brick as you can see in this image above was a different colour from the last, "+
	"and evenly spaced at 10 units! This was a brilliant step up from the previous lesson as we look to introduce "+CHILDNAME+" to the more in depth concepts of Lua and how we can manipulate for loops "+
	"to do lots of different things for us!"+
	"<br>"+
	"<br>"+
	"Lastly, we had a challenge! A great chasm with what seemed to be no way across! "+CHILDNAME+" had to figure out and test how to create a for loop which would spawn the right blocks to act as our "+
	"bridge. This applies the concepts that "+CHILDNAME+" has already learned today in a fun and engaging way, and "+heshe+" did brilliantly! Managing to keep the roblox character on such a thin bridge "+
	"isn't easy, and coding it was super fun today! Great work "+CHILDNAME+"!"
	"</p>" 
	
	robloxCamp5 = "<p class = 'debrief'><br>"+CHILDNAME+" today got to learn and apply more new techniques in Lua to ‘hack’ "+hisher+" own games!"+
	"<br>"+
	"<br>"+
	"In this final camp session, "+CHILDNAME+" made "+hisher+" previous projects much harder by adding in some new ‘random’ code! If a random number between 1 and 0 was lower than 0.2, we disabled the blocks "+
	"collision! So lets break this down. The chance a random number between 1 and 0 is lower than 0.2, is 20%. This is how we tell the computer to only do something 20% of the time. The next step was "+
	"to disable the blocks collision, this simply means that we can fall through it! So 20% of our bricks we could fall through in our bridge, very risky!"+
	"<br>"+
	"<br>"+
	"Once this was finished, we wanted to add a secret way to cross the bridge safely! "+CHILDNAME+" created a new part, and called it ‘button’. We then used a collision function on this object to run a "+
	"new function. This new function contained a for loop that would generate twenty bricks in the same way as before, except this time there was no funny business! Just plain colourful blocks that we could "+
	"run across safely. "+
	"<br>"+
	"<br>"+
	CHILDNAME+" has settled into the Dojo brilliantly throughout this week, working amazingly with the Sensei's and "+hisher+" Ninja Peers too :)! I hope to get to see you again in the Dojo soon, have a lovely "+
	"rest of the week and once again, Great job today "+CHILDNAME+"!"
	"</p>"  

	robloxCamp6 = "<p class = 'debrief'>For this session we used an analytical challenge to really get into a programming frame of mind!"+
	"<br>"+
	"<br>"+
	"Part of being a coder is looking at how other games are made and examining their code to learn even more! We began by diving into the script for our project called Colour Change and "+CHILDNAME+" got to see how it was "+
	"created. It’s all about breaking a concept down- building out a piece of it, testing it, editing, then seeing what needs to be done next!"+
	"<br>"+
	"<br>"+
	CHILDNAME+" began with a familiar concept, but this time in LUA, something called a table! A table is essentially a list- you give it a name to indicate what it stores, just like an Array in JavaScript! "+
	"The main difference being In Lua, a table’s index starts with 1, meaning the first item in the list has an index of 1 (ninjas familiar with other coding languages may be more used to tables/lists/arrays "+
	"starting with an index of 0)."+ 
	"<br>"+
	"<br>"+
	"In this game, our objects that we stand on became transparent at different intervals so that we fall through and lose, oh no! "+CHILDNAME+" used the function.GetChildren to get all the child objects of "+
	"Obstacles and store them in a table.  Then, the code controlling when a tile gets turned off and on was edited with a while loop, so that the obstacles now follow suit! "+
	"<br>"+
	"<br>"+
	"Finally "+heshe+" got to our ‘hacking’ part! We are going to add a secret item - one that may be a little tricky to reach- but if you do, you are practically invincible!  Touching the secret object "+
	"will make the tiles always have collision and some transparency. When we touch it, we want all our tiles to always have Collision on so we can't fall, well done to the ‘hacking’ master!"+
	"</p>"
	
	robloxCamp7 = "<p class = 'debrief'>Today "+CHILDNAME+" got to really delve into 3D scene creation with the Create Studio!"+
	"<br>"+
	"<br>"+
	"The tool we used this session allowed "+CHILDNAME+" to really stretch "+hisher+" imagination! The Terrain Editor can be used to craft  flat plains, rolling like hills, or mountains, valleys and caves!"+
	"<br>"+
	"<br>"+
	"Roblox lets us create all these unique terrain features using this tool by morphing the land’s surface - moving it up or down and painting  different materials! We added terrain by sculpting like "+
	"a paint brush with our mouse onto the scene. Then "+heshe+" manipulated it by clicking, holding, and dragging the mouse. To subtract terrain we used  the same movement with the mouse - click, hold, "+
	"and dragging to then remove terrain height.  This will remove any terrain that overlaps with our cursor; therefore, lowering mountains or creating valleys!"+
	"<br>"+
	"<br>"+
	"Finally we investigated how to build new worlds on a smaller scale. So, when building our house, it is important to keep in mind the scale of the player.  You don’t want to get lost in building a house, "+
	"only to playtest and find the house is tiny compared to the player!  While you can playtest to periodically check the scale, there is a method that lets you compare the scale while building.  You can add "+
	"a dummy player to your scene!  This adds an avatar, as if it was a part, so it is visible for reference as "+CHILDNAME+" built ! Wooo!"+
	"<br>"+
	"<br>"+
	"Fantastic work and creativity today superstar!"+
	"</p>"

	robloxCamp8 = "<p class = 'debrief'>Today "+CHILDNAME+" continued learning the foundations to build their own game. As "+heshe+" has picked up how design a world, building is key, but we can also "+
	"use the toolbox! "+
	"<br>"+
	"<br>"+
	"The Toolbox is a fun tool when you can easily and quickly add pre-made models to our scene.  We can use the search bar to find any specific object in the Roblox Library and can incorporate it into "+
	"our work with one click! The challenge for today's session was to build a dream house, but with a twist! By now "+CHILDNAME+" has plenty of experience with piecing together structures so now the "+
	"focus was more placed upon adding details either inside and/or outside the house. "+
	"<br>"+
	"<br>"+
	"After "+heshe+" spent some time designing it, we discussed adding a damage script (very sneaky!). These added tasks enabled us to change the dream house into more of a challenging lair! By inputting "+
	"more obstacles and tricks to our game "+CHILDNAME+" turned a simple design into a game mode itself. One such cool trap was a dangerous rug! "+CHILDNAME+" coded it with a collision function so that "+
	"when it's condition was triggered (a players connection) it would enable the fire effect and cause a loss of health!. Very unsuspecting indeed!"+
	"<br>"+
	"<br>"+
	"This script could be applied to many objects to create hazards, or traps, that the player needs to avoid or else!"+
	"<br>"+
	"<br>"+
	"Amazing creative vision was displayed by "+CHILDNAME+" today, "+heshe+" is really getting to grips with LUA and the Create Studio!"+
	"</p>"
	
	
	storyTelling1 = "<p class = 'debrief'>Welcome to the Code Ninjas Storytelling Camp! In "+CHILDNAME+"’s first session, "+heshe+" got introduced into how to record & "+
	"export Minecraft replays in a professional and clean manner. "+
	"<br>"+
	"<br>"+
	"To start with, "+CHILDNAME+" was tasked with loading into a custom made Minecraft theme park map. Once loaded properly, "+CHILDNAME+" had some time to explore and "+
	"find their 3 favourite rides/attractions! Then we started recording! For now the video length was going to be under 90 seconds, so "+heshe+" had to record the best "+
	"bits! The recording process at this stage is relatively simple, press record when we want to record, and pause when we are moving between attractions. "+
	"<br>"+
	"<br>"+
	"Once "+CHILDNAME+" finished their recording, it was into the editor! The recording works by making a new map, which "+CHILDNAME+" then loads into. This new map "+
	"allows "+CHILDNAME+" to fly around and place the camera wherever "+heshe+" would like it, as well as what time in the recording "+heshe+" would like the camera "+
	"there. This software is superb for "+CHILDNAME+" to use and "+heshe+" will be getting to grips with all of its functionality allowing for time manipulation, camera "+
	"snapping and so much more all throughout their sessions. This software is quite complicated to get to grips with but once it has been mastered "+CHILDNAME+" will be "+
	"able to make brilliant looking videos in Minecraft easily!"+
	"<br>"+
	"<br>"+
	"Once "+CHILDNAME+" had entered all the correct time & position ‘Keyframes’ and tested their video a few times to smooth out their transitions, they exported their "+
	"video to watch! Fantastic work Ninja!"+
	"</p>"
	
	storyTelling2 = "<p class = 'debrief'>What good is a story without a place to tell it!? Today "+CHILDNAME+" kicked off "+hisher+" session creating the set of the new "+
	"recording! "+
	"<br>"+
	"<br>"+
	"Since getting to grips with our replay editor, "+CHILDNAME+" has learned how to move around the camera in space and time to allow for professional looking transitions "+
	"and camera movements without too much complexity. Now "+CHILDNAME+" has to plan out and build their set for their story they will be telling. For some Ninjas, "+
	"the story is the building of the set itself, for example a story of a stranded survivor building a shelter to live in, so the recording would need lots of smaller "+
	"sections cut together in a montage of the creation over time."+
	"<br>"+
	"<br>"+
	"For most Ninjas the story will take place in their set, for example a tavern brawl in the local Western Saloon! For both types of story, planning is key. To avoid "+
	"having to go back to the drawing board and restarting  the creations, it is essential that we plan the creations with "+CHILDNAME+" so "+heshe+" has a clear goal of what "+
	hisher+" final story’s set will look like. After making the plan of the set and story, "+CHILDNAME+" got to work! "+
	"<br>"+
	"<br>"+
	"Many Ninjas are somewhat used to creating in Minecraft, but not many have planned their creations before making them! This helps develop "+CHILDNAME+"’s creative "+
	"skills and shows "+himher+" how useful planning can be to creating projects. Taking inspiration from other Ninjas is something we always recommend and foster in "+
	"our Dojo, having "+CHILDNAME+" stand up and walk around other Ninjas creations having them each share what they have made to others! "+
	"<br>"+
	"<br>"+
	"Brilliant work "+CHILDNAME+"! Very well done for planning, creating and sharing your set today! "+
	"</p>"
	

	storyTelling3 = "<p class = 'debrief'>"+CHILDNAME+" jumped into their storytelling with a very vital part of the process today!"+
	"<br>"+
	"<br>"+
	"After having an amazingly creative time with custom maps, playing with filming/editing software and creating "+hisher+" own set, we now have to pivot and begin "+
	"thinking about the story that occurs behind great imaginative projects."+
	"<br>"+
	"<br>"+
	"When writers in various fields want to make ideas easily understood, they choose a storyboard format! Just like most children "+CHILDNAME+" seemed to love this "+
	"session with a larger graphic focus and when "+heshe+" got to organise all those awesome ideas into one great story, they loved it even more! "+CHILDNAME+" was "+
	"naturally attracted to drawing things up in this storyboarding stage with our hands on drawing as after all, it takes some practise to compile their creativity "+
	"into one flow. "+
	"<br>"+
	"<br>"+
	"Another important lesson that we learnt here is that this also helped "+CHILDNAME+" organize their ideas and present them in an orderly manner. We added some "+
	"colourful and eye-catching examples to help along the way to bringing this epic tale to life! After writing up our story "+CHILDNAME+" got to record and play it "+
	"out in their Minecraft recorder!"+
	"</p>"
		
	storyTelling4 = "<p class = 'debrief'>Today "+CHILDNAME+" used their creative writing skills to journey down the next development stage for "+hisher+" epic movie!"+
	"<br>"+
	"<br>"+
	"If you like to read and you like to watch movies, you’ve probably thought that you could write a movie yourself. Have you? Be honest! "+
	"<br>"+
	"<br>"+
	"In this session "+CHILDNAME+" weaved together an interesting story "+heshe+" wanted to tell within their newly created film set. We covered the basics of "+
	"script/concept writing in a nutshell to help kickstart the storytelling process. There is much more to learn as we progress and experiment, but this initial "+
	"mind map got  "+CHILDNAME+" pointed in the right direction."+
	"<br>"+
	"<br>"+
	"Telling a fun and engaging story is no easy task! It takes some trial and error to get things right which is why planning is crucial. "+HESHE+" can get as "+
	"creative is possible in this exercise, something that we love to actively encourage. We also implemented a sprinkle of social work and collaboration as "+CHILDNAME+
	"invited other ninjas to provide some additional acting talent, by way of character voicing or custom sound effects!"+
	"<br>"+
	"<br>"+
	"In the end we had a script worthy of an academy award! (after a few more tweaks) Next it was time to put all this preparation into action! Well done so far "+CHILDNAME+"!"+
	"</p>"

	storyTelling5 = "<p class = 'debrief'>Now we’ve got a set and a script, we need some voices! For this session, me and "+CHILDNAME+" explored bringing our script to life!"+
	"<br>"+
	"<br>"+
	"If countless hours of watching their favourite YouTubers have taught them (and especially yourself after hearing the screeching) is that alongside the visual content, "+
	"audio is paramount!"+
	"<br>"+
	"<br>"+
	"That's why we brought in some awesome headsets, sporting multicolored LED lighting in true gamer like fashion to capture "+CHILDNAME+" ‘s compelling story. We began "+
	"by recording whatever thoughts or stories came into "+hisher+" head. Being able to help record thoughts, share a familiar story or even rehearse our new script is a "+
	"great way to help build confidence on the microphone."+
	"<br>"+
	"<br>"+
	"As much as we may want, our first takes are rarely one hit wonders, so we need to be patient with the process. This is why storyboarding and scripting is so important "+
	"as they all factor into our prep work, even if we make some slight changes here or there. "+
	"<br>"+
	"<br>"+
	"We also explored some voice changing software so "+CHILDNAME+" can edit their audio to resemble an alien voice, an echo of a large space, being underwater and everything "+
	"in between! Fantastic work today superstar!"+
	"</p>"

	storyTelling6 = "<p class = 'debrief'>In this session "+CHILDNAME+" had to bring everything together to ensure that "+hisher+" project was as good as can be!"+
	"<br>"+
	"<br>"+
	"From multi-million dollar Hollywood projects to stop motion animation filmed in a bedroom, editing and post-production is often known as the real magic of the "+
	"storytelling process. Here we can rehash ideas, incorporate feedback and ensure the project is visually compelling and as structurally coherent as we originally intended!"+
	"<br>"+
	"<br>"+
	"We furthered the basics today from having a peek at editing at the beginning of the camp. "+CHILDNAME+" was using Windows Video Editor, which is  very accessible tool "+
	"with a  full-featured set of video creation and editing tools that "+heshe+" can use to tell our new story with! "+
	"<br>"+
	"<br>"+
	CHILDNAME+ " bolstered the original video with some music, text, motion, and 3D effects! We also clipped and trimmed the footage to create flow and for either a more "+
	"dramatic or comedic effect.  Combining this focus today with the easy-to-use creative tools, enabled "+himher+" with the means to show off a great story!"+
	"<br>"+
	"<br>"+
	"Amazing stuff superstar, let’s hope not too much golden content was left on the cutting room floor!"+
	"</p>"
	

	storyTelling7 = "<p class = 'debrief'>For this dojo session, it was all about "+CHILDNAME+" transitioning into the next stage of our project work!"+
	"<br>"+
	"<br>"+
	"Similarly to the beginning of the Camp, "+CHILDNAME+" researched and imported a custom Adventure Map to scout and explore - not too dissimilar to location "+
	"scouting on a real live-action masterpiece! "+
	"<br>"+
	"<br>"+
	"For those of you not in the loop (who can blame you!?) Minecraft adventure maps are self-contained experiences that are less about building and more about exploring, "+
	"battling, uncovering plots and secrets. Navigating exotics locations, dealing with traps and solving puzzles are all to be expected on these journeys! While many of "+
	"them can be quite happily played solo, a team of up to 4 others can be made in multiplayer. "+
	"<br>"+
	"<br>"+
	"I’m sure "+CHILDNAME+" can present a list of their favourite YouTubers and if they are Minecraft Creators, it is likely they have many projects which are dedicated "+
	"to playthroughs of Adventure Maps. "+
	"<br>"+
	"<br>"+
	"Moving on from their first session they got to record themselves playing in this entirely custom environment, as "+CHILDNAME+" battled mobs, completed puzzles "+
	"and jumped around parkour maps! This was a really fun lesson and a great introduction into how to control Minecraft's folders to import safe maps from the internet, "+
	"and how to record these new locations. Brilliant work today "+CHILDNAME+"!"+
	"</p>"

	goodAndInteractive= "<p class = 'debrief'>Meeting yourself and "+CHILDNAME+" today was fantastic! Giving "+CHILDNAME+" an extra peek into how fun the world of coding (other than just video games!) "+
	"can really be. We hope "+heshe+" has been left with a sense of wonder and boosted energy, at least "+CHILDNAME+" will sleep well tonight after using all that brain power!"+
	"<br>"+
	"<br>"+
	"We explored several components of our Create Program in the dojo together today. We find this circuit type of session the best way for future ninjas to get a well rounded insight "+
	"of all we do at Code Ninjas! There are many pathways within the tech industry that can appeal to a wide variety of talents and interests, so it’s important for us to be flexible in "+
	"our approach and teaching methods in order to inspire bright young minds like "+CHILDNAME+"! Whether "+heshe+" is more technical, practical or artistic, there is always a path for "+himher+" to develop these skills."+
	"<br>"+
	"<br>"+
	"Our introduction began with our Spheros! These smart robots have a vast array of sensors and motors allowing for some very fun experiments. Today, "+CHILDNAME+" got to discover what could be done with "+
	"these awesome little robots! The result was both fun and exciting from piloting our droids to programming instructions for them to navigate our classroom!"+
	"<br>"+
	"<br>"+
	CHILDNAME+" next explored the electronics by getting hands on with our tactile circuits! "+HESHE+" used lots of different combinations of switches, buttons, lights and motors to create both parallel and "+
	"series circuits which displays scientific concepts and is also used to portray basic computer logic. Even getting to look at our fiber optic cables and how the internet can travel through them!"+
	"<br>"+
	"<br>"+
	"We finally jumped into a mini JavaScript project! This gave us the chance to introduce "+CHILDNAME+" to a scripting language rather than block programming like Scratch. This project had "+CHILDNAME+" navigate a "+
	"hero through a maze whilst picking up coding basics and defeating enemies! Our method of introducing ninjas to scripting early on is pivotal to their development as "+heshe+" can begin to visually connect "+
	"how the code alters his games!"+
	"<br>"+
	"<br>"+
	"After chatting with Sensei Nathan, we were super impressed by "+CHILDNAME+"‘s natural tech ability! "+HESHE+" seems to be quite adept for "+hisher+" age group (I imagine they are the IT support back at home!). "+CHILDNAME+" was very "+
	"interactive and engaged within the dojo today which shows us some fantastic interpersonal skills too! "+HESHE+" would make an incredible addition to our Ninja team and we hope to see you all again soon!"+	
	"~ Sensei ____"+	
	"</p>"
	//"<img src='Images/CodeCombatT1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Sphero1.jpg' width='200'>"

	CodeCombatMinecraft= "<p class = 'debrief'>Firstly, Welcome to Code Ninjas Debriefs! This is the format that we will send home all the things that "+CHILDNAME+" gets up to in "+hisher+
	" Dojo sessions! Today I got to introduce "+CHILDNAME+" to two components of the types of work we do here at Code Ninjas, scripting and creativity!"+
	"<br>"+
	"<br>"+
	"There are many pathways within the tech industry that can appeal to a wide variety of talents and interests, so it’s important for us to be flexible in "+
	"our approach and teaching methods in order to inspire bright young minds like "+CHILDNAME+"! Whether "+heshe+" is more technical, practical or artistic, there is always a path for "+himher+" to develop these skills "+
	"with us at Code ninjas."+
	"<br>"+
	"<br>"+
	"Our introduction began with a mini JavaScript scripting project! This gave us the chance to introduce "+CHILDNAME+" to a scripting language rather than block programming like Scratch used often but not expanded upon in Schools. "+
	"This project had "+CHILDNAME+" navigate a "+
	"hero through a maze whilst picking up coding basics already! Loops were used by "+CHILDNAME+" to repeat our code over and over to escape the never ending infinite maze! Our method of introducing "+
	"ninjas to scripting early on is pivotal to their development as "+heshe+" can begin to visually connect "+
	"how the code behind games really works."+
	"<br>"+
	"<br>"+
	"The next (and best!) part of the session was Minecraft! But not just playing Minecraft of course, "+CHILDNAME+" got to create and code "+hisher+" own modifications! These 'mods' are ways that the player "+
	"can edit the Minecraft world, adding in custom made blocks, armor, swords and just about anything you can think of! "+CHILDNAME+"'s imagination was captured by this creative and technical challenge, using block "+
	"code to give our custom items special properties in the Minecraft world! Great work "+CHILDNAME+"!"+
	"<br>"+
	"<br>"+
	"After sitting with "+CHILDNAME+" today, I was super impressed by "+hisher+" natural tech ability! "+HESHE+" was really kind and listened really well in the Dojo today as we worked through these projects. "+CHILDNAME+" was very "+
	"interactive and engaged really well asking lots of questions showing off great interpersonal as well as "+hisher+" tech Skills! "+HESHE+" would make an incredible addition to our Ninja team and we hope to see you all again soon! Great work today "+CHILDNAME+"!"+	
	"</p>"
	//"<img src='Images/CodeCombatT1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Sphero1.jpg' width='200'>"
	
	hungryHungryNinjaD2 = "<p class = 'debrief'>"+CHILDNAME+" started "+hisher+" lesson today learning how to use our arrow keys to teleport!"+
	"<br>"+
	"<br>"+	
	"In Hungry Hungry Ninja, instead of just simply moving in either direction, we used all of our keys to teleport to a specific X and Y coordinates. This is very useful "+
	"for us to ensure we end up in the same place every time so we can always collect our food! This format to “teleport” is how we move most of our objects and it will "+
	"always be seen in this format, so it is a great core skill to go over here in white belt!"+
	"<br>"+
	"<br>"+	
	"This feature requires a lot of code to implement and so needed a lot of focus from "+CHILDNAME+" to finish it all today! "+HESHE+" did really well to code through it "+
	"all as "+heshe+" is becoming more confident in "+hisher+" computer skills! Once this was finished off we then got into another core concept, score systems! It works by "+
	"firstly checking whenever the ninja eats food, and then adding up a score when it does."+
	"<br>"+
	"<br>"+	
	"Once "+CHILDNAME+" did this we played the game and "+CHILDNAME+" quickly realised that the score wasn’t working! This is because, even though the score code is "+
	"correct, we hadn’t told the game to actually display this new score! "+CHILDNAME+" then added in the new code to display our score in the label each time food is "+
	"consumed by our Ninja. Fantastic work "+CHILDNAME+"! Looking forward to seeing you in again soon!"+
	"</p>"
	//"<img src='Images/HungryHungryNinja.png' class='debriefimg' width='200'>"+
	//"<img src='Images/HungryHungryNinjaC.png' width='200'>"
	
	shyChild = "<p class = 'debrief'>Meeting yourself and "+CHILDNAME+" was fantastic! Giving "+CHILDNAME+" an extra peek into how fun the world of coding (other "+
	"than just video games!) can really be.  We hope they have been left with a sense of wonder and boosted energy, at least they will sleep well tonight after using all that "+
	"brain power!"+
	"<br>"+
	"<br>"+	
	"We explored several components of our Create Program in the dojo together today. We find this circuit type of session the best way for future ninjas to get a well rounded "+
	"insight, as the booming tech industry is absolutely massive and only growing larger. There are many pathways within the industry that can appeal to a wide variety of "+
	"talents and interests. So, it is important for us to be flexible in our approach and teaching methods in order to inspire bright young minds like "+CHILDNAME+"! Whether "+
	heshe+ " is more technical, practical or artistic, there is always a path for them to develop these skills. "+
	"<br>"+
	"<br>"+	
	"Our introduction began with our Spheros! These smart robots have a vast array of sensors and motors allowing for some very fun experiments. "+CHILDNAME+" then discovered "+
	"what could be done with these robotics! The result was both fun and exciting from piloting our droids to programming instructions for them! "+
	"<br>"+
	"<br>"+	
	CHILDNAME+ " next explored our electronics by getting hands on with our tactile circuits! They used lots of different combinations of switches, buttons, lights and motors "+
	"to create both parallel and series circuits which displays some scientific concepts and is used to portray basic computer logic. Even getting to look at our fiber optic "+
	"cables and how the internet can travel through them!"+
	"<br>"+
	"<br>"+	
	"We finally jumped into a practise JavaScript project! This gave us the chance to introduce "+CHILDNAME+" to a scripting language rather than block programming like "+
	"Scratch. This project had "+CHILDNAME+" navigate a hero through a maze whilst picking up coding basics and defeating enemies! Our method of introducing ninjas to "+
	"scripting early on is pivotal to their development as "+heshe+" can begin to visually connect how the code alters the project!"+
	"<br>"+
	"<br>"+	
	"We know "+CHILDNAME+" was slightly apprehensive starting off today, which is nothing out of the norm as many kids feel "+
	"slightly anxious and more cautious with a brand new environment and new people, as do we all! But, inside the dojo with "+
	"Sensei “_______” "+CHILDNAME+" really got stuck in and was very engaged and inquisitive with our mix of activities. This "+
	"was fantastic to see for us as we love to develop Ninja’s confidence in a safe environment whilst doing something they love "+
	"and learning aswell! We look forward to seeing you back again soon!"+
	"<br>"+
	"<br>"+	
	"~ Sensei ____"+	
	"</p>"
	//"<img src='Images/CodeCombatT1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Sphero1.jpg' width='200'>"

	youngChild = "<p class = 'debrief'>Meeting yourself and "+CHILDNAME+" was fantastic! Giving "+CHILDNAME+" an extra peek into how fun the world of coding (other "+
	"than just video games!) can really be.  We hope they have been left with a sense of wonder and boosted energy, at least they will sleep well tonight after using all that "+
	"brain power!"+
	"<br>"+
	"<br>"+	
	"We explored several components of our Create Program in the dojo together today. We find this circuit type of session the best way for future ninjas to get a well rounded "+
	"insight, as the booming tech industry is absolutely massive and only growing larger. There are many pathways within the industry that can appeal to a wide variety of "+
	"talents and interests. So, it is important for us to be flexible in our approach and teaching methods in order to inspire bright young minds like "+CHILDNAME+"! Whether "+
	heshe+ " is more technical, practical or artistic, there is always a path for them to develop these skills. "+
	"<br>"+
	"<br>"+	
	"Our introduction began with our Spheros! These smart robots have a vast array of sensors and motors allowing for some very fun experiments. "+CHILDNAME+" then discovered "+
	"what could be done with these robotics! The result was both fun and exciting from piloting our droids to programming instructions for them! "+
	"<br>"+
	"<br>"+	
	CHILDNAME+ " next explored our electronics by getting hands on with our tactile circuits! They used lots of different combinations of switches, buttons, lights and motors "+
	"to create both parallel and series circuits which displays some scientific concepts and is used to portray basic computer logic. Even getting to look at our fiber optic "+
	"cables and how the internet can travel through them!"+
	"<br>"+
	"<br>"+	
	"We finally jumped into a practise JavaScript project! This gave us the chance to introduce "+CHILDNAME+" to a scripting language rather than block programming like "+
	"Scratch. This project had "+CHILDNAME+" navigate a hero through a maze whilst picking up coding basics and defeating enemies! Our method of introducing ninjas to "+
	"scripting early on is pivotal to their development as "+heshe+" can begin to visually connect how the code alters the project!"+
	"<br>"+
	"<br>"+	
	CHILDNAME+"‘s grasp of our session today really demonstrated to us that "+heshe+" is capable of tackling more senior ideas "+
	"above their age group. This age bracket is brilliant to begin learning new skills as they are so sponge like! Just like "+
	"traditional languages and any other skills for that matter, base concepts are much easier to pick up early in life and "+
	"eventually become second nature! As "+CHILDNAME+" loves video games and tech, "+heshe+" is in a prime position to pick up "+
	"industry defining abilities without even realising it. We hope to see you again soon , have a great rest of your week!"+
	"<br>"+
	"<br>"+	
	"~ Sensei ____"+	
	"</p>"
	//"<img src='Images/CodeCombatT1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Sphero1.jpg' width='200'>"

	olderChild="<p class = 'debrief'>Meeting yourself and "+CHILDNAME+" was fantastic! Giving "+CHILDNAME+" an extra peek into how fun the world of coding (other "+
	"than just video games!) can really be.  We hope they have been left with a sense of wonder and boosted energy, at least they will sleep well tonight after using all that "+
	"brain power!"+
	"<br>"+
	"<br>"+	
	"We explored several components of our Create Program in the dojo together today. We find this circuit type of session the best way for future ninjas to get a well rounded "+
	"insight, as the booming tech industry is absolutely massive and only growing larger. There are many pathways within the industry that can appeal to a wide variety of "+
	"talents and interests. So, it is important for us to be flexible in our approach and teaching methods in order to inspire bright young minds like "+CHILDNAME+"! Whether "+
	heshe+ " is more technical, practical or artistic, there is always a path for them to develop these skills. "+
	"<br>"+
	"<br>"+	
	"Our introduction began with our Spheros! These smart robots have a vast array of sensors and motors allowing for some very fun experiments. "+CHILDNAME+" then discovered "+
	"what could be done with these robotics! The result was both fun and exciting from piloting our droids to programming instructions for them! "+
	"<br>"+
	"<br>"+	
	CHILDNAME+ " next explored our electronics by getting hands on with our tactile circuits! They used lots of different combinations of switches, buttons, lights and motors "+
	"to create both parallel and series circuits which displays some scientific concepts and is used to portray basic computer logic. Even getting to look at our fiber optic "+
	"cables and how the internet can travel through them!"+
	"<br>"+
	"<br>"+	
	"We finally jumped into a practise JavaScript project! This gave us the chance to introduce "+CHILDNAME+" to a scripting language rather than block programming like "+
	"Scratch. This project had "+CHILDNAME+" navigate a hero through a maze whilst picking up coding basics and defeating enemies! Our method of introducing ninjas to "+
	"scripting early on is pivotal to their development as "+heshe+" can begin to visually connect how the code alters the project!"+
	"<br>"+
	"<br>"+	
	CHILDNAME+" was brilliantly going through our stations today whilst showing great interest! Sensei “______” mentioned how "+heshe+
	" demonstrated great aptitude towards computing, if we can transfer the passion for playing into creating, "+CHILDNAME+" will "+
	"do incredibly well. With the Junior years, it can be tougher to instigate a want for extracurricular activities as i’m sure "+
	"they have been to dozens and are harder to get out of the house now! But, as "+CHILDNAME+" saw today they can develop  "+
	"their hobbies and turn them into a very sought after skill set for their future. Have a fantastic rest of your day and we "+
	"hope to see you and "+CHILDNAME+" again soon!"+
	"<br>"+
	"<br>"+	
	"~ Sensei ____"+	
	"</p>"
	//"<img src='Images/CodeCombatT1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Sphero1.jpg' width='200'>"

	Roblox1 = "<p class = 'debrief'>Today, "+CHILDNAME+"  started on "+hisher+" blue belt path in the Create studio! Where we’re going to explore 3D game design all the way from building our world, to "+
	"editing and publishing them online via the Roblox community! This was a nice change of pace from "+CHILDNAME+"‘s norm as for now we weren’t too focused on anything really technically demanding. "+
	"As "+heshe+" stepped up yet another level, we again have to go back to the foundations of this new branch on "+hisher+" journey. "+
	"<br>"+
	"<br>"+	
	"We explored together the Create Studio and how to navigate its quite professional looking user interface. As "+CHILDNAME+" continues to harness additional skills by uncovering this software "+
	"piece by piece. We began by basic 3D object sculpting and allocation, incorporating collisions and anchoring to make certain objects behave different ways, for example our ball had collisions "+
	"on but anchoring off so that we could run into it and move it, whereas objects like the waypoint flags had collisions off and anchoring on, this meant it would float in the sky. "+
	"<br>"+
	"<br>"+	
	CHILDNAME+ "used different utilities in the toolbox to make different images, we only started off with blocks, wedges, cylinders and spheres, so to make the objects hollow was a bit of a "+
	"challenge. This is a big step up from step up from our 2D game creation and "+CHILDNAME+" did brilliantly in "+hisher+" introduction to this new interface!"+
	"<br>"+
	"<br>"+	
	"Our first phase to Blue Belt will have "+himher+" focusing on designing their very own parkour/obstacle course. This will set the groundwork before we introduce LUA scripting, we mentioned "+
	"before how we have been practising a simulated ‘real world’ like approach to project development. This is the first major step of that methodology coming into practise in a big way. Brilliant "+
	"We are looking forward to all of your 3D Creations as we work through this new Belt! Brilliant work "+CHILDNAME+"!"+
	"<br>"+
	"<br>"
	//"<img src='Images/Blue0101.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue0102.png' width='200'>"
	

	roblox2 = "<p class = 'debrief'>The DOORWAYS OF DOOM! Roblox is of course a game most Ninjas know and love, so we always want to use this fun inside every game "+CHILDNAME+" will design and create! "+
	"Doorways of Doom will be no exception to this, and a great way to learn multiple coding concepts in Lua whilst creating a massively fun challenge!"+
	"<br>"+
	"<br>"+
	"Tasked with a simple instruction, the player must choose a door. The correct door fades away revealing a new obstacle course that "+CHILDNAME+ " must create, and the incorrect door... Well, let's just make sure "+
	"we get the right one! This project requires "+CHILDNAME+" in their first look of Lua code to create an if statement checking when 2 objects collide. Not only that, but if they collide with an object that contains the player "+
	"inside it. In Roblox, there are multiple objects inside eachother, the player has over 300! If the door collides with a block, we have to check that blocks 'Parent', if it is the humanoid then we run the code!"+
	"<br>"+
	"<br>"+
	"The correct door will change its Transparancy and Collision to allow us to move through, and the incorrect door reduces our HP to 0! OOF! This is a great first look into all things Lua, and creatively portrays a lot of concepts "+
	"about what we will be seeing much more throughout Blue belt! Once the doors were created, "+CHILDNAME+" had to do something similar, a bunch of floor pieces that if the incorrect one was landed on, they would dissapear and "+
	"fall through out of the map below! This time the correct blocks simply do nothing and allow for a stable foothold! This conveys concepts such as duplication and rotation of our objects, allowing for easy manipulation and game creation "+
	"all throughout Blue Belt! We hope the Belt is living up to expectations so far, and there is plenty more fun to come! Great work today "+CHILDNAME+", keep it up!"+
	"<br>"+
	"<br>"
	//"<img src='Images/Blue0201.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue0202.png' width='200'>"
	

	roblox3 = "<p class = 'debrief'>"+CHILDNAME+" dove straight back into "+hisher+" ever expanding obstacle course/parkour challenge game!"+
	"<br>"+
	"<br>"+	
	"This phase of Blue Belt is designed to slowly introduce new elements of the Create Studio to "+CHILDNAME+" and get "+himher+" to implement them as we go on. This "+
	"afternoon we were exclusively developing the use of spawn points and effects, very integral parts to any awesome Roblox based game, or any for that matter! "+
	"For starters, spawn points may be the most crucial part of any beginnings of game development, as this is where the player will spawn in when we run the game. It's "+
	"also where they will respawn if they die in the game (or fall off the course in our version). So, if we were crafting an epic fantasy RPG, we would want our character "+
	"to begin the level at the start of an enchanted forest and follow our pre-designed pathways and nudges to logically make progress. "+
	"<br>"+
	"<br>"+	
	"On the other hand if "+CHILDNAME+" was making an multiplayer competitive shooter, we would have to ensure respawns were fair, by being spaced evenly with timers, "+
	"character parameters and raycasting (so, we wouldn’t respawn into an enemy’s line of sight!). But, much more on complicated stuff like that later! "+
	"For now, this demonstrates the importance of this often overlooked part of creation by new designers. "+CHILDNAME+" input several spawn points throughout our obstacle "+
	"course. This means if the player makes it past a few obstacles and comes into contact with the next spawn point before dying it will allocate the player to that spawn, "+
	"thus acting like a checkpoint to save your progress and continue the challenge. "+
	"<br>"+
	"<br>"+	
	"When testing this out "+heshe+" discovered that they automatically have a 5 second respawn time, "+CHILDNAME+" didn't want this to be quite as long, so we altered the "+
	"object properties and put it down to 1 second to have a smoother player experience. We also had a look at effects, this is where we can make certain objects glow or "+
	"appear on fire. To begin with, fires or smoke emitters may not look as big or realistic as we would like so we can have a look at the properties and mess around with "+
	"the size and colours of the fire, as well as how much, how fast and what colour the particles and smoke emitted are! We can use clever settings like this to bring "+
	"alive aspects of our games like flaming torches in a hallway or have smoke emit from a broken vehicle!"+
	"<br>"+
	"<br>"+	
	"I’m really looking forward to "+CHILDNAME+" continuing to create and fine tune this game, using everything "+heshe+"  knows and incorporating it! Great job today "+
	"superstar, we look forward to seeing you again next week!"+
	"<br>"+
	"<br>"
	//"<img src='Images/Blue0301.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue0302.png' width='200'>"
	
	roblox3part2 = "<p class = 'debrief'>With "+CHILDNAME+"‘s new foray into three dimensional design, this session takes "+hisher+" skills up a notch by incorporating more advanced "+
	"in-game solid modelling. This lets us use and create complex models from simple blocks, spheres, wedges, and cylinders. These ‘merged’ models can even significantly reduce "+
	"overall part count in a game and improve performance! (But, more on optimization later..)"+
	"<br>"+
	"<br>"+
	"The main operation for solid modeling that we will be using is Union! To use it "+CHILDNAME+" needed to select the parts "+heshe+" wanted to combine and under this setting they "+
	"will be unionised! To best visualize this, think of a traditional Snowman design, this is usually 3 spheres stacked on top of eachother. Now, if "+CHILDNAME+" was to model this we "+
	"could union the spheres into one so they blend properly and become a single object! So, you can see how this can become very handy for us to use. "+
	"<br>"+
	"<br>"+
	"Solid modeling allows for more than just joining two parts together — parts can also be removed from other parts using the Negate feature. When "+heshe+" used it this converts the part "+
	"to a “negative part” (it will turn red and translucent to indicate this). If this negative part is unioned with a normal part, the section which overlap will be cut out. Think of making "+
	"a flat circle, if we then created another smaller ‘negative circle’ and negated the middle, the final product would look like a donut. As using the negation effectively cut/ removed the "+
	"smaller section. "+
	"<br>"+
	"<br>"+
	"Luckily there is an effective way for "+CHILDNAME+" to undo all of these crazy contraptions! To revert the result of a unioned model, we used the Separate tool. This breaks the union apart "+
	"so you can resize and rework the model! Discovering this tool led us onto one of the key limitations of these editing features!"+
	"<br>"+
	"<br>"+
	"As a unioned or negated part can only be scaled uniformly (all of the dimensions must be scaled at the same proportion). If "+CHILDNAME+" needed to change just one part in a solid model, "+heshe+
	"had to first separate the model, transform the specific part, and redo the union process. A pain! But, the best way to make our designs effective and true to form!"
	
	
	roblox4 = "<p class = 'debrief'>Today "+CHILDNAME+" got right back into "+hisher+" Create Studio projects, with the hardest so far! This project does not contain much coding, but intoduces very complex "+
	"ideas to "+CHILDNAME+"."+
	"<br>"+
	"<br>"+
	"Roblox does not apply physics to objects that touch moving objects, unless they are hinged. If we simply code a big plate to rotate over time, objects that are on top of it would remain in place as the plate "+
	"spun below. We wanted to make a Spinner game much alike the old TV show total wipeout's 'The Sweeper'! we wanted a plate spinning one way, and another cylinder spinning the other way that would knock us off! "+
	"If we simply coded objects to spin in opposite directions they would not interact with the player below, which ins't very helpful! So "+CHILDNAME+" was introduced to hinges!"+
	"<br>"+
	"<br>"+
	"Hinges in Roblox are critical to how objects are moved and require 2 objects to do so. One object is made to be the Motor, spinning another object around. "+CHILDNAME+" welds these 2 together with a handy tool, "+
	"and then 'Anchoring' one of these blocks causes it to be completely Immovable no matter how big the other object it is trying to spin, Take that Newton! Once all "+hisher+" blocks were in place and rotating, we "+
	"wanted the game to be a bit harder! "+CHILDNAME+" added code to this motor, and made the motor increase its speed over time until it got to a certain value, so the level got harder and harder! Roblox can be quite "+
	"forgiving when it comes to a player hitting something going very fast, sometimes it causes bugs where the object would just bounce off like the player is Iron Man! This was easily fixed by using the 'Sit' Command"+
	"<br>"+
	"<br>"+
	"The 'Sit' Command was run whenever the player touched the spinner, and it forced them to become a ragdoll that could be pinged far away due to the speed of the incoming spinner! Great work today "+CHILDNAME+"! "+
	"you're really getting into the swing of the Create Studio, keep it all up!"+
	"<br>"+
	"<br>"
	//"<img src='Images/Blue0401.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue0402.png' width='200'>"+
	//"<img src='Images/Blue0403.png' width='200'>"
	

	roblox5 = "<p class = 'debrief'>In "+CHILDNAME+"‘s continuation with getting to grips with the Create Studio, this session we had another look at spawn points, but this time "+
	"we utilised them in a more advanced way!"+
	"<br>"+
	"<br>"+	
	"To create the basis for a multiplayer component in our games, we of course need teams! To implement this, "+CHILDNAME+" had to insert a teams service and then "+
	"make our team an object, we could choose to have as many different teams as we wanted but we’d need a team object for each one! The teams service adds team functionality "+
	"and is closely tied to player spawns. Team names and colours, along with all the players on that team, are visible on the in-game leaderboard! This is fantastic for "+
	"a ‘straight out of the box’ approach to multiplayer. But we had to get a little more creative for our obstacle course..."+
	"<br>"+
	"<br>"+	
	"Firstly, "+heshe+" had to correctly configure our spawn points. By default, spawn locations are neutral, meaning any player can spawn upon them. In most games, however, "+
	"teams should be separated by distinct “territories” or a physical barrier like a team door! "+CHILDNAME+" has all players start at the same point , then assigned unique "+
	"colours or names that we can use to decipher which team and spawn location are which. For instance we can call the second spawn/checkpoint in our course “Level 2”, "+
	"“Flame Ladder” or simply assign it the colour purple. Also, by default Roblox will auto-assign new players to the team with the fewest players. "+CHILDNAME+"  had to "+
	"ensure that players were assigned to a specific team and spawn location which we’ve already configured. For instance, if all players were on the Grey Team in the "+
	"beginning, the next spawn point touched could be Blue Team then Red Team etc. So, changing the teams once you pass a spawn is a quite clever way of manipulating the "+
	"core system to allow for multiple respawns to save progress in multiplayer!"+
	"<br>"+
	"<br>"+	
	"After  "+CHILDNAME+" established the base, "+heshe+" imported a background from the toolbox and proceeded to make the rest of "+hisher+" obstacle course, using different "+
	"blocks, materials, colours, and properties, however this time "+heshe+" needed to make two different obstacle course paths depending on which team the players spawned in "+
	"as! "+
	"<br>"+
	"<br>"+	
	"Throughout Blue Belt we really want "+CHILDNAME+"  to start getting a great understanding of how a player will see the game, and how we can enhance our projects to make "+
	"them more enjoyable to play. "+CHILDNAME+"  is a natural at this, "+heshe+" has a great sense of creativity which has been evident from the beginning. This more innovative "+
	"side is being brought out more and more each session! Great work today "+CHILDNAME+"!!!"+
	"<br>"+
	"<br>"
	//"<img src='Images/Blue0501.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue0502.png' width='200'>"

	roblox6pt1 = "<p class = 'debrief'>Today "+CHILDNAME+" started to add to their base terrain! In Zombie Island, the aim is to try and make a multiplayer survival game, with 2 or "+
	"more teams in an enclosed area. There will be weapons dotted throughout the map and it's down to the players which weapons they decide to use. The last team standing "+
	"wins. "+
	"<br>"+
	"<br>"+
	"We started off by making our baseplate, we needed to think about the colours and textures we would use, so "+CHILDNAME+" made "+hisher+" yellow for the sand. Next, we had "+
	"a look at how to import weapons so that they would work in the game, we chose weapons from the toolbox ranging from pistols to railguns. When we clicked on our chosen "+
	"weapon it would present an option to put the tool into the starter pack, we could click ‘Yes’ if we wanted players to start the game with the weapon or  ‘No’ to simply "+
	"place the weapon in the game world as a pickup. "+
	"<br>"+
	"<br>"+
	"Each endorsed weapon contains a complete copy of the entire weapons system, including sounds and decals for all weapons. This allows us to change hit damage, recoil, "+
	"fire rate, zero damage rate, shot cooldown and lots more. The first time we brought in an endorsed weapon, we needed to move its WeaponsSystem folder into "+
	"ServerScriptService . Later, we were sure to delete the WeaponsSystem folder from any new endorsed weapons we added to avoid confusion when modifying them. Within "+
	"the actual parts of the gun itself, there are lots of different animations and effects for when reloading and firing. We can edit things like how far the bolt goes "+
	"back, what sounds are produced from different motions and what the gun looks like when being fired. "+
	"<br>"+
	"<br>"+
	"Great job today "+CHILDNAME+", I’m looking forward to seeing what you add next week!! I was very impressed with how hardworking "+CHILDNAME+" was today, from the "+
	"second "+heshe+" sat down "+heshe+" was either editing "+hisher+" games or testing to see if they worked. This type of determination and enthusiasm is something we hope "+
	"all of our ninjas will adopt and it’s great to have "+himher+" in there as a role model, especially to some of the younger or newer kids. Great work today "+CHILDNAME+", "+
	"I look forward to seeing you next week!!"+
	"<br>"+
	"<br>"
	//"<img src='Images/Blue0701.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue0702.png' width='200'>"
	
	
	

	robloxforloop1 = "<p class = 'debrief'>Today we revisited our old friend for-loops and how we can use them in our new zombie island project! But, this time "+CHILDNAME+" "+
	"will be adapting their skillset to transfer known JavaScript concepts to Lua. Our new for loop will act as a zombie spawn station where our enemies will be coming "+
	"from (perhaps we can hide this in an island cave later!). "+
	"<br>"+
	"<br>"+
	"Now let's make it more interesting!! "+CHILDNAME+ "could then try "+hisher+" hand at either creating a Zombie model or adding a pre-made one from the Create Studio’s toolbox. In our "+
	"script we can now use a local variable that find our zombie within the workspace , then we’ll use the for-loop, only instead of our print code, we now made a local variable to clone the zombie! "+
	"<br>"+
	"<br>"+
	"Finally it was time to start destroying them zombies! After having a go destroying them we quickly realised that all th zombies spawn on top of eachother! So "+CHILDNAME+" needed to use the "+
	"‘count’ variable in our loop to change the zombie positions! When changing a model's position, we actually need to move it's 'root Part'  this part is the center of the model! To do this "+heshe+" "+
	"coded a variable for the original zombies position, and for the new clone’s position! Now make the new zombies position use the original zombies position plus ‘count*15’. So the first zombie is "+
	"15 away, the second is 30 away, the third is 45… "+
	"<br>"+
	"<br>"+
	"Great work today "+CHILDNAME+" Importing your previous javascript knowledge into this new format! Keep it up and you’re really settling into the Blue Belt now!"+
	"<br>"
	//"<img src='Images/Blue0703.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue0704.png' width='200'>"+
	//"<img src='Images/Blue0705.png' width='200'>"+
	//"<img src='Images/Blue0706.png' width='200'>"

	roblox8 = "<p class = 'debrief'>In today’s session we continued and finished off "+CHILDNAME+"‘s new project, Zombie Island! Last lesson we started by importing a "+
	"baseplate that we could use as the island, creating for loops and of course spawning our zombies!"+
	"<br>"+
	"<br>"+
	"Today we added to this fantastic land using the toolbox! "+CHILDNAME+" chose another island which we could use, and also had a look "+
	"at some more weapons that we could add in. Once all the weapons and land masses were in place we had a look at something called NPC’s (Non-Player-Characters). NPCs "+
	"can add a lot of depth to a game. Lots of NPCs can be visually customized, their behavior modified, and some can even defend an area by attacking players or other "+
	"characters when they enter. Inside each of these characters, there is the code to change; whether they are destroyed when you kill them or if they come back to life, "+
	"how far they can roam, their attack radius and lots of other behavioural differences."+
	"<br>"+
	"<br>"+
	"Once "+CHILDNAME+" finished adding in these improved zombies, "+heshe+" was able to start up the game and have a go at playing it, "+heshe+" found that the zombies attack "+
	"radius was very low as they didn't notice "+hisher+" character until "+heshe+" shot at one of them, at which point you could see the zombie turn around and begin to move "+
	"towards us! as "+CHILDNAME+" shot the zombie you could visually see its health decrease on a bar above its head. "+CHILDNAME+" went into the script for the Zombie and changed "+
	"its property of 'SightRadius' to fix this and then "+heshe+" had a working zombie surival game! "+CHILDNAME+" Created all of the terrain, all of the spawning code and customized their "+
	"own Zombie's properties in this great Project, Great work today "+CHILDNAME+"! Keep it up!"
	"<br>"+
	"<br>"
	//"<img src='Images/Blue0801.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue0802.png' width='200'>"
	
	robloxTycoon = "<p class = 'debrief'>Today "+CHILDNAME+" got to create one of the most popular theme of game in all Roblox! Tycoon Games!"+
	"<br>"+
	"<br>"+
	"Their premise is very simple, like a cookie clicker type game if you have heard of it, with oppertunities to get very complex using strategy and skill to master. "+
	"The most common type, is where over a set period of time, the player is given money. Once they  enough money, they can click a button to get an upgrade that allows "+
	"the player to get more money faster. An example being a game where every 10 seconds you are given £10, and an upgrade for £50 reduces this timer to 9 seconds."+
	"<br>"+
	"<br>"+
	"Whilst seemingly very simple, these games took Roblox by storm and are one of its most popular game genres. The simplicity of sitting back watching money roll in wihtout needing "+
	"to put much input in can be quite addictive! If only real life was this easy!!! "+CHILDNAME+" created this game using a new concept to Lua, Global Variables! We have used these "+
	"plenty of times in Javascript, typing in the variable like this -> 'ObjectName.Nickname = Code' but roblox is actually a lot simpler, -> '_G.Nickname = Code' with the _G standing for "+
	"Global! "+CHILDNAME+" used 2 variables, one for the timer, and one for the total money."+
	"<br>"+
	"<br>"+
	CHILDNAME+" Then added a GUI - a Graphical User Interface - that made a textbox appear on the screen of the player, up in the top left. "+HESHE+" then added a script the textbox and coded "+
	"it to display our Money Global variable every frame. "+CHILDNAME+" coded money bricks to duplicate as they fell into a great big money pit and lastly an upgrade that when pressed would check "+
	"the players total money and, if they had enough money, reduce the timer and delete enough money bricks! Great work today "+CHILDNAME+" I hope you enjoyed watching all that money roll in!"+
	"<br>"+
	"<br>"
	//"<img src='Images/Blue0901.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue0902.png' width='200'>"
	
	robloxLighting = "<p class = 'debrief'>In today’s activity, we modified a premade map of a city to add an exciting path to the top of a skyscraper. This activity "+
	"builds on the lessons we have done previously as "+CHILDNAME+" begins to become more and more adept at using the roblox creative studio! This skyscraper background "+
	"adds a large amount of new challenges to this obby creation as there is a confined space that has to be worked within."+
	"<br>"+
	"<br>"+
	"Our main lesson for today was how to control lighting in Roblox and create ambient scenes. Lighting typically comes from a base ‘sun’ object in the corner of our scenes "+
	"which we could move around to control our shadow locations. This core ‘sun’ is globally controlled but for aesthetic and level design reasoning "+CHILDNAME+" can include "+
	"in-game light sources like lamps, torches, spotlights, TV screens, etc."+
	"<br>"+
	"<br>"+
	"We first practised together with Point Lights, these emit light spherically from a single point. This object is ideal for non-directional light sources like bulbs, "+
	"torches, and fireballs. These light sources need to be inserted directly into parts, meshes, or attachments, so "+CHILDNAME+" utilized them in balls of light and a fire "+
	"path to help navigate the start of the obstacle tower to act as a mini tutorial type of initial guidance for the player. "+
	"<br>"+
	"<br>"+
	"Now "+CHILDNAME+" learned how to create new light sources, which can change the colours of our scenes. We can customise these to such an extent that it can easily be "+
	"used as separators for rooms as we move into a new location, we can change all the ambient colours to make for clear room separation. This way we can easily make our "+
	"obby course seem as though we moved through multiple rooms on our way to the top!"+
	"<br>"+
	"<br>"
	//"<img src='Images/Blue1001.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue1002.png' width='200'>"
	
	robloxScript = "<p class = 'debrief'>After getting "+CHILDNAME+" used to 3D design in the Create Studio, we are now getting to grips with a new scripting language!"+
	"<br>"+
	"<br>"+
	"Unlike building and UI design, scripting is fairly practical. As "+CHILDNAME+" knows, the goal of scripting is simple, we are attempting to make the game itself "+
	"work! The importance today is to get "+himher+" to pivot from JavaScript to this new language: Lua!"+
	"<br>"+
	"<br>"+
	"The concepts we are working with today are all familiar to "+himher+" , we just need to wrap our heads around how to apply it in this new environment. Before starting, "+
	"as always we made sure the format and syntax is correct to ensure the perfect programming experience. "+
	"<br>"+
	"<br>"+
	"Being disorganized is one of the worst things you can do while scripting, as it can be a huge pain to go back and constantly debug! We introduced variables in Lua, they "+
	"aren’t strictly necessary, but they are highly recommended and considered vital because they save a lot of time and keep your scripts organized as we can use them to "+
	"store booleans, numbers, and strings. Just like JavaScript! Then putting local before a Variable will transform it into a local variable in Lua. This can only be used "+
	"in a limited scope, meaning that can only be used in the code block/function. It is good practice to use local variables because they are accessed faster than global "+
	"variables."+
	"<br>"+
	"<br>"+
	"Next session we will be looking at how to incorporate loops, tables and more as we slowly implement code into "+hisher+" imaginative design!"+
	"<br>"+
	"<br>"
	//"<img src='Images/BlueBasics01.png' class='debriefimg' width='200'>"+
	//"<img src='Images/BlueBasics02.png' width='200'>"
	
	robloxKillBlock = "<p class = 'debrief'>Now its time to get more into Roblox Lua Code! Today "+CHILDNAME+" was going to be looking at collision events! "+CHILDNAME+" explored how "+heshe+" can add some fun "+
	"gameplay variations into "+hisher+" previous work of the great obstacle course! "+
	"<br>"+
	"<br>"+
	"the idea was to implement something the community calls a ‘Kill Brick’, this is colloquial term for simply an object that will destroy or restart the player if "+
	"connected with. You can imagine the type of fun "+CHILDNAME+" had with this as now we got to incorporate all manner of traps and dangerous items into "+hisher+" obstacle "+
	"course to make it that much more difficult for a player to navigate!"+
	"<br>"+
	"<br>"+
	CHILDNAME+" is quite familiar with applying a similar method into JavaScript but with Lua, and especially within the Create Studio, we have to be aware of both larger "+
	"and smaller syntax rules. For instance, "+heshe+" began by using our built in reference to the Script object which will execute under the Parent (any property within "+
	"Roblox – specifically the brick which we are referring too!). "+heshe+" set up a connection function that triggers upon contact with any part of our Humanoid. As we are "+
	"now operating in a 3D space, "+CHILDNAME+" needs to account for all freely moving parts that we could possibly affect. The condition that this function triggered caused "+
	"the player’s health to reduce to 0! And there it is! "+CHILDNAME+" has now scripted an object of mass destruction to strike fear into any who play "+hisher+" project! Great work!"+
	"<br>"+
	"<br>"
	//"<img src='Images/Blue1101.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue1102.png' width='200'>"

	robloxSpeedBoosts = "<p class = 'debrief'>Continuing from last session, "+CHILDNAME+" was working to incorporate more traps, tricks and powerups into "+hisher+" hardcore"+
	"/vertical obstacle course! This session, as opposed to the ‘Kill Bricks’ we were placing aids instead of hindrances! "+
	"<br>"+
	"<br>"+
	"The first such aid or power up was an awesome speed boost! This will help the player with manoeuvrability and can even be a core gameplay mechanic if "+CHILDNAME+" created "+
	"a time trial variant with checkpoints it can become quite the race! The scripting to enable this ability is quite similar to the trap code. As we have a condition that "+
	"triggers upon the collision but instead of removing the player’s health, we add to the player’s walk speed. Thus, simulating a big or small increment boosts the "+
	"character!"+
	"<br>"+
	"<br>"+
	"We had a play around with what object we could use to represent a boost or slow. Like a big green arrow or a neon floating orb! "+CHILDNAME+" also added in a further "+
	"element of challenge by having "+hisher+" powerup function linked to the object's transparency and set to a timer! So, we could have our boosts appearing and disappearing "+
	"at random."+
	"<br>"+
	"<br>"+
	"The next powerup that "+CHILDNAME+" scripted was a jump pad! We had the ground floor abilities now we can have some awesome vertical scalability too! We would again use "+
	"the speed script as a base, but this time we would alter the humanoid parameter to affect the character model’s jump height upon collision with whatever object we "+
	"determined to be the ‘launch pad’. "+
	"<br>"+
	"<br>"+
	"Lastly, to give this step of the project some creative flair, "+CHILDNAME+" scripted in some effects to trigger when the powerup was collected, such as a sparkle trail "+
	"when jumping high off the ground or a blazing fast path or fire to follow behind after a boost of speed!"+
	"<br>"+
	"<br>"
	//"<img src='Images/Blue1201.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue1202.png' width='200'>"+
	//"<img src='Images/Blue1203.png' width='200'>"+
	//"<img src='Images/Blue1204.png' width='200'>"
	
	robloxConveyorBelt = "<p class = 'debrief'>Today "+CHILDNAME+" created a conveyor belt in a scripting challenge  where we could move parts and also players along! To do this, "+
	"we needed to use ‘AssemblyLinearVelocity’ which changes the velocity of any object, including players and npcs if it touches a certain object. This project required "+CHILDNAME+
	" to create a conveyor belt from a part, add attachments to each end, and also add a script to make it work!"+
	"<br>"+
	"<br>"+
	"Firstly, "+CHILDNAME+" added a part and then changed its scale, colour and material to make the conveyor belt unique! "+HESHE+" had to make sure "+hisher+" conveyor belt was "+
	"anchored so that it wouldn’t be moved due to collisions with the player or other parts. "+HESHE+" then added an attachment to each end of the part and called them ‘AttStart’ "+
	"and ‘AttEnd’. "+HESHE+" then used these later to find the distance between the start of the conveyor belt and the end! Anything that touches the conveyor belt between these points "+
	"will then, later on, be moved between them! "+
	"<br>"+
	"<br>"+
	"Next, "+CHILDNAME+" had to add a number ‘attribute’ to the conveyor belt, called Conveyor Speed! We will use this inside the script, and we can change its value inside the "+
	"editor to make the conveyor belt’s speed faster or slower. "+
	"<br>"+
	"<br>"+
	"Now we could start on some scripting! "+heshe+" added "+hisher+" new script to the conveyor belt so "+heshe+" could reference it as ‘script.Parent’! As the script is inside the "+
	"conveyor belt it is the ‘child’ while the conveyor belt is its ‘parent’. "+HESHE+" made variables for each of the attachments so that it was easier to refer to them later on in "+
	"the script. "+
	"<br>"+
	"<br>"+
	"The next step was to make a function which finds the distance between the two attachments and then multiplies this by ‘Conveyor Speed’ so that its speed can actually be changed! "+
	CHILDNAME+ "then needed to set "+hisher+" ‘AssemblyLinearVelocity’ to this new velocity so that it is applied to anything that touches it! "+
	"<br>"+
	"<br>"+
	"Amazing job today "+CHILDNAME+" with completing this ‘Prove Yourself’ project!"+
	"<br>"+
	"<br>"
	//"<img src='Images/Blue1301.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue1302.png' width='200'>"
	
	robloxDoorsandKeys = "<p class = 'debrief'>"+CHILDNAME+" learned how to create doors and keys inside Create Studio to add detail to our wider interior game design! We get to use "+
	"some scripting skills to destroy/remove a door when the key is collected, which simulates it’s opening! Not as smooth as animating the object, but "+CHILDNAME+" will get there "+
	"eventually. "+
	"<br>"+
	"<br>"+
	"Firstly, "+heshe+" had to design "+hisher+" own part to create a door which is anchored so it cannot be moved or walked through. "+CHILDNAME+" then created "+hisher+" own key "+
	"using different parts which were all added into the same model which was called ‘Key’. "+
	"<br>"+
	"<br>"+
	"Models allow parts to act as one and be moved at the same time, so for example, if it was a model that could be pushed, touching one part would move the whole model! This is a "+
	"very important element of design inside the Create Studio for creating houses, characters and, in this example, keys!"+
	"<br>"+
	"<br>"+
	"Once "+CHILDNAME+" created "+hisher+" key, the next step was to anchor it, just like the door, so it couldn’t be moved by the collisions. "+CHILDNAME+" then selected the main part "+
	"of the key and added a script to it. The next part of the project was adding the code so that the door would be deleted when the key was touched. If a player touched the key, the "+
	"door would then be destroyed and the player could walk through it!"+
	"<br>"+
	"<br>"+
	"To finish off this project, "+CHILDNAME+" added some more keys and doors, changing the colour and material of corresponding ones so that they match! "+
	"<br>"+
	"<br>"+
	"Awesome work from "+CHILDNAME+" today, "+heshe+" is showing fantastic progress! "+
	"<br>"+
	"<br>"
	//"<img src='Images/Blue1401.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue1402.png' width='200'>"

	robloxZombieTerrain = "<p class = 'debrief'>Today "+CHILDNAME+" started a new project, Zombie Island! They may remember this classic from the very first White Belt lesson! But, this "+
	"time their coding level is vastly superior to back then so an awesome 3D remake is required!"+
	"<br>"+
	"<br>"+
	"To kick things off "+heshe+" was introduced to the terrain editor, which allows us to generate terrain made of mountains, lava, water, dunes and much more! Once the terrain has been "+
	"generated, there are multiple tools which "+CHILDNAME+" used to manipulate the area. "+
	"<br>"+
	"<br>"+
	"The main tool is ‘add’, and "+CHILDNAME+" decided to add lots of sand/grass/stone/lava to make the base of "+hisher+" island. "+heshe+" also decided to make lots of secret caves "+
	"which the player can discover and hide from the zombies in! "+CHILDNAME+" used the ‘erode’, ‘subtract’ and ‘flatten’ tools to add detail to "+hisher+" island design and to make "+
	"it look natural! The ‘grow’ tool can be used to add to already existing terrain, which is useful for creating hills and mountains or making them bigger!"+
	"<br>"+
	"<br>"+
	"The terrain editor introduces "+CHILDNAME+" to map and level design, which is a main component of video game design. As well as the programming side of video games, we also want "+
	"to teach them how to design maps, characters, weapons and much more! "+
	"<br>"+
	"<br>"+
	"Well done for creating your map today "+CHILDNAME+"! We’ll see you next session to start adding in some weapons to fight the zombies with!"+
	"<br>"+
	"<br>"
	//"<img src='Images/Blue0601.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue0602.png' width='200'>"
	
	server1 = "<p class = 'debrief'>This is a brand new project that was introduced into the Orange Belt Curriculum and "+CHILDNAME+" got to test it out for us! "+
	"<br>"+
	"<br>"+
	"Its very similar to all of those restaurant tycoon games that I imagine you see plenty of adverts for whilst browsing!  We got to unpack this concept today and recreate it! The basis of this game is that "+
	"2 ninjas will be requesting their food orders! At random intervals they will ask for specific items and we will have to drag the correct order to them before time runs out! "+
	"<br>"+
	"<br>"+
	"Now to set this all in motion! Firstly, inside each food item we added a line of code so the game knows what coordinates the food starts at! Then inside every food’s mouse button up, we ran a function so "+
	"if it touched one of the ninjas, the food would be ‘eaten’ and sent back to where it started!"+
	"<br>"+
	"<br>"+
	"We next needed to set up an important part for anyone competitive, the scoring system! "+CHILDNAME+ "added code so that when the game starts the score was set to zero and the blackReq (Request) function was "+
	"ran!  "+HESHE+" coded this function to empty the texts and select a random food. We then create a clone of this food and run a function called ‘placeFood’ which we will use to place it later!"+
	"<br>"+
	"<br>"+
	"To finalize our setup for this blog project today we created the opposite function; pinkReq. This will mirror the previous function and allow our Pink Ninja to get fed too! Well done so far "+CHILDNAME+", "+
	"next session we will be scripting some more giant functions to really bring this work all together!"+
	"<br>"+
	"<br>"
	//"<img src='Images/Server.png' class='debriefimg' width='200'>"+
	//"<img src='Images/ServerC1.png' width='200'>"+
	//"<img src='Images/ServerC2.png' width='200'>"


	server2 = "<p class = 'debrief'>Continuing from last lesson we had to create the placeFood function to well, place our food! The placeFood function took in 3 parameters: the food we are going to clone, "+
	"an X coordinate, and a Y coordinate. It then reduces its size slightly to ensure it fits and then we freeze it in place too! "+
	"<br>"+
	"<br>"+
	CHILDNAME+ "then created the giveFood function, thats the thing that runs whenever we drag some food onto out ninja. It firstly checks if the ninja that the food was dragged to is correct, then if the food "+
	"matches the food that was asked for! "+CHILDNAME+" put a function inside these statements for either “CorrectFood” or “WrongFood”! Both of these functions would have the ninja selected inside them, so we "+
	"know whose label would change"+
	"<br>"+
	"<br>"+
	"The CorrectFood function changed the selected ninjas text to a thank you message, and added some points before running a ‘prepare’ function. The WrongFood function would display a message of "+CHILDNAME+"’s "+
	"choosing, displaying jut how hungry the Ninja was! It would then reduce our points of course! The final step was for "+CHILDNAME+" to create the prepare function that would give ourselves more food!"+
	"<br>"+
	"<br>"+
	"This prepare function would firstly select a random whole number between 1 & 0. So it would either be…. 1 or 0! Simple enough, if the number chosen was a 0, we would run the ‘blackReq’ and if the number "+
	"was 1 we would run the ‘pinkReq’! Lastly a new timer would lose some points and have our Ninjas tell us to ‘Hurry up!’ if we took too long! Brilliant work "+CHILDNAME+" This is a massive game so keep up the "+
	"great work!"+
	"<br>"+
	"<br>"
	//"<img src='Images/Server.png' class='debriefimg' width='200'>"+
	//"<img src='Images/ServerC1.png' width='200'>"+
	//"<img src='Images/ServerC2.png' width='200'>"
	

	serverFull = "<p class = 'debrief'>This is a brand new project that was introduced into the Orange Belt Curriculum and "+CHILDNAME+" got to test it out for us!" +
	"<br>"+
	"<br>"+
	"Its very similar to all of those restaurant tycoon games that I imagine you see plenty of adverts for whilst browsing!  We got to unpack this concept today and recreate it! The basis of this game is that "+
	"2 ninjas will be requesting their food orders! At random intervals they will ask for specific items and we will have to drag the correct order to them before time runs out! "+
	"<br>"+
	"<br>"+
	"Now to set this all in motion! Firstly, inside each food item we added a line of code so the game knows what coordinates the food starts at! Then inside every food’s mouse button up, we ran a function so "+
	"if it touched one of the ninjas, the food would be ‘eaten’ and sent back to where it started!"+
	"<br>"+
	"<br>"+
	"We next needed to set up an important part for anyone competitive, the scoring system! "+CHILDNAME+" added code so that when the game starts the score was set to zero and the blackReq (Request) function was "+
	"ran!  "+HESHE+" coded this function to empty the texts and select a random food. We then create a clone of this food and run a function called ‘placeFood’ which we will use to place it later! Then we copied "+
	"this code and changed all the ‘black’ to ‘pink’ to allow the other ninja to request food too!"+
	"<br>"+
	"<br>"+
	"We then had to create the placeFood function to, well, place our food! The placeFood function took in 3 parameters: the food we are going to clone, an X coordinate, and a Y coordinate. It then reduces its "+
	"size slightly to ensure it fits and then we freeze it in place too! "+
	"<br>"+
	"<br>"+
	CHILDNAME+ "then created the giveFood function, thats the thing that runs whenever we drag some food onto out ninja. It firstly checks if the ninja that the food was dragged to is correct, then if the food "+
	"matches the food that was asked for! "+CHILDNAME+" put a function inside these statements for either “CorrectFood” or “WrongFood”! Both of these functions would have the ninja selected inside them, so we know "+
	"whose label would change"+
	"<br>"+
	"<br>"+
	"The CorrectFood function changed the selected ninjas text to a thank you message, and added some points before running a ‘prepare’ function. The WrongFood function would display a message of "+CHILDNAME+"’s "+
	"choosing, displaying jut how hungry the Ninja was! It would then reduce our points of course! The final step was for "+CHILDNAME+" to create the prepare function that would give ourselves more food!"+
	"<br>"+
	"<br>"+
	"This prepare function would firstly select a random whole number between 1 & 0. So it would either be…. 1 or 0! Simple enough, if the number chosen was a 0, we would run the ‘blackReq’ and if the number was "+
	"1 we would run the ‘pinkReq’! Lastly a new timer would lose some points and have our Ninjas tell us to ‘Hurry up!’ if we took too long! Brilliant work "+CHILDNAME+" This is a massive game so keep up the great "+
	"work!"+
	"<br>"+
	"<br>"
	//"<img src='Images/Server.png' class='debriefimg' width='200'>"+
	//"<img src='Images/ServerC1.png' width='200'>"+
	//"<img src='Images/ServerC2.png' width='200'>"
	

	bubblesFull = "<p class = 'debrief'>Today we had a very fun project that allowed "+CHILDNAME+" to further enhance "+hisher+" foundational JavaScript skills! In this game called ‘Bubbles’, "+CHILDNAME+" thought back "+
	"to "+hisher+" first huge game in Yellow Belt, Rain Catcher! If "+CHILDNAME+" is a fan of popping bubble wrap then this project will suit "+himher+" perfectly! "+
	"<br>"+
	"<br>"+
	"In the images above you may notice that some code has been replaced with exclamation marks. This is a method we roll out through our belts and projects to help instigate "+CHILDNAME+" to start thinking and "+
	"coding more independently. We aided "+himher+" through the project brief and outlining the majority of the script but there was still many gaps to fill in with this one!"+
	"<br>"+
	"<br>"+
	"To begin, like any good scoring game "+CHILDNAME+" had to set our score start at 0! Then "+heshe+" created a variable that contained clones of our original bubble. Then, "+heshe+" set them to spawn into or scene "+
	"using a random timer, so that they all appeared at different intervals!"+
	"<br>"+
	"<br>"+
	"Then came our competitive twist! "+CHILDNAME+" then coded the bubbles to not only appear randomly, but at random speeds aswell! The objective of our game was to stop the bubbles rising to the top. Similar to "+
	"the hit mobile game Plants vs Zombies, but this time we were operating vertically instead of horizontally. The coded punishment for missing a bubble that crossed our above threshold was losing 10 whole "+
	"points! Noooo!"+
	"<br>"+
	"<br>"+
	"Excellent work with on this  project "+CHILDNAME+"!"+
	"<br>"+
	"<br>"
	//"<img src='Images/Bubbles.png' class='debriefimg' width='200'>"+
	//"<img src='Images/BubblesC1.png' width='200'>"+
	//"<img src='Images/BubblesC2.png' width='200'>"

	endlessRunFull = "<p class = 'debrief'>Today "+CHILDNAME+" practised "+hisher+" skills by recapping a lot of techniques used thus far in Orange Belt. To achieve this, "+CHILDNAME+" created a side-scrolling game "+
	"where the player controls a runner. We have to best oncoming rocks placed randomly in our path and our controlled character must jump to avoid hitting them! This base concept is used in some very popular "+
	"mobile games that you may have used yourself like; ‘Jetpack Joyride’ or ‘Super Mario Run’. "+
	"<br>"+
	"<br>"+
	HESHE+ "started by coding our rock obstacle to move towards us, remembering to use a negative value in order for it to move left and towards our player as we are working within a 2D space. We next used a "+
	"condition that sets the rock back to the other side of our screen if it touches the left hand side position. This gives the impression that our obstacles are neverending as when one disappears another will "+
	"come forward. "+CHILDNAME+" then ensured that when the rock does reset, it’s speed value randomises for some extra fun!"+
	"<br>"+
	"<br>"+
	"To create a risk system, "+CHILDNAME+" coded another if statement that would randomly check a 20% chance. If it is true, we make the "+
	"rocks BIGROCKS! These bigrocks require a special jump to overcome with extra height on it! This meant the player could just always use this jump in regular play and it would be too easy, so we added another obstacle! "+
	"the mighty Shuriken! This shuriken patrols above the rocks when there are small rocks present so the player is not tempted to just spamming the special jump over and over on the small rocks when we only should use it for the big ones!"+
	"<br>"+
	"<br>"+
	"To cap this off "+CHILDNAME+" had to simulate strong gravity so that our Ninja didn't float or fly away everytime a jump was attempted! We did this by stating If the ninja is above a certain height, we’ll use an "+
	"animation of the ninja bracing for a landing and set it's speedY to an ever increasing value! If the space key is pressed we add an instant amount of speed to allow us to jump, and if the 'S' key is pressed, we get a mega "+
	"boost of speed for our special jump!"+
	"<br>"+
	"<br>"+
	"Very nifty work today "+CHILDNAME+", we are slowly unravelling the secrets to the most popular app store games! 2 games to go!"+
	"<br>"+
	"<br>"
	//"<img src='Images/EndlessRun.png' class='debriefimg' width='200'>"+
	//"<img src='Images/EndlessRunC1.png' width='200'>"+
	//"<img src='Images/EndlessRunC2.png' width='200'>"

	endlessRunFirstHalf = "<p class = 'debrief'>Today was time to begin the second Prove Yourself of Orange Belt! Endless Run!"+
	"<br>"+
	"<br>"+
	"This would practise many of "+CHILDNAME+"'s skills by recapping a lot of techniques used thus far in Orange Belt. To achieve this, "+CHILDNAME+" created a side-scrolling game "+
	"where the player controls a runner. We have to best oncoming rocks placed randomly in our path and our controlled character must jump to avoid hitting them! This base concept is used in some very popular "+
	"mobile games that you may have used yourself like; ‘Jetpack Joyride’ or ‘Super Mario Run’! "+
	"<br>"+
	"<br>"+
	HESHE+ "started by coding our rock obstacle to move towards us, remembering to use a negative value in order for it to move left and towards our player as we are working within a 2D space. We next used a "+
	"condition that sets the rock back to the other side of our screen if it touches the left hand side position. This gives the impression that our obstacles are neverending as when one disappears another will "+
	"come forward. "+CHILDNAME+" then ensured that when the rock does reset, it’s speed value randomises for some extra fun! Its location would also randomise to constantly keep the player on their toes!"+
	"<br>"+
	"<br>"+
	"So far, this is a great base game that is working in its current form. We want to add more to this game which we will be doing next lesson to add more difficulty! Like a shuriken along the top of the screen and extra "+
	"sized rocks to really make the game a challenge! Great work so far "+CHILDNAME+"!"+
	"<br>"+
	"<br>"
	//"<img src='Images/EndlessRun.png' class='debriefimg' width='200'>"+
	//"<img src='Images/EndlessRunC1.png' width='200'>"+
	//"<img src='Images/EndlessRunC2.png' width='200'>"

	endlessRunSecondHalf = "<p class = 'debrief'>Today "+CHILDNAME+" finished off all of the second Prove Yourself of Orange Belt! Great work!"+
	"<br>"+
	"<br>"+
	"We ended last session with a working game, but not a lot of challenge to it! To create a risk system, "+CHILDNAME+" coded another if statement that would randomly check a 20% chance. If it is true, we make the "+
	"rocks BIGROCKS! These bigrocks require a special jump to overcome with extra height on it! This meant the player could just always use this jump in regular play and it would be too easy, so we added another obstacle! "+
	"the mighty Shuriken! This shuriken patrols above the rocks when there are small rocks present so the player is not tempted to just spamming the special jump over and over on the small rocks when we only should use it for the big ones!"+
	"<br>"+
	"<br>"+
	"To cap this off "+CHILDNAME+" had to simulate strong gravity so that our Ninja didn't float or fly away everytime a jump was attempted! We did this by stating If the ninja is above a certain height, we’ll use an "+
	"animation of the ninja bracing for a landing and set it's speedY to an ever increasing value! If the space key is pressed we add an instant amount of speed to allow us to jump, and if the 'S' key is pressed, we get a mega "+
	"boost of speed for our special jump!"+
	"<br>"+
	"<br>"+
	"Very nifty work today "+CHILDNAME+", we are slowly unravelling the secrets to the most popular app store games! 2 games to go!"+
	"<br>"+
	"<br>"
	//"<img src='Images/EndlessRun.png' class='debriefimg' width='200'>"+
	//"<img src='Images/EndlessRunC1.png' width='200'>"+
	//"<img src='Images/EndlessRunC2.png' width='200'>"

	codeBreaker1= "<p class = 'debrief'>"+CHILDNAME+" started "+hisher+" Orange Belt session on one of the largest projects so far! Code Breaker is a game where, firstly, a 4 number long code is generated. It is then "+
	"the players job to figure this code out by guessing! The game tells the player how close they were to the actual code by showing a White Dot if the correct number is used in the correct place, and a Black Dot "+
	"if the correct number is used, but in the wrong place."+
	"<br>"+
	"<br>"+
	"To start, "+CHILDNAME+" made a function run whenever a number is pressed on the keyboard (0-9). Then "+heshe+" moved onto creating all the variables we are going to use throughout the game and ran the "+
	"‘generateCode’ function. Building this function wasn’t too extreme, simply a for loop that ran 4 times. Each time it ran, we added a random number to the code. So we are left with 4 random numbers, and a "+
	"unique code every time!"+
	"<br>"+
	"<br>"+
	"Then "+CHILDNAME+" created the function that was being called everytime we pressed a key. The function would fill in the text box with the number that was pressed, and each time it ran it would add one to a "+
	"variable called ‘inputs’. This would be very useful to ensure that we have made 4 inputs before checking the code later! Otherwise we could accidentally check our guess without it having enough numbers in it "+
	"yet!"+
	"<br>"+
	"<br>"+
	CHILDNAME+ "has made a brilliant start to this project today, and we’re looking forward to them putting in the rest of the  functionality next lesson! Keep up the great work!"+
	"<br>"+
	"<br>"
	//"<img src='Images/CodeBreaker.png' class='debriefimg' width='200'>"+
	//"<img src='Images/CodeBreakerC1.png' width='200'>"+
	//"<img src='Images/CodeBreakerC2.png' width='200'>"
	
	codeBreaker2= "<p class = 'debrief'>Continuing from last lesson, "+CHILDNAME+" jumped straight back into "+hisher+" code breaking game! "+
	"<br>"+
	"<br>"+
	"The ‘guess’ function, that would run whenever we pressed the submit button, was made to clone the guess we had just made, and then move the guess we are using down to make more room for the second guess. "+
	"This clone though would clone everything, like the numbers we used to guess, the black dots and the white dots. So "+CHILDNAME+" made another function called ‘resetBox’ which would put all the text back to "+
	"‘?’s and empty all the coloured dots too."+
	"<br>"+
	"<br>"+
	"The last steps were then to check the match! Firstly a for loop that would run 4 times and check if the 1st number in the code equals the 1st number in the guess, then if the 2nd number in the code equals "+
	"the 2nd number in the guess… and so on and so on. Everytime this does, we add one to the totalWhite! If they don't match then we add the unmatched numbers to 2 new arrays (lists). Then we compare these "+
	"unmatched lists to see if there are any matches between those, and if so we add one to totalBlack! "+
	"<br>"+
	"<br>"+
	"The final step was to then fill in our dots with the amount of white and amount of black! And thats all done! Brilliant work today "+CHILDNAME+", this was a very technical challenge and you should be proud for "+
	"finishing it today! Keep it up Ninja!"+
	"<br>"+
	"<br>"
	//"<img src='Images/CodeBreaker.png' class='debriefimg' width='200'>"+
	//"<img src='Images/CodeBreakerC1.png' width='200'>"+
	//"<img src='Images/CodeBreakerC2.png' width='200'>"
	

	codeBreakerFull= "<p class = 'debrief'>"+CHILDNAME+" started "+hisher+" Orange Belt session on one of the largest projects so far! Code Breaker is a game where, firstly, a 4 number long code is generated. It "+
	"is then the players job to figure this code out by guessing! The game tells the player how close they were to the actual code by showing a White Dot if the correct number is used in the correct place, and "+
	"a Black Dot if the correct number is used, but in the wrong place."+
	"<br>"+
	"<br>"+
	"To start, "+CHILDNAME+" made a function run whenever a number is pressed on the keyboard (0-9). Then "+heshe+" moved onto creating all the variables we are going to use throughout the game and ran the "+
	"‘generateCode’ function. Building this function wasn’t too extreme, simply a for loop that ran 4 times. Each time it ran, we added a random number to the code. So we are left with 4 random numbers, and a "+
	"unique code every time!"+
	"<br>"+
	"<br>"+
	"Then "+CHILDNAME+" created the function that was being called everytime we pressed a key. The function would fill in the text box with the number that was pressed, and each time it ran it would add one to a "+
	"variable called ‘inputs’. This would be very useful to ensure that we have made 4 inputs before checking the code later! Otherwise we could accidentally check our guess without it having enough numbers in "+
	"it yet!"+
	"<br>"+
	"<br>"+
	"The ‘guess’ function, that would run whenever we pressed the submit button, was made to clone the guess we had just made, and then move the guess we are using down to make more room for the second guess. "+
	"This clone though would clone everything, like the numbers we used to guess, the black dots and the white dots. So "+CHILDNAME+" made another function called ‘resetBox’ which would put all the text back to "+
	"‘?’s and empty all the coloured dots too."+
	"<br>"+
	"<br>"+
	"The last steps were then to check the match! Firstly a for loop that would run 4 times and check if the 1st number in the code equals the 1st number in the guess, then if the 2nd number in the code equals "+
	"the 2nd number in the guess… and so on and so on. Everytime this does, we add one to the totalWhite! If they don't match then we add the unmatched numbers to 2 new arrays (lists). Then we compare these "+
	"unmatched lists to see if there are any matches between those, and if so we add one to totalBlack! "+
	"<br>"+
	"<br>"+
	"The final step was to then fill in our dots with the amount of white and amount of black! And thats all done! Brilliant work today "+CHILDNAME+", this was a very technical challenge and you should be proud for "+
	"finishing it today! Keep it up Ninja!"+
	"<br>"+
	"<br>"
	//"<img src='Images/CodeBreaker.png' class='debriefimg' width='200'>"+
	//"<img src='Images/CodeBreakerC1.png' width='200'>"+
	//"<img src='Images/CodeBreakerC2.png' width='200'>"

	RobloxHealthPickup = "<p class = 'debrief'>Throughout our basics of LUA, "+CHILDNAME+" has scripted individual parts to create playable scenes. With the previous method, when we duplicate the parts we would "+
	"then also have lots of duplicate scripts! This would make updating the scripts tedious as changes would have to be done script by script."+
	"<br>"+
	"<br>"+
	"In "+CHILDNAME+"‘s demo level, our aim was to create a number of health pickups, with only a single copy of the script which determines the health pickup behaviour. When the pickup is touched, it will "+
	"restore the player’s health, fade slightly and be disabled for a short period of time! "+
	"<br>"+
	"<br>"+
	"We can essentially transform any objects into a pickup, but for the sake of learning from the ground up "+CHILDNAME+" sculpted "+hisher+" own. We created a union of two rectangular parts with a green PointLight "+
	"inside, to reveal a healthy glow! "+
	"<br>"+
	"<br>"+
	"To begin with, this script needs to restore a player’s health. This pattern should be familiar to "+CHILDNAME+" as we coded the opposite to create deadly lava and killbricks in our obstacle courses. So "+
	"essentially if we were to pseudocode this aspect, instead of our humanoid taking damage upon a collision, we now want it to gain health!"+
	"<br>"+
	"<br>"+
	"In "+hisher+" script, we declared a constant called Max Health with the value 100. Then "+heshe+" created a function called onTouchHealthPickup with parameters which checks for a collision. In the next "+
	"function, it checks the character model to see if it is Humanoid and if this is true then it sets their Health property to Max Health. Great job today "+CHILDNAME+"!"+
	"<br>"+
	"<br>"
	//"<img src='Images/Blue1501.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue1502.png' width='200'>"+
	//"<img src='Images/Blue1503.png' width='200'>"

	RobloxHealthPickupVariations = "<p class = 'debrief'>"+CHILDNAME+" previously learnt how to create an item and script it to become an awesome collectible that provides health to our player character. "+
	"Today we are going to play around with some more scripting techniques to add more variation to the object's purpose and how to incorporate them into "+hisher+" level design!"+
	"<br>"+
	"<br>"+
	"The first new feature was to implement a cooldown for these collectables. At this point, the collision event will continue to fire when any part of the character — foot, hand, leg, etc. — touches the "+
	"health pickup, potentially boosting the player’s health by much more than 30. To fix this, "+CHILDNAME+" created a cooldown variable, representing how many seconds the health pack’s “cooldown” will last! "+
	"To script this in the conditional statement that checks for a Humanoid, "+heshe+" tested whether canHeal is true. If it is, we set it to false so the healing code won’t immediately execute again. After the "+
	"character is healed, wait for the duration of cooldown and then set canHeal back to true!"+
	"<br>"+
	"<br>"+
	CHILDNAME+ "had a lovely few finishing touches to round this unit off! The pickup shouldn’t heal characters who are already at full health, so we added another condition which checks if the player’s health "+
	"is below the max amount. "+HESHE+" then added a visual indication during the pack’s cooldown period that will inform players that it can’t currently be collected. To do this we can simply increase its "+
	"Transparency during the cooldown period and reset it afterwards! Finally, when we didn’t want a multi-use health pack we can just remove all of the cooldown logic and add a Destroy() command after the "+
	"healing code!"+
	"<br>"+
	"<br>"
	//"<img src='Images/Blue1601.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue1602.png' width='200'>"+
	//"<img src='Images/Blue1603.png' width='200'>"

	

	RobloxColourCrazyPt1 = "<p class = 'debrief'>In today’s session "+CHILDNAME+" made a game in which the player has to run to the colour displayed on a big screen, if they go to the wrong colour the floor will "+
	"disappear and they'll fall! "+CHILDNAME+" started off by opening up a baseplate and creating 10 new blocks and assembled 9 of them in a grid and one of them up in front as a display, next we changed each of "+
	"the blocks in the grid to a different colour, We made sure to anchor the parts as we didnt want them falling before the game started! "+
	"<br>"+
	"<br>"+
	"Next "+CHILDNAME+" added a model into the workspace and renamed it “Tiles” and dragged each of the tiles into it, next we made a scriptand started of by making our variables for a table (Roblox 2D Arrays) "+
	"and for our coloured tiles, next session we’ll have a go at making the for loop that will put each colour into our table, and then the other functions that we need to run it the game!"+
	"<br>"+
	"<br>"+
	"Great work today "+CHILDNAME+" this game’s quite a difficult one to make, but the end product is definitely going to be worth it. As we go through bluebelt the games will get harder, but these games are also "+
	"becoming more fun to play each time, I can't wait to see how big we can go with each of them!!  "+
	"<br>"+
	"<br>"
	//"<img src='Images/Blue1701.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue1702.png' width='200'>"
	
	RobloxColourCrazyPt2 = "<p class = 'debrief'>In today’s session we added the code to our template! In the beginning the code would wait for 8 seconds before doing anything so we added a wait timer. Once this "+
	"timer had ran it's course we then added a for loop to check every tile. "+CHILDNAME+" made this for loop run for as long as we had tiles using ‘#tiles’ which converts the number of tiles inside the ‘tiles’ "+
	"group into a number, very useful! Each time this loop ran, it would add the colour of the corresponding tile into a table."+
	"<br>"+
	"<br>"+
	"Once this loop was finished, we ran a function to pick a colour! This colour would be picked by selecting a random entry in our table, and then we used this to light up a big brick in the top of the game! "+
	"This brick served as a warning as to what colour was selected and "+CHILDNAME+" would then need to run over to that brick before all the other colours disappeared! "+
	"<br>"+
	"<br>"+
	"After another wait timer, we ran the final ‘runGame’ function! This function would first run a for loop for as many tiles as there are in the game (again using the ‘#tiles’) and then an if statement, "+
	"stating if this tiles colour matches the big brick up at the top of the game! If they did, nothing would happen. If they did not match, it's transparency would go to zero (see through) and canCollide was "+
	"turned to false! This way we would fall through it if we didn’t make it to the selected brick in time!"+
	"<br>"+
	"<br>"+
	"Great job "+CHILDNAME+"! Keep up the great work as you move through Blue Belt finishing another project today. "+CHILDNAME+" takes to all instructions really well and is always adding in extra bits to the "+
	"games "+heshe+" is tasked with making. "+HESHE+" is very creative and it's great fun helping create and playing the games "+heshe+" makes! Brilliant work"+
	"<br>"+
	"<br>"
	//"<img src='Images/Blue1801.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue1802.png' width='200'>"+
	//"<img src='Images/Blue1803.png' width='200'>"

	RobloxColourCrazyFULL = "<p class = 'debrief'>In today’s session "+CHILDNAME+" made a game in which the player has to run to the colour displayed on a big screen, if they go to the wrong colour the floor will "+
	"disappear and they'll fall! "+CHILDNAME+" started off by opening up a baseplate and creating 10 new blocks and assembled 9 of them in a grid and one of them up in front as a display, next we changed each of "+
	"the blocks in the grid to a different colour, We made sure to anchor the parts as we didnt want them falling before the game started! "+
	"<br>"+
	"<br>"+
	"Next "+CHILDNAME+" added a model into the workspace and renamed it “Tiles” and dragged each of the tiles into it, next we made a scriptand started of by making our variables for a table (Roblox 2D Arrays) "+
	"and for our coloured tiles! "+CHILDNAME+" then added the code to this template! In the beginning the code would wait for 8 seconds before doing anything so we added a wait timer. Once this "+
	"timer had ran it's course we then added a for loop to check every tile. "+CHILDNAME+" made this for loop run for as long as we had tiles using ‘#tiles’ which converts the number of tiles inside the ‘tiles’ "+
	"group into a number, very useful! Each time this loop ran, it would add the colour of the corresponding tile into a table."+
	"<br>"+
	"<br>"+
	"Once this loop was finished, we ran a function to pick a colour! This colour would be picked by selecting a random entry in our table, and then we used this to light up a big brick in the top of the game! "+
	"This brick served as a warning as to what colour was selected and "+CHILDNAME+" would then need to run over to that brick before all the other colours disappeared! "+
	"<br>"+
	"<br>"+
	"After another wait timer, we ran the final ‘runGame’ function! This function would first run a for loop for as many tiles as there are in the game (again using the ‘#tiles’) and then an if statement, "+
	"stating if this tiles colour matches the big brick up at the top of the game! If they did, nothing would happen. If they did not match, it's transparency would go to zero (see through) and canCollide was "+
	"turned to false! This way we would fall through it if we didn’t make it to the selected brick in time!"+
	"<br>"+
	"<br>"+
	"Great job "+CHILDNAME+"! Keep up the great work as you move through Blue Belt finishing another project today. "+CHILDNAME+" takes to all instructions really well and is always adding in extra bits to the "+
	"games "+heshe+" is tasked with making. "+HESHE+" is very creative and it's great fun helping create and playing the games "+heshe+" makes! Brilliant work!"+
	"<br>"+
	"<br>"
	//"<img src='Images/Blue1801.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue1802.png' width='200'>"+
	//"<img src='Images/Blue1803.png' width='200'>"

	RobloxFallingColoursFULL = "<p class = 'debrief'>To evolve "+CHILDNAME+"’s skillset from the last session, "+heshe+" was going to be making a commonly played game often called falling blocks. The mechanics of "+
	"this game revolve around floor pieces falling away when the stand player stands on them, we need to keep moving and survive the longest in a battle royale to win the crown! This is similar to a mini-game "+
	"within the virally popular and award winning; “Fall Guys”!"+
	"<br>"+
	"<br>"+
	CHILDNAME+ "began by creating an original spawn location and a simple block. Later this is where all replicants will generate from, not too dissimilar to our cloning techniques in JavaScript often used in "+
	"Orange Belt. "+
	"<br>"+
	"<br>"+
	"Next "+CHILDNAME+" set up the script to contain "+hisher+" variables to define our parts and include the functions "+heshe+" will be using. Then came the fun part! "+CHILDNAME+" coded  a while loop that decreases the "+
	"block/platforms transparency gradually until it's completely invisible! Then once it’s completely transparent we turn CanCollide to false, so we can fall right through! Really gives insight into the name "+
	"falling colours!"+
	"<br>"+
	"<br>"+
	"For this script section we finally had to ensure that we run a function so that our previous code only runs when the part is touched. As otherwise our platforms would be fading randomly with no trigger. "+
	"Next up for even more fun, "+CHILDNAME+" started cloning  our original platform in a 3D grid formation. A created local function spawned these platforms in a random order and anchored them so they could not "+
	"fall off the face of the earth!"+
	"<br>"+
	"<br>"+
	"Finally, "+CHILDNAME+" ran a for loop that runs our above script as many times as we wanted. For example we started with a 4 x 4 grid formation before expanding. "+CHILDNAME+" then got the opportunity to use all "+
	"of "+hisher+" game designing ability to make something colourful and imaginative on top of this mechanical framework. Brilliant work today making another super fun Roblox game!"+
	"<br>"+
	"<br>"
	//"<img src='Images/Blue1901.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue1902.png' width='200'>"+
	//"<img src='Images/Blue1903.png' width='200'>"

	RobloxFallingColoursPt1 = "<p class = 'debrief'>To evolve "+CHILDNAME+"’s skillset from the last session, "+heshe+" was going to be making a commonly played game often called falling blocks. The mechanics of "+
	"this game revolve around floor pieces falling away when the stand player stands on them, we need to keep moving and survive the longest in a battle royale to win the crown! This is similar to a mini-game "+
	"within the virally popular and award winning; “Fall Guys”!"+
	"<br>"+
	"<br>"+
	CHILDNAME+ "began by creating an original spawn location and a simple block. Later this is where all replicants will generate from, not too dissimilar to our cloning techniques in JavaScript often used in "+
	"Orange Belt. "+
	"<br>"+
	"<br>"+
	"Next we set up our script to contain variables that define our parts and to include our functions "+heshe+" will be using. Next here comes the fun part! "+CHILDNAME+" coded  a while loop that decreases the "+
	"block/platforms transparency gradually until it's completely invisible! Then once it’s completely transparent we turn CanCollide to false, so we can fall right through! Really gives insight into the name "+
	"falling colours!"+
	"<br>"+
	"<br>"+
	"For this script section we finally had to ensure that we run a function so that our previous code only runs when the part is touched. As otherwise our platforms would be fading randomly with no trigger. "+
	"Next up for even more fun, "+CHILDNAME+" started cloning  our original platform in a 3D grid formation. A created local function spawned these platforms in a random order and anchored them so they could not "+
	"fall off the face of the earth!"+
	"<br>"+
	"<br>"+
	"Finally, "+CHILDNAME+" ran a for loop that runs our above script as many times as we wanted. For example we started with a 4 x 4 grid formation before expanding. "+CHILDNAME+" then got the opportunity to use all "+
	"of "+hisher+" game designing ability to make something colourful and imaginative on top of this mechanical framework. "+
	"<br>"+
	"<br>"
	//"<img src='Images/Blue1901.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue1902.png' width='200'>"+
	//"<img src='Images/Blue1903.png' width='200'>"

	RobloxFallingColoursPt2="<p class = 'debrief'>Continuing with the Falling colours game from previously, "+CHILDNAME+" got to adding in much more functionality! Adding in obstacle courses around the map that "+
	"fall away as we take too long on each step. This obstacle course would be much alike "+CHILDNAME+"’s previous one, but with code added into each brick it becomes much more exiting! Revisiting concepts "+
	"previously added with a new spin on them is a great way of reinforcing the concepts learned as "+CHILDNAME+" becomes more and more proficient with the Roblox Create studio."+
	"<br>"+
	"<br>"+
	"When we land on our blocks they, over time, slowly disappear before becoming transparent and allow the player to fall through them. Although the issue here is that if we fall off and respawn, the whole "+
	"obby has disappeared! So today "+CHILDNAME+" added a wait command for however long they wanted after we touch the block, and then run a ‘returnBlock’ function. We made this function to set canCollide to true "+
	"(cant fall through it) and transparency to 0 (cant see through it)."+
	"<br>"+
	"<br>"+
	CHILDNAME+ "tested this game out a few times with myself and some other Ninjas before realising that its very difficult to jump and jump and jump and jump without any breaks! The obby gets tough very quickly "+
	"as there’s no time to think about out next step! So using this information "+CHILDNAME+" added a few mini ‘checkpoints’. These checkpoints wont move the spawn point of ourselves, but they are blocks that wont "+
	"disappear after we touch them. This allows the player to take stock of where they are and what their next step will be! "+
	"<br>"+
	"<br>"+
	"This testing is something we do differently with Blue Belt, as "+CHILDNAME+" is free to play "+hisher+" game and see what parts work, and what parts dont. They can change them at will and it makes for a brilliant "+
	"end product!! Keep up the great work!"+
	"<br>"+
	"<br>"
	//"<img src='Images/Blue2001.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue2002.png' width='200'>"

	AsteroidDodgeFirstHalf = "<p class = 'debrief'>Today "+CHILDNAME+" got to fly into space with "+hisher+" new game Asteroid Doge, in this game "+heshe+" had to steer a rocket through an asteroid field to try and "+
	"make it to the other side. To start off "+heshe+" checked that "+hisher+" ship was in the starting position, to do this we could simpy run a function called reset ship, we then added a 1 second timer to spawn "+
	"the circle (asteroids). "+CHILDNAME+" then set up the rocket so that when the space was pressed it would move slightly further upwards, and if its y position became less than 0 (if it reached the top of the "+
	"screen) then we would run our function reset ship with a parameter of 100. "+
	"<br>"+
	"<br>"+
	"This parameter is simply an extra variable that we can then us in our function, in this game we’ll add our parameter to the score so when the player reaches the top, 100 is added to their score within this "+
	"function we also set its x and y positions to 400 and 575 and its rotation to 180, meaning its facing up ready to go again."+
	"<br>"+
	"<br>"+
	"Next session we’ll have a look at coding the asteroids and obstacles we face in the game!"+
	"<br>"+
	"<br>"
	//"<img src='Images/AsteroidDodge1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/AsteroidDodge2.png' width='200'>"+
	//"<img src='Images/AsteroidDodgeC.png' width='200'>"
	
	AsteroidDodgeSecondHalf = "<p class = 'debrief'>Last session "+CHILDNAME+" started off looking at the code to reset the function if the player reaches the top, however we didn't have any obstacles yet!"+
	"<br>"+
	"<br>"+
	"The next thing we needed to do is add a move X function in the asteroids code, this means the asteroids will be moving sideways throughout the game. We can then use an if statement to say if the rocket "+
	"touches the asteroid we’ll run the reset code again, but this time with a parameter of -10 to take 10 points away from our score. "+
	"<br>"+
	"<br>"+
	"Our next piece of code is another function that we’ll use to spawn the circle (asteroids), when spawning the asteroids we first need t set the colour, we used white for now but we can easily change it to "+
	"make it a more colourful game, we then want to set its Y coordinate for where it spawns in and its diameter which is how large the circle is. "+
	"<br>"+
	"<br>"+
	"Now we’ll use an if statement, still within our function, to choose a random number between 0 and 100, and if it is below 50 it'll start on one side of the screen and if it is above it’ll be on the other, "+
	"this will try to get a roughly even spread between the 2 sides, finally we set the asteroids to remove if they get to the other side of the screen. Brilliant work "+CHILDNAME+"!"+
	"<br>"+
	"<br>"
	//"<img src='Images/AsteroidDodge1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/AsteroidDodge2.png' width='200'>"+
	//"<img src='Images/AsteroidDodgeC.png' width='200'>"
	

	AsteroidDodgeFULL = "<p class = 'debrief'>Today "+CHILDNAME+" got to fly into space with "+hisher+" new game Asteroid Dodge, in this game "+heshe+" had to steer a rocket through an asteroid field to try and "+
	"make it to the other side. To start off "+heshe+" checked that "+hisher+" ship was in the starting position, to do this we could simply run a function called reset ship, we then added a 1 second timer to spawn "+
	"the circle (asteroids). "+CHILDNAME+" then set up the rocket so that when the space was pressed it would move slightly further upwards, and if its y position became less than 0 (if it reached the top of the "+
	"screen) then we would run our function reset ship with a parameter of 100. "+
	"<br>"+
	"<br>"+
	"This parameter is simply an extra variable that we can then us in our function, in this game we’ll add our parameter to the score so when the player reaches the top, 100 is added to their score within this "+
	"function we also set its x and y positions to 400 and 575 and its rotation to 180, meaning its facing up ready to go again."+
	"<br>"+
	"<br>"+
	"The next thing we needed to do is add a move X function in the asteroids code, this means the asteroids will be moving sideways throughout the game. We can then use an if statement to say if the rocket "+
	"touches the asteroid we’ll run the reset code again, but this time with a parameter of -10 to take 10 points away from our score. "+
	"<br>"+
	"<br>"+
	"Our next piece of code is another function that we’ll use to spawn the circle (asteroids), when spawning the asteroids we first need t set the colour, we used white for now but we can easily change it to "+
	"make it a more colourful game, we then want to set its Y coordinate for where it spawns in and its diameter which is how large the circle is. "+
	"<br>"+
	"<br>"+
	"Now we’ll use an if statement, still within our function, to choose a random number between 0 and 100, and if it is below 50 it'll start on one side of the screen and if it is above it’ll be on the other, "+
	"this will try to get a roughly even spread between the 2 sides, finally we set the asteroids to remove if they get to the other side of the screen.  Brilliant work "+CHILDNAME+"!"+
	"<br>"+
	"<br>"
	//"<img src='Images/AsteroidDodge1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/AsteroidDodge2.png' width='200'>"+
	//"<img src='Images/AsteroidDodgeC.png' width='200'>"

	GoldenTicket = "<p class = 'debrief'>What a pleasure to welcome "+CHILDNAME+" into our Dojo today! We hope "+heshe+" has left our Dojo with a sense of wonder about the coding world and a well worked brain! "+
	CHILDNAME+" was very polite and respectful of the Dojo and had a blast with me as I got to teach "+himher+" all throughout "+hisher+" session!"+
	"<br>"+
	"<br>"+
	"Code Combat made up the beginning  of our session today and was a brilliant introduction into javaScript! "+CHILDNAME+" was tasked with navigating through mazes filled with ogres, dragons and lava! Our "+
	"character had to be controlled by whatever code commands "+CHILDNAME+" entered in javaScript! We got to use loops that would infinitely repeat code and allow us to defeat the mean mages that try to trap us "+
	"inside infinitely long mazes! This method of introducing concepts and then applying them in fun and interactive games is what we are all about here at Code Ninjas, teaching our students core coding concepts "+
	"that give them a head start in future life and careers! Applying these concepts in as fun a way as possible is the best way for "+CHILDNAME+" to learn, and we hope "+heshe+" was having "+
	"a blast all throughout the session!"+
	"<br>"+
	"<br>"+
	HESHE+" took to the session brilliantly and we had completed all the learning objectives of Code Combat in a super focused 30 minutes! The next section of "+CHILDNAME+"'s session was much more creative and "+
	"exciting! Modding Minecraft! Creating our own mods allows our ninjas to show off their creative side in pixel art. These digital drawings that "+CHILDNAME+" made could then be turned into "+hisher+" own custom "+
	"block! Creating and applying mods into minecraft is a brilliant way to show how simple changes on the back end of video games can allow for them to look and feel so much different on the front end! Building houses "+
	"made out of rainbow blocks was loads of fun, but then making our own custom forest biome of rainbow trees really starts to show "+CHILDNAME+" how much they can change about all games!"+
	"<br>"+
	"<br>"+
	"It was lovely to have "+CHILDNAME+" in the Dojo today, and I was super impressed with how well "+heshe+" got on with all aspects of the session! I hope that "+CHILDNAME+" enjoyed every second of "+hisher+" time in the dojo "+
	"with me, Sensei __________ alongside Ninja _________! I loved how well "+heshe+" did with making "+hisher+" own ___________________! I hope we get to welcome "+himher+" back into the Dojo soon! Brilliant work today!"+
	"</p>"
	//"<img src='Images/CodeCombatT1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Biome1.png' width='200'>"+
	//"<img src='Images/Biome2.png' width='200'>"

	MinecraftCampFluid= "<p class = 'debrief'>As usual it was lovely to welcome "+CHILDNAME+" into the Dojo! This lesson we would look at 'fluids!'"+
	"<br>"+
	"<br>"+
	"There are many times of fluids in minecraft, and they are the source of many Minecraft players worst fear... LAVA! They each have unique properties, with water being a very free flowing liquid that moves quickly "+
	"to things like lava which slowly but surely travels downwards, melting anything on its path! We have been able to modify the liquids colours in previous sessions on our Biomes, when we were able to make something "+
	"like a cheese biome filled with yellow water and yellow blocks, but "+CHILDNAME+" has not yet gone into detail with these properties."+
	"<br>"+
	"<br>"+
	"Changing the colour of water was useful, but we couldnt develop our own texture for it. For example, lava is not just orange water, it has black bits in it and yellow firey parts around it to let you know how dangerous it "+
	"is! So, just like making blocks, "+CHILDNAME+" set to planning with us what kind of liquid "+heshe+" wanted, then started making! Once "+heshe+" made the texture, "+heshe+" then had to make another for the look of the "+
	"liquid as it flowed about. With these 2 textures "+CHILDNAME+" then got to import the base properties of lava, and change them all around! "+HESHE+" even added some code here so that a potion would be added to the "+
	"player when we came into contact with this horror goo! Brilliant work here "+CHILDNAME+"! Super creative work on your liquid, dont think I would want to take a swim in it though!"+
	"<br>"+
	"<br>"+
	"Great job today "+CHILDNAME+"! Keep it up!"+
	"<br>"
	//"<img src='Images/MinecraftFluids.png' class='debriefimg' width='200'>"+
	//"<img src='Images/MinecraftFluids2.png' width='200'>"

	MinecraftCampStrucures="<p class = 'debrief'>This session we delved deeper into some Minecraft coding with "+CHILDNAME+" as we created and spawned structures all around our world!"+
	"<br>"+
	"<br>"+
	"Minecraft Structures are dotted all around the world and are assortments of blocks making up witch houses, half completed portals to other worlds and many more! "+CHILDNAME+" got to look into how to create these "+
	"structures and then how to spawn them around the world at set coordinates. Firstly "+CHILDNAME+" loaded into a superflat minecraft world, this is a world which is alike an empty canvas which "+heshe+" can build onto. "+
	"The minecraft structures can be no bigger than 32x32 blocks, which is a lot of space to work with! Once "+CHILDNAME+" had finished creating "+hisher+" very own _________ it was time to save it!"+
	"<br>"+
	"<br>"+
	"Here we used a Minecraft command code to add a 'command block' into our inventory. This command block had to be placed in the corner of our structure which had the lowest x & y coordinates. Minecraft uses these "+
	"coordinates a lot and they can be found by pressing 'F3' on the keyboard, "+CHILDNAME+" did very well with understanding how coordinates worked as i explained it all on the whiteboard with him, with a few other "+
	"Ninjas getting invloved to help too! This understanding of coordinates then helped as we told the command block where our structure was. "+CHILDNAME+"'s structure fit into a square that was 15x15 blocks, so we set the "+
	"size to 15 x and 15 y, and it was made!"+
	"<br>"+
	"<br>"+
	"Once "+CHILDNAME+" saved "+hisher+" structure, it was back into our coding engine to place it all around the world! "+CHILDNAME+" added in new properties to this structure, the most obvious being the spawn probability! "+
	"The others being things like what effects would surround our structure to whether it would spawn in the floor or on top of the ground! Great work "+CHILDNAME+"!"
	//"<img src='Images/MinecraftStructure1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/MinecraftStructure2.png' width='200'>"

	MinecraftCampDimensions="<p class = 'debrief'>Starting the lesson today, "+CHILDNAME+" got to finally look into making "+hisher+" own Dimension!"+
	"<br>"+
	"<br>"+
	"Dimensions are just as mystical as they sound! Dragons lay in the End, buring blazes roam the Nether in Minecraft's alternate universes! These are accessed by portals that have to be created in very specific ways. "+
	"The end portal is found in a maze like stronghold, and the Nether portal must be created with a 4x2 portal of Obsidian! These portals have to be lit with "+hisher+" own specific item. To begin, "+CHILDNAME+" created "+
	"the portal material and the portal lighting item. "+CHILDNAME+" is becoming very adept now at creating and adding "+hisher+" own textures and importing them in for "+hisher+" creations! Once this was finished "+
	CHILDNAME+" decided which block would make up "+hisher+" portal structure! Of course "+CHILDNAME+" used the block "+heshe+" created before!"+
	"<br>"+
	"<br>"+
	"Once the portal setup was finished, it was time to create the dimension that "+CHILDNAME+" wanted! To start with "+heshe+" had to use a base of either the normal world, the Nether or the end. This base would be where most of the "+
	"properties of the world would be imported, and "+CHILDNAME+" then started changing them! Firstly, "+heshe+" chose which biome would be inside this dimension, like if we wanted a desert wasteland, dense jungle or simply a "+
	"plains biome with cows grazing on the grass! Of course, given this choice "+CHILDNAME+" decided to make "+hisher+" dimension ______________!! Who could blame "+himher+"! This dimension had many different properties "+
	"that "+CHILDNAME+" added, and was great fun to access!"+
	"<br>"+
	"<br>"+
	HESHE+" accessed this dimension by building the portal, Then turning it on with the lighting object "+heshe+" created! Brilliant work today "+CHILDNAME+"!"

	MoonLanderFull = "<p class = 'debrief'>In our “Moon Lander” Project,  "+CHILDNAME+" combined JavaScript with some physics to help us land a spaceship safely on the moon!"+
	"<br>"+
	"<br>"+
	"Like any fun project, "+heshe+" first had to put together a very creative sci-fi scene for our game to operate in! Then we started the code! We scripted a ‘placeFloor’ function which makes a global "+
	"variable with a random number. Then we use it for our floor’s new random position! We then made the floor white like the moon, or any other cosmic combination of colours! "+
	"<br>"+
	"<br>"+
	"Next "+CHILDNAME+" created a new function which contained a fuel variable and set our rocket to the top of the scene! We needed fuel In order to move our rocket! "+HESHE+" next had a conditional if "+
	"statement that states; when we press the spaceBar AND we have fuel remaining, the falling speed is reduced, so we can blast off! As we slowed down fuel was reduced and a large “UH-OH!” message was "+
	"displayed to warn us of the trouble and with gravity we increased our falling speed if the spaceBar was not being pressed! "+
	"<br>"+
	"<br>"+
	"The final obstacle that "+heshe+" encountered was that the spaceship needed to land gently or it will crash! To make it land gently, we had to ensure the velocity of the spaceship (in the y axis) should "+
	"be less than 45. If we could land safely, we would succeed with a lovely “SAFE LANDING” popup from mission control, YAY! But, what happens if you do not land the spaceship safely? Well, the spaceship will "+
	"be destroyed and a “MASSIVE CRASH” alert would appear!!!"+
	"<br>"+
	"<br>"+
	"Good work today astronaut! You’re progressing wonderfully through these Prove Yourselves and are now a valid holder of a spaceship licence!"+
	"<br>"
	//"<img src='Images/MoonLander1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/MoonLander2.png' width='200'>"
	
	MoonLanderFirstHalf = "<p class = 'debrief'>In our “Moon Lander” Project,  "+CHILDNAME+" combined JavaScript with some physics to help us land a spaceship safely on the moon!"+
	"<br>"+
	"<br>"+
	"Like any fun project, "+heshe+" first had to put together a very creative sci-fi scene for our game to operate in! Then we started the code! We scripted a ‘placeFloor’ function which makes a global "+
	"variable with a random number. Then we use it for our floor’s new random position! We then made the floor white like the moon, or any other cosmic combination of colours! "+
	"<br>"+
	"<br>"+
	"Next "+CHILDNAME+" created a new function which contained a fuel variable and set our rocket to the top of the scene! We needed fuel In order to move our rocket! "+HESHE+" next had a conditional if "+
	"statement that states; when we press the spaceBar AND we have fuel remaining, the falling speed is reduced, so we can blast off! As we slowed down fuel was reduced and a large “UH-OH!” message was "+
	"displayed to warn us of the trouble and with gravity we increased our falling speed if the spaceBar was not being pressed! "+
	"<br>"+
	"<br>"+
	"As we have now coded the fun exploding rocket part, next lesson it will be time to code the more boring part, the bit where we safely land! Keep up the great work "+CHILDNAME+"!"+
	"<br>"
	//"<img src='Images/MoonLander1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/MoonLander2.png' width='200'>"

	MoonLanderSecondHalf = "<p class = 'debrief'>In the second part of the “Moon Lander” Project,  "+CHILDNAME+" got their Moon Licence!"+
	"<br>"+
	"<br>"+
	"The final obstacle that any aspiring moon tourist would encounter was that the spaceship needed to land as gently as it could! To check it had landed gently, we had to ensure the velocity of the spaceship (in the y axis) should "+
	"be less than 45. If we had this, then we landed safely! "+CHILDNAME+" coded a lovely “SAFE LANDING” popup from mission control, Wohoo! But, what happens if you do not land the spaceship safely? Well, the spaceship will "+
	"be destroyed and a “MASSIVE CRASH” alert would appear!!! This was a simple else statement checking the opposite of our speed being below 45."+
	"<br>"+
	"<br>"+
	"This is a great all around arcade game that utilises randomisation to make a new experience every time it is played! When the player resets the rocket, they are given a new random start speed, a random start fuel & a random floor position! "+
	"This is the great positive we get when utilising lots of functions in our code, eliminating the need to manually adjust every number to make a new experience! "+
	"<br>"+
	"<br>"+
	"Good work today astronaut! You’re progressing wonderfully through these Prove Yourselves and are now a valid holder of a spaceship licence!"+
	"<br>"
	//"<img src='Images/MoonLander1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/MoonLander2.png' width='200'>"

	 
	 robloxMakeWeapon = "<p class = 'debrief'>This session has "+CHILDNAME+" utilise Tools into "+hisher+" 3D project. Tools are a simple way to manage items that the player can hold in their hand and use in-game. "+
	 "They can range from weapons such as swords and laser guns to food items. Today we investigated how to create a tool in the shape of a laser blaster!! This marks a change from our previous weapon implementation "+
	 "as now "+heshe+" will be creating and coding from the ground up!"+
	 "<br>"+
	 "<br>"+
	 "To kick things off, "+CHILDNAME+" inserted a Tool into the workspace and named it Blaster. We also need the  tool to include a part named Handle for the player to hold. As if we don't include a part named Handle "+
	 "in the tool, it will drop to the ground when a player tries to equip it! Which is definitely not good for a weapon!"+
	"<br>"+
	"<br>"+
	HESHE+ "made it so that when a player joins the game or respawn ms within it, our Tool is stored with the workplace’s StarterPack which essentially will place it in a player’s ‘Backpack’ so it will be accessible "+
	"in their weapon inventory. After the first test run, currently the player is holding the center of the blaster instead of the grip! To alter this we needed to set the relevant GripPos of the tool and now it looks "+
	"flush with the hand of our 3D character model. "+
	"<br>"+
	"<br>"+
	"Our final touch was for "+CHILDNAME+" to include some basic user interface design. "+HESHE+" made it so that the Tool name will be displayed on the hotbar icon, It’s good practice to change the icon to be an image "+
	"of the tool so that the player can quickly see what they have in their inventory. We also added a ‘tooltip’, this is a small text description that appears when the mouse hovers over a tool in the hotbar, a neat bit "+
	"of design that improves player experience!"+
	"<br>"+
	"<br>"+
	"Next time we will be discovering and coding something called ‘Raycasting’, this is how we will make use of these new Tool’s after their creation! Awesome progress superstar!"+
	"<br>"
	//"<img src='Images/Blue2101.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue2102.png' width='200'>"+
	//"<img src='Images/Blue2103.png' width='200'>"
	

	robloxCodeWeaponFirstHalf = "<p class = 'debrief'>Today "+CHILDNAME+" got right back into "+hisher+" roblox studio to begin coding the weapon "+heshe+" had made earlier! We were going to "+
	"be using a new concept today, ‘RayCasting’. Raycasting is how we can create lines in our games. These lines give us data on what they hit along the way. To create a raycasts we put 2 things "+
	"inside the raycast function, the first is the origin of the ray and the second is the direction it travels in."+
	"<br>"+
	"<br>"+
	"We can also add a third thing into the raycast function, and whatever is this third thing in the function will be ignored by the raycast. In this case we want a raycast that will come out "+
	"of our weapon and direct to the cursor. The first thing we made today is the function that gets the mouse position whenever we run a function "+CHILDNAME+" called ‘getMouse’! "+HESHE+" also "+
	"coded the beginnings of the function that would fire away our raycast."+
	"<br>"+
	"<br>"+
	"Great work today "+CHILDNAME+", this is one of the hardest lua projects so far!! Using raycasting is an incredibly useful but difficult skill to learn, we’re using them in the place of "+
	"projectiles at the moment, but they can also be used for npcs line of sight and so much more. Brilliant job today and I look forward to seeing you in again next session!"+
	"<br>"
	//"<img src='Images/Blue2201.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue2202.png' width='200'>"+
	//"<img src='Images/Blue2203.png' width='200'>"

	
	robloxCodeWeaponsecondhalf = "<p class = 'debrief'>"+CHILDNAME+" carried on brilliantly coding "+hisher+" gun to finally get working! From last lesson we still had to tell the raycast what to do when it hit something! "+
	"Without this the raycast would just travel through all objects and fall through the scene as it travels to the end of the world! Once it does that it would throw out a debug message to prevent the line becoming "+
	"infinitely long bouncing around the entire scene."+
	"<br>"+
	"<br>"+
	"To make the raycast stop is very simple, just an if statement with the variable we stored the raycast in as the only condition, so basically it's ‘ if (raycast) then ‘ and now we can tell the raycast what to do. "+
	"We want to gather some data about the object we hit first of all, so we check if the part hit is inside a model. If it is, we find out what model it is! If the model is a ‘humanoid’ then we reduce the health of "+
	"the humanoid and send out a message. Now our raycast fires out of the weapon and stops when it hits an object!"+
	"<br>"+
	"<br>"+
	"Once "+CHILDNAME+"  had done some debugging and changed around some capital letters to make sure everything was working properly, it was onto testing it! The gun couldn't be used to hit ourselves as last lesson we "+
	"put our humanoid in the raycast parameter so the raycast would always ignore our model. We needed to get another character in the game! So we made our game into a server with a second bot character to shoot at! "+
	"Brilliant work today "+CHILDNAME+" ! Keep it up and looking forward to seeing you again soon!"+
	"<br>"
	//"<img src='Images/Blue2202.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue2203.png' width='200'>"+
	//"<img src='Images/Blue2204.png' width='200'>"

	robloxMovingNPC = "<p class = 'debrief'>This session kicks off our Artificial Intelligence unit in Blue Belt and we begin by coding our own NPC! If you’re not quite up to date with all the gaming jargon an NPCs "+
	"is a non-player character. These can be enemies, allies, characters we can interact with and so much more! "+
	"<br>"+
	"<br>"+
	"Sometimes an NPC can stand in one place, like a shopkeeper working at a small in-game shop. In other cases, an NPC will look much less robotic (and more human!) if it moves around, even if it’s basic movement "+
	"between two or more points.Today we were going to practise building a model for this character and how to move this NPC between several points!"+
	"<br>"+
	"<br>"+
	CHILDNAME+ "started by rigging together a new model that will act as a Zombie character! Zombies aren’t very smart, so we can make it walk in a straight line without worrying if anything is in the way! "+CHILDNAME+" "+
	"then set up our area by inserting several parts on the ground in different locations, these will become the destination points for our character! "+
	"<br>"+
	"<br>"+
	"The bulk of our movement script consisted of a while loop which communicated to our ‘Humanoid’ functionality of our Zombie model to use the move to function, in order to go towards our destination parts. With this "+
	"loop "+heshe+" can continue to add in additional destinations and wait commands between them to give the appearance that our Zombie is on patrol! "+
	"<br>"+
	"<br>"+
	CHILDNAME+" has now created and coded "+hisher+" very own NPC that walks to predetermined locations! Next session we are going to expand upon this to make our A.I even smarter!"+
	"<br>"
	//"<img src='Images/Blue2301.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue2302.png' width='200'>"+
	//"<img src='Images/Blue2303.png' width='200'>"
	 
	robloxPathfinding = "<p class = 'debrief'>As "+CHILDNAME+" discovered last time, straight-line movement between points is simple but it’s also limiting, if any obstacle exists on the path (wall, river, cliff, etc.), "+
	"the NPC might never reach its destination! Zombies don’t have big brains, but our NPC should act “smarter” and try to find the best path to a destination! "+
	"<br>"+
	"<br>"+
	"Today "+CHILDNAME+"  first added in our NPC, then put a script inside the model. To begin on our “Path script” we first want to locate a pathfinding service, we can use this to find a path between two points, these "+
	"paths make sure that characters can move without bumping into obstacles! Next "+CHILDNAME+"  added in our waypoint, this could be anything from a square to a spaceship, we can then use ComputeAsync which generates "+
	"a path between 2 points, generating waypoints along the way. "+
	"<br>"+
	"<br>"+
	CHILDNAME+" could then call a function “getWaypoints()” to find each way point’s coordinates. In the game "+heshe+" used a for-loop so that we’d find the nearest waypoint and move our NPC towards it, it would then "+
	"repeat by finding the next waypoint and moving towards  that one then, if the nearest waypoint needed us to jump then we’d make the NPC to get around it, simple!!!"+
	"<br>"+
	"<br>"+
	"Great work today "+CHILDNAME+", we’re definitely getting to more complicated areas of coding now, but you’re doing brilliantly to wrap your brain around it, keep up the awesome work ninja!!"+
	"<br>"
	//"<img src='Images/Blue2401.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue2402.png' width='200'>"
	 
	robloxCharacterCreation = "<p class = 'debrief'>In our last few lessons, "+CHILDNAME+"  has been having a look at making NPC’s move between points and towards objects, in today’s session we had a go at actually "+
	"making our Characters from scratch! First "+CHILDNAME+"  used a combination of different blocks and shapes to make our character, we could change the colours and materials of our objects to make it look even "+
	"better!! "+heshe+" then had to rename each part to what it resembled, this is just to make sure we don't connect the wrong parts later on, we then dragged them all into a model and added a humanoid part into it. "+
	"<br>"+
	"<br>"+
	"The humanoid part simply tells the game that it's going to be a person or a person like character, e.g. it can die and have health. Next, we duplicated one of our center most parts and named it “HumanoidRootPart” "+
	"this is the part that’ll control our characters movement through the world! "+CHILDNAME+"  then used a plugin to Roblox called “RigEdit Lite” that allows us to make joints. If we played the game before adding the "+
	"joints, it would all fall apart into separate parts, we don't want it to fall down but we also don't want to anchor it because then our person won’t be able to move around. Our joints will hold our character "+
	"together but also allow for movement if we code it to."+
	"<br>"+
	"<br>"+
	"We first want our “HumanoidRootPart” to be connected to our center most object, like the body, from then on we can now do the rest of the joints, we had to be careful that they were all connected up to one "+
	"center part like the body or shoulders or waist. If we didn't connect it up like this when we try to do the animation next session, the computer may not recognize where the joints are, and which parts can move where. "+
	"<br>"+
	"<br>"+
	"Great work today, "+CHILDNAME+" , this was amazing work today. These Roblox codes can get incredibly confusing at times but you’re doing brilliantly, you can always take more time and go back over previous challenges "+
	"if you feel like you haven't fully understood it, or even if you just want to double your understanding! It was lovely seeing you in the dojo today, and I look forward to seeing you in again soon!! "+
	"<br>"
	//"<img src='Images/Blue2501.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue2502.png' width='200'>"
	
	robloxAnimationsfirsthalf = "<p class = 'debrief'>Today "+CHILDNAME+"  had a go at making a new animation in roblox. Last session "+CHILDNAME+"  built "+hisher+" NPC with a combination of different blocks and shapes "+
	"to make the character, including different colours and materials to make our guy look perfect!! This session we looked at creating an animation to play when our player walks!!!"+
	"<br>"+
	"<br>"+
	"We began by opening our Animation Editor and selecting our Model, we could then start creating our movement animation. To do this you could select a time frame and then rotate our Model’s parts to where you wanted "+
	"them, we’d then choose the next time frame and move them a bit further. "+
	"<br>"+
	"<br>"+
	"Next we had to set it's animation proximity to Movement, just to tell the server what it is, we then exported it and copied the link before dragging our model into the StarterPlayer folder. We also added our local "+
	"Script into the StarterCharacterScripts, this is how we’ll tell the animation to run. "+
	"<br>"+
	"<br>"+
	CHILDNAME+ "will finish this project next session, as we’re making sure we understand each individual part as we’re running through it, he’s doing brilliantly at the movement and I’m loving the resilience "+heshe+"’s "+
	"bringing each week! Keep it up superstar!!"+
	"<br>"
	//"<img src='Images/Blue2601.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue2602.png' width='200'>"+
	//"<img src='Images/Blue2604.png' width='200'>"
	
	robloxAnimationsFullorSecondHalf = "<p class = 'debrief'>Whew! This was a big session for "+CHILDNAME+" today! This animation unit delivers a very unique set of challenges but they still follow logical reasoning and "+
	"problem solving just like our programming languages! "+
	"<br>"+
	"<br>"+
	"After rigging up "+hisher+" NPC and creating some base movements and default adaptations, "+heshe+" started to investigate how multiple animations may be used for the same action -  for instance, if we had 2 “idle” "+
	"animations. When multiple animations exist for a character state, we can set the animate script to randomly choose which one to play, we also found out that the outcome can be influenced by changing the animation’s "+
	"weight value!"+
	"<br>"+
	"<br>"+
	"When assigning weight values, this is essentially assigning the probability of an animation being chosen. For example, "+CHILDNAME+" scripted that Animation1 will play ⅓ of the time the character is idle, while "+
	"Animation2 will play ⅔ of the time. Whilst these touches may seem small, they really make all the difference for smoothness, realism and player captivation with the world "+CHILDNAME+" is creating. "+
	"<br>"+
	"<br>"+
	"In some cases we’ll need to play an animation directly from inside a script, for instance when the player presses a certain key, picks up a special item, etc. This script waits for the character action/collision "+
	"to occur then loads a new animation instance which will start playing. It also utilizes the GetMarkerReachedSignal() function to detect when a specific animation event occurs, to avoid overlapping if several potential "+
	"triggers can happen at once!"+
	"<br>"+
	"<br>"+
	"Awesome work today superstar! I wonder if "+heshe+" can begin to notice some elements we have been working on in their favourite animated movies! "+
	"<br>"
	//"<img src='Images/Blue2601.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue2602.png' width='200'>"+
	//"<img src='Images/Blue2604.png' width='200'>"

	PatrollingPathfinding = "<p class = 'debrief'>Today "+CHILDNAME+" coded "+hisher+" smartest creature yet by combining both pathfinding and patrol points! From previous lessons "+CHILDNAME+" now has their own custom "+
	"made and animated NPC! So we used this as the template!"+
	"<br>"+
	"<br>"+
	"To set up the gaming scene, "+CHILDNAME+" added multiple parts/objects which were spaced out! These will be the points our NPC moves to, but this time we wanted to make it even trickier. We achieved this by creating "+
	"walls to obstruct straight navigation, similar to a  maze but with more paths!"+
	"<br>"+
	"<br>"+
	"Next, we went ahead and added a Script into the NPC, then coded the first set of local variables such as linking child parts to parent scripts and implementing the Create Studio’s built in path finding service. "+HESHE+ " "+
	"next need to create a function called getPath, this will be responsible for generating lots of small waypoints to map out the best way to a destination!"+
	"<br>"+
	"<br>"+
	"Now we have created a path of mini waypoints, we scripted a function to walk through it! "+CHILDNAME+" implemented a loop that allows our character to move to each of the little waypoints it makes in the right order! "+
	"The next step required a nice bit of organisation, to do this we created a folder in the workspace called points and dragged all of the waypoints placed down earlier into it! This way we can have our code cycle through "+
	"this folder to determine the possible destination for our NPC to travel too, rather than inputting them all one by one (Boooo!)"+
	"<br>"+
	"<br>"+
	"Now "+CHILDNAME+" had an awesome animated NPC and some dynamic pathfinding code so the character can choose it’s own waypoints randomly so it looks like it has a mind of it’s own!! "+
	"<br>"
	//"<img src='Images/Blue2701.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue2702.png' width='200'>"+
	//"<img src='Images/Blue2703.png' width='200'>"

	FirstPerson = "<p class = 'debrief'>This session we got to experiment with different perspectives! In game design three camera angles are commonly used, these include; 1st person, 3rd person and isometric!  A first-person "+
	"camera is a view where the camera stays locked with the character’s head, which is more accurate to real life and we got to give this a try! "+
	"<br>"+
	"<br>"+
	"First up "+CHILDNAME+" began to code this effect within the workspaces graphical user interface (GUI). Inside this new LocalScript, "+heshe+" first need to create a variable that finds our player. Then we set our Players "+
	"CameraMode to lock in the FPS position! This hard sets our character's field of view to a Max Zoom Distance of 0.5, thus simulating our view to appear like we are looking from the eyes of our character!"+
	"<br>"+
	"<br>"+
	"Now "+heshe+" modified this script so that we can also see our player’s body when we look down! Yay even more realism! This code changes our camera settings to force the first person view, similar to our previous method! "+
	"But, the CameraOffset changes the Camera's position to be slightly behind the players head. "+
	"<br>"+
	"<br>"+
	"Every Part has a ‘LocalTransparencyModifier’ that makes parts transparent when you look at them too closely. "+CHILDNAME+" scripted a for loop that selects every part in our body and changes the modifier to 0 whenever "+
	"this property tries to change signal! Take that ROBLOX! This allows us to look down and see our body in 1st person, awesome! "+
	"<br>"+
	"<br>"+
	"With this new knowledge "+CHILDNAME+"’s challenge was to make this into a mini game that includ such previous projects such as NPC pathing, a raycasted weapon and of course some lovely 3D building skills! One example "+
	"that we used was built a custom target range with a scripted Laser Gun and Targets that move between points! "+
	"<br>"
	//"<img src='Images/Blue2801.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue2802.png' width='200'>"

	UnionAndNegate = "<p class = 'debrief'>With "+CHILDNAME+" ‘s new foray into three dimensional design, this session takes "+hisher+" skills up a notch by incorporating more advanced in-game solid modelling. "+
	"This lets us use and create complex models from simple blocks, spheres, wedges, and cylinders. These ‘merged’ models can even significantly reduce overall part count in a game and improve performance! (But, "+
	"more on optimization later..)"+
	"<br>"+
	"<br>"+
	"The main operation for solid modeling that we will be using is Union! To use it "+CHILDNAME+" needed to select the parts "+heshe+" wanted to combine and under this setting they will be unionised! To best "+
	"visualize this, think of a traditional Snowman design, this is usually 3 spheres stacked on top of eachother. Now, if "+CHILDNAME+" was to model this we could union the spheres into one so they blend properly "+
	"and become a single object! So, you can see how this can become very handy for us to use. "+
	"<br>"+
	"<br>"+
	"Solid modeling allows for more than just joining two parts together — parts can also be removed from other parts using the Negate feature. When "+heshe+" used it this converts the part to a “negative part” "+
	"(it will turn red and translucent to indicate this). If this negative part is unioned with a normal part, the section which overlap will be cut out. Think of making a flat circle, if we then created another "+
	"smaller ‘negative circle’ and negated the middle, the final product would look like a donut. As using the negation effectively cut/ removed the smaller section. "+
	"<br>"+
	"<br>"+
	"Luckily there is an effective way for "+CHILDNAME+" to undo all of these crazy contraptions! To revert the result of a unioned model, we used the Separate tool. This breaks the union apart so you can resize "+
	"and rework the model! Discovering this tool led us onto one of the key limitations of these editing features!"+
	"<br>"+
	"<br>"+
	"As a unioned or negated part can only be scaled uniformly (all of the dimensions must be scaled at the same proportion). If "+CHILDNAME+" needed to change just one part in a solid model, "+heshe+" had to "+
	"first separate the model, transform the specific part, and redo the union process. A pain! But, the best way to make our designs effective and true to form!"+
	"<br>"
	//"<img src='Images/Blue0303.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue0304.png' width='200'>"

	NinjaSnackToDodge2 = "<p class = 'debrief'>"+CHILDNAME+" has done brilliantly in "+hisher+" session today! Finishing up much of Unit 4!"+
	"<br>"+
	"<br>"+
	CHILDNAME+" completed Ninja snacks firstly, a game in which we had a Ninja alongside falling apples he would like to eat! "+CHILDNAME+" was introduced to a new function to use ' object.moveToObject() ' where we "+
	"would put the object we are moving to inside the brackets. So in this games case - 'apple.moveToObject(ninjaMouth)' "+CHILDNAME+" then had to figure out where we would put this code to make it into a game! "+
	"Simply putting this code in the 'Update Every Frame' event would mean there is no game atall as the apples would always go to the ninja! "+CHILDNAME+" didnt even need any help on this one though and decided to put "+
	"the code in the Apples 'Mouse Click' so the player would simlpy click each apple to place it in the Ninjas mouth! "+CHILDNAME+" then simply removed the apples when they touched the Ninja so it looked like he ate them!"+
	"Om Nom Nom!"+
	"<br>"+
	"<br>"+
	"The second game "+CHILDNAME+" got onto was very similar to the first - this time using '$this' as the target of the moveToObject function - allowing the code to work accross multiple clones of targets! This "+
	"made a simple shuriken toss game where clicking on a target would allow the shuriken to move in whatever direction the target was! The third game then used the same code once again - but also introduced a new function "+
	"'pointToObject()' which does what it says on the tin! Our spaceship would fly and dodge all sorts of targets throughout an asteroid field and "+CHILDNAME+ " could always tell where it was headed as this new function "+
	"allowed our objects to point towards whichever one we wished - in this case the thing we are moving towards!"+
	"<br>"+
	"<br>"+
	"The final game was the longest today - using all of that knowledge gained from the previous ones! It recreating the Shuriken dodge game but from the beggining! "+CHILDNAME+" coded the shurikens to clone and also to "+
	"move in random directions along the screen. Then we introduced one final function 'pointToCursor()' which allows our shuriken to point at the cursor! This allows for some fantastic curved shuriken throws as "+CHILDNAME+
	" always had the shuriken follow the cursor on the screen! Brilliant work "+CHILDNAME+"!"+
	"<br>"
	//"<img src='Images/ShurikenTossPart2.png' class='debriefimg' width='200'>"+
	//"<img src='Images/ShurikenTossPart2C.png' width='200'>"+
	//"<img src='Images/SpaceTour.png' width='200'>"+
	//"<img src='Images/NinjaSnacks.png' width='200'>"

	NinjaQuest1 = "<p class = 'debrief'>Welcome, "+CHILDNAME+" to the final destination, the edge of the universe, the be all and end all…"+
	"<br>"+
	"<br>"+
	"Well, not quite yet!! Ninja Quest is the last curriculum game of all of Green Belt! Once this game is completed we will be moving onto our final Prove Yourself "+
	"activities where "+CHILDNAME+" will be creating our games with more independence using a short brief detailing how we want the game to look when it is finished! "+
	"<br>"+
	"<br>"+
	"This will test all of  "+CHILDNAME+"‘s coding skills whilst also being a great lesson in how to develop and tackle chunks of larger projects piece by piece. "+
	"Which is especially handy when we use more professional software throughout Blue Belt and beyond!"+
	"<br>"+
	"<br>"+
	"In the Ninja quest, "+CHILDNAME+" added in a ninja character asset and coded it to move around with the arrow keys but this time "+
	"selecting the relevant frame to appear like it was animated and moving in each direction. "+HESHE+" allocated our floor, wall and ceiling roles to our "+
	"game world so this limited our ninjas multi-directional movement, depending on where we wanted guide the players path."+
	"<br>"+
	"<br>"+
	CHILDNAME+" then created our ‘interactables’ objects of a BlueDoor, PinkDoor and GoldenDoor with their respective keys and an if statement with a collison "+
	"to ‘remove/open’ them if the correct key was in hand. A tricky challenge that "+heshe+" faced when playtesting our game at this stage was our role allocation. "+
	"As this game was from top down perspective, objects that would constitute ‘ceilings’ and ‘floors’ in a 2D side scroller would now in fact be ‘walls’. "+
	"This would prevent our ninja character from falling through some parts of our maze-like structure as we progressed."+
	"<br>"+
	"<br>"+
	"Brilliant work today "+CHILDNAME+" we will be finishing this off next lesson by adding all of the Ninja enemies and their weapons they will be using to make our "+
	"adventure much harder! Great stuff!"+
	"</p>"
	//"<img src='Images/NinjaQuest1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/NinjaQuestC.png' width='200'>"
	
	NinjaQuest2 = "<p class = 'debrief'>"+CHILDNAME+" today got to finish off "+hisher+" final Curriculum game of Green Belt! The next games will all be prove yourselves "+
	"and test "+hisher+" knowledge throughout "+hisher+" White Yellow Orange & Green Belts!"+
	"<br>"+
	"<br>"+
	HESHE+" started by making the game, more of a game! "+CHILDNAME+" inserted some enemy ninja assets and had them throwing shurikens at us. This was coded with some "+
	"forward speed functions, coordinate resets and a remove feature for our hero ninja so we were reset if hit. "+CHILDNAME+" could add in as many of these enemies as "+heshe+
	" liked to turn the game into a crazy ninja battle fiasco!"+
	"<br>"+
	"<br>"+
	"This entire game was designed and coded from scratch by "+CHILDNAME+", we are incredibly impressed and next up we will yet again be kicking it up another gear to get "+
	"one step closer to mastering 2D game design! Absolutely fantastic job today!"+
	"</p>"
	//"<img src='Images/NinjaQuest1.png' class='debriefimg' width='200'>"+
	//"<img src='Images/NinjaQuestC.png' width='200'>"
	


	FloorIsLava = "<p class = 'debrief'>Today "+CHILDNAME+" created a much more advanced Obby that those completed in early Blue Belt, the Floor is Lava!"+
	"<br>"+
	"<br>"+
	"After some demo testing of "+hisher+" old Obby projects, "+CHILDNAME+" wanted to add alot of tweaks to "+hisher+" planned player traps and some collision kill bricks that were  to be "+
	"creatively sprinkled throughout the obstacle course to give the player a bit of a cognitive challenge! But after all this we had to add the main chunk of the game, the LAVA!"+
	"<br>"+
	"<br>"+
	CHILDNAME+ "had to script a reason for a player to keep progressing vertically as fast as they could - rising Red Hot Lava! This lava block had to rise quickly and engulf the whole obby! "+
	"Our Lava part had to be large enough cover the game area or baseplate of our game world. "+heshe+" had to ensure that this part had collisions OFF and Anchored is ON, to ensure that it "+
	"does not snag on other game parts as it rises! "+CHILDNAME+" could add some creativity here as if "+heshe+" wanted to make it a Dark Green brick or Hot Pink glass, then go for it! "+
	"We always love to see some imagination!"+
	"<br>"+
	"<br>"+
	"Next, we needed to set up our collision function! This checks if our Humanoid connects with our Lava and if a player does then it dealt 100 damage to our character (Ouch!) and reset the "+
	"lava’s position for another attempt! Once "+heshe+" coded the dangerous bit, next we need to make sure our lava moves up after us! "+CHILDNAME+" used a while loop that changes our Lava’s "+
	"position by adding to it’s Y vector, so it slowly moves up to chase us!"+
	"<br>"+
	"<br>"+
	"Towards the end we discussed how we could modify this obby to include more traps and even secrets! Such as changing the Wait and changing the Y vector of your Lava rising position create a "+
	"speed run alteration or add a trail of glowing collectables!"+
	"</p>"
	"<br>"
	//"<img src='Images/Blue2901.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue2902.png' width='200'>"+
	//"<img src='Images/Blue2903.png' width='200'>"

	DisasterLandTerrain = "<p class = 'debrief'>Today "+CHILDNAME+" started a new project, Disasterland! They may have already seen similar games on roblox as these natural disaster games are massively "+
	"very popular! Our first step of this project is to make our island!!"+
	"<br>"+
	"<br>"+
	"To kick things off "+heshe+" went back to the terrain editor which we previously went over in the zombie island, which allows us to generate terrain made of mountains, lava, water, dunes and much more! "+
	"Once the terrain had been generated, there are multiple tools which "+CHILDNAME+" used to manipulate the area. The main tool is ‘add’, and "+CHILDNAME+" decided to add lots of sand, lots of grass & of course lots of lava to "+
	"make the base of "+hisher+" island! "+CHILDNAME+" also decided to make lots of secret caves which the player can discover and hide from all the crazy things that would happen in this game! "+CHILDNAME+" used "+
	"the ‘erode’, ‘subtract’ and ‘flatten’ tools to add detail to "+hisher+" island design and to make it look natural! The ‘grow’ tool can be used to add to already existing terrain, which is useful for creating "+
	"hills and mountains or making them bigger!"+
	"<br>"+
	"<br>"+
	"The terrain editor introduces "+CHILDNAME+ "to map and level design, which is a main component of video game design. As well as the programming side of video games, we also want to teach them how to design "+
	"maps, characters, weapons and much more! Touching on it again in more depth and with a much more focused idea of what kind of game we want to make allows "+CHILDNAME+" to make a plan about how their game will work "+
	"and what kind of things will be added from the beggining! Great work "+CHILDNAME+", Keep it up!"+
	"</p>"
	"<br>"
	//"<img src='Images/Blue3101.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue3102.png' width='200'>"+
	//"<img src='Images/Blue3103.png' width='200'>"


	DisasterLandMeteor = "<p class = 'debrief'>In this session we carried on with "+CHILDNAME+"'s Natural Disaster game, and in this part we made a meteor shower!!! "+
	"<br>"+
	"<br>"+
	"To begin with we designed our meteor we could "+
	"choose the colour, material and shape to make a standard Roblox part resemble a dangerous falling rock, and then include a fire effect within it so that it glows and leaves a trail of fire when falling! "+
	CHILDNAME+" then put our meteor in the 'serverstorage', this is where we can store objects so that they do not intefere with the rest of the game until some code calls on them to move into the world!. "+
	"We then made our meteor positions; these were simply anchored invisible parts that we placed where we wanted the meteors to fall from."+
	"<br>"+
	"<br>"+
	CHILDNAME+" would then run a script every few seconds to choose one of our positions at random and clone the meteor at that position, where it’ll fall onto our map. The OnTouch function would check whether "+
	"the meteor was touching a humanoid model (a player) and if it was then we’d set the humanoids health down to 0, ouch! This code was set inside a for loop to run over and over falling meteors onto our pre made "+
	"map from before. This is a great show of how adept "+CHILDNAME+" has become at the Roblox Create Studio and "+heshe+" is doing brilliantly at creating their own custom projects."+
	"<br>"+
	"<br>"+
	"Amazing work today, "+CHILDNAME+", with a function and a while loop you have successfully finished making a meteor shower!! Looking forward to seeing you in next session!"
	//"<img src='Images/Blue3201.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue3202.png' width='200'>"+
	//"<img src='Images/Blue3203.png' width='200'>"

	DisasterLandLightning = "<p class = 'debrief'>Last session we looked at making Meteors fall around us, this time we’re going to make some lightning using similar code!"+
	"<br>"+
	"<br>"+
	"First "+CHILDNAME+" had to make the Lightning, we could use multiple parts and union them together, we then anchored this model and put it in our server storage. Next "+CHILDNAME+" put a script into "+hisher+
	"lightning and used a function so that when our lightning touched something it would check whether the otherpart contained a child “Humanoid”. this checks whether the part is meant to be “alive”, if it finds a "+
	"Humanoid part it’ll set the health to zero and end the script. "+
	"<br>"+
	"<br>"+
	CHILDNAME+" also remade our position folder similar to last time, and put the positions around "+hisher+" island, checking that they were anchored, uncollideable and invisible. Next "+CHILDNAME+" added a script "+
	"into our ServerScriptService, this is the games code, and used a “while true loop“ to find a random position and then to clone our lightning, "+heshe+" then put our cloned lightning into our workspace and "+
	"set its position to the random part’s. After 0.5 seconds we destroy our clone, this makes it look as if it flashed! Finally "+CHILDNAME+" Also added a might BOOM noise with our Lightning effect that would run "+
	"whenever a lightning flashed to add extra immersion into the game! Great work today "+CHILDNAME+", keep it up!"+
	"</p>"
	"<br>"
	//"<img src='Images/Blue3301.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue3302.png' width='200'>"+
	//"<img src='Images/Blue3303.png' width='200'>"


	VoidRunner = "<p class = 'debrief'>This project is similar to ‘The Floor is Lava’, but the adventurous challenge will be coming horizontally this time and we had to make sure the void doesn't catch up!"+
	"<br>"+
	"<br>"+
	"Our set-up began with an awesome 3D sculpting and building stage! "+CHILDNAME+" was firstly tasked with creating a side scrolling obstacle course where our player will need to travel from left to right "+
	"(Just like in Super Mario!) We always encourage a lot of brilliant vision so "+CHILDNAME+" chose a map theme and customized it to their heart's content! Then came the dreaded ‘Void’, this had to be large "+
	"enough to cover our obby so there was no escape! Coupled with multiple health altering bricks, enemy creatures , acid pools to avoid and lava to vault, this was the beginning of something great!"+
	"<br>"+
	"<br>"+
	"Next up, "+heshe+" needed to create 2D side-scrolling camera view! We achieved this by utilizing some scripting tactics under the StarterPlayerScripts folder. It began by setting up some local variables - "+
	"these wait functions create a delay to lock the new camera position. Then we manipulated the Camera’s subject, type and field of view to ensure it is connected to the players RootPart - this simply links "+
	"the camera to follow our Player so we are always in view! Finally, our function runs the service and triggers the new position and orientation of the camera - bringing all of your coding hard work together!"+
	"<br>"+
	"<br>"+
	"This is the awesome base that even the most popular projects in the world use, so it was fantastic to demonstrate to "+CHILDNAME+" some of the many elements that their favourite or at least played games "+
	"consist of. Next time we will be seeking to add more game design elements and elevate this to the next level! Great work "+CHILDNAME+"!"+
	"</p>"
	"<br>"
	//"<img src='Images/Blue3001.png' class='debriefimg' width='200'>"+
	//"<img src='Images/Blue3002.png' width='200'>"+
	//"<img src='Images/Blue3003.png' width='200'>"


	bulkCampredstone = "<p class = 'debrief'>Today we explained and explored the basis of Boolean logic and how to link this to computer programming! Using Minecraft as the base system is a great tool to get "+CHILDNAME+
	"practicing key concepts whilst having a blast!"+
	"<br>"+
	"<br>"+
	"We were focusing on applying logic to solve a series of puzzles! You may have heard alot at home from "+CHILDNAME+" about levers and Redstone in Minecraft, but may not have realized the concepts behind them are "+
	"extremely educational too!"+
	"<br>"+
	"<br>"+
	"For example, as "+CHILDNAME+" practiced today, in a simple circuit: The lever is the INPUT; if you right-click on the lever to switch it ON, you generate current through the Redstone wire, making it glow red. "+
	"The OUTPUT can activate a device – in this case a piston!"+
	"<br>"+
	"<br>"+
	"We next explored Logic Gates which is a simple circuit that receives one or more INPUTS in the form TRUE/FALSE and gives a desired OUTPUT in the form TRUE/FALSE. We explained to "+CHILDNAME+" how a computer is a "+
	"collection of millions of logic gates connected together! We can create a logic gate made of some Redstone wire and a Torch. As a rule, torches always generate current as OUTPUT, except when current flows into them "+
	"as INPUT! "+
	"<br>"+
	"<br>"+
	"Of course we developed these ideas into some awesome creative fun with this circuitry today! I hope "+CHILDNAME+" has had a fantastic session and has a new or renewed insight into Boolean Algebra and how important it "+
	"is to today’s engineers to make electronic circuits suited to ever more complicated tasks! Awesome!"

	bulkcampconditional = "<p class = 'debrief'>Today "+CHILDNAME+" explored the concept of conditionals, an important part of programming used to tell the computer when to perform a certain task! But with a Minecraft twist, "+
	"the team and I believe this to be vital in educational development, as being able to identify and use these core coding principles in their favorite games, brings to light how coding connects the digital world around them!"+
	"<br>"+
	"<br>"+
	"As "+CHILDNAME+" delved into today, Conditionals work by requiring a certain condition or rule to be met before an action is performed! We focussed on generating hands-on experience with guided coding activities "+
	"to create a fantastic mini project within Minecraft! For example, we coded their agent to chop wood and mine for resources, woah! Gone are the days of pressing the same button a thousand times to collect enough "+
	"wood for a luxurious cabin! We also had a mindmap on how we can use conditionals to solve problems that  players commonly encounter in Minecraft. "+
	"<br>"+
	"<br>"+
	"A few more of these sessions and the Minecraft jargon you usually hear at home may increase tenfold ha! Well done "+CHILDNAME+" , have a fantastic rest of your day!"

	bulkcampFunctions = "<p class = 'debrief'>As "+CHILDNAME+" has explored in JavaScript, Functions are a convenient way to split your code into useful re-usable blocks! Often in programming, there "+
	"are tasks or procedures that are used frequently within the same program. Rather than rewrite the lines of code that perform a particular task each time we need it, "+CHILDNAME+" can group that set "+
	"of instructions together as a function!"+
	"<br>"+
	"<br>"+
	"Grouping frequently used instructions as a function makes our code more efficient! We usually give our functions a name that describes the task it will perform, making our code easier to read, "+
	"which is a lifesaver when debugging!"+
	"<br>"+
	"<br>"+
	"So, "+CHILDNAME+" can write the set of instructions once as a function and from then on simply ‘call’ the function from inside your program whenever you need that task done. "+
	"<br>"+
	"<br>"+
	"Our main activity today revolved around developing the automated actions we crafted from utilizing Conditionals, but this time we aimed for an auto builder instead of just collecting! We "+
	"programmed a ‘builder’ to create a Skyscraper floor by floor with whatever material we wanted! Fancy the Shard made out of marble? Coming right up! The Empire state forged with slime blocks? "+
	"You got it! Well, you get the idea…"+
	"<br>"+
	"<br>"+
	"Our code essentially consisted of a nested loop that would move our builder forwards, place the material of our choosing, turn right to stick within the width measurements of our new building "+
	"and move up one space to continue! Viola, "+CHILDNAME+" is an architect in the making!"+
	"<br>"+
	"<br>"+
	"Further challenges we explored were to change the size of the skyscraper by modifying the height and width dimensions in the code, Create new variables to store these dimensions for optimization "+
	"and to generate a random number for the height and width to create a different size skyscraper each time we run the code! Great work superstar!"
	
	BannanaMadness1 = "<p class = 'debrief'>Today "+CHILDNAME+" started on "+hisher+" new project, Banana Madness! "+
	"<br>"+
	"<br>"+
	"This game will be using skills he’s learnt in previous sessions to make a new project."+
	"<br>"+
	"<br>"+
	HESHE+" started off by making a conveyor belt, this will be the main part of our game. We'll have a spawn location at one end, and the finish line at the other. As well as having to run against the "+
	"conveyor belt, the players will also have to dodge the bananas!! Each banana has a code that will make the player sit down, preventing them from being able to move, they will randomly clone in at "+
	"different positions, using what we learnt in our meteors projects. "+
	"<br>"+
	"<br>"+
	"Next session we’ll be focusing on polishing up our game and adding in some more obstacles that will make us take damage or gain health. We’ll also have to complete our finish line and winners "+
	"podium area with special prizes! "+
	"<br>"+
	"<br>"+
	CHILDNAME+ " has done brilliantly today, "+heshe+" has been hardworking, focused and engaged all throughout "+hisher+" session, we love to see our ninjas experiment with everything they "+
	"do and "+CHILDNAME+" is a perfect example of this. Whenever "+heshe+"’s in "+heshe+" always has a look at how "+heshe+" could change "+hisher+" game to make it work slightly differently, it's "+
	"this curiosity that we hope to inspire in all of our ninjas on there way up to each new Belt. "+CHILDNAME+" is getting very close to Purple now and its lovely to see their progression throughout! "+
	"Great work today "+CHILDNAME+", We look forward to seeing you next time!!"


	BannanaMadness2 = "<p class = 'debrief'>Today "+CHILDNAME+" finished off "+hisher+" Banana Madness project, last session we made our conveyor belt as well as our starting and finishing points. "+
	"We'd also started coding the bananas to spawn randomly on our conveyor belt and when they hit us they make the character imobile!  "+
	"<br>"+
	"<br>"+
	"This time we wanted to introduce even more challenges and obstacles to the players, we first had a go at putting some stationary objects on our conveyor belt that we have to jump over or go round."+
	"We also used what we learnt back on our health pickup game to make some objects either do damage or heal us when we touch them. We can design these to look however we want, and to take or give as much "+
	"health as we want!"+
	"<br>"+
	"<br>"+
	"For all of these variations we’re adding in we need to make sure we’re looking at it from the perspective of someone playing the game, we need to make it hard enough that its not boring, but at the "+
	"same time if its too difficult they may give up! Its hard to get a perfect balance of this but II think "+CHILDNAME+" has done a brilliant job at it! Great work Ninja see you next week!"
	

	RedLightGreenLight = "<p class = 'debrief'>Today we built another extremely popular & complex game! Just like Pathfinding and Raycasting, this is another awesome trick to make some clever characters with basic A.I! "+
	CHILDNAME+" chose to utilise "+hisher+"custom animated NPC as our enemy as our ‘Watcher’."+
	"<br>"+
	"<br>"+
	"We were experimenting with scripting an enemy's Field Of View. This basically means what area can our NPC can ‘see’. Today we will create this with code to give our NPC sight! And to catch us "+
	"when it’s Red light!"+
	"<br>"+
	"<br>"+
	"So if we are outside the NPC’s FOV, it cannot see us and we will be safe!  OR If we fall into it’s FOV we will be ‘seen’ and it’s GAME OVER! "+CHILDNAME+" used new events like RenderStepped so that "+
	"our script fires every frame to check our players status!"+
	"<br>"+
	"<br>"+
	"Our code has to measure length and direction in 3D space!  To start we used the direction an object is facing - here it is our NPC’s head! Then we use dotProduct to see how much 2 vectors go in "+
	"the same direction. This checks to see if our character's direction from the NPC is similar enough to it’s LookVector (it’s ‘sight’)!"+
	"<br>"+
	"<br>"+
	"This if statement checks if our dotProduct is very close, guess what? We’ve been spotted!  Our character then loses 100 health, OOF! And our baseplate turns red as a signal!!! An Else statement "+
	"makes sure that if we aren’t ‘seen’ the baseplate is Green to show we are safe! Yay!"+
	"<br>"+
	"<br>"+
	"Extremely well done today! This completes our basic artificial intelligence work! Now we will be focusing our effort on a custom game for "+CHILDNAME+" to create so "+heshe+" can graduate "+
	"to Purple Belt!"

	ProjectBlueBook = "<p class = 'debrief'>"+CHILDNAME+" has finished all of "+hisher+" disasterland project today! This has been a very large project and puts us very close to Purple Belt! Only 2 left before the "+
	"final capstone project!"+
	"<br>"+
	"<br>"+
	"This challenge was named ‘Project BlueBook’! This was the study of UFO’s and other outworldy bodies! "+CHILDNAME+" created meteors that would not only damage the player if they were unlikely enough to "+
	"come in direct contact with one (quite unlikely) but now explode with contact on the ground! Roblox uses an explosion as its own object we need to spawn, quite confusing!"+
	"<br>"+
	"<br>"+
	"Firstly, we created a new meteor and added a script to it like before. This script would now run whenever the meteor contacted any surface like a building, a player or even the ground itself! When "+
	"this happened "+CHILDNAME+" created a new ‘instance’ object, called explosion! We gave this instance a name (the name ‘explode’ of course!) and used this name to alter its properties!"+
	"<br>"+
	"<br>"+
	"Without editing the properties the explode object would simply look like some fire just appeared but nothing else. We had to change both the ‘Blastradius’, ‘BlastPower’ and the explosion type! "+
	"The explosion type we made to be ‘Craters’. The ‘Craters’ type does what it says! It makes craters by impacting the very terrain of roblox. This makes for a super cool looking game where the "+
	"terrain itself is altered by the meteors falling down to the ground! And of course, explosions do damage to the players too!"+
	"<br>"+
	"<br>"+
	"Great job today "+CHILDNAME+" finishing off this very large disasterland project over the last few sessions! Keep it up!"
	

	Capstone = "<p class = 'debrief'>Today we were working on the blue belt capstone project, this is essentially going to be down to "+CHILDNAME+" as to how "+heshe+" makes it! First of all we need to "+
	"choose our theme, this can change the popularity of the game hugely! For example, while squid game was trending there were lots of searches for it, but since it died down it’s a lot less "+
	"common! On top of this there's also the thought of what the aim of the game will be, is it to get to a certain point or to be the last man standing! Throughout this we will have "+
	"a checklist to tick off, in order to make sure "+heshe+" uses what "+heshe+"’s learnt throughout the belt, this will consist of:"+
	"<br>"+
	"<br>"+
	"A Creative theme and consistent colour palette"+
	"<br>"+
	"<br>"+
	"Clean 3D Unioned objects with correct, anchoring, hinges and joints"+
	"<br>"+
	"<br>"+
	"Implement a variety of scripting techniques - For example, a for loop system to clone objects/enemies, proper script folder organisation"+
	"<br>"+
	"<br>"+
	"Lighting effects for ambience and atmosphere of level design"+
	"<br>"+
	"<br>"+
	"Various collision parts with several objectives - Such as  kill bricks, speed boosts, jump pads or even player state changes."+
	"<br>"+
	"<br>"+
	"Health pickups, using timers to reset them after a few seconds"+
	"<br>"+
	"<br>"+
	"A new character with animations, either to be used as an NPC or as the players started character"+
	"<br>"+
	"<br>"+
	"Several Artificial Intelligence techniques like: Direct NPC movement, pathfinding or patrolling"+
	"<br>"+
	"<br>"+
	"And some kind of hidden easter egg within the game!"+
	"<br>"+
	"<br>"+
	"I’m really excited to see what "+CHILDNAME+" comes up with! See you again soon!"


	gamepasssetup = "<p class = 'debrief'>Today "+CHILDNAME+" started "+hisher+" first purple belt challenge!!"+
	"<br>"+
	"<br>"+
	"In this session we started having a look at game passes. GamePasses are great ways to start learning about making money through our games, they are free to set up and are quite straightforward. "+
	"Also you get 70% of all profits!"+
	"<br>"+
	"<br>"+
	"To start this off we needed to go into our Roblox website to manage our experiences. Then we can choose a specific game and create our Pass, we then customise our GamePass icon which would be "+
	"what buyers see before they purchase it, then we could set our name and description!"+
	"<br>"+
	"<br>"+
	"Once "+CHILDNAME+" had made "+hisher+" GamePass, "+heshe+" could then look into configuring it, this meant setting our price and checking it was on sale! Now that we’ve made "+hisher+" Pass you may "+
	"think that it was ready and done, but unfortunately we still need to sort out what our GamePass will actually do, for our first game we’re simply going to allow access to a private area that you "+
	"can only get into with the GamePass, but we’ll have a go at coding this part next time! Great work today "+CHILDNAME+", see you in soon!"

	gamepassimplement = "<p class = 'debrief'>Today "+CHILDNAME+" carried on with "+hisher+" GamePass creation! Last session "+heshe+" made "+hisher+" game pass, gave it an image and set up how "+
	"it would integrate into "+hisher+" game! today "+CHILDNAME+" used a script to carry out "+hisher+" game pass powerup!!"+
	"<br>"+
	"<br>"+
	"In this game the pass will allow players access to an extra part of the map, this will be an extension to the game "+CHILDNAME+" made in "+hisher+" final session of blue belt! We can start off by making "+
	"our “door” and adding a script inside of it, to start off we used local variables to define our door, and game pass ID as well as any services we would need. "+
	"<br>"+
	"<br>"+
	"The next step was to use an “on Touch” local function, that would recognize our players ID and run one of the MarketPlaceService to check if the user owns the game pass, if they don’t we "+
	"return the function, if they do we simply turn the door’s CanCollide to false so players can simply walk through it! "+
	"<br>"+
	"<br>"+
	"And there we have it! "+CHILDNAME+" has made "+hisher+" very first game pass in roblox! Now that he’s learnt the basics of this skill, we should be able to develop it so we can make "+
	"even more exciting game passes and even better games to involve them in! Great work today "+CHILDNAME+", see you next soon!!"

	tiptoe = "<p class = 'debrief'>Today we combined a very popular game type with Lua Tables (the same datastores as JavaScript’s Arrays). Tip Toe is a combination of trial-and-error, memory, "+
	"and a race to the finish. The tiles that make up the race course hide a secret path (or paths). Tiles on the path will light up and support racers. Tiles not on the path will fall and if "+
	"you drop with them, you’ll need to start the whole race over!"+
	"<br>"+
	"<br>"+
	"To script this "+CHILDNAME+" made a table called ‘grid’ and inserted 100 numbers into it. This is because our tiles will be a 10x10 grid, so 100 numbers are needed to number every tile! Then "+
	"we made a random number between 1 and 10 to select the first square on the first row. We then need to select the next tile. This is of course going to move us forwards initially but this then "+
	"can cause a problem as the computer will randomly select between moving forwards, left or right! What if the computer moved forwards, then left 4 blocks, then forwards, then right 4 blocks? "+
	"It would make a silly looking 4x2 rectangle of nothingness when we are meant to be making a winding maze! How do we fix this?"+
	"<br>"+
	"<br>"+
	"The way to fix it was to move forwards 2 blocks at a time! And to also not allow the computer to select the opposite direction it just did, E.G it cant go right 4 blocks - then left 2 blocks - then up. This "+
	"would leave a strange 2 block dead end that continues to the right after the path has already gone up to the next row! The last thing "+CHILDNAME+" did was to prevent the blocks from trying to move off the grid, "+
	"checking the numbers are divisible by 10 and if so, stopping them from moveing any more to the right! This was similar to the last Green belt game Minesweeper!"+
	"<br>"+
	"<br>"+
	"Once we had the maze randomly generating good and bad tiles, "+CHILDNAME+" got the fun bit of deciding what they would do! "+heshe+" chose the colours of the good and bad tiles and it was a lot of fun to play "+
	"this project and fiddle with all of its properties! Great work today finishing a huge technical challenge "+CHILDNAME+"!"

	homingMissile = "<p class = 'debrief'>Theres not much more dangerous than an obstacle course that kills you if you fall off of it. So how about we add something to make it easier… Like… EXPLOSIVE "+
	"HOMING MISSILES!!! Oh wait, that makes it harder, oh well! Homing missiles are quite a tough thing to add into Roblox and "+CHILDNAME+" did very well to finish it all today!"+
	"<br>"+
	"<br>"+
	"To start with we create a simple kill brick which we have done many times now. We then create a function that will move the block towards the nearest player in the game. It takes knowledge of "+
	"both the current position of the block and the nearest player. To find the nearest player firstly we draw a line ‘raycast’ to each player and run a for loop to find the raycast with the smallest "+
	"value! The smallest value = the smallest distance, so we aim for that guy!"+
	"<br>"+
	"<br>"+
	"Then it takes a while loop of constantly reducing that distance by firing a raycast, moving along it, firing a raycast, moving along it, firing a ray….. And on and on to make it look like it is "+
	"homing towards the player, very dangerous! The last bit we did was increase the difficulty of the game (and the code) even more! When the player changed team with the use of checkpoints along the "+
	"course, we wanted to spawn missiles closer to the player. We set up numerous spawn point groups and activated the closest one to the players current checkpoint! Great work today "+CHILDNAME+" finishing another technical challenge! Keep it up!"
	
	cosmiccanyon = "<p class = 'debrief'>Welcome to Cosmic Canyon! Today "+CHILDNAME+" had to create a lobby for a game followed by a unique portal that would whisk us away to a canyon obby with a ball chasing us along!"+
	"<br>"+
	"<br>"+
	"Firstly "+CHILDNAME+" had to create a portal using Union & Negate, and using Lua to give this portal a random new animation effect every few seconds. This gives the portal a very unique look that will have "+
	"things like fire or bubbles coming from it! "+CHILDNAME+" grouped this Portal to another portal in a different world for our Canyon Runner!"+
	"<br>"+
	"<br>"+
	"Once these 2 portals are created, "+CHILDNAME+" grouped them together in a model and named them as departure and destination. As we get further into Purple Belt and beyond it is vital that at all times "+
	"we correctly Name our objects, Variables & models so changes to our games don’t require twenty minutes of searching! "+CHILDNAME+" saw some of that today as Roblox doesn’t select objects when we add them, "+
	"causing some of our parts to get lost in a sea of other parts and models in the Roblox explorer!"+
	"<br>"+
	"<br>"+
	"Once the teleporters were joined together by our Hitbox Script, we had to code a sprinting code to outrun this danger ball! "+CHILDNAME+"’ custom character didn’t have ‘walkspeed’ attribute however, so we "+
	"are going to need to finish this bit off next lesson! Great work today "+CHILDNAME+" making a very atmospheric and spooky canyon, and 2 great portals connecting these world! Great work "+CHILDNAME+"!"

	zillionairept1 = "<p class = 'debrief'>Today "+CHILDNAME+" started on "+hisher+" new game “Zillionaire tycoon” . This will be much more advanced than our previous tycoon, where we could get money and choose "+
	"to buy an upgrade for more money, but this time we can also spend our money on different buildings and infrastructure!!"+
	"<br>"+
	"<br>"+
	"To start off with today we made our starting area where all the magic would be happening!, we then went straight into our serverscriptservice where we made a function to create our leaderstats folder inside "+
	"every player when they join the game, it would also name a new IntValue of Money (our IntValue is simply where we can store integers)."+
	"<br>"+
	"<br>"+
	"We then had a look at how we can gain money, so "+CHILDNAME+" created a conveyor belt where money would spawn on one end, move along the belt and then arrive at a final checker block. Next lesson we will "+
	"be coding this checker block to add points to the player based on what type of block landed there! Great work so far "+CHILDNAME+" this one is looking brilliant!"

	
	zillionairept2 = "<p class = 'debrief'>Today we finished off our zillionaire tycoon game! This has been quite a large project but its definitely been worth it, we started off with our “start here” button "+
	"to get the game going, after that we now move onto our upgrades, each one more expensive than the last!"+
	"<br>"+
	"<br>"+
	"If the player has enough money, the button will disappear and start running the upgrade function. This will spawn more money for each new button pressed allowing infinite growth! The money will spawn in at "+
	"one end of the conveyor belt and move along until it gets to the checker, we can check its value (dependent on which upgrades we’ve got so far) and then add that value to the players money!"+
	"<br>"+
	"<br>"+
	+CHILDNAME+ "then got to add all kind of upgrades the player would want in their land, a new building, a new wall or just a nicer looking conveyor belt! This is what Roblox’s most popular game mode consists of, "+
	"making lots of money and then spending it on visual upgrades to show off to your friends!"+
	"<br>"+
	"<br>"+
	"This has been a very big project that we can add onto and come back to later, great work today "+CHILDNAME+", we’ll see you back soon!"

	zillionairefiller = "<p class = 'debrief'>Continuing with our awesome Tycoon-style framework, "+CHILDNAME+" jumped straight back into our development by adding a script to the ‘circle’ which acts as our "+
	"purchasing point  from before! We named this part ‘GainMoney’ and coded it with a series of collisions connected to our Humanoid which will simply check when players touch the button!"+
	"<br>"+
	"<br>"+
	"Our next script  locates the players folder,  the Money inside it, sets the value to 50 and turns the part invisible over time! We then sculpted  3 new parts, a Red money Checker, at the end of a long blue "+
	"conveyor and above the conveyor a ‘Spawner’. Folder organisation and correct object names are key here as we are dealing with a large hierarchy of events that need to work together!"+
	"<br>"+
	"<br>"+
	"A main global function labelled with ‘_G.’ creates our new bricks/currency and ensures the same size, position for fluid gameplay! We then allocated different currency levels into our spawner script. This was based on "+
	"the upgradeNumber the player had chosen. For instance five dollars was baby blue , ten dollars was yellow  or TWENTY WAS PINK! This helped differentiate our upgrades whilst they were running through the conveyor from "+
	"a user experience standpoint. "+
	"<br>"+
	"<br>"+
	"Fantastic work today superstar!"
	
	autopoints="<p class = 'debrief'>Today, "+CHILDNAME+" and I were working together to use database skills to create point scoring and leaderboard systems into our project! Previously with JavaScript we’ve simply "+
	"used variables and increased them in increments, if need be displaying it as a text, simple but quite effective! In the Create Studio and LUA, the technique to achieve this is different and grander in scale. "+
	"<br>"+
	"<br>"+
	"Firstly, we don't have an object like a text to directly display values, we also need to consider multiplayer capabilities for many live players. To really step up our development skills we also aimed to "+
	"create a way to store our ‘points’ within a server so points/in-game currency/items progress isn’t lost and our player base can log-in and enjoy our project for many sessions to come!"+
	"<br>"+
	"<br>"+
	"To begin this task we made a leaderstats script in our “ServerScriptService”. Here "+CHILDNAME+" made some local variables which simply found our DataStoreService and PlayerData, these are pre-existing "+
	"from roblox studio."+
	"<br>"+
	"<br>"+
	"When our player joins we’ll add a new leaderstats folder and IntValue into our player, we can then look for the player's user ID and make a variable for any saved data."+
	"<br>"+
	"<br>"+
	"If we’ve made a variable it means there was saved data which is then set as the players points, if not we’ll just set the points to 0 to start! Great work today "+CHILDNAME+", We are going to be used this "+
	"advanced server concept to make some in depth games display each players scores and use them as currency in Tycoons soon! "
	
	dungeonDelve = "<p class = 'debrief'>In addition to GUI buttons, game interactivity can be handled through proximity prompts that appear when players approach in-game objects like doors, switches, or even "+
	"non-player characters."+
	"<br>"+
	"<br>"+
	"The ProximityPrompt is an object that allows developers to prompt users to interact with an object in the 3D world, such as opening a door or picking up an item. In order to detect when the user interacts "+
	"with the object our code needs to seek for the Triggered event on the ProximityPrompt."+
	"<br>"+
	"<br>"+
	"Using this feature "+CHILDNAME+" can; Indicate what objects can be interacted with in the world, Display what action can be taken on the object and trigger the action through user input. Then We can display "+
	"the correct input for all input types (keyboard/gamepad/touchscreen) and let players trigger the action immediately or “hold” to trigger the action after a time."+
	"<br>"+
	"<br>"+
	+CHILDNAME+ "set the scene by using real references from the middle ages  to sculpt an cool looking dungeon/ area our player character needed to escape from. Our graphical setup included determining the Object "+
	"and Action Text; the name for the object being interacted with and the action name shown to the player respectively."+
	"<br>"+
	"<br>"+
	"This demo included some collisons that alteres transparency, so the doors would vanish as the player approached, simple really! But this ensures that our GUI was all firing to plan before we spent "+
	"time crafting in all the detail! This was a fantastic little project in creating our own spooky interactive dungeon! Great work today "+CHILDNAME+"!"
	
	wallRunner = "<p class = 'debrief'>today "+CHILDNAME+" completed another Roblox game using multiple concepts to make a super fun game teaching lots of stuff!"+
	"<br>"+
	"<br>"+
	"Wall Runner is a game used in the popular Fall Guys set of games where a bunch of rows of doors are spawned in and then the game randomly selects doors to lock and doors to open! It's then up to the player "+
	"to run through the walls and find out which ones are locked and which are unlocked. In fall guys it is a big race so you have to get lucky to find the correct doors or other players will overtake you as you "+
	"struggle to locate the unlocked doors! In our game we will have a zombie chase the player as they run through to add some urgency to the game!"+
	"<br>"+
	"<br>"+
	CHILDNAME+" started today by creating the setting for the game and adding in all the different parts for our 'doors'. These doors where then placed in folders based on what row they are in. There are 5 doors on row 1, "+
	"so we make sure to create a folder called 'Row 1' and add the 5 doors into it. Roblox folders are incredibly useful when coding as "+CHILDNAME+" can easily select all the parts in them. "+CHILDNAME+" once we have every folder "+
	"for every row, we make a final folder and place all the other folders in that last one, folderception! Now onto the code!"+
	"<br>"+
	"<br>"+
	"Firstly we need to select each row folder, so we run a for loop inside the main folder that contains them all. Then we need to select each part inside the folders, so we run another for loop! A for loop in a for loop is called "+
	"a 'Nested' loop. Then we create a random number based on the size of the selected folder (how many doors are inside that row) and use this random number to select one of the doors at random, we then make this door unlocked! "+
	"For more fun "+CHILDNAME+" also wanted to randomise every walls colour to make it look super cool! Finally, "+CHILDNAME+" added in a zombie and increased its speed to just below the players, so they can outrun it unless they "+
	"hit too many locked doors!"+
	"<br>"+
	"<br>"+
	"Great work today "+CHILDNAME+" you're doing great with all these games in Blue Belt!"

	holeInTheWall = "<p class = 'debrief'>Today we designed a casual game that you can quickly play at any time to have some fun or test some skills. Get ready for a challenge "+CHILDNAME+"!"+
	"<br>"+
	"<br>"+
	"Hole In The Wall is a fun new game that will test our Create Studio and LUA kills to run, jump, and survive! The gameplay is simple, yet offers a good challenge. When a moving wall approaches, "+
	"find an opening, and run through it. Our players have to be alert since walls can come from any direction, and some walls have dangerous moving parts and gizmos! We can even expand this concept "+
	"to earn experience, coins, and gems by playing the game, levelling up, and completing quests. Use your rewards to buy cool stuff from our store or game pass!"+
	"<br>"+
	"<br>"+
	"All great projects start with one part! "+CHILDNAME+"'s happened to be our ‘safe zone’ next to the spawnpoint, then another long piece to the left and finally a small piece above the end of the "+
	"long one! The longest piece was a custom scripting Conveyor and had to strongly push you back into the playerArea!"+
	"<br>"+
	"<br>"+
	"We added a GUI and then a textLabel placed centre screen for alerts - Now it's time to make those walls! We had to remember how to Union & Negate, the goal was to make these walls as weird "+
	"and wacky as you can whilst ensuring we had at least 5 options for some varied gameplay!"+
	"<br>"+
	"<br>"+
	"Well done today "+CHILDNAME+"! We had super great designed based session today! Really getting to deep dive into the most popular Create Studio projects of the year! Fantastic Job!"
	
	zombieFootball = "<p class = 'debrief'>Today "+CHILDNAME+" started on a football game with a twist!"+
	"<br>"+
	"<br>"+
	"In Zombies United, instead of football we use zombies!	First of all we started off by making a tool in our starter pack, this way everyone who spawns into this game will already "+
	"have the special tool we need. We can then go into the tools properties and untick the requires handle selection, this means that we dont need to necessarily hold an object inorder "+
	"for it to work."+
	"<br>"+
	"<br>"+
	CHILDNAME+ " then added a local script to our object, in here "+heshe+" started off by finding our mouse position which we need to kick in the right direction! The next step was to "+
	"make our kick function, we started off by saying that when the function was run, we’d make a new 'BodyVelocity' and name it PushForce. We can then set the force that we want to act upon it! "+
	"<br>"+
	"<br>"+
	"Since we already located the position of the mouse on the screen we use its Vector3 property and add a force to the zombie along that direction! "+CHILDNAME+" then made "+hisher+" own mini stadium "+
	"with goals to push the zombies into! Great work today using pushforce which we are going to be using much more soon to move objects around the roblox arena!"
	
	moonLander2pt1 = "<p class = 'debrief'>This new project is all about the structure and scripting to make an airborne vessel! This base idea has been extremely popularised throughout the past year "+
	"in the Roblox Community! Creating this base allows us to customize our own plane and fly it around the world, charter other players/ passengers to different parts of the game world or create "+
	"a competitive game from it!  "+
	"<br>"+
	"<br>"+
	"We essentially script a ‘Seat’ which will act as our vehicles control centre. This allows us to sculpt, mold and design any shape we’d like our vehicle to be! It can be a Passenger Jet, TIE Fighter, "+
	"X-Wing Starfighter or even a flying Carpet! This task will test our LUA coding skills and 3D design to the max!"+
	"<br>"+
	"<br>"+	
	"So our new aim was to fly to the moon with BodyForce and a custom spaceship with the RigEdit Lite plugin! Any great project started with some focused modelling, "+CHILDNAME+" created and amazing "+
	"“......” - with a lovely captains Seat ready to code and some landing equipment. "+
	"<br>"+
	"<br>"+
	"With an assortment of new plugins, joints and anchors, "+CHILDNAME+" inserted a script that will make our buttons appear once we sit on the pilot seat! This script is inside the player, so we "+
	"simply want to check when the player is seated. When they are, enable the buttons! "+
	"<br>"+
	"<br>"+
	"To truly set the project in motion we had to set a launchpad. So we moved the SpaceShip & Spawn point to high above the ground and ready for our test flight soon! Great work "+CHILDNAME+"!"
	
	moonLander2pt2 = "<p class = 'debrief'>Well done today "+CHILDNAME+"! You have finished all of this massive challenge leaving only one game to go before booting up Unity!"+
	"<br>"+
	"<br>"+
	"In this challenge we have already created one button that simply moves the ship model upwards, but thats not useful! As we saw throughout the project, precise movements would be needed "+
	"to land safely! "+CHILDNAME+" firstly added all of the respective movements, up down forward backwards… and then we had a fantastic button based control system! This way we could feel like a real astronaut!"+
	"<br>"+
	"<br>"+
	"Whenever the player would sit in the pilots seat, the buttons would all display on our screens, and when we hopped off they would disappear! This gives a great way of decluttering our screen with "+
	"buttons but mainly tries to overwhelm the player with options when the sit in the cockpit, as a real spaceship should!"+
	"<br>"+
	"<br>"+
	"What good is a moon lander without a moon! "+CHILDNAME+" then of course made the moon using our terrain editor from before! This time we focused on creating more craters and steep cliffs to make "+
	"for a treacherous way down to the surface. Once this was finished "+CHILDNAME+" coloured in all of the terrain to not be green grass (of course!) and instead to be grey moon dust everywhere with "+
	"grey/black boulders dotted around."+
	"<br>"+
	"<br>"+
	"Great work today +CHILDNAME+, I hoped you loved being an astronaut for a day in your very own Roblox project!"

	unityGettingStart = "<p class = 'debrief'>Today "+CHILDNAME+" started "+hisher+" journey with the Unity Engine and scripting in C#! Unity is an industry standard toolkit used by professional "+
	"game developers, Hollywood visual effects artists and cutting edge architects! "+
	"<br>"+
	"<br>"+
	"We also got introduced to GitHub which is an extremely useful tool for developers and from now until Black Belt, it will be the place where all of our Games saves, projects, assets will be "+
	"stored and accessed from! I broke down the basics of how to clone our admin repository and how to push and pull any changes from our database on to the PC "+HESHE+" is using at the time"+
	"<br>"+
	"<br>"+
	"Now that "+CHILDNAME+" has an understanding of what the Unity Engine is, let’s get our hands on it! We broke down and explored several tabs and ways to navigate this new environment. "+
	"In JavaScript (White, Yellow, Orange to Green Belt) we used the Game Scene! In Roblox’s Create Studio with LUA (Blue Belt and the start of Purple) we can see everything in our Workspace! "+
	"But in Unity, we utilise the Hierarchy, Project Box, Game Scene and the Inspector Tab. The majority of these elements will be familiar from Roblox coding in Blue Belt as that laid the foundation "+
	"of "+HISHER+" abilities to hit the ground running with this software."+
	"<br>"+
	"<br>"+
	"Now that we’ve explored the basics, next session we will be jumping right in to begin our first ever Unity project!"

	droppingBombs1 = "<p class = 'debrief'>Our first Unity game will be an awesome project which will have our player rocket dodge falling bombs and we zoom innto the sky trying to get the best high score!"+
	"<br>"+
	"<br>"+
	"This project will be broken down into approachable chunks with limited exposure to C# scripting as "+CHILDNAME+" builds their confidence with this new software. In this first part we focused on the "+
	"game design by rigging together our game camera appropriately and creating the 3D models that will work as our Rocket and Bombs. "+
	"<br>"+
	"<br>"+
	"We next imported several C# scripts into the project box ready to wire up to our objects to allocate movement to our player and a spawning function for our enemies. Then "+CHILDNAME+" "+
	"attached a Rigidbody component to the Bomb so that it is affected by physics, the most important of which being gravity! After all, we want our bombs dropping! This is where some great "+
	"creativity can come in as "+HESHE+" messed around with these new 3D objects affected by physics and ctransformed their properties to take all manner of shapes ans sizes as they fall from the sky!"+
	"<br>"+
	"<br>"+
	"Next session we will be exploring the next step of Unity fundamentals as we implement them into the Dropping Bombs project!"

	
	droppingBombs2 = "<p class = 'debrief'>On the surface, "+CHILDNAME+"‘s new project is pretty simple; we need to make a rocket capable of flying into outer space! On your journey through the clouds "+
	"there will be various bombs being dropped by unknown enemies we need to avoid. But under the hood there are many intricacies!"+
	"<br>"+
	"<br>"+
	"In our next step we created material for our game objects, a material containing information about the lighting, texture, and colour of an object. We create them in Unity and apply them to 3D objects "+
	"such as our player and bombs! We had a go at messing around with the material until "+HESHE+" was happy with it! We then repeated this technique and forged new materials for our bombs too. Our game "+
	"background was in dire need of an upgrade too so we added some sky and cloud textures for that extra pizazz!"+
	"<br>"+
	"<br>"+
	"We next leveled up our skills by incorporating prefabs! Prefabs are a way of storing fully made and scripted game objects to be saved in the Project for reuse. They can be shared between scenes, "+
	"or even between projects, without having to be made again which makes them incredibly useful for objects that will be used many times (similar to clones!) "+CHILDNAME+" rigged up a prefab for our Player "+
	"rocket and for our bombs, everything is coming together and its started to visually take the appearance of a video game now rather than a tech demo!"+
	"<br>"+
	"<br>"+
	"After a pay test everything was working! We could add more bombs into our Heirachy and play it to see if it's too difficult or too easy. The Sensei team enjoyed playing through this new challenge too! "
	
	droppingBombs3 = "<p class = 'debrief'>In the next step of our Unity journey, "+CHILDNAME+" created some custom animations. Animation plays a very important role in video games! The animation can decide the "+
	"feeling of a project and can help translate what the player would like to do in the world as well as help support the story! "+
	"<br>"+
	"<br>"+
	"Our first animation will be for our Rocket flying Left. To do this we altered a rotation property to the object's animation timeline, to achieve this "+HESHE+" set the Rockets Z axis to 20! This tells Unity "+
	"that when we’re flying left, we want our rocket to be rotated by 20 degrees around the Z axis, creating the left tilt! "+CHILDNAME+" then repeated this technique to create for the other movements. "+
	"<br>"+
	"<br>"+
	"Once all 3 of our animations have been created, we need to link them all together so each one plays at the correct time depending on what the rocket is doing! We then trigger these new parameters using a "+
	"BlendTree. This will basically blend between two or more similar motions so our Rocket movement is smooth!"+
	"<br>"+
	"<br>"+
	"After connecting these new movements with some pre-made script, our Rocket was now lifting off and gliding through the air superbly. Awesome work!"

	droppingBombs4 = "<p class = 'debrief'>At the moment we can move the rocket, but there appears like nothing is powering our momentum and when we hit a bomb the game just stops! BOOOOO, let’s fix that today! "+
	"We will start by using Particle Systems in our game to give the rocket thrust, fire and smoke so that it looks more realistic!"+
	"<br>"+
	"<br>"+
	"When "+CHILDNAME+" selects the Particle System, we are able to see the particles begin to move in their default state (which is very random!) Particles are emitted from a specific point and within a selected shape. "+
	"For our Rocket’s thrust, we want the particles to emit downwards from the booster in a cone shape! By adjusting ‘Start Lifetime’ this will change the length of the thrust and altering ‘Start Speed’ will change how "+
	"dense the thrust is, this is just a few of the values we customised today. "+
	"<br>"+
	"<br>"+
	"No flame is complete without smoke though, so import the Smoke unity package! Find the new ‘Smoke’ Prefab and then drag it onto our existing flames particle system"+
	"<br>"+
	"<br>"+
	"Import the Explosion unity package! This will add all the parts for our explosion It will also update our Reset script so that it spawns an explosion and creates a delay before the scene restarts. Great work today "+CHILDNAME+"!"
	
	droppingBombs5 = "<p class = 'debrief'>UI stands for User Interface and allows the player and the game to interact with each other through text, buttons and other objects! It is mostly used for making "+
	"in-game menus, as well as for any type of game overlay. Think of the inventory menu in Fortnite and Minecraft, they display and allow us to interact with in-game items!"+
	"<br>"+
	"<br>"+
	"A well designed UI can allow us to make buttons that users can interact with to navigate our project properly and is the difference between a well made game and a rushed one!"+
	"<br>"+
	"<br>"+
	"Today "+CHILDNAME+" used a canvas, which is the area that holds and displays all of the UI elements in the game, to create their own title screen and start game button! "+HESHE+" added an image element "+
	"which was the background for the title screen, and then a button element which, when clicked, begins the now fully finished game! Brilliant work "+CHILDNAME+" finishing your first Unity project today!"
	
	stack1 = "<p class = 'debrief'>"+CHILDNAME+" started a new 3D project today called Stack! This is based on a hit game which was released on the IOS and Android app stores. "+HESHE+" began by creating a "+
	"game object called View, which we used to set up the camera and lighting for our game. After setting up our game view, "+heshe+" added in a block and edited its size to look like a ‘Stack’ block. Finally, "+
	"to finish off the design of our block, "+CHILDNAME+" created a material, changing its colour and other properties which we added to our block."+
	"<br>"+
	"<br>"+
	"After adding our scripts to the block, "+heshe+" dragged it into the assets folder to create a prefab which we will later use to spawn blocks during gameplay. We then created a starting block which "+
	"would act as the start of our tower! Using our knowledge from the last part of Dropping Bombs, "+heshe+" used ‘Text’ UI elements to display the score and ‘Press R to restart’. "+
	"<br>"+
	"<br>"+
	"After setting up the "+
	"basics of our game view, "+CHILDNAME+" then added in a block, this will be the first block that we need to stack. We set it up as a rigidbody that would have movement before duplicating it and naming "+
	"the next one starting block, this will be the starting block that we have to match the blocks position too in order to gain points, only this part we’ll set the movement to 0 so it’ll stay in one place!"+
	"<br>"+
	"<br>"+
	"Lastly we can add empty gameobjects to our scene, naming them UIManager and Spawner assigning the corresponding scripts to them! Great work today "+CHILDNAME+", next session we will begin scripting in C# "+
	"and learning how to spawn our block prefabs which we have already created!!"+
	"<br>"+
	"<br>"+
	"Next session we will begin scripting in C# and learning how to spawn our block prefabs which we have already created. Awesome work today "+CHILDNAME+"!"
	
	stack2 = "<p class = 'debrief'>languages but C# is known to be a bit more complicated for example, in C# Just like JavaScript & LUA, variables can hold specific values or objects, but we now have to specify "+
	"the ‘type’ of a variable. The 5 main types are integers(whole numbers e.g. 3, 5), Float(decimal numbers e.g 0.5, 4.7), Characters(single letters e.g. a, x), strings(a string of characters e.g. house, abc) "+
	"and Boolean(like a switch it can only be two ways, e.g. true or false)."+
	"<br>"+
	"<br>"+
	CHILDNAME+ " had a look at writing the code for our GameManager script, A major part of this was using Methods! Methods are sections of code that can be called and run in numerous ways. - ‘Start’ will run "+
	"at the beginning of the game (Similar to Initialise When Scene Starts in JavaScript) - ‘Update’ will run every frame (Similar to Update Every Frame in JavaScript). Our next new skill was defining whether "+
	"variables are public or private, when we make something public it can be edited without having to be changed in the script."+
	"<br>"+
	"<br>"+
	"We used our code to check whether our mouse had been pressed, if it had and the game wasn’t over we would stop the BlockMovement of the currentBlock. We would then run another if statement to check whether "+
	"the block was in a suitable place, if it wasn’t then our block movement would set itself to game over so we could stop the game, if not we would spawn a new block in making sure its height had increased and "+
	"adding 1 to our score! Great work today "+CHILDNAME+" and really well done on your first C# code the more we go over it the easier it will get!!"

	SketchHead50 = "<p class = 'debrief'>Today "+CHILDNAME+" started working on Sketch Head! This is a recreation of one of my favourite mobile games of all time, Doodle Jump!!"+
	"<br>"+
	"<br>"+
	"We started off by making a 2D template and downloading some preset assets into it. The first asset we used was the background, we dragged it into the Main Camera so it would become a child of it, before also "+
	"getting our player SketchHead. "+
	"<br>"+
	"<br>"+
	"Once "+CHILDNAME+" set these up so the correct one would be in front "+heshe+" then used a 2D rigid body and box collider, this allowed us to set the gravity and to detect hitbox collisions, we also used the box "+
	"collider in our platforms as well as a platform effector to create one way collision. "+
	"<br>"+
	"<br>"+
	"The next step was to start our player controller script. "+CHILDNAME+" started off by making two public float variables for our moveSpeed and jumpForce, before moving onto a private variable to define our "+
	"rigidbody (this allows us to access the SketchHead through the script). Then we made a start method that is similar to functions that run when the game starts from white - Green Belt, in this we attached our "+
	"rigidbody to our script!"+
	"<br>"+
	"<br>"+
	"Thats a great platform we have set up in this lesson so in the next lesson we can script the doodlehead to move up the platforms - as so far we have added in all the objects and linked all our scripts, we just "+
	"need to code it! Great work "+CHILDNAME+"!"
	
	SketchHeadSecond50 = "<p class = 'debrief'>Last lesson "+CHILDNAME+" completed all the setup and linked our script to all the objects, so today we got straight into coding this script!"+
	"<br>"+
	"<br>"+
	"To start, we used a FixedUpdate method, this is similar to the update method from earlier belts that runs constantly at set intervals. In unity we made the left arrow cause a value of -1 while the right arrow "+
	"gives +1 in the horizontal axis, this can then be used to calculate our movement and then we stored it in a float (thats a number variable)! "+
	"<br>"+
	"<br>"+
	"We lastly looked at an onCollisionEnter2D method which runs when our player object touches the top side of the platform. We firstly checked to see if our character was currently moving downwards "+
	"to touch the platform, if true then it'll add some jump force to give us more power!"+
	"<br>"+
	"<br>"+
	"Finally we simply added the scripts into the objects that needed them and Voila! Doodle Jump!! Great work today "+CHILDNAME+", only one more game to go!!!!"

	SketchHeadFULL = "<p class = 'debrief'>Today "+CHILDNAME+" started working on Sketch Head! This is a recreation of one of my favourite mobile games of all time, Doodle Jump!!"+
	"<br>"+
	"<br>"+
	"We started off by making a 2D template and downloading some preset assets into it. The first asset we used was the background, we dragged it into the Main Camera so it would become a child of it, before also "+
	"getting our player SketchHead. "+
	"<br>"+
	"<br>"+
	"Once "+CHILDNAME+" set these up so the correct one would be in front "+heshe+" then used a 2D rigid body and box collider, this allowed us to set the gravity and to detect hitbox collisions, we also used the box collider "+
	"in our platforms as well as a platform effector to create one way collision. "+
	"<br>"+
	"<br>"+
	"The next step was to start our player controller script. "+CHILDNAME+" started off by making two public float variables for our moveSpeed and jumpForce, before moving onto a private variable to define our rigidbody "+
	"(this allows us to access the SketchHead through the script). Then we made a start method that is similar to functions that run when the game starts from white - Green Belt, in this we attached our rigidbody to our script!"+
	"<br>"+
	"<br>"+
	"Next we made a FixedUpdate method, this is similar to the update method from earlier belts that runs constantly at set intervals. In unity we made the left arrow cause a value of -1 while the right arrow gives +1 "+
	"in the horizontal axis, this can then be used to calculate our movement and then we stored it in a float (thats a number variable)! "+
	"<br>"+
	"<br>"+
	"We lastly looked at an onCollisionEnter2D method which runs when our player object touches the top side of the platform. We firstly checked to see if our character was currently moving downwards to touch the "+
	"platform, if true then it'll add some jump force to give us more power!"+
	"<br>"+
	"<br>"+
	"Finally we simply added the scripts into the objects that needed them and Voila! Doodle Jump!! Great work today "+CHILDNAME+", only one more game to go!!!!"
	
	MeanyBirdFirstHalf = "<p class = 'debrief'>"+CHILDNAME+" today Started the final project of purple belt – Meany bird! This is like the an old orange belt game – Flying Ninja, AKA Flappy Bird! "+
	"<br>"+
	"<br>"+
	"Firstly, we added our player (bird) object to our scene and then began scripting its movement! First we made references to all of our gameObjects that we needed to control our player. We added a Rigidbody to "+
	"our player, which gives it a mass and allows gravity to work on it, which automatically means our bird’s vertical velocity will be negative and will move down!"+
	"<br>"+
	"<br>"+
	"When the left mouse button event is triggered, the vertical velocity of our rigidbody is increased so the bird moves up before the gravity that we made takes over and begins to pull our rigidbody back "+
	"down to earth! This is a lot of setup here and linking of objects and scripts just to get a body moving up with the mouse and down with gravity in an empty scene!"+
	"<br>"+
	"<br>"+
	"Great work on all this setup today "+CHILDNAME+", lets try and finish off Purple Belt next session!"

	MeanyBirdSecondHalf = "<p class = 'debrief'>CONGRATULATIONS "+CHILDNAME+"! In the last lesson we set up and coded our bird to fly in an empty scene, but now we then need to fill out the scene! "+
	"<br>"+
	"<br>"+
	CHILDNAME+ " learned a new function called InvokeRepeating which continously repeats the function we then created for Instantiating (cloning) some spike objects which our player will continue to fly through!"+
	"<br>"+
	"<br>"+
	"We then used two more Unity events called OnTriggerEnter and OnCollisionEnter which run when a collision occurs. When our player moves through the spike objects, our score is incremented, and when the spikes "+
	"are touched, we reference the GameManager object and its script which runs a GameOver function :(. This function disables the spawner object and its script, stops the movement of our player and sets the "+
	"gameOverCanvas to active! We also created a function for deleting the spikes after 8 seconds so they don’t cause any extra lag as i nice bit of polish on our game!"+
	"<br>"+
	"<br>"+
	"Amazing work today "+CHILDNAME+" and congratulations on your Brown Belt! Look how far you have come! "
	

	MeanyBirdFull = "<p class = 'debrief'>"+CHILDNAME+" Started the final project of purple belt – Meany bird! This is like the an old orange belt game – Flying Ninja, AKA Flappy Bird! "+
	"<br>"+
	"<br>"+
	"Firstly, we added our player (bird) object to our scene and then began scripting its movement! First we made references to all of our gameObjects that we needed to control our player. We added a Rigidbody to "+
	"our player, which gives it a mass and allows gravity to work on it, which automatically means our bird’s vertical velocity will be negative and will move down!"+
	"<br>"+
	"<br>"+
	"When the left mouse button event is triggered, the vertical velocity of our rigidbody is increased so the bird moves up before the gravity that we made takes over and begins to pull our rigidbody back down to "+
	"earth! This is a lot of setup here and linking of objects and scripts just to get a body moving up with the mouse and down with gravity in an empty scene!"+
	"<br>"+
	"<br>"+
	"We then need to fill out the scene! "+CHILDNAME+" learned a new function called InvokeRepeating which continously repeats the function we then created for Instantiating (cloning) some spike objects which our "+
	"player will continue to fly through!"+
	"<br>"+
	"<br>"+
	"We then used two more Unity events called OnTriggerEnter and OnCollisionEnter which run when a collision occurs. When our player moves through the spike objects, our score is incremented, and when the spikes "+
	"are touched, we reference the GameManager object and its script which runs a GameOver function :(. This function disables the spawner object and its script, stops the movement of our player and sets the "+
	"gameOverCanvas to active! We also created a function for deleting the spikes after 8 seconds so they don’t cause any extra lag as i nice bit of polish on our game!"+
	"<br>"+
	"<br>"+
	"Amazing work today "+CHILDNAME+" and congratulations on your Brown Belt! Look how far you have come! "

	polyRun1 = "<p class = 'debrief'>First of all, well done to "+CHILDNAME+" for all of "+hisher+" hard work and perseverance and welcome to Brown Belt! "+CHILDNAME+" will be introduced to more complicated scripting "+
	"in this belt, including using harder maths concepts such as trigonometry! "+CHILDNAME+" has already settled into the more independent style of coding and navigating the editor this session, and it’s great to see "+
	"how comfortable "+heshe+" is getting with Unity and coding in C#! "+
	"<br>"+
	"<br>"+
	CHILDNAME+" began creating a game called PolyRun this session, based on the very popular game geometry dash! "+heshe+" learned about using tags to identify groups of objects to reference them within "+hisher+" scripts"+
	", such as a tag called ‘Enemy’ to group all of the enemies together. "+
	"<br>"+
	"<br>"+
	"Amazing work today "+CHILDNAME+", we can’t wait to see what you will achieve as you progress through Brown Belt!"
	
	
	polyRun2 = "<p class = 'debrief'>Today "+CHILDNAME+" jumped right back into "+hisher+" PolyRun game and began scripting! "+heshe+" created a script for controlling our player. Using the player’s rigidbody, "+CHILDNAME+" changed "+
	"the velocity of "+hisher+" player by using the AddForce() method. "+heshe+" also used different collision methods to determine whether the player was on the ground or jumping. "+
	"<br>"+
	"<br>"+
	CHILDNAME+ " also learned about triggers today. Trigger methods will only check for collision if it collides with a trigger, so we used this to check for collisions with pickups such as coins! "+
	"<br>"+
	"<br>"+
	CHILDNAME+ " did a lot of scripting today, so well amazing job and well done for keeping focus throughout! See you soon!"
	
	
	polyRun3 = "<p class = 'debrief'>"+CHILDNAME+" has continued with "+hisher+" Poly Run project today and began scripting the Spawner which will spawn all of the game objects that the player has to jump over and avoid! "+
	"The Spawner script keeps track of all of the currently active objects using a List since, unlike an array, its size can be changed after initialization. "+CHILDNAME+" had to calculate the amount "+heshe+" would move "+
	"the object by and stored this as a vector! "+
	"<br>"+
	"<br>"+
	"He then learned how to use a ‘foreach’ loop to go through every object inside the list "+heshe+" made and then move it by the vector "+heshe+" created! Based on this, "+CHILDNAME+" then updated "+hisher+" score based on how "+
	"far we’ve moved!"+
	"<br>"+
	"<br>"+
	"Awesome work today "+CHILDNAME+" and well done for picking up on the new concepts so quickly! "
	
	
	polyRun4half = "<p class = 'debrief'>Today "+CHILDNAME+" carried on with "+hisher+" poly game on unity, this time "+heshe+" added a canvas prefab to "+hisher+" game which will contain all of the UI elements for the game over "+
	"screen."+
	"<br>"+
	"<br>"+
	"He then began with scripting a UI manager! For this, "+heshe+" learned how to import libraries that we can use to add functionality to our UI, and to condense "+hisher+" code! "+
	"<br>"+
	"<br>"+
	"Moreover, "+heshe+" began scripting "+hisher+" game object which will store the game UI elements which will allow "+himher+" to change them inside the script while the game is running!"+
	"<br>"+
	"<br>"+
	"I’m super impressed with how "+hisher+" understanding and knowledge are coming along, "+heshe+" has been working more and more independently allowing "+hisher+" debugging and problem-solving skills to develop more. "+
	"Great work "+CHILDNAME+", see you next week!!"

	polyRun4secondhalf = "<p class = 'debrief'>"+CHILDNAME+" continued with scripting "+hisher+" UI element management. In our Unity Start() function, we coded whether certain UI elements should be active or inactive. "+
	"To do this, we used SetActive(true) or SetActive(false). At the start of "+CHILDNAME+"’s game, "+heshe+" wants the main menu UI elements to show. Once it has ended, the game over menu should pop up."+
	"<br>"+
	"<br>"+
	CHILDNAME+ " also learned about PlayerPrefs today. This is mainly used to store a player’s settings and preferences even while the game is closed (such as volume, graphics), but in this case we used it to "+
	"store and access the player’s high score! "+
	"<br>"+
	"<br>"+
	CHILDNAME+ " then coded the score’s text to be updated from the GameManager every frame (inside our Update() function) and used the ToString method so that it is correctly displayed."+
	"<br>"+
	"<br>"+
	"Well done today "+CHILDNAME+"!"
	
	polyRun5 = "<p class = 'debrief'>Today "+CHILDNAME+" was finishing off "+hisher+" PolyRun project! No game is complete without some more cool animations, particle effects, and a fully functional UI!"+
	"<br>"+
	"<br>"+
	"First of all, we selected the UIManager object which already contains the Main Menu and Game Over screen as well as the UIManager script. One of "+CHILDNAME+"'s main tasks was to assign the methods we coded previously "+
	"to their respective buttons, this allowed "+CHILDNAME+" to start the game when "+heshe+" pressed the Play button on the main menu! Moreover, "+CHILDNAME+" could now restart "+hisher+" game with a button after the "+
	"‘Game Over’ message appears at the end!"+
	"<br>"+
	"<br>"+
	"We then had a look at animating some coins throughout the game, we had a go at editing the coins prefab using our animation panel to make it spin! We haven’t had a look at animations in quite some time so this was "+
	"a good refresher of how everything worked. "+CHILDNAME+" also created some particle effects for when "+heshe+" jumps over the obstacles. This gives the game an extra sparkle and is an important aspect when designing games "+
	"aimed at different audiences. "+
	"<br>"+
	"<br>"+
	CHILDNAME+"'s progress has been amazing to see throughout this Unity project, and "+heshe+" has learned a lot of new concepts that "+heshe+" will be able to use in many future projects (even outside of Unity!)"

	cloudHop1 = "<p class = 'debrief'>Today "+CHILDNAME+" coded our character to be able to jump! At first, our character could jump endlessly, even if they weren’t touching the ground, so we had to change this! "+CHILDNAME+" used "+
	"a boolean called canJump, which is true when the player is touching the ground, and false when it is already in the air. This ensured that the player would only jump when touching the ground!"+
	"<br>"+
	"<br>"+
	CHILDNAME+" also started coding our cloud platforms which "+hisher+" player will be hopping to and from! "+heshe+" added a Particle System to each cloud so that a trail of white would come out of the bottom! "+
	"Finally, "+heshe+" added a mountain background to "+hisher+" game!"+
	"<br>"+
	"<br>"+
	"Awesome work today "+CHILDNAME+", we can’t wait to see the finished product of your Cloud Hop game!"

	cloudHop2 = "<p class = 'debrief'>Today "+CHILDNAME+" finished off the rest of cloud hop! This game was similar to the Purple Belt Sketch Head game however there is much more code to complete and less of the "+
	"game has been premade!"+
	"<br>"+
	"<br>"+
	"The main bit of code that had to be input here that was already used in the Sketch Head files was a major piece of code to use a while loop on a delay which would make all of our cloud particles disappear "+
	"over time. We do this by adjusting their ‘ALPHA’ value, which is their transparency in unity terms!"+
	"<br>"+
	"<br>"+
	"Finally we made the game look super cool by adding in particles to each of the cloud objects and linking them up to look like realistic fluffy clouds that can be hopped onto! Just dont stay too long or they "+
	"disappear and you lose! Great work "+CHILDNAME+" :)"
	
	
	JungleRun1 = "<p class = 'debrief'>We next will be developing a 3D endless running video game inspired by one of the most popular apps of the decade! We will have to control our player who has obtained an "+
	"ancient relic and make our escape past the creepiest of crawlies!"+
	"<br>"+
	"<br>"+
	CHILDNAME+" began by creating a new Skybox material and dragged it into the Scene, this mimicked a beautiful starry night sky to serve as our backdrop. We also manipulated the directional light, intensity "+
	"and shadow light to get the atmosphere just right!"+
	"<br>"+
	"<br>"+
	"Whilst our player character had a movement script we cannot jump yet, so we had to switch our brains on to script it! "+CHILDNAME+" began by adding some floats which will control our jump, including the force, "+
	"which determines how fast we will fall and when the game will register that we are touching the ground. "+
	"<br>"+
	"<br>"+
	"Then "+heshe+"  had to create a LayerMask object. Layers are used to sort GameObjects inside the scene. In this case, we will be using this to track which GameObjects will be registered as ground. Our private "+
	"variables were used to access our Player’s Rigidbody and a boolean to check whether our player is on the ground. "+
	"<br>"+
	"<br>"+
	"We then revisited the concept of Raycasts! These cast a virtual ray onto the world. A ray is a line with a start position, direction and length. In this case, we are creating a RAY with a start position "+
	"of our player, a direction of down, a distance of our threshold (0.005) and will check for collisions with the layers in our LayerMask. This will only return true if our player is touching the ground (is "+
	"within 0.005 of the ground)."+
	"<br>"+
	"<br>"+
	"So, if our player is on the ground and we press jump, we apply the jump force. If our player’s y velocity is negative (we are moving back towards the ground) we add a multiple of GRAVITY so our downwards "+
	"movement gradually increases. If we are on the ground, we want our particle trail to show, otherwise we don’t. Finally, IF our player’s position goes too low (under the ground), we will end the game. Awesome "+
	"work "+CHILDNAME+"!"

	JungleRun2 = "<p class = 'debrief'>This session we had to keep our cardio up in the Jungle! Last time we created all of our player collisions and platform generation to forge our infinite style of gameplay! "+
	"Now we started to make our collectables functional, alongside a spawning system and a menu UI to cap this section off very nicely!"+
	"<br>"+
	"<br>"+
	HESHE+" first created an OnTriggerEnter method for checking for collisions with our Coins, which have triggers (like in PolyRun!)If the trigger we collided with was a coin, let’s add 1 to our score and make "+
	"the coin inactive so we can’t collect it again. Our next variable was created at the top to store our ‘poof’ particles, it was then called inside of our if statement we made earlier, this allowed poof.Play() "+
	"to start the particle system!"+
	"<br>"+
	"<br>"+
	"After playtesting this version we were able  to collect the coins however our score is not yet showing! We’ll add this in later with the UI! Our player’s animation looks a bit weird at the moment, so our "+
	"next goal was to play a Run animation when we’re grounded and the Jump animation when we’re not."+
	"<br>"+
	"<br>"+
	"To do this we used a new method  known as an Accessor - this allows attributes to be accessed from DIFFERENT scripts. The PRIVATE _isGrounded variable will be returned when the PUBLIC function is called."+
	"<br>"+
	"<br>"+
	CHILDNAME+ "used the new GetIsGrounded() accessor to check whether our Player is on the ground or not!Our animator has two boolean parameters - isRunning and isJumping - these control the animation. When we "+
	"are on the ground, we want isRunning to be true and isJumping to be false, and otherwise, the opposite!"+
	"<br>"+
	"<br>"+
	"Our Player now has some groovy movement so we have breathed some life into this project. Great work with all of these new concepts Ninja "+CHILDNAME+"!"

	JungleRun3 = "<p class = 'debrief'>To top off this mighty fine project we need some more psazz to make our game more interesting with more types of platforms and creepy crawlies that we have to avoid! "+
	"<br>"+
	"<br>"+
	"After adding in some more platform prefabs for variety and enemy bugs to avoid, then need a risk to reward system with player lives! "+CHILDNAME+".  We’ll start off by creating a private integer to "+
	"store our lives, and then create an Accessor (Getter) (like we did with our _isGrounded variable earlier) so we can access our lives from other scripts. "+
	"<br>"+
	"<br>"+
	"We also want to be able to change our lives’ value, so we will create a PUBLIC mutator function which allows us to CHANGE our PRIVATE variables. Our Mutator (Setter) will allow us to change our "+
	"lives value to the argument we pass into SetLives from other scripts!"+
	"<br>"+
	"<br>"+
	CHILDNAME+ " also created an OnCollisionEnter method so that when we collide with an object that has an “Enemy” tag, we lose a life. This portion of the script ended with the command that If we run "+
	"out of lives, then we will set GameOver to true as we have lost the game. Otherwise, we will Destroy the enemy we collided with so we don’t collide with it again!"+
	"<br>"+
	"<br>"+
	"To add the final bits of flourish to this amazing project, "+CHILDNAME+" added in a powerup state after our player has collected 10 coins in a row and it will give us a free hit! To communicate this upgraded "+
	"state to the player, our player model swapped out to feature a golden trim and a trail of golden sparkles followed behind. Amazing work today, this was truly a big technical step up in Brown Belt!"
	
}