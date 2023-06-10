<section class="flex-content" id="about-me">
  <section id="about">
    <span>About me</span>
    <h2>Today's digital age has no limits</h2>
    <p>
      I am a web and multiplatform application developer, very interested in new
      software projects that simplify day to day, I enjoy creating music and
      designing in my free time.
    </p>
  </section>
  <div class="about-json-content target">
    <p>
      “The only way to do great work is to love what you do. If you haven't
      found it yet, keep looking. Don't settle.” p- Steve Jobs
    </p>
    <table>
      <tbody class="flex-content">
        <tr class="grid-content">
          <td>"fullname"</td>
          <td>:</td>
          <td>"Samir Ruza"</td>
        </tr>
        <tr class="grid-content">
          <td>"email"</td>
          <td>:</td>
          <td>"sanaruca@gmail.com"</td>
        </tr>
        <tr class="grid-content">
          <td>"ocupation"</td>
          <td>:</td>
          <td>"freelance"</td>
        </tr>
      </tbody>
    </table>
    <a class="btn primary" download href="/docs/Samir N. Ruza - CV [EN].pdf">Download CV</a>
  </div>
</section>

<style lang="scss">
  #about {
    min-width: 30rem;
    max-width: 40rem;
  }

  .about-json-content {
    min-width: 45rem;
    max-width: 33.3rem;

    p {
      margin: 0;
      font-size: 1em;
      font-family: "JetBrains Mono", "Courier New", Courier, monospace;
      font-weight: 200;
    }

    @media screen and (max-width: 768px) {
      min-width: auto;
      max-width: none;
      padding: 0 !important;
      border-top: 1px #ffffff33 solid;
      background: none;
      border-radius: 0;

      p {
        margin-top: 3rem;
      }
    }

    table {
      margin: 2em 0;
      tbody {
        flex-direction: column;
        gap: 1em;

        tr {
          grid-template-columns: 10rem 3rem 1fr;
          td:nth-child(2n) {
            text-align: center;
          }
        }
      }
    }
  }
</style>
