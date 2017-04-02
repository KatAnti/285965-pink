ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.938631, 30.323055],
            zoom: 16,
			controls: [/* 'zoomControl', 'typeSelector',  'fullscreenControl' */]
        }, {
            //searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            //hintContent: 'Собственный значок метки'
        }, {
           /*  // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/myIcon.gif',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -42] */
        });

		myMap.geoObjects.add(myPlacemark);
		myMap.behaviors.disable('scrollZoom');
		
		myMap.events.add('click', function onMapClick(e) {
		if(myMap.behaviors.isEnabled('scrollZoom')) {
			myMap.events.remove('click', onMapClick);
		} else {
			myMap.behaviors.enable(['scrollZoom']);
		}
	});
});
