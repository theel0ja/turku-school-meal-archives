<?php
    function Turku($koulu, $kieli) {
        $vuosi = date("Y");
        $viikko = date("W");

        $fileName = "turku"."/".$koulu."/".$vuosi."-".$viikko."-".$kieli.".html";
        $url = "https://viikon-kouluruoka.theel0ja.info/turku/".$koulu."/?buttons=1&q=0&lang=".$kieli;

        $contents = file_get_contents($url);
        file_put_contents($fileName, $contents);
    }
?>
