import{r,j as e,L as M}from"./index-CCSejlY3.js";import{b as q,a as P,g as V,h as A,i as B}from"./index-DZj9ODMa.js";import{h as D,i as W,p as X,m as a}from"./proxy-Cd4qKPcL.js";function G(){!D.current&&W();const[l]=r.useState(X.current);return l}var I=function(){return I=Object.assign||function(n){for(var c,x=1,m=arguments.length;x<m;x++){c=arguments[x];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(n[d]=c[d])}return n},I.apply(this,arguments)};var Q=function(l){var n=l.starCount1,c=n===void 0?700:n,x=l.starCount2,m=x===void 0?200:x,d=l.starCount3,j=d===void 0?100:d,u=l.enableShootingStars,g=u===void 0?!0:u,f=l.className,v=f===void 0?"":f,y=l.style,_=y===void 0?{}:y,p=r.useRef(null),F=r.useRef(),w=r.useRef(),E=r.useRef(0),R=r.useRef(new Map),C=r.useRef(!1),T=r.useMemo(function(){var t=typeof window<"u"&&window.innerWidth<=768;return t?{"--stars-small":"12px 15px #FFF, 145px 87px #FFF, 223px 145px #FFF, 334px 223px #FFF, 445px 67px #FFF, 156px 334px #FFF, 267px 189px #FFF, 378px 445px #FFF, 489px 223px #FFF, 590px 356px #FFF","--stars-medium":"23px 134px #FFF, 245px 367px #FFF, 167px 223px #FFF, 289px 478px #FFF, 351px 134px #FFF","--stars-large":"67px 245px #FFF, 189px 367px #FFF, 211px 123px #FFF"}:{"--stars-small":"12px 15px #FFF, 45px 87px #FFF, 123px 45px #FFF, 234px 123px #FFF, 345px 67px #FFF, 456px 234px #FFF, 567px 89px #FFF, 678px 345px #FFF, 789px 123px #FFF, 890px 456px #FFF, 23px 567px #FFF, 134px 234px #FFF, 245px 678px #FFF, 356px 345px #FFF, 467px 789px #FFF, 578px 123px #FFF, 689px 567px #FFF, 790px 234px #FFF, 821px 678px #FFF, 932px 345px #FFF","--stars-medium":"23px 234px #FFF, 145px 567px #FFF, 267px 123px #FFF, 389px 678px #FFF, 451px 234px #FFF, 573px 789px #FFF, 695px 345px #FFF, 817px 567px #FFF, 939px 123px #FFF, 161px 678px #FFF","--stars-large":"67px 345px #FFF, 189px 567px #FFF, 311px 123px #FFF, 433px 789px #FFF, 555px 234px #FFF"}},[]),N=r.useCallback(function(t,s,o){for(var i=[],h=0;h<t;h++){var b=Math.floor(Math.random()*s),H=Math.floor(Math.random()*Math.min(2e3,o*2));i.push("".concat(b,"px ").concat(H,"px #FFF"))}return i.join(", ")},[]),S=r.useCallback(function(){if(!(typeof window>"u"||!p.current)){var t=window.innerWidth,s=window.innerHeight;if(!(E.current&&Math.abs(E.current-t)<100)){E.current=t;var o=N(Math.min(c,t*.5),t,s),i=N(Math.min(m,t*.15),t,s),h=N(Math.min(j,t*.08),t,s),b=p.current;b.style.setProperty("--stars-small",o),b.style.setProperty("--stars-medium",i),b.style.setProperty("--stars-large",h)}}},[N,c,m,j]),k=r.useCallback(function(t,s,o){if(!(!t||!t.animate)){var i=R.current.get(t);i&&i.cancel(),t.style.animation="none",t.offsetHeight,t.style.animation="".concat(s," ").concat(o,"ms cubic-bezier(0.4, 0, 0.2, 1)")}},[]),z=r.useCallback(function(){if(!(!p.current||!g)){var t=p.current.querySelector(".right-to-left"),s=p.current.querySelector(".top-to-bottom");if(!(!t||!s)){var o=5e3,i=4e3,h=function(){k(t,"shootingStarRightToLeft",o),setTimeout(function(){k(s,"shootingStarTopToBottom",o)},i)};setTimeout(h,1e3),F.current&&clearInterval(F.current),F.current=setInterval(h,1e4)}}},[g,k]),O=r.useCallback(function(){var t=function(){w.current&&clearTimeout(w.current),w.current=setTimeout(function(){S()},250)},s=function(){if(p.current){var o=p.current.querySelectorAll(".galaxy-stars, .galaxy-stars2, .galaxy-stars3, .galaxy-shooting-star");document.hidden?o.forEach(function(i){i.style.animationPlayState="paused"}):o.forEach(function(i){i.style.animationPlayState="running"})}};return window.addEventListener("resize",t),document.addEventListener("visibilitychange",s),function(){window.removeEventListener("resize",t),document.removeEventListener("visibilitychange",s)}},[S]),L=r.useCallback(function(){if(!C.current){S();var t=O();return z(),C.current=!0,t}},[S,O,z]);return r.useEffect(function(){var t="galaxy-component-styles-optimized";if(!document.getElementById(t)){var s=document.createElement("style");s.id=t,s.textContent=`
        .galaxy-star-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
          overflow: hidden;
          will-change: auto;
        }

        .galaxy-stars {
          width: 1px;
          height: 1px;
          background: transparent;
          box-shadow: var(--stars-small);
          animation: galaxy-animStar 50s linear infinite;
          transform: translate3d(0, 0, 0);
          will-change: transform;
        }

        .galaxy-stars:after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 1px;
          height: 1px;
          background: transparent;
          box-shadow: var(--stars-small);
        }

        .galaxy-stars2 {
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow: var(--stars-medium);
          animation: galaxy-animStar 100s linear infinite;
          transform: translate3d(0, 0, 0);
          will-change: transform;
        }

        .galaxy-stars2:after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow: var(--stars-medium);
        }

        .galaxy-stars3 {
          width: 3px;
          height: 3px;
          background: transparent;
          box-shadow: var(--stars-large);
          animation: galaxy-animStar 150s linear infinite;
          transform: translate3d(0, 0, 0);
          will-change: transform;
        }

        .galaxy-stars3:after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 3px;
          height: 3px;
          background: transparent;
          box-shadow: var(--stars-large);
        }

        @keyframes galaxy-animStar {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(0, -2000px, 0);
          }
        }

        .galaxy-shooting-star {
          position: absolute;
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;
          filter: drop-shadow(0 0 10px #fff);
          opacity: 0;
          will-change: transform, opacity;
          transform: translate3d(0, 0, 0);
        }

        .galaxy-shooting-star::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: translateX(-100%);
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.4), transparent);
        }

        @keyframes shootingStarRightToLeft {
          0% {
            transform: translate3d(110vw, 20vh, 0) rotate(-15deg);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          70% {
            transform: translate3d(-10vw, 40vh, 0) rotate(-15deg);
            opacity: 1;
          }
          100% {
            transform: translate3d(-10vw, 40vh, 0) rotate(-15deg);
            opacity: 0;
          }
        }

        @keyframes shootingStarTopToBottom {
          0% {
            transform: translate3d(30vw, -10vh, 0) rotate(45deg);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          70% {
            transform: translate3d(60vw, 110vh, 0) rotate(45deg);
            opacity: 1;
          }
          100% {
            transform: translate3d(60vw, 110vh, 0) rotate(45deg);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .galaxy-stars, .galaxy-stars2, .galaxy-stars3 {
            animation-duration: 200s;
          }
          
          .galaxy-shooting-star {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .galaxy-stars {
            box-shadow: var(--stars-small);
          }
          .galaxy-stars2 {
            box-shadow: var(--stars-medium);
          }
          .galaxy-stars3 {
            box-shadow: var(--stars-large);
          }
        }
      `,document.head.appendChild(s)}var o=L();return function(){o&&o(),w.current&&clearTimeout(w.current),F.current&&clearInterval(F.current),R.current.forEach(function(i){i.cancel()}),R.current.clear(),C.current=!1}},[L,T]),e.jsxs("div",{ref:p,className:"galaxy-star-background ".concat(v),style:I(I({},T),_),children:[e.jsx("div",{className:"galaxy-stars"}),e.jsx("div",{className:"galaxy-stars2"}),e.jsx("div",{className:"galaxy-stars3"}),g&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"galaxy-shooting-star right-to-left"}),e.jsx("div",{className:"galaxy-shooting-star top-to-bottom"})]})]})};const U="/PORTAFOLIO/assets/header-img-D0MzyEBQ.svg",K=()=>{const n=!G(),c=["Si puedes imaginarlo, puedes programarlo","Innovación que impulsa tu futuro","Tecnología al servicio de tus ideas"],[x,m]=r.useState(""),[d,j]=r.useState(0),[u,g]=r.useState(0);return r.useEffect(()=>{const f=c[d];if(u<f.length){const v=setTimeout(()=>{m(y=>y+f[u]),g(u+1)},60);return()=>clearTimeout(v)}else{const v=setTimeout(()=>{m(""),g(0),j(y=>(y+1)%c.length)},1800);return()=>clearTimeout(v)}},[u,d]),e.jsxs("div",{className:"min-h-screen bg-transparent relative",children:[e.jsx(Q,{starCount1:800,starCount2:250,starCount3:120,enableShootingStars:!0,style:{position:"fixed",inset:0,zIndex:0}}),e.jsxs(a.section,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,ease:"easeOut"},className:"relative min-h-[90vh] flex items-center z-10",children:[e.jsxs("div",{className:"grid max-w-7xl mx-auto items-center gap-12 py-16 px-6 md:px-12 lg:px-20 lg:grid-cols-2",children:[e.jsxs(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2,duration:.6},className:"space-y-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsx(a.h1,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.3,duration:.5},className:"text-4xl font-bold leading-[1.15] tracking-tight text-base-content sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl min-h-[8rem] sm:min-h-[10rem] md:min-h-[12rem]",children:e.jsx("span",{className:"bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient",children:x||" "})}),e.jsx(a.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.4,duration:.5},className:"text-lg md:text-xl text-white/80 max-w-xl leading-relaxed",children:"Equipo especializado en desarrollo web, aplicaciones móviles y consultoría tecnológica. Convertimos tus ideas en productos digitales excepcionales."})]}),e.jsxs(a.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.5,duration:.5},className:"flex flex-wrap gap-4",children:[e.jsxs(M,{to:"/proyectos",className:"btn btn-lg px-8 bg-gradient-to-r from-primary to-secondary text-white border-0 shadow-xl hover:scale-105 transition-all duration-200",children:[e.jsx(q,{}),"Ver Proyectos"]}),e.jsxs(M,{to:"/programadores",className:"btn btn-lg glass px-8 border-white/20 text-white hover:scale-105 transition-all duration-200",children:[e.jsx(P,{}),"Nuestro Equipo"]})]}),e.jsxs(a.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.6,duration:.5},className:"flex flex-wrap gap-8 pt-4 text-white",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"text-3xl font-bold text-primary",children:"15+"}),e.jsx("div",{className:"text-sm text-white/70",children:"Proyectos"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"text-3xl font-bold text-secondary",children:"20+"}),e.jsx("div",{className:"text-sm text-white/70",children:"Clientes"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(V,{className:"text-yellow-400 fill-yellow-400 text-3xl"}),e.jsx("div",{className:"text-3xl font-bold text-yellow-400",children:"5.0"})]}),e.jsx("div",{className:"text-sm text-white/70",children:"Valoración"})]})]})]}),e.jsx(a.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.4,duration:.6,ease:"easeOut"},className:"relative",children:e.jsxs("div",{className:"relative aspect-square w-full max-w-md mx-auto lg:max-w-full",children:[e.jsx(a.div,{animate:n?{y:[0,-20,0],rotate:[0,5,0]}:void 0,transition:n?{duration:6,repeat:1/0,ease:"easeInOut"}:void 0,className:"relative z-10 flex h-full items-center justify-center",children:e.jsx("img",{src:U,alt:"Developer Illustration",loading:"lazy",decoding:"async",fetchPriority:"high",className:"w-full max-w-2xl drop-shadow-2xl"})}),e.jsx(a.div,{animate:n?{y:[0,-30,0],rotate:[0,180,360],scale:[1,1.1,1]}:void 0,transition:n?{duration:8,repeat:1/0,ease:"easeInOut"}:void 0,className:"absolute left-4 top-12 h-20 w-20 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 opacity-60 shadow-2xl",style:{transform:"perspective(1000px) rotateX(20deg)"}}),e.jsx(a.div,{animate:n?{y:[0,40,0],rotate:[0,-90,-180],scale:[1,.9,1]}:void 0,transition:n?{duration:10,repeat:1/0,ease:"easeInOut",delay:1}:void 0,className:"absolute right-8 top-20 h-16 w-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 opacity-60 shadow-2xl"}),e.jsx(a.div,{animate:n?{y:[0,-25,0],x:[0,15,0],rotate:[0,45,0]}:void 0,transition:n?{duration:7,repeat:1/0,ease:"easeInOut",delay:.5}:void 0,className:"absolute bottom-28 left-12 h-14 w-28 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-500 opacity-50 shadow-2xl"}),e.jsx(a.div,{animate:n?{y:[0,35,0],rotate:[0,-180,-360]}:void 0,transition:n?{duration:9,repeat:1/0,ease:"easeInOut",delay:2}:void 0,className:"absolute bottom-20 right-12 h-24 w-24 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 opacity-55 shadow-2xl",style:{transform:"perspective(1000px) rotateY(30deg)"}}),e.jsx(a.div,{animate:n?{y:[0,-20,0],scale:[1,1.2,1]}:void 0,transition:n?{duration:5,repeat:1/0,ease:"easeInOut",delay:1.5}:void 0,className:"absolute left-1/2 top-1/3 h-10 w-10 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500 opacity-45 shadow-xl"}),e.jsx(a.div,{animate:n?{y:[0,30,0],x:[0,-20,0]}:void 0,transition:n?{duration:6,repeat:1/0,ease:"easeInOut",delay:3}:void 0,className:"absolute right-1/4 bottom-1/3 h-16 w-16 rounded-2xl bg-gradient-to-br from-red-400 to-rose-600 opacity-50 shadow-2xl"})]})})]}),e.jsx(a.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:.5},className:"absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70",children:e.jsxs("a",{href:"#about",className:"flex flex-col items-center gap-2 hover:text-white transition-colors",children:[e.jsx("span",{className:"text-sm",children:"Conocer más"}),e.jsx(a.div,{animate:n?{y:[0,8,0]}:void 0,transition:{duration:1.5,repeat:1/0},children:e.jsx(A,{className:"h-6 w-6"})})]})})]}),e.jsx("section",{id:"about",className:"px-6 py-32 md:px-12 lg:px-20 relative z-10",children:e.jsx("div",{className:"container mx-auto max-w-6xl",children:e.jsxs(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center space-y-12",children:[e.jsxs("div",{className:"space-y-8",children:[e.jsxs(a.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},whileHover:{scale:1.1},className:"inline-flex items-center gap-3 transition-all duration-300",children:[e.jsx(V,{className:"text-primary text-2xl drop-shadow-lg"}),e.jsx("span",{className:"text-base font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-lg",children:"Sobre Nosotros"})]}),e.jsxs(a.h2,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-4xl font-bold md:text-5xl lg:text-6xl text-base-content drop-shadow-2xl",style:{textShadow:"0 4px 20px rgba(0,0,0,0.5)"},children:["Conoce a"," ",e.jsx("span",{className:"bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient drop-shadow-2xl",children:"LEXISWARE"})]})]}),e.jsx(a.p,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},className:"text-xl leading-relaxed text-base-content md:text-2xl max-w-3xl mx-auto font-medium",style:{textShadow:"0 2px 10px rgba(0,0,0,0.5)"},children:"Somos un equipo de desarrolladores apasionados que combinan creatividad, experiencia técnica y las últimas tecnologías para crear productos digitales que impulsan el crecimiento de tu negocio."}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-12 pt-8",children:[e.jsx(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1},whileHover:{scale:1.08,y:-12},className:"p-8 transition-all duration-500 rounded-[3rem] bg-base-100 border border-base-content/20 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]",children:e.jsxs("div",{className:"flex flex-col items-center text-center space-y-4",children:[e.jsx(a.div,{whileHover:{scale:1.15,rotate:5},className:"w-24 h-24 rounded-3xl bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center shadow-2xl transition-all",children:e.jsx(q,{className:"text-5xl text-white drop-shadow-lg"})}),e.jsx("h3",{className:"text-2xl font-bold text-base-content",style:{textShadow:"0 2px 10px rgba(0,0,0,0.5)"},children:"Desarrollo Web"}),e.jsx("p",{className:"text-base-content leading-relaxed font-medium",style:{textShadow:"0 2px 8px rgba(0,0,0,0.5)"},children:"Aplicaciones web modernas, rápidas y escalables con las últimas tecnologías"})]})}),e.jsx(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2},whileHover:{scale:1.08,y:-12},className:"p-8 transition-all duration-500 rounded-[3rem] bg-base-100 border border-base-content/20 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]",children:e.jsxs("div",{className:"flex flex-col items-center text-center space-y-4",children:[e.jsx(a.div,{whileHover:{scale:1.15,rotate:-5},className:"w-24 h-24 rounded-3xl bg-gradient-to-br from-secondary via-accent to-secondary flex items-center justify-center shadow-2xl transition-all",children:e.jsx(P,{className:"text-5xl text-white drop-shadow-lg"})}),e.jsx("h3",{className:"text-2xl font-bold text-base-content",style:{textShadow:"0 2px 10px rgba(0,0,0,0.5)"},children:"Equipo Experto"}),e.jsx("p",{className:"text-base-content leading-relaxed font-medium",style:{textShadow:"0 2px 8px rgba(0,0,0,0.5)"},children:"Desarrolladores full-stack con experiencia en múltiples tecnologías"})]})}),e.jsx(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.3},whileHover:{scale:1.08,y:-12},className:"p-8 transition-all duration-500 rounded-[3rem] bg-base-100 border border-base-content/20 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]",children:e.jsxs("div",{className:"flex flex-col items-center text-center space-y-4",children:[e.jsx(a.div,{whileHover:{scale:1.15,rotate:5},className:"w-24 h-24 rounded-3xl bg-gradient-to-br from-accent via-primary to-accent flex items-center justify-center shadow-2xl transition-all",children:e.jsx(B,{className:"text-5xl text-white drop-shadow-lg"})}),e.jsx("h3",{className:"text-2xl font-bold text-base-content",style:{textShadow:"0 2px 10px rgba(0,0,0,0.5)"},children:"Entrega Rápida"}),e.jsx("p",{className:"text-base-content leading-relaxed font-medium",style:{textShadow:"0 2px 8px rgba(0,0,0,0.5)"},children:"Metodologías ágiles para entregas rápidas sin comprometer la calidad"})]})})]}),e.jsx("div",{className:"flex flex-wrap justify-center gap-4 pt-8",children:e.jsx(M,{to:"/asesoria",className:"btn btn-lg px-8 bg-gradient-to-r from-primary to-secondary text-white border-0 shadow-xl hover:scale-105 transition-all duration-200",children:"Solicitar Asesoría"})})]})})})]})};export{K as default};
