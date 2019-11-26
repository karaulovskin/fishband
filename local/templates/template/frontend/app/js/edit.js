export default class Edit {
    container = '[data-edit]';

    constructor() {
        this.bindEvents();
    }

    open() {
        if (!$(this.container).hasClass('is-active')) {
            $(this.container).addClass('is-active');
        } else {
            $(this.container).removeClass('is-active');
        }
    }
    close(target) {
        if (!$(this.container).is(target) && $(this.container).has(target).length === 0) {
            $(this.container).removeClass('is-active');
        }
    }

    bindEvents() {
        let self = this;

        $(document).on('click', this.container, function(e) {
            // e.preventDefault();
            self.open($(this));
        });
        $(document).on('click', function(e) {
            // self.close(e.target);
        });
    }

}