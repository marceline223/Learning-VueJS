new Vue({
    el: '.sample',
    data: {
        isAgreed: false,
        isSpam: false,
        sendSpamOn: 'email',
        isRead: false,
        showResult: false,
        hasScrolledToBottom: false
    },
    methods: {
        handleScroll(el) {
            if ((el.target.offsetHeight + el.target.scrollTop) >= el.target.scrollHeight) {
                this.isRead = true;
            }
        }
    }
});