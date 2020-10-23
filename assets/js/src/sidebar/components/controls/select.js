/**
 * Tailor.Controls.Select
 *
 * A select control.
 *
 * @augments Marionette.ItemView
 */
var AbstractControl = require( './abstract-control' ),
    SelectControl;

SelectControl = AbstractControl.extend( {

    ui : {
        'input' : 'select',
        'mediaButton' : '.js-setting-group .button',
        'defaultButton' : '.js-default',
        'controlGroups' : '.control__body > *'
    },

    events : {
        'change @ui.input' : 'onFieldChange',
        'click @ui.mediaButton' : 'onMediaButtonChange',
        'click @ui.defaultButton' : 'onDefaultButtonChange'
    },

    templateHelpers : {
        selected : function( media, key ) {
            return key === this.values[ media ] ? 'selected' : '';
        }
    },

    /**
     * Initializes the selectize instance(s) and updates the media-query based control groups when the control is rendered.
     *
     * @since 1.7.2
     */
    onRender: function () {
        _.each(this.getValues(), function (value, media) {
            var $field = this.ui.input.filter('[name^="' + media + '"]');

            _.each($field, function () {
                var $select = $field.selectize({
                    sortField: 'text',
                    placeholder: 'Please select an option'
                });

                // Clear out if theres no selected option

                if ( ! value ) {
                    var selectize  = $select[0].selectize;
                    selectize.clear();
                }
            });
        }, this);

        this.updateControlGroups();
    },

    /**
     * Destroys the selectize instance(s).
     *
     * @since 1.7.2
     */
    onDestroy: function () {
        _.each(this.getValues(), function (value, media) {
            var $field = this.ui.input.filter('[name^="' + media + '"]');
            $field.selectize('destroy');
        }, this);
    }

} );

module.exports = SelectControl;
