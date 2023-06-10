<script lang="ts">
  import { page } from "$app/stores";
  import type { Project } from "@types";
  import Tag from "../../components/Tag.svelte";

  const project: Project = $page.data.project;
</script>

<section class="main-project flex-content black-target">
  <section class="img-slider flex-content">
    <div class="img-content" id="slide-img1">
      <img src={project.images[0]} alt="screenshot" srcset="" />
    </div>
    <div class="img-content" id="slide-img3">
      <img src={project.images[2]} alt="screenshot" srcset="" />
    </div>
    <div class="img-content" id="slide-img2">
      <img src={project.images[1]} alt="screenshot" srcset="" />
    </div>
    <ul class="img-selection-content flex-content">
      <li><a href="#slide-img2">1</a></li>
      <li><a href="#slide-img1">2</a></li>
      <li><a href="#slide-img3">3</a></li>
    </ul>
  </section>
  <section>
    <h1>{project.name}</h1>
    <p>{project.description}</p>
    <ul class="tag-content flex-content">
      {#each project.usedSkills as us}
        <li><Tag>#{us}</Tag></li>
      {/each}
    </ul>
  </section>
</section>
<section class="repo-content flex-content">
  <a href={project.githubRepo} target="_blank"
    >go to repository <i class="fa fa-github" aria-hidden="true" /></a
  >
</section>

<style lang="scss">
  .main-project {
    // background-color: #2570a183;

    .img-slider {
      align-items: flex-end;
      justify-content: center;
      padding: 0 2rem;
      min-width: 60rem;
      min-height: 34rem;

      .img-content {
        background-color: #2570a183;
        height: calc(34rem - 20%);
        width: calc(56rem - 20%);
        z-index: 200;
        bottom: 0;
        transition: cubic-bezier(0.15, 0.96, 1, 1) 0.4s;
        position: absolute;
        right: 0;
        box-shadow: #00000070 0rem 0rem 2rem 0rem;
        border-radius: 1rem;
        overflow: hidden;

        &:first-of-type {
          height: 34rem;
          width: 56rem;
          transform: translateX(-50%);
          left: 50%;
        }

        &:not(:first-of-type) {
          background-color: rgba(0, 255, 106, 0.541);
          z-index: 100;
          bottom: 2rem;
        }

        &:last-of-type {
          left: 0;
          background-color: #ff7e146b;
        }

        &:target {
          height: 34rem;
          width: 56rem;
          // position: relative;
          z-index: 200;
          left: 50%;
          transform: translateX(-50%);
          bottom: 0;
        }

        img {
          height: 100%;
          object-fit: cover;
          width: 100%;
        }

        @media screen and (max-width: 600px) {
          // image + padding
          min-width: 100vw;
          height: 100%;

          &:first-of-type {
            width: auto;
          }
        }
      }

      .img-selection-content {
        z-index: 300;
        max-width: max-content;

        li a {
          height: 1rem;
          width: 1rem;
          background-color: #ffffff94;
          display: inline-block;
          border-radius: 50%;
          color: transparent;
          user-select: none;
        }
      }

      @media screen and (max-width: 768px) {
        min-width: 100vw;
        transform: translateX(-8rem);
      }

      @media screen and (max-width: 600px) {
        padding: 0;
        overflow: hidden;
      }

      @media screen and (max-width: 480px) {
        transform: translateX(-3rem);
      }
    }

    .tag-content {
      margin-top: 2rem;
      justify-content: flex-start;
      flex-wrap: wrap;
    }

    li {
      max-width: max-content;
      min-width: max-content;
    }
  }

  .repo-content {
    justify-content: flex-end;

    a {
      max-width: max-content;
    }
  }
</style>
