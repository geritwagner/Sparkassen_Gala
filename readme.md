## To do
* mit Lukas klären:
	```
	Die 301 Redirects funktionieren, hat doch super geklappt :)

	und vergesst bitte die /2012_gala/news/.htaccess Datei nicht anzupassen.
	Bei jedem Jahreswechsel muss man die symbolischen Links und die htaccess-Datei anpassen.
	```


## Infos
* Fotos (Impressionen) sind per Sym-Link in /media/images/gala ausgelagert (vor oder nach der Veranstaltung überprüfen).

## Einrichten der nächsten Gala-Seite
* Seite in ein neues Verzeichnis kopieren
	* Symbolic-Links (SSH) einrichten: zu den alten Seiten (im Rückblick)
	```
	Jahre:

	# run script in directory: ~/gala

	for d in 2016 2015 2014 2013 2012 2011 2010 2009 2008 2007 2006 2005 2004 2003 2002 2001 1999; do
	cd ${d}_gala
	for i in 2016 2015 2014 2013 2012 2011 2010 2009 2008 2007 2006 2005 2004 2003 2002 2001 1999; do
	rm $i
	ln -s ../${i}_gala/ ${i}
	done
	rm rueckblick_alle.php
	ln -s ../rueckblick_alle.php rueckblick_alle.php
	cd ..
	done


	# remove all year-symlinks:
	for i in 2015 2014 2013 2012 2011 2010 2009 2008 2007 2006 2003 2002 2001; do
	rm $i
	done

	# rm & renew symlink:
	rm 2001
	ln -s ../2001_gala/ 2001

	Impressionen:
	mkdir ~/media/images/gala/2016_impressionen/
	mkdir ~/media/images/gala/2016_impressionen/photos
	cd ~/gala/2016_gala/
	ln -s ../../media/images/gala/2016_impressionen/ photos
	```

Der Rückblick wird über folgendes Skript abgebildet:
	```
	<li<? if($m=='rueckblick' ) echo $mA; ?>><a href="../rueckblick.php">Rückblick</a>
		<?php require("rueckblick_alle.php"); ?>
			</li>
		```
* Neues Banner einfügen
* Menü/Rückblick um das letzte Jahr erweitern
* Alte Daten löschen (Downloads, etc.), Hinweise einfügen

	```
	Der Zeitplan ist ab dem XX.XX.20XX auf dieser Seite verfügbar.
	```
* Ausschreibung, Zeitplan, Sponsoren aktualisieren
* ladv-link in der Ausschreibung aktualisieren
* Datum unter infos/wissenswertes.php aktualisieren
* Englisches PDF aktualisieren
* Check:
```
	cd 2016_gala
	grep -r '2015'
```

## Vor der Gala
* Marketing mit TELIS: Facebook?
* Zeitplan: doc -> html: zeitplan_generator (python skript)
* Zeitplan: Aufpassen, dass nicht mehr "Domspitzmilch-Gala" im PDF-Ausdruck steht (im Word-file, unter Dokumenteigenschaften ändern
* Banner austauschen, Werbe-Banner: neue Sponsoren bzw. alte aktuell?
* Jahreszahl auf den Seiten aktualisieren, z.B. livestream-popup
* Rückblick: menü-link und übersicht aktualisieren
* Internet: auf korrekte Einrichtung des Netzwerks achten (keine Verwendung statischer IPs, kein Hosten eigener WLAN-Hotspots)

## Während der Gala
* Live-Ergebnisse verlinken
	* Gala-Seite (_header.dir1.inc.php, _header.inc.php, ergebnisse.php) [Beispiel](https://github.com/lg-regensburg/gala/commit/858276a2ca5e891ecf893e95431932454c9d42ad)
	* Facebook
	* LG-Seite (News-Telegramm)
* Livestream verlinken
	* Gala-Seite
	* Facebook
	* LG-Seite (News-Telegramm)
* Social-Media Kanäle
* LG-HP
* Fotographen/Impressionen (/photos)

## Nach der Gala
* Livestream-Link entfernen (durch Gesamtergebnisse ersetzen)
	* Gala-Seite
	*LG-Seite (News-Telegrammm)
* Videos (youtube) verlinken
	* Gala-Seite
	* Facebook
	* LG-Seite (News-Telegrammm)

* Video-Bestellungen:
	```
	letztes Jahr haben wir die Videos wie folgt abgewickelt.
	Im Prinzip leite dem Niels die Anfragen weiter und kläre mit Kurt die Gebühren ab. Niels muss darüber informiert sein, da er die Anfrage rausschickt und der Kontakt zwischen Niels und Otto muss auch hergestellt werden, damit die Rechnung gestellt wird.


	Sehr geehrte(r) Frau/Herr …,

	vielen Dank für Ihr Interesse an dem Videomaterial der Sparkassen Gala 2011. Gerne stellen wir Ihnen das gewünschte Video zur Verfügung. Nach Rücksprache mit der ausrichtenden GmbH würden Kosten in Höhe von 20 Euro (zzgl. MwSt) anfallen:
	10,00 €   Lizenzgebühr
	10,00 €   Bearbeitungsgebühr
	(Gesamt: 23,80 € inkl. MwSt).

	- Möchten Sie das Videomaterial als Download zur Verfügung gestellt bekommen oder auf DVD per Post erhalten?
	- Falls Sie die Post-Variante wählen: Wo möchten Sie das Videomaterial überwiegend anschauen, am Computer oder über den DVD-Player am Fernseher?

	Bitte lassen Sie mich wissen, ob Sie an dem Angebot Interesse haben.
	Gerne stehe ich Ihnen bei weiteren Fragen zur Verfügung.

	Mit freundlichen Grüßen
	```
