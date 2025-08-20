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
          link: 'PernecCor'
        },
        {
          id: 'pins',
          title: 'Pernec Integrations Network Systems',
          link: 'PernecIns',
        },
        {
          id: 'PernecAt',
          title: 'Pernec Advanced Technologies',
          link: 'PernecAdv',
        },
        {
          id: 'CysecaSol',
          title: 'Cyseca Solution',
          link: 'cysecaSol'
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
      <ul class=" d-flex align-items-center justify-content-center">
        <li v-for="(team, index) in tabNav" :key="team.id" :class="{ active: activeTabIndex === index }">
          <a :id="team.id + '-tab'" @click="setComponent(team.link, index)" role="tab" aria-controls="home"
            aria-selected="activeTabIndex === index">
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
  justify-content: center; /* Centers the header horizontally within its parent */
  margin-top: 6rem; 
}

.header ul {
  display: flex;
  align-items: center; /* Centers the items vertically within the list */
  justify-content: center; /* Centers the items horizontally within the list */
  list-style-type: none; 
  padding: 0; 
  margin: 0; 
}

.header li {
  margin: 0 1rem; 
  color: #030b1b; 
}


.header a {
  text-decoration: none; /* Removes the underline from links */
  padding: 0.5rem 1rem; /* Adds padding to the links */
  display: block; /* Makes the links block-level elements */
  

}

.header .active a {
  font-weight: bold; /* Highlights the active tab */
  border-bottom: 2px solid #000; /* Adds an underline to the active tab */
  color:#02aeef;
}



@media (max-width: 768px) {
  .header {
    margin-top: 3rem; 
  }

  .header ul {
    flex-direction: column; /* Stacks the items vertically */
  }

  .header li {
    margin: 0.5rem 0; 
  }

  .header  a {
    padding: 0.5rem;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .header {
    margin-top: 2rem; /* Adjust the margin for very small screens */
  }

  .header a {
    padding: 0.25rem; /* Adjust the padding for very small screens */
  }
}

</style>
