<template>
  <main class="wrapper min-w-[35rem]">
    <section class="breweries" id="breweries">
      <ul>
        <li>
          <figure>
            <!-- Photo by Quentin Dr on Unsplash -->
            <img
              src="https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg"
              alt="Several hands holding beer glasses"
            />
            <figcaption><h3>Billions upon billions</h3></figcaption>
          </figure>
          <p>
            Made in the interiors of collapsing stars star stuff harvesting star
            light venture billions upon billions Drake Equation brain is the
            seed of intelligence?
          </p>
          <a href="#">Visit Website</a>
        </li>
        <li>
          <figure>
            <!-- Photo by Drew Farwell on Unsplash -->
            <img
              src="https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg"
              alt="Several hands holding beer glasses"
            />
            <figcaption><h3>Drake Equation</h3></figcaption>
          </figure>
          <p>
            Another world citizens of distant epochs from which we spring
            descended from astronomers Orion's sword shores of the cosmic ocean.
          </p>
          <a href="#">Visit Website</a>
        </li>
        <li>
          <figure>
            <!-- Photo by Rawpixel on Unsplash -->
            <img
              src="https://www.spletnik.ru/img/__post/5d/5dc18cc037668240ad73b448eb464516_297.jpg"
              alt="Several hands holding beer glasses"
            />
            <figcaption><h3>Vast cosmic arena</h3></figcaption>
          </figure>
          <p>
            Galaxies the ash of stellar alchemy prime number science
            inconspicuous motes of rock and gas brain is the seed of
            intelligence.
          </p>
          <a href="#">Visit Website</a>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped lang="scss">
a {
  background-color: goldenrod;
  text-decoration: none;
  color: white;
  border-radius: 0.25rem;
  text-align: center;
  display: inline-block;
  transition: all 0.3s;
}

a:hover {
  opacity: 0.6;
}

.breweries {
  padding: 2rem;
}

.breweries > ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
}

.breweries > ul > li {
  border: 1px solid #e2e2e2;
  border-radius: 0.5rem;
}

.breweries > ul > li > figure {
  max-height: 220px;
  overflow: hidden;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  position: relative;
}

.breweries > ul > li > figure > img {
  width: 100%;
}

.breweries > ul > li > figure > figcaption {
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
}

.breweries > ul > li > figure > figcaption > h3 {
  color: white;
  padding: 0.75rem;
  font-size: 1.25rem;
}

.breweries > ul > li > p {
  font-size: 1rem;
  line-height: 1.5;
  padding: 1rem 0.75rem;
  color: #666666;
}

.breweries > ul > li > a {
  padding: 0.5rem 1rem;
  margin: 0.5rem;
}
</style>
