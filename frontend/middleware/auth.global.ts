
export default defineNuxtRouteMiddleware((to, from) => {
    const nuxtApp =  useNuxtApp()
    const isLoggedIn = nuxtApp.$session.isLoggedIn()
    /* check if user is connected or not */
    console.log('isLoggedIn do nothing', to.path , from.path)
    console.log('!isLoggedIn', !isLoggedIn)

    if(!isLoggedIn){
        if (to.path === '/sign_in'){
            abortNavigation()
        }else{
            return navigateTo('/sign_in')
        }

    }else{
        /**
         * todo: update of refresh token here
         */
        // console.log('isLoggedIn do nothing', to, from)
        // console.log('!isLoggedIn', !isLoggedIn)

    }

})
