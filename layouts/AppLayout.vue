<script setup>
// import { useLayout } from '@/layout/composables/layout';
import { computed, ref, watch } from 'vue';
// import AppFooter from './AppFooter.vue';
// import AppSidebar from './AppSidebar.vue';
// import AppTopbar from './AppTopbar.vue';

// const { layoutConfig, layoutState, isSidebarActive, resetMenu } = useLayout();

const outsideClickListener = ref(null);

// watch(isSidebarActive, (newVal) => {
//     if (newVal) {
//         bindOutsideClickListener();
//     } else {
//         unbindOutsideClickListener();
//     }
// });

const containerClass = computed(() => {
    return {
        // 'layout-overlay': layoutConfig.menuMode === 'overlay',
        // 'layout-static': layoutConfig.menuMode === 'static',
        // 'layout-static-inactive': layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === 'static',
        // 'layout-overlay-active': layoutState.overlayMenuActive,
        // 'layout-mobile-active': layoutState.staticMenuMobileActive
    };
});

function bindOutsideClickListener() {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                resetMenu();
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
}

function unbindOutsideClickListener() {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener);
        outsideClickListener.value = null;
    }
}

function isOutsideClicked(event) {
    const sidebarEl = document.querySelector('.layout-sidebar');
    const topbarEl = document.querySelector('.layout-menu-button');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
}
</script>

<template>
<!-- <div class="bg-surface-50 dark:bg-surface-950 min-h-screen p-8 flex flex-col gap-6">
    </div> -->

    <div class="layout-wrapper" :class="containerClass">
        <AppTopbar />
        <!-- <AppSidebar /> -->
        <div class="layout-main-container">
            <div class="layout-main">
                <router-view></router-view>
            </div>
            <AppFooter />
        </div>
        <div class="layout-mask animate-fadein"></div>
    </div>
    <Toast />
</template>
