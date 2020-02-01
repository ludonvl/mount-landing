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
                        <h3 class="title" v-html="$t('common.signup.title')"></h3>
                        <p class="subtitle">{{ $t('common.signup.description') }}</p>
                        <form @submit.prevent="onValidate">
                            <div class="field">
                                <div class="control">
                                    <input v-validate.disable="'required|email'" v-model="email" name="email" class="input is-large" type="text" :placeholder="`* ${$t('form.label.email')}`" autofocus="">
                                    <span>{{ errors.first('email') }}</span>
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" :placeholder="`* ${$t('form.label.password')}`">
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" :placeholder="`* ${$t('form.label.confirmPassword')}`">
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input id="cgu" class="is-large" type="checkbox" v-model="checkbox">
                                    <label for="cgu" v-html="$t('form.label.cgu')"></label>
                                </div>
                            </div>
                            <div class="columns is-vcentered">
                                <div class="column">
                                    <span class="button cta rounded secondary-btn raised">{{$t('form.button.signup')}}</span>
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
        </div>
    </section>
</div>
</template>
<script>
import Navbar from '~/components/Navbar'

export default {

    components: {
        Navbar,
    },

    created() {
        console.log(this)
    },

    methods: {
        onValidate() {
            this.$validator.validateAll()
        },

        test() {
            console.log('tokok')
        }
    },

    data() {
        return {
            email: null,
            checkbox: false,
        }
    }
}
</script>
