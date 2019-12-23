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
            objectManager.objects.options.set({
                preset: 'islands#redIcon',
                iconLayout: 'default#image',
                iconImageHref: '/assets/templates/fishband/assets/images/icons/mark.jpg',
                iconImageSize: [25, 25],
            });
            objectManager.clusters.options.set({
                preset: 'islands#grayClusterIcons',
                iconLayout: 'default#image',
                iconImageHref: '/assets/templates/fishband/assets/images/icons/mark.jpg',
                iconImageSize: [25, 25],
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
            objectManager.objects.options.set({
                preset: 'islands#redIcon',
                iconLayout: 'default#image',
                iconImageHref: '/assets/templates/fishband/assets/images/icons/mark.jpg',
                iconImageSize: [25, 25],
            });
            objectManager.clusters.options.set({
                preset: 'islands#grayClusterIcons',
                iconLayout: 'default#image',
                iconImageHref: '/assets/templates/fishband/assets/images/icons/mark.jpg',
                iconImageSize: [25, 25],
            });
            myMap.geoObjects.add(objectManager);


            $.ajax({
                url: "/assets/templates/fishband/assets/json/data.json"
            }).done(function(data) {
                objectManager.add(data);
            });

            objectManager.setFilter(function (object) {
                return object.properties.type == 'Магазин';
            });
        }
    }
}