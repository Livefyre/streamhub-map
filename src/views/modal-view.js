define([
    'streamhub-sdk/modal/views/attachment-gallery-modal',
    'inherits'
], function (
    AttachmentGalleryModal,
    inherits
) {
    'use strict';

    var MapModalView = function(opts) {
        AttachmentGalleryModal.call(this, opts);
    };
    inherits(MapModalView, AttachmentGalleryModal);

    /**
     * Overriding the hide method in the ModalView from the SDK to remove the
     * "hiding" event because it removes the lf-package from the "hub-modals"
     * element, which causes problems loading child modals.
     * @override
     */
    MapModalView.prototype.hide = function () {
        this.$el.hide();
        this._detach();
        this.visible = false;
        $('body').css('overflow', 'auto');
        this.$el.trigger('hidden');
    };

    return MapModalView;
});
