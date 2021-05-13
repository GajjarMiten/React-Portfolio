import{W as e,$ as t,A as n,q as a,r as l,G as r,a as i}from"./vendor.cda64441.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,r)=>{const i=new URL(e,a);if(self[t].moduleMap[i])return n(self[t].moduleMap[i]);const o=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){r(new Error(`Failed to import: ${e}`)),l(c)},onload(){n(self[t].moduleMap[i]),l(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/assets/");const o=e`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`,c=t`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
   
    ::-webkit-scrollbar {
        display: none; 
     }
     .bounce{
         animation-name:${e`  
from {
 transform: scale3d(1, 1, 1);
}

30% {
 transform: scale3d(1.25, 0.75, 1);
}

40% {
 transform: scale3d(0.75, 1.25, 1);
}

50% {
 transform: scale3d(1.15, 0.85, 1);
}

65% {
 transform: scale3d(.95, 1.05, 1);
}

75% {
 transform: scale3d(1.05, .95, 1);
}

to {
 transform: scale3d(1, 1, 1);
}
`};
     }
     .bounceIn{
        animation-name: ${e`
 0%   { transform: scale(1,1)      translateY(0);opacity:0; }
 10%  { transform: scale(1.1,.9)   translateY(0); }
 30%  { transform: scale(.9,1.1)   translateY(-14px); }
 50%  { transform: scale(1.05,.95) translateY(0);}
 57%  { transform: scale(1,1)      translateY(-7px);}
 64%  { transform: scale(1,1)      translateY(0); }
 100% { transform: scale(1,1)      translateY(0);opacity:1;}
`};
        animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
     }
    
   
`,s={midColor:"#cf8bf3",textColor:"#fdb99b",primaryColor:"#252627",iconColor:"#838383",accentColor:"#a770ef",navBackGround:"#181818",navbarWidth:"80px",headingColor:"white",headingLG:"5rem",headingMD:"3rem",headingSM:"2rem",textLG:"1.5rem",textMD:"1.3rem",textSM:"1rem"},m=n`
    display: flex;
    flex-direction: column;
`,d=n`
    display: flex;
    align-items: center;
    justify-content: center;
`;const u=a.nav`
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    width: ${({theme:e})=>e.navbarWidth};
    background: ${({theme:e})=>e.navBackGround};
`,p=a.a.attrs({href:"/"})`
    text-decoration: none;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    & img {
        height: 100%;
        width: 100%;
    }
`,h=a.a.attrs({href:"1#"})`
    ${d};
    text-decoration: none;
    color: ${({theme:e})=>e.iconColor};
    height: 40px;
    width: 100%;
    &.active {
        color: ${({theme:e})=>e.accentColor};
    }
    i {
        font-size: 2.6rem;
    }
    p {
        font-size: 1.0rem;
        display: none;
    }
    &:hover {
        i {
            display: none;
        }
        p {
            color: ${({theme:e})=>e.accentColor};
            display: block;
        }
    }
`,f=a.ul`
    ${m};
    align-items: center;
    width: 100%;
    gap: 2rem;
`,g=a(f)`
    max-height: 150px;
    gap: 4px;
`,E=a(h)`
    i {
        font-size: 1.6rem;
    }
    &:hover {
        i {
            display: block;
            color: ${({theme:e})=>e.accentColor};
        }
    }
`,x=()=>l.createElement(u,null,l.createElement(p,null,l.createElement("img",{src:"/assets/favicon.6a5f823a.png",alt:"logo"})),l.createElement(f,null,l.createElement(h,{className:"active"},l.createElement("i",{className:"las la-home"}),l.createElement("p",null,"HOME")),l.createElement(h,null,l.createElement("i",{className:"las la-user-circle"}),l.createElement("p",null,"ABOUT")),l.createElement(h,null,l.createElement("i",{className:"las la-cog"}),l.createElement("p",null,"SKILLS")),l.createElement(h,null,l.createElement("i",{className:"las la-trophy"}),l.createElement("p",null,"WORK")),l.createElement(h,null,l.createElement("i",{className:"las la-envelope"}),l.createElement("p",null,"CONTACT"))),l.createElement(g,null,l.createElement(E,null,l.createElement("i",{className:"lab la-github"})),l.createElement(E,null,l.createElement("i",{className:"lab la-twitter"})),l.createElement(E,null,l.createElement("i",{className:"lab la-linkedin"})),l.createElement(E,null,l.createElement("i",{className:"lab la-telegram"})),l.createElement(E,null,l.createElement("i",{className:"lab la-instagram"}))));a.circle`
    opacity: ${1};
    animation: ${o} 3s linear infinite alternate;
`;const v=a.div`
    position: relative;
    height: 100%;
    width: 100%;
    /* overflow:hidden */
`,w=a(v).attrs({id:"container"})`
    position: absolute;
    top: 0;
    left: 0;
    overflow: scroll;
    z-index: 10;
`,y=e=>{const[t,n]=l.useState([]);return l.createElement(v,null,l.createElement("svg",{height:"100%",width:"100%",style:{position:"absolute",top:"0",left:"0",zIndex:0}},t),l.createElement(w,null,e.children))},b=a.span.attrs({className:"word"})`
    display: inline-block;
    font-weight: "bold";
    font-size: ${({theme:e})=>e.headingLG};
    color: ${({color:e})=>e};
    font-family: "Fredoka One", cursive;
    /* margin: 0 4px; */
    opacity: 0;
    transition: transform 0.3s ease-out;
    animation-duration: 1s;
    animation-direction: both;
    animation-fill-mode: forwards;
    &:hover {
        cursor: pointer;
        color: ${({theme:e})=>e.accentColor};
    }
`,z=({text:e,offset:t=0,index:n=-1})=>{const a=()=>{const e=document.querySelectorAll(".word");let n=300;e.forEach((e=>{var a;(null==(a=e.parentElement)?void 0:a.id)===t.toString()&&(setTimeout((()=>{e.style.opacity="1",e.classList.add("bounceIn")}),n),n+=200)}))};return l.useEffect((()=>{const e=document.getElementById(t.toString());e.getBoundingClientRect().top<700&&200===t&&a();return document.getElementById("container").addEventListener("scroll",(n=>{n.target,e.getBoundingClientRect().top<700&&t>200&&a()})),()=>{const e=document.getElementById("container"),t=e.cloneNode(!0);e.parentNode.replaceChild(t,e)}}),[]),l.createElement("span",{id:t.toString()},Array.from({length:e.length},((t,a)=>{let r="white";return a===n&&(r=s.accentColor,console.log(r)),l.createElement(b,{onClick:e=>{e.currentTarget.classList.remove("bounceIn"),e.currentTarget.classList.add("bounce")},onMouseEnter:e=>{e.currentTarget.classList.remove("bounceIn"),e.currentTarget.classList.add("bounce")},onAnimationEnd:e=>{e.animationName,e.currentTarget.classList.remove("bounce")},key:a,color:r},e.charAt(a))})))},$=a.section`
    min-height: 100vh;
    min-width: 100%;
    padding: 0 100px;
    display: flex;
    flex-direction: column;
    /* border: solid 2px white; */
`,C=a.p`
    color: ${({theme:e})=>e.textColor};
    font-size: ${({theme:e})=>e.textLG};
    font-family: "Mali", sans-serif;
`,L=a.div`
    border-bottom: ${({theme:e})=>`dashed 2px ${e.accentColor}`};
`,M=a.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    min-height: 400px;
    min-width: 500px;
    position: relative;
    flex-direction: column;
`;a.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    border-radius: 10px;
    left: 0;
    background: rgba(255, 255, 255, 0.1);
    z-index: 2;
    /* filter: blur(px); */
`;const I=()=>l.createElement($,null,l.createElement(M,null,l.createElement(C,{style:{fontSize:"4rem"}},"Hi,"),l.createElement(z,{text:"I'm Miten,",offset:200,index:4}),l.createElement(C,{style:{fontSize:"4rem"}},"On a way to be creative."),l.createElement(C,null,"I am self-taught, independent developer from"),l.createElement(C,null,"Gujarat, India.")));const k=a.img.attrs({id:"profile"})`
    max-width: 400px;
    max-height: 400px;
    border-radius: 50%;
    transform: translateX(200%);
    transition: all 2s ease;
    opacity: 0;
`,B=()=>(l.useEffect((()=>{const e=document.getElementById("container"),t=document.getElementById("profile");return e.addEventListener("scroll",(()=>{t.getBoundingClientRect().top<700&&(t.style.transform="translateX(0)",t.style.opacity="1")})),()=>{}}),[]),l.createElement(k,{src:"/assets/me.22e808e8.jpg",loading:"lazy",alt:"profile"})),S=a.div`
    flex: 1;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-template-rows: 1fr; */
    place-content: center;
    place-items: center;
`,N=a.div`
    ${d}
    flex-direction:column;
    max-width: 50vw;
    /* text-align: center; */
`,j=()=>l.createElement($,null,l.createElement(L,null,l.createElement(z,{text:"About Me",offset:400}),l.createElement("p",null," "),l.createElement("p",null," "),l.createElement("p",null," ")),l.createElement(S,null,l.createElement(N,null,l.createElement(C,null,"Hey Folks👋! I am Miten Gajjar. A 20years old Software Engineer powered by coffee and VS Code and weeb who loves anime and gaming. I am new to community so I prefer to keep learning, continue challenging myself, and do interesting things. I am passionate about building excellent web and mobile apps that improves the lives of people around me.")),l.createElement(B,null))),q=a.div`
    flex: 1;
    height: 100%;
    width: 100%;
    ${m};
`,R=a.div`
    flex: 1;
    position: relative;
    height: 100%;
    width: 100%;
    ${m};
    /* justify-content: center; */
`,T=a.div`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`,G=a.div.attrs({id:"parallex-wrapper"})`
    position: absolute;
    z-index: 2;
    flex: 1;
    height: 100%;
    width: 100%;
    transition: all 0.1s linear;
    display: flex;
`,A=a.div.attrs({id:"parallex"})`
    position: relative;
    height: 100%;
    width: 100%;
`,O=a.p`
    position: absolute;
    top: ${({y:e})=>`${e}%`};
    left: ${({x:e})=>`${e}%`};
    opacity: 0.5;
    font-weight: bold;
    font-family: "Mali", sans-serif;
    color: ${({theme:e})=>e.accentColor};
    font-size: ${({size:e})=>`${e}rem`};
`;a.img`
    height: 150px;
    width: 150px;
`;const U=()=>(l.useEffect((()=>{const e=document.getElementById("parallex-wrapper"),t=document.getElementById("parallex");let n=0,a=0;return e.addEventListener("mousemove",(e=>{let l=window.innerWidth/2,r=window.innerHeight/2;n=10-.03*(e.clientX-l),a=10-.03*(e.clientY-r),t.style.transform=`translate3d(${n}px,${a}px,0)`})),()=>{}}),[]),l.createElement($,null,l.createElement(L,null,l.createElement(z,{text:"Skills",offset:500}),l.createElement("p",null," "),l.createElement("p",null," "),l.createElement("p",null," ")),l.createElement(q,null,l.createElement(C,{style:{marginTop:"2rem"}},"I spent my most of time by creating UI and Interfaces for websites & applications. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt a, cumque reprehenderit quaerat placeat fugiat maxime enim autem. Ipsam veritatis alias magnam temporibus harum, cupiditate at? Eveniet inventore ducimus hic. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore recusandae est doloremque cupiditate. Blanditiis ea corrupti, similique praesentium necessitatibus minus tempore asperiores quo nobis eaque architecto, cum qui, inventore maxime. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit id molestias et a, optio veritatis tempora tenetur minima veniam sapiente sed consequuntur quae praesentium perspiciatis incidunt, magnam obcaecati quo labore?"),l.createElement(R,null,l.createElement(G,null,l.createElement(A,null,l.createElement(O,{x:5,y:10,size:2},"Dart"),l.createElement(O,{x:85,y:20,size:1.8},"CSS"),l.createElement(O,{x:50,y:80,size:1},"HTML"),l.createElement(O,{x:40,y:10,size:2},"Flutter"),l.createElement(O,{x:75,y:70,size:1.3},"Firebase"),l.createElement(O,{x:12,y:74,size:1},"MongoDB"),l.createElement(O,{x:25,y:50,size:1.6},"Figma"),l.createElement(O,{x:70,y:30,size:1},"Gatsby"))),l.createElement(T,null,l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"150",height:"150",viewBox:"0 0 32 32"},l.createElement("g",{transform:"matrix(.05696 0 0 .05696 .647744 2.43826)",fill:"none",fillRule:"evenodd"},l.createElement("circle",{r:"50.167",cy:"237.628",cx:"269.529",fill:"#a770ef"}),l.createElement("g",{stroke:"#a770ef",strokeWidth:"24"},l.createElement("path",{d:"M269.53 135.628c67.356 0 129.928 9.665 177.107 25.907 56.844 19.57 91.794 49.233 91.794 76.093 0 27.99-37.04 59.503-98.083 79.728-46.15 15.29-106.88 23.272-170.818 23.272-65.554 0-127.63-7.492-174.3-23.44-59.046-20.182-94.61-52.103-94.61-79.56 0-26.642 33.37-56.076 89.415-75.616 47.355-16.51 111.472-26.384 179.486-26.384z"}),l.createElement("path",{d:"M180.736 186.922c33.65-58.348 73.28-107.724 110.92-140.48C337.006 6.976 380.163-8.48 403.43 4.937c24.248 13.983 33.042 61.814 20.067 124.796-9.8 47.618-33.234 104.212-65.176 159.6-32.75 56.788-70.25 106.82-107.377 139.272-46.98 41.068-92.4 55.93-116.185 42.213-23.08-13.3-31.906-56.92-20.834-115.233 9.355-49.27 32.832-109.745 66.8-168.664z"}),l.createElement("path",{d:"M180.82 289.482C147.075 231.2 124.1 172.195 114.51 123.227c-11.544-59-3.382-104.11 19.864-117.566 24.224-14.024 70.055 2.244 118.14 44.94 36.356 32.28 73.688 80.837 105.723 136.173 32.844 56.733 57.46 114.21 67.036 162.582 12.117 61.213 2.31 107.984-21.453 121.74-23.057 13.348-65.25-.784-110.24-39.5-38.013-32.71-78.682-83.253-112.76-142.115z"})))),l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"150",height:"150",viewBox:"0 0 32 32",preserveAspectRatio:"xMidYMid",fill:"#a770ef"},l.createElement("path",{d:"M14.656.427c.8-.453 1.82-.455 2.6 0L29.2 7.16c.747.42 1.247 1.253 1.24 2.114v13.5c.005.897-.544 1.748-1.332 2.16l-11.88 6.702a2.6 2.6 0 0 1-2.639-.073l-3.565-2.06c-.243-.145-.516-.26-.688-.495.152-.204.422-.23.642-.32.496-.158.95-.4 1.406-.656.115-.08.256-.05.366.022l3.04 1.758c.217.125.437-.04.623-.145l11.665-6.583c.144-.07.224-.222.212-.38V9.334c.016-.18-.087-.344-.25-.417L16.19 2.244a.41.41 0 0 0-.465-.001L3.892 8.93c-.16.073-.27.235-.25.415v13.37c-.014.158.07.307.215.375l3.162 1.785c.594.32 1.323.5 1.977.265a1.5 1.5 0 0 0 .971-1.409l.003-13.29c-.014-.197.172-.36.363-.34h1.52c.2-.005.357.207.33.405L12.18 23.88c.001 1.188-.487 2.48-1.586 3.063-1.354.7-3.028.553-4.366-.12l-3.4-1.88c-.8-.4-1.337-1.264-1.332-2.16v-13.5a2.46 2.46 0 0 1 1.282-2.141L14.656.427zM18.1 9.785c1.727-.1 3.576-.066 5.13.785 1.203.652 1.87 2.02 1.892 3.358-.034.18-.222.28-.394.267-.5-.001-1.002.007-1.504-.003-.213.008-.336-.188-.363-.376-.144-.64-.493-1.273-1.095-1.582-.924-.463-1.996-.44-3.004-.43-.736.04-1.527.103-2.15.535-.48.328-.624 1-.453 1.522.16.383.603.506.964.62 2.082.544 4.287.5 6.33 1.207.845.292 1.672.86 1.962 1.745.378 1.186.213 2.604-.63 3.556-.684.784-1.68 1.2-2.675 1.442-1.323.295-2.695.302-4.038.17-1.263-.144-2.577-.476-3.552-1.336-.834-.724-1.24-1.852-1.2-2.94.01-.184.193-.312.37-.297h1.5c.202-.014.35.16.36.35.093.6.322 1.25.854 1.6 1.026.662 2.313.616 3.487.635.973-.043 2.065-.056 2.86-.7.42-.367.543-.98.43-1.508-.123-.446-.6-.653-1-.8-2.055-.65-4.285-.414-6.32-1.15-.826-.292-1.625-.844-1.942-1.693-.443-1.2-.24-2.687.693-3.607.9-.915 2.22-1.268 3.47-1.394z"})),l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",transform:"scale(2.34)"},l.createElement("path",{d:"M55.094 35.56c-2.238.013-4.175.55-5.8 1.35-.6-1.188-1.2-2.225-1.3-3-.113-.9-.25-1.45-.113-2.525s.763-2.6.763-2.725c-.012-.113-.138-.663-1.425-.675s-2.4.25-2.525.588a14.36 14.36 0 0 0-.538 1.913c-.225 1.175-2.575 5.338-3.913 7.526-.438-.85-.813-1.6-.888-2.2-.113-.9-.25-1.45-.113-2.525s.763-2.6.763-2.725c-.012-.113-.138-.663-1.425-.675s-2.4.25-2.525.588-.263 1.138-.538 1.913c-.263.775-3.388 7.726-4.2 9.538-.413.925-.775 1.663-1.038 2.163s-.012.038-.037.088l-.35.663v.012c-.175.313-.363.613-.45.613-.062 0-.188-.838.025-1.988.463-2.413 1.588-6.176 1.575-6.313 0-.062.213-.725-.725-1.063-.913-.338-1.238.225-1.313.225s-.138.2-.138.2 1.013-4.238-1.938-4.238c-1.85 0-4.4 2.013-5.663 3.85l-6.376 3.488-.138-.15C11.178 35.66 4.565 32.96 4.84 27.835c.1-1.863.75-6.776 12.7-12.726 9.788-4.875 17.627-3.538 18.99-.563 1.938 4.25-4.188 12.15-14.364 13.29-3.875.438-5.913-1.063-6.426-1.625-.538-.588-.613-.613-.813-.5-.325.175-.125.7 0 1.013.3.788 1.55 2.188 3.675 2.888 1.863.613 6.413.95 11.914-1.175 6.163-2.388 10.976-9.013 9.563-14.55-1.438-5.638-10.788-7.488-19.627-4.35C15.19 11.41 9.5 14.334 5.4 18.172.515 22.722-.26 26.698.064 28.348c1.138 5.888 9.25 9.726 12.5 12.564l-.45.25c-1.625.8-7.813 4.038-9.363 7.463-1.75 3.875.275 6.663 1.625 7.038 4.175 1.163 8.45-.925 10.763-4.363 2.3-3.438 2.025-7.9.963-9.938l-.038-.075 1.275-.75c.825-.488 1.638-.938 2.35-1.325-.4 1.088-.688 2.375-.838 4.25-.175 2.2.725 5.05 1.913 6.176.525.488 1.15.5 1.538.5 1.375 0 2-1.138 2.688-2.5.85-1.663 1.6-3.588 1.6-3.588s-.938 5.213 1.625 5.213c.938 0 1.875-1.213 2.3-1.838v.012s.025-.038.075-.125c.1-.15.15-.238.15-.238v-.025c.375-.65 1.213-2.138 2.463-4.6 1.613-3.175 3.163-7.15 3.163-7.15s.15.975.613 2.575c.275.95.875 1.988 1.338 3l-.6.825.012.013a35.62 35.62 0 0 1-.988 1.25c-1.275 1.525-2.8 3.263-3 3.763-.238.588-.188 1.025.275 1.375.338.25.938.3 1.575.25 1.15-.075 1.95-.363 2.35-.538a8.14 8.14 0 0 0 2.025-1.063c1.25-.925 2.013-2.238 1.938-3.988-.038-.963-.35-1.913-.738-2.813l.338-.5c1.975-2.888 3.5-6.063 3.5-6.063s.15.975.613 2.575c.238.813.713 1.7 1.138 2.575-1.85 1.513-3.013 3.263-3.413 4.413-.738 2.125-.163 3.088.925 3.313.488.1 1.188-.125 1.713-.35.65-.213 1.438-.575 2.163-1.113 1.25-.925 2.45-2.213 2.388-3.95-.038-.8-.25-1.588-.538-2.338 1.575-.65 3.613-1.025 6.2-.713 5.563.65 6.663 4.125 6.45 5.575s-1.375 2.25-1.763 2.5c-.388.238-.513.325-.475.5.05.263.225.25.563.2.463-.075 2.925-1.188 3.025-3.863.15-3.438-3.113-7.188-8.9-7.15zM12.19 50.025c-1.838 2.013-4.425 2.775-5.525 2.125-1.188-.688-.725-3.65 1.538-5.788 1.375-1.3 3.163-2.5 4.338-3.238l1.138-.688c.075-.05.125-.075.125-.075.088-.05.188-.113.288-.175.838 3.05.038 5.725-1.9 7.838zm13.44-9.138c-.638 1.563-1.988 5.575-2.8 5.35-.7-.188-1.125-3.225-.138-6.226.5-1.513 1.563-3.313 2.188-4.013 1.013-1.125 2.113-1.5 2.388-1.038.325.6-1.238 4.95-1.638 5.926zm11.088 5.3c-.275.138-.525.238-.638.163-.088-.05.113-.238.113-.238s1.388-1.488 1.938-2.175l1.088-1.388v.15c0 1.8-1.725 3-2.5 3.488zm8.55-1.95c-.2-.15-.175-.613.5-2.063.263-.575.863-1.538 1.9-2.45.125.375.2.738.188 1.075-.013 2.25-1.613 3.088-2.588 3.438z",fill:"#a770ef"})),l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",transform:"scale(2.34)"},l.createElement("path",{d:"M0 32v32h64.002V-.002H0zm51.577-2.55c1.625.406 2.865 1.128 4.003 2.306.59.63 1.463 1.778 1.534 2.052.02.08-2.763 1.95-4.45 2.997-.06.04-.305-.223-.58-.63-.823-1.2-1.686-1.717-3.007-1.808-1.94-.132-3.2.884-3.18 2.58 0 .498.07.792.274 1.2.427.884 1.22 1.412 3.708 2.49 4.582 1.97 6.542 3.27 7.76 5.12 1.36 2.062 1.666 5.354.742 7.802-1.016 2.662-3.535 4.47-7.08 5.07-1.097.193-3.698.163-4.876-.05-2.57-.457-5.008-1.727-6.512-3.393-.59-.65-1.737-2.347-1.666-2.47.03-.04.295-.203.59-.376l2.377-1.37 1.84-1.067.386.57c.538.823 1.717 1.95 2.428 2.326 2.042 1.077 4.846.924 6.227-.315.59-.538.833-1.097.833-1.92 0-.742-.09-1.067-.477-1.625-.498-.71-1.514-1.31-4.4-2.56-3.302-1.422-4.724-2.306-6.024-3.708-.752-.813-1.463-2.113-1.758-3.2-.244-.904-.305-3.17-.112-4.084.68-3.2 3.088-5.415 6.563-6.075 1.128-.213 3.75-.132 4.856.142zM36.552 32.12l.02 2.62h-8.33v23.67H22.35v-23.67h-8.33v-2.57l.07-2.64c.03-.04 5.1-.06 11.246-.05l11.185.03z",fill:"#a770ef"}))))))),Y=a.a.attrs({href:"mailto:miten3377@gmail.com"})`
    text-decoration: none;
    color: white;
    display: inline-block;
    position: fixed;
    bottom: 250px;
    right: -20px;
    transform: rotateZ(90deg);
    z-index: 100;
    font-size: 1.2rem;
    font-family: "Mali", sans-serif;
    transition: all 0.2s ease-in;
    &:hover {
        color: ${({theme:e})=>e.textColor};
        transform: rotateZ(90deg) translateX(-20px);
    }
    &::after {
        position: absolute;
        top: 50%;
        transform: translateX(20px);
        content: "";
        height: 4px;
        width: 300px;
        border: solid 1px white;
    }
`,F=()=>l.createElement(Y,null,"miten3377@gmail.com"),H=()=>l.createElement($,{style:{border:"solid 1px white"}}),W=a.main`
    height: 100vh;
    width: 100vw;
    display: grid;
    background-color: ${({theme:e})=>e.primaryColor};
    grid-template-columns: ${({theme:e})=>e.navbarWidth} auto;
`,X=()=>l.createElement(l.Fragment,null,l.createElement(c,null),l.createElement(r,{theme:s},l.createElement(W,null,l.createElement(x,null),l.createElement(y,null,l.createElement(I,null),l.createElement(j,null),l.createElement(U,null),l.createElement(H,null)),l.createElement(F,null))));i.render(l.createElement(X,null),document.getElementById("root"));
