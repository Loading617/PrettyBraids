<!DOCTYPE html>
<html lang="en">
<head>
<title>Book Us — Pretty Braids</title>
<meta charset="UTF-8">
<meta name="viewport" id="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge Webkit, Chrome= Edge">
<link rel="icon" type="image/x-icon" href="prettybraids.ico">
<link rel="stylesheet" type="text/css" href="styles.css">
<script type="text/javascript" src="script.js"></script>
</head>
<body class="main_bg">
    <div class="form">
        <div class="form-text">
            <?php echo "<h1><span><img src="prettybraids.png" alt="Pretty Braids Logo"></span>Book Now <span><img src="prettybraids.png" alt="Pretty Braids Logo"></span></h1>"; ?>
        </div>
            <form action="script.js" method="get">
                <div>
                    <span>Your full name:</span>
                    <input type="text" name="name" id="name" placeholder="" required>
                </div>
                <div>
                    <span>Your email:</span>
                    <input type="email" name="name" id="name" placeholder="" required> 
                </div>
                <div>
                    <span>What time:</span>
                    <input type="text" name="time" id="time" placeholder="Time" required>
                </div>
                <div>
                    <span>Date:</span>
                    <input type="date" name="date" id="date" placeholder="date" required>
                </div>
                <div>
                    <span>Phone Number:</span>
                    <input type="number" name="number" id="number" placeholder="Write your number here..." required>
                </div>
                <div id="submit">
                    <input type="submit" value="Book with Pretty Braids" id="Book with Pretty Braids">
                </div>


            </form>
        </div>
    </div>
</body>
</html>
