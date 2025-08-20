<template>
    <div>
        <button type="button" class="btn btn-toggle" :aria-pressed="isToggled" @click="toggleButton">
            <div class="handle"></div>
        </button>
    </div>
</template>
 
<script>
export default {
    data() {
        return {
            isToggled: false
        };
    },
    methods: {
        toggleButton() {
            this.isToggled = !this.isToggled;
            // Optionally, handle the toggled state here
            console.log("Button toggled:", this.isToggled);
        }
    }
};
</script>
 
<style>
/* Basic reset for the button */
.btn-toggle {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
    background-color: #ccc;
    border: 1px solid #ddd;
    border-radius: 34px;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s, border-color 0.3s;
    
}
 
/* Style for the handle */
.btn-toggle .handle {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 25px;
    height: 25px;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 0.3s;
}
 
/* When the button is toggled on */
.btn-toggle[aria-pressed="true"] {
    background-color: #007AFF;
    border-color: #007AFF;
}
 
/* When the button is toggled on, move the handle */
.btn-toggle[aria-pressed="true"] .handle {
    transform: translateX(26px);
}
 
/* Accessibility improvements */
.btn-toggle:focus {
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
}
 
.btn-toggle:active {
    background-color: #bbb;
}
</style>