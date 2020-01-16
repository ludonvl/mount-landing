<template>
<div>
    <section class="hero is-fullheight is-default is-bold">
        <Navbar/>
        <div class="hero-body">
            <div class="container">
                <div class="columns is-vcentered">
                    <div class="column is-5 is-offset-1 landing-caption">
                        <h1 class="title is-1 is-bold is-spaced">
                            {{ $t("common.title") }}
                        </h1>
                        <h2 class="subtitle is-5 is-offset-1 is-muted">{{ $t("common.catcher") }}</h2>
                        <p>
                            <a class="button cta rounded primary-btn raised">
                                {{ $t("common.needit") }}
                            </a>
                        </p>
                    </div>
                    <div class="column is-4 is-offset-1">
                        <figure class="image is-4by3">
                            <img src="~assets/img/illustrations/monitor-power.svg" alt="power-up">
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Features />

    <Downloads />

    <Pricing />

    <Contact />

    <div id="auth-modal" class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="flex-card auth-card">
                <div class="tabs-wrapper">
                    <div class="tabs">
                        <ul>
                            <li class="is-active" data-tab="login-tab"><a>Login</a></li>
                            <li data-tab="register-tab"><a>Register</a></li>
                        </ul>
                    </div>
                    <div id="login-tab" class="tab-content is-active">
                        <div class="field">
                            <label>Username</label>
                            <div class="control">
                                <input type="text" class="input is-medium" placeholder="Enter username">
                            </div>
                        </div>
                        <div class="field">
                            <label>Password</label>
                            <div class="control">
                                <input type="password" class="input is-medium" placeholder="Enter password">
                            </div>
                        </div>

                        <a class="button is-fullwidth secondary-btn is-rounded raised">Log in</a>
                    </div>
                </div>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
    </div>
</div>
</template>
<script>
import Navbar from '../components/Navbar'
import Features from '../components/main/Features'
import Downloads from '../components/main/Downloads'
import Pricing from '../components/main/Pricing'
import Contact from '../components/main/Contact'

    export default {
        components: {
            Navbar,
            Features,
            Downloads,
            Pricing,
            Contact
        }

    }
</script>
<style lang="scss" scoped>
.title {
    color: #444F60 !important
}
</style>

