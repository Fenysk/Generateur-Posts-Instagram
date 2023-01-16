<template>
  <div>
    <header class="
    w-full
    h-16
    bg-gray-700
    text-white
    flex
    items-center
    justify-around
    ">
      <h1 class="
      font-bold
      text-2xl
      ">Créateur de posts</h1>

      <nav>
        <ul class="
        flex
        items-center
        ">
          <li class="
          mr-4
          ">
            <router-link to="/">Home</router-link>
          </li>
          <li class="
          mr-4
          ">
            <router-link to="/new-products">Nouveaux Produits</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <router-view/>

  </div>
</template>