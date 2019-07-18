export default class Comments {
    commentsAdd = '[data-comments-add-btn]';
    commentsNote = '[data-comments-add-note]';
    commentsSubmit = '[data-comments-add-submit]';

    constructor() {
        this.bindEvents();
    }

    openNote() {
        let self = this;

        $(this.commentsAdd).hide();
        $(this.commentsNote).addClass('is-active');
    }

    closeNote() {
        let self = this;

        $(this.commentsAdd).show();
        $(this.commentsNote).removeClass('is-active');
    }

    bindEvents() {
        let self = this;

        $(document).on('click', this.commentsAdd, function() {
            self.openNote();
        });
        $(document).on('click', this.commentsSubmit, function() {
            self.closeNote();
        });
    }
}