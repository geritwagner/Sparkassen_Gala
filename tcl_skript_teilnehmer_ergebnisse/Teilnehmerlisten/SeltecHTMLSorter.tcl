#!/bin/sh
# SeltecHTMLSorter.tcl \
exec tclsh "$0" ${1+"$@"}

# +++ SeltecHTMLSorter +++
# Version: 1.1
# Author: Martin Weinberger
# 
# Script zur Optimierung von htm Dateien, welche von Seltec Track & Field generiert wurden.
#
# Funktionen:
#   Einbindung eines eigenen header Datei mit anschließender Sortierung der Wettbewerbe passend zur Menüreihenfolge.
# Benötigte Dateien:
#   Header Datei: [Veranstaltungsname]_[Listentyp]_header.htm
#   Orginal Datei: [Veranstaltungsname]_[Listentyp]_org.htm	(von T&F generierte Datei)
# Ausgabe Datei:
#   [Veranstaltungsname]_[Listentyp].htm
# 


#
# *** Einstellungen ***
set VeranstaltungsName "Sparkassen_Gala_2014"
set ListenTyp "Teilnehmerliste"
set Dateiname $VeranstaltungsName\_$ListenTyp
set StartnummernAusblenden 0

#
# *** Script Code ***
button .b -text "Beenden" -command exit
pack .b -side bottom

# Fehlermeldung wenn eine Datei fehlt
if {![file exists $Dateiname\_org.htm] || ![file exists $Dateiname\_header.htm]} {
	message .m -text "*_org.htm oder *_header.htm nicht gefunden!" -background red
	pack .m -expand true -fill both -ipadx 100 -ipady 40
} else {

# Variablen deklaration
set sourcefile [open $Dateiname\_org.htm r]
set Wettbewerbe [list]
set aktBewerb ""
set lese "0"
array set Wettbewerbsdaten [list]

# Auslesen der Orginal Datei
while {![eof $sourcefile]} {
	if {[regexp ".*<p class=\"ev1\">.*" [set zeile [gets $sourcefile]]]} {
		set aktBewerb [lindex [regexp -inline ".*name\=\"(.*)\">.*" $zeile] end]
		set lese "1"
	} elseif {[regexp ".*<table cellspacing=\"1\" class=\"body\">.*" $zeile]} {
		set aktBewerb "Schluss"
	} elseif {"<br><br>" == $zeile} {
		set aktBewerb "Veranstaltungsbericht"
	}
	if {$lese} {
		lappend Wettbewerbsdaten($aktBewerb) $zeile
	}
}
close $sourcefile

if {[file exists $Dateiname.htm]} { file delete $Dateiname.htm }
file copy $Dateiname\_header.htm $Dateiname.htm
after 100
set targetfile [open $Dateiname.htm r+]

# Lese Wettbewerbsreihenfolge aus Header Datei
while {![eof $targetfile]} {
	if {[set zeile [lindex [regexp -inline ".*<a href=\"#(.*)\" class=\"menu\">.*</a><br>.*" [gets $targetfile]] end]] != ""} {
		lappend Wettbewerbe $zeile
	}
}
lappend Wettbewerbe "Veranstaltungsbericht"
lappend Wettbewerbe "Schluss"

# Zeitstempel hinzufügen
puts $targetfile "				<td align=\"right\"><span class=\"ev2\">Stand: [clock format [clock seconds] -format {%d.%m.%Y %H:%M}] &nbsp;</span></td>"
puts $targetfile "			</tr>"
puts $targetfile "		</table>"

# Schreiben der Wettbewerbe in Ausgabe Datei
foreach Bewerb $Wettbewerbe {
	puts $Bewerb
	if {![info exists Wettbewerbsdaten($Bewerb)]} { continue }
	foreach line $Wettbewerbsdaten($Bewerb) {
		regsub -all {w.v.T.} $line "o.g.V." line
		regsub -all {\<span\>} $line "\<\/span\>" line
		regsub -all {\&nbsp;\&nbsp;\/\&nbsp;\&nbsp;VI:} $line "<br>VI:" line
		regsub -all {\&nbsp;\&nbsp;\/\&nbsp;\&nbsp;XI:} $line "<br>XI:" line
		if {$StartnummernAusblenden} {
			regsub -all {<.*"hd[Bib|BIB2|BIB]+".*} $line "" line
			regsub -all {[0-9]{1,3}, } $line "" line
		}
		if {$Bewerb == "Veranstaltungsbericht"} {
			regsub -all {hdMark} $line "hdClub" line
		}
		if {$line  == ""} { continue }
		puts $targetfile $line
	}
	unset Wettbewerbsdaten($Bewerb)
}
puts "-------------"
puts $targetfile "<br>"
# Schreiben aller Wettbewerbe, welche nicht in der Header Datei angegeben wurden
foreach Bewerb [array names Wettbewerbsdaten] {
	puts $Bewerb
	foreach line $Wettbewerbsdaten($Bewerb) {
		puts $targetfile $line
	}
}

close $targetfile

# Info Fenster zum Script Ende
message .m -text "HTML Datei erfolgreich sortiert. Fehlende Bewerbe in Header Datei: [array names Wettbewerbsdaten]" -background white
pack .m -expand true -fill both -ipadx 100 -ipady 40
}