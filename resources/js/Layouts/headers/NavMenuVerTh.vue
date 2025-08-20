<script setup>
import { reactive } from "vue";
const menu_data = reactive([
    {
        id: 1,
        mega_menu: false,
        has_dropdown: false,
        title: "Home",
        icon: "fa-sharp fa-regular fa-house",
        link: "/",
        active: ""

    },
    {
        id: 2,
        mega_menu: false,
        has_dropdown: false,
        title: "Company",
        icon: "fa-regular fa-building",
        link: "/about",
        active: "",
    },
    {
        id: 3,
        mega_menu: false,
        has_dropdown: false,
        title: "Services",
        icon: "fa-regular fa-toolbox",
        link: "/service",
        active: "",
    },
    {
        id: 4,
        mega_menu: false,
        has_dropdown: false,
        title: "Leaders",
        icon: "fa-regular fa-user-group",
        link: "/team",
        active: "",
    },

    {
        id: 5,
        mega_menu: false,
        has_dropdown: false,
        title: "Contact",
        icon: "fa-regular fa-clipboard-user",
        link: "/contact",
        active: "",
    },

    {
        id: 6,
        mega_menu: false,
        has_dropdown: false,
        title: "iBlog",
        icon: "fa-regular fa-clipboard-user",
        link: "/blog",
        active: "",
    },

    {
        id: 7,
        mega_menu: false,
        has_dropdown: false,
        title: "Blog",
        icon: "fa-regular fa-clipboard-user",
        link: "/blog-two",
        active: "",
    },
        {
        id: 8,
        mega_menu: false,
        has_dropdown: false,
        title: "Bulletin",
        icon: "fa-regular fa-clipboard-user",
        link: "/bulletin",
        active: "",
    },
]);
const handleItemClick = (index) => {
    console.log("Item clicked:", menu_data[index]);

}


</script>

<template>
    <div class="menu">
        <ul class="list">
            <li v-for="(item2, index) in menu_data" :key="index" class="item2">
                <router-link :to="item2.link" @click.prevent="handleItemClick(index)">
                    <div class="header-icon">
                        <span class="icon"><i :class="item2.icon"></i></span>
                        <span class="title">{{ item2.title }}</span>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<style>
.menu ul {
    display: flex;
    width: 45rem;
    /* width between logo and hamburger */
}

.item2 {
    position: relative;
    width: 7rem;
    height: 7rem;
    /* adjust height all item icon */
    z-index: 1;
    list-style-type: none;
}


.header-icon {
    display: flex;
    flex-direction: row;
    margin: 15px 15px 0 0px;
}

.menu ul li:hover .title {
    opacity: 1;
    /* transform: translateY(- 0.0rem); */
}

.title:active {
    color: #00a3cc;
    transition: 0s;
}
</style>
