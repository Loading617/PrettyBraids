<!DOCTYPE html>
<html lang="en">
<head>
<title>Book: Pretty Braids</title>
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
      <li><a href="index.php">Home</a></li>
      <li><a href="prices.php">Prices</a></li>
      <li><a href="book.php" class="active">Book Us</a></li>
    </div>
    <div class="nav-links-right">
      <li><a href="myclients.php">My Clients</a></li>
      <li><a href="about.php">About</a></li>
    </div>
  </ul>
  <div class="logo">
    <img src="prettybraids.png" alt="Pretty Braids Logo" />
  </div>
</nav>
<div class="form">
  <form id="booking-form" action="process_booking.php" method="POST">
    <div class="form-text">
      <div class="logo-images">
        <img src="prettybraids.png" alt="Pretty Braids Logo" />
        <?php echo"<h1>Book an Appointment with Pretty Braids</h1>"; ?>
        <img src="prettybraids.png" alt="Pretty Braids Logo" />
      </div>
      <?php echo"<p>Book your appointment with Pretty Braids today. We are here to make women's braids look and feel amazing.</p>"; ?>
    </div>
    <div class="main-form">
      <div>
        <span>Your Name:</span>
        <input type="text" name="customer_name" id="customer_name" placeholder="Barbara Moore" required>
      </div>
      <div>
        <span>Your Email:</span>
        <input type="email" name="customer_email" id="customer_email" placeholder="barbaramoore941@gmail.com" required>
      </div>
      <div>
        <span>Phone Number:</span>
        <input type="tel" name="phone" id="phone" placeholder="(555) 123-4567" required>
      </div>
      <div>
        <span>Service Type:</span>
        <select name="service_type" id="service_type" required>
          <option value="">Select a service</option>
          <option value="box_braids">Box Braids</option>
          <option value="goddess_braids">Goddess Braids</option>
          <option value="cornrows">Cornrows</option>
          <option value="twists">Twists</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <span>Preferred Date:</span>
        <input type="text" name="booking_date" id="booking_date" placeholder="mm/dd/yyyy" required onfocus="(this.type='date')">
      </div>
      <div>
        <span>Preferred Time:</span>
        <input type="text" name="booking_time" id="booking_time" placeholder="--:-- --" required onfocus="(this.type='time')">
      </div>
      <div>
        <span>Special Requests:</span>
        <input type="text" name="special_requests" id="special_requests" placeholder="Any special instructions...">
      </div>
      <div>
        <span>How did you hear about us?</span>
        <select name="referral_source" id="referral_source">
          <option value="">Select an option</option>
          <option value="friend">Friend/Family</option>
          <option value="social">Social Media</option>
          <option value="search">Search Engine</option>
          <option value="advertisement">Advertisement</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div id="submit">
        <input type="submit" value="BOOK WITH PRETTY BRAIDS" id="submit_booking">
      </div>
    </div>
  </form>
</div>
