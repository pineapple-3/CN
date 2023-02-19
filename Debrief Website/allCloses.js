function getGendersForClose(){
	CHILDNAME=document.getElementById("childName").value;
	var gender = document.getElementById("gender").value;
    var game = "_______"
	var belt = document.getElementById("belt").value;
	if (gender == "Male"){
		HESHE="He"
		heshe="he"
		HISHER="His"
		hisher="his"
		HIMHER="Him"
		himher="him"
	}
	if (gender == "Female"){
		HESHE="She"
		heshe="she"
		HISHER="Her"
		hisher="her"
		HIMHER="Her"
		himher="her"
	}
	if (gender == "They"){
		HESHE = "They"
		heshe = "they"
		HISHER = "Their"
		hisher = "their"
		HISHER="Them"
		himher="them"
	}

	close34D="<p class ='debrief'>"+CHILDNAME+" has done brilliantly today, "+heshe+" has been hardworking, focused and engaged all throughout "+hisher+" session, "+
	"we love to see our ninjas experiment with everything they do and "+CHILDNAME+" is a perfect example of this. Whenever "+heshe+"’s in "+heshe+" always has a look "+
	"at how "+heshe+" could change "+hisher+" game to make it work slightly differently, it's this curiosity that we hope to inspire in all of our ninjas. Great work "+
	"today "+CHILDNAME+", We look forward to seeing you next time!!"
	//creative kid

	close33D = "<p class ='debrief'>As usual "+CHILDNAME+" did brilliantly today as "+heshe+" worked through "+hisher+" ______ project! I got to sit with "+CHILDNAME+
	"for the majority of "+hisher+" lesson and "+heshe+" was always so engaged and polite with me whenever I would ask any questions or steer slightly off the "+
	"curriculum with "+himher+" to tackle the ______ project in a few different ways. Really well done today "+CHILDNAME+"! Looking forward to seeing you in next week!"
	//Small Close - Polite & Engaged


	close32D = "<p class='debrief'>It was fantastic to work with "+CHILDNAME+" today! "+HESHE+" has worked super hard and has (hopefully!) had a very fun time with us today. "+
	"I believe our curated system is really aiding "+CHILDNAME+" to develop as "+heshe+" is gliding through and picking up new knowledge and not even realising it! "+
	"<br>"+
	"<br>"+
	"After working together and giving a brief of what new things we’ll be covering today, I was thoroughly impressed with "+hisher+" understanding of the inner workings "+
	"and how quickly "+heshe+" fixed any debugging mistakes. Well done today to "+CHILDNAME+", you should be very proud, I look forward to seeing you next week!! "+
	"~ Sensei___ "+
	"</p>"
	// hard work & picking up 


	close31D = "<p class='debrief'> "+CHILDNAME+" has done incredibly well this session, today’s game was quite different from what we’re used to. "+HESHE+" had to "+
	"import all the assets "+himher+" self as well as creating the custom script, earlier belts provided these elements. So for "+himher+" to become efficient with "+
	"this habit of creating project work is fantastic. "+
	"<br>"+
	"<br>"+
	" "+CHILDNAME+"‘s understanding is also constantly improving, "+heshe+" often likes to help other ninjas around "+himher+" with their games which is great to see. Teaching others"+
	"is the proven and most effective way to help retain yourself, It has always helped enforce any new concepts I’ve tried to pick up! The way "+CHILDNAME+" explains it, "+
	"clearly shows "+heshe+" has great understanding of not just the games, but the fundamental code behind them! "+
	"Brill work today "+CHILDNAME+", I look forward to seeing you next week!"+
	"~Sensei __ "+
	"</p>"
	// add in assets
	

	close30D = "<p class='debrief'> "+CHILDNAME+" did incredibly well at debugging "+hisher+" code today, there was a small error in "+hisher+" _____ originally, "+
	"but "+heshe+" went through "+hisher+" game working out where the game stopped working and found the spelling mistake that was preventing _________from running "+
	"smoothly. I was very impressed by the depth of "+CHILDNAME+"’s knowledge throughout today and it's clear to see "+hisher+" comprehension is getting better and "+
	"better each week, so very well done to "+CHILDNAME+"! It was fantastic to see you all today, and I look forward to seeing you next week! "+
	"~ Sensei___ "+
	"</p>"
	// Tricky debugging - simple 
	

	close29D = "<p class='debrief'>It was fantastic to see you all today! "+CHILDNAME+" ’s coding attainments are growing by the week! "+HESHE+" seems to "+
	"flourish with our clear learning trajectory as it provides set objectives and projects to be completed in order to progress. The team and I believe that "+
	"this cultivates the best environment for "+CHILDNAME+" to grow with a curated path and goal setting. You’ve probably already seen this ambition with the "+
	"drive to obtain a new ninja belt! "+
	"<br>"+
	"<br>"+
	"With this attitude and enthusiasm for tech, "+CHILDNAME+" is well and truly set upon the path to Black Belt! Have a great rest of your week and we will "+
	"see you in the dojo again very soon. "+
	"~Sensei ____ "+
	"</p>"
	//goal attainment
	
	
	close28D = "<p class='debrief'> "+CHILDNAME+" has been marvellous today, from "+hisher+" behaviour to "+hisher+" learning attitude. Having such a lovely "+
	"young ninja to develop and grow with us really bolsters the dojo as a whole. We couldn’t be happier to have "+CHILDNAME+" as part of our team! "+
	"<br>"+
	"<br>"+
	" "+HESHE+" demonstrates fantastic retention and adherence to good habit making for "+hisher+" age group! The more "+heshe+" learns with us, the more "+
	"things we would like to share, both within our curriculum and further outside of it. So it really is a win-win for us! We have the pleasure of spending "+
	"time with such a superstar and "+heshe+" hopefully becomes inspired and has a great time! See you next week! "+
	"~Sensei ___"+
	"</p>"
	//adherence & age group
	

	close27D = "<p class='debrief'>"+CHILDNAME+" has done amazing today! "+HESHE+" worked really hard and stayed focussed for the entire session. "+
	"When we went over some newer and more complex concepts "+heshe+" paid special attention to me as I was explaining ____________ through on the whiteboard "+
	"which showed great focus and respect from "+himher+"."+
	"<br>"+
	"<br>"+
	"As usual, it has been great to see "+CHILDNAME+" progress through "+hisher+" "+belt+" Belt as "+heshe+" continues to amaze us with "+hisher+" ability "+
	"to apply the concepts "+heshe+" learns into the projects! Fantastic work today, and we look forward to seeing "+CHILDNAME+" in "+hisher+" next session!" +
	"</p>"
	//paid attention as i explained ____



	close26D = "<p class='debrief'>After our curriculum work, me and "+CHILDNAME+" were experimenting and testing some new functions "+
	"in our game development program! It was great fun to go along with "+hisher+" new ideas, for example we can use the “Alert” function "+
	"which allowed "+himher+" to write up some text which would pop up as a notification upon starting "+hisher+" game! "+
	"<br>"+
	"When we switch up our learning time once the objectives are complete, it's fantastic to apply new techniques back into an older belt game "+
	"to add more depth. It has been great to see "+CHILDNAME+" show off "+hisher+" understanding of concepts already learned whilst leaping through "+
	"the challenges with such enthusiasm, I’m excited to help "+himher+" progress further! Well done "+CHILDNAME+". "+
	"~Sensei ____ "+
	"</p>"
	// experimenting
	
	
	close25D = "<p class='debrief'>Today "+CHILDNAME+" was dialled in with me and took full advantage of our coding session! "+HESHE+" "+
	"was not apathetic at all today and we were having fantastic alternating talks about varied technological topics, whilst being attentive "+
	"to our learning objectives. I never had to push or steer "+himher+" in the right direction as "+heshe+" was in full swing! "+
	"<br>"+
	"The team and I hope that "+CHILDNAME+" is really thriving and enjoying learning with us. We are all so proud of "+CHILDNAME+" "+
	"performance inside the dojo, "+heshe+" continuously demonstrates to us great application and eagerness to explore the wide world of STEM! "+
	"See you on the flip side superstars! "+
	"~Sensei ____ "+
	"</p>"
	// attention & eager short
	

	close24D = "<p class='debrief'>The projects undertaken today required some more preparation than usual. Whereas mostly, me and "+CHILDNAME+" "+
	"will go through the core principles together before taking a stab at piecing our next project together. This time we first tried to mind map "+
	"out our ideas at a demo stage first. Then, as we delve into creation, the ideas and tactics can grow from inspiration of our application. "+
	"<br>"+
	"Getting "+CHILDNAME+" to think in a wider scope of development stages and that these are projects and not just ‘games’ per se. Of course, "+
	"they are extremely fun and the finished product should be treated as such with much enjoyment. But, if we can successfully help "+CHILDNAME+" "+
	"to understand and breakdown the stages. The undertaking becomes a lot more manageable and less daunting, especially at the Orange and Green Belt level."+ 
	"<br>"+
	"This is the great next step in "+hisher+" journey and we are thrilled to see "+hisher+" analytical mind ticking away at all the possibilities. "+
	"Have a great rest of the day Ninja family, until next time! "+
	"~Sensei___ "+
	"</p>"
	// prep stages

	close23D = "<p class='debrief'>Young ninja master "+CHILDNAME+" came in relaxed and driven today, "+heshe+"  was ready to further delve into "+
	"the next unit of _______ Belt. "+HESHE+" is a very kind, polite and intelligent young __! Giving "+himher+" a way to harness all "+hisher+" "+
	"technical and creative thoughts has been an incredible thing for us to experience. The attentiveness and willingness to try shows us that "+
	" "+CHILDNAME+" can create a great future and follow a bright path if "+CHILDNAME+" continues to combine "+hisher+" talents with focus and "+
	"having a fun time in the dojo! "+
	"<br>"+
    "<br>"+
	"A great thing about working with "+CHILDNAME+" is that as much as we teach "+himher+", "+CHILDNAME+" is also teaching us! As "+heshe+" has "+
	"made progress with us, we learn their characteristics and thus figure out the best way for "+himher+" to retain information whilst being "+
	"captivated by STEM over the long term. "+ 
	"<br>"+
    "<br>"+
	"Great work today and hope to see you all in soon! "+
	"~ Sensei___ "+
	"</p>"
	// learn both ways 
	

    close22D = "<p class='debrief'>As of late "+CHILDNAME+" is finding comfort in the ability to use "+hisher+" initiative to apply new features to "+
	"an older body of work and vice versa. As our course is structured for knowledge to be built upon with each passing project, with the culmination "+
	"of each unit being a test to prove ability. "+CHILDNAME+" is already able to identify where we can layer features together and perhaps swap out structures "+
	"altogether to make it easier for us to develop. This wider conceptual thinking has been displayed in small increments as "+heshe+" has been "+
	"completing objectives through the curriculum. But, it is starting to be more commonplace now. "+
	"<br>"+
    "<br>"+
	"This is fantastic! This is arguably one of the most prominent skills we need to develop, independent thinking! As of course, we start by building "+
	"the foundational understanding but now we are starting to see the ideal merge happening. This is the ability to think creatively and imaginatively "+
	"(which I'm sure you hear plenty of awesome ideas at home) with a skill set to actually execute upon that vision. "+
	"<br>"+
    "<br>"+
	"This is a brilliant cornerstone of "+hisher+" computing journey and we are so thrilled to be a part of it. If "+CHILDNAME+" keeps up this enjoyment and "+
	"application, there is no stopping "+himher+"! "+
	"<br>"+
    "<br>"+
	"After such a great session "+CHILDNAME+" can rest that big brain and will hopefully sleep well tonight. Have a wonderful rest of the week and we all "+
	"look forward to seeing you in again very soon! "+
	"~ Sensei___"+
	"</p>"
	// initiative & independence 
	


	close21D = "<p class='debrief'>The team and I strive to be flexible in our learning approach with "+CHILDNAME+". As with any Ninja, all learning "+
	"styles are different so we have to adapt our teaching methods to help find the best approach. "+HESHE+" is becoming very effective with "+
	"balancing different ways of absorbing new information as we like to expose "+CHILDNAME+" to a variety of methods. Firstly, of course, to find the best "+
	"way for "+himher+" to maximise retention and fun. But, also to better equip "+himher+" with a wider repertoire of 'employability skills'. "+ 
	"<br>"+
    "<br>"+
	"For instance we meet visual and auditory needs via our GDP and sensei guidance, with tactile coming into play with the physical application of "+
	"our circuitry, STEM and robotics. "+CHILDNAME+" has gotten to grips with these varied methods and we will continuously be looking to introduce new material "+
	"into the dojo to encourage growth and exploration! "+
	"<br>"+
    "<br>"+
	"All-round "+CHILDNAME+" is wonderful and "+heshe+" is making consistent progress week after week. We are very proud of what "+CHILDNAME+" is achieving and we will "+
	"see you next time superstars! "+
	"~ Sensei ___ "+
	"</p>"
	// learning styles & employability 



    close20D = "<p class='debrief'>"+CHILDNAME+" is always very good at understanding new concepts and getting "+hisher+" head around their new "+
	"application. As we go further and further through our create program, "+heshe+" is always using the basic statements like “if” and “for” as well as a "+
	"few more difficult ones like switch cases and while loops. But the real difficulty and mastery at "+CHILDNAME+"'s level is how we combine all these different "+
	"functions to make the game do what we want. "+
	"<br>"+
    "<br>"+
	"So, just like vocal languages with the framework of verbs, nouns, adjectives and so forth are a staple and continuously used. The real proficiency lies "+
	"within the speaker's (or coder’s in this sense) ability to string complexities together in a concise and effective manner. "+
	"<br>"+
    "<br>"+
	" "+CHILDNAME+" has already grown tremendously with us, we hope that "+heshe+" is also displaying these great new habits in other environments such as school and home. "+
	"<br>"+
    "<br>"+
	"We hope you have a fantastic end to the week and next time, "+CHILDNAME+" will be back on the path to developing the app so you can hopefully all retire one day! "+
    "~ Sensei ___ "+
	"</p>"
	// language proficiency
	

    close19D = "<p class='debrief'>"+CHILDNAME+" was a superstar today, firing on all cylinders as "+heshe+" finished the core of "+game+" and then "+
    "breezed through the remaining functionality of this project, reciting  important concepts as if it was on the back of "+
    hisher+" hand!"+
    "<br>"+
    "<br>"+
    "We knew that when "+CHILDNAME+" came through the dojo doors absolutely beaming  , "+heshe+" was prepared for a concentrated "+
    "and massively fun part of the week. Today's project is known to be one of the harder games where it is incredibly easy "+
    "to miss out a letter or full stop and for it to stop the game from working, and inside the many lines of code it's very "+
    "difficult to spot. As per usual correct syntax is the bane of any programmer's life!"+
    "<br>"+
    "<br>"+
    "Ninjas can often think they are expected to know everything and so don’t always ask for help when "+
    "they need it. But today "+CHILDNAME+" didn’t struggle with concentration at all and each week "+heshe+" is getting better and "+
    "better piecing together concepts independently which is the real staple for true retention and understanding. We are always here "+
    "to help push "+CHILDNAME+" where "+heshe+" is excelling and to aid where they need more guidance."+
    "<br>"+
    "<br>"+
    "Great work today and hope to see you all in again soon!"+
	"<br>"+
    "~Sensei "+
    "</p>"
	// firing on all cylinders & beaming 

    close18D = "<p class='debrief'>"+CHILDNAME+" is always listening and staying on task when "+heshe+" is sat with us (a very ideal student indeed!) "+
	heshe+" kept up "+hisher+" focus throughout today in "+hisher+" usual self as we tackled the start of a new unit! As "+CHILDNAME+" systematically "+
	" progresses through our curriculum we are seeing increases in "+hisher+" technical, practical and artistic confidence and competence. A true triple threat! "+
	" The amount of work we manage to get through and enjoy together always puts a smile on my face! "+
	"<br>"+
	"<br>"+
	"Wow! Overall, "+CHILDNAME+" today was absolutely fantastic, "+heshe+" was asking questions and really taking part in the Dojo! "+HESHE+" fully deserves "+
	" "+hisher+" "+belt+" belt as the hard work continues and I am so pleased to see "+himher+" so happy for it! Whenever I would set "+CHILDNAME+" to a task and check on "+
	"another working Ninja, I would come back and find "+himher+" not only finishing the task but starting to write up the code for the next parts of the game! "+
	"<br>"+
	"<br>"+
	" Great work today and hope to see you all in soon!"+
	"<br>"+
	" ~Sensei " +
	"</p>"
	// very ideal student 
	
	close17D = "<p class='debrief'>"+game+" has many interesting concepts and explaining them through with "+CHILDNAME+" today went brilliantly. "+
	HESHE+" listened and stayed focused with me and we managed to move through it with ease. "+game+" can be quite hard to understand for some ninjas "+
	"on their first move through of the game but we were very impressed with how "+CHILDNAME+" was so inquisitive and determined. "+
	"<br>"+
	"<br>"+
	CHILDNAME+" also did very well at double checking "+hisher+" coding whenever "+heshe+" made any mistake and also managed to get through our weekly puzzle "+
	"where you have to find all the errors within a piece of coding. There’s always lots of room for error in any bit of coding whether it is a missing capital "+
	"letter, to a word spelt wrong, a dot instead of a coma, and all of these will prevent our code from working. "+CHILDNAME+"is becoming very proficient at spotting "+
	"these mistakes and being able to correct them, which is a vital skill that "+CHILDNAME+" will have to always be on top of. "+
	"<br>"+
	"<br>"+
	"Great work today and hope to see you all in soon! "+
	"<br>"+
	" ~Sensei " +
	"</p>"
	//for weekly puzzle and new concept game

	close16D = "<p class='debrief'>It is always a pleasure to see "+CHILDNAME+"! "+HESHE+" is always keen to get into the coding whenever "+heshe+" rushes in through the dojo door "+
	"and it was great to see "+CHILDNAME+" keeping that enthusiasm through the hour with us! The creativity "+CHILDNAME+" displays is astonishing and it’s almost like you can hear the "+
	"cogs turning in "+hisher+" head when "+heshe+" is trying to figure out a way to push the boundaries of a project and apply their great imagination to it."+
	"<br>"+
	"<br>"+
	CHILDNAME+" has developed a long way from the very foundations in White Belt! "+HESHE+" is so engaged with us in the dojo that it feels so rewarding to see "+
	hisher+" skills grow! "+
	"<br>"+
	"<br>"+
	"It has been great to see you again and we hope you're enjoying the sunshine! Let’s hope it lasts! See you next week superstars. "+ 
	"<br>"+
	" ~ Sensei "+
	"</p>"
	// creativity cogs turning 
	
	close15D= "<p class='debrief'>"+CHILDNAME+" worked really hard today and had a load of fun (like usual we hope!) "+heshe+" appears to thrive in a slightly quieter environment "+
	"like today as I feel "+CHILDNAME+" very much enjoys a bit more of a calm, peaceful and social environment, this is something we are looking to establish much further as all the "+
	"kids advance. Utilising "+CHILDNAME+"’s great positive social energy in mini project management/development type tasks and tests to simulate real project work will be fantastic. "+
	HESHE+" was confidently pacing through the learning objectives today whilst always being keen for some extra Sensei guidance to ensure "+heshe+" fully understands each new concept "+
	"introduced. This is a great and balanced trait as "+CHILDNAME+" has now grown enough confidence and independence to jump right in but has comfort knowing we are always here for "+
	"support even as "+heshe+" grows. "+
	"<br>"+
	"<br>"+
	"Fantastic work today, and we’re looking forward to seeing how "+CHILDNAME+" progresses in "+hisher+" next session and beyond! Have a great weekendd! "+
	"<br>"+
	"~ Sensei "+
	"</p>"
	//quieter enviroment

	close14D = "<p class='debrief'>Brilliant work from "+CHILDNAME+" today, from the second we sat down "+heshe+" was focused and ready to get to it! Today's project is known to take more "+
	"time than average due to it's scale, but "+CHILDNAME+" was intently typing away and asking questions, I am super pleased with how well "+heshe+" did this session! "+
	"I am also very happy with "+CHILDNAME+"'s understanding of today's concepts even as they get a lot more complex with every new game, "+heshe+" is grasping these methods well and this "+
	"is reflecting not only in skill but confidence too. It's been great to see how far "+CHILDNAME+" has come with JavaScript and today was no exception."+
	"<br>"+
	"<br>"+
	"Once again, great energy and effort today, we have loved seeing you and we can’t wait for another coding session very soon!"+
	"<br>"+	
	"~ Sensei "+
	"</p>"
	//Completed one long project

	close13D = "<p class='debrief'>Once again "+CHILDNAME+" has shown immense focus to complete "+game+"! Our activities are always trying to stimulate "+CHILDNAME+"’s coding brain by requiring "+
	himher+" to think back to previous game projects to apply concepts learned in new environments. This helps "+CHILDNAME+" to also learn about how to correctly break down a larger project into "+
	"more approachable chunks, this combined with prior pseudocode planning can really help, and we will making much more use of this method going forward.	"+CHILDNAME+" is an absolute coding "+
	"superstar and a joy to have and we cannot wait to see what "+heshe+" will do next! "+
	"<br>"+
	"<br>"+
	"We have loved seeing "+CHILDNAME+" today and are looking forward to seeing you back in the dojo next week!"+
	"<br>"+	
	"Sensei "+
	"</p>"
	//immense focus to complete "game"
   
	close12D = "<p class='debrief'>It was incredibly fun to see "+CHILDNAME+" today! "+HESHE+" is always so focused on "+hisher+"work and is progressing really well through our "+
	belt+" Belt curriculum. "+HESHE+" has managed to complete a lot of projects today which is testament to "+himher+" staying on task throughout the whole hour. Whenever "+heshe+
	"is unsure about anything we love to have a chat together and bounce ideas around about how to proceed. "+HESHE+" is always enthusiastic, focused and most of all super happy "+
	"ball of energy to be in the Dojo which is always lovely to see from "+himher+". Well done today "+CHILDNAME+"!"+ 
	"<br>"+
	"<br>"+
	"We are looking forward to seeing you in the dojo again next week!"+
	"<br>"+
	"Sensei "
	"</p>"
	//lots of projects+energy

	close11D = "<p class='debrief'>Fantastic work from "+CHILDNAME+" overall today! Managing to get through "+hisher+" hardest games, always brings something new to the table. "+
	CHILDNAME+" always manages to get through "+hisher+" learning objectives and today was no exception! "+HESHE+" worked really well independently and got through the majority "+
	"of "+hisher+" work without much distraction which is a huge credit to how much "+CHILDNAME+"'s confidence has grown from when he first joined. Today, "+CHILDNAME+" was "+
	"adeptly grasping the difficult concepts of "+game+" which is a game that many kids can struggle on! "+
	"<br>"+
	"<br>"+
	"Incredible work from "+CHILDNAME+" today, keep it up superstar and we’ll see you all soon! "+
	"<br>"+
	"Sensei "
	"</p>"
	//one hard game

	close10D = "<p class='debrief'>"+CHILDNAME+" always comes in with a huge smile and loves to chat with us while coding. Which is an absolute joy that "+
	"we all look forward to! Recently, "+CHILDNAME+"'s engagement has been amazing, "+heshe+" is always keen to learn more, and happy to ask questions if "+
	heshe+" doesn't fully understand, both qualities we love to see in our ninjas as they move onto the more challenging coding, and move further through "+
	"the "+game+" belt curriculum. "+
	"<br>"+
	"<br>"+
	"We have loved seeing "+CHILDNAME+" today and are looking forward to seeing you back in the dojo next week! "+
	"~Sensei "+
	"</p>"
	//chatty kid, small close

	close9D = "<p class='debrief'>To think that "+CHILDNAME+" has developed all this way from the very basic syntax learning of White Belt is outstanding. "+
	"is so engaged in the world of coding and computing  that it feels so rewarding to see "+CHILDNAME+" flourish with us in the dojo. "+CHILDNAME+" is an "+
	"absolute coding superstar and a joy to have and we cannot wait to see what "+heshe+" will do next! "+
	"<br>"+
	"<br>"+
	"We hope to see you soon for another great session!"+
	"<br>"+
	"~Sensei "+
	"</p>"
	//far from white

	close8D = "<p class='debrief'>It is always a pleasure having "+CHILDNAME+" in the dojo with us and to see "+himher+" improve "+hisher+" coding whenever "+
	heshe+" is in! It is wonderfully rewarding to see "+himher+" grow throughout our course week after week. We all enjoy our sessions with "+CHILDNAME+" "+
	"and the team looks forward to seeing what new challenges "+heshe+" will meet every time using that big brain! "+ 
	"<br>"+
	"We hope "+heshe+" enjoys coming as much as we enjoy having "+himher+"! We look forward to seeing you next time for another session of coding greatness!"+
	"<br>"+
	"~Sensei "+
	"</p>" 
	// session of coding greatness 

	close7D = "<p class='debrief'>As usual "+CHILDNAME+" had "+hisher+" creative hat on today and when "+heshe+" was tasked with this very challenging game, instead of "+
	"just practising the basic syntax before placing it into our editor. "+HESHE+" wanted to start creating and adding "+hisher+" own matching images! We downloaded "+
	"a spritesheet and had a look at some of our own games to add in custom images for our objects. This made the game much more fun and very interactive for "+CHILDNAME+" "+
	"This is the kind of creativity we want to foster and seeing "+himher+" do so much alongside finishing such a large ___ Belt project is amazing. Great stuff superstar, "+
	"looking forward to seeing you in next time ninja!!! "+
	"<br>"+
	"~Sensei "+
	"</p>"
	// creative hat 

	close6D = "<p class='debrief'>Such concepts as “__CONCEPT__” can be hard to grasp and I am very impressed with the determination that "+CHILDNAME+" has "+
	"shown in order to reach the next step of "+hisher+" coding journey! "+HESHE+" is always striving to go above and beyond with our bonus steps which offer "+
	"additonal challenges in the form of interworking more script or applying previously used tactics on newly introduced projects. I am sure that as "+heshe+" "+
	"progresses onto the next stages of our curriculum that "+heshe+" will keep showing the drive that we have seen throughout their ninja journey thusfar! "+
	"<br>"+
	"It is always wonderful having "+CHILDNAME+" in and "+heshe+" never fails to impress! Keep it up "+CHILDNAME+" you are doing fantastically superstar!"+
	"~Sensei "+
	"</p>"
	// above and beyond 


	close5D = "<p class='debrief'>It’s always great to see what "+CHILDNAME+" gets up to in the dojo and to see what happens when "+heshe+" lets "+hisher+
	"imagination go wild! There are so many places to go with the concepts "+heshe+" has picked up whether that's animation, graphic design or even "+
	"creating and programming the next gaming sensation! I am excited to see where "+CHILDNAME+" will take this new skillset moving on from here! "+
	"Keep up the great work "+CHILDNAME+" and we will see you back in the dojo very soon!"+
	"~Sensei "+
	"</p>"
	// next sensation skillset

	close4D = "<p class='debrief'>"+game+" tapped into several foundational concepts in JavaScript which sets "+himher+" up for great success and habits"+
	"further down the line. "+HESHE+" was engaging well with new topics brought forward, making the lesson great fun to teach and made my life easy! "+game+" "+
	"can be quite hard to understand for some ninjas as we switch up the attention to other aspects of game development but today "+CHILDNAME+" learnt and "+ 
	"applied the concepts in "+hisher+" usual style! "+ 
	"<br>"+
	"Great work today and hope to see you all in soon!"+
	"~Sensei "+
	"</p>"
	// foundational habits 


	close3D = "<p class='debrief'>"+CHILDNAME+" lightens up our Dojo and it's always a pleasure getting to spend time with "+himher+"! I was pleased that "+
	heshe+" remained on task for the full session and stayed focused throughout, tackling "+game+" today with me. Whenever I stopped by with a whiteboard "+
	"to explain some of the concepts "+heshe+" listened intently and asked questions throughout. We are always stunned by naturally tech orientated tendencies "+
	"like "+CHILDNAME+" possesses. We are sure "+heshe+" is on a very bright path with us in the dojo. "+ 
	"<br>"+
	"Great stuff today from "+CHILDNAME+", looking forward to seeing you in again soon!"+
	"~Sensei "+
	"</p>"
	// lightens up dojo 

	close2D = "<p class='debrief'>"+CHILDNAME+" is an incredible ninja and a pleasure to engage with every week! It has been outstanding overall to see "+
	"strides being made not only in "+hisher+" technical abilities but their interpersonal skills set as well. We always strive to focus our main priciples"+
	"One of which is to cultivate a fun, safe, engaing and interactive environment for our students to thrive within. As "+CHILDNAME+" develops further, I am "+
	"sure we will see incredible things as "+hisher+" creative mind learns the skills to piece together practical applications."+
	"<br>"+
	"We are as excited as "+CHILDNAME+" to have them back in the dojo next week! Keep it up superstar"+
	"~Sensei "+
	"</p>"
	// inter skills & environment 

	close1D = "<p class='debrief'>As usual "+CHILDNAME+" was very focused today and kept at "+hisher+" learning throughout the session. "+HESHE+" managed to "+
	"persevere through the challenges in "+game+" with me and it was great to see "+CHILDNAME+" so pleased when we got it working! It was a pleasure to "+
	"be with them today and I'm looking forward to seeing you all again soon! "+
	"~Sensei "+
	"</p>"
	// pleasure & persevere 

}