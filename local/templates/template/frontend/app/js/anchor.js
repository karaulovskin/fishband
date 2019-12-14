export default class Anchor {
    redactor = '[data-comments-add-note]';

    constructor() {
        this.events();
    }

    handler($this) {
        let id  = $this.attr('href');
        let top = $(id).offset().top;
        $('.comments__user').remove();
        let userName = $this.closest('.comments-item').find('.comments-item__head').find('.profile-small__name').text();

        this.addUser(userName);

        $('body,html').animate({scrollTop: top - 77 }, 1500);
    }

    addUser(userName) {
        $(this.redactor).before("<div class='comments__user'></div>");
        $('.comments__user').text('ответить ' + userName);
    }

    events() {
        let self = this;

        $('.reply').on("click", function (e) {
            e.preventDefault();
            self.handler($(this));
        });
    }
}