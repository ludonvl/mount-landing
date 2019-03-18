<template>
    <div class="hero-body">
        <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
                <h3 class="title">{{ $t('sign.signin.title') }}</h3>
                <p class="subtitle">{{ $t('sign.signin.subtitle') }}</p>
                <div class="box">
                    <figure class="avatar">
                        <img src="~assets/img/mount-logo.svg">
                    </figure>
                    <form>
                        <div class="field">
                            <div class="control">
                                <input class="input is-large" type="email" :placeholder="$t('sign.signin.form.email')" autofocus="">
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <input class="input is-large" type="password" :placeholder="$t('sign.signin.form.password')">
                            </div>
                        </div>
                        <button class="button is-block is-info is-large is-fullwidth">{{ $t('sign.signin.form.sendButton') }}</button>
                    </form>
                </div>
                <p>
                    <nuxt-link :to="localePath('signup')">{{ $t('sign.signin.links.signup') }}</nuxt-link> &nbsp;·&nbsp;
                    <a href="../">{{ $t('sign.signin.links.forget') }}</a> &nbsp;·&nbsp;
                    <a href="../">{{ $t('sign.signin.links.help') }}</a>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style lang="scss" scoped>
  @import 'assets/css/var';
  @import 'assets/css/sign';
</style>
