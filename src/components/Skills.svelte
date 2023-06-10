<script lang="ts">
  import timeline from "../constants/xp-timeline";
  import TimelineItem from "./TimelineItem.svelte";
  import XpKnowledge from "./XpKnowledge.svelte";
</script>

<!--include ../utilities/mixins.pug-->
<section class="flex-content" id="info">
  <section class="xp-timeline" id="path">
    <span>Path</span>
    <h2>Experience</h2>
    <div class="xp-timeline__content flex-content">
      {#each timeline as data}
        <TimelineItem {data} />
      {/each}
      <!--+timeline-item('Media Designer', 2019, 2021, 'Design of advertising flyers, promotional images, presentations and audiovisual editing.')-->
      <!--+timeline-item('Layout Designer', 2022, 2022, 'Layout creation of figma designs converted to HTML and CSS.')-->
    </div>
  </section>
  <XpKnowledge />
</section>

<style lang="scss">
  .xp-timeline {
    min-width: 30rem;
    max-width: 40rem;

    &__content {
      min-height: 19rem;
      min-width: 19rem;
      flex-direction: column;
      padding-left: 3rem;

      &::before {
        content: "";
        position: absolute;
        height: 100%;
        background-color: #616161;
        width: 2px;
        top: 0;
        left: 0;
      }
    }
  }
</style>
