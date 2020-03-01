<template>
    <div>
        <section class="hero is-fullheight is-default is-bold">
            <Navbar/>
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-vcentered">
                        <div class="column is-6 is-offset-1">
                            <h3 class="title" v-html="$t('sign.signin.title')"></h3>
                            <p class="subtitle">{{ $t('sign.signin.description') }}</p>
                            <form @submit.prevent="onValidate">
                                <div class="field">
                                    <div class="control">
                                        <input v-model="user.email"
                                            v-validate.disable="'required|email'"
                                            :data-vv-as="$t('form.fieldName.email')"
                                            name="email"
                                            class="input is-large"
                                            type="text"
                                            :placeholder="`* ${$t('form.label.email')}`"
                                            autofocus=""
                                        />
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <input v-model="user.password"
                                            v-validate.disable="'required|min:6'"
                                            :data-vv-as="$t('form.fieldName.password')"
                                            ref="password"
                                            name="password"
                                            class="input is-large"
                                            type="password"
                                            :placeholder="`* ${$t('form.label.password')}`"
                                        />
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div class="column">
                                        <span @click="onValidate" :class="['button', 'cta', 'rounded', 'secondary-btn', 'raised', {'is-loading': isSaving}]">
                                            {{$t('form.button.signin')}}
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="column is-5">
                            <figure class="image is-4by3">
                                <img src="~assets/img/illustrations/launch.svg" alt="power-up">
                            </figure>
                        </div>
                    </div>
                </div>
                <Notification ref="notif" :title="`${$t('form.message.errorOccured')}`">
                    <div v-for="(error, index) in errors.all()" :key="index">{{error}}</div>
                </Notification>
            </div>
        </section>
    </div>
</template>
<script>
import Navbar from '~/components/Navbar'
import Notification from '~/components/global/Notification'
import Modal from '~/components/global/Modal'
import axios from 'axios'

export default {

    components: {
        Navbar,
        Modal,
        Notification
    },

    methods: {
        onClose() {
            this.$refs.modal.toggle(false)
        },

        async onValidate() {
            await this.$validator.validateAll()
            if (this.errors.any()) {
                this.$refs.notif.toggle(true)
                return
            }

            if (this.isSaving === false) {
                this.isSaving = true

                this.$axios.$post('/signup', {
                    email: this.user.email,
                    passsord: this.user.password
                }).then(() => {
                    this.isSaving = false
                }).catch(() => {
                    console.log('error')
                    this.isSaving = false
                })
            }
        }
    },

    data() {
        return {
            user: {
                email: null,
                password: null,
                confirm: null
            },
            isSaving: false,
        }
    },

    head() {
        return {
            title: this.$t('common.headTitle2')
        }
    }
}
</script>
<style lang="scss">
.link {
    text-decoration: underline;
    color: #444F60;
    cursor: pointer;

    &:hover {
        color: #666a80;
    }
}
</style>
