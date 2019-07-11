export default class DownloadFile {
    container = '[data-download-file]';
    load = '[data-download-file-load]';
    text = '[data-download-file-text]';

    constructor() {
        this.bindEvents();
    }

    handler(elem) {
        let self = this;
        var $container = elem.closest($(this.container));
        var $text = $container.find($(this.text));
    }

    bindEvents() {
        let self = this;

        $(document).on('click', this.load, function() {
            self.handler($(this));
        });
    }
}