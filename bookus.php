<!DOCTYPE html>
<html lang="en">
<head>
<title>Book Us: Pretty Braids</title>
<meta charset="UTF-8">
<meta name="viewport" id="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge Webkit, Chrome= Edge">
<link rel="icon" type="image/x-icon" href="prettybraids.ico">
<link rel="stylesheet" type="text/css" href="styles.css">
<script type="text/javascript" src="script.js"></script>
</head>
    
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

<body class="main_bg">
    <div class="form">
    <form action="script.js" method="get">
        <div class="form-text">
            <?php echo "<h1><span><img src="prettybraids.png" alt="Pretty Braids Logo" width="32" height="32"></span>Book with Pretty Braids<span><img src="prettybraids.png" alt="Pretty Braids Logo" width="32" height="32"></span></h1>"; ?>
            <?php echo "<p>Book your appointment with Pretty Braids today. We are here to make your braids look and feel amazing.</p>"; ?>
        </div>
                <div class="main-form">
                    <div>
                    <span>Your Name:</span>
                    <input type="text" name="name" id="name" placeholder="Barbara Moore" required>
                </div>
                <div>
                    <span>Your email:</span>
                    <input type="email" name="name" id="name" placeholder="barbaramoore941@gmail.com" required> 
                </div>
                <div>
                    <span>What time:</span>
                    <input type="time" name="time" id="time" required>
                </div>
                <div>
                    <span>Date:</span>
                    <input type="date" name="date" id="date" required>
                </div>
                <div id="submit">
                    <input type="submit" value="Book with Pretty Braids" id="Book with Pretty Braids">
                </div>
            </form>
        </div>
    </div>
    <footer class="footer">
  <div class="footer-container">
    <div class="footer-column">
      <?php echo"<h3>Pretty Braids</h3>"; ?>
    <div class="footer-column">
      <?php echo"<h3>Contact Us</h3>"; ?>
      <ul>
        <li><a href="tel:+8035616053">Phone</li>
      </ul>
    </div>
    </div>
    <div class="footer-column">
      <?php echo"<h3>Follow us on</h3>"; ?>
      <ul class="social-links">
        <li><a href="https://www.facebook.com/profile.php?id=100092492316641">Facebook</a></li>
        <li><a href="https://www.instagram.com/pretty_braids2020/">Instagram</a></li>
        <li><a href="https://www.tiktok.com/@thegotojess?lang=en">TikTok</a></li>
        <li><a href="https://youtube.com/@Pretty_Braids">YouTube</a></li>
        <li><a href="https://youtube.com/@TheGoToJess">YouTube</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <?php echo"<p>&copy; Pretty Braids. All rights reserved.</p>"; ?>
  </div>
</footer>
</body>
</html>
