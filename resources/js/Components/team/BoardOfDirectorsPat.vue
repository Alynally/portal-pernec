<template>
    <div class="row justify-content-center">
        <div class="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center wow animated fadeInUp"
            v-for="(member, idx) in members" :key="member.name" :data-wow-delay="`${idx * 0.2}s`">
            <div class="w-100">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <router-link :to="member.link" v-if="member.link">
                            <img :src="member.img" :alt="member.name"
                                class="img-fluid rounded-circle wow animated zoomIn"
                                :data-wow-delay="`${idx * 0.2 + 0.1}s`" />
                            <h5 class="mt-4 font-weight-medium mb-0 wow animated fadeInUp"
                                :data-wow-delay="`${idx * 0.2 + 0.2}s`">
                                {{ member.name }}
                            </h5>
                        </router-link>
                        <template v-else>
                            <img :src="member.img" :alt="member.name"
                                class="img-fluid rounded-circle wow animated zoomIn"
                                :data-wow-delay="`${idx * 0.2 + 0.1}s`" />
                            <h5 class="mt-4 font-weight-medium mb-0 wow animated fadeInUp"
                                :data-wow-delay="`${idx * 0.2 + 0.2}s`">
                                {{ member.name }}
                            </h5>
                        </template>
                        <h6 class="subtitle mb-3 wow animated fadeInUp" :data-wow-delay="`${idx * 0.2 + 0.3}s`">
                            {{ member.position }}
                        </h6>
                        <p class="wow animated fadeInUp" :data-wow-delay="`${idx * 0.2 + 0.4}s`">
                            {{ member.description }}
                        </p>
                        <ul class="list-inline wow animated fadeInUp" :data-wow-delay="`${idx * 0.2 + 0.5}s`">
                            <li class="list-inline-item" v-for="(icon, idx2) in member.socials" :key="idx2">
                                <a :href="icon.link" class="text-decoration-none d-block px-1" target="_blank"
                                    rel="noopener">
                                    <i :class="icon.icon"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    members: {
        type: Array,
        required: true
    }
});
</script>

<style scoped>
.img-fluid {
    transition: transform 0.3s ease;
}

.img-fluid:hover {
    transform: scale(1.05);
}

.list-inline-item a {
    transition: all 0.3s ease;
}

.list-inline-item a:hover {
    transform: translateY(-3px);
    color: #00ADEF !important;
}
</style>
