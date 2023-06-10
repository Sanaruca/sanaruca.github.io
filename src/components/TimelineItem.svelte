<script lang="ts">

import type {TiemelineProps} from "@types";

  export let data: TiemelineProps["data"];
</script>

<div class="timeline-item">
  <div class="timeline-item__header">
    <span class="timeline-item__header__span">{data.company}</span>
    <span class="timeline-item__header__span">{data.formYear}-{data.toYear}</span>
  </div>
  <div class="timeline-item__info">
    <h4 class="timeline-item__info__title">{data.position}</h4>
    <p class="timeline-item__info__body">{data.description}</p>
  </div>
</div>

<style lang="scss">

  .timeline-item {
    // background-color: rgba(0, 81, 255, 0.37);
    margin-bottom: 3em;

    &::before,
    &::after {
      content: "";
      position: absolute;
      border-radius: 50%;
      height: 1rem;
      width: 1rem;
      background-color: var(--primary-color);
      top: 0;
      left: -3.5rem;
    }

    &::before {
      background-color: var(--primary-color-alpha-2);
      animation: po 1.5s infinite cubic-bezier(0.22, 0.61, 0.36, 1);

      @keyframes po {
        from {
          transform: scale(1);
          opacity: 1;
        }

        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    }

    &__header {
      &__span {
        display: block;
        &:first-of-type {
          color: var(--text-color);
        }
        &:last-of-type {
          font-size: 0.9em;
        }
      }
    }

    &timeline-item__info__body {
      margin-top: 0;
    }
  }
</style>
