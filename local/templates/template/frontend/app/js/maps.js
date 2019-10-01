export default class Maps {

    constructor() {
        this.mapView();
        this.mapContacts();
    }

    mapView() {
        if ($("#mapView").length)
            ymaps.ready(init);

        let myMap;
        let objectManager;
        let myPlacemark;
        let map = $("#mapView").data("map");

        function init(){
            myMap = new ymaps.Map("mapView", {
                center: map,
                zoom: 4,
                type: 'yandex#satellite'
            });
            objectManager = new ymaps.ObjectManager({
                clusterize: true,
                gridSize: 32,
                clusterDisableClickZoom: true,
            });
            myMap.geoObjects.add(objectManager);

            $('.map-mode__item').each(function () {
                if ($(this).hasClass('current')) {
                    let $type = $(this).find('.map-mode__link').text();
                    objectManager.setFilter(function (object) {
                        return object.properties.type == $type;
                    });
                }
            });

            $(document).on('click', '.map-mode__link', function(e) {
                e.preventDefault();

                let $tab = $(this).closest('.map-mode__item');
                let $tabType = $(this).text();
                let $tabs = $tab.siblings();

                if (!$tab.hasClass('current')) {
                    $tab.addClass('current');
                    $tabs.removeClass('current');
                }

                objectManager.setFilter(function (object) {
                    return object.properties.type == $tabType;
                });
            });

            $.ajax({
                url: "/assets/templates/fishband/assets/json/data.json"
            }).done(function(data) {
                objectManager.add(data);
            });

            // myPlacemark = new ymaps.Placemark(map, {}, {
            //     iconLayout: 'default#image',
            //     iconImageHref: '/images/icons/mark.png',
            //     iconImageSize: [43, 53],
            //     // iconImageOffset: [-12, -10]
            // });

            // myMap.geoObjects.add(myPlacemark);
        }
    }

    mapContacts() {
        if ($("#contactsMap").length)
            ymaps.ready(init);

        let myMap;
        let objectManager;
        let myPlacemark;
        let map = $("#contactsMap").data("map");

        function init(){
            myMap = new ymaps.Map("contactsMap", {
                center: map,
                zoom: 3,
                type: 'yandex#satellite'
            });

            objectManager = new ymaps.ObjectManager({
                clusterize: true,
                gridSize: 32,
                clusterDisableClickZoom: true,
            });
            myMap.geoObjects.add(objectManager);

            $.ajax({
                url: "./json/data.json"
            }).done(function(data) {
                objectManager.add(data);
            });

            objectManager.setFilter(function (object) {
                return object.properties.type == 'Магазин';
            });

            // myPlacemark = new ymaps.Placemark(map, {}, {
            //     iconLayout: 'default#image',
            //     iconImageHref: '/images/icons/mark.png',
            //     iconImageSize: [43, 53],
            //     // iconImageOffset: [-12, -10]
            // });

            // myMap.geoObjects.add(myPlacemark);
        }
    }
}