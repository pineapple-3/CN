function selectClose(){
	getGendersForClose()
	var parent = document.getElementById("parentName").value
	var parentL = document.getElementById("parent1")
	parentL.innerHTML="<p class='debrief'>Hello "+parent+"!</p>"
	var type=document.getElementById("closeList").value
	var closeL=document.getElementById("CLOSE")
	if(type == "Close 1 - pleasure & persevere") { 
		closeL.innerHTML=close1D
	}
	if(type == "Close 2 - inter skills & environment") {
		closeL.innerHTML=close2D
	}
	if(type == "Close 3 - lightens up dojo") {
		closeL.innerHTML=close3D
	}
	if(type == "Close 4 - foundational habits") {
		closeL.innerHTML=close4D
	}
	if(type == "Close 5 - next sensation skillset") {
		closeL.innerHTML=close5D
	}
	if(type == "Close 6 - above and beyond") {
		closeL.innerHTML=close6D
	}
	if(type == "Close 7 - creative hat") {
		closeL.innerHTML=close7D
	}
	if(type == "Close 8 - session of coding greatness") {
		closeL.innerHTML=close8D
	}
	if(type == "Close 9 - far from white") {
		closeL.innerHTML=close9D
	}
	if(type == "Close 10 - chattykid, small close") {
		closeL.innerHTML=close10D
	}
	if(type=="Close 11 - one Hard Game"){
		closeL.innerHTML=close11D
	}
	if(type=="Close 12 - lots of prjects+energy"){
		closeL.innerHTML=close12D
	}
	if(type=="Close 13 - immense focus for Game"){
		closeL.innerHTML=close13D
	}	
	if(type=="Close 14 - Completed one long project"){
		closeL.innerHTML=close14D
	}
	if(type=="Close 15 - quieter day"){
		closeL.innerHTML=close15D
	}
	if(type=="Close 16 - Sunshine - long way from white belt"){
		closeL.innerHTML=close16D
	}
	if(type=="Close 17 - Game has many interesting"){
		closeL.innerHTML=close17D
	}	
	if(type=="Close 18 - Very ideal student"){
		closeL.innerHTML=close18D
	}
	if(type=="Close 19 - firing on all cylinders & beaming"){
		closeL.innerHTML=close19D
	}
	if(type=="Close 20 - language proficiency"){
		closeL.innerHTML=close20D
	}
	if(type=="Close 21 - learning styles & employability"){
		closeL.innerHTML=close21D
	}
	if(type=="Close 22 - initiative & independence"){
		closeL.innerHTML=close22D
	}
	if(type=="Close 23 - learn both ways"){
		closeL.innerHTML=close23D
	}
	if(type=="Close 24 - prep stages"){
		closeL.innerHTML=close24D
	}
	if(type=="Close 25 - attention & eager short"){
		closeL.innerHTML=close25D
	}
	if(type=="Close 26 - experimenting"){
		closeL.innerHTML=close26D
	}
	if(type=='Close 27 - paid attention as i explained ____'){
		closeL.innerHTML=close27D
	}
	if(type=='Close 28 - adherence & age group'){
		closeL.innerHTML=close28D
	}
	if(type=='Close 29 - goal attainment'){
		closeL.innerHTML=close29D
	}
	if(type=='Close 30 - tricky debugging - simple'){
		closeL.innerHTML=close30D
	}
	if(type=='Close 31 - add in assets'){
		closeL.innerHTML=close31D
	}
	if(type=='Close 32 - hard work & picking up'){
		closeL.innerHTML=close32D
	}
	if(type=='Close 33 - Small Close - Polite & Engaged'){
		closeL.innerHTML=close33D
	}
	if(type=='Close 34 - Lizzie Close'){
		closeL.innerHTML=close34D
	}
}

function selectGame(){
	getGenders()
	var type=document.getElementById("game").value;
	var debrief1=document.getElementById("Dgame");
	Selections(type,debrief1)
}
function selectGame2(){
	getGenders()
	var type=document.getElementById("game1").value;
	var debrief1=document.getElementById("Dgame2");
	Selections(type,debrief1)
}
function selectGame3(){
	getGenders()
	var type=document.getElementById("game2").value;
	var debrief1=document.getElementById("Dgame3");
	Selections(type,debrief1)
}
function selectGame4(){
	getGenders()
	var type=document.getElementById("game3").value;
	var debrief1=document.getElementById("Dgame4");
	Selections(type,debrief1)
}
function selectGame5(){
	getGenders()
	var type=document.getElementById("game4").value;
	var debrief1=document.getElementById("Dgame5");
	Selections(type,debrief1)
}
function selectGame6(){
	getGenders()
	var type=document.getElementById("game5").value;
	var debrief1=document.getElementById("Dgame6");
	Selections(type,debrief1)
	
}
function Selections(type,debrief1){
	var parent = document.getElementById("parentName").value
	var parentL = document.getElementById("parent1")
	parentL.innerHTML="<p class='debrief'>Hello "+parent+"!</p>"
	if(type=="orientation"){
		debrief1.innerHTML=orientationD
	}
	if(type=="Wall Bounce"){
		debrief1.innerHTML=wallBounceD
	}
	if(type=="Laser Chase"){
		debrief1.innerHTML=laserChaseD
	}
	if(type=="Space Zapper"){
		debrief1.innerHTML=spaceZapperD
	}
	if(type=="Coconut Chaos"){
		debrief1.innerHTML=coconutChaosD
	}
	if(type=="Hungry Hungry Ninja smaller"){
		debrief1.innerHTML=hungryHungryNinjaD
	}
	if(type=="Air Hockey"){
		debrief1.innerHTML=airHockeyD
	}
	if(type=="Rain Catcher Part 1"){
		debrief1.innerHTML=rainC1
	}
	if(type=="RC part 2"){
		debrief1.innerHTML=rainC2
	}
	if(type=="RC part 3"){
		debrief1.innerHTML=rainC3
	}
	if(type=="RC part 4"){
		debrief1.innerHTML=rainC4
	}
	if(type=="RC part 5"){
		debrief1.innerHTML=rainC5
	}
	if(type=="RC part 6"){
		debrief1.innerHTML=rainC6
	}
	if(type=="Colour Change"){
		debrief1.innerHTML=colourChange
	}
	if(type=="Meteor part 1"){
		debrief1.innerHTML=meteor1
	}
	if(type=="Meteor part 2"){
		debrief1.innerHTML=meteor2
	}
	if(type=="Rolling Dice"){
		debrief1.innerHTML=rollingDice
	}
	if(type=="Hiding ninja part 1"){
		debrief1.innerHTML=hidingNinja1
	}
	if(type=="Hiding ninja part 2"){
		debrief1.innerHTML=hidingNinja2
	}
	if(type=="Whack a ninja part 3"){
		debrief1.innerHTML=whackANinja
	}
	if(type=="Ninja Supplies"){
		debrief1.innerHTML=ninjaSupplies
	}
	if(type=="What's Inside"){
		debrief1.innerHTML=whatsInside
	}
	if(type=="Whats Inside"){
		debrief1.innerHTML=whatsInside
	}
	if(type=="Rock Paper Scissors"){
		debrief1.innerHTML=rockPaperScissors
	}
	if(type=="Rock Paper Scissors2"){
		debrief1.innerHTML=rockPaperScissors2
	}
	if(type=="Robot Builder"){
		debrief1.innerHTML=robotBuilder
	}
	if(type=="Bumper Car"){
		debrief1.innerHTML=bumperCar
	}
	if(type=="Balloon Protect"){
		debrief1.innerHTML=balloonProtect
	}
	if(type=="Ninja Snacks"){
		debrief1.innerHTML=ninjaSnacks
	}
	if(type=="Shuriken toss part 1"){
		debrief1.innerHTML=shurikenToss1
	}
	if(type=="Space Tour"){
		debrief1.innerHTML=spaceTour
	}
	if(type=="Shuriken toss part 2"){
		debrief1.innerHTML=shurikenToss2
	}
	if(type=="Ninja Battle FULL"){
		debrief1.innerHTML=ninjaBattle
	}
	if(type=="Ninja Battle Part One"){
		debrief1.innerHTML=ninjaBattlePartOne
	}
	if(type=="Ninja Battle Part Two"){
		debrief1.innerHTML=ninjaBattlePartTwo
	}
	if(type=="Candy Sort FULL"){
		debrief1.innerHTML=candySortFULL
	}
	if(type=="Starscape"){
		debrief1.innerHTML=starScape
	}
	if(type=="Zapper part 1"){
		debrief1.innerHTML=spaceZapper
	}
	if(type=="Wall Blaster"){
		debrief1.innerHTML=wallBlaster
	}
	if(type=="Lift Off"){
		debrief1.innerHTML=liftOff
	}
	if(type=="Meteors Deluxe First 50%"){
		debrief1.innerHTML=meteorsDeluxeFIRSTHALF
	}
	if(type=="Meteors Deluxe Last 50%"){
		debrief1.innerHTML=meteorsDeluxeSECONDHALF
	}
	if(type=="Meteors Deluxe FULL"){
		debrief1.innerHTML=meteorsDeluxeFULL
	}
	if(type=="Bug Invaders First 50%"){
		debrief1.innerHTML=bugInvadersHalf
	}
	if(type=="Bug Invaders Last 50%"){
		debrief1.innerHTML=bugInvadersSecondHalf
	}
	if(type=="Bug Invaders FULL"){
		debrief1.innerHTML=bugInvadersFULL
	}
	if(type=="Whack A Ninja Improved first 50%"){
		debrief1.innerHTML=WANIshort
	}
	if(type=="Whack A Ninja Improved Full"){
		debrief1.innerHTML=WANIlong
	}
	if(type=="Dojo Practice First 50"){
		debrief1.innerHTML=dojoPracticeFirstHalf
	}
	if(type=="Dojo Practice Last 50%"){
		debrief1.innerHTML=dojoPracticeSecondHalf
	}
	if(type=="Dojo Practice FULL"){
		debrief1.innerHTML=dojoPracticeFULL
	}
	if(type=="Shuriken Dodge"){
		debrief1.innerHTML=shurikenDodge
	}
	if(type=="Ninja Race"){
		debrief1.innerHTML=ninjaRace
	}
	if(type=="Ball Toss"){
		debrief1.innerHTML=ballToss
	}
	if(type=="Circus Bounce"){
		debrief1.innerHTML=circusBounce
	}
	if(type=="Hangman First 50%"){
		debrief1.innerHTML=hangmanFirstHalf
	}
	if(type=="Hangman Last 50%"){
		debrief1.innerHTML=hangmanSecondHalf
	}
	if(type=="Hangman FULL"){
		debrief1.innerHTML=hangmanFULL
	}
	if(type=="Dungeon Escape First 50%"){
		debrief1.innerHTML=dungeonEscapeFirstHALF
	}
	if(type=="Dungeon Escape Last 50%"){
		debrief1.innerHTML=dungeonEscapeSecondHALF
	}
	if(type=="Dungeon Escape FULL"){
		debrief1.innerHTML=dungeonEscapeFULL
	}
	if(type=="Scramble First 50%"){
		debrief1.innerHTML=scrambleFirstHALF
	}
	if(type=="Scramble Second 50%"){
		debrief1.innerHTML=scrambleSecondHALF
	}
	if(type=="Scramble FULL"){
		debrief1.innerHTML=scrambleFULL
	}
	if(type=="Ninja Puzzle First 50%"){
		debrief1.innerHTML=ninjaPuzzleFirstHALF
	}
	if(type=="Ninja Puzzle Second 50%"){
		debrief1.innerHTML=ninjaPuzzleSecondHALF
	}
	if(type=="Ninja Puzzle FULL"){
		debrief1.innerHTML=ninjaPuzzleFULL
	}
	if(type=="Wall Blaster 2 First 50%"){
		debrief1.innerHTML=wallBlaster2FirstHalf
	}
	if(type=="Wall Blaster 2 Second 50%"){
		debrief1.innerHTML=wallBlaster2SecondHalf
	}
	if(type=="Wall Blaster 2 FULL"){
		debrief1.innerHTML=wallBlaster2FULL
	}
	if(type=="Flying Ninja First 50%"){
		debrief1.innerHTML=flyingNinjaFirstHalf
	}
	if(type=="Flying Ninja Second 50%"){
		debrief1.innerHTML=flyingNinjaSecondHalf
	}
	if(type=="Flying Ninja FULL"){
		debrief1.innerHTML=flyingNinjaFull
	}
	if(type=="Word Scramble First 50%"){
		debrief1.innerHTML=wordScrambleFirstHalf
	}
	if(type=="Word Scramble Second 50%"){
		debrief1.innerHTML=wordScrambleSecondHalf
	}
	if(type=="Word Scramble FULL"){
		debrief1.innerHTML=wordScrambleFull
	}
	if(type=="Shut The Box First 50%"){
		debrief1.innerHTML=shutTheBoxFirstHalf
	}
	if(type=="Shut The Box Second 50%"){
		debrief1.innerHTML=shutTheBoxSecondHalf
	}
	if(type=="Shut The Box FULL"){
		debrief1.innerHTML=shutTheBoxFull
	}
	if(type=="OddBall First 50%"){
		debrief1.innerHTML=oddBallFirstHalf
	}
	if(type=="OddBall Second 50%"){
		debrief1.innerHTML=oddBallSecondHalf
	}
	if(type=="OddBall FULL"){
		debrief1.innerHTML=oddBallFull
	}
	if(type=="Rooftop Runner Full"){
		debrief1.innerHTML=rooftopRunnerFULL
	}
	if(type=="Rooftop Runner first half"){
		debrief1.innerHTML=rooftopRunnerFirstHalf
	}
	if(type=="Rooftop Runner second half"){
		debrief1.innerHTML=rooftopRunnerSecondHalf
	}
	if(type=="Ninja Puzzle 2 Full"){
		debrief1.innerHTML=ninjaPuzzle2FULL
	}
	if(type=="Ninja Puzzle 2 first half"){
		debrief1.innerHTML=ninjaPuzzle2FirstHalf
	}
	if(type=="Ninja Puzzle 2 second half"){
		debrief1.innerHTML=ninjaPuzzle2SecondHalf
	}
	if(type=="moving Your Avatar FULL"){
		debrief1.innerHTML=movingYourAvatarFULL
	}
	if(type=="moving Your Avatar First Half"){
		debrief1.innerHTML=movingYourAvatarFirstHalf
	}
	if(type=="moving Your Avatar Second Half"){
		debrief1.innerHTML=movingYourAvatarSecondHalf
	}
	if(type=="basic Platforming FULL"){
		debrief1.innerHTML=basicPlatformingFULL
	}
	if(type=="basic Platforming First Half"){
		debrief1.innerHTML=basicPlatformingFirstHalf
	}
	if(type=="basic Platforming Second Half"){
		debrief1.innerHTML=basicPlatformingSecondHalf
	}
	if(type=="Exploring the forest FULL"){
		debrief1.innerHTML=exploringTheForestFULL
	}
	if(type=="Exploring the forest First Half"){
		debrief1.innerHTML=exploringTheForestFirstHalf
	}
	if(type=="Exploring the forest Second Half"){
		debrief1.innerHTML=exploringTheForestSecondHalf
	}
	if(type=="Space Bumpers Full"){
		debrief1.innerHTML=spaceBumpersFULL
	}
	if(type=="Space Bumpers First Half"){
		debrief1.innerHTML=spaceBumpersFirstHalf
	}
	if(type=="Space Bumpers Second Half"){
		debrief1.innerHTML=spaceBumpersSecondHalf
	}
	if(type=="Ninja Quest Full"){
		debrief1.innerHTML=ninjaQuestFULL
	}
	if(type=="Snap Full"){
		debrief1.innerHTML=snapFull
	}
	if(type=="Calculator Full"){
		debrief1.innerHTML=calculator
	}
	if(type=="Rythm Full"){
		debrief1.innerHTML=rhythm
	}
	if(type=="Naughts And Crosses Full"){
		debrief1.innerHTML=naughtsAndCrosses
	}
	if(type=="Tank Race Full"){
		debrief1.innerHTML=tankRace
	}
	if(type=="Soduku Full"){
		debrief1.innerHTML=soduku
	}
	if(type=="Twenty One Full"){
		debrief1.innerHTML=twentyOne
	}
	if(type=="Minesweeper Full"){
		debrief1.innerHTML=minesweeper
	}
	if(type=="Session 1 - Block"){
		debrief1.innerHTML=minecraftMS1
	}
	if(type=="Session 2 - Biome"){
		debrief1.innerHTML=minecraftMS2
	}
	if(type=="Session 3 - Ore"){
		debrief1.innerHTML=minecraftMS3
	}
	if(type=="Session 4 - Sword"){
		debrief1.innerHTML=minecraftMS4
	}
	if(type=="Session 5 - Armor"){
		debrief1.innerHTML=minecraftMS5
	}
	if(type=="Session 6 - Shuriken"){
		debrief1.innerHTML=minecraftMS6
	}
	if(type=="Session 7 - Mobs"){
		debrief1.innerHTML=minecraftMS7
	}
	if(type=="Session 8 - Publishing"){
		debrief1.innerHTML=minecraftMS8
	}
	if(type=="Session 9 - Custom Skins"){
		debrief1.innerHTML=minecraftMS9
	}
	if(type=="Session 10 - Adventure Map"){
		debrief1.innerHTML=minecraftMS10
	}
	if(type=="The Sky Is Falling"){
		debrief1.innerHTML=theSkyIsFalling
	}
	if(type=="Session 1 - Intro"){
		debrief1.innerHTML=robloxCamp1
	}
	if(type=="Session 2 - Obby"){
		debrief1.innerHTML=robloxCamp2
	}
	if(type=="Session 3 - Lua basics"){
		debrief1.innerHTML=robloxCamp3
	}
	if(type=="Session 4 - for loop bridge"){
		debrief1.innerHTML=robloxCamp4
	}
	if(type=="Session 5 - hack button"){
		debrief1.innerHTML=robloxCamp5
	}
	if(type=="Session 6 - Colour Remix"){
		debrief1.innerHTML=robloxCamp6
	}
	if(type=="Session 7 - Terrain editor"){
		debrief1.innerHTML=robloxCamp7
	}
	if(type=="Session 8 - Toolbox & Traps"){
		debrief1.innerHTML=robloxCamp8
	}
	if(type=="Rain Catcher Part 1 - 5"){
		debrief1.innerHTML=rainC1to5
	}
	if(type=="Session 1 - MCIntro"){
		debrief1.innerHTML=storyTelling1
	}
	if(type=="Session 2 - Custom Set"){
		debrief1.innerHTML=storyTelling2
	}
	if(type=="Session 3 - Storyboard"){
		debrief1.innerHTML=storyTelling3
	}
	if(type=="Session 4 - Scripting"){
		debrief1.innerHTML=storyTelling4
	}
	if(type=="Session 5 - Audio Recording"){
		debrief1.innerHTML=storyTelling5
	}
	if(type=="Session 6 - Editing"){
		debrief1.innerHTML=storyTelling6
	}
	if(type=="Session 7 - Adventure Map"){
		debrief1.innerHTML=storyTelling7
	}
	if(type=="Good & Interactive"){
		debrief1.innerHTML=goodAndInteractive
	}
	if(type=="Shy Child"){
		debrief1.innerHTML=shyChild
	}
	if(type=="Young Child"){
		debrief1.innerHTML=youngChild
	}
	if(type=="Older Child"){
		debrief1.innerHTML=olderChild
	}
	if(type=="Low Interaction"){
		debrief1.innerHTML=lowInteraction
	}
	if(type=="Session 1 - Freestyle"){
		debrief1.innerHTML=Roblox1
	}
	if(type=="Session 2 - DOORWAYS OF DOOM!"){
		debrief1.innerHTML=roblox2
	}
	if(type=="Session 3 - Obby pt2"){
		debrief1.innerHTML=roblox3
	}
	if(type=="Session 4 - SPINNER SPINNER"){
		debrief1.innerHTML=roblox4
	}
	if(type=="Session 5 - Obby Teams"){
		debrief1.innerHTML=roblox5
	}
	if(type=="Session 6 - Zombie Terrain"){
		debrief1.innerHTML=robloxZombieTerrain
	}
	if(type=="Session 7 - Zombie pt1"){
		debrief1.innerHTML=roblox6pt1
	}
	if(type=="Session 8 - Zombie Island Final"){
		debrief1.innerHTML=roblox8
	}
	if(type=="Session 9 - Block Tycoon"){
		debrief1.innerHTML=robloxTycoon
	}
	if(type=="Session 10 - Lighting"){
		debrief1.innerHTML=robloxLighting
	}
	if(type=="Session 11 - Kill Brick"){
		debrief1.innerHTML=robloxKillBlock
	}
	if(type=="Session 12 - Speed Boosts"){
		debrief1.innerHTML=robloxSpeedBoosts
	}
	if(type=="Session 13 - Conveyor"){
		debrief1.innerHTML=robloxConveyorBelt
	}
	if(type=="Session 14 - KeysDoors"){
		debrief1.innerHTML=robloxDoorsandKeys
	}
	if(type=="Basics of Script (Misc.)"){
		debrief1.innerHTML=robloxScript
	}
	if(type=="Hungry Hungry Ninja"){
		debrief1.innerHTML=hungryHungryNinjaD2
	}
	if(type=="Bubbles"){
		debrief1.innerHTML=bubblesFull
	}
	if(type=="Server Second 50%"){
		debrief1.innerHTML=server2
	}
	if(type=="Server First 50%"){
		debrief1.innerHTML=server1
	}
	if(type=="Server FULL"){
		debrief1.innerHTML=serverFull
	}
	if(type=="Endless Runner FULL"){
		debrief1.innerHTML=endlessRunFull
	}
	if(type=="Code Breaker FULL"){
		debrief1.innerHTML=codeBreakerFull
	}
	if(type=="Code Breaker First 50%"){
		debrief1.innerHTML=codeBreaker1
	}
	if(type=="Code Breaker Second 50%"){
		debrief1.innerHTML=codeBreaker2
	}
	if(type=="Session 15 - Health Pickup"){
		debrief1.innerHTML=RobloxHealthPickup
	}
	if(type=="Session 16 - Pickup Variations"){
		debrief1.innerHTML=RobloxHealthPickupVariations
	}
	if(type=="Session 17 - Colour Crazy pt1"){
		debrief1.innerHTML=RobloxColourCrazyPt1
	}
	if(type=="Session 18 - Colour Crazy pt2"){
		debrief1.innerHTML=RobloxColourCrazyPt2
	}
	if(type=="Session 19 First Half - Falling Colours"){
		debrief1.innerHTML=RobloxFallingColoursPt1
	}
	if(type=="Session 19 - Second Half Falling Colours"){
		debrief1.innerHTML=RobloxFallingColoursPt2
	}
	if(type=="Session 19 FULL - Falling Colours"){
		debrief1.innerHTML=RobloxFallingColoursFULL
	}
	if(type=="Asteroid Dodge - First 50%"){
		debrief1.innerHTML=AsteroidDodgeFirstHalf
	}
	if(type=="Asteroid Dodge - Second 50%"){
		debrief1.innerHTML=AsteroidDodgeSecondHalf
	}
	if(type=="Asteroid Dodge - FULL"){
		debrief1.innerHTML=AsteroidDodgeFULL
	}
	if(type=="Wall Blaster 2 - FILLER"){
		debrief1.innerHTML=wallBlaster2SecondFILLER
	}
	if(type=="Golden Ticket/Free Hour"){
		debrief1.innerHTML=GoldenTicket
	}
	if(type=="Minecraft Fluids"){
		debrief1.innerHTML=MinecraftCampFluid
	}
	if(type=="Minecraft Dimensions"){
		debrief1.innerHTML=MinecraftCampDimensions
	}
	if(type=="Minecraft Structures"){
		debrief1.innerHTML=MinecraftCampStrucures
	}
	if(type=="Moon Lander Full"){
		debrief1.innerHTML=MoonLanderFull
	}
	if(type=="Session 21 - Make Weapon"){
		debrief1.innerHTML=robloxMakeWeapon
	}
	if(type=="Session 22 - Code Weapon First Half"){
		debrief1.innerHTML=robloxCodeWeaponFirstHalf
	}
	if(type=="Session 22 - Code Weapon Second Half"){
		debrief1.innerHTML=robloxCodeWeaponsecondhalf
	}
	if(type=="Session 23 - Moving NPC"){
		debrief1.innerHTML=robloxMovingNPC
	}
	if(type=="Session 24 - Roblox Pathfinding"){
		debrief1.innerHTML=robloxPathfinding
	}
	if(type=="Session 25 - Character Creation"){
		debrief1.innerHTML=robloxCharacterCreation
	}
	if(type=="Session 26 - Animations First Half"){
		debrief1.innerHTML=robloxAnimationsfirsthalf
	}
	if(type=="Session 26 - Animations FULL/Second Half"){
		debrief1.innerHTML=robloxAnimationsFullorSecondHalf
	}
	if(type=="Session 27 - Patrolling Pathfinding"){
		debrief1.innerHTML=PatrollingPathfinding
	}
	if(type=="Session 28 - First Person"){
		debrief1.innerHTML=FirstPerson
	}
	if(type=="Session 28 - First Person"){
		debrief1.innerHTML=FirstPerson
	}
	if(type=="Session 3 - Union and Negate"){
		debrief1.innerHTML=UnionAndNegate
	}
	if(type=="Session 7 - Zombie For Loop"){
		debrief1.innerHTML=robloxforloop1
	}
	if(type=="Shuriken Dodge first 50%"){
		debrief1.innerHTML=shurikenDodgefirsthalf
	}
	if(type=="Shuriken Dodge second 50%"){
		debrief1.innerHTML=shurikenDodgesecondhalf
	}
	if(type=="Ninja Race first 50%"){
		debrief1.innerHTML=ninjaRacefirsthalf
	}
	if(type=="Ninja Race second 50%"){
		debrief1.innerHTML=ninjaRacesecondhalf
	}
	if(type=="RPS Shorter (if 2+ games done)"){
		debrief1.innerHTML=rockPaperScissors
	}
	if(type=="RPS Longer (if minimal games done)"){
		debrief1.innerHTML=rockPaperScissors2
	}
	if(type=="Snacks -> Shuri 2 Combined"){
		debrief1.innerHTML=NinjaSnackToDodge2
	}
	if(type=="Ninja Quest First Half"){
		debrief1.innerHTML=NinjaQuest1
	}
	if(type=="Ninja Quest Second Half"){
		debrief1.innerHTML=NinjaQuest2
	}
	if(type=="Candy Sort First Half"){
		debrief1.innerHTML=candySort1
	}
	if(type=="Candy Sort Second Half"){
		debrief1.innerHTML=candySort2
	}
	if(type=="Session 29 - Floor Is Lava"){
		debrief1.innerHTML=	FloorIsLava
	}
	if(type=="Session 30 - Void Runner"){
		debrief1.innerHTML=VoidRunner
	}
	if(type=="Session 31 - Disaster Land Terrain"){
		debrief1.innerHTML=DisasterLandTerrain
	}
	if(type=="Session 32 - Disaster Land Meteor"){
		debrief1.innerHTML=DisasterLandMeteor
	}
	if(type=="Session 33 - Disaster Land Lightning"){
		debrief1.innerHTML=DisasterLandLightning
	}
	if(type=="Bulk Debrief Redstone"){
		debrief1.innerHTML=bulkCampredstone
	}
	if(type=="Bulk Debrief Conditionals"){
		debrief1.innerHTML=bulkcampconditional
	}
	if(type=="Bulk Debrief Functions"){
		debrief1.innerHTML=bulkcampFunctions
	}
	if(type=="Session 17 Colour Crazy FULL"){
		debrief1.innerHTML=RobloxColourCrazyFULL
	}
	if(type=="Whack a ninja second 50%"){
		debrief1.innerHTML=WANIsecondhalf
	}
	if(type=="Wall - Laser - Space"){
		debrief1.innerHTML=walllaserspace
	}
	if(type=="Coco Chaos --> Hungry Hungry"){
		debrief1.innerHTML=cocoHungry
	}
	if(type=="Moon Lander First 50%"){
		debrief1.innerHTML=MoonLanderFirstHalf
	}
	if(type=="Calculator First 50%"){
		debrief1.innerHTML=calculatorFirstHalf
	}
	if(type=="Rythm First 50%"){
		debrief1.innerHTML=rythmFirstHalf
	}
	if(type=="Naughts & Crosses First 50%"){
		debrief1.innerHTML=naughtsAndCrossesFirstHalf
	}
	if(type=="Tank Race First 50%"){
		debrief1.innerHTML=tankRaceFirstHalf
	}
	if(type=="Soduku First 50%"){
		debrief1.innerHTML=sodukuFirstHalf
	}
	if(type=="Twenty One First 50%"){
		debrief1.innerHTML=twentyOneFirstHalf
	}
	if(type=="Minesweeper First 50%"){
		debrief1.innerHTML=minesweeperFirstHalf
	}
	if(type=="Sky Is Falling First 50%"){
		debrief1.innerHTML=theSkyIsFallingFirstHalf
	}
	if(type=="Endless Runner First 50%"){
		debrief1.innerHTML=endlessRunFirstHalf
	}
	if(type=="Circus Bounce First 50%"){
		debrief1.innerHTML=circusBounceFirstHalf
	}
	if(type=="Moon Lander Second 50%"){
		debrief1.innerHTML=MoonLanderSecondHalf
	}
	if(type=="Calculator Second 50%"){
		debrief1.innerHTML=calculatorSecondHalf
	}
	if(type=="Rythm Second 50%"){
		debrief1.innerHTML=rythmSecondHalf
	}
	if(type=="Naughts & Crosses Second 50%"){
		debrief1.innerHTML=naughtsAndCrossesSecondHalf
	}
	if(type=="Tank Race Second 50%"){
		debrief1.innerHTML=tankRaceSecondHalf
	}
	if(type=="Soduku Second 50%"){
		debrief1.innerHTML=sodukuSecondHalf
	}
	if(type=="Twenty One Second 50%"){
		debrief1.innerHTML=twentyOneSecondHalf
	}
	if(type=="Minesweeper Second 50%"){
		debrief1.innerHTML=minesweeperSecondHalf
	}
	if(type=="Sky Is Falling Second 50%"){
		debrief1.innerHTML=theSkyIsFallingSecondHalf
	}
	if(type=="Endless Runner Second 50%"){
		debrief1.innerHTML=endlessRunSecondHalf
	}
	if(type=="Circus Bounce Second 50%"){
		debrief1.innerHTML=circusBounceSecondHalf
	}
	if(type=="Ball Toss First 50%"){
		debrief1.innerHTML=ballTossFirstHalf
	}
	if(type=="Ball Toss Second 50%"){
		debrief1.innerHTML=ballTossSecondHalf
	}
	if(type=="Snap First 50%"){
		debrief1.innerHTML=snapFirstHalf
	}
	if(type=="Snap Second 50%"){
		debrief1.innerHTML=snapSeocndHalf
	}
	if(type=="Minecraft & Code Combat"){
		debrief1.innerHTML=CodeCombatMinecraft
	}
	if(type=="Session 35 - Bannana Madness First Half"){
		debrief1.innerHTML=BannanaMadness1
	}
	if(type=="Session 35 - Bannana Madness Second Half"){
		debrief1.innerHTML=BannanaMadness2
	}
	if(type=="Session 36 - Red Light Green Light FULL"){
		debrief1.innerHTML=RedLightGreenLight
	}
	if(type=="Session 34 - Project BlueBook"){
		debrief1.innerHTML=ProjectBlueBook
	}
	if(type=="Session 37+ - Capstone"){
		debrief1.innerHTML=Capstone
	}
	if(type=="Session 1 Game Pass Setup"){
		debrief1.innerHTML=gamepasssetup
	}
	if(type=="Session 2 Game Pass Implement"){
		debrief1.innerHTML=gamepassimplement
	}
	if(type=="Session 3 Tip Toe"){
		debrief1.innerHTML=tiptoe
	}
	if(type=="Session 13 Homing Missile"){
		debrief1.innerHTML=homingMissile
	}
	if(type=="Session 4 Cosmic Canyon"){
		debrief1.innerHTML=cosmiccanyon
	}
	if(type=="Session 5 Auto Points"){
		debrief1.innerHTML=autopoints
	}
	if(type=="Session 6 Zillianaire Part 1"){
		debrief1.innerHTML=zillionairept1
	}
	if(type=="Session 7 Zillianaire Part 2"){
		debrief1.innerHTML=zillionairept2
	}
	if(type=="Session 6.5 Zillianaire Filler"){
		debrief1.innerHTML=zillionairefiller
	}
	if(type=="Session 8 - Wall Runner"){
		debrief1.innerHTML=wallRunner
	}
	if(type=="Final Minecraft Summer Debrief (Armor)"){
		debrief1.innerHTML=minecraftFINAL
	}
	if(type=="Session 10 Hole in the Wall"){
		debrief1.innerHTML=holeInTheWall
	}
	if(type=="Session 8 - Dungeon Delve"){
		debrief1.innerHTML=dungeonDelve
	}
	if(type=="Session 9 - Zombie Football"){
		debrief1.innerHTML=zombieFootball
	}
	if(type=="Session 11 - Moon Lander 2 pt1"){
		debrief1.innerHTML=moonLander2pt1
	}
	if(type=="Session 12 - Moon Lander 2 pt2"){
		debrief1.innerHTML=moonLander2pt2
	}
	if(type=="Unity 1 Setup"){
		debrief1.innerHTML=unityGettingStart
	}
	if(type=="Unity Dropping Bombs 1"){
		debrief1.innerHTML=droppingBombs1
	}
	if(type=="Unity Dropping Bombs 2"){
		debrief1.innerHTML=droppingBombs2
	}
	if(type=="Unity Dropping Bombs 3"){
		debrief1.innerHTML=droppingBombs3
	}
	if(type=="Unity Dropping Bombs 4"){
		debrief1.innerHTML=droppingBombs4
	}
	if(type=="Unity Dropping Bombs 5"){
		debrief1.innerHTML=droppingBombs5
	}
	if(type=="Unity Stack Part One"){
		debrief1.innerHTML=stack1
	}
	if(type=="Unity Stack Part two"){
		debrief1.innerHTML=stack2
	}
	if(type=="Unity Sketch Head First 50%"){
		debrief1.innerHTML=SketchHead50
	}
	if(type=="Unity Sketch Head Second 50%"){
		debrief1.innerHTML=SketchHeadSecond50
	}
	if(type=="Unity Sketch Head FULL"){
		debrief1.innerHTML=SketchHeadFULL
	}
	if(type=="Unity Meany Bird First 50%"){
		debrief1.innerHTML=MeanyBirdFirstHalf
	}
	if(type=="Unity Meany Bird Second 50%"){
		debrief1.innerHTML=MeanyBirdSecondHalf
	}
	if(type=="Unity Meany Bird FULL"){
		debrief1.innerHTML=MeanyBirdFull
	}
	if(type=="PolyRun Session One"){
		debrief1.innerHTML=polyRun1
	}
	if(type=="PolyRun Session Two"){
		debrief1.innerHTML=polyRun2
	}
	if(type=="PolyRun Session Three"){
		debrief1.innerHTML=polyRun3
	}
	if(type=="PolyRun Session Four First Half"){
		debrief1.innerHTML=polyRun4half
	}
	if(type=="PolyRun Session Four Second Half"){
		debrief1.innerHTML=polyRun4secondhalf
	}
	if(type=="PolyRun Session Five (Final)"){
		debrief1.innerHTML=polyRun5
	}
	if(type=="Cloud Hop Part One"){
		debrief1.innerHTML=cloudHop1
	}
	if(type=="Cloud Hop Part Two"){
		debrief1.innerHTML=cloudHop2
	}
	if(type=="Jungle Run One (Setup)"){
		debrief1.innerHTML=JungleRun1
	}
	if(type=="Jungle Run Two (Collectibles & Menu UI)"){
		debrief1.innerHTML=JungleRun2
	}
	if(type=="Jungle Run Three (Enemies & Gold Bonus)"){
		debrief1.innerHTML=JungleRun3
	}
	if(type=="Hiding Ninjas 1 - 2 - 3"){
		debrief1.innerHTML=hidingNinja123
	}
	if(type=="Hiding Ninjas 1 - 2"){
		debrief1.innerHTML=hidingninja12
	}
	if(type=="Meteor 1 - 2"){
		debrief1.innerHTML=meteor12
	}
	if(type=="Zapper Part one & Starscape"){
		debrief1.innerHTML=starscapeZapper
	}
	var sensei = document.getElementById("Dgame2");
	var senseiNames = ["Chris","Dereece","Nathan","Lizzie","Owen"]
	var randomSelection = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
	var selectedSensei = senseiNames[randomSelection]
	sensei.innerHTML="<p class='debrief'>~Sensei "+selectedSensei+""
}

	

function selectBelt(){
	var parent = document.getElementById("parentName").value
	var parentL = document.getElementById("parent1")
    var type=document.getElementById("belt").value;
    var game=document.getElementById("gameSelect");
	var game1=document.getElementById("gameA");
	var game2=document.getElementById("gameB");
	var game3=document.getElementById("gameC");
	var game4=document.getElementById("gameD");
	var game5=document.getElementById("gameE");
	var WhiteGamesArr=["Select Game","orientation","Wall - Laser - Space","Wall Bounce","Laser Chase","Space Zapper","Coco Chaos --> Hungry Hungry","Coconut Chaos",//"Hungry Hungry Ninja smaller",
	"Hungry Hungry Ninja","Air Hockey"];

	var YellowGamesArr=["Select Game","Rain Catcher Part 1","RC part 2","RC part 3","RC part 4","RC part 5","Rain Catcher Part 1 - 5","RC part 6","Colour Change",
	"Meteor part 1","Meteor part 2","Meteor 1 - 2","Rolling Dice","Hiding ninja part 1","Hiding ninja part 2","Hiding Ninjas 1 - 2","Whack a ninja part 3","Hiding Ninjas 1 - 2 - 3","Ninja Supplies",
	"What's Inside","RPS Shorter (if 2+ games done)","RPS Longer (if minimal games done)","Robot Builder","Bumper Car","Balloon Protect","Snacks -> Shuri 2 Combined","Ninja Snacks",
	"Shuriken toss part 1","Space Tour","Shuriken toss part 2","Ninja Battle FULL","Ninja Battle Part One","Ninja Battle Part Two",
	"Candy Sort FULL","Candy Sort First Half","Candy Sort Second Half",
	"Zapper Part one & Starscape",//"Starscape","Zapper part 1",
	"Wall Blaster","Lift Off","Bubbles","Meteors Deluxe First 50%","Meteors Deluxe Last 50%","Meteors Deluxe FULL",
	"Bug Invaders First 50%","Bug Invaders Last 50%","Bug Invaders FULL"];

	var OrangeGamesArr=["Select Game","Whack A Ninja Improved Full","Whack A Ninja Improved first 50%","Whack a ninja second 50%","Dojo Practice First 50",
	"Dojo Practice Last 50%","Dojo Practice FULL","Shuriken Dodge first 50%","Shuriken Dodge second 50%","Shuriken Dodge",
	"Ninja Race first 50%","Ninja Race second 50%","Ninja Race","Ball Toss First 50%","Ball Toss Second 50%","Ball Toss","Dungeon Escape First 50%",
	"Dungeon Escape Last 50%","Dungeon Escape FULL","Scramble First 50%","Scramble Second 50%",
	"Scramble FULL","Ninja Puzzle First 50%","Ninja Puzzle Second 50%","Ninja Puzzle FULL","Wall Blaster 2 First 50%","Wall Blaster 2 - FILLER",
	"Wall Blaster 2 Second 50%","Wall Blaster 2 FULL","Flying Ninja First 50%","Flying Ninja Second 50%","Flying Ninja FULL",
	"Shut The Box First 50%","Shut The Box Second 50%","Shut The Box FULL",//"Code Breaker First 50%","Code Breaker Second 50%","Code Breaker FULL","Hangman First 50% ","Hangman Last 50%","Hangman FULL"
	"Sky Is Falling First 50%","Sky Is Falling Second 50%","The Sky Is Falling","Endless Runner First 50%","Endless Runner Second 50%","Endless Runner FULL","Word Scramble First 50%","Word Scramble Second 50%","Word Scramble FULL",//"Server First 50%","Server Second 50%","Server FULL",
	"Circus Bounce First 50%","Circus Bounce Second 50%","Circus Bounce"];//"OddBall First 50%","OddBall Second 50%","OddBall FULL"];

	var GreenGamesArr=["Select Game","Rooftop Runner Full","Rooftop Runner first half","Rooftop Runner second half","Ninja Puzzle 2 Full",
	"Ninja Puzzle 2 first half","Ninja Puzzle 2 second half","moving Your Avatar FULL","moving Your Avatar First Half",
	"moving Your Avatar Second Half","basic Platforming FULL","basic Platforming First Half","basic Platforming Second Half",
	"Exploring the forest FULL","Exploring the forest First Half","Exploring the forest Second Half","Space Bumpers Full",
	"Space Bumpers First Half","Space Bumpers Second Half","Ninja Quest Full","Ninja Quest First Half","Ninja Quest Second Half","Asteroid Dodge - First 50%","Asteroid Dodge - Second 50%",
	"Asteroid Dodge - FULL","Moon Lander First 50%","Moon Lander Second 50%","Moon Lander Full","Snap First 50%","Snap Second 50%","Snap Full","Calculator First 50%","Calculator Second 50%","Calculator Full",
	"Rythm First 50%","Rythm Second 50%","Rythm Full","Naughts & Crosses First 50%","Naughts & Crosses Second 50%","Naughts And Crosses Full","Tank Race First 50%","Tank Race Second 50%","Tank Race Full",
	"Soduku First 50%","Soduku Second 50%","Soduku Full","Twenty One First 50%","Twenty One Second 50%","Twenty One Full","Minesweeper First 50%","Minesweeper Second 50%","Minesweeper Full"];

	var MinecraftArr=["Select Session","Session 1 - Block","Session 2 - Biome","Session 3 - Ore","Session 4 - Sword","Final Minecraft Summer Debrief (Armor)","Session 5 - Armor",
	"Session 6 - Shuriken","Session 7 - Mobs","Session 8 - Publishing","Session 9 - Custom Skins","Session 10 - Adventure Map","Minecraft Structures",
	"Minecraft Dimensions","Minecraft Fluids","Bulk Debrief Redstone","Bulk Debrief Conditionals","Bulk Debrief Functions"];

	var RobloxArr=["Select Session","Session 1 - Intro","Session 2 - Obby","Session 3 - Lua basics","Session 4 - for loop bridge",
	"Session 5 - hack button","Session 6 - Colour Remix","Session 7 - Terrain editor","Session 8 - Toolbox & Traps"];

	var StoryTellingArr=["Select Session","Session 1 - MCIntro","Session 2 - Custom Set","Session 3 - Storyboard","Session 4 - Scripting",
	"Session 5 - Audio Recording","Session 6 - Editing","Session 7 - Adventure Map"]

	var tourArr=["Select Session","Minecraft & Code Combat","Good & Interactive","Golden Ticket/Free Hour","Shy Child","Young Child","Older Child","Low Interaction"];

	var BlueBeltArr = ["Select Session","Session 1 - Freestyle","Session 2 - DOORWAYS OF DOOM!","Session 3 - Union and Negate","Session 4 - SPINNER SPINNER",
	"Session 5 - Obby Teams","Session 6 - Zombie Terrain","Session 7 - Zombie For Loop","Session 8 - Wall Runner",//"Session 8 - Zombie Island Final"
	"Session 9 - Block Tycoon",
	"Session 10 - Lighting","Session 11 - Kill Brick","Session 12 - Speed Boosts","Session 13 - Conveyor","Session 14 - KeysDoors",//"Basics of Script (Misc.)"
	"Session 15 - Health Pickup","Session 16 - Pickup Variations","Session 17 Colour Crazy FULL","Session 17 - Colour Crazy pt1",
	"Session 18 - Colour Crazy pt2","Session 19 FULL - Falling Colours","Session 19 First Half - Falling Colours","Session 19 - Second Half Falling Colours","Session 21 - Make Weapon",
	"Session 22 - Code Weapon First Half","Session 22 - Code Weapon Second Half","Session 23 - Moving NPC","Session 24 - Roblox Pathfinding",
	"Session 25 - Character Creation","Session 26 - Animations First Half","Session 26 - Animations FULL/Second Half","Session 27 - Patrolling Pathfinding",
	"Session 28 - First Person","Session 29 - Floor Is Lava","Session 30 - Void Runner","Session 31 - Disaster Land Terrain","Session 32 - Disaster Land Meteor",
	"Session 33 - Disaster Land Lightning","Session 34 - Project BlueBook","Session 35 - Bannana Madness First Half","Session 35 - Bannana Madness Second Half","Session 36 - Red Light Green Light FULL","Session 37+ - Capstone"];//"OLDS FURTHER DOWN","Session 3 - Obby pt2","Session 7 - Zombie pt1"];

	var PurpleBeltArr = ["Select Session","Session 1 Game Pass Setup","Session 2 Game Pass Implement", "Session 3 Tip Toe","Session 4 Cosmic Canyon","Session 5 Auto Points",
	"Session 6 Zillianaire Part 1","Session 6.5 Zillianaire Filler","Session 7 Zillianaire Part 2","Session 8 - Dungeon Delve","Session 9 - Zombie Football","Session 10 Hole in the Wall","Session 11 - Moon Lander 2 pt1","Session 12 - Moon Lander 2 pt2"
	,"Session 13 Homing Missile","Unity 1 Setup","Unity Dropping Bombs 1","Unity Dropping Bombs 2","Unity Dropping Bombs 3","Unity Dropping Bombs 4","Unity Dropping Bombs 5",
	"Unity Stack Part One","Unity Stack Part two","Unity Sketch Head First 50%","Unity Sketch Head Second 50%",
	"Unity Sketch Head FULL","Unity Meany Bird First 50%","Unity Meany Bird Second 50%","Unity Meany Bird FULL"]

	var BrownBeltArr = ["Select Session","PolyRun Session One","PolyRun Session Two","PolyRun Session Three","PolyRun Session Four First Half","PolyRun Session Four Second Half",
	"PolyRun Session Five (Final)","Cloud Hop Part One","Cloud Hop Part Two","Jungle Run One (Setup)","Jungle Run Two (Collectibles & Menu UI)",
	"Jungle Run Three (Enemies & Gold Bonus)"]

	for(var i = 0; i < WhiteGamesArr.length; i++) {
        var whiteOpt = WhiteGamesArr[i]
        var DropWhi="<option>"+whiteOpt+"</option>"
        var WhiteGames=WhiteGames+=DropWhi
    }	
	for(var x = 0; x < YellowGamesArr.length; x++) {
        var yellowOpt = YellowGamesArr[x];
        var DropYel="<option>"+yellowOpt+"</option>"
        var YellowGames=YellowGames+=DropYel
    }
	for(var y = 0; y < OrangeGamesArr.length; y++) {
        var orangeOpt = OrangeGamesArr[y];
        var DropOra="<option>"+orangeOpt+"</option>"
        var OrangeGames=OrangeGames+=DropOra
    }
	for(var z = 0; z < GreenGamesArr.length; z++) {
        var greenOpt = GreenGamesArr[z];
        var DropGre="<option>"+greenOpt+"</option>"
        var GreenGames=GreenGames+=DropGre
    }
	for(var v = 0; v < MinecraftArr.length; v++) {
        var mineOpt = MinecraftArr[v];
        var DropMine="<option>"+mineOpt+"</option>"
        var MineCGames=MineCGames+=DropMine
    }
	for(var c = 0; c < RobloxArr.length; c++) {
        var RobOpt = RobloxArr[c];
        var DropRob="<option>"+RobOpt+"</option>"
        var RobloxCGames=RobloxCGames+=DropRob
    }
	for(var d = 0; d < StoryTellingArr.length; d++) {
        var StoOpt = StoryTellingArr[d];
        var Dropsto="<option>"+StoOpt+"</option>"
        var StoryCGames=StoryCGames+=Dropsto
    }
	for(var e = 0; e < tourArr.length; e++) {
        var DebOpt = tourArr[e];
        var Dropdeb="<option>"+DebOpt+"</option>"
        var DebrGames=DebrGames+=Dropdeb
    }
	for(var f = 0; f < BlueBeltArr.length; f++) {
        var BluOpt = BlueBeltArr[f];
        var DropBlu="<option>"+BluOpt+"</option>"
        var BlueGames=BlueGames+=DropBlu
    }
	for(var g = 0; g < PurpleBeltArr.length; g++) {
        var PurOpt = PurpleBeltArr[g];
        var DropPur="<option>"+PurOpt+"</option>"
        var PurGames=PurGames+=DropPur
    }
	for(var h = 0; h < BrownBeltArr.length; h++) {
        var BroOpt = BrownBeltArr[h];
        var DropBro="<option>"+BroOpt+"</option>"
        var BroGames=BroGames+=DropBro
    }

	if(type == "White"){
			parentL.innerHTML="<p class='debrief'>Hello "+parent+"!</p>"
        	game.innerHTML = "<select id ='game' onchange='selectGame()'class='menu3'>"+WhiteGames
			game1.innerHTML = "<select id ='game1' onchange='selectGame2()'class='menu3'>"+WhiteGames
			game2.innerHTML = "<select id ='game2' onchange='selectGame3()'class='menu3'>"+WhiteGames
			game3.innerHTML = "<select id ='game3' onchange='selectGame4()'class='menu3'>"+WhiteGames
			game4.innerHTML = "<select id ='game4' onchange='selectGame5()'class='menu3'>"+WhiteGames
			game5.innerHTML = "<select id ='game5' onchange='selectGame6()'class='menu3'>"+WhiteGames
        }
		if (type == "Yellow"){
			parentL.innerHTML="<p class='debrief'>Hello "+parent+"!</p>"
		game.innerHTML = "<select id ='game' onchange='selectGame()'class='menu3'>"+YellowGames
		game1.innerHTML = "<select id ='game1' onchange='selectGame2()'class='menu3'>"+YellowGames
		game2.innerHTML = "<select id ='game2' onchange='selectGame3()'class='menu3'>"+YellowGames
		game3.innerHTML = "<select id ='game3' onchange='selectGame4()'class='menu3'>"+YellowGames
		game4.innerHTML = "<select id ='game4' onchange='selectGame5()'class='menu3'>"+YellowGames
		game5.innerHTML = "<select id ='game5' onchange='selectGame6()'class='menu3'>"+YellowGames
		

	}
	 if (type == "Orange"){
		parentL.innerHTML="<p class='debrief'>Hello "+parent+"!</p>"
		game.innerHTML = "<select id ='game' onchange='selectGame()'class='menu3'>"+OrangeGames
		game1.innerHTML = "<select id ='game1' onchange='selectGame2()'class='menu3'>"+OrangeGames
		game2.innerHTML = "<select id ='game2' onchange='selectGame3()'class='menu3'>"+OrangeGames
		game3.innerHTML = "<select id ='game3' onchange='selectGame4()'class='menu3'>"+OrangeGames
		game4.innerHTML = "<select id ='game4' onchange='selectGame5()'class='menu3'>"+OrangeGames
		game5.innerHTML = "<select id ='game5' onchange='selectGame6()'class='menu3'>"+OrangeGames
	}
	if (type == "Green"){
		parentL.innerHTML="<p class='debrief'>Hello "+parent+"!</p>"
		game.innerHTML = "<select id ='game' onchange='selectGame()'class='menu3'>"+GreenGames
		game1.innerHTML = "<select id ='game1' onchange='selectGame2()'class='menu3'>"+GreenGames
		game2.innerHTML = "<select id ='game2' onchange='selectGame3()'class='menu3'>"+GreenGames
		game3.innerHTML = "<select id ='game3' onchange='selectGame4()'class='menu3'>"+GreenGames
		game4.innerHTML = "<select id ='game4' onchange='selectGame5()'class='menu3'>"+GreenGames
		game5.innerHTML = "<select id ='game5' onchange='selectGame6()'class='menu3'>"+GreenGames
	}
	if(type == "TOUR"){
		parentL.innerHTML="<p class='debrief'>Hello "+parent+"!</p>"
		game.innerHTML = "<select id ='game' onchange='selectGame()'class='menu3'>"+DebrGames
		game1.innerHTML = "<select id ='game1' onchange='selectGame2()'class='menu3'>"+DebrGames
		game2.innerHTML = "<select id ='game2' onchange='selectGame3()'class='menu3'>"+DebrGames
		game3.innerHTML = "<select id ='game3' onchange='selectGame4()'class='menu3'>"+DebrGames
		game4.innerHTML = "<select id ='game4' onchange='selectGame5()'class='menu3'>"+DebrGames
		game5.innerHTML = "<select id ='game5' onchange='selectGame6()'class='menu3'>"+DebrGames
	}
	if (type == "MINECRAFT"){
		parentL.innerHTML="<p class='debrief'>Hello "+parent+"!</p>"
		game.innerHTML = "<select id ='game' onchange='selectGame()'class='menu3'>"+MineCGames
		game1.innerHTML = "<select id ='game1' onchange='selectGame2()'class='menu3'>"+MineCGames
		game2.innerHTML = "<select id ='game2' onchange='selectGame3()'class='menu3'>"+MineCGames
		game3.innerHTML = "<select id ='game3' onchange='selectGame4()'class='menu3'>"+MineCGames
		game4.innerHTML = "<select id ='game4' onchange='selectGame5()'class='menu3'>"+MineCGames
		game5.innerHTML = "<select id ='game5' onchange='selectGame6()'class='menu3'>"+MineCGames
	}
	if (type == "ROBLOX"){
		parentL.innerHTML="<p class='debrief'>Hello "+parent+"!</p>"
		game.innerHTML = "<select id ='game' onchange='selectGame()'class='menu3'>"+RobloxCGames
		game1.innerHTML = "<select id ='game1' onchange='selectGame2()'class='menu3'>"+RobloxCGames
		game2.innerHTML = "<select id ='game2' onchange='selectGame3()'class='menu3'>"+RobloxCGames
		game3.innerHTML = "<select id ='game3' onchange='selectGame4()'class='menu3'>"+RobloxCGames
		game4.innerHTML = "<select id ='game4' onchange='selectGame5()'class='menu3'>"+RobloxCGames
		game5.innerHTML = "<select id ='game5' onchange='selectGame6()'class='menu3'>"+RobloxCGames
	}
	if (type == "STORYTELLING"){
		parentL.innerHTML="<p class='debrief'>Hello "+parent+"!</p>"
		game.innerHTML = "<select id ='game' onchange='selectGame()'class='menu3'>"+StoryCGames
		game1.innerHTML = "<select id ='game1' onchange='selectGame2()'class='menu3'>"+StoryCGames
		game2.innerHTML = "<select id ='game2' onchange='selectGame3()'class='menu3'>"+StoryCGames
		game3.innerHTML = "<select id ='game3' onchange='selectGame4()'class='menu3'>"+StoryCGames
		game4.innerHTML = "<select id ='game4' onchange='selectGame5()'class='menu3'>"+StoryCGames
		game5.innerHTML = "<select id ='game5' onchange='selectGame6()'class='menu3'>"+StoryCGames
	}
	if (type == "Blue"){
		parentL.innerHTML="<p class='debrief'>Hello "+parent+"!</p>"
		game.innerHTML = "<select id ='game' onchange='selectGame()'class='menu3'>"+BlueGames
		game1.innerHTML = "<select id ='game1' onchange='selectGame2()'class='menu3'>"+BlueGames
		game2.innerHTML = "<select id ='game2' onchange='selectGame3()'class='menu3'>"+BlueGames
		game3.innerHTML = "<select id ='game3' onchange='selectGame4()'class='menu3'>"+BlueGames
		game4.innerHTML = "<select id ='game4' onchange='selectGame5()'class='menu3'>"+BlueGames
		game5.innerHTML = "<select id ='game5' onchange='selectGame6()'class='menu3'>"+BlueGames
	}
	if (type == "Purple"){
		parentL.innerHTML="<p class='debrief'>Hello "+parent+"!</p>"
		game.innerHTML = "<select id ='game' onchange='selectGame()'class='menu3'>"+PurGames
		game1.innerHTML = "<select id ='game1' onchange='selectGame2()'class='menu3'>"+PurGames
		game2.innerHTML = "<select id ='game2' onchange='selectGame3()'class='menu3'>"+PurGames
		game3.innerHTML = "<select id ='game3' onchange='selectGame4()'class='menu3'>"+PurGames
		game4.innerHTML = "<select id ='game4' onchange='selectGame5()'class='menu3'>"+PurGames
		game5.innerHTML = "<select id ='game5' onchange='selectGame6()'class='menu3'>"+PurGames
	}
	if (type == "Brown"){
		parentL.innerHTML="<p class='debrief'>Hello "+parent+"!</p>"
		game.innerHTML = "<select id ='game' onchange='selectGame()'class='menu3'>"+BroGames
		game1.innerHTML = "<select id ='game1' onchange='selectGame2()'class='menu3'>"+BroGames
		game2.innerHTML = "<select id ='game2' onchange='selectGame3()'class='menu3'>"+BroGames
		game3.innerHTML = "<select id ='game3' onchange='selectGame4()'class='menu3'>"+BroGames
		game4.innerHTML = "<select id ='game4' onchange='selectGame5()'class='menu3'>"+BroGames
		game5.innerHTML = "<select id ='game5' onchange='selectGame6()'class='menu3'>"+BroGames
	}
}
