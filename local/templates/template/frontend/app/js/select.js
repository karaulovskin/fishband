export default class Select {
    select = '[data-select]';
    input = '[data-select-input]';
    selectTrigger = '[data-select-trigger]';
    inputText = '[data-select-input-text]';
    dropdown = '[data-select-dropdown]';
    option = '[data-select-option]';

    constructor() {
        this.bindEvents();
    }

    openSelect(elem) {
        let self = this;
        let $selectInput = elem;
        let $select = $selectInput.closest(self.select);
        let $dropdown = $select.find(self.dropdown);

        $(self.dropdown).hide();
        if (!$select.hasClass('is_open')) {
            $select.addClass('is_open');
            $dropdown.show();
        } else {
            $select.removeClass('is_open');
            $dropdown.hide();
        }
    }

    closeSelect(target) {
        let self = this;
        let select = $(self.select);

        if (!select.is(target) && select.has(target).length === 0) {
            select.removeClass('is_open');
        }
    }

    selectOption(elem) {
        let self = this;
        let $option = elem;
        let $otherOption = $option.siblings(elem);
        let $optionText = $option.text();
        let $optionValue = $option.attr('value');
        let $select = $option.closest(self.select);
        let $input = $select.find(self.input);
        let $inputText = $select.find(self.inputText);

        $option.addClass('current');
        $otherOption.removeClass('current');
        $inputText.text($optionText);
        $input.val($optionValue);
        $select.addClass('selected');
        $select.trigger('select::selected');
    }

    bindEvents() {
        let self = this;

        $(document).on('click', this.selectTrigger, function(e) {
            e.preventDefault();
            self.openSelect($(this));
        });

        $(document).on('click', this.option, function(e) {
            e.preventDefault();
            self.selectOption($(this));
        });

        $(document).on('click', function(e) {
            self.closeSelect(e.target);
        });
    }
}