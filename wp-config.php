<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'christine_blueberrygirl');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'VE? gs`qW57H]<%QPQf]R}}J~vg$Hi}K6{L+O>kAB{TZjisMb8QJE^!bQZ<AvT:.');
define('SECURE_AUTH_KEY',  'e6m}^Y+4mA?&HC{~Azo3ercW1P?f5+d:^>gc8: *[>=+T)eD`~;.hCB;jB)x3l!h');
define('LOGGED_IN_KEY',    'F2hX+18Qv3r6)lUO8}6VDNjK8}rt|/uhU(SqWegKtyRFOCOL*[&r*#e?#k9c]>ro');
define('NONCE_KEY',        'G=|dxnZg~0&Wd(W:0--;6{8t;/#[siMycgJ]?D$eSflt*?iEB[XknGu*M/HcXUv]');
define('AUTH_SALT',        'vz/}s1Q%gA/=DjyS@v<bJ]72ZzFi7CXkuI|sdknuC}<E=QV5.X/wIOHO,hOc3pA@');
define('SECURE_AUTH_SALT', '^5:6wRAGK6)*Sm1aFN{oIbUG)-J6&>NN .d6AZdI0M<K@Y%cZLJN&eyp;Rw]3t[@');
define('LOGGED_IN_SALT',   '?a_%l%nmnEBl*Wj8=a5x%z~lPc#&2dH7xpec4R[kErX#>qSm6^s1X;b$(?8iOuP_');
define('NONCE_SALT',       's _S^A:kfAM~:AA;G3I[AQbvdT/h1C8ft}lEQ:F05Yk#m1pXt.!v-NB;o1/WQi!*');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_w5r880a2gx_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
