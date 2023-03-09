new Vue({
    el: '.sample',
    data: {
        info: [
            {
                name: 'Name',
                value: '',
                pattern: /^[a-zA-Z ]{2,30}$/
            },
            {
                name: 'Phone',
                value: '',
                pattern: /^[0-9]{7,14}$/
            },
            {
                name: 'Email',
                value: '',
                pattern: /.+/
            },
            {
                name: 'Some Field 1',
                value: '',
                pattern: /.+/
            },
            {
                name: 'Some Field 2',
                value: '',
                pattern: /.+/
            }
        ],
        showResult: false
    },
    methods: {
        checkIsFieldCorrect(field) {
            let pat = field.pattern;
            return pat.test(field.value);
        }
    },
    computed: {
        countOfCorrectFields() {
            let count = 0;
            for (let field of this.info) {
                if (this.checkIsFieldCorrect(field)) {
                    count++;
                }
            }
            return count;
        },
        progressBarStyle() {
            let width = this.countOfCorrectFields / 5 * 100;
            return {
                'width': width + '%'
            }
        }
    }
});