import{r as n,j as e,L as M}from"./index-DuBGklgq.js";import{b as V,a as P,g as O,h as B,i as D}from"./index-CIUVLXkc.js";import{h as W,i as _,p as X,m as a}from"./proxy-r_s7_YUl.js";function G(){!W.current&&_();const[l]=n.useState(X.current);return l}var C=function(){return C=Object.assign||function(o){for(var c,d=1,m=arguments.length;d<m;d++){c=arguments[d];for(var x in c)Object.prototype.hasOwnProperty.call(c,x)&&(o[x]=c[x])}return o},C.apply(this,arguments)};var Q=function(l){var o=l.starCount1,c=o===void 0?700:o,d=l.starCount2,m=d===void 0?200:d,x=l.starCount3,j=x===void 0?100:x,u=l.enableShootingStars,g=u===void 0?!0:u,y=l.className,F=y===void 0?"":y,f=l.style,A=f===void 0?{}:f,p=n.useRef(null),v=n.useRef(),w=n.useRef(),E=n.useRef(0),R=n.useRef(new Map),I=n.useRef(!1),T=n.useMemo(function(){var t=typeof window<"u"&&window.innerWidth<=768;return t?{"--stars-small":"12px 15px #FFF, 145px 87px #FFF, 223px 145px #FFF, 334px 223px #FFF, 445px 67px #FFF, 156px 334px #FFF, 267px 189px #FFF, 378px 445px #FFF, 489px 223px #FFF, 590px 356px #FFF","--stars-medium":"23px 134px #FFF, 245px 367px #FFF, 167px 223px #FFF, 289px 478px #FFF, 351px 134px #FFF","--stars-large":"67px 245px #FFF, 189px 367px #FFF, 211px 123px #FFF"}:{"--stars-small":"12px 15px #FFF, 45px 87px #FFF, 123px 45px #FFF, 234px 123px #FFF, 345px 67px #FFF, 456px 234px #FFF, 567px 89px #FFF, 678px 345px #FFF, 789px 123px #FFF, 890px 456px #FFF, 23px 567px #FFF, 134px 234px #FFF, 245px 678px #FFF, 356px 345px #FFF, 467px 789px #FFF, 578px 123px #FFF, 689px 567px #FFF, 790px 234px #FFF, 821px 678px #FFF, 932px 345px #FFF","--stars-medium":"23px 234px #FFF, 145px 567px #FFF, 267px 123px #FFF, 389px 678px #FFF, 451px 234px #FFF, 573px 789px #FFF, 695px 345px #FFF, 817px 567px #FFF, 939px 123px #FFF, 161px 678px #FFF","--stars-large":"67px 345px #FFF, 189px 567px #FFF, 311px 123px #FFF, 433px 789px #FFF, 555px 234px #FFF"}},[]),N=n.useCallback(function(t,r,i){for(var s=[],h=0;h<t;h++){var b=Math.floor(Math.random()*r),H=Math.floor(Math.random()*Math.min(2e3,i*2));s.push("".concat(b,"px ").concat(H,"px #FFF"))}return s.join(", ")},[]),S=n.useCallback(function(){if(!(typeof window>"u"||!p.current)){var t=window.innerWidth,r=window.innerHeight;if(!(E.current&&Math.abs(E.current-t)<100)){E.current=t;var i=N(Math.min(c,t*.5),t,r),s=N(Math.min(m,t*.15),t,r),h=N(Math.min(j,t*.08),t,r),b=p.current;b.style.setProperty("--stars-small",i),b.style.setProperty("--stars-medium",s),b.style.setProperty("--stars-large",h)}}},[N,c,m,j]),k=n.useCallback(function(t,r,i){if(!(!t||!t.animate)){var s=R.current.get(t);s&&s.cancel(),t.style.animation="none",t.offsetHeight,t.style.animation="".concat(r," ").concat(i,"ms cubic-bezier(0.4, 0, 0.2, 1)")}},[]),z=n.useCallback(function(){if(!(!p.current||!g)){var t=p.current.querySelector(".right-to-left"),r=p.current.querySelector(".top-to-bottom");if(!(!t||!r)){var i=5e3,s=4e3,h=function(){k(t,"shootingStarRightToLeft",i),setTimeout(function(){k(r,"shootingStarTopToBottom",i)},s)};setTimeout(h,1e3),v.current&&clearInterval(v.current),v.current=setInterval(h,1e4)}}},[g,k]),L=n.useCallback(function(){var t=function(){w.current&&clearTimeout(w.current),w.current=setTimeout(function(){S()},250)},r=function(){if(p.current){var i=p.current.querySelectorAll(".galaxy-stars, .galaxy-stars2, .galaxy-stars3, .galaxy-shooting-star");document.hidden?i.forEach(function(s){s.style.animationPlayState="paused"}):i.forEach(function(s){s.style.animationPlayState="running"})}};return window.addEventListener("resize",t),document.addEventListener("visibilitychange",r),function(){window.removeEventListener("resize",t),document.removeEventListener("visibilitychange",r)}},[S]),q=n.useCallback(function(){if(!I.current){S();var t=L();return z(),I.current=!0,t}},[S,L,z]);return n.useEffect(function(){var t="galaxy-component-styles-optimized";if(!document.getElementById(t)){var r=document.createElement("style");r.id=t,r.textContent=`
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
      `,document.head.appendChild(r)}var i=q();return function(){i&&i(),w.current&&clearTimeout(w.current),v.current&&clearInterval(v.current),R.current.forEach(function(s){s.cancel()}),R.current.clear(),I.current=!1}},[q,T]),e.jsxs("div",{ref:p,className:"galaxy-star-background ".concat(F),style:C(C({},T),A),children:[e.jsx("div",{className:"galaxy-stars"}),e.jsx("div",{className:"galaxy-stars2"}),e.jsx("div",{className:"galaxy-stars3"}),g&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"galaxy-shooting-star right-to-left"}),e.jsx("div",{className:"galaxy-shooting-star top-to-bottom"})]})]})};const U="/PORTAFOLIO/assets/header-img-D0MzyEBQ.svg",Y=()=>{const o=!G(),c=["Si puedes imaginarlo, puedes programarlo","Innovación que impulsa tu futuro","Tecnología al servicio de tus ideas"],[d,m]=n.useState(""),[x,j]=n.useState(0),[u,g]=n.useState(0);return n.useEffect(()=>{const y=c[x];if(u<y.length){const F=setTimeout(()=>{m(f=>f+y[u]),g(u+1)},80);return()=>clearTimeout(F)}else{const F=setTimeout(()=>{m(""),g(0),j(f=>(f+1)%c.length)},2e3);return()=>clearTimeout(F)}},[u,x]),e.jsxs("div",{className:"min-h-screen bg-transparent relative",children:[e.jsx(Q,{starCount1:200,starCount2:60,starCount3:20,enableShootingStars:!1,style:{position:"fixed",inset:0,zIndex:0}}),e.jsxs(a.section,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,ease:"easeOut"},className:"relative min-h-[90vh] flex items-center z-10",children:[e.jsxs("div",{className:"grid max-w-7xl mx-auto items-center gap-12 py-16 px-6 md:px-12 lg:px-20 lg:grid-cols-2",children:[e.jsxs(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2,duration:.6},className:"space-y-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsx(a.h1,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.3,duration:.5},className:"text-4xl font-bold leading-[1.15] tracking-tight text-base-content sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl min-h-[8rem] sm:min-h-[10rem] md:min-h-[12rem]",children:e.jsx("span",{className:"bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient",children:d||" "})}),e.jsx(a.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.4,duration:.5},className:"text-lg md:text-xl text-white/80 max-w-xl leading-relaxed",children:"Equipo especializado en desarrollo web, aplicaciones móviles y consultoría tecnológica. Convertimos tus ideas en productos digitales excepcionales."})]}),e.jsxs(a.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.5,duration:.5},className:"flex flex-wrap gap-4",children:[e.jsxs(M,{to:"/proyectos",className:"btn btn-lg px-8 bg-gradient-to-r from-primary to-secondary text-white border-0 shadow-xl hover:scale-105 transition-all duration-200",children:[e.jsx(V,{}),"Ver Proyectos"]}),e.jsxs(M,{to:"/programadores",className:"btn btn-lg glass px-8 border-white/20 text-white hover:scale-105 transition-all duration-200",children:[e.jsx(P,{}),"Nuestro Equipo"]})]}),e.jsxs(a.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.6,duration:.5},className:"flex flex-wrap gap-8 pt-4 text-white",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"text-3xl font-bold text-primary",children:"15+"}),e.jsx("div",{className:"text-sm text-white/70",children:"Proyectos"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"text-3xl font-bold text-secondary",children:"20+"}),e.jsx("div",{className:"text-sm text-white/70",children:"Clientes"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(O,{className:"text-yellow-400 fill-yellow-400 text-3xl"}),e.jsx("div",{className:"text-3xl font-bold text-yellow-400",children:"5.0"})]}),e.jsx("div",{className:"text-sm text-white/70",children:"Valoración"})]})]})]}),e.jsx(a.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.4,duration:.6,ease:"easeOut"},className:"relative",children:e.jsxs("div",{className:"relative aspect-square w-full max-w-md mx-auto lg:max-w-full",children:[e.jsx(a.div,{animate:o?{y:[0,-15,0]}:void 0,transition:o?{duration:8,repeat:1/0,ease:"linear"}:void 0,className:"relative z-10 flex h-full items-center justify-center",style:{willChange:"transform"},children:e.jsx("img",{src:U,alt:"Developer Illustration",loading:"eager",decoding:"async",className:"w-full max-w-2xl drop-shadow-xl"})}),e.jsx(a.div,{animate:o?{y:[0,-20,0]}:void 0,transition:o?{duration:12,repeat:1/0,ease:"linear"}:void 0,className:"absolute left-4 top-12 h-20 w-20 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 opacity-40 shadow-lg",style:{willChange:"transform"}}),e.jsx(a.div,{animate:o?{y:[0,25,0]}:void 0,transition:o?{duration:14,repeat:1/0,ease:"linear",delay:2}:void 0,className:"absolute right-8 top-20 h-16 w-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 opacity-40 shadow-lg",style:{willChange:"transform"}})]})})]}),e.jsx(a.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:.5},className:"absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70",children:e.jsxs("a",{href:"#about",className:"flex flex-col items-center gap-2 hover:text-white transition-colors",children:[e.jsx("span",{className:"text-sm",children:"Conocer más"}),e.jsx(a.div,{animate:o?{y:[0,8,0]}:void 0,transition:{duration:1.5,repeat:1/0},children:e.jsx(B,{className:"h-6 w-6"})})]})})]}),e.jsx("section",{id:"about",className:"px-6 py-32 md:px-12 lg:px-20 relative z-10",children:e.jsx("div",{className:"container mx-auto max-w-6xl",children:e.jsxs(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center space-y-12",children:[e.jsxs("div",{className:"space-y-8",children:[e.jsxs(a.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},className:"inline-flex items-center gap-3 transition-all duration-300",children:[e.jsx(O,{className:"text-primary text-2xl"}),e.jsx("span",{className:"text-base font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",children:"Sobre Nosotros"})]}),e.jsxs(a.h2,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-4xl font-bold md:text-5xl lg:text-6xl text-base-content",children:["Conoce a"," ",e.jsx("span",{className:"bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient",children:"LEXISWARE"})]})]}),e.jsx(a.p,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},className:"text-xl leading-relaxed text-base-content md:text-2xl max-w-3xl mx-auto font-medium",children:"Somos un equipo de desarrolladores apasionados que combinan creatividad, experiencia técnica y las últimas tecnologías para crear productos digitales que impulsan el crecimiento de tu negocio."}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-12 pt-8",children:[e.jsx(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1},whileHover:{scale:1.03},className:"p-8 transition-transform duration-200 rounded-3xl bg-base-100 border border-base-content/20 shadow-xl",children:e.jsxs("div",{className:"flex flex-col items-center text-center space-y-4",children:[e.jsx("div",{className:"w-24 h-24 rounded-3xl bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center shadow-xl",children:e.jsx(V,{className:"text-5xl text-white"})}),e.jsx("h3",{className:"text-2xl font-bold text-base-content",children:"Desarrollo Web"}),e.jsx("p",{className:"text-base-content leading-relaxed font-medium",children:"Aplicaciones web modernas, rápidas y escalables con las últimas tecnologías"})]})}),e.jsx(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2},whileHover:{scale:1.03},className:"p-8 transition-transform duration-200 rounded-3xl bg-base-100 border border-base-content/20 shadow-xl",children:e.jsxs("div",{className:"flex flex-col items-center text-center space-y-4",children:[e.jsx("div",{className:"w-24 h-24 rounded-3xl bg-gradient-to-br from-secondary via-accent to-secondary flex items-center justify-center shadow-xl",children:e.jsx(P,{className:"text-5xl text-white"})}),e.jsx("h3",{className:"text-2xl font-bold text-base-content",children:"Equipo Experto"}),e.jsx("p",{className:"text-base-content leading-relaxed font-medium",children:"Desarrolladores full-stack con experiencia en múltiples tecnologías"})]})}),e.jsx(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.3},whileHover:{scale:1.03},className:"p-8 transition-transform duration-200 rounded-3xl bg-base-100 border border-base-content/20 shadow-xl",children:e.jsxs("div",{className:"flex flex-col items-center text-center space-y-4",children:[e.jsx("div",{className:"w-24 h-24 rounded-3xl bg-gradient-to-br from-accent via-primary to-accent flex items-center justify-center shadow-xl",children:e.jsx(D,{className:"text-5xl text-white"})}),e.jsx("h3",{className:"text-2xl font-bold text-base-content",children:"Entrega Rápida"}),e.jsx("p",{className:"text-base-content leading-relaxed font-medium",children:"Metodologías ágiles para entregas rápidas sin comprometer la calidad"})]})})]}),e.jsx("div",{className:"flex flex-wrap justify-center gap-4 pt-8",children:e.jsx(M,{to:"/agendar-asesoria",className:"btn btn-lg px-8 bg-gradient-to-r from-primary to-secondary text-white border-0 shadow-xl hover:scale-105 transition-all duration-200",children:"Solicitar Asesoría"})})]})})})]})};export{Y as default};
