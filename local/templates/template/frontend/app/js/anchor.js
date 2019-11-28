export default class Anchor {
    constructor() {
        this.events();
    }

    handler($this) {
        let id  = $this.attr('href');
        let top = $(id).offset().top;

        $('body,html').animate({scrollTop: top - 77 }, 1500);
    }

    events() {
        let self = this;

        $('.reply').on("click", function (e) {
            e.preventDefault();
            self.handler($(this));
        });
    }
}