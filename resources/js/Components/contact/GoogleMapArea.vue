<script setup>
import { ref } from 'vue';

const locations = ['Pernec Setiawangsa', 'Pernec Cyberjaya'];
const activeLocation = ref(locations[0]); // Set initial active location
const defaultColor = '#050D1B'; // Default button color
const activeColor = '#00adef'; // Color when button is active

const mapSrc = ref(
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.6789950341454!2d101.73980451175461!3d3.1789016967830146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37764ff7e1d3%3A0x5ec781d1bc95aded!2sPernec%20Corporation%20Berhad!5e0!3m2!1sen!2smy!4v1710303433891!5m2!1sen!2smy'
);

const changeLocation = (location) => {
    activeLocation.value = location;
    updateMapSrc(location);
};

const updateMapSrc = (location) => {
    switch (location) {
        case 'Pernec Setiawangsa':
            mapSrc.value = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3983.678993863256!2d101.742385!3d3.1789020000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37764ff7e1d3%3A0x5ec781d1bc95aded!2sPernec%20Corporation%20Berhad!5e0!3m2!1sen!2smy!4v1714102782692!5m2!1sen!2smy";
            break;
        case 'Pernec Cyberjaya':
            mapSrc.value = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.640808872571!2d101.6553534758451!3d2.919231797057125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb7bb9b0faeb1%3A0x3c939733c5704098!2sPernec%20MyGovUC%20%40%20CyberJaya!5e0!3m2!1sen!2smy!4v1714102756304!5m2!1sen!2smy";
            break;
        default:
            console.warn(`Unknown location: ${location}`);
    }
};
</script>

<template>
    <div class="tp-contact-map-area">
        <div class="tp-contact-map-container">
            <div class="tp-location-buttons">
                <button v-for="(location, index) in locations" :key="index"
                    :class="{ 'active': activeLocation === location }" @click="changeLocation(location)" class="buttons"
                    :style="{ backgroundColor: activeLocation === location ? activeColor : defaultColor }">
                    {{ location }}
                </button>
            </div>
            <div class="tp-contact-map">
                <iframe :src="mapSrc" style="border:0; filter: grayscale(0)" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade" width="600" height="450"></iframe>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tp-contact-map-container {
    display: flex;
    flex-direction: column;

}

.tp-location-buttons {
    display: flex;
    justify-content: center;
    padding: 10px;

}

.buttons {
    position: relative;
    overflow: hidden;
    font-family: var(--tp-ff-heading);
    font-weight: 400;
    font-size: 18px;
    line-height: 19px;
    padding: 21px 48px;
    text-align: center;
    letter-spacing: -0.01em;
    text-transform: capitalize;
    display: inline-block;
    color: var(--tp-common-white);
    background: var(--tp-theme-primary);
    padding: 20px 100px;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px;

}

@media (max-width: 768px) {
    .buttons {
        font-size: 0.9rem;
        padding: 0.8rem 1.5rem;
    }
}

@media (max-width: 480px) {
    .buttons {
        font-size: 0.8rem;
        padding: 0.6rem 1rem;
        margin: 5px;
    }
}
</style>
