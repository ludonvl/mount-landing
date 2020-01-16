<template>
    <section class="section section-light-grey is-medium">
        <div class="container">
            <div class="title-wrapper has-text-centered">
                <h2 class="title is-2 is-spaced">{{$t('contact.title')}}</h2>
                <h3 class="subtitle is-5 is-muted">{{$t('contact.description')}}</h3>
                <div class="divider is-centered"></div>
            </div>

            <div class="content-wrapper">
                <div class="columns is-vcentered">
                    <div class="column is-4">
                        <img src="~assets/img/illustrations/contact-us.svg" alt="Description">
                    </div>
                    <div class="column is-6 is-offset-2">
                        <form>
                            <div class="columns is-multiline">
                                <div class="column is-6">
                                    <input class="input is-medium" type="text" :placeholder="$t('form.placeholder.name1')">
                                </div>
                                <div class="column is-6">
                                    <input class="input is-medium" type="email" :placeholder="$t('form.placeholder.email1')">
                                </div>
                                <div class="column is-12">
                                    <textarea class="textarea" rows="10" :placeholder="$t('form.placeholder.write1')"></textarea>
                                </div>
                                <div class="form-footer has-text-centered mt-10">
                                    <button class="button cta is-large primary-btn raised is-clear">{{$t('form.button.sendMessage')}}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
