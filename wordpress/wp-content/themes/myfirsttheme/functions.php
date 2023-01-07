<!-- Arquivo para controle das funcionalidades da aplicação ( Controller pai ) -->
<?php
  // Chamando a pasta com as funções de exemplo
    // require get_template_directory() . '/includes/lm_exemplo_functions.php';
          
    // add_action('shutdown', 'fim');
  // adicionando uma gatilho de função para quando for terminar de
  // processar as funções. chamar a função desejada

  // Chamando o arquivo de configuração de elementos do site
  require get_template_directory() . '/includes/setup.php';

  // Chamando nosso arquivos de chamadas e estilizações
  add_action('wp_enqueue_scripts', 'lm_theme_styles');

  // Chamando a função para configurações após a construção do template
  add_action('after_setup_theme', 'lm_after_setup');

  // adicionando os widgets da aplicação
  add_action('widgets_init', 'lm_widgets_theme');
?>