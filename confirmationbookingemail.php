<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Pretty Braids Confirmation Booking E-mail</title>    
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <div class="email-container">
    <div class="header">
      <img src="https://prettybraids.com/prettybraids.png" alt="Pretty Braids Logo" />
      <php echo"<h1>Your Hair Appointment is Confirmed!</h1>"; ?>
    </div>
    <div class="content">
      <?php echo"<h2>Hi [Customer Name],</h2>"; ?>
      <?php echo"<p>We’re so excited that you booked with us! Here’s your booking information:</p>"; ?>
      <div class="details">
        <?php echo"<p><strong>Service:</strong> Braids</p>"; ?>
        <?php echo"<p><strong>Date:</strong> July 20, 2025</p>"; ?>
        <?php echo"<p><strong>Time:</strong> 2:00 PM</p>"; ?>
        <?php echo"<p><strong>Stylist:</strong> Jessica House</p>"; ?>
        <!-- <?php echo"<p><strong>Location:</strong> </p>"; ?> -->
      </div>
      <a href="https://prettybraids.com" class="btn">View or Reschedule</a>
    </div>
    <div class="footer">
      <?php echo"<p>Need to make a change? Call us at <a href="tel:+8035616053">(803) 561-6053 or reply to this email.</p>"; ?>
      <?php echo"<p>&copy; 2020-2025 Pretty Braids</p>"; ?>
    </div>
  </div>
</body>
</html>
