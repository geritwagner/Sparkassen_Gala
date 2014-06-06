## To do
* impressionen 2009 fehlen - wiederherstellen
* ggf. auto-ftp-push einrichten
* symbolic links zusammentragen oder versionieren?
* mit Lukas klären:
	```
	Die 301 Redirects funktionieren, hat doch super geklappt :)

	und vergesst bitte die /2012_gala/news/.htaccess Datei nicht anzupassen.
	Bei jedem Jahreswechsel muss man die symbolischen Links und die htaccess-Datei anpassen.
	```


## Infos
* Fotos (Impressionen) sind per Sym-Link in /media/images/gala ausgelagert.

## Einrichten der nächsten Gala-Seite
* Seite in ein neues Verzeichnis kopieren
	* Symbolic-Links (SSH) einrichten: zu den alten Seiten (im Rückblick)
	```
	Jahre:
	ln -s ../20XY_gala/ 20XY
	Impressionen:
	ln -s ../../media/images/gala/20XY_impressionen/ impressionen
	```
* Neues Banner einfügen
* Menü/Rückblick um das letzte Jahr erweitern
* Alte Daten löschen (Downloads, etc.), Hinweise einfügen

	```
	Der Zeitplan ist ab dem XX.XX.20XX auf dieser Seite verfügbar.
	```
* Ausschreibung, Zeitplan, Sponsoren aktualisieren
* Datum unter infos/wissenswertes.php aktualisieren
* Englisches PDF aktualisieren

## Vor der Gala
* Marketing mit TELIS: Facebook?
* Zeitplan: Aufpassen, dass nicht mehr "Domspitzmilch-Gala" im PDF-Ausdruck steht (im Word-file, unter Dokumenteigenschaften ändern

## Während der Gala
* Social-Media Kanäle
* LG-HP
* Fotographen
* Livestream

## Nach der Gala
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