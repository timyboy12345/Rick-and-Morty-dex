<template>
  <div class="mb-8">
    <div id="nav" class="w-full bg-green-500 text-white py-4 px-8 mb-8">
      <NuxtLink
        class="text-white px-2 opacity-80 hover:opacity-100 transition-opacity duration-100"
        to="/"
      >
        Home
      </NuxtLink>
      <NuxtLink
        class="text-white px-2 opacity-80 hover:opacity-100 transition-opacity duration-100"
        to="/characters"
      >
        Characters
      </NuxtLink>
    </div>

    <div class="lg:max-w-6xl lg:mx-auto">
      <Nuxt />
    </div>
  </div>
</template>

<style>
  html {
    font-family: 'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }
</style>
