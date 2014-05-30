# Formatieren der Teilnehmer- und Ergebnislisten
TCL-Skript von Martin Weinberger martin-weinberger[ät]web[dot]de

## Teilnehmerlisten
1. TCL installieren ([TCL-Download](http://www.activestate.com/activetcl/downloads))
2. Folgende Dateien müssen im gleichen Verzeichnis liegen:
	1. Das Skript (SeltecHTMLSorter.tcl) 
	2. Die Header-Datei (Sparkassen_Gala_201X_Teilnehmerliste_header.htm)
	3. Unformatierte Version der Teilnehmerliste (Sparkassen_Gala_201X_ Teilnehmerliste_org.htm)
3. Im Skript muss das Jahr aktualisiert werden, die Dateinamen müssen das gleiche Jahr enthalten (ggf. umbenennen)
4. In der Header-Datei müssen die Veranstaltungsinfos aktualisiert werden.
5. Das Skript (per Doppelklick) ausführen
6. Die fertige htm Datei wird erzeugt: Sparkassen_Gala_2012_Teilnehmerliste.htm
7. ggf. Jahr, Veranstaltungsnamen und Teilnehmer- vs. Ergebnisliste überprüfen

## Ergebnislisten
wie Teilnehmerlisten, nur mit dem Skript für Ergebnislisten


## Weitere Infos zu den Dateien
Das Skript:
Ist das Tcl Script welches per Doppelklick ausgeführt wird, und im Editor bearbeitet werden kann (z.B. zur Anpassung des Veranstaltungsnamens oder der Listenart, sowie auch die Einstellung ob die Startnummern ausgeblendet werden sollen, wenn man sie noch nicht entgültig vergeben hat).
Die Header-Datei:
In der Header Datei ist das Menü abgespeichert, nach deren Reihenfolge dann auch sortiert wird. Muss immer dann angepasst werden wenn Wettbewerbe oder Klassen/Kategorien in Seltec T&F hinzugefügt, zusammengelegt oder gelöscht werden.
Die unformatierte Version:
So musst du die Orginaldatei benennen, welche optimiert und sortiert werden soll. Am besten gleich direkt unter dem Namen aus T&F abspeichern.