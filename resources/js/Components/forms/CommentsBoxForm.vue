
<script setup>

</script>

<template>
  <form id="contact-form" @submit.prevent>
    <div class="row">
      <div class="col-xxl-6 col-xl-6 col-lg-6">
        <div class="postbox__comment-input">
          <input name="name" type="text" placeholder="Enter your name*">
        </div>
      </div>
      <div class="col-xxl-6 col-xl-6 col-lg-6">
        <div class="postbox__comment-input">
          <input name="email" type="email" placeholder="Enter your mail*">
        </div>
      </div>
      <div class="col-xxl-6 col-xl-6 col-lg-6">
        <div class="postbox__comment-input">
          <input name="phone" type="text" placeholder="Enter your  number*">
        </div>
      </div>
      <div class="col-xxl-6 col-xl-6 col-lg-6">
        <div class="postbox__comment-input">
          <input name="company" type="text" placeholder="Website*">
        </div>
      </div>
      <div class="col-xxl-12">
        <div class="postbox__comment-input">
          <textarea name="message" placeholder="Enter your Massage*"></textarea>
        </div>
      </div>
      <div class="col-xxl-12">
        <div class="postbox__comment-agree d-flex align-items-start mb-70">
          <input class="e-check-input" type="checkbox" id="e-agree">
          <label class="e-check-label" for="e-agree">Save my name, email, and website in this browser for the
            next time I comment.</label>
        </div>
      </div>
      <div class="col-xxl-12">
        <div class="postbox__comment-btn">
          <button type="submit" class="tp-btn">Send Message</button>
        </div>
      </div>
    </div>
  </form>
</template>


