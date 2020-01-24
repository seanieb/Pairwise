(this.webpackJsonpPairwise=this.webpackJsonpPairwise||[]).push([[0],{65:function(e,t,a){e.exports=a(78)},70:function(e,t,a){},71:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(13),r=a.n(i),l=(a(70),a(21)),s=a(8),c=a(9),u=a(14),p=a(11),h=a(15),m=(a(71),a(42)),d=a(133),v=a(123),b=a(127),g=a(126),f=a(119),E=a(124),k=a(125),y=a(79),S=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).call(this,e))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.options;return o.a.createElement(f.a,{component:y.a},o.a.createElement(v.a,{"aria-label":"simple table"},o.a.createElement(E.a,null,o.a.createElement(k.a,null,o.a.createElement(g.a,null,"\xa0"),o.a.createElement(g.a,{align:"right"},"Mu"),o.a.createElement(g.a,{align:"right"},"Sigma"),o.a.createElement(g.a,{align:"right"},"Prune"))),o.a.createElement(b.a,null,Object.keys(this.props.options).map((function(a){return o.a.createElement(k.a,{key:a},o.a.createElement(g.a,{component:"th",scope:"row"},a),o.a.createElement(g.a,{align:"right"},t[a].mu.toFixed(1)),o.a.createElement(g.a,{align:"right"},t[a].sigma.toFixed(1)),o.a.createElement(g.a,{align:"right"},o.a.createElement("button",{className:"delete",value:a,onClick:e.props.onClick},"x")," "))})))))}}]),t}(o.a.Component),O=a(80),_=a(135),j=a(137),C=a(136),w=a(134),T=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).call(this,e))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,""===this.props.ta_options_error?o.a.createElement(_.a,{severity:"info"},"Add one option per line."):o.a.createElement(_.a,{severity:"warning"},this.props.ta_options_error,"   "),o.a.createElement("p",null,o.a.createElement("form",{onSubmit:this.props.onSubmit},o.a.createElement("textarea",{className:"ta_options",name:"ta_options",rows:"15",cols:"30",value:this.props.options_textarea,placeholder:"This app aims to simplify decisions by breaking them down into many comparisons between two choices. After you've made enough comparisons, you will get Trueskill rankings that will help you make the final decision.",onChange:this.props.onChangeValue}),this.props.option_count>3?o.a.createElement("div",null,o.a.createElement(O.a,{color:"primary",type:"submit",variant:"contained"},"Submit")):o.a.createElement("div",null))),o.a.createElement("p",null,o.a.createElement(C.a,{variant:"outlined"},o.a.createElement(j.a,{inputLabel:this.inputLabel,htmlFor:"outlined-age-native-simple"},"Prefilled Options"),o.a.createElement(w.a,{onChange:this.props.onSelect,native:!0,value:this.props.option_prefill,labelWidth:120,inputProps:{name:"prefilled",id:"outlined-age-native-simple"}},o.a.createElement("option",{value:"none"},"Select Prefilled Option"),o.a.createElement("option",{value:"babyboy"},"Top 50 Boys' Names"),o.a.createElement("option",{value:"vacation"},"European Vacation"),o.a.createElement("option",{value:"netflix"},"Series on Netflix")))))}}]),t}(o.a.Component),M=a(129),B=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).call(this,e))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,!1===this.props.first_pair?o.a.createElement("div",null):o.a.createElement(_.a,{severity:"info"},"Choose between the options or pick the \xaf\\_(\u30c4)_/\xaf if you can't decide. The more selections you make the more accurate the rankings."),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement(M.a,{size:"large",color:"primary","aria-label":"large outlined primary button group"},o.a.createElement(O.a,{value:this.props.pair[0],onClick:this.props.onClick},this.props.pair[0]),o.a.createElement(O.a,{onClick:this.props.onClick,value:"nochoice"},"\u203e\\_(\u30c4)_/\u203e"),o.a.createElement(O.a,{value:this.props.pair[1],onClick:this.props.onClick},this.props.pair[1])))))}}]),t}(o.a.Component),x=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).call(this,e))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"left"},"\xa0"),o.a.createElement("div",{className:"middle"},o.a.createElement(O.a,{color:"primary",style:{minWidth:150},onClick:this.props.onClick,value:"leaderboardToggle"},this.props.leaderboardShown?"Hide":"Show"," Rankings")),o.a.createElement("div",{className:"right"},"\xa0")))}}]),t}(o.a.Component),P=a(130),A=a(131),L=a(132),N=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(P.a,{position:"static"},o.a.createElement(A.a,null,o.a.createElement(L.a,{variant:"title",color:"inherit"},o.a.createElement("a",{href:"",onClick:this.props.onClick,className:"heading"},"Pairwise Comparisons")))))}}]),t}(o.a.Component),D=a(48),J=function(e){function t(){var e;Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).handleSubmit=function(t){t.preventDefault(),D.a.event({category:"Option Form",action:"Submit Option Form",opt_label:t.target.ta_options.value});var a=t.target.ta_options.value.split("\n"),n=a.indexOf("");n>-1&&a.splice(n,1);for(var o={},i=0;i<a.length;i++)o[a[i]]=new m.a;var r=e.getRandomPair(Object.keys(o));e.setState({options:o,options_submitted:!0,pair:r},(function(){}))},e.handleChange=function(t){var a=e.validateOptions(t.target.value);e.setState({options_textarea:t.target.value,ta_options_error:a})},e.handleChoice=function(t){var a=t.target.value===e.state.pair[0]?e.state.pair[1]:e.state.pair[0],n=t.target.value===e.state.pair[0]?e.state.pair[0]:e.state.pair[1],o="nochoice"===t.target.value,i=e.state.options,r=Object(d.a)(i[n],i[a],o),s=Object(l.a)(r,2);i[n]=s[0],i[a]=s[1],i=e.orderleaderboard(i);var c=e.getRandomPair(Object.keys(i));e.setState({pair:c,options:i},(function(){console.log(i)}))},e.handleDelete=function(t){var a=e.state.options;delete a[t.target.value];var n=e.getRandomPair(Object.keys(a));e.setState({pair:n,options:a},(function(){}))},e.handleSelect=function(t){console.log(t.target.value);var a="";"babyboy"===t.target.value?a=e.state.options_boy.join("\r\n"):"vacation"===t.target.value?a=e.state.options_vacation.join("\r\n"):"netflix"===t.target.value&&(a=e.state.options_netflix.join("\r\n"));var n=t.target.value,o=e.validateOptions(a);e.setState({option_prefill:n,options_textarea:a,ta_options_error:o},(function(){}))},e.handleButton=function(t){if(console.log(t.currentTarget.value),"leaderboardToggle"===t.currentTarget.value){var a=!0!==e.state.leaderboardShown;e.setState({leaderboardShown:a},(function(){}))}else e.setState({options:"",options_textarea:"",options_submitted:!1,leaderboardShown:!1},(function(){}))},e.findDuplicates=function(e){for(var t=e.slice().sort(),a=[],n=0;n<t.length-1;n++)t[n+1]==t[n]&&a.push(t[n]);return a},e.state={options:[],options_submitted:!1,pair:[],leaderboardShown:!0,options_textarea:"",options_boy:["Liam","Noah","William","James","Oliver","Benjamin","Elijah","Lucas","Mason","Logan","Alexander","Ethan","Jacob","Michael","Daniel","Henry","Jackson","Sebastian","Aiden","Matthew","Samuel","David","Joseph","Carter","Owen","Wyatt","John","Jack","Luke","Jayden","Dylan","Grayson","Levi","Issac","Gabriel","Julian","Mateo","Anthony","Jaxon","Lincoln","Joshua","Christopher","Andrew","Theodore","Caleb","Ryan","Asher","Nathan","Thomas","Leo"],options_vacation:["Paris","Rome","Venice","London","Barcelona","Florence","Vienna","Madrid","Prague","Istanbul","Milan","Amsterdam","Budapest","Munich","Athens","Berlin","Lisbon","Santorini","Seville","Moscow","Nice","Naples","Dubrovnik","Ediburgh","Saint Petersburg","Pisa","Granada","Frankfurt","Copenhagen","Stockholm","Salzburg","Zurich","Helsinki","Lucerne","Reykjavik","Mykonos","Mont Saint-Michel","Amalfi","Oslo","Dublin","Capri","Cologne","Split","Krakow","Lake Como","Crete","Malaga","Bratislava","Brussels","Riga","Heidelberg","Bruges","Valencia","Porto","Biarritz","Innsbruck","Gothenburg","San Sebastia\u0301n","Sienna","Antwerp","Mostar","Veliko Tarnovo","Tallinn","Bordeaux","Lille","Tbilisi","Hamburg","Sardinia","Genoa","San Marino","Lucca","Bologna","Padua","Malta","Bucharest","Belgrade","Ljubljana","Majorca","Chernobyl","Lviv","Rotterdam","Corsica","Tarifa","Puglia","Geneva","Interlaken","Sicily","Paros"],options_netflix:["Messiah","Spinning Out","The Witcher","Happy!","Living With Yourself","The Crown","Queer Eye: We're in Japan!","Derry Girls","Black Mirror","Atypical","Line of Duty","Star Trek: The Next Generation","Weeds","Sense8","Unbelievable","The Dark Crystal: Age of Resistance","The Spy","The People v. O.J. Simpson","Mindhunter","The Thick of It","Dark","Orange is the New Black","Neon Genesis Evangelion","Carter","Stranger Things","When They See Us","What/If","Special","Tuca and Bertie","The Assassination of Gianni Versace","One-Punch Man","Dogs","Russian Doll","The OA","Sex Education","The Last Kingdom","Dead Set","Orphan Black","BoJack Horseman","The Good Place","The Alienist","Manhunt: Unabomber","Travellers","Better Call Saul","The End of the F***ing World","Aggretsuko","American Vandal","GLOW"],option_prefill:"none",ta_options_error:"",option_count:0};return D.a.initialize("UA-156912037-1"),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"getRandomPair",value:function(e){for(var t,a,n=e.slice(0),o=e.length;o--;)t=n[a=Math.floor((o+1)*Math.random())],n[a]=n[o],n[o]=t;return n.slice(0,2)}},{key:"orderleaderboard",value:function(e){var t={};for(var a in e)t[a]=e[a].mu;var n=Object.keys(t).map((function(e){return[e,t[e]]}));n.sort((function(e,t){return t[1]-e[1]}));var o={};for(var a in n)o[n[a][0]]=e[n[a][0]];return o}},{key:"validateOptions",value:function(e){var t=e.split("\n"),a=this.findDuplicates(t);console.log(a);var n="";return a.length>0?n="The following options are duplicated: ".concat(a.join(",")):t.length<4&&(n="Must add ".concat(5-t.length," more options.")),this.setState({option_count:t.length}),n}},{key:"render",value:function(){return!0===this.state.options_submitted?o.a.createElement("div",{className:"App"},o.a.createElement(N,{onClick:this.handleButton}),o.a.createElement(B,{pair:this.state.pair,onClick:this.handleChoice}),o.a.createElement(x,{leaderboardShown:this.state.leaderboardShown,onClick:this.handleButton}),this.state.leaderboardShown?o.a.createElement(S,{options:this.state.options,onClick:this.handleDelete}):o.a.createElement("div",null)):o.a.createElement("div",{className:"App"},o.a.createElement(N,null),o.a.createElement(T,{option_value:this.state.option_prefill,option_count:this.state.option_count,ta_options_error:this.state.ta_options_error,options_textarea:this.state.options_textarea,onClick:this.handlePrefill,onChangeValue:this.handleChange,onSubmit:this.handleSubmit,onSelect:this.handleSelect}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[65,1,2]]]);
//# sourceMappingURL=main.9c347bee.chunk.js.map