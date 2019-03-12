<template>
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title">{{ $t('sign.signup.title') }}</h3>
                    <p class="subtitle">{{ $t('sign.signup.subtitle') }}</p>
                    <div class="box">
                        <figure class="avatar">
                            <img src="~assets/img/mount-logo.svg">
                        </figure>
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="email" placeholder="Your Email" autofocus="">
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="Your Password">
                                </div>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth">Sign in</button>
                        </form>
                    </div>
                    <p>
                        <nuxt-link :to="localePath('signin')">Sign In</nuxt-link> &nbsp;·&nbsp;
                        <a href="../">Need Help?</a>
                    </p>
                </div>
            </div>
        </div>
</template>
<style lang="scss" scoped>
  @import 'assets/css/var';
  @import 'assets/css/sign';
</style>

