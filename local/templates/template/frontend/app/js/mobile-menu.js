export default class MobileMenu {
    burger = '[data-burger]';
    menu = '[data-mobile-menu]';
    close = '[data-mobile-menu-close]';
    overlay = '[]'

    constructor() {
        this.bindEvents();
    }

    menuHandler() {
        console.log('this__ ' + $(this));
        console.log('menu__ ' + $(this.menu));
        if (!$(this.menu).hasClass('is-open')) {
            this.menuOpen();
        } else {
            this.menuClose();
        }
    }

    menuOpen() {
        $(this.menu).addClass('is-open');
        $('.overlay').addClass('is-open');
        $(this.close).show();
    }

    menuClose() {
        $(this.menu).removeClass('is-open');
        $('.overlay').removeClass('is-open');
        $(this.close).hide();
    }

    bindEvents() {
        let self = this;

        $(document).on('click', this.burger, function(e) {
            e.preventDefault();
            self.menuHandler();
        });
        $(document).on('click', this.close, function(e) {
            e.preventDefault();
            self.menuHandler();
        });
        $(document).on('click', '.overlay', function(e) {
            e.preventDefault();
            self.menuHandler();
        });
    }

}
