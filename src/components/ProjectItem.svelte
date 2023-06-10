<script lang="ts">
  import Tag from "./Tag.svelte";

  export let name: string, imageName: string, imageUrl: string;
  export let tags: string[];
  
</script>

<div class="project">
  <div class="project__target | target">
    <div class="project__target__img-content">
      <img loading="lazy" src={imageUrl} alt={imageName} />
    </div>
  </div>
  <a href="/{name}">
    <h3>{name}</h3>
  </a>
  <ul class="tags-content flex-content">
    {#each tags as tag}
      <li>
        <Tag>{tag}</Tag>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
    .project {
      // background-color: red;

      &__target {
        padding: 1rem;
        &__img-content {
          // background-color: #00fca04e;

          img {
            width: 100%;
            height: 20rem;
            object-fit: cover;
          }
        }
      }

      .tags-content {
        margin-top: 1rem;
        justify-content: flex-start;
        flex-wrap: wrap;
      }
    }
</style>
