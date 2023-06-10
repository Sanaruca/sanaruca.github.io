<nav class="navigation-bar | flex-content black-target fixed">
  <input id="auxcheck" type="checkbox" name="auxcheck" /><a
    class="pagename"
    href="/">sanaruca</a
  >
  <label for="auxcheck"><i class="burger" /></label>
  <div class="nav-links-content flex-content">
    <ul class="flex-content">
      <li><a href="/#about-me">about</a></li>
      <li><a href="/#services">services</a></li>
      <li><a href="/#info">skills</a></li>
      <li><a href="/#portfolio">portfolio</a></li>
      <li><a href="/blog">blog</a></li>
    </ul>
    <ul class="flex-content">
      <li><a target="_blank" href="https://github.com/sanaruca">github</a></li>
      <li>
        <a target="_blank" href="https://www.linkedin.com/in/sanaruca"
          >linkedin</a
        >
      </li>
      <li>
        <a target="_blank" href="https://www.instagram.com/sanaruca"
          >instagram</a
        >
      </li>
      <li>
        <a
          target="_blank"
          href="https://www.upwork.com/freelancers/~01d39462acbe29942b"
          >upwork</a
        >
      </li>
    </ul>
  </div>
</nav>

<style lang="scss">
  // responsive navbar
  input#auxcheck {
    display: none;

    &:checked ~ .nav-links-content {
      // background-color: salmon;
      // display: flex;
      left: 0;
    }
  }

  .navigation-bar {
    width: 100vw;
    z-index: 500;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 1.4rem;
    flex-wrap: wrap;
    padding: 4rem 10rem 2rem 10rem;

    // responsive navbar
    label[for] {
      display: none;

      i.burger {
        width: 3rem;
        height: 0.4rem;
        background-color: var(--text-color);
        display: block;
      }

      @media screen and (max-width: 960px) {
        display: flex;
        height: 100%;
        align-items: center;

        i.burger::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          bottom: calc(100% + 0.5rem);
          left: 0;
          background-color: inherit;
        }
        i.burger::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: calc(100% + 0.5rem);
          left: 0;
          background-color: inherit;
        }
      }
    }
    // -----------------

    .nav-links-content {
      gap: 8rem;
      transition: all 0.5s;

      ul,
      ol {
        list-style: none;
        gap: 2.5em !important;
        font-family: "Consolas", "Courier New", Courier, monospace;
        &:last-of-type {
          font-size: 1.2rem;
        }

        &:first-of-type {
          @media screen and (max-width: 480px) {
            flex-direction: column;
            align-items: center;
          }
        }
      }

      @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background-color: var(--bg-color-2);
        position: absolute;
        top: 100%;
        left: 100%;
        width: 100%;
        height: calc(100vh - 5rem); // nav height
        min-height: 30rem;
      }
    }

    a {
      text-decoration: none;
      color: inherit;
      transition: linear 0.1s;
      cursor: pointer;
      &:hover {
        color: var(--primary-color);
      }
      &:not(.btn):after {
        content: "↗";
        font-size: 0.65em;
        position: absolute;
        top: 0;
        right: -0.5em;
        color: var(--primary-color);
      }
    }

    a.pagename {
      font-size: 1.6rem;
      font-family: "Futura Bk BT", Cambria, Cochin, Georgia, Times,
        "Times New Roman", serif;
    }

    @media screen and (max-width: 960px) {
      position: fixed;
      z-index: 500;
      width: 100%;
      // background-color: var(--primary-color);
      top: 0;
      left: 0;
      padding: 1rem 3rem;
      height: 5rem;
    }
  }
</style>
