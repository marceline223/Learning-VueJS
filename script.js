var app = new Vue({
    el: '#app',
    data: {
        students: [
            {
                name: "Филимонова Дарья",
                birthday: "22.03.2001"
            },
            {
                name: "Иванов Степан",
                birthday: "12.06.2004"
            },
            {
                name: "Рогова Алла",
                birthday: "08.12.2000"
            }
        ]
    },
    methods: {
        getAge(student) {
            let birthDate = student.birthday;
            
            let day = parseInt(birthDate.slice(0,2));
            let month = parseInt(birthDate.slice(3,5));
            let year = parseInt(birthDate.slice(6,10));

            let currentDate = new Date();
            let currentDay = currentDate.getDay();
            let currentMonth = currentDate.getMonth();
            let currentYear = currentDate.getFullYear();

            let age = currentYear - year;
            if ((month < currentMonth) || (month == currentMonth && day <= currentDay)) {
                age++;
            }
            return age;
        }
    }
})