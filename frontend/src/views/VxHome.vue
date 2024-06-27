<template>
    <CxNavbar />
    <CxPresentation />
    <CxContact />
</template>

<script>
import CxNavbar from '../components/CxNavbar.vue'
import CxPresentation from '@/components/CxPresentation.vue'
import CxContact from '@/components/CxContact.vue'

export default {
    name: 'VxHome',
    components: {
        CxNavbar,
        CxPresentation,
        CxContact
    }
}
</script>