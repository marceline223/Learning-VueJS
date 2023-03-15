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
        showResult: false,
        control: []
    },
    beforeMount() {
        for (let field of this.info) {
            this.control.push({
                isCorrect: false,
                isDirty: false
            });
        }
    },
    methods: {
        onInput(index, value) {
            let field = this.info[index];
            let fieldControl = this.control[index];

            field.value = value;
            fieldControl.isCorrect = field.pattern.test(value);
            fieldControl.isDirty = true;
        }
    },
    computed: {
        countOfCorrectFields() {
            let count = 0;
            for (let fieldValidation of this.control) {
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