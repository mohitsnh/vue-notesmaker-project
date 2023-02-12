<template>
    <div class="auth">
        <div class="tabs is-centered">
        <ul>
            <li :class="{'is-active': !isRegister}"><a @click.prevent="isRegister=false">Login</a></li>
            <li :class="{'is-active': isRegister}"><a @click.prevent="isRegister=true">Register</a></li>
        </ul>
        </div>
        <div class="card card-auth">
        <div class="card-content">
            <div class="title has-text-centered">
            {{formTitle}}
            </div>
            <form @submit.prevent="onSubmitAction">
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input class="input" type="email" v-model='credentials.emailId' placeholder="e.g. alexsmith@gmail.com">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input class="input" type="password" v-model='credentials.password' placeholder="Enter a password">
                    </div>
                </div>
                <div class="has-text-right">
                    <button class="button is-success">{{ formButtonName }}</button>
                </div>
            </form>
        </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, reactive  } from 'vue';
import { useStoreAuth } from '@/stores/storeAuth';

//store composable usage
const storeAuth = useStoreAuth()
// Variable to determine the Tab
const isRegister = ref(false)
//computed property to determine the Card Title
const formTitle = computed(() => {
    return isRegister.value ? 'Register':'Login'
})
//computed property to determine the Card Title
const formButtonName = computed(() => {
    return isRegister.value ? 'Register':'Login'
})
//credentials
const credentials = reactive({
    emailId: '',
    password: ''
})
//submit action
const onSubmitAction = () => {
    if(!credentials.emailId || !credentials.password)
    {
        alert("Enter the credentials")
    }
    else
    {
        if(isRegister.value)
        {
            storeAuth.registerUser(credentials)
        }
        else
        {
            storeAuth.loginUser(credentials)
        }
    }
}

</script>

<style>
.card-auth{
    margin: 0 auto;
    max-width: 480px;
}
</style>