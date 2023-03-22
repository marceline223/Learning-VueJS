Vue.directive('timer', {
    bind(el, options){
        let timer;
        let interval = options.arg;
        let max = Infinity;
        let done = 0;

        for(let name in options.modifiers){
            if(!isNaN(+name)){
                max = parseInt(name);
            }
        }

        let callback = () => {
            done++;
            options.value(el);

            if(done < max){
                timer = setTimeout(() => {
                    callback();
                }, interval);
            }
        };

        if(done < max){
            if(options.modifiers.run){
                callback();
            }
            else{
                timer = setTimeout(() => {
                    callback();
                }, interval);
            }
        }
    }
});

new Vue({
    el: '.sample',
    methods: {
        onTimer(el){
            let fontSize = getComputedStyle(el)['fontSize'];
            el.style.fontSize = parseInt(fontSize) + 10 + 'px';
        }
    }
});