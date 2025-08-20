
<script setup>
import error_shape from "@/assets/img/error/error-shape.png";
import error_img from "@/assets/img/error/404.png";
import CommonFooter from "../Layouts/footers/CommonFooter.vue";
import ScrollToTop from "@/Components/common/ScrollToTop.vue";
import HeaderThree from "@/Layouts/headers/headerVerTh.vue";
</script>

<template>
  <HeaderThree />
    <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="tp-error-area tp-error-ptb p-relative">
              <div className="tp-error-left-shape">
                <img :src="error_shape" alt="theme-pure" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-error-content-box text-center">
                      <img :src="error_img" alt="theme-pure" />
                    </div>
                    <div className="tp-error-text-box text-center">
                      <h4 className="error-title-sm">Oops.! Page Not Found!</h4>
                      <p>The page vou are looking for does not exist'</p>
                      <router-link
                        className="tp-btn-inner alt-color-black"
                        to="/">
                        <span className="tp-btn"> Back To Home</span>
                        <b></b>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <CommonFooter />
        </div>
      </div>
      <ScrollToTop />
  </template>