var navbar = {
    pathToTemplate: 'navbar.html',
    renderIn: 'navbar',
    name: 'navbar',
    onRendered: onroutechanged,
    onRouteChanged: onroutechanged
}
Mst.configure({
    viewModels: [navbar]
});
Mst.route('/', 'home', [{
    pathToTemplate: 'home.html',
    renderIn: 'content',
    name: 'home',
    onRendered: function () {

    }
}]);

Mst.route('/about', 'about', [{
    pathToTemplate: 'about.html',
    renderIn: 'content',
    name: 'about',
    onRendered: function () {

    }
}]);

Mst.routeOtherWise('/');
