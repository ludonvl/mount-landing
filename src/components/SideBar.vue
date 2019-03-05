<template>
    <div id="nav" class="column is-3">
        <aside class="menu is-hidden-mobile">
            <p class="menu-label">
                General
            </p>
            <ul class="menu-list">
                <li><router-link to="/" class="is-active">Dashboard</router-link></li>
                <li><router-link to="/about">Customers</router-link></li>
            </ul>
            <p class="menu-label">
                Administration
            </p>
            <ul class="menu-list">
                <li><a>Team Settings</a></li>
            </ul>
        </aside>
    </div>
</template>
