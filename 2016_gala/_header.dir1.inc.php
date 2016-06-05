<?php
/* Vordefinierte Werte */
$menu['active'] = " id=\"current\"";
/* Abkürzungen */
$m = $menu['current'];
$mA = $menu['active'];
?>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="de" lang="de">

  <head>
    <title>
      <?php if (!empty($title)) echo $title." - "; ?>Sparkassen Gala 2016</title>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="keywords" content="Sparkassen Gala 2016, Sparkassen-Gala, German Meeting, Regensburg, Leichtathletik, Top-Meeting, Leichtathletik-Elite, Sprint, Hindernis, Hürden" />
    <?php if (!empty($description)) echo "<meta name=\"description\" content=\"$description\" />"; ?>
      <?php /*if ($menu['current']=="live-ticker" && !empty($refresh)) echo $refresh."\n"; */?>
        <meta name="language" content="de" />
        <link rel="shortcut icon" type="image/x-icon" href="../favicon.ico" />
        <link href="../css/layout.css" rel="stylesheet" type="text/css" />
        <!--[if lte IE 7]>
<link href="../css/patches/patch_layout.css" rel="stylesheet" type="text/css" />
<![endif]-->

        <!--[if lte IE 6]>
<link href="../css/navigation/adxmenu/ADxMenu-for-IE.css" rel="stylesheet" type="text/css"/>
<script type="text/javascript" src="../javascript/ADxMenu.js"></script>
<![endif]-->

  </head>

  <body>
    <div id="page_margins">
      <div id="page">
        <div id="header">
          <div id="topnav">
            <!-- start: skip link navigation -->
            <a class="skip" href="#navigation" title="skip link">weiter zur Navigation</a>
            <span class="hideme">.</span>
            <a class="skip" href="#content" title="skip link">weiter zum Inhalt</a>
            <span class="hideme">.</span>
            <!-- end: skip link navigation -->
          </div>
          <div id="flashHeader">
            <img src="../images/design/header.jpg" width="900" height="245" alt="Sparkassen Gala 2016" />
          </div>
        </div>
        <!-- begin: main navigation #nav -->
        <div id="nav">
          <!-- skip anchor: navigation -->
          <a id="navigation" name="navigation"></a>
          <div id="nav_main">
            <ul class="adxm menu">
              <li<? if($m=='aktuelles' ) echo $mA; ?>><a href="../index.php">Aktuelles</a></li>
                <li<? if($m=='news' ) echo $mA; ?>><a href="../news/">News</a>
                  <ul>
                    <li><a href="../news/vorschauen.php">Vorschauen</a></li>
                    <li><a href="../news/berichte.php">Berichte</a></li>
                    <li><a href="">Impressionen   »</a>
                      <ul id="navImpressionen">
                        <li><a href="news/impressionen-kiefner.php">Theo Kiefner</a></li>
                        <li><a href="http://www.sportmomente-premru.de/fotos/sparkassengala-1-tag/" target="_blank">Timo Premru (1)</a></li>
                        <li><a href="http://www.lg-telis-finanz.de/kiefner/laufnacht16/" target="_blank">Theo Kiefner (1)</a></li>
                        <li><a href="https://www.pictrs.com/sportlich-belichtet/8183346/laufnacht-zur-sparkassen-gala-2016-in-regensburg?l=de" target="_blank">Christian Göstl (1)</a></li>
                      </ul>
                    </li>
                    <li><a href="http://www.leichtathletik.de/tv/veranstaltungen/video-uebersicht/veranstaltung/sparkassen-gala-in-regensburg-3/" target="_blank">Video-Highlights<!--   »--></a>
                      <!--<ul id="navImpressionen">
					      <li><a href="http://www.leichtathletik.de/tv/veranstaltungen/video-uebersicht/veranstaltung/sparkassen-gala-in-regensburg-3/" target="_blank">Video Highlights</a></li>
						<li><a href="http://www.tvaktuell.com/default.aspx?ID=5164&showNews=743627" target="_blank">TV Aktuell</a></li>
						  <li><a href="http://www.mittelbayerische.de/index.cfm?pid=10166&bcpid=55010322001&bclid=51364751001&bctid=90266147001" target="_blank">mittelbayerische.de</a></li>
						</ul>-->
                    </li>
                  </ul>
                  </li>
                  <li<? if($m=='infos' ) echo $mA; ?>><a href="../infos/index.php">Infos</a>
                    <ul>
                      <li><a href="../infos/wissenswertes.php">Wissenswertes / <br />Important notes</a></li>
                      <li><a href="../infos/stadt-regensburg.php">Stadt Regensburg</a></li>
                      <li><a href="../infos/anreise.php">Anreise / Anfahrt</a></li>
                      <li><a href="../infos/eintrittspreise.php">Eintrittspreise</a></li>
                      <li><a href="../infos/unterkuenfte.php">Unterkünfte</a></li>
                      <li><a href="../infos/kontakt.php">Kontakt</a></li>
                      <li><a href="../infos/akkreditierung.php">Presse</a></li>
                      <li><a href="http://www.wetter.com/deutschland/regensburg/DE0008684.html" target="_blank">Wetter</a></li>
                    </ul>
                    </li>
                    <li<? if($m=='ausschreibung' ) echo $mA; ?>><a href="../ausschreibung.php">Ausschreibung</a></li>
                      <li<? if($m=='zeitplan' ) echo $mA; ?>><a href="../zeitplan.php">Zeitplan</a></li>
                        <li<? if($m=='teilnehmer' ) echo $mA; ?>><a href="../teilnehmer.php">Teilnehmer</a></li>
                          <li<? if($m=='livestream' ) echo $mA; ?>><a href="../live-stream.php">Livestream</a></li>
                            <li<? if($m=='ergebnisse' ) echo $mA; ?>><a href="../ergebnisse.php">Ergebnisse</a></li>
                              <li<? if($m=='rueckblick' ) echo $mA; ?>><a href="../rueckblick.php">Rückblick</a>
                                <?php require("rueckblick_alle.php"); ?>
                                  </li>
                                  <li<? if($m=='sponsoren' ) echo $mA; ?>><a href="../sponsoren/">Sponsoren</a></li>
            </ul>
          </div>
        </div>
        <!-- end: main navigation -->
        <!-- begin: content area #main -->
        <div id="main">
          <!-- begin: #col1 - first float column -->
          <div id="col1">
            <div id="col1_content" class="clearfix">

              <br />
              <p>
                <strong>Laufnacht:
                  <br>Samstag, 04. Juni 2016</strong>
              </p>
              <h4>Sponsoren</h4>
              <br />

              <a href="http://www.sparkasse-regensburg.de/" target="_blank" class="imagelink" title="Sparkasse Regensburg">
                <img src="../images/sponsoren/col1/sparkasse-regensburg.gif" width="200" height="90" alt="Sparkasse Regensburg" />
              </a>
              <br />
              <br />
              <br />

              <iframe name="sponsoren" width="190" height="400" frameborder="0" src="../sponsoren/iframe.html" scrolling="no"></iframe>


            </div>
          </div>
          <!-- end: #col1 -->
          <!-- begin: #col2 second float column -->
          <div id="col2">
            <div id="col2_content" class="clearfix"> </div>
          </div>
          <!-- end: #col2 -->

          <!-- begin: #col3 Inhaltsspalte (static column) -->
          <div id="col3">
            <div id="col3_content" class="clearfix">
              <!-- skip anchor: content -->
              <a id="content" name="content"></a>
              <br />
              <!-- Besonderes-->

              <h4 class="hinweis" style="text-align:center;">
                <!-- <a href="../news/impressionen-kiefner.php">»Kiefner Impressionen</a>, <a href="../ergebnisse.php">»Gesamtergebnisliste</a>, <a href="http://www.leichtathletik.de/tv/veranstaltungen/video-uebersicht/veranstaltung/sparkassen-gala-in-regensburg-3/"
                target="_blank">»leichtathletik.tv Videos</a> und   -->
                Die <a href="../ergebnisse.php">»Live-Ergebnisse</a> und der <a href="../livestream-popup.php" target="_blank">»Live-Stream</a> sind online.</h4>
              <br />
