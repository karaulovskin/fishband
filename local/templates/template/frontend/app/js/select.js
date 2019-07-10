export default class Select {
    select = '[data-select]';
    input = '[data-select-input]';
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

    closeSelect() {
        let self = this;
        let select = $(self.select);
        let dropdown = $(self.dropdown);

        select.removeClass('is_open');
        dropdown.hide();
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
        let $dropdown = $select.find(self.dropdown);

        $option.addClass('current');
        $otherOption.removeClass('current');
        $inputText.text($optionText);
        $input.val($optionValue);
        $dropdown.hide();
        $select.removeClass('is_open');
        $select.addClass('selected');
        $select.trigger('select::selected');
    }

    bindEvents() {
        let self = this;

        $(document).on('click', this.input, function(e) {
            e.preventDefault();
            self.openSelect($(this));
        });

        $(document).on('click', this.option, function(e) {
            e.preventDefault();
            self.selectOption($(this));
        });
    }
}