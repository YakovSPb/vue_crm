<template>
  <ul class="sidenav app-sidenav" :class="{open: isOpen}">
    <router-link
      v-for="link in links"
      :key="link.url"
      :to="link.url"
      :exact="link.exact"
      v-slot="{ isActive }"
    >
      <li :class="[isActive && 'active']">
        <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ['isOpen'],
  data: () => ({
    links: [
      { title: "Счет", url: "/", exact: true},
      { title: "История", url: "/history" },
      { title: "Планирование", url: "/planning" },
      { title: "Новая запись", url: "/record" },
      { title: "Категории", url: "/categories" },
    ],
  }),
};
</script>
