// ------------------------------------------------------------- //,
  
  wechelzeit = 10000;
  
// ------------------------------------------------------------- //,

var bildnamen = new Array("../images/sponsoren/col1/apotheke-dez.gif",
						  "../images/sponsoren/col1/rewag.gif",
						  "../images/sponsoren/col1/osram-os.gif",
						  "../images/sponsoren/col1/scheck-druck.gif"
						  ),
      bildurl   = new Array("http://www.apodez.de/",
							"http://www.rewag.de/",
							"http://www.osram-os.com/",
							"http://www.scheckdruck.de/"
							),
      bildsrc   = new Array(bildnamen.length),
      bild      = "sponsoren1",
      ankernr   = 0,
      bildnr    = 0,
      i;
        
   for(i=0; i<bildnamen.length; ++i) {
    bildsrc[i]     = new Image();
    bildsrc[i].src = bildnamen[i];
  }
  
  
  var bildnr = 0;

  function bildwechsel(relativePath) {
//	bildsrc[bildnr].src = relativePath+bildsrc[bildnr].src;
    bildnr = (bildnr>=bildnamen.length-1) ? 0 : bildnr+1;
    eval("document.images[\""+bild+"\"].src=bildsrc[bildnr].src");
    document.links[ankernr].href=bildurl[bildnr];
    window.setTimeout("bildwechsel('"+relativePath+"')", wechelzeit);
  }
  
// ------------------------------------------------------------- //,


var bildnamen2 = new Array("../images/sponsoren/col1/buchbinder.gif",
						  "../images/sponsoren/col1/bischofshof.gif",
						  "../images/sponsoren/col1/asklepios.gif",
						  "../images/sponsoren/col1/fitness-company.gif"
						  ),
      bildurl2   = new Array("http://www.buchbinder-rent-a-car.de/",
							"http://www.bischofshof.de/",
							"http://www.asklepios.com/badabbach/",
							"http://www.fitcom.de/"
							),
      bildsrc2   = new Array(bildnamen2.length),
      bild2      = "sponsoren2",
      ankernr2   = 1,
      bildnr2    = 0,
      y;
        
   for(y=0; y<bildnamen2.length; ++y) {
    bildsrc2[y]     = new Image();
    bildsrc2[y].src = bildnamen2[y];
  }
  
  
  var bildnr2 = 0;


  function bildwechsel2(relativePath2) {
//	bildsrc[bildnr].src = relativePath+bildsrc[bildnr].src;
    bildnr2 = (bildnr2>=bildnamen2.length-1) ? 0 : bildnr2+1;
    eval("document.images[\""+bild2+"\"].src=bildsrc2[bildnr2].src");
    document.links[ankernr2].href=bildurl2[bildnr2];
    window.setTimeout("bildwechsel2('"+relativePath2+"')", wechelzeit);
  }  
// ------------------------------------------------------------- //,


var bildnamen3 = new Array("../images/sponsoren/col1/charivari.gif",
						  "../images/sponsoren/col1/adidas.gif",
						  "../images/sponsoren/col1/mittelbayerische-zeitung.gif"
						  ),
      bildurl3   = new Array("http://www.charivari.de/",
							"http://www.adidas.com/de/",
							"http://www.mittelbayerische.de/"
							),
      bildsrc3   = new Array(bildnamen3.length),
      bild3      = "sponsoren3",
      ankernr3   = 2,
      bildnr3    = 0,
      z;
        
   for(z=0; z<bildnamen3.length; ++z) {
    bildsrc3[z]     = new Image();
    bildsrc3[z].src = bildnamen3[z];
  }
  
  
  var bildnr3 = 0;


  function bildwechsel3(relativePath3) {
//	bildsrc[bildnr].src = relativePath+bildsrc[bildnr].src;
    bildnr3 = (bildnr3>=bildnamen3.length-1) ? 0 : bildnr3+1;
    eval("document.images[\""+bild3+"\"].src=bildsrc3[bildnr3].src");
    document.links[ankernr3].href=bildurl3[bildnr3];
    window.setTimeout("bildwechsel3('"+relativePath3+"')", wechelzeit);
  }