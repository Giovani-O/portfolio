import{d as o,B as h,c as g,u as a,r as d,P as m,j as t,e as l}from"./main-Cli0WMd6.js";const x=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin-block: 80px 40px;
`,u=o.h1`
  font-size: ${e=>e.theme.fontSizes.xl};
  font-weight: ${e=>e.theme.fontWeights.bold};
  text-align: center;
`,f=o.p`
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.regular};
  text-align: center;

  @media (max-width: ${h}px) {
    font-size: ${e=>e.theme.fontSizes.tag};
  }
`;o.div`
  animation: slide-up 0.8s ease-out forwards;

  @keyframes slide-up {
    from {
      transform: translateY(15%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;const b=o.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: ${g}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,k=o.div`
  display: flex;
  justify-content: center;
  margin-block: 24px;
`,y=o.button`
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: ${e=>e.theme.colours.white};
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: ${e=>e.theme.fontWeights.medium};
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`,w=o.div`
  background: ${e=>e.theme.colours["card-background-mobile"]};
  border-radius: 8px;
  overflow: hidden;
`,v=o.div`
width: 100%;
height: 180px;

@media (min-width: 600px) {
  height: 220px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`,j=o.div`
  padding: 16px;
`,T=o.h3`
  font-size: ${e=>e.theme.fontSizes.lg};
  text-align: center;
  margin: 0 0 12px 0;
`,S=o.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
`,$=o.span`
  font-size: ${e=>e.theme.fontSizes.tag};
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid ${e=>e.theme.colours.stroke};
  color: ${e=>e.theme.colours.white};
  padding: 4px 12px;
  border-radius: 16px;
  transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.15s ease;
  cursor: pointer;

  &:hover {
    transform: perspective(1000px) translateZ(60px);
    background-color: rgba(30, 30, 30, 0.1);
    border-color: rgba(125, 88, 234, 0.3);
  }
`,z=o.p`
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.regular};
  text-align: justify;
  line-height: 1.5;
  white-space: pre-line;
  margin: 0;

  @media (max-width: 900px) {
    font-size: ${e=>e.theme.fontSizes.tag};
  }
`,K=o.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`,C=o.a`
  flex: 1;
  background: transparent;
  border: 2px solid ${e=>e.theme.colours.white};
  color: ${e=>e.theme.colours.white};
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: ${e=>e.theme.fontWeights.bold};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`,E=o.a`
  flex: 1;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: ${e=>e.theme.colours.offwhite};
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: ${e=>e.theme.fontWeights.medium};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`,I=o.button`
  background: transparent;
  border: none;
  color: ${e=>e.theme.colours.white};
  font-size: 0.8rem;
  font-weight: ${e=>e.theme.fontWeights.medium};
  cursor: pointer;
  padding: 0;
  margin-top: 8px;

  &:hover {
    text-decoration: underline;
  }
`;function A({text:e,maxLength:i=m}){const{t:n}=a(),[r,s]=d.useState(!1);if(e.length<=i)return t.jsx("span",{dangerouslySetInnerHTML:{__html:e}});const p=e.slice(0,i)+"...";return t.jsxs(t.Fragment,{children:[t.jsx("span",{dangerouslySetInnerHTML:{__html:r?e:p}}),t.jsx(I,{onClick:()=>s(!r),children:n(r?"show-less":"show-more")})]})}function B({project:e}){const{t:i}=a();return t.jsxs(w,{children:[t.jsx(v,{children:t.jsx("img",{src:e.image,alt:i(e.imageAltKey),loading:"lazy"})}),t.jsxs(j,{children:[t.jsx(T,{children:i(e.titleKey)}),t.jsx(S,{children:e.tags.map((n,r)=>t.jsx($,{children:n},r))}),t.jsx(z,{children:t.jsx(A,{text:i(e.descriptionKey)})}),t.jsxs(K,{children:[e.linkSite&&t.jsx(C,{href:e.linkSite,target:"_blank",rel:"noopener noreferrer",children:i("view-site")}),t.jsx(E,{href:e.linkGithub,target:"_blank",rel:"noopener noreferrer",children:i("view-code")})]})]})]})}const G="/portfolio/assets/webhook-inspector-BipnIAXt.png",P="/portfolio/assets/coffee-B-4hnhlM.png",O="/portfolio/assets/task-manager-CPqpvXl7.png",R="/portfolio/assets/orange-tasks-IEAVGEXO.png",_="/portfolio/assets/clerk-webhook-CPpIuzFi.gif",c=[{titleKey:"clerk-webhook",tags:["Webhooks","Clerk","svix","Fastify","SQLite","React","Vite","Tanstack Router","Tanstack Query","AI"],image:_,imageAltKey:"clerk-webhook-alt",descriptionKey:"clerk-webhook-description",linkGithub:"https://github.com/Giovani-O/clerk-webhook"},{titleKey:"webhook-inspect",tags:["Fastify","Drizzle","PostgreSQL","React","Vite","Tanstack Router","Tanstack Query","Vitest","Testes","AI","Vercel AI SDK"],image:G,imageAltKey:"webhook-inspector-alt",descriptionKey:"webhook-inspector-description",linkGithub:"https://github.com/Giovani-O/webhook-inspect"},{titleKey:"coffee-delivery",tags:["React","TypeScript","Styled Components","Hooks","Context API"],image:P,imageAltKey:"coffee-delivery-alt",descriptionKey:"coffee-delivery-description",linkSite:"https://ignite-coffee-delivery-hu2qn3fv7-giovani-o.vercel.app/",linkGithub:"https://github.com/Giovani-O/ignite-coffee-delivery/tree/main"},{titleKey:"orange-branch-task-manager",tags:[".NET 8","C#","Entity Framework","RabbitMQ","xUnit","MySQL"],image:O,imageAltKey:"orange-branch-task-manager-alt",descriptionKey:"orange-branch-task-manager-description",linkGithub:"https://github.com/Giovani-O/OrangeBranchTaskManager"},{titleKey:"orange-tasks",tags:["React","TypeScript","Tailwind","Hooks","Zustand","Axios"],image:R,imageAltKey:"orange-tasks-alt",descriptionKey:"orange-tasks-description",linkGithub:"https://github.com/Giovani-O/orange-branch-task-manager-react"}];function M({isExpanded:e,onToggle:i}){const{t:n}=a(),r=e?c:c.slice(0,l);return t.jsxs(t.Fragment,{children:[t.jsx(b,{children:r.map(s=>t.jsx(B,{project:s},s.titleKey))}),c.length>l&&t.jsx(k,{children:t.jsx(y,{onClick:i,children:n(e?"show-less-projects":"show-all-projects")})})]})}function L(){const{t:e}=a(),[i,n]=d.useState(!1);return t.jsxs("div",{id:"projects",children:[t.jsxs(x,{children:[t.jsx(u,{children:e("projects")}),t.jsx(f,{children:e("projects-subtitle")})]}),t.jsx(M,{isExpanded:i,onToggle:()=>n(!i)})]})}export{L as Projects};
