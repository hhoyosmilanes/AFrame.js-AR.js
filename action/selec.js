/*$( document ).ready(function() {
});*/
setTimeout(function() {
    console.clear();
    alert("si colocas el cursor sobre el animal, cambiara de color. colorea el bisonte de Rojo, la tortuga de Azul y el ave de Verde");
},2000);

var n_bisonte = "";//rojo/0
var n_tortuga = "";//azul/2
var n_ave = "";//verde/1

AFRAME.registerComponent('cursor-listener', {
	init: function () {
		var lastIndex = -1;
		var COLORS = ['red', 'green', 'blue'];
		this.el.addEventListener('click', function (evt) {
			lastIndex = (lastIndex + 1) % COLORS.length;
			this.setAttribute('material', 'color', COLORS[lastIndex]);
			//console.log('I was clicked at: ', evt.detail.intersection.point);
			var entity=this.getAttribute("id");
			switch (entity) {
				case "bisonte":
					n_bisonte = lastIndex;
					console.log(entity+n_bisonte);
				break;
				case "tortuga":
						n_tortuga = lastIndex;
						console.log(entity+n_tortuga);
					break;
				case "ave":
						n_ave = lastIndex;
						console.log(entity+n_ave);
					break;
			}

		});
	}
});

var interval = null;
var	time = 40;
function tiempo() {
	if (time > 0) {
		time = time - 1;
		console.log(time);
	} else {
		if (n_bisonte ==  0 && n_tortuga==2 && n_ave==1) {
			clearInterval(interval);
			alert("Bien hecho!");
		} else {
			alert("Vuelve a intentar!");
			time = 40
		}
	}
}
interval = setInterval(tiempo, 1000);
//setTimeout()


//this.el = Referencia a la entidad como un elemento HTML
//addEventListener = Cuando se emite el evento (click), se llamará a la función
//setAttribute (componentName, value, [propertyValue | clobber])
