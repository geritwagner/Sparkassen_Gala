var Zeitplan = function() {

	var ZeitplanLaden = function() {
		$('.download-zeitplan').click(function(){
			var doc = new jsPDF();
			doc.setFontSize(21);

			var elem = document.getElementById('heading_zeitplan');
			// alert('Test');
			alert(elem.children('strong').innerHTML);

			// doc.text(10, 10, heading_zeitplan.html);
			doc.text(10, 10, 'test');

			var filename = 'Zeitplan.pdf';
			doc.save(filename);
		});
		return false;
	};


	return {
		init: function() {
			ZeitplanLaden();
		},
	};
}();

$(document).ready(function() {
	Zeitplan.init();
});
