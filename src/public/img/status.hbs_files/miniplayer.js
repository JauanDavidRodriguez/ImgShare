(function(g){var window=this;var O5=function(a,b){var c="ytp-miniplayer-button-bottom-right";var d=g.W?{D:"div",Y:["ytp-icon","ytp-icon-expand-watch-page"]}:{D:"svg",P:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},K:[{D:"g",P:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",P:{transform:"translate(-1.000000, -3.000000)"},K:[{D:"polygon",P:{points:"0 0 24 0 24 24 0 24"}},{D:"path",P:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]};var e="Abrir p\u00e1gina del video";a.O().ha("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d=g.W?{D:"div",Y:["ytp-icon","ytp-icon-expand-miniplayer"]}:{D:"svg",P:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},K:[{D:"g",P:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",P:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},K:[{D:"path",P:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expandir");g.U.call(this,{D:"button",Y:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],P:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},K:[d]});this.H=a;this.na("click",this.onClick,this);this.ma("title",g.pO(a,e,"i"));g.Le(this,g.bP(b.ub(),this.element))},P5=function(a){g.U.call(this,{D:"div",
J:"ytp-miniplayer-ui"});this.il=!1;this.player=a;this.L(a,"minimized",this.Ni);this.L(a,"onStateChange",this.fP)},Q5=function(a){g.IN.call(this,a);
this.o=new P5(this.player);this.o.hide();g.uN(this.player,this.o.element,4);a.app.I.o&&(this.load(),g.J(a.getRootNode(),"ytp-player-minimized",!0))};
g.t(O5,g.U);O5.prototype.onClick=function(){this.H.ra("onExpandMiniplayer")};g.t(P5,g.U);g.k=P5.prototype;
g.k.show=function(){this.Ec=new g.xn(this.Dn,null,this);this.Ec.start();if(!this.il){this.tooltip=new g.nS(this.player,this);g.C(this,this.tooltip);g.uN(this.player,this.tooltip.element,4);this.tooltip.Sd=.6;this.rb=new g.VO(this.player);g.C(this,this.rb);this.Vi=new g.U({D:"div",J:"ytp-miniplayer-scrim"});g.C(this,this.Vi);this.Vi.ca(this.element);this.L(this.Vi.element,"click",this.BC);var a=new g.U({D:"button",Y:["ytp-miniplayer-close-button","ytp-button"],P:{"aria-label":"Cerrar"},K:[g.qM()]});
g.C(this,a);a.ca(this.Vi.element);this.L(a.element,"click",this.Dl);a=new O5(this.player,this);g.C(this,a);a.ca(this.Vi.element);this.qj=new g.U({D:"div",J:"ytp-miniplayer-controls"});g.C(this,this.qj);this.qj.ca(this.Vi.element);this.L(this.qj.element,"click",this.BC);var b=new g.U({D:"div",J:"ytp-miniplayer-button-container"});g.C(this,b);b.ca(this.qj.element);a=new g.U({D:"div",J:"ytp-miniplayer-play-button-container"});g.C(this,a);a.ca(this.qj.element);var c=new g.U({D:"div",J:"ytp-miniplayer-button-container"});
g.C(this,c);c.ca(this.qj.element);this.WC=new g.OQ(this.player,this,!1);g.C(this,this.WC);this.WC.ca(b.element);b=new g.KQ(this.player,this);g.C(this,b);b.ca(a.element);this.nextButton=new g.OQ(this.player,this,!0);g.C(this,this.nextButton);this.nextButton.ca(c.element);this.Zf=new g.YR(this.player,this);g.C(this,this.Zf);this.Zf.ca(this.Vi.element);this.fc=new g.XQ(this.player,this);g.C(this,this.fc);g.uN(this.player,this.fc.element,4);this.wq=new g.U({D:"div",J:"ytp-miniplayer-buttons"});g.C(this,
this.wq);g.uN(this.player,this.wq.element,4);a=new g.U({D:"button",Y:["ytp-miniplayer-close-button","ytp-button"],P:{"aria-label":"Cerrar"},K:[g.qM()]});g.C(this,a);a.ca(this.wq.element);this.L(a.element,"click",this.Dl);a=new g.U({D:"button",Y:["ytp-miniplayer-replay-button","ytp-button"],P:{"aria-label":"Cerrar"},K:[g.EM()]});g.C(this,a);a.ca(this.wq.element);this.L(a.element,"click",this.gN);this.L(this.player,"presentingplayerstatechange",this.Tb);this.L(this.player,"appresize",this.Pa);this.L(this.player,
"fullscreentoggled",this.Pa);this.Pa();this.il=!0}0!==this.player.getPlayerState()&&g.U.prototype.show.call(this);this.fc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Ec&&(this.Ec.dispose(),this.Ec=void 0);g.U.prototype.hide.call(this);this.player.app.I.o||(this.il&&this.fc.hide(),this.player.loadModule("annotations_module"))};
g.k.X=function(){this.Ec&&(this.Ec.dispose(),this.Ec=void 0);g.U.prototype.X.call(this)};
g.k.Dl=function(){this.player.stopVideo();this.player.ra("onCloseMiniplayer")};
g.k.gN=function(){this.player.playVideo()};
g.k.BC=function(a){if(a.target===this.Vi.element||a.target===this.qj.element)g.P(this.player.O().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.iH(g.hM(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.ra("onExpandMiniplayer")};
g.k.Ni=function(){g.J(this.player.getRootNode(),"ytp-player-minimized",this.player.app.I.o)};
g.k.Xc=function(){this.fc.Vb();this.Zf.Vb()};
g.k.Dn=function(){this.Xc();this.Ec&&this.Ec.start()};
g.k.Tb=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.Pa=function(){this.fc.setPosition(0,g.dN(this.player).getPlayerSize().width,!1);this.fc.Vw()};
g.k.fP=function(a){this.player.app.I.o&&(0===a?this.hide():this.show())};
g.k.ub=function(){return this.tooltip};
g.k.Ic=function(){return!1};
g.k.je=function(){return!1};
g.k.Gf=function(){return!1};
g.k.tw=function(){};
g.k.sj=function(){};
g.k.Dm=function(){};
g.k.Aj=function(){return null};
g.k.Yk=function(){return new g.wh(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Hl=function(a,b,c,d,e){var f=0,h=d=0,l=g.Sh(a);if(b){c=g.Hn(b,"ytp-prev-button")||g.Hn(b,"ytp-next-button");var m=g.Hn(b,"ytp-play-button"),n=g.Hn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Ph(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Hn(b,"ytp-miniplayer-button-top-left"),f=g.Ph(b,this.element),b=g.Sh(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=g.dN(this.player).getPlayerSize().width;e=f+(e||0);l=g.Td(h,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Hh=function(){};
g.k.gh=function(){return!1};g.t(Q5,g.IN);Q5.prototype.create=function(){};
Q5.prototype.Vf=function(){return!1};
Q5.prototype.load=function(){this.player.hideControls();this.o.show()};
Q5.prototype.unload=function(){this.player.showControls();this.o.hide()};g.TN.miniplayer=Q5;})(_yt_player);
