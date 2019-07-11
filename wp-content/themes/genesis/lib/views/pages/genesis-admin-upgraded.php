<?php
/**
 * Genesis Framework.
 *
 * WARNING: This file is part of the core Genesis Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package StudioPress\Genesis
 * @author  StudioPress
 * @license GPL-2.0-or-later
 * @link    https://my.studiopress.com/themes/genesis/
 */

$genesis_allowed_code = [
	'code' => [],
	'a'    => [
		'href'   => [],
		'target' => [],
		'rel'    => [],
	],
];
?>
<div class="wrap about-wrap">

<h1><?php echo esc_html( get_admin_page_title() ); ?></h1>

<p class="about-text">
	<?php
	printf(
		wp_kses(
			// Translators: Genesis version, changelog URI.
			__( 'Congratulations for successfully updating to Genesis %s. We keep a <a href="%s" target="_blank" rel="noopener noreferrer">detailed changelog</a> for each release. Feel free to take a look!', 'genesis' ),
			$genesis_allowed_code
		),
		PARENT_THEME_VERSION,
		'https://genesischangelog.com/'
	);
	?>
</p>

<div class="return-to-dashboard">
	<p><a href="<?php echo esc_url( menu_page_url( 'genesis', 0 ) ); ?>"><?php esc_html_e( 'Go to Theme Settings &rarr;', 'genesis' ); ?></a></p>
	<?php if ( ! genesis_seo_disabled() ) : ?>
	<p><a href="<?php echo esc_url( menu_page_url( 'seo-settings', 0 ) ); ?>"><?php esc_html_e( 'Go to SEO Settings &rarr;', 'genesis' ); ?></a></p>
	<?php endif; ?>

</div>

</div>
