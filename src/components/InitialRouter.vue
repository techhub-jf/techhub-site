<template>
  <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="400" />
  </header>
</template>

<style scoped>
  header {
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    align-self: center;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    display: block;
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    width: 100%;
    text-align: center;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  @media screen and (max-width: 1024px) {
    .logo {
      width: 70vw;
      margin: 5vh 0 0 0;
    }

    header {
      padding-right: 0;
    }
  }
</style>

