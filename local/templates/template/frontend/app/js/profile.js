export default class Profile {
    profileTop = '[data-profile-top]';
    profile = '[data-profile]';
    profileEdit = '[data-profile-edit]';
    profileEditButton = '[data-profile-edit-active]';
    duration = 500;

    constructor() {
        this.bindEvents();
    }

    profileTopActive() {
        if (!$(this.profileTop).hasClass('is-active')) {
            $(this.profileTop).addClass('is-active');
        } else {
            $(this.profileTop).removeClass('is-active');
        }
    }

    profileEditActive() {
        if (!$(this.profileEdit).hasClass('is-active')) {
            $(this.profileEdit).addClass('is-active');
            $(this.profileEdit).stop(true, true).slideDown(self.duration);
        } else {
            $(this.profileEdit).removeClass('is-active');
            $(this.profileEdit).slideUp(self.duration);
        }
    }

    bindEvents() {
        let self = this;

        $(document).on('click', this.profileTop, function(e) {
            e.preventDefault();
            self.profileTopActive();
        });
        $(document).on('click', this.profileEditButton, function(e) {
            e.preventDefault();
            self.profileEditActive();
        });
    }
}