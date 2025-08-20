<script>
export default {
    data() {
        return {
            nav_indicator: [
                { id: "company_overview", title: "Overview" },
                { id: "service_id", title: "Services" },
                { id: "governace_id", title: "Governance" },
                { id: "testimonal_id", title: "Testimonial" },
                { id: "client_id", title: "Our Client" }
            ],
            activeSection: 'company_overview',
            showNavi: false
        };
    },
    methods: {
        scrollToSection(id) {
            this.activeSection = id;
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        },
        theObserver() {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            };

            //   ni untuk hidden kan navi di first section
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target.id === 'first_section') {
                            this.showNavi = false;
                        } else {
                            this.showNavi = true;
                            this.activeSection = entry.target.id;
                        }
                    }
                });
            }, options);

            this.nav_indicator.forEach(nav => {
                const target = document.getElementById(nav.id);
                if (target) {
                    observer.observe(target);
                }
            });

            // Observe the first section and footer
            const firstSection = document.getElementById('first_section');
            if (firstSection) {
                observer.observe(firstSection);
            }
        }
    },
    mounted() {
        this.theObserver();
        this.scrollToSection(this.activeSection);
    }
};
</script>



<template>
    <nav class="navi side" :class="{ hidden: !showNavi }">
        <div class="inner">
            <ul>
                <li v-for="nav in nav_indicator" :key="nav.id">
                    <a :href="'#' + nav.id" class="navbtn" :class="{ side: activeSection === nav.id }"
                        @click.prevent="scrollToSection(nav.id)">
                        <span>{{ nav.title }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style>
.navi *,
.navi :after,
.navi :before {
    transition: transform .6s ease-in-out;
}

.navi {
    font-size: 14px;
    position: fixed;
    z-index: 9;
    top: 50%;
    right: 50px;
    opacity: 1;
    transform: translate3d(0, -50%, 0);
}

.navi:before {
    content: none;
    display: block;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    position: absolute;
    z-index: -1;
}

.navi>.inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
}

.navi.side {
    display: block;
    padding-left: 4vw;
    padding-top: 200px;
}

.navi.side>.inner {
    display: flex;
}

.navi.side:before {
    content: "";
}

.navi ul {
    display: block;
    user-select: none;
    position: relative;
    list-style: none;
}

.navi ul li {
    position: relative;
    margin: 3% 0;
    text-align: right;
}

.navi ul li a {
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
    display: inline-block;
    font-size: 15px;
    padding: 0;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    text-shadow: 0 0 2px #000;
    transform-origin: right center;
    transition: color .2s ease, padding .2s ease, transform .2s ease;
}

.navi ul li a.side {
    color: #00d4ff;
    padding: 5px 0;
    transform: translateX(2px) scale(1.2);
    will-change: color, padding, transform;
}

@media (hover: hover) {
    .navi ul li a.side:hover {
        transform: scale(1.2);
    }
}

.navi ul li a span {
    display: inline-block;
    padding-left: 5px;
    vertical-align: middle;
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, .2));
}

@media (hover: hover) {
    .navi ul li a:hover {
        opacity: .85;
        transform: scale(1.2);
        will-change: padding, opacity, transform;
    }
}

.navi.hidden {
    display: none;
}

@media (max-width: 768px) {
    .navi.side {
        display: none;
    }
}
</style>
