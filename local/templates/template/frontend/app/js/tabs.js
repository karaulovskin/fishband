export default class Tabs {
    container = '[data-tabs]';
    nav = '[data-tabs-nav]';
    navItem = '[data-tabs-nav-item]';
    navTrigger = '[data-tabs-nav-trigger]';
    content = '[data-tabs-content]';
    contentItem = '[data-tabs-content-item]';

    constructor() {
        this.bindEvents();
    }

    switchTab(elem) {
        let self = this;
        let $tab = elem;
        let $navItem = $tab.closest(self.navItem);
        let $contentItem = $(self.contentItem);
        let $indx = $navItem.index();



        $contentItem.eq($indx)
            .add($navItem)
            .addClass('current')
            .siblings()
            .removeClass('current');
    }

    bindEvents() {
        let self = this;

        $(document).on('click', this.navTrigger, function() {
            self.switchTab($(this));
        });
    }
}