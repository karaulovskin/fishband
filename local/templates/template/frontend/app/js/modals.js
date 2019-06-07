import fancybox from '@fancyapps/fancybox'

export default class Modals {

    modals = [
        {
            selector: '.popup_modal',
            options: {
                type: 'inline',
                baseClass: "popup_fancybox"
            }
        }
    ];

    constructor() {
        this.bindEvents();
    }

    openModal(href) {
        $.fancybox.close();
        $.fancybox.open({
            src  : href,
            type : 'inline',
            opts : {
                baseClass: "popup_fancybox"
            }
        });
    }

    bindEvents() {
        let self = this;

        $('.popup_modal').click(function(e){
            e.preventDefault();
            self.openModal($(this).attr('href'));
        });
    }
}