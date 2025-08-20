<script>
import CysecaSol from './cysecaSol.vue';
import PernecAdv from './pernecAdv.vue';
import PernecCor from './pernecCor.vue';
import PernecIns from './pernecIns.vue';

export default {
  components: {
    PernecCor,
    PernecAdv,
    PernecIns,
    CysecaSol,
  },
  data() {
    return {
      currentComponent: 'pernecCor',
      activeTabIndex: 0,
      tabNav: [
        {
          id: 'PernecCor',
          title: 'Pernec Corporation',
          link: 'PernecCor',
          iconClass: 'fas fa-building',
        },
        {
          id: 'pins',
          title: 'Pernec Integrations Network Systems',
          link: 'PernecIns',
          iconClass: 'fas fa-project-diagram',
        },
        {
          id: 'PernecAt',
          title: 'Pernec Advanced Technologies',
          link: 'PernecAdv',
          iconClass: 'fas fa-microchip',
        },
        {
          id: 'CysecaSol',
          title: 'Cyseca Solution',
          link: 'cysecaSol',
          iconClass: 'fas fa-shield-alt',
        },
      ],
    };
  },
  methods: {
    setComponent(link, index) {
      this.currentComponent = link;
      this.activeTabIndex = index;
    },
  },
};
</script>

<template>
  <div class="tabTeam">
    <div class="header d-flex mt-6">
      <ul class="d-flex align-items-center justify-content-center">
        <li v-for="(team, index) in tabNav" :key="team.id" :class="{ active: activeTabIndex === index }">
          <a :id="team.id + '-tab'" @click="setComponent(team.link, index)" role="tab"
            :aria-selected="activeTabIndex === index">
            <i :class="team.iconClass + ' icon-space'"></i>
            {{ team.title }}
          </a>
        </li>
      </ul>
    </div>

    <!-- Dynamic Component Rendering -->
    <component :is="currentComponent" />
  </div>
</template>

<style>
.header {
  display: flex;
  justify-content: center;
  margin-top: 6rem;
}

.header ul {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.header li {
  margin: 0 1rem;
  color: #030b1b;
}

.header a {
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  background: #f9fbfe;
}

.header .active a {
  font-weight: bold;
  border-bottom: 2px solid #000;
  color: #02aeef;
}

.icon-space {
  margin-right: 8px;
  vertical-align: middle;
}

@media (max-width: 768px) {
  .header {
    margin-top: 3rem;
  }

  .header ul {
    flex-direction: column;
  }

  .header li {
    margin: 0.5rem 0;
  }

  .header a {
    padding: 0.5rem;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .header {
    margin-top: 2rem;
  }

  .header a {
    padding: 0.25rem;
  }
}
</style>
