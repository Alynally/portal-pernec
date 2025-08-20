<template>
	<form id="contact-form" @submit.prevent="submitForm">
		<div class="row tp-gx-10">
			<div class="col-md-6">
				<div class="tp-contact-input">
					<input v-model="formData.name" type="text" placeholder="Your Name*" required>
				</div>
			</div>
			<div class="col-md-6">
				<div class="tp-contact-input">
					<input v-model="formData.email" type="email" placeholder="Email Address*" required>
				</div>
			</div>
			<div class="col-md-6">
				<div class="tp-contact-input">
					<select v-model="formData.service_type" required class="custom-dropdown">
						<option v-for="item in service" :key="item.id" :value="item.code">{{ item.services }}</option>
					</select>
				</div>
			</div>
			<div class="col-md-6">
				<div class="tp-contact-input">
					<input v-model="formData.phone_number" type="text" placeholder="Phone Number" pattern="[0-9]*"
						title="Please enter numbers only">
				</div>
			</div>
			<div class="col-md-12">
				<div class="tp-contact-input">
					<textarea v-model="formData.message" placeholder="Enter Your Message here"></textarea>
				</div>
			</div>
			<div class="tp-contact-btn mt-10">
				<button type="submit" class="tp-btn">Send Message</button>
			</div>
		</div>
	</form>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import Swal from 'sweetalert2';
import "@/assets/css/style.css";
import axios from "axios";

let service = ref([])

onMounted(async () => {
	getServiceData()
})

const getServiceData = async () => {
	let response = await axios.get("/api/v1/contactservices")
	service.value = response.data.data
}

const formData = ref({
	name: '',
	email: '',
	service_type: '',
	phone_number: '',
	message: ''
});

const submitForm = async () => {
	const Toast = Swal.mixin({
		toast: true,
		position: 'top-right',
		iconColor: 'white',
		customClass: {
			popup: 'colored-toast',
		},
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
	})
	try {
		const response2 = await fetch('/api/v1/contactform', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				...formData.value
			})
		});
		const responseData = await response2.json();
		
		if (responseData.status == 'a') {
			Toast.fire({
				icon: 'info',
				title: 'Sending.....',
				text: 'Sending Your email'
			})
            const access_key = import.meta.env.VITE_APP_FORM_API_KEY;

			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					apikey:access_key,
					...formData.value
				})
			});

            const responseData2 = await response.json();

			formData.value = {
				name: '',
				email: '',
				service_type: '',
				phone_number: '',
				message: ''
			};
            

			Toast.fire({
				icon: 'success',
				title: 'Success',
				text: responseData.msg
			})
		} else {
			Toast.fire({
				icon: 'error',
				title: 'DB Error',
				text: responseData.msg
			})
		}
	} catch (error) {
		console.error('Error submitting form:', error);
		Toast.fire({
			icon: 'error',
			title: 'Failed to Submit Form',
			text: 'An error occurred while submitting the form. Please try again later.'
		})
	}
};
</script>

<style scoped>
.custom-dropdown {
	width: 100%;
    height: 60px;
    border: 1px solid #D4DCE0;
    background-color: #f8f8f9;
    outline: 0;
    color: var(--tp-common-black);
    padding: 0 25px;
    border-radius: 2px;
	font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: rgba(20, 33, 43, 0.8);
	}

</style>
