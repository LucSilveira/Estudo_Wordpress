<form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url('/') ); ?>">
  <!-- Regras que o wordpress exige -->

  <!-- Aplicando o campo de busca -->
  <input type="search" name="s" value="<?php echo esc_attr( get_search_query() ); ?>" />

  <!-- Botão de confirmacao -->
  <input type="submit" class="search-submit" value='Buscar' />
</form>