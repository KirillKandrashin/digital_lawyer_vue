const app2 = new Vue({
    el:'#app2',
    data:{
        errors:[],
        mail:null,
        password:null
    },
    methods:{
        checkForm:function(e) {
            if(this.mail && this.password) return true;
            this.errors = [];
            if(!this.mail) this.errors.push("Mail required.");
            if(!this.password) this.errors.push("Password required.");
            e.preventDefault();
        }
    }
})