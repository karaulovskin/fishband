export default class Profile {
    container = '[data-profile-top]';

    constructor() {
        this.bindEvents();
    }

    handler() {
        if (!$(this.container).hasClass('is-active')) {
            $(this.container).addClass('is-active');
        } else {
            $(this.container).removeClass('is-active');
        }
    }

    bindEvents() {
        let self = this;

        $(document).on('click', this.container, function(e) {
            e.preventDefault();
            self.handler();
        });
    }
}