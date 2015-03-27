<?php 
$teilnehmerliste = "../../2008_teilnehmer/2008-06-08_gala08.htm";
if(is_file($teilnehmerliste)) {
  require($teilnehmerliste);
}
else {
  echo "Falscher Link, bitte gehen Sie zur offiziellen Seite zurück: <a href=\"http://www.sparkassen-gala.de/teilnehmer.php\">Sparkassen Gala 2008</a>";
}
?>