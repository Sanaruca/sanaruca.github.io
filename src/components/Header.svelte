<script lang="ts">
  import Logo from "./svg/Logo.svg.svelte";
  import Tag from "../components/Tag.svelte";  
</script>

<header class="header | black-target flex-content">
  <div class="header__logo-content">
    <Logo />
  </div>
  <div class="banner | grid-content">
    <div class="grid-item title-content">
      <span class="wellcome-target">Wellcome </span>
      <h1>Hi, I’m Samir Ruza full-stack web developer</h1>
      <p>
        Every great developer you know got there by solving problems they were
        unqualified to solve until they actually did it.
      </p>
    </div>
    <div class="grid-item logo-content flex-content">
      <Logo />
    </div>
  </div>
  <div class="additional-content flex-content">
    <div>
      <Tag>#helloworld</Tag>
    </div>
    <div class="btn-content flex-content">
      <a class="btn" href="#portfolio">See portfolio</a><a
        class="btn primary"
        href="https://www.linkedin.com/in/sanaruca" target="_blank">Contact me</a
      >
    </div>
  </div>
</header>

<style lang="scss">
  .header {
    background-repeat: no-repeat;
    background-size: 55rem;
    background-position: calc(100% + 12rem) calc(100% + 5rem);
    overflow: hidden;

    padding-top: 5rem;
    min-height: calc(100vh - 4rem);
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
      min-height: min-content;
    }

    &__logo-content{
      :global(svg) {
      position: absolute;
      right: -14rem;
      top: 10rem;
      height: 60rem;
      width: 60rem;
      fill: rgb(255 255 255 / 2%);
    } 
    }

    span.wellcome-target {
      background-color: var(--primary-color);
      padding: 0.3em 2em;
      text-align: center;
      color: var(--bg-color-1);
      font-size: 1em;
      font-weight: 900;
    }

    .additional-content {
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 5rem;

      .btn-content {
        width: 60%;
        min-width: min-content;
        justify-content: center;
        gap: 4rem;
      }
    }
  }

  .banner {
    margin: 10rem 0 2rem 0;
    grid-template-columns: 1fr 60%;
    transition: all 1s;

    @media screen and (max-width: 768px) {
      display: block;
    }

    @media screen and (max-width: 960px) {
      grid-template-columns: 1fr 1fr;
    }

    .logo-content {
      // background-color: red;
      :global(svg) {
        // filter: invert(1);
        margin: auto;
        height: 18.5rem;
        width: 18.5rem;
        fill: var(--primary-color);
        // height: 17rem;
      }

      @media screen and (max-width: 768px) {
        display: none;
      }

      &::before {
        content: "";
        position: absolute;
        height: 17rem;
        padding: 5rem;
        top: 50%;
        left: 50%;
        width: 17rem;
        border: 2px solid var(--primary-color);
        border-style: dashed;
        border-radius: 50%;
        transform: translateX(-50%) translateY(-50%);
        animation: rotation 20s infinite linear;

        @keyframes rotation {
          0%,
          40% {
            transform: translateX(-50%) translateY(-50%) rotate(0deg);
          }

          0%,
          100% {
            transform: translateX(-50%) translateY(-50%) rotate(360deg);
          }
        }
      }
    }
  }
</style>
