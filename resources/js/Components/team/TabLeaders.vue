<template>
    <div class="py-5 team4">
        <div class="container">
            <!-- Main Tabs -->
            <div class="material-tabs">
                <div class="tabs-container">
                    <button v-for="(tab, idx) in mainTabs" :key="tab.title" class="tab-button"
                        :class="{ active: selectedMainTab === idx }"
                        @click="() => { selectedMainTab = idx; selectedSubTab = 0; }"
                        ref="el => mainTabRefs.value[idx] = el">
                        {{ tab.title }}
                    </button>
                    <div class="tab-indicator" :style="mainIndicatorStyle"></div>
                </div>
            </div>

            <!-- Pernec Corporation: Only Board of Directors -->
            <template v-if="mainTabs[selectedMainTab].onlyBoard">
                <div class="row justify-content-center mb-4 wow animated fadeInUp" data-wow-delay="0.3s">
                    <div class="col-md-7 text-center">
                        <h3 class="mb-3">Board of Directors</h3>
                        <h6 class="subtitle">{{ mainTabs[selectedMainTab].boardSubtitle }}</h6>
                    </div>
                </div>
                <component :is="mainTabs[selectedMainTab].boardComponent"
                    :members="mainTabs[selectedMainTab].boardMembers" />
            </template>

            <!-- Other Main Tabs: Show sub-tabs -->
            <template v-else>
                <div class="material-tabs sub-tabs">
                    <div class="tabs-container">
                        <button v-for="(sub, subIdx) in mainTabs[selectedMainTab].subTabs" :key="sub.title"
                            class="tab-button" :class="{ active: selectedSubTab === subIdx }"
                            @click="selectedSubTab = subIdx" ref="el => subTabRefs.value[subIdx] = el">
                            {{ sub.title }}
                        </button>
                        <div class="tab-indicator" :style="subIndicatorStyle"></div>
                    </div>
                </div>
                <div class="row justify-content-center mb-4 wow animated fadeInUp" data-wow-delay="0.4s">
                    <div class="col-md-7 text-center">
                        <h3 class="mb-3">{{ mainTabs[selectedMainTab].subTabs[selectedSubTab].title }}</h3>
                        <h6 class="subtitle">{{ mainTabs[selectedMainTab].subTabs[selectedSubTab].subtitle }}</h6>
                    </div>
                </div>
                <component :is="mainTabs[selectedMainTab].subTabs[selectedSubTab].component"
                    :members="mainTabs[selectedMainTab].subTabs[selectedSubTab].members" />
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue';
import BoardOfDirectors from './BoardOfDirectors.vue';
import BoardOfDirectorsPins from './BoardOfDirectorsPins.vue';
import SeniorManagementPins from './SeniorManagementPins.vue';
import BoardOfDirectorsPat from './BoardOfDirectorsPat.vue';
import BoardOfDirectorsCyseca from './BoardOfDirectorsCyseca.vue';
import SeniorManagementCyseca from './SeniorManagementCyseca.vue';

// Images
import DatukzainunImg from '@/assets/img/breadcrumb/team/Datukzainun2.png';
import HizamshahImg from '@/assets/img/breadcrumb/team/Hizamshah2.png';
import EijiobanaImg from '@/assets/img/breadcrumb/team/Eiji2.png';
import KhalilImg from '@/assets/img/breadcrumb/team/Khalil2.png';
import HirokiImg from '@/assets/img/breadcrumb/team/Hiroki2.png';
import HideharuImg from '@/assets/img/breadcrumb/team/Hideharu2.png';
import AriffImg from '@/assets/img/breadcrumb/team/Ariff2.png';
import AzmiImg from '@/assets/img/breadcrumb/team/Azmi2.png';
import WanImg from '@/assets/img/breadcrumb/team/Wan2.png';
import AbdulLatifImg from '@/assets/img/breadcrumb/team/AbdulLatif2.png';
import AdnanImg from '@/assets/img/breadcrumb/team/Adnan2.png';
import NoralidaImg from '@/assets/img/breadcrumb/team/Noralida2.png';
import Jeneral2Img from '@/assets/img/breadcrumb/team/Jeneral2.png';
import AzizulImg from '@/assets/img/breadcrumb/team/Azizul2.png';
import ShahrinImg from '@/assets/img/breadcrumb/team/Shahrin2.png';
import AinulImg from '@/assets/img/breadcrumb/team/Ainul2.png';
import AzharImg from '@/assets/img/breadcrumb/team/Azhar2.png';
import NorazmiImg from '@/assets/img/breadcrumb/team/Norazmi2.png';
import IsmailImg from '@/assets/img/breadcrumb/team/Ismail2.png';
import AzlanImg from '@/assets/img/breadcrumb/team/Azlan2.png';
import NurulImg from '@/assets/img/breadcrumb/team/Nurul2.png';
import JunaidiImg from '@/assets/img/breadcrumb/team/Junaidi2.png';
import AhmadImg from '@/assets/img/breadcrumb/team/Ahmad2.png';





// Pernec Corporation BOD
const boardMembers = [
    {
        name: "Datuk Zainun Aishah Ahmad",
        position: "Board Member",
        description: "",
        img: DatukzainunImg,
        link: "/bod1",
        socials: [
            { icon: "fab fa-linkedin-in", link: "#" }
        ]
    },
    {
        name: "Hizam Shah Azaime",
        position: "Board Member",
        description: "",
        img: HizamshahImg,
        link: "/bod2",
        socials: [
            { icon: "fab fa-linkedin-in", link: "#" }
        ]
    },
    {
        name: "Eiji Obana",
        position: "Board Member",
        description: "",
        img: EijiobanaImg,
        link: "/bod3",
        socials: [
            { icon: "fab fa-linkedin-in", link: "#" }
        ]
    }
];

// Pernec Integrated Network Systems BOD
const boardMembersPins = [
    {
        name: "Datuk Zainun Aishah Ahmad",
        position: "Board Member",
        description: "",
        img: DatukzainunImg,
        link: "/bod1",
        socials: [
            { icon: "fab fa-linkedin-in", link: "#" }
        ]
    },
    {
        name: "Hizam Shah Azaime",
        position: "Board Member",
        description: "",
        img: HizamshahImg,
        link: "/bod2",
        socials: [
            { icon: "fab fa-linkedin-in", link: "#" }
        ]
    },
    {
        name: "Khalil Abd Jabar",
        position: "Board Member",
        description: "",
        img: KhalilImg,
        link: "/bod5",
        socials: [
            { icon: "fab fa-linkedin-in", link: "#" }
        ]
    },
    {
        name: "Mr. Yoshifuji Hiroki",
        position: "Board Member",
        description: "",
        img: HirokiImg,
        link: "/bod14",
        socials: [
            { icon: "fab fa-linkedin-in", link: "#" }
        ]
    },
    {
        name: "Hideharu Suzuki",
        position: "Board Member",
        description: "",
        img: HideharuImg,
        link: "/bod9",
        socials: [
            { icon: "fab fa-linkedin-in", link: "#" }
        ]
    }
];

// Pernec Integrated Network Systems Senior Management
const seniorManagementPins = [
    {
        name: "Ariff Fadzli Fadzil",
        position: "Chief Financial Officer",
        description: "",
        img: AriffImg,
        link: "/ms2",
        socials: [
            { icon: "fab fa-linkedin-in", link: "#" }
        ]
    },
    {
        name: "Azmi Abdul Wahid",
        position: "Chief Marketing Officer",
        description: "",
        img: AzmiImg,
        link: "/ms3",
        socials: [
            { icon: "fab fa-linkedin-in", link: "#" }
        ]
    },
    {
        name: "Ts. Wan Kamaruddin Wan Mustaffa",
        position: "Chief Business Operations Officer",
        description: "",
        img: WanImg,
        link: "/ms4",
        socials: [
            { icon: "fab fa-linkedin-in", link: "#" }
        ]
    },
    {
        name: "Abdul Latif Allah Pitchy",
        position: "Chief Integration Officer",
        description: "",
        img: AbdulLatifImg,
        link: "/ms5",
        socials: [
            { icon: "fab fa-linkedin-in", link: "#" }
        ]
    },
    {
        name: "Adnan Zamri Abdullah",
        position: "Head, Human Resources & Administration",
        description: "",
        img: AdnanImg,
        link: "/ms6",
        socials: [
            { icon: "fab fa-linkedin-in", link: "#" }
        ]
    },
    {
        name: "Noralida Shamsudin",
        position: "Company Secretary",
        description: "",
        img: NoralidaImg,
        link: "/ms7",
        socials: [
            { icon: "fab fa-linkedin-in", link: "#" }
        ]
    }
];

// Pernec Advanced Technologies BOD
const boardMembersPat = [
    {
        name: "Lt. General Dato Sri Wan Normazlan bin Che Jaafar RMAF (Retired)",
        position: "Board Member",
        description: "",
        img: Jeneral2Img,
        link: "/bod7",
        socials: [
            { icon: "fab fa-linkedin-in", link: "#" }
        ]
    },
    {
        name: "Azizul Abdul Aziz",
        position: "Chief Executive Officer",
        description: "",
        img: AzizulImg,
        link: "/bod8",
        socials: [
            { icon: "fab fa-linkedin-in", link: "#" }
        ]
    }
];

// Cyseca Solutions BOD
const boardMembersCyseca = [
    {
        name: "Shahrin bin Ali",
        position: "Chairman / Board of Director",
        description: "",
        img: ShahrinImg,
        link: "/bod11",
        socials: [
            { icon: "fab fa-linkedin-in", link: "#" }
        ]
    },
    {
        name: "Ainul Azam bin Ahmad Khamal",
        position: "Board of Director",
        description: "",
        img: AinulImg,
        link: "/bod12",
        socials: [
            { icon: "fab fa-linkedin-in", link: "#" }
        ]
    },
    {
        name: "Azhar Abu  Bakar",
        position: "Board of Director",
        description: "",
        img: AzharImg,
        link: "/bod13",
        socials: [
            { icon: "fab fa-linkedin-in", link: "#" }
        ]
    }
];

// Cyseca Solutions Senior Management
const seniorManagementCyseca = [
    {
        name: "Norazmi bin Mohd Yusoff",
        position: "Chief Executive Officer",
        description: "",
        img: NorazmiImg,
        socials: [
            { icon: "fab fa-linkedin-in", link: "#" }
        ]
    },
    {
        name: "Muhammad Ismail Bin Ibrahim",
        position: "Head, Business Support & Operation",
        description: "",
        img: IsmailImg,
        socials: [
            { icon: "fab fa-linkedin-in", link: "#" }
        ]
    },
    {
        name: "Azlan Mukhtar",
        position: "Head Software Development",
        description: "",
        img: AzlanImg,
        socials: [
            { icon: "fab fa-linkedin-in", link: "#" }
        ]
    },
    {
        name: "Nurul Azuma Makmor",
        position: "Head Business Development",
        description: "",
        img: NurulImg,
        socials: [
            { icon: "fab fa-linkedin-in", link: "#" }
        ]
    },
    {
        name: "Junaidi Zainuddin",
        position: "Head Business Support & Operation",
        description: "",
        img: JunaidiImg,
        socials: [
            { icon: "fab fa-linkedin-in", link: "#" }
        ]
    },
    {
        name: "Ahmad Nawawi Abdul Rahman",
        position: "Head Managed Security Services",
        description: "",
        img: AhmadImg,
        socials: [
            { icon: "fab fa-linkedin-in", link: "#" }
        ]
    }
];


const mainTabs = [
    {
        title: 'Pernec Corporation',
        subTabs: [
            { title: 'Board of Directors', component: BoardOfDirectors, members: boardMembers, subtitle: 'Team success is driven by collaboration, trust, and shared goals.' },
        ]
    },
    {
        title: 'Pernec Integrated Network Systems',
        subTabs: [
            { title: 'Board of Directors', component: BoardOfDirectorsPins, members: boardMembersPins, subtitle: 'Team success is driven by collaboration, trust, and shared goals.' },
            { title: 'Senior Management', component: SeniorManagementPins, members: seniorManagementPins, subtitle: 'Effective senior management is the cornerstone of a company\'s vision and growth.' }
        ]
    },
    {
        title: 'Pernec Advanced Technologies',
        subTabs: [
            { title: 'Board of Directors', component: BoardOfDirectorsPat, members: boardMembersPat, subtitle: 'Team success is driven by collaboration, trust, and shared goals.' },
        ]
    },
    {
        title: 'Cyseca Solutions',
        subTabs: [
            { title: 'Board of Directors', component: BoardOfDirectorsCyseca, members: boardMembersCyseca, subtitle: 'Team success is driven by collaboration, trust, and shared goals.' },
            { title: 'Senior Management', component: SeniorManagementCyseca, members: seniorManagementCyseca, subtitle: 'Effective senior management is the cornerstone of a company\'s vision and growth.' }
        ]
    }
];

const selectedMainTab = ref(0);
const selectedSubTab = ref(0);

const mainTabRefs = ref([]);
const mainIndicatorStyle = ref({ left: '0px', width: '0px' });

const subTabRefs = ref([]);
const subIndicatorStyle = ref({ left: '0px', width: '0px' });

const updateMainIndicator = () => {
    nextTick(() => {
        const el = mainTabRefs.value[selectedMainTab.value];
        if (el) {
            mainIndicatorStyle.value = {
                left: el.offsetLeft + 'px',
                width: el.offsetWidth + 'px',
            };
            el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    });
};

const updateSubIndicator = () => {
    nextTick(() => {
        const el = subTabRefs.value[selectedSubTab.value];
        if (el) {
            subIndicatorStyle.value = {
                left: el.offsetLeft + 'px',
                width: el.offsetWidth + 'px',
            };
            el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    });
};

onMounted(() => {
    updateMainIndicator();
    updateSubIndicator();
});

watch(selectedMainTab, () => {
    updateMainIndicator();
    nextTick(() => {
        updateSubIndicator();
    });
});

watch(selectedSubTab, () => {
    updateSubIndicator();
});
</script>

<style>
.team4 {
    font-family: "Poppins", Arial, sans-serif;
    color: #222e3a;
    font-weight: 400;
    background: #f8fcff;
}

.team4 h1,
.team4 h2,
.team4 h3,
.team4 h4,
.team4 h5,
.team4 h6 {
    color: #0059A8;
    font-family: "Poppins", Arial, sans-serif;
    font-weight: 600;
}

.team4 h3 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.team4 .font-weight-medium {
    font-weight: 500;
}

.team4 h5 {
    line-height: 22px;
    font-size: 1.1rem;
    color: #0059A8;
    font-weight: 600;
}

.team4 .subtitle {
    color: #00ADEF;
    line-height: 24px;
    font-size: 1rem;
    font-weight: 400;
}

.team4 p {
    color: #222e3a;
    font-size: 0.98rem;
}

.team4 ul li a {
    color: #0059A8;
    padding-right: 15px;
    transition: 0.1s ease-in;
    font-size: 1.2rem;
}

.team4 ul li a:hover {
    transform: translate3d(0px, -5px, 0px);
    color: #00ADEF;
}

.team4 .img-fluid {
    border: 3px solid #ffffff;
    box-shadow: 0 4px 16px rgba(0, 89, 168, 0.08);
    background: #fff;
}

.team4 .mb-3 {
    margin-bottom: 1rem !important;
}

.team4 .mb-8 {
    margin-bottom: 5rem !important;
}

.material-tabs {
    margin-bottom: 2rem;
}

.material-tabs .tabs-container {
    position: relative;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* IE 10+ */
    scroll-padding-left: 16px;
    scroll-padding-right: 16px;
    padding-right: 16px;
    padding-left: 16px;

    touch-action: pan-x;
    cursor: grab;
    pointer-events: auto;
    min-height: 48px;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.material-tabs .tabs-container::-webkit-scrollbar {
    display: none;
}

.material-tabs .tab-button {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 0 20px;
    height: 44px;
    background: none;
    border: none;
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    transition: color 0.2s ease;
    min-width: 120px;
    flex-shrink: 0;
    z-index: 1;
}

.material-tabs .tab-button:hover {
    color: #0059A8;
}

.material-tabs .tab-button.active {
    color: #0059A8;
}

.material-tabs .tab-indicator {
    position: absolute;
    bottom: 0;
    height: 2px;
    background-color: #0059A8;
    transition: left 0.3s cubic-bezier(.4, 0, .2, 1), width 0.3s cubic-bezier(.4, 0, .2, 1);
    z-index: 1;
}

.sub-tabs .tab-button {
    font-size: 0.8125rem;
    min-width: 120px;
}

@media (max-width: 600px) {
    .material-tabs .tabs-container {
        justify-content: flex-start;
        padding-left: 16px;
        padding-right: 16px;
        scroll-padding-left: 16px;
        scroll-padding-right: 16px;
        min-height: 44px;
    }

    .material-tabs .tab-button {
        font-size: 0.82rem;
        padding: 0 12px;
        min-width: 100px;
        height: 40px;
    }

    .sub-tabs .tab-button {
        font-size: 0.78rem;
        min-width: 90px;
        padding: 0 8px;
        height: 36px;
    }
}

.material-tabs .tab-arrow {
    background: #fff;
    border: 1px solid #e0e0e0;
    color: #0059A8;
    font-size: 1.2rem;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 4px;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    flex-shrink: 0;
    z-index: 2;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.material-tabs .tab-arrow.left {
    left: 0;
}

.material-tabs .tab-arrow.right {
    right: 0;
}

.material-tabs .tab-arrow:disabled {
    opacity: 0.4;
    cursor: not-allowed;
}

.material-tabs .tab-button {
    z-index: 1;
}
</style>
