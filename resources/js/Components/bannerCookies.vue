<template>
    <div v-if="!accepted && !declined" class="cookie-banner">
        <i class="fa-solid fa-cookie-bite"></i>
        <h1>Cookie Settings</h1>
        <p>Our website uses cookies to enhance your browsing experience, personalize content, and analyze our traffic to
            improve our offerings and provide you with tailored solutions. By continuing to browse our site, you consent
            to our use of cookies. <a href="http://127.0.0.1:8002/policy">Privacy Policy</a></p>


        <div class="actions">
            <button class="btn1" @click="showSettings = true">Manage Settings</button>
            <button class="btn2" @click="declineCookies">Decline Cookies</button>
        </div>

        <!-- Manage Settings Modal -->
        <Transition name="fade">
            <div v-if="showSettings" class="settings-modal">
                <div class="settings-content">
                    <h3>Manage Cookie Preferences</h3>
                    <div class="cookie-row-1">
                        <label for="necessary">Strictly Necessary Cookies</label>
                        <toggleButton @toggle="toggleUpdate" />
                    </div>
                    <div class="cookie-row-1">
                        <label for="analytics">Performance Cookies</label>
                        <toggleButton @toggle="toggleUpdate" />
                    </div>
                    <div class="cookie-row-1">
                        <label for="advertising">Targeting Cookies</label>
                        <toggleButton @toggle="toggleUpdate" />
                    </div>
                    <div class="button-close">
                        <button class="btn-3" @click="savePreferences">Save Preferences</button>
                        <button class="btn-4" @click="closeSettings">Close</button>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script>
import Cookies from 'js-cookie';
import toggleButton from '@/Components/toggleButton.vue'

export default {
    components: {
        toggleButton
    },
    data() {
        return {
            accepted: false,
            declined: false,
            showSettings: false,
            cookiePreferences: {
                necessary: false,
                analytics: false,
                advertising: false,
            },
        };
    },
    created() {
        this.loadPreferences();
    },
    methods: {
        loadPreferences() {
            const cookieConsent = Cookies.get('cookie-consent');
            if (cookieConsent) {
                this.accepted = cookieConsent === 'accepted'; //accept the cookies
                this.declined = cookieConsent === 'declined'; //decline the cookies
                if (this.accepted) {
                    this.cookiePreferences = JSON.parse(Cookies.get('cookie-settings') || '{}');
                }
            }
        },

        toggleUpdate(isActive) {
            this.cookiePreferences.analytics = isActive;
            this.cookiePreferences.necessary = isActive;
            this.cookiePreferences.advertising = isActive;
        },

        savePreferences() {  //user can selected which cookies want to save
            Cookies.set('cookie-consent', 'accepted', { expires: 365 });
            Cookies.set('cookie-settings', JSON.stringify(this.cookiePreferences), { expires: 365 });
            this.accepted = true;
            this.showSettings = false; // Close the settings modal after saving
        },
        declineCookies() {
            Cookies.set('cookie-consent', 'declined', { expires: 365 });
            Cookies.remove('cookie-settings'); // Remove cookie settings if cookies are declined
            this.declined = true;
        },
        closeSettings() {
            this.showSettings = false; // Close the settings modal
        },
    },
};
</script>

<style scoped>
.cookie-banner {
    position: fixed;
    bottom: 25px;
    left: 25px;
    width: 400px;
    height: auto;
    color: black;
    padding: 15px;
    z-index: 1000;
    border-radius: 6px;
    background: #FFF;
    box-shadow: 0px 12px 24px -6px rgba(96, 96, 96, 0.15), 0px 0px 1px 0px rgba(96, 96, 96, 0.10);
}

.cookie-banner i {
    position: fixed;
    font-size: 30px;
    color: #F5B97D;
    margin: 0px 0px 10px;
    left: 208px;
    bottom: 200px;
}

.cookie-banner h1 {
    color: #000;
    font-family: poppins;
    font-size: 20px;
    font-style: bold;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    margin: 5px 0px 10px;
}

.cookie-banner p {
    color: #585858;
    font-family: poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    align-self: stretch;
    margin: 0px 0px 10px;
}

.cookie-banner a {
    color: #007AFF;
    font-family: poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    align-self: stretch;
}

.btn1 {
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    border-radius: 4px;
    background: #E1EDFA;
    color: #007AFF;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 10px 10px 10px 0px;
}

.btn2 {
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    border-radius: 4px;
    background: #007AFF;
    flex: 1 0 0;
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 10px 0px 10px 10px;
}

.actions {
    display: flex;
}


/* Manage Cookie Preferences */

.settings-modal {
    /* Wrapper */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.settings-content {
    background-color: #fff;
    color: #000;
    width: 425px;
    height: 500px;
    padding: 30px;
    border-radius: 8px;
    text-align: left;
}

.settings-content h3 {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 10px;
    margin: 0px;
}

.settings-content input {
    margin: 35px;
}


.settings-content label {
    position: relative;
    color: #585858;
    text-align: left;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    flex: 1;
}

.cookie-row-1 {
    display: flex;
    padding: 25px;
}

.button-close {
    display: flex;
    margin: 15px;
}

.btn-3 {
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: #007AFF;
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    margin-left: 10px;
    flex: 2;
    margin: 15px;
    padding: 10px;
}

.btn-4 {
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: #E1EDFA;
    color: #007AFF;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    flex: 1;
    margin: 15px;
    padding: 10px;
}


/* Show settings animation */

.fade-enter-from {
    opacity: 0;
}

.fade-enter-to {
    opacity: 1;
}

.fade-enter-active {
    transition: all 0.5s ease;
}


/* Media queries for Laptop */
@media screen and (max-width: 1024px) {
    .cookie-banner {
        width: 350px;
        height: 210px;
        bottom: 60px;
    }

    .cookie-banner h1 {
        font-size: 16px;
    }

    .cookie-banner p {
        font-size: 12px;
        margin: 1.5px;
    }

    .cookie-banner a {
        font-size: 12px;
    }

    .cookie-banner i {
        bottom: 219px;
        left: 175px;
        font-size: 27px;
    }

    .btn1 {
        font-size: 13px;
    }

    .btn2 {
        font-size: 13px;
    }

    .settings-content {
        width: 325px;
        height: 400px;
        padding: 20px;
    }

    .settings-content h3 {
        font-size: 20px;
        padding-bottom: 20px;
    }

    .settings-content label {
        font-size: 15px;
    }

    .cookie-row-1 {
        padding: 15px;
    }

    .button-close {
        margin: 15px 0px 0px 0px;
    }

    .btn-3 {
        margin: 10px 5px 15px 15px;
    }

    .btn-4 {
        margin: 10px 15px 15px 5px;
    }

    /* Media queries for Tablet */
    @media screen and (max-width: 768px) {
        .cookie-banner {
            align-items: center;
            overflow: hidden;
            border-radius: 0px;
            width: auto;
            height: 180px;
            bottom: 0px;
            left: 0px;
            padding: 25px;
        }

        .cookie-banner h1 {
            font-size: 15px;
            margin: 0px 0px 10px;
        }

        .cookie-banner p {
            font-size: 12px;
            margin: 1.5px;
        }

        .cookie-banner a {
            font-size: 12px;
        }

        .cookie-banner i {
            bottom: 123px;
            left: 155px;
            font-size: 27px;
        }

        .btn1 {
            font-size: 13px;
        }

        .btn2 {
            font-size: 13px;
        }

        .settings-content {
            width: 325px;
            height: 400px;
            padding: 20px;
        }

        .settings-content h3 {
            font-size: 20px;
            padding-bottom: 20px;
        }

        .settings-content label {
            font-size: 15px;
        }

        .cookie-row-1 {
            padding: 15px;
        }

        .button-close {
            margin: 15px 0px 0px 0px;
        }

        .btn-3 {
            margin: 10px 5px 15px 15px;
        }

        .btn-4 {
            margin: 10px 15px 15px 5px;
        }
    }
}

/* Media queries for Mobile L */
@media screen and (max-width: 425px) {
    .cookie-banner {
        align-items: center;
        border-radius: 0px;
        width: auto;
        height: 220px;
        bottom: 0px;
        left: 0px;
        padding: 22px;
    }

    .cookie-banner h1 {
        font-size: 16px;
        margin: 0px 0px 10px;
    }

    .cookie-banner p {
        font-size: 12px;
        margin: 5px 0px 5px 0px;
    }

    .cookie-banner a {
        font-size: 12px;
    }

    .cookie-banner i {
        bottom: 166px;
        left: 155px;
        font-size: 27px;
    }

    .btn1 {
        font-size: 13px;
        margin: 10px 10px 10px 0px;
    }

    .btn2 {
        font-size: 13px;
        margin: 10px 0px 10px 10px;
    }

    .settings-content {
        width: 300px;
        height: 380px;
        padding: 20px;
    }

    .settings-content h3 {
        font-size: 20px;
        padding-bottom: 10px;
    }

    .settings-content label {
        font-size: 15px;
    }

    .cookie-row-1 {
        padding: 15px;
    }

    .button-close {
        margin: 10px 0px 0px 0px;
    }

    .btn-3 {
        margin: 10px 5px 10px 0px;
    }

    .btn-4 {
        margin: 10px 0px 10px 5px;
    }
}

/* Media queries for Mobile M */
@media screen and (max-width: 375px) {
    .cookie-banner {
        align-items: center;
        border-radius: 0px;
        width: auto;
        height: 220px;
        bottom: 0px;
        left: 0px;
        padding: 22px;
    }

    .cookie-banner h1 {
        font-size: 16px;
        margin: 0px 0px 10px;
    }

    .cookie-banner p {
        font-size: 12px;
        margin: 5px 0px 5px 0px;
    }

    .cookie-banner a {
        font-size: 12px;
    }

    .cookie-banner i {
        bottom: 166px;
        left: 155px;
        font-size: 27px;
    }

    .btn1 {
        font-size: 13px;
        margin: 10px 10px 10px 0px;
    }

    .btn2 {
        font-size: 13px;
        margin: 10px 0px 10px 10px;
    }

    .settings-content {
        width: 300px;
        height: 380px;
        padding: 20px;
    }

    .settings-content h3 {
        font-size: 20px;
        padding-bottom: 10px;
    }

    .settings-content label {
        font-size: 15px;
    }

    .cookie-row-1 {
        padding: 15px;
    }

    .button-close {
        margin: 10px 0px 0px 0px;
    }

    .btn-3 {
        margin: 10px 5px 10px 0px;
    }

    .btn-4 {
        margin: 10px 0px 10px 5px;
    }
}

/* Media queries for Mobile S */
@media screen and (max-width: 320px) {
    .cookie-banner {
        align-items: center;
        border-radius: 0px;
        width: auto;
        height: 255px;
        bottom: 0px;
        left: 0px;
        padding: 22px;
    }

    .cookie-banner h1 {
        font-size: 16px;
        margin: 0px 0px 10px;
    }

    .cookie-banner p {
        font-size: 12px;
        margin: 5px 0px 5px 0px;
    }

    .cookie-banner a {
        font-size: 12px;
    }

    .cookie-banner i {
        bottom: 200px;
        left: 155px;
        font-size: 27px;
    }

    .btn1 {
        font-size: 13px;
        margin: 10px 10px 10px 0px;
    }

    .btn2 {
        font-size: 13px;
        margin: 10px 0px 10px 10px;
    }

    .settings-content {
        width: 290px;
        height: 350px;
        padding: 10px;
    }

    .settings-content h3 {
        font-size: 20px;
        padding: 10px;
    }

    .settings-content label {
        font-size: 14px;
    }

    .cookie-row-1 {
        padding: 15px;
    }

    .button-close {
        margin: 5px 0px 0px 0px;
    }

    .btn-3 {
        margin: 10px 5px 15px 15px;
    }

    .btn-4 {
        margin: 10px 15px 15px 5px;
    }
}
</style>