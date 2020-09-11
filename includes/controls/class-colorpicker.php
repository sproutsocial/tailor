<?php

/**
 * Tailor Color Control class.
 *
 * @package Tailor
 * @subpackage Controls
 * @since 1.0.0
 */

defined( 'ABSPATH' ) or die();

if ( class_exists( 'Tailor_Control' ) && ! class_exists( 'Tailor_Colorpicker_Control' ) ) {

    /**
     * Tailor Color Control class.
     *
     * @since 1.0.0
     */
    class Tailor_Colorpicker_Control extends Tailor_Control {

        /**
         * True if the RGBA color values should be allowed.
         *
         * @since 1.0.0
         * @access public
         * @var bool
         */
        public $rgba = false;

        /**
         * The color palettes.
         *
         * @since 1.0.0
         * @access public
         * @var mixed
         */
        public $palettes = true;

        /**
         * Returns the parameters that will be passed to the client JavaScript via JSON.
         *
         * @since 1.0.0
         *
         * @return array The array to be exported to the client as JSON.
         */
        public function to_json() {
            $array = parent::to_json();
            $array['rgba'] = boolval( $this->rgba );
            $array['palettes'] = $this->palettes;
            return $array;
        }

        /**
         * Enqueues control related scripts/styles.
         *
         * @since 1.0.0
         */
        public function enqueue() {

            wp_register_script(
                'iris',
                admin_url( '/js/iris.min.js' ),
                array( 'jquery-ui-draggable', 'jquery-ui-slider', 'jquery-touch-punch' ),
                false,
                1
            );
        }

        /**
         * Prints the Underscore (JS) template for this control.
         *
         * Class variables are available in the JS object provided by the to_json method.
         *
         * @since 1.0.0
         * @access protected
         *
         * @see Tailor_Control::to_json()
         * @see Tailor_Control::print_template()
         */
        protected function render_template() { ?>

            <input type="color" name="<%= media %>" name="<%= media %>" value="<%= values[ media ] %>" data-alpha="<%= rgba %>" />

            <?php
        }
    }
}
