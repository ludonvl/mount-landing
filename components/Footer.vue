<template>
    <div>
        <footer class="footer footer-dark">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <div class="footer-logo">
                            <img src="~assets/img/logos/mounted-red-rounded.png">
                        </div>
                    </div>
                    <div class="column">
                        <div class="footer-column">
                            <div class="footer-header">
                                <h3>Product</h3>
                            </div>
                            <ul class="link-list">
                                <li><a href="#">Discover features</a></li>
                                <li><a href="#">Why choose our Product ?</a></li>
                                <li><a href="#">Compare features</a></li>
                                <li><a href="#">Our Roadmap</a></li>
                                <li><a href="#">Request features</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="column">
                        <div class="footer-column">
                            <div class="footer-header">
                                <h3>Docs</h3>
                            </div>
                            <ul class="link-list">
                                <li><a href="#">Get Started</a></li>
                                <li><a href="#">User guides</a></li>
                                <li><a href="#">Admin guide</a></li>
                                <li><a href="#">Developers</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="column">
                        <div class="footer-column">
                            <div class="footer-header">
                                <h3>{{ $t("common.lang.title") }}</h3>
                            </div>
                            <ul class="link-list">
                                <li><nuxt-link :to="switchLocalePath('fr')">
                                    {{ $t("common.lang.french") }}
    							</nuxt-link></li>
                                <li><nuxt-link :to="switchLocalePath('en')">
                                    {{ $t("common.lang.english") }}
    							</nuxt-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
