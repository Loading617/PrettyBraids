<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Clients: Pretty Braids</title>
<meta charset="UTF-8">
<meta name="viewport" id="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge Webkit, Chrome= Edge">
<link rel="icon" type="image/x-icon" href="prettybraids.ico">
<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    
<nav class="navbar">
      <ul class="nav-links">
        <div class="nav-links-left">
          <li><a href="home.php">Home</a></li>
          <li><a href="prices.php">Prices</a></li>
          <li><a href="bookus.php">Book Us</a></li>
        </div>
        <div class="nav-links-right">
          <li><a href="myclients.php">My Clients</a></li>
          <li><a href="about.php">About</a></li>
        </div>
      </ul>
      <div class="logo">
        <img
          src="prettybraids.png"
          alt="Pretty Braids Logo"
        />
      </div>
    </nav>
     <main>
      <div class="container">
      <?php echo "<h1 style="color: #ff00b4">My Clients</h1>" ?>
      <?php echo "<p style="color: #ff00b4">Here are my Pretty Braiders!</p>"; ?>
      <div style="height: 100%; overflow-x: hidden; text-align: center">
			<div class="csslider infinity" id="slider1">
			<input type="radio" name="slides" checked="checked" id="slides_1"/>
			<input type="radio" name="slides" id="slides_2"/>
			<input type="radio" name="slides" id="slides_3"/>
			<input type="radio" name="slides" id="slides_4"/>
			<input type="radio" name="slides" id="slides_5"/>
				<ul>
          <li>
                        <?php echo "<p>
				<iframe width="100%" height="400px" src="vids/Snapinsta.app_video_D34D8538A3AEBF98A44214536EECC2B5_video_dashinit.mp4" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
						</p>"; ?>
					</li>
					<li>
						<?php echo "<p>
            <iframe width="100%" height="400px" src="vids/Snapinsta.app_video_7F4FC3B9B96B90F404B93826B8E8E09A_video_dashinit.mp4" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
						</p>"; ?>
					</li>
					<li>
						<?php echo "<p>
						<iframe width="100%" height="400px" src="vids/Snapinsta.app_video_924C9E9A1829538A0731792AD36C4DA9_video_dashinit.mp4" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
						</p>"; ?>
					</li>
          <li>
						<?php echo "<p>
						<iframe width="100%" height="400px" src="vids/Snapinsta.app_video_5B4A8826E68F0D14AE070412D6455FBD_video_dashinit.mp4" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
						</p>"; ?>
					</li>
					<li>
            			<?php echo "<p>
						<iframe width="100%" height="400px" src="vids/Snapinsta.app_video_1443B1E471B1D4C95DF118B3494DB887_video_dashinit.mp4" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
						</p>"; ?>
					</li>
					<li>
						
						<?php echo "<p>
						<video controls preload>
						<source src="" />
						</video> 
						</p>"; ?>
					</li>
          <li>
						<?php echo "<p>
						<video controls preload>
						<source src="" />
						</video> 
						</p>"; ?>
					</li>
				</ul>
					<div class="arrows">
						<label for="slides_1"></label>
						<label for="slides_2"></label>
						<label for="slides_3"></label>
						<label for="slides_4"></label>
						<label for="slides_5"></label>
						<label class="goto-first" for="slides_1"></label>
						<label class="goto-last" for="slides_5"></label>
					</div>
					<div class="navigation"> 
						<div>
							<label for="slides_1"></label>
							<label for="slides_2"></label>
							<label for="slides_3"></label>
							<label for="slides_4"></label>
							<label for="slides_5"></label>
						</div>
					</div>
			</div>
		</div>
</body>
</html>
