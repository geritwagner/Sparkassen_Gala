var bildnamen = new Array("images/sponsoren/buchbinder.jpg",
						  "images/sponsoren/domspitz.gif",
						  "images/sponsoren/sparkasse.gif",
						  "images/sponsoren/adidas.gif",
						  "images/sponsoren/scheck.gif",
						  "images/sponsoren/osram.gif",
						  "images/sponsoren/bischofshof.jpg",
						  "images/sponsoren/mz.gif",
						  "images/sponsoren/charivari.gif",
						  "images/sponsoren/kkh.gif",
						  "images/sponsoren/sport-thieme.gif"
						  ),
      bildurl   = new Array("http://www.buchbinder-rent-a-car.de/",
							"http://www.domspitzmilch.de/",
							"http://www.sparkasse-regensburg.de",
							"http://www.adidas.de/",
							"http://www.scheckdruck.de",
							"http://www.osram-os.de",
							"http://www.bischofshof.de",
							"http://www.mittelbayerische.de/",
							"http://www.charivari.de",
							"http://www.kkh.de",
							"http://www.sport-thieme.de/"
							),
	  bildalt   = new Array("test1", "test2"),
      bildsrc   = new Array(bildnamen.length),
      bild      = "Beispiel",
      ankernr   = 6,
      bildnr    = 0,
      i;
        

  for(i=0; i<bildnamen.length; ++i) {
    bildsrc[i]     = new Image();
    bildsrc[i].src = bildnamen[i];
  }

  var bildnr = 0;

  function bildwechsel() {
    bildnr = (bildnr>=bildnamen.length-1) ? 0 : bildnr+1;
    eval("document.images[\""+bild+"\"].src=bildsrc[bildnr].src");
    document.links[ankernr].href=bildurl[bildnr];
    window.setTimeout("bildwechsel()", 4000);
  }