<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Book Us — Pretty Braids</title>
</head>

<body class="main_bg">
    <div class="form">
        <div class="form-text">
            <h1><span><img src="prettybraids.png" alt="Pretty Braids Logo"></span>Book Now <span><img src="prettybraids.png" alt="Pretty Braids Logo"></span></h1>
        </div>
            <form action="script.js" method="get">
                <div class="form-group">
                    <span>Your full name:</span>
                    <input type="text" name="name" id="name" placeholder="" required>
                </div>
                <div class="form-group">
                    <span>Your email:</span>
                    <input type="email" name="name" id="name" placeholder="" required> 
                </div>
                <div class="form-group">
                    
                    <span>How many people ?</span>
                    <select name="" id="" required>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                    
                </div>
                <div class="form-group">
                    <span>What time:</span>
                    <input type="text" name="time" id="time" placeholder="Time" required>
                </div>
                <div class="form-group">
                    <span>Date:</span>
                    <input type="date" name="date" id="date" placeholder="date" required>
                </div>
                <div class="form-group">
                    <span>Phone Number:</span>
                    <input type="number" name="number" id="number" placeholder="Write your number here..." required>
                </div>
                <div id="submit">
                    <input type="submit" value="SUBMIT" id="submit">
                </div>


            </form>
        </div>
    </div>
</body>
</html>