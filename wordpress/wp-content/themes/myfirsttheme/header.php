<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- Definindo no wordpress a chamada dos nossos css e javascripts para utilização -->
    <?php wp_head(); ?>
  </head>
  <body <?php body_class();?> >
    <header>
      <h1>Meu código html</h1>

      <!-- Exibindo o menu do tema caso o mesmo possua o menu habilitado -->
      <?php
        if( has_nav_menu( 'primary' ) )
        {
          // Instanciando nosso menu
          wp_nav_menu ( array(
                              'theme_location'  => 'primary',
                              'container'       => 'nav',
                              'container_class' => 'nav_content_lst',
                              'fallback_cb'     => false
                            ) 
                      );
        }
      ?>
    </header>