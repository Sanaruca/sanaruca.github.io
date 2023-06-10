<script>
  import ProjectItem from "./ProjectItem.svelte";
  import projects from "../constants/projects";
</script>

<section id="portfolio"><span>Portfolio</span>
  <h2>Proyects</h2>
  <div class="prorfolio-content grid-content">

    {#each projects as p}
      <ProjectItem name="{p.name}" imageUrl={p.images[0]} tags={p.usedSkills.map(it=> "#"+it)} imageName=""/>
    {/each}
    <!--+projet-item('shoppingapp', 'shoppingapp.png',  'typescript', 'react-native', 'mobile')-->
    <!--+projet-item('wordfinder-cli', 'wfinder.png', 'Node.js', 'typescript')-->
    <!--+projet-item('shoppingapp-commerce-design', 'shoppingapp-commerce-design.jpg', 'adobeXD', 'design', 'ui/ux')-->
    <!--+projet-item('sanaruca-website', 'website.png', 'pug', 'jade', 'sass')-->
  </div>
</section>