const app = Vue.createApp({
    data(){
        return{
            firstName:"John ",
            lastName:"Doe",
            email:"john@gmail.com",
            gender:"male",
            picture:"https://randomuser.me/api/portraits/men/10.jpg"
        }
    },
    methods:{
        getUser(){
            this.firstName="Muhire",
            this.lastName="Ighor",
            this.email="muhireighor123@gmail.com",
            this.gender = "male",
            this.picture="https://randomuser.me/api/portraits/men/11.jpg"
        }
    }
})
app.mount('#app')