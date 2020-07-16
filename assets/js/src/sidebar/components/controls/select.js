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
        },

        edit : function( media ) {
            if ( this.setting === ('data_component' || 'embedded_component') && this.values[ media ] ) {
                return `<a href="/wp-admin/post.php?post=${this.values[ media ]}&action=edit" target="_blank">Edit</a>`;
            }

            return null;
        }
    },

    /**
     * Initializes the selectize instance(s) and updates the media-query based control groups when the control is rendered.
     *
     * @since 1.7.2
     */
    onRender : function() {
        _.each(this.getValues(), ( value, media ) => {
            var $field = this.ui.input.filter( '[name^="' + media + '"]' );
            _.each($field, () => $field.selectize());
        });

        this.updateControlGroups();
    },

    /**
     * Destroys the selectize instance(s).
     *
     * @since 1.7.2
     */
    onDestroy : function() {
        _.each( this.getValues(), function( value, media ) {
            this.ui.input.filter( '[name^="' + media + '"]' ).selectize( 'destroy' );
        }, this );
    }

} );

module.exports = SelectControl;
