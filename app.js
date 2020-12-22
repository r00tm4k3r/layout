Vue.component('user-info', {
    template: '#user-info',
    data: function () {
        return {
            user: {
                FullName: "Erich Fromma",
                OnlineStatus: true,
                Country: "Германия",
                LiveCity: "Франкфурт",
                Birthday:'03-23-1900',
                Hobbies: ['Философия', 'Неофрейдизм', 'Марксизм']
            },
            infoTopics: ['Страна', 'Город', 'День рождения', 'Увлечения']
        }
}});

Vue.component('news', {
    template: '#news',
    data: function () {
        return {
            news: [
                {
                    GroupName: 'CDPR',
                    ImagePath: 'img/cdpr.jpg',
                    GroupLink: '#',
                    DateOfPosting:(new Date - new Date('12.17.2020')),
                    PostTitle: 'Cyberpunk 2077',
                    PostPreview: 'img/cyberpunk2077.jpg'
                },
                {
                    GroupName: 'CDPR',
                    ImagePath: 'img/cdpr.jpg',
                    GroupLink: '#',
                    DateOfPosting:(new Date - new Date('12.17.2020')),
                    PostTitle: 'Cyberpunk 2077',
                    PostPreview: 'img/cyberpunk2077.jpg'
                }
            ]
        }
}});

Vue.component('friends-list', {
    template: '#friends',
    data: function () {
        return {
            friendsList: [
                {
                    FirstName: 'Zmih',
                    LastName: 'Sedoy',
                    Age: 19,
                    ImagePath: 'img/test.jpg',
                    Gender: 'male',
                    LiveCity: 'Казань',
                    ProfileLink: "#",
                    OnlineStatus: true
                },
                {
                    FirstName: 'Valera',
                    LastName: 'Znoyniy',
                    Age: 19,
                    ImagePath: 'img/test.jpg',
                    Gender: 'male',
                    LiveCity: 'Казань',
                    ProfileLink: "#",
                    OnlineStatus: true
                },
                {
                    FirstName: 'Tomas',
                    LastName: 'Edison',
                    Age: 57,
                    ImagePath: 'img/test.jpg',
                    Gender: 'male',
                    LiveCity: 'Москва',
                    ProfileLink: "#",
                    OnlineStatus: false
                },
                {
                    FirstName: 'Tom',
                    LastName: 'Hanson',
                    Age: 28,
                    ImagePath: 'img/test.jpg',
                    Gender: 'male',
                    LiveCity: 'Люберцы',
                    ProfileLink: "#",
                    OnlineStatus: false
                },
                {
                    FirstName: 'Elisebet',
                    LastName: 'Hardware',
                    Age: 30,
                    ImagePath: 'img/test.jpg',
                    Gender: 'female',
                    LiveCity: 'Санкт-Петербург',
                    ProfileLink: "#",
                    OnlineStatus: false
                },
                {
                    FirstName: 'Layla',
                    LastName: 'Harison',
                    Age: 15,
                    ImagePath: 'img/test.jpg',
                    Gender: 'female',
                    LiveCity: 'New-York',
                    ProfileLink: "#",
                    OnlineStatus: true
                }],

            cities: ['Москва', 'Санкт-Петербург', 'Казань', 'Люберцы', 'New-York'],
            search: '',
            selectedGender: '',
            minAge: '',
            maxAge: '',
            selectedCity: ''
        }
    },
    methods: {
        disableFilter: function () {
            this.search = '';
            this.selectedGender = '';
            this.minAge = '';
            this.maxAge = '';
            this.selectedCity = '';

        },
        maxAgeChecker() {
            if (this.minAge != '' && parseInt(this.minAge) > parseInt(this.maxAge)) {
                temp = this.minAge;
                this.minAge = this.maxAge;
                this.maxAge = temp;
            }
        },

    },
    computed: {
        filtered() {
            var self = this;

            return this.friendsList.filter(function (friend) {

                var nameFilter = friend.FirstName.toLowerCase().indexOf(self.search) > -1 ||
                    friend.LastName.toLowerCase().indexOf(self.search) > -1;
                var genderFilter = self.selectedGender == '' ? true : friend.Gender == self.selectedGender;
                var cityFilter = self.selectedCity == '' ? true : friend.LiveCity == self.selectedCity;

                var minAgeFilter = self.minAge == '' ? true : friend.Age >= self.minAge;
                var maxAgeFilter = self.maxAge == '' ? true : friend.Age <= self.maxAge;

                return nameFilter && genderFilter && cityFilter && minAgeFilter && maxAgeFilter;
            });
        }
    }
});

Vue.component('subscribers-list', {
    template: '#subscribers',
    data: function () {
        return {
            subscribersList: [
                {
                    FirstName: 'Zmih',
                    LastName: 'Sedoy',
                    Age: 19,
                    ImagePath: 'img/test.jpg',
                    Gender: 'male',
                    LiveCity: 'Казань',
                    ProfileLink: "#",
                    OnlineStatus: true
                },
                {
                    FirstName: 'Valera',
                    LastName: 'Znoyniy',
                    Age: 19,
                    ImagePath: 'img/test.jpg',
                    Gender: 'male',
                    LiveCity: 'Казань',
                    ProfileLink: "#",
                    OnlineStatus: true
                },
                {
                    FirstName: 'Tomas',
                    LastName: 'Edison',
                    Age: 57,
                    ImagePath: 'img/test.jpg',
                    Gender: 'male',
                    LiveCity: 'Москва',
                    ProfileLink: "#",
                    OnlineStatus: false
                },
                {
                    FirstName: 'Tom',
                    LastName: 'Hanson',
                    Age: 28,
                    ImagePath: 'img/test.jpg',
                    Gender: 'male',
                    LiveCity: 'Люберцы',
                    ProfileLink: "#",
                    OnlineStatus: false
                },
                {
                    FirstName: 'Elisebet',
                    LastName: 'Hardware',
                    Age: 30,
                    ImagePath: 'img/test.jpg',
                    Gender: 'female',
                    LiveCity: 'Санкт-Петербург',
                    ProfileLink: "#",
                    OnlineStatus: false
                },
                {
                    FirstName: 'Layla',
                    LastName: 'Harison',
                    Age: 15,
                    ImagePath: 'img/test.jpg',
                    Gender: 'female',
                    LiveCity: 'New-York',
                    ProfileLink: "#",
                    OnlineStatus: true
                }],

            cities: ['Москва', 'Санкт-Петербург', 'Казань', 'Люберцы', 'New-York'],
            search: '',
            selectedGender: '',
            minAge: '',
            maxAge: '',
            selectedCity: ''
        }
    },
    methods: {
        disableFilter: function () {
            this.search = '';
            this.selectedGender = '';
            this.minAge = '';
            this.maxAge = '';
            this.selectedCity = '';

        },
        maxAgeChecker() {
            if (this.minAge != '' && parseInt(this.minAge) > parseInt(this.maxAge)) {
                temp = this.minAge;
                this.minAge = this.maxAge;
                this.maxAge = temp;
            }
        },

    },
    computed: {
        filtered() {
            var self = this;

            return this.subscribersList.filter(function (subscriber) {

                var nameFilter = subscriber.FirstName.toLowerCase().indexOf(self.search) > -1 ||
                    subscriber.LastName.toLowerCase().indexOf(self.search) > -1;
                var genderFilter = self.selectedGender == '' ? true : subscriber.Gender == self.selectedGender;
                var cityFilter = self.selectedCity == '' ? true : subscriber.LiveCity == self.selectedCity;

                var minAgeFilter = self.minAge == '' ? true : subscriber.Age >= self.minAge;
                var maxAgeFilter = self.maxAge == '' ? true : subscriber.Age <= self.maxAge;

                return nameFilter && genderFilter && cityFilter && minAgeFilter && maxAgeFilter;
            });
        }
    }
});

Vue.component('bonuses-list', {
    template: '#bonuses',
    data: function () {
        return {
            bonusesList: [
                {
                    GroupName: 'CDPR',
                    AliasName: 'CD Projekt Red',
                    GroupLink: '#',
                    ImagePath: 'img/cdpr.jpg',
                    BonusCount: 125
                },
                {
                    GroupName: 'CDPR',
                    AliasName: 'Project Red',
                    GroupLink: '#',
                    ImagePath: 'img/cdpr.jpg',
                    BonusCount: 1224
                }
            ],
            search: ''
        }
    },
    watch:{

    },
    methods: {
        bonusCorrectEnd: function(index) {
            end = '';
            if(!(this.bonusesList[index].BonusCount % 10 == 1))
                end = (this.bonusesList[index].BonusCount % 10 >= 2 && this.bonusesList[index].BonusCount % 10 <= 4) ? 'а': 'ов';
            return end;
        }
    },
    computed: {
        filtered() {
            var self = this;

            return this.bonusesList.filter(function (bonus) {

                return bonus.GroupName.toLowerCase().indexOf(self.search) > -1 ||
                    bonus.AliasName.toLowerCase().indexOf(self.search) > -1;
            });
        }
    }
});






$('.dropdown-menu').on('click', function (e) {
    e.stopPropagation();
});


Vue.directive('scroll', {
    inserted: function (el, binding) {
        let f = function (evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f)
            }
        };
        window.addEventListener('scroll', f)
    }
});


let app = new Vue({
    el: '#wrapper',
    data: {
        //App
        showScrollToTop: false,
    },

    methods: {
        scrollToTop_Scroll: function (evt, el) {
            this.showScrollToTop = window.scrollY > 0;
        },
        scrollToTop_Click: function () {
            $('html, body').animate({ scrollTop: 0 }, 500);
        },
        sidebarToggle: function () {
            $("#SidebarMain").toggleClass("toggled");
        },
    }
});


$(document).ready((function () { })), function (e) {
    "use strict";
    e(window).resize((function () {
        e(window).width() < 768 && e(".sidebar .collapse").collapse("hide")
    }));
    e("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel", (function (o) {
        if (e(window).width() > 768) {
            var t = o.originalEvent, l = t.wheelDelta || -t.detail;
            this.scrollTop += 30 * (l < 0 ? 1 : -1), o.preventDefault()
        }
    }))
}(jQuery);
