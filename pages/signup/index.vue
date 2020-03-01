<template>
    <div>
        <section class="hero is-fullheight is-default is-bold">
            <Navbar/>
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-vcentered">
                        <div class="column is-5">
                            <figure class="image is-4by3">
                                <img src="~assets/img/illustrations/star-wars.svg" alt="power-up">
                            </figure>
                        </div>
                        <div class="column is-6 is-offset-1">
                            <h3 class="title" v-html="$t('sign.signup.title')"></h3>
                            <p class="subtitle">{{ $t('sign.signup.description') }}</p>
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
                                <div class="field">
                                    <div class="control">
                                        <input v-model="user.confirm"
                                            v-validate.disable="'required|confirmed:password'"
                                            :data-vv-as="$t('form.fieldName.confirmPassword')"
                                            name="confirm"
                                            class="input is-large"
                                            type="password"
                                            :placeholder="`* ${$t('form.label.confirmPassword')}`"
                                        />
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <input v-model="isCGU"
                                            v-validate.disable="'required'"
                                            :data-vv-as="$t('form.fieldName.cgu')"
                                            name="cgu"
                                            id="cgu"
                                            class="is-large"
                                            type="checkbox">
                                        <label for="cgu" v-html="$t('form.label.cgu')"></label>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div class="column">
                                        <span @click="onValidate" :class="['button', 'cta', 'rounded', 'secondary-btn', 'raised', {'is-loading': isSaving}]">{{$t('form.button.signup')}}</span>
                                    </div>
                                    <div class="column  has-text-centered">
                                        <span>{{ $t('form.label.or') }}</span>
                                    </div>
                                    <div class="column has-text-centered">
                                        <div class="button cta rounded raised">
                                            <font-awesome-icon :icon="['fab', 'google']"  />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Notification ref="notif" :title="`${$t('form.message.errorOccured')}`">
                    <div v-for="(error, index) in errors.all()" :key="index">{{error}}</div>
                </Notification>
                <Modal ref="modal">
                    <template slot="title">{{titleCGU}}</template>
                    cocoucou
                    <template slot="footer">
                        <span @click="onClose" :class="['button', 'cta', 'rounded', 'secondary-btn', 'raised']">
                            {{$t('form.button.gotIt')}}
                        </span>
                    </template>
                </Modal>
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

    mounted() {
        document.getElementById("termsAndConditions").addEventListener("click", () => {
            this.$refs.modal.toggle(true)
        });
    },

    computed: {
        titleCGU() {
            var title = this.$t('form.fieldName.cgu')
            return title.charAt(0).toUpperCase() + title.slice(1)
        }
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
            isCGU: false,
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
