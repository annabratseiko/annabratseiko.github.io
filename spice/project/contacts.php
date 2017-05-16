<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="We build and execute your marketing and communications strategy, bring your brand experience alive and create traveling stories for love brands.">
    <meta name=”keywords” content="Spice Agency, marketing agency, creative agency, strategie, strategy, communicatie, communications, experience marketing, content marketing, branding, merk, design, Spice, Spice Agency bvba, Leuven, Brussel, België" >
    <meta name="author" content="Spice Agency">
    <meta property="og:title" content="Spice Agency">
    <meta property="og:site_name" content="Spice Agency">
    <meta property="og:url" content="http://www.spiceagency.be/contacts">
    <meta property="og:description" content="We build and execute your marketing and communications strategy, bring your brand experience alive and create traveling stories for love brands.">
    <meta property="og:type" content="website">
    <meta property="og:image" content="http://www.spiceagency.be/assets/images/spice_agency_OG.png">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Spice Agency – your trusted marketing partner</title>

    <!-- Bootstrap -->
    <link href="assets/css/contacts.min.css" rel="stylesheet">
    <link rel="shortcut icon" href="assets/images/spice-fav.ico" type="image/x-icon">
    <link rel="icon" href="assets/images/spice-fav.ico" type="image/x-icon">
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-84727556-1', 'auto');
        ga('send', 'pageview');

    </script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>

    <?php if($_GET['sent'] == true){ ?>
        <!-- Google Code for Ingevulde ContactFormulieren Conversion Page -->
            <script type="text/javascript">
                /* <![CDATA[ */
                var google_conversion_id = 877187631;
                var google_conversion_language = "en";
                var google_conversion_format = "3";
                var google_conversion_color = "ffffff";
                var google_conversion_label = "w6s7CPu2zWoQr6SjogM";
                var google_remarketing_only = false;
                /* ]]> */
            </script>
            <script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
            </script>
            <noscript>
                <div style="display:inline;">
                    <img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/877187631/?label=w6s7CPu2zWoQr6SjogM&amp;guid=ON&amp;script=0"/>
                </div>
            </noscript>
    <?php } ?>
    <![endif]-->
</head>
<body>
<nav class="navbar navbar-default clear-background">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">
                <img class="spice-logo" alt="Brand" src="assets/images/spice-logo.svg">
            </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li><a class="nav-link brown-colored btn-nav-brand" href="branding">Branding</a></li>
                <li><a class="nav-link brown-colored btn-nav-strategy" href="strategy">Marketing Strategy</a></li>
                <li><a class="nav-link brown-colored btn-nav-plan" href="communication">Communication Plan</a></li>
                <li><a class="nav-link brown-colored btn-nav-story" href="story-travel">Story Traveling</a></li>
                <li><a class="nav-link brown-colored btn-nav-vision" href="vision">Vision</a></li>
                <li><a class="nav-link brown-colored btn-nav-contacts" href="contacts">Contacts</a></li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>
<div class="block hero-contacts main">
    <div class="container-fluid">
        <div class=" col-xs-12 col-md-5">
            <h3 class="bold white-colored pull-right margin-form form-text animated tada">Fill out the form,
                and we'll<br> get back to you pronto!</h3>
            <img class="arrow-contact hidden-xs" src="assets/images/arrow-contact.svg">
        </div>
        <div class="col-xs-12 col-md-7 margin-form">
            <?php if($_GET['sent'] == true){ ?>
                <div class="success-message">Your message was received successfully, we'll get back to you soon.</div>
            <?php } else { ?>
                <form action="mail/contact_me.php" method="POST">
                    <input class="form-fields input-label" type="text" name="name"  placeholder="name">
                    <input class="form-fields input-label" type="text" name="email"  placeholder="email">
                    <br>
                    <textarea class="message input-label" type="text" name="message" placeholder="message - optional"></textarea>
                    <br><br>
                    <input class="submit-button input-label" type="submit" value="get in touch">
                </form>
            <?php } ?>
        </div>
        <div class="col-sm-12 hidden-xs">
            <h2 class="vision-slogan contact-slogan uppercase bold">brands in movement</h2>
        </div>
    </div>
</div>

<div class="block clear-background">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-offset-2 col-xs-2 col-sm-2 col-sm-offset-0">
                <ul class="list-unstyled map-icons">
                    <li class="map-marker-icon"><img class="map-images" src="assets/images/map-marker-green.svg"></li>
                    <li class="tax-contact-icon"><img class="map-images tax" src="assets/images/tax.svg"></li>
                    <li class="mail-contact-icon"><img class="map-images" src="assets/images/mail-green.svg"></li>
                    <li class="phone-icon"><img class="map-images" src="assets/images/phone-green.svg"></li>
                    <li class="linkedin-icon"><img class="map-images" src="assets/images/linkedin-green.svg"></li>
                </ul>
            </div>
            <div class="col-sm-4 col-xs-8 contact-list">
                <ul class="list-unstyled middle">
                    <li class="contact-details">Veemarkt 1, 2500 Lier, Belgium <br>
                        <button id="lier" class="green-colored bold">show on map</button>
                    </li>
                    <li class="contact-details">Den Tempst 6, 3000 Leuven, Belgium<br>
                        <button id="leuven" class="green-colored bold">show on map</button> </li>
                    <li class="contact-details">VAT: BE 0507.640.887</li>
                    <li class="contact-details"><a href="mailto:righard@spiceagency.be?Subject=Request%20from%20the%20website" target="_top">righard@spiceagency.be</a></li>
                    <li class="contact-details">+32 472 817 818</li>
                    <li class="contact-details"><a href="https://www.linkedin.com/company/4852604?trk=prof-exp-company-name" target="_blank">Follow Spice on LinkedIn</a></li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6" id="map"></div>
        </div>
    </div>
</div>

<footer class="footer wooden-background">
    <div class="container">
        <div class="col-md-offset-2 col-md-2 col-sm-offset-1 col-sm-2 col-xs-offset-1 col-xs-4 footer-nav-col">
            <ul class="list-unstyled">
                <li class="footer-nav bold"><a href="/">Home</a></li>
                <li class="footer-nav bold"><a href="branding">Branding</a></li>
                <li class="footer-nav bold"><a href="story-travel">Strategy</a></li>
                <li class="footer-nav bold"><a href="communication">Communication</a></li>
                <li class="footer-nav bold"><a href="story-travel">Story traveling</a></li>
                <li class="footer-nav bold"><a href="vision">Our vision</a></li>
                <li class="footer-nav bold"><a href="contacts">Contacts</a></li>
            </ul>
        </div>
        <div class="col-md-4 col-sm-5 hidden-xs footer-logo-col">
            <img class="img-responsive logo-footer" src="assets/images/logo-footer.svg">
        </div>
        <div class="col-sm-offset-0 col-md-1 col-xs-offset-1 col-xs-1 footer-icons">
            <ul class="list-unstyled contacts-icons">
                <li><img src="assets/images/mail.svg"></li>
                <li><img src="assets/images/phone.svg"></li>
                <li><img src="assets/images/map-marker.svg"></li>
                <li><img src="assets/images/linkedin-footer.svg"></li>
            </ul>
        </div>
        <div class="col-md-3 col-sm-3  col-xs-5 footer-contacts-col">
            <ul class="list-unstyled contacts">
                <li class="footer-contacts bold" id="mail"><a href="mailto:hello@spiceagency.be?Subject=Request%20from%20the%20website" target="_top">hello@spiceagency.be</a></li>
                <li class="footer-contacts bold" id="phone">+32 472 817 818</li>
                <li class="footer-contacts bold" id="adress">Leuven, Belgium</li>
                <li class="footer-contacts bold" id="linkedin"><a href="https://www.linkedin.com/company/4852604?trk=prof-exp-company-name" target="_blank">Follow us on LinkedIn</a></li>
            </ul>
        </div>
        <div class="col-xs-12 rights text-center white-colored">Spice Agency © 2016 – design by <a href="http://panenco.com/" target="_blank">Panenco</a></div>
    </div>
</footer>

<?php include('remarketing.php'); ?>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="assets/js/bootstrap.min.js"></script>
<script>
    var googleMap = null;
    function initialize() {
        var myLatLng = new google.maps.LatLng(51.129025, 4.582762);
        var myOptions = {
            zoom: 8,
            center: myLatLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map( document.getElementById('map'), myOptions );
        var marker = new google.maps.Marker( {position: myLatLng, map: map} );
        marker.setMap( map );
        googleMap = {map: map, marker: marker};
    }

    $(document).ready(function () {
        $('#leuven').click(function () {
            var leuvenLat = 50.878615;
            var leuvenLng = 4.698148;
            googleMap.marker.setPosition( new google.maps.LatLng( leuvenLat, leuvenLng ) );
            googleMap.map.panTo( new google.maps.LatLng( leuvenLat, leuvenLng ) );
        });
        $('#lier').click(function () {
            var leuvenLat = 51.129025;
            var leuvenLng = 4.582762;
            googleMap.marker.setPosition( new google.maps.LatLng( leuvenLat, leuvenLng ) );
            googleMap.map.panTo( new google.maps.LatLng( leuvenLat, leuvenLng ) );
        });
    });
</script>
<script src="https://maps.googleapis.com/maps/api/js?callback=initialize"
        async defer></script>
</body>
</html>