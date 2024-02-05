<?php
/**
 * Genesis Framework.
 *
 * WARNING: This file is part of the core Genesis Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package Genesis\SEO
 * @author  StudioPress
 * @license GPL-2.0-or-later
 * @link    https://my.studiopress.com/themes/genesis/
 */

/**
 * Disable the Genesis SEO features.
 *
 * @since 1.6.0
 *
 * @see genesis_default_title()
 * @see genesis_doc_head_control()
 * @see genesis_seo_meta_description()
 * @see genesis_seo_meta_keywords()
 * @see genesis_robots_meta()
 * @see genesis_canonical()
 * @see genesis_add_inpost_seo_box()
 * @see genesis_add_inpost_seo_save()
 * @see genesis_add_taxonomy_seo_options()
 * @see genesis_user_seo_fields()
 */
function genesis_disable_seo() {

	remove_filter( 'wp_title', 'genesis_default_title', 10 );
	remove_action( 'get_header', 'genesis_doc_head_control' );
	remove_action( 'genesis_meta', 'genesis_seo_meta_description' );
	remove_action( 'genesis_meta', 'genesis_seo_meta_keywords' );
	remove_action( 'genesis_meta', 'genesis_robots_meta' );
	remove_action( 'wp_head', 'genesis_canonical', 5 );
	remove_action( 'wp_head', 'genesis_meta_name' );
	remove_action( 'wp_head', 'genesis_meta_url' );
	remove_action( 'wp_head', 'genesis_paged_rel' );
	remove_filter( 'genesis_attr_head', 'genesis_attributes_head' );
	add_filter( 'genesis_attr_head', 'genesis_attributes_empty_class' );

	remove_action( 'admin_menu', 'genesis_add_inpost_seo_box' );
	remove_action( 'save_post', 'genesis_inpost_seo_save', 1 );

	remove_action( 'admin_init', 'genesis_add_taxonomy_seo_options' );

	remove_action( 'show_user_profile', 'genesis_user_seo_fields' );
	remove_action( 'edit_user_profile', 'genesis_user_seo_fields' );

	remove_theme_support( 'genesis-seo-settings-menu' );
	add_filter( 'pre_option_' . GENESIS_SEO_SETTINGS_FIELD, '__return_empty_array' );

	define( 'GENESIS_SEO_DISABLED', true );

}

/**
 * Detect whether or not Genesis SEO has been disabled.
 *
 * @since 1.8.0
 *
 * @return bool `true` if Genesis SEO is disabled, `false` otherwise.
 */
function genesis_seo_disabled() {

	return defined( 'GENESIS_SEO_DISABLED' ) && GENESIS_SEO_DISABLED;

}

/**
 * Detect whether Genesis SEO is active.
 *
 * @since 2.6.0
 *
 * @return bool `true` if Genesis SEO is active, `false` otherwise.
 */
function genesis_seo_active() {
	return ! genesis_seo_disabled();
}

add_action( 'after_setup_theme', 'genesis_seo_compatibility_check' );
/**
 * Check for the existence of popular SEO plugins and disable the Genesis SEO features if one or more of the plugins
 * is active.
 *
 * Runs before the menu is built, so we can disable SEO Settings menu, if necessary.
 *
 * @since 1.2.0
 *
 * @see genesis_default_title()
 */
function genesis_seo_compatibility_check() {

	if ( genesis_detect_seo_plugins() ) {
		genesis_disable_seo();
	}

	if ( ! genesis_is_wpseo_outputting_jsonld() && ! apply_filters( 'genesis_disable_microdata', false ) ) {
		include_once __DIR__ . '/schema.php';
	}

	// Disable Genesis <title> generation if SEO Title Tag is active.
	if ( function_exists( 'seo_title_tag' ) ) {
		remove_filter( 'wp_title', 'genesis_default_title', 10 );
		remove_action( 'genesis_title', 'wp_title' );
		add_action( 'genesis_title', 'seo_title_tag' );
	}

}

/**
 * Detect some SEO Plugin that add constants, classes or functions.
 *
 * Applies `genesis_detect_seo_plugins` filter to allow third party manipulation of SEO plugin list.
 *
 * @since 1.6.0
 *
 * @return bool `true` if plugin exists, or `false` if plugin constant, class or function not detected.
 */
function genesis_detect_seo_plugins() {

	return genesis_detect_plugin(
		// Use this filter to adjust plugin tests.
		apply_filters(
			'genesis_detect_seo_plugins',
			// Add to this array to add new plugin checks.
			[

				// Classes to detect.
				'classes'   => [
					'All_in_One_SEO_Pack',
					'All_in_One_SEO_Pack_p',
					'HeadSpace_Plugin',
					'Platinum_SEO_Pack',
					'wpSEO',
					'SEO_Ultimate',
				],

				// Functions to detect.
				'functions' => [],

				// Constants to detect.
				'constants' => [ 'WPSEO_VERSION', 'SEOPRESS_VERSION' ],
			]
		)
	);

}

add_action( 'save_post', 'genesis_maybe_clear_primary_title_h1' );
/**
 * Sets the Primary Title H1 Genesis SEO setting to None if a heading level one
 * is found on a static homepage.
 *
 * @since 3.1.0
 *
 * @param int $post_id The page to check for an h1.
 */
function genesis_maybe_clear_primary_title_h1( $post_id ) {

	if (
		! $post_id
		|| genesis_seo_disabled()
		|| wp_is_post_revision( $post_id )
		|| ! has_blocks( $post_id )
	) {
		return;
	}

	if ( 'page' !== get_option( 'show_on_front' ) ) {
		return;
	}

	if ( (int) get_option( 'page_on_front' ) !== $post_id ) {
		return;
	}

	$seo_options = get_option( GENESIS_SEO_SETTINGS_FIELD );

	if ( 'neither' === $seo_options['home_h1_on'] ) {
		return;
	}

	$post = get_post( $post_id );

	if ( ! $post instanceof WP_Post ) {
		return;
	}

	$post_has_h1_block = preg_match( '/wp:heading {.+1.*}/', $post->post_content );

	if ( $post_has_h1_block ) {
		$seo_options['home_h1_on'] = 'neither';
		update_option( GENESIS_SEO_SETTINGS_FIELD, $seo_options );
	}

}

/**
 * Determines if JSON-LD is enabled from 3rd party plugins.
 *
 * @since 3.1.0
 *
 * @return bool True if enabled, false if else.
 */
function genesis_is_wpseo_outputting_jsonld() {
	$wpseo_ld_enabled = (
		defined( 'WPSEO_VERSION' )
		&& version_compare( WPSEO_VERSION, '11.0-RC0', '>=' )
		// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound
		&& apply_filters( 'wpseo_json_ld_output', true )
	);

	return apply_filters( 'genesis_is_wpseo_outputting_jsonld', $wpseo_ld_enabled );
}
