new Vue({
    el: '.form',
    data: {
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        countGuests: 0,
        guests: []
    },
    methods: {
        addGuest(guest){
            if (guest) {
                this.guests.push(guest)
            }
        }
    }
})