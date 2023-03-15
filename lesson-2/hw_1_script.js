new Vue({
    el: '.sample',
    data: {
        info: [
            {
                name: 'Name',
                value: '',
                pattern: /^[a-zA-Z ]{2,30}$/,
                isDirty: false
            },
            {
                name: 'Phone',
                value: '',
                pattern: /^[0-9]{7,14}$/,
                isDirty: false
            },
            {
                name: 'Email',
                value: '',
                pattern: /.+/,
                isDirty: false
            },
            {
                name: 'Some Field 1',
                value: '',
                pattern: /.+/,
                isDirty: false
            },
            {
                name: 'Some Field 2',
                value: '',
                pattern: /.+/,
                isDirty: false
            }
        ],
        showResult: false,
        validation: []
    },
    beforeMount() {
        for (let field of this.info) {
            this.validation.push({
                isCorrect: false
            });
        }
    },
    methods: {
        onInput(index, value) {
            let field = this.info[index];
            let fieldValidation = this.validation[index];

            field.value = value;
            fieldValidation.isCorrect = field.pattern.test(value);
            field.isDirty = true;
        }
    },
    computed: {
        countOfCorrectFields() {
            let count = 0;
            for (let fieldValidation of this.validation) {
                if (fieldValidation.isCorrect) {
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