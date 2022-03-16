# My-mini-project-of-on-bulb-off-bulb-

<!DOCTYPE html>
<html>

<head>
    <title>Shubhanshu Rao - Mini Project</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> 
</head>

<body>
   
    <div class="navbar">
        <div class="logo">
            <a href="/bulb.html"><img src="images/logo.png"  alt="logo"></a>
            <!-- <img src="s.jpg" alt="logo"> -->
            <ul>
                <li><a href="#about"><button type="button" class="Homebtn">About</button></a></li>
                <li><a href="#project"><button type="button" class="Projectbtn">My Project</button></a></li>
            </ul>
        </div>
    </div>
    
    <section id="about">
        <div class="container">
            <div class="heading">
                <h2>About <span>This Project</span></h2>
            </div>
            <hr>
            <div class="para">
                <p>Bulb On Off JavaScript is a mini project. Create an HTML page with the help of CSS and javascript, when we click to on button then the bulb will be on and when we click on button off then the bulb will be off. We can design and implement the mini-project with the help of the javascript code.</p>
            </div>
            <hr>
        </div>
    </section>  
   
    <section id="project">
        <div class="bulb" id="project">
            <h2>My <span>Mini Project</span></h2>
            <img id="bulb" src="images/off.gif" width="200" height="280">
            <div class="Button">
                <button type="button" class="btn btn-outline-primary btn-sm Button1" onclick="light(1)">TURN ON</button>
                <button type="button" class="btn btn-outline-secondary btn-sm Button1" onclick="light(0)">TURN OFF</button>
            </div>
        </div>
    </section>
  
    <footer>
        <div class="main">
            <span>Copyright @ 2022 <br>
            Design &amp Developed By Shubhanshu Rao</span>
        </div>
        <div class="icons">
            <a href="https://www.facebook.com/shubhanshu.ravgautam/" class="fa fa-facebook socialicon"></a>
            <a href="https://www.instagram.com/shubhanshu__rao/" class="fa fa-instagram socialicon"></a>
            <a href="https://www.linkedin.com/in/%F0%9D%90%92%F0%9D%90%87%F0%9D%90%94%F0%9D%90%81%F0%9D%90%87%F0%9D%90%80%F0%9D%90%8D%F0%9D%90%92%F0%9D%90%87%F0%9D%90%94-%F0%9D%90%91%F0%9D%90%80%F0%9D%90%8E-052320208/" class="fa fa-linkedin socialicon"></a>
            <a href="https://github.com/shubhanshurav" class="fa fa-github socialicon"></a>
            <a href="https://www.youtube.com/channel/UC0vX0VP2n8l0SbmCvrgWZRg" class="fa fa-youtube socialicon"></a>
        </div>
    </footer>
   
    
    <script src="script.js"></script>
</body>

</html>
