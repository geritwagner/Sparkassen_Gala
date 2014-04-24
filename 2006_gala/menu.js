/**
* CSShiarchMenu v0.4
*	written by: me[AT]daantje[DOT]nl
*	last update: Wed Jul  6 22:09:20 CEST 2005
*
*	Documentation:
*		Build this small script cause all the gpl-ed scripts I found where too big
*		and had too many options I never going to use, or the config for the menu
*		was not easy to set with a PHP routine.
*
*	License:
*		Use this script any way you like...
*/

//declare
var submenu = new Array();
var tmr = new Array();
var adj = new Array();
var last_zIndex = 10000;
var lastOverId = '';


// EXAMPLE CONFIG
var menuWidth 		= 170;			//width of submenu in pixels
var alignSubmenu 	= 'bottom';		//bottom or right side of the main button.
var useLastItemCSS	= true;			//generate last menu item too
									//if false, it will behave as a normal item
									//and the css menuItemLast class will not be used
var adjustFirst		= false;		//overlap the first submenu too?
var adjustTop		= 0;			//move the submenu's some pixels. Positive number (10) for down, negative (-10) for up.
var adjustLeft		= 0;			//move the submenu's some pixels. Positive number (10) for right, negative (-10) for left.

//first submenu tree
submenu['infos'] = new Array();
submenu['infos'][0] = menuItem('Ausschreibung','ausschreibung.php','');
submenu['infos'][1] = menuItem('Wissenswertes','wissenswertes.php','');
submenu['infos'][2] = menuItem('Organisation','organisation.php','');
submenu['infos'][3] = menuItem('Stadt Regensburg','stadt.php','');
submenu['infos'][4] = menuItem('Anreise','anfahrt.php','');
submenu['infos'][5] = menuItem('Unterk&uuml;nfte','unterkunft.php','');
submenu['infos'][6] = menuItem('Online Akkreditierung','http://www.leichtathletik.de/dokumente/medienservice/login.asp','_blank');

submenu['wettkaempfe'] = new Array();
submenu['wettkaempfe'][0] = menuItem('Zeitplan','zeitplan.php','');
submenu['wettkaempfe'][1] = menuItem('Teilnehmer','teilnehmer.php','');
submenu['wettkaempfe'][2] = menuItem('Vorschauen','vorschauen.php','');
submenu['wettkaempfe'][3] = menuItem('Ergebnisse','ergebnisse.php','');
submenu['wettkaempfe'][4] = menuItem('Berichte','berichte.php','');
submenu['wettkaempfe'][5] = menuItem('Impressionen','impressionen.php','');
submenu['wettkaempfe'][6] = menuItem('EM Normen 2006','normen.php','');

submenu['rueckblick'] = new Array();
submenu['rueckblick'][0] = menuItem('Domspitzmilch Gala 2005','gala05.php','');
submenu['rueckblick'][1] = menuItem('Domspitzmilch Gala 2004','gala04.php','');

//build or unhide submenu div...
function buildSubmenu(obj){
	lastOverId = obj.id;

	//get common part of div id
	menuPath = obj.id.split('_');

	//unset mousout of parent menus and make sure they are visible...
	x = "div";
	for(i=0;i<menuPath.length;i++){
		x+= '_' + menuPath[i];
		if(document.getElementById(x)){
			if(tmr[x])
				window.clearTimeout(tmr[x]);
			document.getElementById(x).style.visibility = 'visible';
		}
	}

	//check if we have a submenu of the obj...
	if(submenu[obj.id]){
		//check if allready build...
		c = document.getElementById('div_' + obj.id);
		if(c){
			//unhide...
			c.style.visibility = 'visible';
			c.style.zIndex = last_zIndex++;
		}else{
			//calc position of mouseover
			d = obj;
			if(d){
				L_pos = d.offsetLeft + d.offsetWidth - 1;
				T_pos = d.offsetTop;
				while(d.offsetParent){
					d = d.offsetParent;
					L_pos+= d.offsetLeft;
					T_pos+= d.offsetTop;
				}
			}

			//patch first submenu to go right below the main buttons...
			if(obj.className.indexOf('menuItem') < 0 && alignSubmenu == 'bottom'){
				L_pos-= obj.offsetWidth;
				T_pos+= obj.offsetHeight;
			}

			//move the submenu (overlap?)
			if((adjustTop || adjustLeft) && (adjustFirst || (!adjustFirst && obj.className.indexOf('menuItem') >= 0))){
				L_pos+= adjustLeft;
				T_pos+= adjustTop;
			}

			//build new div
			subObj = document.createElement('div');
			subObj.id = 'div_' + obj.id;
			subObj.className = 'submenu';
			subObj.style.position = 'absolute';
			subObj.style.zIndex = last_zIndex++;
			subObj.style.width = menuWidth;
			subObj.style.top = T_pos + "px";
			subObj.style.left = L_pos + "px";

			//write div to the body...
			document.getElementsByTagName('body')[0].appendChild(subObj);

			//build html for submenu
			content = "";
			m = submenu[obj.id];
			for(i=0;i<m.length;i++){

				//determin target for onclick...
				//	(sorry, I should rewrite this routine...)
				if(!m[i][2] || m[i][2] == '_self')
					act = "self.location.href='" + m[i][1] + "';";
				else if(m[i][2] == '_top')
					act = "top.location.href='" + m[i][1] + "';";
				else if(m[i][2] == '_blank')
                    act = "window.open('" + m[i][1] + "');";
				else
					act = "window.frames['"+m[i][2]+"'].location.href='" + m[i][1] + "';";

				//make item
				content+= "<div onmouseout=\"hideSubmenu(this)\" onmouseover=\"buildSubmenu(this)\" "+ (m[i][1] ? "onclick=\""+ act + "\" " : "") +"class=menuItem" + (i==0 ? 'First' : (i==(m.length -1) && useLastItemCSS ? 'Last' : '')) + " id=\"" + obj.id + "_" + i +"\">" + m[i][0] + "</div>";
				adj[i] = obj.id + "_" + i;
			}

			//insert new menu
			subObj.innerHTML = content;

			//make all just made div's the same width...
			for(i=0;i<adj.length;i++)
				document.getElementById(adj[i]).style.width = subObj.style.width;
		}
	}
}

//hide a submebu div
function hideSubmenu(obj){
	//get common part of div id
	closePath = obj.id.split('_');

	//hide path
	x = "div";
	for(i=0;i<closePath.length;i++){
		x+= '_' + closePath[i];
		if(document.getElementById(x))
			tmr[x] = window.setTimeout("document.getElementById('"+x+"').style.visibility = 'hidden';",50);  //closing speed
		//The timeout above is needed for MSIE browsers... Or else the menu's will disapear on EVERY mousout!!!
		//Please get a normal browser like Firefox, Mozilla or Opera!!
	}
}

//add an menu item to the config array (called in the config lines)
function menuItem(txt,url,tar){
	return new Array(txt,url,tar);
}

//*** Patch for firefox bug with focus on mouseover...
//		This function should be called onMouseOver of every iFrame that's under the menu structure.
function iFramePatch(){
	if(!document.all && lastOverId)
		hideSubmenu(document.getElementById(lastOverId));
}

//*** Now a patch for MSIE lag of CSS2 compliance!!
if(navigator.userAgent.indexOf('MSIE')>=0 && navigator.userAgent.indexOf('Opera')==-1){
	document.onmouseover = function(){
		obj = event.srcElement;
		if(obj.className == 'menuItemFirst' || obj.className == 'menuItem' || obj.className == 'menuItemLast')
			obj.className+='Over';
	}
	document.onmouseout = function(){
		obj = event.srcElement;
		if(obj.className == 'menuItemFirstOver' || obj.className == 'menuItemOver' || obj.className == 'menuItemLastOver')
			obj.className = obj.className.substring(0,(obj.className.length - 4));
	}
}

//*** Patch for wrong position after resize... Just reload to reset, not nice, fix later!
window.onresize = function(){
	self.location.href = self.location.href;
}