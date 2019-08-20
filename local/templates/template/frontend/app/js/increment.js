export default class Increment {
    constructor() {
        this.bindEvents();
    }

    increase(elem) {
        var $input = elem.parent().find('.card-buy__select-value');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    }

    reduce(elem) {
        var $input = elem.parent().find('.card-buy__select-value');
        if ($input.val() == 0) {
            return;
        }
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    }

    bindEvents() {
        let self = this;

        $(document).on('click', '.card-buy__select-reduce', function (e) {
            e.preventDefault();
            self.reduce($(this));
        });
        $(document).on('click', '.card-buy__select-increase', function (e) {
            e.preventDefault();
            self.increase($(this));
        });
        // $(document).on('keydown', '.card-buy__select-value', function (eventObject) {
        //     console.log(eventObject.which);
        // });
    }
}