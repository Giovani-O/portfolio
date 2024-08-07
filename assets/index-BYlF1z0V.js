import{d as i,R as r,j as t,u as l,a as n,S as c}from"./main-Mw6RRx6m.js";const d=i.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: -${e=>e.theme.layoutProperties["top-140"]};
`,p=i.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${e=>e.theme.colours.stroke};
`,m=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  h1 {
    font-size: ${e=>e.theme.fontSizes.xl};
    font-weight: ${e=>e.theme.fontWeights.bold};
  }

  p {
    font-size: ${e=>e.theme.fontSizes.xs};
    font-weight: ${e=>e.theme.fontWeights.regular};
    text-align: center;
    line-height: 1;
  }

  @media (max-width: 900px) {
    p {
      font-size: ${e=>e.theme.fontSizes.tag};
    }
  }
`,h=i.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
  /* top: -${e=>e.theme.layoutProperties["top-140"]}; */

  h2 {
    margin-block: 40px;
    text-align: center;
  }
`,g=i.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  width: 100%;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,x=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  width: 100%;
  height: 100px;
  border-radius: 16px;
  border: 1px solid ${e=>e.theme.colours.stroke};
  padding-block: 12px;
  padding-inline: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);

  transform: perspective(1000px) translateZ(0);
  transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;
  cursor: pointer;

  img {
    width: 48px;
    height: 48px;
  }

  h3 {
    font-size: ${e=>e.theme.fontSizes.sm};
    font-weight: ${e=>e.theme.fontWeights.medium};
  }

  &:hover {
    transform: perspective(1000px) translateZ(60px);
    background-color: rgba(30, 30, 30, 0.2);
  }

  @media (max-width: 600px) {
    background-color: ${e=>e.theme.colours["card-background-mobile"]};
    backdrop-filter: none;
  }
`,f=r.memo(function({image:e,title:o}){return t.jsxs(x,{children:[t.jsx("img",{src:e,alt:o,loading:"lazy"}),t.jsx("h3",{children:o})]})}),v="/portfolio/assets/dotnet-52rB5lhE.svg",u="/portfolio/assets/csharp-BOqQCzU6.svg",w="/portfolio/assets/entity-EkSv6FoU.svg",b="/portfolio/assets/xunit-DWTcThH5.svg",z="data:image/svg+xml,%3csvg%20height='271'%20preserveAspectRatio='xMidYMid'%20viewBox='0%200%20256%20271'%20width='256'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m245.44%20108.307692h-85.090462c-4.268307%200-7.734153-3.465846-7.734153-7.734154v-88.6793842c0-6.56738457-5.32677-11.8941538-11.889231-11.8941538h-30.375385c-6.567384%200-11.8892305%205.32676923-11.8892305%2011.8941538v88.1427692c0%204.573539-3.6972308%208.290462-8.2707693%208.310154l-27.8843077.132923c-4.612923.024615-8.3593846-3.716923-8.3495384-8.324923l.1723077-88.2412308c.0147692-6.57723082-5.312-11.9138462-11.8892308-11.9138462h-30.3507692c-6.56738465%200-11.8892308%205.32676923-11.8892308%2011.8941538v248.3150772c0%205.833846%204.72615385%2010.56%2010.5550769%2010.56h234.8849231c5.833846%200%2010.56-4.726154%2010.56-10.56v-141.341539c0-5.833846-4.726154-10.56-10.56-10.56zm-39.901538%2093.233231c0%207.645539-6.198154%2013.843692-13.843693%2013.843692h-24.004923c-7.645538%200-13.843692-6.198153-13.843692-13.843692v-24.004923c0-7.645538%206.198154-13.843692%2013.843692-13.843692h24.004923c7.645539%200%2013.843693%206.198154%2013.843693%2013.843692z'%20fill='%23f60'/%3e%3c/svg%3e",y="/portfolio/assets/react-_eSxKRj2.svg",C="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='256px'%20height='257px'%20viewBox='0%200%20256%20257'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20preserveAspectRatio='xMidYMid'%3e%3cdefs%3e%3clinearGradient%20x1='-0.828097821%25'%20y1='7.6518539%25'%20x2='57.6359644%25'%20y2='78.4107719%25'%20id='linearGradient-1'%3e%3cstop%20stop-color='%2341D1FF'%20offset='0%25'%3e%3c/stop%3e%3cstop%20stop-color='%23BD34FE'%20offset='100%25'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient%20x1='43.3760053%25'%20y1='2.24179788%25'%20x2='50.3158848%25'%20y2='89.0299051%25'%20id='linearGradient-2'%3e%3cstop%20stop-color='%23FFEA83'%20offset='0%25'%3e%3c/stop%3e%3cstop%20stop-color='%23FFDD35'%20offset='8.33333%25'%3e%3c/stop%3e%3cstop%20stop-color='%23FFA800'%20offset='100%25'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3cg%3e%3cpath%20d='M255.152904,37.937763%20L134.896865,252.97646%20C132.413943,257.416178%20126.035075,257.442321%20123.5149,253.02417%20L0.87443175,37.9584812%20C-1.87111536,33.1438084%202.24595371,27.3119153%207.70191187,28.2871109%20L128.086639,49.8052023%20C128.854587,49.9424525%20129.640835,49.9411454%20130.408783,49.8012155%20L248.276014,28.3179595%20C253.713738,27.3268821%20257.850198,33.1136134%20255.152904,37.937763%20Z'%20fill='url(%23linearGradient-1)'%3e%3c/path%3e%3cpath%20d='M185.432401,0.0631038902%20L96.4393502,17.500942%20C94.9766549,17.7875335%2093.8936852,19.0270992%2093.8054529,20.5146956%20L88.3311293,112.971419%20C88.2023755,115.149123%2090.2023075,116.839261%2092.3277254,116.349082%20L117.10466,110.630976%20C119.422882,110.096354%20121.517582,112.138114%20121.041128,114.469407%20L113.67994,150.515893%20C113.184532,152.941955%20115.462232,155.016394%20117.831433,154.29681%20L133.134834,149.647295%20C135.507302,148.927059%20137.786963,151.00738%20137.285019,153.435402%20L125.586724,210.056351%20C124.854723,213.598061%20129.565674,215.529368%20131.530313,212.49287%20L132.842687,210.464834%20L205.359174,65.745575%20C206.573511,63.3224548%20204.479465,60.5594769%20201.818118,61.0730542%20L176.31441,65.9952397%20C173.91776,66.4573155%20171.878614,64.2253653%20172.555061,61.8805431%20L189.2009,4.17570253%20C189.878001,1.82692623%20187.831665,-0.406957894%20185.432401,0.0631038902%20Z'%20fill='url(%23linearGradient-2)'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",j="/portfolio/assets/zustand-Dx3V9LFA.png",k="/portfolio/assets/styled-components-7iWqKwyE.png",L="data:image/svg+xml,%3csvg%20viewBox='0%200%2019%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m14.8%200h3.7l-9.25%2015.95625-9.25-15.95625h7.07625l2.17375%203.7%202.1275-3.7z'%20fill='%2341b883'/%3e%3cpath%20d='m0%200%209.25%2015.95625%209.25-15.95625h-3.7l-5.55%209.57375-5.59625-9.57375z'%20fill='%2341b883'/%3e%3cpath%20d='m3.65375%200%205.59625%209.62%205.55-9.62h-3.4225l-2.1275%203.7-2.17375-3.7z'%20fill='%2335495e'/%3e%3c/svg%3e",F="data:image/svg+xml,%3csvg%20height='293'%20preserveAspectRatio='xMidYMid'%20viewBox='0%200%20256%20293'%20width='256'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m128%200h-60l60%20141.816367'%20fill='%231697f6'/%3e%3cpath%20d='m128%200h60l-60%20141.816367'%20fill='%231867c0'/%3e%3cpath%20d='m128%20182.743732v109.715707l-128-249.9019196h67.0490402'%20fill='%237bc6ff'/%3e%3cpath%20d='m128%20182.746214v109.715707l128-249.9019196h-67.04904'%20fill='%23aeddff'/%3e%3c/svg%3e",M="/portfolio/assets/mysql-CaCfDWQD.svg",B="/portfolio/assets/sqlserver-obUAXWjW.png",S="/portfolio/assets/mongo-Ba6TWEv4.svg",s="data:image/svg+xml,%3csvg%20height='185'%20preserveAspectRatio='xMidYMid'%20viewBox='0%200%20256%20185'%20width='256'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m250.715745%2070.4971666c-5.764643-3.9998389-18.975281-5.4997786-29.303599-3.4998595-1.200967-9.9995979-6.725416-18.7492462-16.333153-26.4989347l-5.524449-3.9998393-3.843095%205.7497689c-4.803869%207.4996986-7.205803%2017.9992766-6.485223%2027.9988749.240194%203.4998595%201.441161%209.7496078%205.044063%2015.2493871-3.362709%201.9999198-10.328318%204.499819-19.455668%204.499819h-173.65985102l-.48038688%201.9999198c-1.68135403%209.9995972-1.68135403%2041.2483422%2018.0145073%2065.2473782%2014.8919927%2018.249266%2036.9897884%2027.498894%2066.0531938%2027.498894%2062.9306788%200%20109.5282048-30.248784%20131.3858068-84.9965841%208.646963.2499904%2027.141857%200%2036.509401-18.7492459.240194-.4999801.72058-1.4999404%202.401935-5.2497896l.960773-1.999919zm-110.729172-70.4971666h-26.421278v24.9989952h26.421278zm0%2029.9987943h-26.421278v24.9989953h26.421278zm-31.225146%200h-26.4212775v24.9989953h26.4212775zm-31.2251456%200h-26.4212777v24.9989953h26.4212777zm-31.2251464%2029.9987943h-26.4212774v24.9989953h26.4212774zm31.2251464%200h-26.4212777v24.9989953h26.4212777zm31.2251456%200h-26.4212775v24.9989953h26.4212775zm31.225146%200h-26.421278v24.9989953h26.421278zm31.225146%200h-26.421278v24.9989953h26.421278z'%20fill='%232396ed'/%3e%3c/svg%3e",$=[{title:".NET 8",image:v},{title:"C#",image:u},{title:"Entity Framework",image:w},{title:"xUnit",image:b},{title:"RabbitMQ",image:z},{title:"React",image:y},{title:"Vite",image:C},{title:"Zustand",image:j},{title:"Styled Components",image:k},{title:"Vue.js",image:L},{title:"Vuetify",image:F},{title:"MySQL",image:M},{title:"SQL Server",image:B},{title:"MongoDB",image:S},{title:"Docker",image:s},{title:"Docker Compose",image:s}];function G(){const{t:e}=l();return t.jsxs("div",{id:"about",children:[t.jsxs(d,{children:[t.jsx(p,{src:n,alt:"Foto de Giovani de Oliveira",loading:"lazy"}),t.jsxs(m,{children:[t.jsx("h1",{children:e("greetings")}),t.jsx("p",{children:e("greetings-description")}),t.jsx(c,{})]})]}),t.jsxs(h,{children:[t.jsx("h2",{children:e("tools")}),t.jsx(g,{children:$.map((o,a)=>t.jsx(f,{image:o.image,title:e(o.title)},a))})]})]})}export{G as default};
