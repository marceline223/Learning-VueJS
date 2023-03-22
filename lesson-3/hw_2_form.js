Vue.component('app-input', {
    props: ['name', 'value', 'pattern'],
    template: `
    <div class="form-group">
        <label>{{name}}</label>
        <i v-if ="isDirty" :class="itemClass"></i>
        <input type="text"
               class="form-control"
               :value="value"
               @input="onInput">
    </div>
    `,
    data() {
        return {
            isDirty: this.value != ''
        }
    },
    computed: {
        itemClass() {
            return this.pattern.test(this.value) ? 'fa fa-check-circle' : 'fa fa-exclamation-circle';
        }
    },
    methods: {
        onInput(e) {
            this.isDirty = true;
            this.$emit('changedata', {
                value: e.target.value,
                isValid: this.pattern.test(e.target.value)
            });
        }
    }
});

new Vue({
    el: '.sample',
    data: {
        info: [
            {
                name: 'Name',
                value: '',
                pattern: /^[a-zA-Z]{2,30}$/
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
                isCorrect: false
            });
        }
    },
    methods: {
        onChangeData(index, data) {
            this.info[index].value = data.value;
            this.control[index].isCorrect = data.isValid;
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
            let width = this.countOfCorrectFields / this.info.length * 100;
            return {
                'width': width + '%'
            }
        }
    }
});