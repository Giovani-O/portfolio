import{d as i,u as r,j as e,b as a}from"./main-Mw6RRx6m.js";const l=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin-block: 80px 40px;
`,c=i.h1`
  font-size: ${t=>t.theme.fontSizes.xl};
  font-weight: ${t=>t.theme.fontWeights.bold};
`,d=i.p`
  font-size: ${t=>t.theme.fontSizes.xs};
  font-weight: ${t=>t.theme.fontWeights.regular};
`;i.div`
  width: 100%;
  padding: 12px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;const x=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 80px;

  overflow: hidden;
`,s=i.p`
  font-size: ${t=>t.theme.fontSizes.xs};
  font-weight: ${t=>t.theme.fontWeights.regular};
  text-align: justify;

  &:has(+ p) {
    margin-bottom: 0.75rem;
  }

  @media (max-width: 900px) {
    font-size: ${t=>t.theme.fontSizes.tag};
  }
`,n=i.img`
  width: 400px;
  object-fit: contain;

  @media (max-width: 900px) {
    width: 80%;
  }
`,o=i.div`
  display: flex;
  gap: 40px;
  width: 100%;
  min-height: 120px;
  align-items: center;

  /* animation: slide-left 0.8s ease-out forwards; */

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
  }

  /* @keyframes slide-left {
    from {
      transform: translateX(25%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  } */
`,p=i.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 40px;
  width: 100%;
  min-height: 120px;
  align-items: center;
  /* animation: slide-right 0.8s ease-out forwards; */

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
  }

  /* @keyframes slide-right {
    from {
      transform: translateX(-25%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  } */
`,f="/portfolio/assets/fcamara-OkfkNQOr.png",h="/portfolio/assets/rocketseat-BGswpuFZ.svg",m="/portfolio/assets/unasp-DUVInGoP.png";function j(){const{t}=r();return e.jsxs("div",{id:"experience",children:[e.jsxs(l,{children:[e.jsx(c,{children:t("experience")}),e.jsx(d,{children:t("experience-subtitle")})]}),e.jsxs(x,{children:[e.jsxs(o,{children:[e.jsx(n,{src:f,alt:t("fcamara-alt"),loading:"lazy"}),e.jsxs("div",{children:[e.jsx(s,{children:t("fcamara-p1")}),e.jsx(s,{children:t("fcamara-p2")})]})]}),e.jsx(a,{}),e.jsxs(p,{children:[e.jsx(n,{src:h,alt:t("rocketseat-alt"),loading:"lazy"}),e.jsxs("div",{children:[e.jsx(s,{children:t("rocketseat-p1")}),e.jsx(s,{children:t("rocketseat-p2")})]})]}),e.jsx(a,{}),e.jsxs(o,{children:[e.jsx(n,{src:m,alt:t("unasp-alt"),loading:"lazy"}),e.jsxs("div",{children:[e.jsx(s,{children:t("unasp-p1")}),e.jsx(s,{children:t("unasp-p2")})]})]})]})]})}export{j as default};
