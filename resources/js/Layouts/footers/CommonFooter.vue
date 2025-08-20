<script setup>
import FooterCopyright from "@/Components/common/FooterCopyright.vue";
import FooterLogo from "@/assets/img/logo/PernecLogo.gif";

const footer_content = {
	address: "No. 21, Jalan Setiawangsa 8, Taman Setiawangsa, 54200 Kuala Lumpur",
	address_2: "C1-1 & D1-2, Level 1, Signature Office Unit BIRO, Jalan Teknokrat 6, Cyber 5, 63000 Cyberjaya, Selangor",
	email_p: "marketing@pernec.com.my",
	email_c: "marketing@cyseca.com.my",
	phone: "+603-42596000",
	series: "Our Company",
	Text: 'Pernec Corporation Bhd (197301000600)',
	Text1: 'Pernec Integrated Network Systems Sdn. Bhd (199701003468)',
	Text2: 'CYSECA Solutions Sdn Bhd (198801007628)',
	enquiry: "For any enquiry :",
	policy: "Privacy Policy",
}

const { address, address_2, email_p, email_c, phone, series, Text, Text1, Text2, enquiry, policy } = footer_content


</script>

<template>
	<footer class="tp-footer-3-area p-relative " id="footer">
		<div class="tp-footer-bg"></div>
		<div class="container">
			<div class="tp-footer-3-main-area">
				<div class="row">
					<div class="col-lg-4 col-md-6">
						<div class="tp-footer-widget tp-footer-3-col-1">
							<div class="tp-footer-logo">
								<router-link to="/"> <img :src="FooterLogo" alt="image-title-here"></router-link>
							</div>
							<div class="tp-footer-widget-content">
								<div class="tp-footer-info">
									<p class="p">{{ footer_info }}</p>
									<div class="tp-footer-main-location">
										<a :href="google_map" target="_blank">
											<i class="fa fa-sharp fa-light fa-location-dot"></i> <span
												v-html="address"></span> <br>
										</a>
									</div>
									<div class="tp-footer-main-location">
										<a :href="google_map" target="_blank">
											<i class="fa fa-sharp fa-light fa-location-dot"></i> <span
												v-html="address_2"></span> <br> {{ phone }}
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6">
						<div class="tp-footer-widget tp-footer-3-col-3">
							<h3 class="tp-footer-widget-title">{{ enquiry }}</h3>
							<div class="tp-footer-main-mail">
								<a href="mailto:marketing@pernec.com.my"><i class="fa-light fa-message-dots"></i>
									{{ email_p }}</a>
							</div>
							<div class="tp-footer-main-mail">
								<a href="mailto:marketing@cyseca.com.my"><i class="fa-light fa-message-dots"></i>
									{{ email_c }}</a>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6">
						<div class="tp-footer-widget tp-footer-3-col-2">
							<h3 class="tp-footer-widget-title">{{ series }}</h3>
							<div class="tp-footer-widget-content">
								{{ Text }} <br> {{ Text1 }} <br>{{ Text2 }}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="tp-footer-copyright-area p-relative">
				<div class="row">
					<div class="col-md-12 col-lg-6">
						<div class="tp-footer-copyright-inner">
							<p>
								<FooterCopyright />
							</p>
						</div>
					</div>
					<div class="col-md-12 col-lg-6">
						<div class="tp-footer-copyright-inner text-lg-end">
							<a class="ml-50" href="/policy">{{ policy }}</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>
