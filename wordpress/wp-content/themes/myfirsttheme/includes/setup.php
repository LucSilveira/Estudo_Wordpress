<?php
  // Função inicial do site para chamas os estilos e scripts
  function lm_theme_styles()
  {
    // Criando um novo arquivo de css e instanciando no projeto
    wp_enqueue_style('theme_css', get_template_directory_uri() . '/assets/css/theme.css' );

    wp_enqueue_script('script_js', get_template_directory_uri() . '/assets/scripts/script.js', array('jquery'), '', true);
  }

  // Função para chamada após a construção dos elementos da tela
  function lm_after_setup()
  {
    // Habilitando a opção de menu no nosso tema
    add_theme_support( 'menus' );

    // Registrando multiplos menus no tema
    register_nav_menu( 'primary', __('Primary Menu', 'primeirotema'));
  }

  // Função para aplicar nossas ferramentas
  function lm_widgets_theme()
  {
    // Criando um sidebar
    register_sidebar( array(
                        "name" => __('Meu primeiro sidebar', 'primeirotema'),
                        "id" => 'lm_sidebar_theme',

                        "before_title" => '<h4 class="widget_title">',
                        "after_title" => "</h4>",

                        "before_widget" => "<br><div id='%1$%' class='%2$%'>",
                        "after_widget" => "</div>"
                      ) );
  }