new Vue({
    el: '#app',
    data: {
        squareColor: '',
        inputColor: ''
    },
    computed: {
        colorStyle() {
            return {
                'background-color':this.squareColor
            }
        },
        colorInputStyle() {
            return {
                'background-color':this.inputColor 
            }
        }
    }
})