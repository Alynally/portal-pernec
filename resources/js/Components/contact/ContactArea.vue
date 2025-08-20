<script setup>
import ContactForm from "../forms/ContactForm.vue";
import EmailContactIcon from "../../svg/EmailContactIcon.vue";
import PhoneContactIcon from "../../svg/PhoneContactIcon.vue";
 
const contact_area_content = {
    title: 'Contact <span class="title-color">With us</span>',
    info: 'Email, call, or complete the form and we will <br> be contacting you back soon.',
    career: 'We are looking for a dynamic and self-driven talent to join our team. At Pernec, we offer opportunities for career development in the Telecommunications and ICT field. ',
    email_pernec: 'marketing@pernec.com.my',
    email_hrd: 'hrd@pernec.com.my',
    phone_tel: '603-42596000',
    office_data: {
            id: 1,
            title1: 'Pernec HQ',
            title2: 'Pernec Cyberjaya',
        },
    contact_title: 'Contact Us',
    contact_info: 'Your email address will not be published. Required fields <br> are marked *',
 
}
const {career, title, info, email_pernec, email_hrd, phone_tel, office_data, contact_title, contact_info} = contact_area_content
 
 
 
</script>
 
<template>
    <section class="tp-contact-area pt-120 pb-90">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="tp-contact-wrapper">
                        <div class="tp-contact-title-wrapper">
                            <h3 class="tp-contact-title" v-html="title"></h3>
                            <p v-html="info"></p>
                        </div>
                        <div class="tp-contact-content">
                            <div class="tp-contact-content-mail d-flex align-items-center">
                                <div class="tp-contact-content-mail-icon">
                                    <span>
                                        <EmailContactIcon />
                                    </span>
                                </div>
                                <a :href="'mailto:' + email_pernec" class="tp-contact-item-title">{{ email_pernec }}</a>
                            </div>
                            <div class="tp-contact-content-phone d-flex align-items-center">
                                <div class="tp-contact-content-phone-icon">
                                    <span>
                                        <PhoneContactIcon />
                                    </span>
                                </div>
                                <a :href="'tel:' + phone_tel" class="tp-contact-item-title">Tel: {{ phone_tel }}</a>
                            </div>
                            <div class="tp-contact-content-career">
                                <h3 class="tp-contact-career-title">Career</h3>
                                <p class="careertext">{{ career }}</p>
                            </div>
                            <div class="tp-contact-content-mail d-flex align-items-center">
                                <div class="tp-contact-content-mail-icon">
                                    <span>
                                        <EmailContactIcon />
                                    </span>
                                </div>
                                <div>
                                    <a :href="'mailto:' + email_hrd" class="tp-contact-item-title">{{ email_hrd }}</a>
                                </div>
                            </div>

                            <div style="margin-bottom: 50px;"></div>    
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="tp-contact-form">
                        <h3 class="tp-contact-form-title">{{ contact_title }}</h3>
                        <p v-html="contact_info"></p>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>

.careertext {

    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    color: #7F7F8C;
    margin-bottom: 40px;   
}

.tp-contact-career-title {

    font-weight: 700;
    font-size: 45px;
    line-height: 65px;
    display: inline-block;
    text-transform: uppercase;
    color: var(--tp-heading-secondary);
    margin-bottom: 35px;
}

.tp-contact-career-title span {

    color: var(--tp-theme-secondary);
}

</style>