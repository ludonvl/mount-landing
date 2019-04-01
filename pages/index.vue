<template>
<div>
    <section class="hero is-fullheight is-default is-bold">
        <Navbar/>
        <div class="hero-body">
            <div class="container">
                <div class="columns is-vcentered">
                    <div class="column is-6 is-offset-1 landing-caption">
                        <h1 class="title is-1 is-bold is-spaced">
                            {{ $t("common.title") }}
                        </h1>
                        <h2 class="subtitle is-5 is-muted">{{ $t("common.catcher") }}</h2>
                        <p>
                            <a class="button cta rounded primary-btn raised">
                                {{ $t("common.needit") }}
                            </a>
                        </p>
                    </div>
                    <div class="column is-4 is-offset-1">
                        <figure class="image is-4by3">
                            <img src="~assets/img/illustrations/worker.svg" alt="Description">
                        </figure>
                    </div>
                </div>
            </div>
        </div>

        <div class="hero-foot mb-20">
            <div class="container">
                <div class="tabs is-centered">
                    <ul>
                        <li><a><img class="partner-logo" src="~assets/img/logos/clients/systek.svg"></a></li>
                        <li><a><img class="partner-logo" src="~assets/img/logos/clients/tribe.svg"></a></li>
                        <li><a><img class="partner-logo" src="~assets/img/logos/clients/kromo.svg"></a></li>
                        <li><a><img class="partner-logo" src="~assets/img/logos/clients/infinite.svg"></a></li>
                        <li><a><img class="partner-logo" src="~assets/img/logos/clients/gutwork.svg"></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <Features />

    <Pricing />

    <section class="section section-light-grey is-medium">
        <div class="container">
            <div class="title-wrapper has-text-centered">
                <h2 class="title is-2 is-spaced">Drop us a line or two </h2>
                <h3 class="subtitle is-5 is-muted">We'd love to hear from You</h3>
                <div class="divider is-centered"></div>
            </div>

            <div class="content-wrapper">
                <div class="columns">
                    <div class="column is-6 is-offset-3">
                        <form>
                            <div class="columns is-multiline">
                                <div class="column is-6">
                                    <input class="input is-medium" type="text" placeholder="Enter your Name">
                                </div>
                                <div class="column is-6">
                                    <input class="input is-medium" type="email" placeholder="Enter your Email">
                                </div>
                                <div class="column is-12">
                                    <textarea class="textarea" rows="10" placeholder="Write someting ..."></textarea>
                                </div>
                                <div class="form-footer has-text-centered mt-10">
                                    <button class="button cta is-large primary-btn raised is-clear">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>




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
import Pricing from '../components/main/Pricing'

    export default {
        components: {
            Navbar,
            Features,
            Pricing,
        }

    }
</script>

