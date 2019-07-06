export default class Maps {

    constructor() {
        this.mapView();
        this.contactsMap();
    }

    mapView() {
        if ($("#mapView").length)
            ymaps.ready(init);

        let myMap;
        let myPlacemark;
        let map = $("#mapView").data("map");

        function init(){
            myMap = new ymaps.Map("mapView", {
                center: map,
                zoom: 6
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

    contactsMap() {
        if ($("#contactsMap").length)
            ymaps.ready(init);

        let myMap;
        let myPlacemark;
        let map = $("#contactsMap").data("map");

        function init(){
            myMap = new ymaps.Map("contactsMap", {
                center: map,
                zoom: 6
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