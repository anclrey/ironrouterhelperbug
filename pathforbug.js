if (Meteor.isClient) {
  Template.links.helpers({
    active: function(path){
      var p = window.location.pathname;
      console.log('Checking ' + p + ' against ' + path);

      //Check whether current URL (pathname) ends with path argument
      //If true, then this is the page we are on so output >>> before page link
      return (p.lastIndexOf(path) == p.length - path.length) ? '>>> ' : '';
    }
  })
}

//The router maps pages to templates in the html file
Router.map(function(){
  this.route('home', {path:'/'});
  this.route('page1', {path: '/page1'});
  this.route('page2', {path: '/page2'});
  this.route('page3', {path: '/page3'});
});