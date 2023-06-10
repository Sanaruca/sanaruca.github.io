<script>
  import Logo from "@components/svg/Logo.svg.svelte";

  const files = Object.keys(import.meta.glob("/src/articles/*.svx"));

  const articles = files.map((it) => it.split("/").at(-1)?.replace(".svx", ""));
</script>

<svelte:head>
  <title>Blog | Sanaruca</title>
</svelte:head>

<header class="header | black-target">
  <div class="header__title-content">
    <h1>Blog Posts</h1>
    <p>Welcome to my blog, where I share my experiences with you.</p>
  </div>
  <div class="header__logo-content">
    <Logo />
  </div>
</header>

<section class="posts">
  <ul class="posts__ul">
    {#each articles as ar}
      <li class="posts__ul__li">
        <a class="posts__ul__li__a | target" href="blog/{ar}"
          >{ar?.replaceAll("-", " ")}</a
        >
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  $logoSize: 25rem;

  .header {
    padding-top: 15rem;
    overflow: hidden;

    &__logo-content {
      // box-sizing: initial;
      position: static;

      & :global(svg) {
        display: block;
        margin: auto;
        fill: var(--primary-color);
        height: $logoSize;
        width: $logoSize;
        position: absolute;
        bottom: -5rem;
        right: -1rem;

        @media screen and (max-width: 768px) {
          $logoSize: 30rem;
          height: $logoSize;
          width: $logoSize;
          fill: #ffffff07;
        }
      }
    }
  }

  .posts__ul__li__a {
    font-weight: 500;
    transition: linear 0.1s;
    &:hover {
      background-color: var(--primary-color);
      color: var(--bg-color-1);
    }
  }
</style>
