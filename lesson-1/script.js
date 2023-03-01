new Vue({
    el: '.content',
    data: {
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        guests: [],
        countGuests: 0
    },
    methods: {
        addGuest() {
            this.countGuests++;
        },
        deleteGuest(index) {
            if (index >= 0 && index <= this.guests.length) {
                this.guests.splice(index, 1); // удаление элемента
                this.countGuests--;
            }
        }
    }
})