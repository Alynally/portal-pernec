import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/Pages/HomeTwo.vue';
import about from '@/Pages/AboutCompany.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
      },

      {
        path: '/contact',
        component: () => import('@/Pages/Contact.vue' /* webpackChunkName: "contact" */)
      },

      {
        path: '/blog',
        component: () => import('@/Pages/Blog.vue' /* webpackChunkName: "blog" */)
      },

      {
        path: '/team',
        component: () => import('@/Pages/Team.vue' /* webpackChunkName: "team" */)
      },

      {
        path: '/bod1',
        component: () => import('@/Pages/Teams-details/bod1.vue' /* webpackChunkName: "bod1" */)
      },

      {
        path: '/bod2',
        component: () => import('@/Pages/Teams-details/bod2.vue' /* webpackChunkName: "bod2" */)
      },

      {
        path: '/bod3',
        component: () => import('@/Pages/Teams-details/bod3.vue' /* webpackChunkName: "bod3" */)
      },

      {
        path: '/bod4',
        component: () => import('@/Pages/Teams-details/bod4.vue' /* webpackChunkName: "bod4" */)
      },

      {
        path: '/bod5',
        component: () => import('@/Pages/Teams-details/bod5.vue' /* webpackChunkName: "bod5" */)
      },

      {
        path: '/bod6',
        component: () => import('@/Pages/Teams-details/bod6.vue' /* webpackChunkName: "bod6" */)
      },

      {
        path: '/bod7',
        component: () => import('@/Pages/Teams-details/bod7.vue' /* webpackChunkName: "bod7" */)
      },

      {
        path: '/bod8',
        component: () => import('@/Pages/Teams-details/bod8.vue' /* webpackChunkName: "bod8" */)
      },

      {
        path: '/bod9',
        component: () => import('@/Pages/Teams-details/bod9.vue' /* webpackChunkName: "bod9" */)
      },

      {
        path: '/bod10',
        component: () => import('@/Pages/Teams-details/bod10.vue' /* webpackChunkName: "bod10" */)
      },

      {
        path: '/bod11',
        component: () => import('@/Pages/Teams-details/bod11.vue' /* webpackChunkName: "bod11" */)
      },

      {
        path: '/bod12',
        component: () => import('@/Pages/Teams-details/bod12.vue' /* webpackChunkName: "bod12" */)
      },

      {
        path: '/bod13',
        component: () => import('@/Pages/Teams-details/bod13.vue' /* webpackChunkName: "bod13" */)
      },

      {
        path: '/bod14',
        component: () => import('@/Pages/Teams-details/bod14.vue' /* webpackChunkName: "bod13" */)
      },

      {
        path: '/ms1',
        component: () => import('@/Pages/Teams-details/ms1.vue' /* webpackChunkName: "ms1" */)
      },

      {
        path: '/ms2',
        component: () => import('@/Pages/Teams-details/ms2.vue' /* webpackChunkName: "ms2" */)
      },

      {
        path: '/ms3',
        component: () => import('@/Pages/Teams-details/ms3.vue' /* webpackChunkName: "ms3" */)
      },

      {
        path: '/ms4',
        component: () => import('@/Pages/Teams-details/ms4.vue' /* webpackChunkName: "ms4" */)
      },

      {
        path: '/ms5',
        component: () => import('@/Pages/Teams-details/ms5.vue' /* webpackChunkName: "ms5" */)
      },

      {
        path: '/ms6',
        component: () => import('@/Pages/Teams-details/ms6.vue' /* webpackChunkName: "ms6" */)
      },

      {
        path: '/ms7',
        component: () => import('@/Pages/Teams-details/ms7.vue' /* webpackChunkName: "ms7" */)
      },

      {
        path: '/ms8',
        component: () => import('@/Pages/Teams-details/ms8.vue' /* webpackChunkName: "ms8" */)
      },

      {
        path: '/ms9',
        component: () => import('@/Pages/Teams-details/ms9.vue' /* webpackChunkName: "ms9" */)
      },

      {
        path: '/ms10',
        component: () => import('@/Pages/Teams-details/ms10.vue' /* webpackChunkName: "ms10" */)
      },

      {
        path: '/ms11',
        component: () => import('@/Pages/Teams-details/ms11.vue' /* webpackChunkName: "ms11" */)
      },

      {
        path: '/ms12',
        component: () => import('@/Pages/Teams-details/ms12.vue' /* webpackChunkName: "ms12" */)
      },

      {
        path: '/ms13',
        component: () => import('@/Pages/Teams-details/ms13.vue' /* webpackChunkName: "ms13" */)
      },

      {
        path: '/service',
        component: () => import('@/Pages/Service.vue' /* webpackChunkName: "service" */)
      },

      {
        path: '/it-essentials',
        component: () => import('@/Pages/Service-details/Itessentials.vue' /* webpackChunkName: "it-essentials" */)
      },

      {
        path: '/cyber-security',
        component: () => import('@/Pages/Service-details/CyberSecurity.vue' /* webpackChunkName: "cyber-security" */)
      },

      {
        path: '/telecommunication',
        component: () => import('@/Pages/Service-details/Telecommunication.vue' /* webpackChunkName: "telecommunication" */)
      },

      {
        path: '/nextservice',
        component: () => import('@/Pages/Service-details/nextService.vue' /* webpackChunkName: "nextservice" */)
      },

      {
        path: '/public-safety',
        component: () => import('@/Pages/Service-details/PublicSafety.vue' /* webpackChunkName: "public-safety" */)
      },

      {
        path: '/digital-transformation-enabler',
        component: () => import('@/Pages/Service-details/Digital.vue' /* webpackChunkName: "digital-transformation-enabler" */)
      },

      {
        path: '/ict-productivity-suites',
        component: () => import('@/Pages/Service-details/Productivity.vue' /* webpackChunkName: "ict-productivity-suites" */)
      },

      {
        path: '/power-and-utilities',
        component: () => import('@/Pages/Service-details/Power.vue' /* webpackChunkName: "power-and-utilities" */)
      },

      {
        path: '/defence-tactical-solutions',
        component: () => import('@/Pages/Service-details/Defence.vue' /* webpackChunkName: "defence-tactical-solutions" */)
      },

      {
        path: '/deployment-operation-services',
        component: () => import('@/Pages/Service-details/Deployment.vue' /* webpackChunkName: "deployment-operation-services" */)
      },

      {
        path: '/dev-sec-ops',
        component: () => import('@/Pages/Service-details/Devsecops.vue' /* webpackChunkName: "dev-sec-ops" */)
      },

      {
        path: '/whistleblowing',
        component: () => import('@/Pages/Governance/Whistleblowing.vue' /* webpackChunkName: "whistleblowing" */)
      },

      {
        path: '/anti-bribery-corruption',
        component: () => import('@/Pages/Governance/AntiBribery.vue' /* webpackChunkName: "anti-bribery-corruption" */)
      },

      {
        path: '/no-gift',
        component: () => import('@/Pages/Governance/Nogift.vue' /* webpackChunkName: "no-gift" */)
      },

      {
        path: '/about',
        name: 'about',
        component: about
      },

      {
        path: '/policy',
        component: () => import('@/Pages/policy.vue' /* webpackChunkName: "policy" */)
      },

      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/Pages/NotFound.vue' /* webpackChunkName: "not-found" */)
      },

      {
        path: '/version',
        component: () => import('@/Pages/Version.vue' /* webpackChunkName: "version" */)
      },
      {
        path: '/blog-two',
        component: () => import('@/Components/blogTwo/index.vue' /* webpackChunkName: "blogTwo" */)
      },
      {
        path: '/case-study/hrm-jpa',
        component: () => import('@/Pages/CaseStudy/HRMJPA.vue' /* webpackChunkName: "hrm-jpa" */)
      },
      {
        path: '/case-study/mygovuc',
        component: () => import('@/Pages/CaseStudy/MyGovUC.vue' /* webpackChunkName: "mygovuc" */)
      },
      {
        path: '/case-study/nawabs-jps',
        component: () => import('@/Pages/CaseStudy/NawabsJPS.vue' /* webpackChunkName: "nawabs-jps" */)
      },
      {
        path: '/case-study/cgso',
        component: () => import('@/Pages/CaseStudy/CGSO.vue' /* webpackChunkName: "cgso" */)
      },
      {
        path: '/bulletin',
        component: () => import('@/Components/bulletin/index.vue' /* webpackChunkName: "bulletin" */)
      },
  ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
        return savedPosition;
        } else {
        return { top: 0 };
        }
    },
});

// Global navigation guard
router.beforeEach((to, from,next) => {
  window.scrollTo(0, 0);
  next();
})


export default router;
