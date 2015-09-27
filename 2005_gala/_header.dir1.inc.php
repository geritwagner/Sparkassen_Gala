<?php
/* Vordefinierte Werte */
$menu['active'] = " id=\"current\"";
/* Abkürzungen */
$m = $menu['current'];
$mA = $menu['active'];
?>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

  <head>
    <title>
      <?php if (!empty($title)) echo $title." - "; ?>Domspitzmilch Gala 2005</title>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="keywords" content="Domspitzmilch Gala 2005, Domspitzmilch-Gala, German Meeting, Regensburg, Leichtathletik, Top-Meeting, Leichtathletik-Elite, Sprint, Hindernis, Hürden" />
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
            <img src="../images/design/header.png" width="900" height="245" alt="Domspitzmilch Gala 2005" />
          </div>
        </div>
        <!-- begin: main navigation #nav -->
        <div id="nav">
          <!-- skip anchor: navigation -->
          <a id="navigation" name="navigation"></a>
          <div id="nav_main">
            <ul class="adxm menu">
              <li<? if($m=='aktuelles' ) echo $mA; ?>><a href="../index.php">Aktuelles</a></li>
                <li<? if($m=='rueckblick' ) echo $mA; ?>><a href="../rueckblick/">Rückblick</a>
                  <ul>
                    <li><a href="http://www.sparkassen-gala.de/2014/" target="_blank">Jahr 2014</a></li>
                    <li><a href="http://www.sparkassen-gala.de/2013/" target="_blank">Jahr 2013</a></li>
                    <li><a href="http://www.sparkassen-gala.de/2012/" target="_blank">Jahr 2012</a></li>
                    <li><a href="http://www.sparkassen-gala.de/2011/" target="_blank">Jahr 2011</a></li>
                    <li><a href="http://www.sparkassen-gala.de/2010/" target="_blank">Jahr 2010</a></li>
                    <li><a href="http://www.sparkassen-gala.de/2009/" target="_blank">Jahr 2009</a></li>
                    <li><a href="http://www.sparkassen-gala.de/2008/" target="_blank">Jahr 2008</a></li>
                    <li><a href="http://www.domspitzmilch-gala.de/" target="_blank">Jahr 2007</a></li>
                    <li><a href="http://www.lg-regensburg.de/2006_gala/" target="_blank">Jahr 2006</a></li>
                    <li><a href="rueckblick/2005.php">Jahr 2005</a></li>
                    <li><a href="rueckblick/2004.php">Jahr 2004</a></li>
                  </ul>
                  </li>
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

              <br />
