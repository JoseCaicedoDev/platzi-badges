(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t.p+"static/media/JC.038da6d9.png"},26:function(e,a,t){e.exports=t.p+"static/media/notError.84e145c6.png"},27:function(e,a,t){e.exports=t(44)},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),c=t.n(l),s=t(12),o=t(1),m=t(15),i=t(24),d=t(4),u=t(5),p=t(7),g=t(6),f=t(8),h=(t(32),t(10)),E=t.n(h),b=function(e){function a(){return Object(d.a)(this,a),Object(p.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Badge"},r.a.createElement("div",{className:"Badge__header"},r.a.createElement("img",{src:E.a,alt:"Logo"})),r.a.createElement("div",{className:"Badge__section-name"},r.a.createElement("img",{className:"Badge__avatar",src:this.props.avatarURL,alt:"badge"}),r.a.createElement("h1",null,this.props.firstName," ",r.a.createElement("br",null)," ",this.props.lastName)),r.a.createElement("div",{className:"Badge__section-info"},r.a.createElement("h3",null,this.props.description),r.a.createElement("div",null,"@",this.props.redes)),r.a.createElement("div",{className:"Badge__footer"},"#Vamoscontoda"))}}]),a}(r.a.Component),v=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(p.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(r)))).handleClick=function(e){console.log("Diste click")},t.handleSubmit=function(e){e.preventDefault(),console.log("Se Envio el form")},t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Nuevo registro"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Primer Nombre"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"firstName",value:this.props.formValues.firstName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Primer Apellido"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"lastName",value:this.props.formValues.lastName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"email",name:"email",value:this.props.formValues.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Titulo de Trabajo"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"description",value:this.props.formValues.description})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Twitter"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"redes",value:this.props.formValues.redes})),r.a.createElement("button",{onClick:this.handleClick,className:"btn btn-primary"},"Guardar")))}}]),a}(r.a.Component),N=(t(33),function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(p.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(r)))).state={form:{firstName:"",lastName:"",description:"",redes:"",email:""}},t.handleChange=function(e){t.setState({form:Object(i.a)({},t.state.form,Object(m.a)({},e.target.name,e.target.value))})},t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"BadgeNew__hero"},r.a.createElement("img",{className:"img-fluid",src:E.a,alt:"logo"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(b,{firstName:this.state.form.firstName,lastName:this.state.form.lastName,description:this.state.form.description,redes:this.state.form.redes,email:this.state.form.email,avatarURL:"https://s.gravatar.com/avatar/cc1972e508fae75bdcba7e711595bb56?s=80"})),r.a.createElement("div",{className:"col-6"},r.a.createElement(v,{onChange:this.handleChange,formValues:this.state.form})))))}}]),a}(r.a.Component)),_=(t(34),function(e){function a(){return Object(d.a)(this,a),Object(p.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("ul",{className:"list-unstyled BadgesList"},this.props.badges.map(function(e){return r.a.createElement("li",{className:"BadgesListItem",key:e.id},r.a.createElement("img",{className:"BadgesListItem__avatar ",src:e.avatarUrl,alt:"imagen de los Badge"}),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("strong",null,e.firstName," ",e.lastName)),r.a.createElement("div",{className:"Twitter__name"},r.a.createElement("span",{className:"Twitter__logo"}),"@",e.twitter),r.a.createElement("div",null,e.jobTitle)))}))}}]),a}(r.a.Component)),j=(t(35),function(e){function a(e){var t;return Object(d.a)(this,a),t=Object(p.a)(this,Object(g.a)(a).call(this,e)),console.log("1. constructor()"),t.state={data:[]},t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("3. componentDidMount()"),setTimeout(function(){e.setState({data:[{id:"2de30c42-9deb-40fc-a41f-05e62b5939a7",firstName:"Freda",lastName:"Grady",email:"Leann_Berge@gmail.com",jobTitle:"Legacy Brand Director",twitter:"FredaGrady22221-7573",avatarUrl:"https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"},{id:"d00d3614-101a-44ca-b6c2-0be075aeed3d",firstName:"Major",lastName:"Rodriguez",email:"Ilene66@hotmail.com",jobTitle:"Human Research Architect",twitter:"ajorRodriguez61545",avatarUrl:"https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"},{id:"63c03386-33a2-4512-9ac1-354ad7bec5e9",firstName:"Daphney",lastName:"Torphy",email:"Ron61@hotmail.com",jobTitle:"National Markets Officer",twitter:"DaphneyTorphy96105",avatarUrl:"https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"}]})},3e3)}},{key:"render",value:function(){return console.log("2. rener()"),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Badges"},r.a.createElement("div",{className:"Badges__hero"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement("img",{className:"Badges_conf-logo",src:E.a,alt:""})))),r.a.createElement("div",{className:"Badges__container"},r.a.createElement("div",{className:"Badges__buttons"},r.a.createElement(s.b,{to:"/badges/new",className:"btn btn-primary"},"agregar"))),r.a.createElement("div",{className:"Badges__list"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement(_,{badges:this.state.data}))))}}]),a}(r.a.Component));t(40);var O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Badges__hero"},r.a.createElement("div",{className:"Badges__container col-6"},r.a.createElement("img",{className:"img-fluid",src:E.a,alt:"logo"}),r.a.createElement("h2",null,"Bienvenidos"),r.a.createElement("p",null,"Sitio de aprendizaje"),r.a.createElement(s.b,{to:"/badges",className:"btn btn-primary"},"Ver ahora")),r.a.createElement("div",{className:"Badges__container col-6"},r.a.createElement("img",{className:"img-fluid",src:E.a,alt:"logo"}))))},w=(t(41),function(e){function a(){return Object(d.a)(this,a),Object(p.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Navbar"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(s.b,{className:"Navbar__brand",to:"/"},r.a.createElement("img",{className:"Navbar__brand-logo",src:E.a,alt:"Logo"}),r.a.createElement("span",{className:"font-weight-light"},"Primera web"),r.a.createElement("span",{className:"font-weight-bold"},"React"))))}}]),a}(r.a.Component));var y=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),e.children)},B=t(26),C=t.n(B);var k=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:C.a,width:"50%",alt:"Error 404"}))};var T=function(){return r.a.createElement(s.a,null,r.a.createElement(y,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:O}),r.a.createElement(o.a,{exact:!0,path:"/badges",component:j}),r.a.createElement(o.a,{exact:!0,path:"/badges/new",component:N}),r.a.createElement(o.a,{component:k}))))},x=(t(42),t(43),document.getElementById("app"));c.a.render(r.a.createElement(T,null),x)}},[[27,1,2]]]);
//# sourceMappingURL=main.fde8047c.chunk.js.map