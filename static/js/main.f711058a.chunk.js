(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/profile.0d2d4180.jpg"},23:function(e,a,t){e.exports=t(44)},28:function(e,a,t){},29:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(14),c=t.n(s),r=(t(28),t(29),t(30),t(31),t(5)),i=t(6),m=(t(32),t(33),function(){return l.a.createElement("section",{id:"not-found"},l.a.createElement("div",{className:"hero is-fullheight is-info"},l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"title is-1"},"4 ",l.a.createElement("i",{className:"fa fa-ban"})," 4",l.a.createElement("div",{className:"title is-4"},l.a.createElement("br",null),"The page you are looking for was not found"))))))}),o=(t(34),function(){return l.a.createElement("div",{className:"container",id:"top-nav-bar"},l.a.createElement("nav",{className:"navbar",role:"navigation"},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement("a",{className:"navbar-item",href:"/"},l.a.createElement("span",{className:"title is-5 first-name"},"Karl"),l.a.createElement("span",{className:"title is-5 last-name"},"Musingo")),l.a.createElement("button",{className:"navbar-burger burger"},l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}))),l.a.createElement("div",{className:"navbar-menu"},l.a.createElement("div",{className:"navbar-end"},l.a.createElement(r.b,{className:"navbar-item",to:"/home"},"Home"),l.a.createElement(r.b,{className:"navbar-item",to:"/resume"},"Resume"),l.a.createElement(r.b,{className:"navbar-item",to:"/contact"},"Contact")))))}),u=t(17),h=t(18),E=t(21),d=t(19),b=t(22),f=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(t=Object(E.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).state={github:{}},t}return Object(b.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.github.com/users/karlmusingo").then(function(e){return e.json()}).then(function(a){e.setState({github:a})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-6 is-offset-3"},l.a.createElement("h1",{className:"title is-1"},"My Resume"),l.a.createElement("hr",null),l.a.createElement("div",{className:"content"},l.a.createElement("h3",{className:"title is-3"},"Personal Details"),l.a.createElement("hr",null),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-bold"},"First Name: "),"Karl"),l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-bold"},"Last Name: "),"Musingo"),l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-bold"},"Email: "),"karlemusingo@gmail.com")),l.a.createElement("h3",{className:"title is-3"},"GitHub"),l.a.createElement("hr",null),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-bold"},"Username: "),this.state.github.login),l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-bold"},"Location: "),this.state.github.location),l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-bold"},"Followers: "),this.state.github.followers),l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-bold"},"Following: "),this.state.github.following),l.a.createElement("li",null,l.a.createElement("span",{className:"has-text-weight-bold"},"Repositories; "),this.state.github.repositories))))))}}]),a}(n.Component),N=t(20),g=t.n(N),p=(t(43),function(){return l.a.createElement("div",{className:"hero is-fullheight"},l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container v-centered"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column has-text-centered"},l.a.createElement("img",{src:g.a,className:"profile-image",alt:"My Profile"})),l.a.createElement("div",{className:"column content"},l.a.createElement("h1",{className:"title is-1"},"I am Karl Musingo"),l.a.createElement("h3",{className:"title is-3"},"Software Engineer"),l.a.createElement("hr",null),l.a.createElement("p",{id:"about-me"},"I am a fullstack software developer who is in love with data and its analytics"),l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column"},l.a.createElement(r.b,{to:"/resume",className:"button is-info is-large is-fullwidth"},"Resume")),l.a.createElement("div",{className:"column"},l.a.createElement(r.b,{to:"/contact",className:"button is-light is-large is-fullwidth"},"Contact"))),l.a.createElement("p",{className:"social-icons"},l.a.createElement("a",{href:"https://github.com/karlmusingo",target:"black",className:"social-icon",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-github"})),l.a.createElement("a",{href:"https://github.com/karlmusingo",target:"black",className:"social-icon",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-facebook"})),l.a.createElement("a",{href:"https://github.com/karlmusingo",target:"black",className:"social-icon",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-twitter"}))))))))});var v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(r.a,{basename:"/"},l.a.createElement(o,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",exact:!0,component:p}),l.a.createElement(i.a,{path:"/home",exact:!0,component:p}),l.a.createElement(i.a,{path:"/resume",exact:!0,component:f}),l.a.createElement(i.a,{path:"/not",exact:!0,compnent:m}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.f711058a.chunk.js.map