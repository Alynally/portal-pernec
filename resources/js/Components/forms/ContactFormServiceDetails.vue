
<script setup>
import { onMounted,ref } from 'vue';
import Swal from 'sweetalert2';
import "@/assets/css/style.css";
import axios from 'axios';


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
		console.log('response', responseData)
		if (responseData.status == 'a') {
			Toast.fire({
				icon: 'info',
				title: 'Sending.....',
				text: 'Sending Your email'
			})
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					apikey: 'cba1687f-8553-4a44-a1e3-59e4ea410ef7',
					...formData.value
				})
			});
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
				text: responseData.message
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

<template>
	<form id="contact-form" @submit.prevent="submitForm">
		<div class="row tp-gx-10">
			<div class="col-md-10">
				<div class="tp-contact-input">
					<input v-model="formData.name" type="text" placeholder="Your Name*" required>
				</div>
			</div>
			<div class="col-md-10">
				<div class="tp-contact-input">
					<input v-model="formData.email" type="email" placeholder="Email Address*" required>
				</div>
			</div>
			<div class="col-md-10">
				<div class="tp-contact-input">
					<select v-model="formData.service_type" required class="custom-dropdown">
						<option v-for="item in service" :key="item.id" :value="item.code">{{ item.services }}</option>
					</select>
				</div>
			</div>
			<div class="col-md-10">
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

<style scoped>
/* Add custom styles for the dropdown button */
.custom-dropdown {
	width: 100%;
	/* Set width to fill the container */
	height: 61px;
	/* Adjust height as needed */
	padding: 8px;
	/* Add padding to align with other fields */
	font-size: 16px;
	/* Adjust font size */
	border: 1px solid #ccc;
	/* Add border for visual clarity */
	border-radius: 4px;
	/* Add border radius for rounded corners */
	background-color: rgb(248, 248, 248);
	box-sizing: border-box;
	/* Ensure padding and border are included in the width */

	.colored-toast.swal2-icon-success {
		background-color: #a5dc86 !important;
	}

	.colored-toast.swal2-icon-error {
		background-color: #f27474 !important;
	}

	.colored-toast.swal2-icon-warning {
		background-color: #f8bb86 !important;
	}

	.colored-toast.swal2-icon-info {
		background-color: #3fc3ee !important;
	}

	.colored-toast.swal2-icon-question {
		background-color: #87adbd !important;
	}

	.colored-toast .swal2-title {
		color: white;
	}

	.colored-toast .swal2-close {
		color: white;
	}

	.colored-toast .swal2-html-container {
		color: white;
	}
}
</style>
