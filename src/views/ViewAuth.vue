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
                        <input v-if="!isRegister" class="input" type="email" v-model='loginCredentials.emailId' placeholder="e.g. alexsmith@gmail.com">
                        <input v-else class="input" type="email" v-model='registerCredentials.emailId' placeholder="e.g. alexsmith@gmail.com">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input v-if="!isRegister" class="input" type="password" v-model='loginCredentials.password' placeholder="Enter a password">
                        <input v-else class="input" type="password" v-model='registerCredentials.password' placeholder="Enter a password">
                    </div>
                </div>
                <div class="field" v-if="isRegister">
                    <label class="label">Re-enter Password</label>
                    <div class="control">
                        <input class="input" type="password" v-model='registerCredentials.confirmPassword' placeholder="Confirm password">
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
//login credentials
const loginCredentials = reactive({
    emailId: '',
    password: ''
})
//Register credentials
const registerCredentials = reactive({
    emailId: '',
    password: '',
    confirmPassword: ''
})
//submit action
const onSubmitAction = () => {

    if(isRegister.value)
    {
        if(!registerCredentials.emailId || !registerCredentials.password || !registerCredentials.confirmPassword)
        {
            alert("Enter the credentials")
        }
        else if(registerCredentials.confirmPassword != registerCredentials.password)
        {
            alert("Passwords do not match")
        }
        else
        {
            storeAuth.registerUser(registerCredentials)
        }
    }
    else
    {   if(!loginCredentials.emailId || !loginCredentials.password)
        {
            alert("Enter the login credentials")
        }
        else
        {
        storeAuth.loginUser(loginCredentials)
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