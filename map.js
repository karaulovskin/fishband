export default class Maps {

    constructor() {
        this.init();
        console.log('map');
    }

    init() {
        if ($("#mapView").length)
            ymaps.ready(init);

        let myMap;
        let myPlacemark;
        let map = $("#mapView").data("map");

        function init(){
            myMap = new ymaps.Map("mapView", {
                center: map,
                zoom: 17
            });

            myPlacemark = new ymaps.Placemark(map, {}, {
                iconLayout: 'default#image',
                iconImageHref: '/images/icons/mark.png',
                iconImageSize: [50, 70],
                // iconImageOffset: [-12, -10]
            });

            myMap.geoObjects.add(myPlacemark);
        }
    }

}