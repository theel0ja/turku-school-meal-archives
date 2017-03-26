<?php
    $kielet["fi"] = "suomi (fi)";
    $kielet["en"] = "englanti (en)";
    $kielet["sv"] = "ruotsi (sv)";
?>
<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">
        
        <link rel="stylesheet" href="/default.css" />
    </head>
    <body>
        <!-- Add your site or application content here -->
        <ul>
            <?php
                foreach (glob("*.html") as $tiedosto) {
                    $taulu = str_replace(".html", "", $tiedosto);
                    $taulu = explode("-", $taulu);
                    
                    
                    $vuosi = $taulu[0];
                    $viikko = $taulu[1];
                    $kieli = $taulu[2];
                    
                    echo "<li> <a href=\"$tiedosto\">$vuosi: Vko $viikko - $kielet[$kieli]</a> </li>";
                }
            ?>
        </ul>
    </body>
</html>
