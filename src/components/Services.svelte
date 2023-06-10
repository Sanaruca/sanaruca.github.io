<script>
  import MobileSVG from "../components/svg/Mobile.svg.svelte";
  import DesignSVG from "../components/svg/Design.svg.svelte";
  import FullStackSVG from "../components/svg/Full-stack.svg.svelte";
</script>

<section class="services | black-target" id="services">
  <span>services</span>
  <h2>Create Solutions</h2>
  <div class="services__content | grid-content">
    <div class="services__content__target | grid-item target">
      <DesignSVG />
      <h3>Interface design</h3>
      <p>The design of your website or app should attract attention.</p>
    </div>
    <div class="services__content__target | grid-item target">
      <MobileSVG />
      <h3>Mobile apps</h3>
      <p>Mobile apps now account for over 57% of all digital media usage.</p>
    </div>
    <div class="services__content__target | grid-item target">
      <FullStackSVG />
      <h3>Font-end / Back-end</h3>
      <p>Both for what the user sees, and the infrastructure behind.</p>
    </div>
  </div>
</section>

<style lang="scss">
  .services {
    &__content {
      &__target {
        transition: all .20s;

        fill: var(--text-color);

        &:hover{
          background: var(--primary-color);
          color: var(--bg-color-1);
          fill: var(--bg-color-1);
          box-shadow: 0 0rem 6rem -2rem var(--primary-color);
        }

        :global(svg) {
          // fill: inherit;
          width: 6rem;
          height: 6rem;
        }

        &:first-of-type {
          :global(svg) {
            transform: rotate(315deg);
          }
        }
      }
    }
  }
</style>
