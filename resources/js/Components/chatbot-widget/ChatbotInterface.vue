<script>
import pic2 from '@/assets/img/chatbot/pic2.png';
import img1 from '@/assets/img/chatbot/pic1.png'
export default {
    data() {
        return {
            messages: [],
            userMessage: '',
            botUrl: 'http://localhost:8060/rasa',
            saveApi: 'http://127.0.0.1:8060/posts_chat',
            chatbotVisible: false,
            typing: false,
            pic2,
            img1,
        };
    },
    methods: {
        toggleChatbot() {
            this.chatbotVisible = !this.chatbotVisible;
            // if (this.chatbotVisible === true && this.messages.length === 0){
            //     this.messages.push({
            //         id:Date.now(),
            //         text:'welcome to PINS',
            //         sender:'bot',
            //     })
            //     this.scrollToBottom();
        },

        async sendMessage() {
            if (this.userMessage.trim() === '') return;

            this.messages.push({
                id: Date.now(),
                text: this.userMessage,
                sender: 'user',
            });

            await this.sendToBot(this.userMessage);
            this.scrollToBottom();
            this.userMessage = '';

        },
        async sendToBot(message) {
            this.typing = true;

            try {
                console.log("hantar api")
                const response = await fetch(this.botUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message: message }),
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const data = await response.json();
                setTimeout(() => {
                    this.typing = false;

                    data.forEach((botMessage) => {
                        this.messages.push({
                            id: Date.now(),
                            text: botMessage.text,
                            buttons: botMessage.buttons || [],
                            sender: 'bot',
                        });

                        this.saveMessages(message, botMessage.text);
                    });

                    this.scrollToBottom();
                });
            } catch (error) {
                console.error('Error sending message to Rasa bot:', error);
                this.typing = false;
            }
        },
        async saveMessages(userMessage, botMessage) {
            try {
                const response = await fetch(this.saveApi, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "user_response": userMessage,
                        "bot_response": botMessage
                    }),
                });

                if (!response.ok) {
                    throw new Error('Failed to save messages');
                }
            } catch (error) {
                console.error('Error saving messages:', error);
            }
        },
        scrollToBottom() {
            this.$nextTick(() => {
                this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight;
            });
        },
        handleButtonClick(payload) {
            const links = {
                '/open_contact_us': 'http://127.0.0.1:8002/contact',
                '/open_services': 'http://127.0.0.1:8002/services',
                '/open_about_us': 'http://127.0.0.1:8002/about',
                '/open_about_leaders': 'http://127.0.0.1:8002/team',
                '/open_it_services': 'http://127.0.0.1:8002/it-essentials',
                '/open_ict_service': 'http://127.0.0.1:8002/ict-productivity-suites',
                '/open_digital_services': 'http://127.0.0.1:8002/digital-transformation-enabler',
                '/open_cyber_services': 'http://127.0.0.1:8002/cyber-security',
                '/open_telecom_services': 'http://127.0.0.1:8002/telecommunication',
                '/open_public_services': 'http://127.0.0.1:8002/public-safety',
                '/open_power_services': 'http://127.0.0.1:8002/power-and-utilities',
                '/open_defense_services': 'http://127.0.0.1:8002/defence-tactical-solutions',
                '/open_deployment_services': 'http://127.0.0.1:8002/deployment-operation-services',
                '/open_devops_services': 'http://127.0.0.1:8002/dev-sec-ops',
                '/pins_ceo_link': 'http://127.0.0.1:8002/ms1',
                '/cyseca_ceo_link': 'http://127.0.0.1:8002/ms8',
            };

            if (links[payload]) {
                this.saveLocal();
                window.location.href = links[payload];
            } else {
                this.userMessage = payload;
                this.sendMessage();
            }
        },
        saveLocal() {
            localStorage.setItem('chatbotMessages', JSON.stringify(this.messages));
        },
        loadMessages() {
            const savedMessages = localStorage.getItem('chatbotMessages');
            if (savedMessages) {
                this.messages = JSON.parse(savedMessages);
            }
        },
        resetChatbot() {
            this.messages = [];
            localStorage.removeItem('chatbotMessages');
            this.userMessage = '';
        },
    },
    mounted() {
        this.loadMessages();
    },
};
</script>


<template>
    <div class="outer">
        <button class="toggle-avatar" v-if="!chatbotVisible" @click="toggleChatbot">
            <img :src="img1" alt="avatar_pic" class="avatar-img" />
        </button>


        <div class="chatbot" v-if="chatbotVisible">
            <header>
                <div class="header-left">
                    <img :src="pic2" alt="Chatbot Image">
                    <h3>PINS VibeAssist</h3>
                </div>
                <div class="icon">
                    <span class="fa-solid fa-xmark" @click="toggleChatbot" data-tooltip="Close"></span>
                    <span class="fa-solid fa-trash" @click="resetChatbot" data-tooltip="Reset"></span>
                </div>
            </header>

            <ul class="chatbot-messages" ref="messages">
                <li v-for="message in messages" :key="message.id" :class="message.sender">
                    <div v-if="message.sender === 'bot'">
                        <div class="iconic">
                            <img :src="pic2" alt="Chatbot Image">
                            <h1>PINS VA</h1>
                        </div>

                        <p>{{ message.text }}</p>
                    </div>

                    <div v-else>
                        <div class="user-chat">
                            <h1>you</h1>
                        </div>
                        <p>{{ message.text }}</p>
                    </div>


                    <div v-if="message.buttons && message.buttons.length > 0" class="message-buttons">
                        <button v-for="button in message.buttons" :key="button.title"
                            @click="handleButtonClick(button.payload)">
                            {{ button.title }}
                        </button>
                    </div>
                </li>

                <li v-if="typing" class="bot typing-indicator">
                    <img :src="pic2" alt="Chatbot Image" class="bot-avatar">
                    <div class="typing-dots">
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                </li>
            </ul>

            <div class="chat-input">
                <textarea id="chat-input" v-model="userMessage" @keydown.enter="sendMessage"
                    placeholder="Let's begin the conversation" spellcheck="false" required></textarea>
                <span id="btn" class="fa-solid fa-paper-plane" @click="sendMessage"></span>
            </div>
        </div>
    </div>
</template>

<style>
.outer {
    position: fixed;
    bottom: 35px;
    right: 30px;
    z-index: 999;
}

.toggle-avatar {
    outline: none;
    border: none;
    height: 74px;
    width: 74px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background 0.2s ease;
    background: #42ade2;
}

.toggle-avatar:hover {
    background: #020c1b;
}

.avatar-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.chatbot {
    position: fixed;
    bottom: 100px;
    right: 20px;
    height: 570px;
    width: 350px;
    background: #f1f1f1;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    justify-content: space-between;
    overflow: hidden;
    transition: all 0.3s ease;
    z-index: 9999;
}

.chatbot header {
    display: flex;
    padding: 15px;
    height: 15%;
    background: #093055;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    z-index: 1;
}

.header-left {
    display: flex;
    align-items: center;
}

.header-left h3 {
    text-align: center;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 20px;
    padding: 10px;
    color: #fff;
}

.icon {
    position: relative;
    display: inline-block;
}

.chatbot-messages {
    overflow-y: auto;
    height: 400px;
    padding: 10px 20px;
}

.chatbot-messages::-webkit-scrollbar {
    width: 6px;
}

.chatbot-messages::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 25px;
}

.chatbot-messages::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 25px;
}

.chatbot-messages .user,
.chatbot-messages .bot {
    display: flex;
    list-style: none;
    margin-bottom: 10px;
    flex-direction: column;
}

.chatbot-messages .user {
    align-items: flex-end;
}

.chatbot-messages .user p {
    /* display: flex; */
    align-items: center;
    background: #0084ff;
    color: #fff;
    border-radius: 20px;
    padding: 0px 10px 0 10px;
    font-size: 16px;
}

.user-chat h1 {
    font-size: 14px;
    text-align: end;
}

.chatbot-messages .bot {
    align-items: flex-start;
}

.chatbot-messages .bot p {
    background: #fff;
    color: #000;
    border-radius: 20px;
    padding: 10px;
    font-size: 16px;
    align-items: center;

}

.chatbot-messages img {
    height: 50px;
    width: 50px;
}

.chatbot-messages h1 {
    font-size: 14px;
    font-family: poppins;
    padding-top: 15px;
}

.iconic {
    display: flex;
    flex-direction: row;
}

.message-buttons {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    gap: 10px;
}

.message-buttons button {
    padding: 0px 2px 0 2px;
    background: #fff;
    color: #0084ff;
    outline: #0084ff solid 2px;
    border-radius: 30px;
    cursor: pointer;
    flex: 1 0 auto;
}

.message-buttons button:hover {
    background: #0084ff;
    color: #fff;
}

.chat-input {
    display: flex;
    padding: 10px;
    border-top: 1px solid #ddd;
}

.chat-input textarea {
    width: 100%;
    border: none;
    outline: none;
    resize: none;
    font-size: 0.95rem;
    background: #fff;
    border-radius: 30px;
    overflow: hidden;
}

.chat-input span {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #071a3c;
    margin-left: 10px;
}

.typing-indicator {
    display: flex;
    align-items: center;
}

.typing-dots {
    display: flex;
    margin-left: 10px;
}

.typing-dots .dot {
    width: 8px;
    height: 8px;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 4px;
    animation: bounce 1.4s infinite ease-in-out both;
}

.typing-dots .dot:nth-child(1) {
    animation-delay: -0.32s;
}

.typing-dots .dot:nth-child(2) {
    animation-delay: -0.16s;
}

@keyframes bounce {

    0%,
    80%,
    100% {
        transform: scale(0);
    }

    40% {
        transform: scale(1);
    }
}

@media (max-width: 768px) {

    .toggle-avatar {
        height: 50px;
        width: 50px;
    }

    .chatbot {
        bottom: 0;
        right: 0;
        height: 100%;
        width: 100%;
        border-radius: 0;
        box-shadow: none;
    }

    .chatbot header {
        height: auto;
        padding: 10px;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
    }

    .header-left h3 {
        font-size: 16px;
        margin: 10px 0;
    }

    .icon {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-left: auto;
        padding: 0px;
    }

    .chatbot-messages {
        height: calc(100% - 220px);
    }

    .chat-input {
        padding: 10px 10px 10px 20px;
    }

    .chat-input textarea {
        border-radius: 20px;
    }
}
</style>
