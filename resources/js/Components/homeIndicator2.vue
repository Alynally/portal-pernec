

<script>
export default {
    data() {
        return {
            nav_indicator2: [
                { id: "company_overview", title: "Overview" },
                { id: "service_id", title: "Services" },
                { id: "governace_id", title: "Governance" },
                { id: "testimonal_id", title: "Testimonial" },
                { id: "client_id", title: "Our Client" }
            ],
            activeSection: 'company_overview',
            showNavi: true
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

            this.nav_indicator2.forEach(item => {
                const target = document.getElementById(item.id);
                if (target) {
                    observer.observe(target);
                }
            });

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
    <nav class="nav-button" :class="{ hidden: !showNavi }">
        <ul>
            <li v-for="item in nav_indicator2" :key="item.id" :class="{ active: activeSection === item.id }">
                <a :href="'#' + item.id" class="navbtn" data-placement="left" :title="item.title" @click.prevent="scrollToSection(item.id)">
                    <span></span>
                </a>
                <div class="navtooltips">{{ item.title }}</div>
            </li>
        </ul>
    </nav>
</template>

<style>
.nav-button {
    font-size: 14px;
    position: fixed;
    z-index: 9;
    top: 50%;
    left: 50px;
    opacity: 1;
    transform: translate3d(0, -50%, 0);
}

.nav-button.hidden {
    display: none;
}

.nav-button ul {
    margin: 0;
    padding: 0;
}

.nav-button ul li {
    display: block;
    margin: 1em 0;
    position: relative;
}

.nav-button ul li a {
    text-decoration: none;
    display: block;
    z-index: 1;
    cursor: pointer;
}

.nav-button ul li a span {
    display: block;
    width: .7em;
    height: .7em;
    background: gray;
    border: 1px solid gray;
    z-index: 1;
    transform: rotate(45deg);
    transition: transform 0.1s ease-in-out, background 0.6s ease;
}

.nav-button ul li a:hover span {
    transform: rotate(45deg);
    background: black;
}

.nav-button ul li.active a span {
    background: black;
}

.navtooltips {
    display: block;
    max-width: 220px;
    height: 30px;
    text-transform: uppercase;
    font-size: 14px;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.75);
    padding: 0px 5px;
    border-radius: 5px;
    transition: opacity 0.2s ease-in, transform 0.4s ease;
}

.nav-button ul li:hover .navtooltips {
    opacity: 1;
    transform: translateX(10px);
}
</style>
