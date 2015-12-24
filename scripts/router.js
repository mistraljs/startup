var nav = {
    pathToTemplate: '../templates/nav.html',
    renderIn: '.nav',
    name: 'nav'
};
Mistral.configure({
    templates: [nav]
});
Mistral.route('/', 'base', [{
    pathToTemplate: '../templates/home.html',
    renderIn: '#content',
    name: 'hello',
    data: {
        Name: 'Yoza Wiratama',
        count: 0
    },
    onRendered: function () {
        $('#btnClick').click(function (e) {
            e.preventDefault();
            var counter = parseInt($('#clickCounter').text());
            $('#clickCounter').text(counter + 1);
        });
    }
}]);
Mistral.route('/about', 'about', [{
    pathToTemplate: '../templates/about.html',
    renderIn: '#content',
    name: 'about'
}]);
Mistral.route('/newsfeed', 'newsfeed', [{
    pathToTemplate: '../templates/newsfeed.html',
    renderIn: '#content',
    name: 'newsfeed',
    data: {
        name: "Yoza Wiratama",
        newsfeed: [{
            "content": "Moe"
        }, {
            "content": "Larry"
        }, {
            "content": "Curly"
        }]
    }
}]);
Mistral.routeOtherWise('/');