<!-- Meu primeiro arquivo de theme - arquivo para controle dos elementos da página de exibição -->
<?php get_header(); ?>

<section class="content-main">

  <!-- Listando os post -->
  <div class='container'>
    <?php if( have_posts() ): ?>
      <?php while( have_posts() ): ?>
        <?php the_post(  ); ?>

        <article>
          <?php if( has_post_thumbnail() ): ?>
            <a href="<?php the_permalink(); ?>">
              <?php the_post_thumbnail('full', array( 'class' => 'post_miniatura') ); ?>
            </a>
          <?php endif; ?>

          <h2> <a href="<?php the_permalink(); ?>"> <?php the_title(); ?> </a></h2>

          <p>
            <?php echo get_the_date(); ?> | <a href="<?php print get_author_posts_url( get_the_author_meta('ID') ); ?>"><?php the_author( ); ?></a> | <?php the_category(', '); ?>
          </p>

          <p>
            <?php the_excerpt(  ); ?>
          </p>

          <p>
            <?php comments_number('Nenhum comentário', '1 comentário', '% comentários'); ?> | <a href="<?php the_permalink(  ); ?>">Veja mais</a>
          </p>
        </article>

      <?php endwhile; ?>
    <?php endif; ?>

    <div class="paginacao">

      <div class="pagina_anterior">
        <?php previous_post_link( 'Postagens anteriores' ); ?>
      </div>

      <div class="pagina_posterior">
        <?php next_post_link( 'Postagens seguintes' ); ?>
      </div>
    </div>
  </div>

  <?php get_sidebar(); ?>

  <div style="clear:both"></div>
</section>

<?php get_footer(); ?>