var nav = {
    pathToTemplate: '../templates/nav.html',
    renderIn: '.nav',
    name: 'nav'
};
Session.set('counter', 0);
Mistral.configure({
    templates: [nav]
});
Mistral.route('/', 'base', [{
    pathToTemplate: '../templates/home.html',
    renderIn: '#content',
    name: 'hello',
    data: {
        Name: 'Mistral',
        count: function(){
            return Session.get('counter');
        }
    },
    onRendered: function () {
        $('#btnClick').click(function (e) {
            e.preventDefault();
            Session.setReactive('counter', Session.get('counter')+1);
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