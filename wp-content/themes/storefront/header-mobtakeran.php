<?php

/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package storefront
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
    <!-- <link rel="stylesheet" href="<?= get_template_directory_uri()  ?>/assets/css/particle.css"> -->
    <link rel="stylesheet" href="<?= get_template_directory_uri()  ?>/assets/css/swiper-bundle.min.css">
    <!-- <link rel="stylesheet" href="<?= get_template_directory_uri()  ?>/assets/css/swiper-init.css"> -->
    <link rel="stylesheet" href="<?= get_template_directory_uri()
                                    ?>/assets/css/style.css">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <header class="mobile flex justify-end md-none" >
        <div class="menu-btn-3 menu" >
            <span></span>
        </div>
    </header>
    <header class="main-header">
        <?php
        $args = array(
            'container' => false,
            'theme_location' => 'primary',
            'items_wrap' => '<ul class="primary">%3$s</ul>',
        );
        wp_nav_menu($args);
        ?>
    </header>