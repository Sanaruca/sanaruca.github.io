<script lang="ts">
  import { page } from "$app/stores";

  const body: ConstructorOfATypedSvelteComponent = $page.data.body;
  const title: any = $page.data.title;
</script>

<svelte:head>
  <title>{title} | Sanaruca</title>
</svelte:head>

<div class="md">
  <svelte:component this={body} />
</div>

<style global lang="scss">
  .md {
    :global(a) {
      color: var(--primary-color);
    }

    :global(p) {
      margin: 2rem 0;
    }

    :global(pre),
    :global(blockquote) {
      margin: 2rem 0;
      background-color: var(--bg-color-1);
      page-break-inside: avoid;
    }

    :global(pre) {
      padding: 3rem;
    }

    :global(blockquote) {
      border-left: 8px solid #ffffff20;
      padding: 1rem;
    }
  }
</style>
