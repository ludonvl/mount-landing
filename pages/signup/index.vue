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
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="email" :placeholder="$t('form.label.email')" autofocus="">
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" :placeholder="$t('form.label.password')">
                                </div>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth">Sign in</button>
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
    }
}
</script>
