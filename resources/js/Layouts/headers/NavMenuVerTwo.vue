
<script setup>
import { reactive} from "vue";
const menu_data = reactive([
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
    active: ""
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "Company",
    link: "/about",
    active: "",
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "Services",
    link: "/service",
    active: "",
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Leaders",
    link: "/team",
    active: "",
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
]);
</script>

<template>
  <ul>
    <li v-for="(item, i) in menu_data" :key="i" :class="item?.has_dropdown ? 'has-dropdown' : ''">
      <router-link :to="item.link"> <span></span>{{ item.title }}</router-link>
      <ul v-if="item.has_dropdown" class="submenu">
        <li v-for="(sub_menu, index) in item?.sub_menus" :key="index">
          <router-link :to="sub_menu.link"><span>{{ sub_menu.title }}</span></router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>
