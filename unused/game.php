<?php
    class Game {
        private $to = "contact@ryanspice.com";
        private $subject = "RyanSpice.Com Contact";
        private $message;
        private $from;
        private $headers;

        private $switch;
        private $page;
        private $info =  array("","","","");
        function __construct() {
            $this->switch =  $_GET['game'];
            $this->page =  $_GET['page'];
        }
        function Title() {
            print $this->switch;
            //print '<img width="90%" src="image_snowboarding_title.png">';
        }
        function Nav() {
            for ($i=3;$i>=0;--$i)
            print '<a class="nav_a" href="?game='.$this->switch.'&page='.$i.'">'.$this->menu[$i].'</a>  ';
            //print 'Game - Media - Documentation - About';
        }
        function GetTitleImg() {

            print '<img style="width:100%;max-width:480px;" src="images/image_title_'.$this->switch.'.png"/>';
        }
        function GetTitle() {
            print $this->switch;
        }
        function GetGameUrl() {
            print 'https://ryanspice.com/'.$this->switch.'/';
        }
        function GetBackground() {
            print 'images/'.$this->switch.'/background_'.$this->switch.'.png';
        }
        function GetVideo() {
            print 'videos/video_'.$this->switch.'.mp4';
        }
        private $colour;
        private $colour2;
        private $font;
        private $playfont;
        private $radius = 7;
        function GetColour() {
            print $this->colour;
        }
        function GetFont() {
            print $this->font;
        }
        function GetPlayFont() {
            print $this->playfont;
        }
        function GetContainerStyle() {

            switch ($this->switch)
            {
             case "Bovxel":

                $this->info[0] = "2013 Toronto <a href='http://globalgamejam.org/2014/games/bovxel-02'>Global Game Jam Entry!</a> ";
                $this->info[1] = "Explore the Unknown!";
                $this->info[2] = "100% Canvas Art!";
                $this->info[3] = "Open Source!";

                 $this->colour =  'rgba(0,0,0,1)';
                 $this->colour2 =  'rgba(64,64,64,0.85)';
                 $this->font =  'color:#DDDDDD;font-family:VT323;font-weight:black; text-shadow: 0px 1px #000000;';
                 $this->radius =  0;
                break;
             case "SnowBoarding":
                 $this->colour =  'rgba(0,0,244,0.75)';
                 $this->colour2 =  'rgba(0,0,64,0.75)';
                $this->info[0] = "Take your place on the <a href='#'>Leaderboards!</a>";
                $this->info[1] = "Customize your Character!";
                $this->info[2] = "16 Pre-Made Maps to Choose!";
                $this->info[3] = "Coming Soon!";
                 $this->font =  'font-family:Open+Sans+Condensed;font-weight:bold; text-shadow: 0px 1px #000000;';
                     break;
            case "KongQuest":

                $this->info[0] = "Donkey and Diddy are back!";
                $this->info[1] = "Dive into the Mines!";
                $this->info[2] = "Graphics by Rare";
                $this->info[3] = "It's Bananas!";

                 $this->font =  'color:#DDDDAA;font-family:Bubblegum+Sans;';
                break;
             case "FlappyFish":


                 $this->info[0] = "Remember FlappyBird?";
                 $this->info[1] = "Well heres a Fish!";
                 $this->info[2] = "Highscores!";
                 $this->info[3] = "Flap! Flap!";
                 $this->colour2 =  'rgba(27, 49, 95,0.75)';
                 $this->colour =  'rgba(27, 49, 95,0.75)';
                 $this->font =  'color:rgba(127, 249, 195,1);font-family:Bubblegum+Sans;';
                     break;
             case "ReverenceLost":
                $this->info[0] = "From the creative mind of <a href=''>Scott Humes.</a>";
                $this->info[1] = "Emersive Storyline!";
                $this->info[2] = "Thrilling fast  2d side scrolling!";
                $this->info[3] = "An RCC School Project";


                 $this->colour =  'rgba(25,25,25, 0.75)';
                 $this->colour2 =  'rgba(75,25,25,0.75)';
                 $this->font =  'color:#DDAADD;font-family:Syncopate;';
                     break;
             default:
                 $this->colour =  'rgba(0,0,0,0.75)';
                 $this->colour2 =  'rgba(25,25,25,1)';
                 $this->font =  'color:rgba(255,255,255,1);';
            }
                 $this->playfont =  'color:'.$this->colour.' !important;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color:'.$this->colour2.';
    -webkit-text-fill-color: '.$this->colour2.';text-outline: 2px '.$this->colour2.' !important;';
                print '
            padding:4px;
            width:340px;
            background:'.$this->colour2.';
            border-radius:0;
            -webkit-box-shadow:0 0 2px 1px '.$this->colour.';
            -moz-box-shadow:0 0 2px 1px '.$this->colour.';
            box-shadow:0 0 2px 1px '.$this->colour.';
            color:white;
            margin:1%;
            border-radius: '.$this->radius.'px !important;
            '.$this->font.'';




        }
        function Content() {
            print '<div style="text-align:center;">';
            print '<h6>'.$this->switch.' Features</h6>';
            print '<h3>'.$this->info[0].'</h3>';
            print '<h3>'.$this->info[1].'</h3>';
            print '<h3>'.$this->info[2].'</h3>';
            print '<h3>'.$this->info[3].'</h3>';
            print '</div>';
            /*
            switch ($this->page)
            {
             case "":
                $this->page = 3;
             default:
                print '<h4>'.$this->menu[$this->page].'</h4>';
                print '<p>'.$this->menu[$this->page].'</p>';
                print '<li>'.$this->switch.'</li>';
            }*/
        }
    }
    $Game = new Game();
?>

<html>
    <head>

        <meta charset="utf-8">

        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

        <meta name="description" content="">

        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" href="apple-touch-icon.png">

        <link rel="stylesheet" href="style.css">

		<link rel="stylesheet" type="text/css" href="game/template-style.css">
        <link href="//fonts.googleapis.com/css?family=VT323:400" rel="stylesheet" type="text/css">

		<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Droid+Sans">
        <link href='https://fonts.googleapis.com/css?family=Open+Sans+Condensed:700' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Syncopate">
		<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Bubblegum+Sans">
        <style>
        * {
         font-family:Droid+Sans;
            <?php $Game->GetFont();?>
        }
        body {
        }
        .border_nav {
            <?php $Game->GetContainerStyle(); ?>
        }
        .border_nav:hover {
		  -webkit-opacity: 1 !important;
		  -moz-opacity: 1 !important;
		  opacity: 1 !important;
		-webkit-transition: opacity 0.4s ease;
		  -moz-transition:  opacity 0.4s ease;
		  -ms-transition:   opacity 0.4s ease;
		  -o-transition:    opacity 0.4s ease;
		  transition:       opacity 0.4s ease;s ease;
        }
        .title {

            <?php $Game->GetFont();?>
        }
        </style>
        <script rel=prefetch type="application/x-javascript" src="game/background.js"></script>
	</head>
	<body>
		<div class="template">
			<div class="titleDiv">
				<h1 class = "title_game" style="opacity:1" >
					<?php $Game->GetTitleImg(); ?>
				</h1>
				<img class = "image icon" hidden disabled />
			</div>


			<div class="controls " style="<?php $Game->GetFont();?>">
			</div>

			<video class="vid1 border_nav" style="background:black;border-radius:7px;" controls>
				<source src="https://ryanspice.com/R6.1/<?php $Game->GetVideo(); ?>" type="video/mp4">
					Your browser does not support the video tag.
			</video>

            <div class=" writeup">

				<p><a href="<?php $Game->GetGameUrl(); ?>" style=" <?php $Game->GetPlayFont();?>">

                <a href="<?php $Game->GetGameUrl(); ?>" class="menulist border_nav" style="padding:1%;">Play Now</a>
                <a href="https://ryanspice.com/" class="menulist border_nav" style="padding:1%;">RyanSpice.com</a>
                    </a></p>
			</div>


			<div class="navlist " hidden disabled>
                <?php /*$Game->Nav();*/ ?>
			</div>

			<div id = "features" class="features border_nav">
                <?php $Game->Content(); ?>

			</div>

			<div id = "gallery" class="gallery border_nav" onclick="forward()" >
				<div style="border-radius:7px;margin:-7px;width:104%;background:<?php $Game->GetColour(); ?>;position:relative;z-index:-2;">
				    <img class = "galleryImg" />
				</div>
			</div>
			<video class="border_nav vid" style="margin-top:13px;margin-left:13px;background:black" width="90%" height="240" hidden disabled controls>
                Your browser does not support the video tag.
			</video>

			<div class="series border_nav" style="background:rgba(25,25,25,0.75);" hidden disabled>

                        <div style="width:100%;text-align:center;padding-bottom:2px;padding-top:2px;background:rgba(25,25,25,0.25);
            border-radius: 14px !important;"><h4 style="margin:0px;">More Games</h4></div>
					<div class = "folioText" style = "" >
						<div class="catalogueDiv" >
							<h5 class = "catalogTitle" >Html5</h5>
								<li class="galGameSelect"><a class="title" onClick = "changeGame(this)">Tetris</a></li>
								<li class="galGameSelect"><a class="title" onClick = "changeGame(this)">Hakio</a></li>
								<li class="galGameSelect"><a class="title" onClick = "changeGame(this)">Bovxel</a></li>
								<li class="galGameSelect"><a class="title" onClick = "changeGame(this)">Flappy Fish</a></li>
								<li class="galGameSelect"><a class="title" onClick = "changeGame(this)">Snow Boarding</a></li>
								<li class="galGameSelect"><a class="title" onClick = "changeGame(this)">Factory Run</a></li>
								<li class="galGameSelect"><a class="title" onClick = "changeGame(this)">Reverence Lost</a></li>
								<li class="galGameSelect"><a class="title" onClick = "changeGame(this)">Miner Accadent</a></li>
								<li class="galGameSelect"><a class="title" onClick = "changeGame(this)">Nanny Academy</a></li>
						</div>
						<div class="catalogueDiv">
							<h5 class = "catalogTitle" >GameMaker</h5>
									<li class="galGameSelect"><a class="title" onClick = "changeGame(this)" href="#">The Years</a></li>
									<li class="galGameSelect"><a class="title" onClick = "changeGame(this)" href="#">The Years (Mobile Port)</a></li>
									<li class="galGameSelect"><a class="title" onClick = "changeGame(this)" href="#">The Years Beyond</a></li>
									<li class="galGameSelect"><a class="title" onClick = "changeGame(this)" href="#">Cold Universe</a></li>
									<li class="galGameSelect"><a class="title" onClick = "changeGame(this)" href="#">Drew the Beholder</a></li>
									<li class="galGameSelect"><a class="title" onClick = "changeGame(this)" href="#">Phayne</a></li>
									<li class="galGameSelect"><a class="title" onClick = "changeGame(this)" href="#">Dodgeball</a></li>
						</div>
						<div class="catalogueDiv">
							<h5 class = "catalogTitle" >Other</h5>
									<li class="galGameSelect"><a class="title"  onClick = "changeGame(this)"  href="#">Reverence Lost (SDL)</a></li>
									<li class="galGameSelect"><a class="title"  onClick = "changeGame(this)"  href="#">Demonhaus (Unreal Engine 3)</a></li>
									<li class="galGameSelect"><a class="title"  onClick = "changeGame(this)"  href="#">Battle Bots (C#, using Unity)</a></li>
									<li class="galGameSelect"><a class="title"  onClick = "changeGame(this)"  href="#">Kastles (AS3, using Flash Develop)</a></li>
						</div>
						<div class="catalogueDiv">
							<h5 class = "catalogTitle" >Concept</h5>
									<li class="galGameSelect"><a class="title" onClick = "changeGame(this)" href="#">Battle Brewery</a></li>
									<li class="galGameSelect"><a class="title" onClick = "changeGame(this)" href="#">The Project</a></li>
						</div>
					</div>
			</div>
		</div>
	</body>
    <script rel=prefetch type="application/x-javascript" src="./js/spice.js"></script>
        <script rel=prefetch type="text/javascript">
	var forward = function(){
         App.client.update.state.current.forward();
	}
	var back = function(){
		App.client.update.state.current.galleryIndex--;
		App.client.update.state.current.incheck = false;
		App.client.update.state.current.dir = -1;
	}
     App.OnLoad = function(){
		App.options.canvas.override = true;
		App.options.canvas.position.position = "fixed";
		App.options.canvas.position.z = -3;
		App.options.canvas.position.left = 0;
		App.options.canvas.position.top = 0;
		App.options.canvas.size.height = window.innerHeight;
		App.options.canvas.size.width = window.innerWidth-20;
        App.Init("Spice.js",944,720);
     }
     _Main.prototype = {
         name:"Menu",
         init:function() {
		this.l = 0;
		this.h = 1;
		this.v = 0.1;
		this.x = 0;
		this.y = 0;
		this.s = 1;
		this.ss = 0;
		this.FogY = 0;
		this.FogY2 = 0;
		this.fader = 0;
		this.fade = false;
		this.StartAlpha = 0;
		this.FogY = 0;
		this.xxx = 0;
		this.selecter = 0;
		this.boxoffset = 0;
		this.revAngle = 0;
		this.gallery = [];
		this.alpha = [];
		this.alpha[0] = 1;
		this.alpha[1] = 1;
		this.alpha[2] = 1;
		this.alpha[3] = 1;
		this.alpha[4] = 1;
		this.alpha[5] = 1;
		this.alpha[6] = 1;
                          this.sel =0;
		this.WaterY = 0;
		this.viewX = 0;
		this.cloudX = 0;
		this.cloudSize = 25;
		this.cx=[];
		this.cc = 20 + Math.floor(this.app.client.setWidth/this.cloudSize);

		for(var i=this.cc;i>=0;--i)
			this.cx[i] = i*this.cloudSize;

		this.flappyfishArray = [];
		this.flappyfishArray[0] = this.graphics.load("F00","images/FlappyFish/FlappyFish0");
		this.flappyfishArray[1] = this.graphics.load("F02","images/FlappyFish/FlappyFish1");
		this.flappyfishArray[2] = this.graphics.load("F01","images/FlappyFish/FlappyFish2");




                            		this.galleryFlappyBackgrounds = [];
		this.galleryFlappyBackgrounds[0] = this.graphics.load("FF0","images/FlappyFish/FlappyFishClouds");
		this.galleryFlappyBackgrounds[1] = this.graphics.load("FF1","images/FlappyFish/FlappyFishGradient");
		this.galleryFlappyBackgrounds[2] = this.graphics.load("FF2","images/FlappyFish/FlappyFishGround");
		this.galleryFlappyBackgrounds[3] = this.graphics.load("FF3","images/FlappyFish/FlappyFishWave");
		this.galleryFlappyBackgrounds[1].width = this.app.client.setWidth;
		this.galleryFlappyBackgrounds[1].height = this.app.client.setHeight;

		this.gallerySnowBackgrounds = [];
		this.gallerySnowBackgrounds[0] = this.graphics.load("eh","images/SnowBoarding/bg_m1.min");
		this.gallerySnowBackgrounds[1] = this.graphics.load("be","images/SnowBoarding/bg_m2.min");
		this.gallerySnowBackgrounds[2] = this.graphics.load("ce","images/SnowBoarding/bg_fog1.min");
		this.gallerySnowBackgrounds[3] = this.graphics.load("de","images/SnowBoarding/bg_fog2.min");
		this.gallerySnowBackgrounds[4] = this.graphics.load("ee","images/SnowBoarding/bg_cloud1.min");
		this.gallerySnowBackgrounds[5] = this.graphics.load("ef","images/SnowBoarding/bg_cloud2.min");
		this.gallerySnowBackgrounds[6] = this.graphics.load("je","images/SnowBoarding/bg_m3.min");

		this.galleryKongBackgrounds = [];
		this.galleryKongBackgrounds[0] = this.graphics.load("kongquest00","images/KongQuest/45272.min");
		this.galleryKongBackgrounds[1] = this.graphics.load("kongquest01","images/KongQuest/26894.min");
		this.galleryKongBackgrounds[2] = this.graphics.load("kongquest02","images/KongQuest/guy1.min");
		this.galleryKongBackgrounds[3] = this.graphics.load("kongquest03","images/KongQuest/skullkart.min");
		this.galleryKongBackgrounds[4] = this.graphics.load("kongquest04","images/KongQuest/rail");

		this.galleryRevBackgrounds = [];
		this.galleryRevBackgrounds[0] = this.graphics.load("revBG1","images/ReverenceLost/reverenceBackground1.min");
		this.galleryRevBackgrounds[1] = this.graphics.load("revBG2","images/ReverenceLost/reverenceBackground2.min");
		this.galleryRevBackgrounds[2] = this.graphics.load("revBG3","images/ReverenceLost/reverenceBackground3.min");
		this.galleryRevBackgrounds[3] = this.graphics.load("revBG3","images/ReverenceLost/reverenceBackground4.min");
		this.galleryRevBackgrounds[4] = this.graphics.load("revBG3","images/ReverenceLost/reverenceBackground5.min");
		this.galleryRevBackgrounds[5] = this.graphics.load("revBG3","images/ReverenceLost/reverenceBackground0.min");

                            this.sy=0;
                                this.game = "<?php $Game->GetTitle(); ?>";
                                this.app.ext.title("RyanSpice.Com - <?php $Game->GetTitle(); ?>");
								this.app.ext.metatag.metaAppend(this.app.ext.metatag.metaLink("images/favicon_<?php $Game->GetTitle(); ?>.png","shortcut icon","image/png"));
                                this.app.canvas.background_set("rgba(25,25,25,0)");
                                this.app.canvas.getCanvas().style.pointerEvents = "none";
                                this.app.ext.top();
								this.dir = 0;
                                this.w = this.app.client.setWidth;
                                this.h = this.app.client.setHeight;
                                this.x = 0;
                                this.y = 0;
								this.incheck = true;
								this.incheckFade = 1;
								this.galleryIndex = 0;
								this.galleryImages = ["images/snowboarding/wp_ss_20140720_0002.min",
													  "images/snowboarding/wp_ss_20140720_0003.min",
													  "images/snowboarding/wp_ss_20140720_0004.min",
													  "images/snowboarding/wp_ss_20140720_0005.min",
													  "images/snowboarding/wp_ss_20140720_0006.min"];
								this.galleryImage = document.getElementsByClassName("galleryImg")[0];
								this.galleryImage.src = "images/<?php $Game->GetTitle(); ?>/preview_<?php $Game->GetTitle(); ?>" + this.galleryIndex + ".png";
								this.backgrounds = [];
								this.sections = [];
                                this.template = document.getElementsByClassName("template")[0];
                                this.title_game = document.getElementsByClassName("title_game")[0];
								this.sections[0] = this.gallery = document.getElementsByClassName("gallery")[0];
								this.sections[1] = this.features = document.getElementsByClassName("features")[0];
								this.sections[2] = this.controls = document.getElementsByClassName("controls")[0];
								this.sections[3] = this.writeup = document.getElementsByClassName("writeup")[0];
								this.sections[4] = this.title = document.getElementsByClassName("titleDiv")[0];
								this.sections[5] = this.image = document.getElementsByClassName("image")[0];
								this.sections[6] = this.image2 = document.getElementsByClassName("image")[0];
								this.sections[7] = this.image3 = document.getElementsByClassName("image")[0];
								this.sections[8] = document.getElementsByClassName("title")[0];
								this.sections[9] = document.getElementsByClassName("series")[0];
								this.sections[10] = document.getElementsByClassName("vid")[0];
								this.sections[11] = document.getElementsByClassName("vid1")[0];
								this.sections[12] = document.getElementsByClassName("navlist")[0];
								//this.sections[5].src = "http://ryanspice.com/R4/spicejsicon.png";
								//this.sections[6].src = "http://www.blog.catblogosphere.com/cb-content/uploads/2013/07/google_play_icon.png";
								//this.sections[7].src = "https://www.neverloseit.com.au/wp-content/uploads/2013/04/windows-store-icon.jpg";

								this.count = 0;
							this.doc = document;

							this.lastfont = 0;
							this.galleryImage.style.position = "relative";


                            for(var i=this.sections.length-1;i>=0;--i){
								if (i==8)
									continue;

								var font = this.app.client.Math.Clamp(0.7*Math.round(window.innerWidth/1080*100)/100,1,3)+"em";
                                //font = this.app.client.math.clamp(font,0.4,1);
									this.lastfont = font+"em";
									this.sections[i].style.fontSize = font;

							}


                            this.state=Snowboarding.Menu;this.state.visuals=this.visuals;this.state.app=this.app;this.state.graphics=this.graphics;this.state.init();
                            return true;
                            },
                        forward:function(){
						App.client.update.state.current.galleryIndex++;
						App.client.update.state.current.incheck = false;
						App.client.update.state.current.dir = 1;
						App.client.update.state.current.count = 0;


                        },
                        update:function() {
                            this.state.update();
                            if (this.game){
                                if (this.game=="ReverenceLost")
                                        this.title_game.style.opacity = 0;
                                else
                                        this.title_game.style.opacity = 1;
                                            this.FogY-=1*this.app.delta;
                                            this.lastFogY = this.fogY;
                                            this.fogY = Math.sin(this.FogY/100);
                                            this.y+=(this.v*this.s)*(this.app.delta);
                                            this.StartAlpha+= 0.03*this.End*this.app.delta;

                                            this.backgroundPos = Math.sin(this.y/this.app.client.setWidth);
                                            this.FogY2 =(1+Math.sin(this.FogY/180)*0.5);
                                            this.FogY3 = 0.5+this.FogY2;
                                            this.FogY4 =(0.6+Math.sin(this.FogY/90)*0.5);

                                            if (this.WaterY<0)
                                                {
                                                this.WaterY+=App.client.delta*1;
                                                return;
                                                }

                                            this.viewX +=App.client.delta*1;
                                            if (this.cloudX>-140)
                                                this.cloudX -= App.client.delta*1;
                                            else{
                                                this.cloudX = this.app.client.setWidth + 140;
                                                this.cloudY = Math.random()*200;
                                                }
                                            for(var i=this.cc;i>=0;--i)
                                                    if (-this.viewX +this.cx[i]<-this.cloudSize*5)
                                                        this.cx[i] = this.viewX +this.app.client.setWidth+this.cloudSize*5;

                                    var doc = document.documentElement;
                                    //var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
                                    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
                                            //this.sy = top;
                                            var a = (-this.sy+top)/2;
                                            if (this.sy<top)
                                            this.sy+=a;

                                            if (this.sy>top)
                                            this.sy+=a;
                                            }
                            //this.sy = top;
							this.count+=0.002;
							if (this.count>1)
								this.count = 0,this.forward();
							var doc = this.doc;
							var docw = window.innerWidth;
							App.options.canvas.size.width = docw-20;

                            App.options.canvas.size.height = window.innerHeight;
							//App.options.canvas.size.height = docw-20;
							//App.canvas.getCanvas().style.top=this.sy+"px";
							this.galleryIndex = App.client.Math.Wrap(this.galleryIndex,0,this.galleryImages.length-1);
							if (!this.incheck)
								if (this.incheckFade<0.2)
									this.galleryImage.src = "images/<?php $Game->GetTitle(); ?>/preview_<?php $Game->GetTitle(); ?>" + this.galleryIndex + ".png";
							if (!this.incheck)
							{
								if (this.incheckFade>-0.5*this.app.client.delta)
								{
								this.incheckFade-=0.1*this.app.client.delta;
								}else{this.incheck=true;this.dir=-this.dir;}
							}
							if (this.incheck)
								if (this.incheckFade<1)
								this.incheckFade+=0.1*this.app.client.delta;


								this.galleryImage.style.opacity = this.incheckFade;
								//this.galleryImage.style.left = + this.dir*(-100+ this.incheckFade*100)+"px";

                            var font = this.app.client.Math.Clamp(0.7*Math.round(window.innerWidth/1080*100)/100,1,3)+"em";
							for(var i=this.sections.length-1;i>=0;--i){
								if (i==8)
									continue;
                                element = this.sections[i];
								//if (i==12)
								//	continue;
								//if (i==2)
								//	continue;

								if (this.lastfont != font)
								{
									this.lastfont = font+"px";
									element.style.fontSize = font;
								}
								if (docw<=720)
								{
									element.style.width = "85%";
                                    element.style.marginLeft = "8%";
								}
								else
								{
									element.style.width = "490";
                                    element.style.marginLeft = "0px";

								}
                                //this.sections[i].style.position = "relative";
                                //this.sections[i].style.top = Math.round(-this.sy*0.5)+"px";
                                //element.style.position = "relative";
                                //element.style.top = -this.sy*0.2 +"px";
                                //d = Math.round((window.innerHeight+100 - (element.offsetTop - element.scrollTop + element.clientTop)+this.sy)/500);
//this.sections[i].style.marginBottom = "0px";
//this.sections[i].style.paddingBottom = "0px";
//this.sections[i].style.marginTop = "0px";
							}
							if (docw>=720)
							{
								this.sections[0].style.width="48.5%";
								this.sections[2].style.width="98.1%";
								this.sections[11].style.width="98%";




								this.sections[4].style.width="initial";
								this.sections[4].style.float="";
								this.sections[4].style.marginLeft="0px	";

								this.sections[3].style.width="98%";
								this.sections[9].style.width="98%";

								this.sections[10].style.marginLeft="-3.5%";
								this.sections[10].style.width="100%";
								this.sections[11].style.position="relative";
								this.sections[11].style.left="-3px";
								this.sections[11].style.maxWidth="720px";

								this.sections[9].style.height="150px";
								this.sections[9].style.fontSize="0.9em";

								this.sections[1].style.minHeight="0";
							}
                            else
                            {
								this.sections[9].style.height="275px";

								this.sections[1].style.minHeight="250px";

								this.sections[11].style.maxWidth="100%";
								this.sections[11].style.position="relative";
								this.sections[11].style.left="-10px";
                            }

							if (docw<=1024)
							if (docw>=720)
							{
								this.sections[0].style.width="48%";
								this.sections[1].style.width="46%"

							}
							else
							{
							}
                            this.sections[9].style.fontSize=this.app.client.Math.Clamp(0.6*Math.round(window.innerWidth/1080*100)/100,1,3)+"em";
                            this.sections[9].style.marginBottom='75px';
                            this.sections[9].style.paddingBottom='50px';
							if (this.sections[1].style.height != this.sections[0].clientHeight-6+"px")
							this.sections[1].style.height = this.sections[0].clientHeight-6+"px";
                            return true;
                            },
                        draw:function() {
                            Snowboarding.Menu.backgroundFunction2(this.game);
                            return true;
                            }
                    };
        </script>
</html>
