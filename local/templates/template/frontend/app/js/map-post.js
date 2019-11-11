export default class MapPost {
    map = '[data-post-map]';
    mapButtonOpen = '[data-post-map-open]';
    mapButtonClose = '[data-post-map-close]';

    constructor() {
        this.mapInit();
        this.bindEvents();
    }

    mapOpen() {
        if (!$(this.map).hasClass('is-open')) {
            $(this.map).addClass('is-open');
            $('.overlay').addClass('is-open');
        }
    }

    mapClose() {
        if ($(this.map).hasClass('is-open')) {
            $(this.map).removeClass('is-open');
            $('.overlay').removeClass('is-open');
        }
    }

    mapInit() {
        if ($("#mapPost").length)
            ymaps.ready(init);

        let myMap;
        let myPlacemark;
        let map = $("#mapPost").data("map");

        function init(){
            myMap = new ymaps.Map("mapPost", {
                center: map,
                zoom: 3,
                type: 'yandex#satellite'
            });

            myMap.events.add('click', function (e) {
                var coords = e.get('coords');
                var coordsPoint = coords.join(', ');
                $('input[data-post-map-cords]').val(coordsPoint);
                // alert(coordsPoint);
                myMap.balloon.open(coords, {
                    contentHeader:'Место выбрано!',
                    contentBody: [
                        coords[0].toPrecision(6),
                        coords[1].toPrecision(6)
                    ].join(', ') + '</p>',
                });
            });

            // myMap.events.add(['click', 'contextmenu'], function (e) {
            //     var eType = e.get('type');
            //     eType == 'click' ? alert('left button') : alert('right button');
            // });
        }
    }

    bindEvents() {
        let self = this;

        $(document).on('click', this.mapButtonOpen, function(e) {
            e.preventDefault();
            self.mapOpen();
        });
        $(document).on('click', this.mapButtonClose, function(e) {
            e.preventDefault();
            self.mapClose();
        });
        $(document).on('click', '.overlay', function(e) {
            e.preventDefault();
            self.mapClose();
        });
    }
}