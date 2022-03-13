<template>
  <div id="page">
    <div>
      <header>
        <img src="./assets/images/logo.png" alt="MDN logo" />
        <ul class="topnav">
          <li><a class="active" href="#home">Accueil</a></li>
          <li><a href="#news">Qui sommes nous?</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>
      <section>
        <div>
          <article class="big">
            <h1>J'agis à mon échelle</h1>
            <p>
              Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto
              nihil explicabo perferendis quos provident delectus ducimus
              necessitatibus reiciendis optio tempora unde earum doloremque
              commodi laudantium ad nulla vel odio?
            </p>
            <br />
            <a class="btn" href="#Section1">Lorem Ipsum ></a>
          </article>
        </div>
        <article class="article">
          <h1 id="Section1">Lorem</h1>
          <div class="flex">
            <p style="clear: right">
              Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto
              nihil explicabo perferendis quos provident delectus ducimus
              necessitatibus reiciendis optio tempora unde earum doloremque
              commodi laudantium ad nulla vel odio?
            </p>
            <img src="https://via.placeholder.com/300.png" />
          </div>
        </article>
        <article class="article">
          <h1>Lorem ipsum</h1>
          <div class="flex">
            <img src="https://via.placeholder.com/300.png" />
            <p style="clear: right">
              Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto
              nihil explicabo perferendis quos provident delectus ducimus
              necessitatibus reiciendis optio tempora unde earum doloremque
              commodi laudantium ad nulla vel odio?
            </p>
          </div>
        </article>
      </section>
    </div>
    <footer>
      <div id="copyright">© 2022 J'agis à mon échelle</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="scss">
@import "scss/style";
</style>