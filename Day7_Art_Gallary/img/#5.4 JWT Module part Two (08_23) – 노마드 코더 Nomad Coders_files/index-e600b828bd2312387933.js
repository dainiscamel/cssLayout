_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[70],{"/EDR":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("QeBL")}])},"/QsD":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),o=a("YFqc"),s=a.n(o),r=a("20a2"),i=a.n(r),m=a("vOnD"),d=a("4C6B"),c=a("kiXb"),u=l.a.createElement;const g=m.a.div`
  ${e=>e.clickeable?"\n    cursor:pointer;\n    &:hover {\n    .bg {\n      transform: translateY(-5px);\n    }\n    .info {\n      transform: translateY(-10px);\n    }\n    img {\n      transform: scale(1.1);\n    }\n  }":""};
`;t.a=({course:e,clickeable:t=!0})=>{const{t:a}=Object(c.useTranslation)();return u(g,{onClick:()=>{if(t&&(null===e||void 0===e||!e.isComingSoon)){null!==e&&void 0!==e&&e.isEnrolled?i.a.push("/[course]/lobby",`/${null===e||void 0===e?void 0:e.slug}/lobby`):i.a.push(`/${null===e||void 0===e?void 0:e.slug}`);!0&&window.scrollTo(0,0)}},className:"flex flex-col items-center",clickeable:t&&!(null!==e&&void 0!==e&&e.isComingSoon)},u("div",{className:"overflow-hidden bg rounded-lg relative bg-white shadow-lg",style:{transition:"transform 0.2s ease-in-out"}},(null===e||void 0===e?void 0:e.level)&&u("span",{style:{position:"absolute",top:10,left:10},className:`inline-flex items-center px-3 py-0.5 z-10 rounded-full text-sm font-medium leading-5 ${"\uace0\uae09"===e.level.name?"bg-purple-100 text-purple-500":""} ${"\uc911\uae09"===e.level.name?"bg-green-100 text-green-500":""}\n            ${"\ucd08\uae09"===e.level.name?"bg-yellow-100 text-yellow-600":""} shadow`},a(null===e||void 0===e?void 0:e.level.name)),u("img",{src:null===e||void 0===e?void 0:e.thumbnail,className:"w-full",style:{transition:"transform 0.2s ease-in-out"}})),u("div",{className:"text-center info shadow-xl flex flex-col w-11/12 justify-center  relative bg-white -top-14 rounded-lg z-0 py-5 px-2",style:{transition:"transform 0.2s ease-in-out",textOverflow:"ellipsis",maxHeight:106}},null!==e&&void 0!==e&&e.isComingSoon?u("div",{className:"px-4"},u("h3",{className:"text-xl overflow-hidden"},e?a(e.name):"Loading..."),u("h4",{className:"mt-2 mb-1"},"Coming Soon")):null!==e&&void 0!==e&&e.isEnrolled?t?u(s.a,{href:"/[course]/lobby",as:`/${null===e||void 0===e?void 0:e.slug}/lobby`},u("a",{className:"px-4"},u("h3",{className:"text-xl overflow-hidden mb-5 w-full",style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}},a(null===e||void 0===e?void 0:e.name)),u(d.a,{progress:(null===e||void 0===e?void 0:e.progress)||0,progressLectures:(null===e||void 0===e?void 0:e.progressLectures)||0}))):u("div",{className:"px-4"},u("h3",{className:"text-xl overflow-hidden mb-5",style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}},a(null===e||void 0===e?void 0:e.name)),u(d.a,{progress:(null===e||void 0===e?void 0:e.progress)||0,progressLectures:(null===e||void 0===e?void 0:e.progressLectures)||0})):t?u(s.a,{href:`/${null===e||void 0===e?void 0:e.slug}`},u("a",null,u("h3",{className:"text-xl overflow-hidden"},e?a(e.name):"Loading..."),(null===e||void 0===e?void 0:e.subtitleOne)&&u("h4",{className:"mt-2 mb-1"},a(null===e||void 0===e?void 0:e.subtitleOne)),(null===e||void 0===e?void 0:e.subtitleTwo)&&u("h4",{className:"text-sm"},a(null===e||void 0===e?void 0:e.subtitleTwo)))):u("span",null,u("h3",{className:"text-xl overflow-hidden"},e?a(e.name):"Loading..."),(null===e||void 0===e?void 0:e.subtitleOne)&&u("h4",{className:"mt-2 mb-1"},a(null===e||void 0===e?void 0:e.subtitleOne)),(null===e||void 0===e?void 0:e.subtitleTwo)&&u("h4",{className:"text-sm"},a(null===e||void 0===e?void 0:e.subtitleTwo)))))}},"4C6B":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),o=l.a.createElement;t.a=({progress:e,progressLectures:t})=>{const a=()=>{if(0!==e&&0!==t){const a=Math.floor(e/t*100);return a>100?100:a}return 0};return o(l.a.Fragment,null,o("div",{className:"h-3 w-full bg-blue-200 rounded-full relative"},o("div",{className:"h-3 bg-blue-700 rounded-full",style:{width:`${a()}%`}})),o("span",{className:"mt-3 text-md font-medium block"},a(),"% complete"))}},H8eV:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),o=a("g4pe"),s=a.n(o),r=l.a.createElement;t.a=({description:e="",pageTitle:t,ogTitle:a=t,image:n="graphDefault",price:l,index:o,path:i})=>r(s.a,null,r("title",null,t),r("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r("meta",{name:"description",content:e}),r("meta",{property:"og:title",content:a}),r("meta",{property:"og:type",content:"website"}),r("meta",{property:"og:url",content:`https://nomadcoders.co${i}`}),r("meta",{property:"og:image",content:`https://d1telmomo28umc.cloudfront.net/media/seo/${n}.jpg`}),r("meta",{property:"og:description",content:e}),r("meta",{property:"og:site_name",content:"Nomad Coders"}),r("meta",{property:"og:locale",content:"ko_KR"}),r("meta",{property:"og:image:width",content:"1200"}),r("meta",{property:"og:image:height",content:"630"}),r("meta",{property:"fb:admins",content:"2366600330252017"}),r("meta",{charSet:"utf-8"}),r("link",{rel:"canonical",href:"https://nomadcoders.co/"}),r("meta",{name:"robots",content:"index, follow"}),r("meta",{name:"twitter:title",content:a}),r("meta",{name:"twitter:description",content:e}),r("meta",{name:"twitter:image",content:n}),r("meta",{name:"naver-site-verification",content:"202966525a961e258ded0fcc0042857cea6d15f3"}))},Lw9q:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n).a.createElement;t.a=({children:e})=>l("div",{className:"mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"},e)},QeBL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),o=a("ttZb"),s=a("YFqc"),r=a.n(s),i=a("Ue4y"),m=a("ogOi"),d=a("Lw9q"),c=a("WxHy"),u=a("SOQy"),g=a("H8eV"),p=a("kiXb"),f=a("SnHM"),x=l.a.createElement;var v=({data:e,isLoggedIn:t})=>{var a;const{t:n}=Object(p.useTranslation)(),o=Object(f.a)();return x(i.a,null,x(l.a.Fragment,null,x(g.a,{pageTitle:"\ub178\ub9c8\ub4dc \ucf54\ub354 Nomad Coders \u2013 Clone Startups. Learn to Code.",ogTitle:"\ub178\ub9c8\ub4dc \ucf54\ub354 Nomad Coders",description:n("\ucf54\ub529\uc740 \uc9c4\uc9dc\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\ub294\uac70\uc57c!. \uc2e4\uc81c \uad6c\ud604\ub418\uc5b4 \uc788\ub294 \uc11c\ube44\uc2a4\ub97c \ud55c\ub540 \ud55c\ub540 \ub530\ub77c \ub9cc\ub4e4\uba74\uc11c \ucf54\ub529\uc744 \ubc30\uc6b0\uc138\uc694!"),path:"/",image:"home2"}),x(d.a,null,x("div",{className:"pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-28 bg-white z-10"},x("div",{className:"mx-auto max-w-screen-xl px-4 sm:px-6 bg-white"},x("div",{className:"text-center flex flex-col items-center"},x("h2",{className:"text-5xl   tracking-tight leading-tight font-semibold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"},"Clone Startups.",x("br",null),x("span",{className:"text-blue-600"},"Learn to code.")),x("p",{className:"mt-3 max-w-md mx-auto lg:mx-0 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl w-8/12"},x("span",{dangerouslySetInnerHTML:{__html:n("\ucf54\ub529\uc740 \uc9c4\uc9dc\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\ub294\uac70\uc57c!")}}),x("br",null),x("span",{dangerouslySetInnerHTML:{__html:n("\uc2e4\uc81c \uad6c\ud604\ub418\uc5b4 \uc788\ub294 \uc11c\ube44\uc2a4\ub97c \ud55c\ub540 \ud55c\ub540 \ub530\ub77c \ub9cc\ub4e4\uba74\uc11c \ucf54\ub529\uc744 \ubc30\uc6b0\uc138\uc694.")}})),x("div",{className:"mt-10 max-w-md mx-auto lg:mx-0 flex flex-col w-full md:flex-row md:justify-around lg:justify-center md:mt-10"},x("div",{className:"rounded-md shadow "},t?x(r.a,{href:"/dashboard"},x("a",{className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring  focus:ring-blue-400  transition duration-150 ease-in-out md:text-lg md:px-10"},"Go to Dashboard \u2192")):x(r.a,{href:"/join"},x("a",{className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 rounded-md text-white bg-blue-600  hover:bg-blue-500 focus:outline-none focus:ring  focus:ring-blue-400  transition duration-150 ease-in-out md:text-lg md:px-10"},"Join now \u2192"))))))),(null===e||void 0===e?void 0:e.courses)&&x(l.a.Fragment,null,x("div",{className:"mt-32 relative"},x(m.a,{courses:null===e||void 0===e?void 0:e.courses})),x("div",{className:"flex -mt-8 relative z-10 justify-center"},x(r.a,{href:"/courses"},x("a",{className:" text-blue-600 text-lg hover:underline font-medium"},"See all courses \u2192"))))),(null===e||void 0===e?void 0:e.challenges)&&!o&&x(c.a,{containerClassName:"mt-32 md:mt-56 mb-64  py-15 md:pt-0 md:pb-3",angleBottom:!0,angleTop:!0,bgColor:"#EFF6FF"},x("div",{className:"flex flex-col items-center text-g"},x("h3",{className:"text-4xl font-semibold hangug text-center"},"Challenges"),x("h4",{className:" text-center max-w-md mx-auto lg:mx-0 text-base text-gray-500 sm:text-lg mt-2 md:text-xl md:max-w-3xl w-8/12"},"\uba71\uc0b4 \uc7a1\uace0 \uce90\ub9ac\ud558\ub294 \ucc4c\ub9b0\uc9c0? \ubb34\ub8cc\ub85c \uc2dc\uc791\ud558\uc138\uc694!")),x(l.a.Fragment,null,x("div",{className:"mt-20 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-14 gap-y-10 pb-10"},null===e||void 0===e||null===(a=e.challenges)||void 0===a?void 0:a.map((e=>e&&x(u.a,{key:e.slug,challenge:e})))),x("div",{className:"flex mt-5 relative z-10 justify-center"},x(r.a,{href:"/challenges"},x("a",{className:"text-blue-600 text-lg hover:underline font-medium"},"See all challenges \u2192")))))))},b=a("MO+g"),h=a("lTCR"),w=a.n(h),y=a("dkkg"),N=l.a.createElement;const C=w.a`
  query home($all: Boolean!) {
    courses(allCourses: $all) {
      ...CourseCard
    }
    challenges(allChallenges: $all) {
      ...ChallengeCard
    }
  }
  ${y.e}
  ${y.b}
`;var O=()=>{const e=Object(b.a)(),{data:t}=Object(o.c)(C,{variables:{all:!1}});return N(v,{data:t,isLoggedIn:e})},k=l.a.createElement;t.default=()=>k(O,null)},SOQy:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),o=a("YFqc"),s=a.n(o),r=a("fdqv"),i=l.a.createElement;t.a=({challenge:{name:e,slug:t,unlocks:a,duration:l,challengersNumber:o,comingSoon:m,inProgress:d,startDate:c=0,finished:u,isEnrolled:g,isWaiting:p,isCompleted:f,canEnroll:x,currentDay:v,inBufferZone:b,isOnReview:h,nextStartDate:w=0,waitingNumber:y},showFull:N=!0})=>{const{0:C,1:O}=Object(n.useState)(0);return Object(n.useEffect)((()=>{d&&w?O(Object(r.e)(w)):c&&!d&&O(Object(r.e)(c))}),[c,w,d]),i("div",{className:"shadow-xl rounded-lg  p-5 bg-white relative"},f?i("div",{className:"bg-gray-400 flex items-center justify-center flex-col text-white opacity-75 h-full absolute w-full  top-0 left-0 rounded-lg"},i("svg",{className:"mb-3",width:"110",height:"110",viewBox:"0 0 110 110",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("g",{filter:"url(#filter0_d)"},i("path",{d:"M39 55L49.6667 65.6667L71 44.3333M103 55C103 81.5097 81.5097 103 55 103C28.4903 103 7 81.5097 7 55C7 28.4903 28.4903 7 55 7C81.5097 7 103 28.4903 103 55Z",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})),i("defs",null,i("filter",{id:"filter0_d",x:"0",y:"0",width:"110",height:"110",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},i("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),i("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),i("feOffset",null),i("feGaussianBlur",{stdDeviation:"2.5"}),i("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"}),i("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),i("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})))),i("span",{className:"text-base font-semibold"},"\uc644\ub8cc")):null,i("div",{className:"flex justify-between items-center mb-12"},i("h5",{className:"text-2xl font-semibold"},e),i("div",{className:"flex items-center text-sm font-medium"},i("span",{className:"mr-5 bg-blue-500 text-white rounded-full px-2 py-px "},l),d&&g?i("span",{className:"font-semibold",style:{color:"rgba(84, 182, 133, 1)"}},"\uc9c4\ud589 \uc911"):i("span",{className:(C<=5?"text-red-500":"text-blue-500")+" font-semibold"},"D-",C," \uc2dc\uc791"))),i("div",{className:"flex mb-5"},a.map(((e,t)=>i("img",{key:t,src:e.image||"",className:"w-10 h-10 rounded-full mr-2"})))),f?null:i("div",{className:"flex justify-between"},i("span",{className:"text-gray-500"},"\uc2e0\uccad\uc790"," ",i("span",{className:"font-semibold"},x||g?o:y),"\uba85"),h?i("span",{className:"font-semibold text-gray-500"},"\uc2ec\uc0ac \uc911"):null,g?i(s.a,{href:"/c/"+t+"/lobby"},i("a",{className:"font-semibold text-blue-500"},"\ucc4c\ub9b0\uc9c0 \ubcf4\uae30 \u2192")):null,p?i(s.a,{href:"/c/"+t+"/lobby"},i("a",{className:"font-semibold text-blue-500"},"\uc2e0\uccad \uc644\ub8cc")):null,g||p||h?null:i(s.a,{href:t},i("a",{className:"font-semibold text-blue-500"},"\uc790\uc138\ud788 \ubcf4\uae30 \u2192"))))}},WxHy:function(e,t,a){"use strict";var n=a("rePB"),l=a("q1tI"),o=a.n(l),s=a("vOnD"),r=o.a.createElement;const i=(e,t,a)=>{let n="",l="",o="",s=a||5;switch(e){case"left":l="top"===t?-s:s,o="left";break;case"right":l="top"===t?s:-s,o="right";break;default:l="",o=""}return n=`${t}:0; transform-origin: ${o} ${t}; transform: skewY(${l}deg);`,n},m="\n        content: '';\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        background: inherit;\n        z-index: -1;\n    ",d=s.a.div`
  ${e=>e.attrs.noMargin?null:(e=>{let t=0,a=0;return void 0!==e.top&&(t=70),void 0!==e.bottom&&(a=70),`margin: ${t}px 0px ${a}px 0px;`})(e.attrs)}
  width: 100%;
  position: relative;
  background-color: ${e=>e.attrs.bgColor} !important;
  z-index: 2;
  min-height: 200px;
  &:before {
    ${m}
    ${e=>i(e.attrs.top,"top",e.attrs.skew)}
  }
  &:after {
    ${m}
    ${e=>i(e.attrs.bottom,"bottom",e.attrs.skew)}
  }
`,c=s.a.div`
  width: 100%;
  overflow: visible;
`;var u=e=>r(d,{attrs:e,style:e.style,className:e.className},r(c,{style:{width:"100%",overflow:"visible"}},e.children)),g=o.a.createElement;function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.a=({containerClassName:e,childrenClassName:t,bgColor:a,angleTop:n,angleBottom:l,children:o,forcedContainerStyle:s,skew:r=5})=>n||l?g(u,{bgColor:a,top:n?"left":void 0,bottom:l?"right":void 0,noMargin:!0,skew:r,className:`w-full ${e||""}`},g("div",{style:s||{},className:`mx-auto max-w-screen-xl px-4 ${t||""} sm:px-6 lg:px-8`},o)):g("section",{style:f({},a&&{background:a}),className:`w-full ${e||""}`},g("div",{className:`mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8  ${t||""}`},o))},dkkg:function(e,t,a){"use strict";a.d(t,"e",(function(){return o})),a.d(t,"c",(function(){return r})),a.d(t,"f",(function(){return i})),a.d(t,"b",(function(){return m})),a.d(t,"h",(function(){return d})),a.d(t,"d",(function(){return c})),a.d(t,"g",(function(){return u})),a.d(t,"a",(function(){return g})),a.d(t,"j",(function(){return p})),a.d(t,"i",(function(){return f}));var n=a("lTCR"),l=a.n(n);const o=l.a`
  fragment CourseCard on CourseType {
    name
    progress
    progressLectures
    isEnrolled
    isFree
    isReward
    isComingSoon
    slug
    thumbnail
    subtitleOne
    subtitleTwo
    promptChallenge
    level {
      name
      color
    }
    badges {
      id
    }
  }
`,s=l.a`
  fragment CommentReplyParts on CommentType {
    id
    user {
      username
      avatar
      amazing
      tier
    }
    content
    isOwner
    created
  }
`,r=l.a`
  fragment CommentParts on CommentType {
    id
    user {
      username
      avatar
      amazing
      tier
    }
    parent {
      id
    }
    isUpvoted
    upvotes
    content
    isOwner
    created
    replies {
      ...CommentReplyParts
    }
  }
  ${s}
`,i=l.a`
  fragment IssueCommentParts on IssueCommentType {
    id
    comment
    isSolution
    isOwner
    created
    user {
      username
      avatar
      tier
      amazing
    }
  }
`,m=l.a`
  fragment ChallengeCard on ChallengeType {
    name
    slug
    batch
    duration
    inProgress
    comingSoon
    finished
    canEnroll
    startDate
    isEnrolled
    isWaiting
    isCompleted
    isOnReview
    challengersNumber
    waitingNumber
    assignmentsNumber
    currentDay
    inBufferZone
    nextStartDate
    course {
      name
      subtitleOne
      slug
      thumbnail
      progressLectures
      isEnrolled
      promptChallenge
    }
    unlocks {
      image
    }
  }
`,d=l.a`
  fragment ReportParts on ReportType {
    assignments {
      number
    }
    progressList {
      user {
        username
      }
      submissions {
        url
        quizResponse {
          totalScore
        }
      }
    }
  }
`,c=l.a`
  fragment CouponParts on CouponType {
    created
    discountAmount
    used
    id
    isExpired
    expirationDate
  }
`,u=l.a`
  fragment NoteParts on NoteType {
    id
    content
    minutes
    seconds
    created
  }
`,g=l.a`
  fragment CategoryParts on CategoryType {
    name
    id
    slug
    isPublic
    tagline
    totalThreads
  }
`,p=l.a`
  fragment ThreadParts on ThreadType {
    id
    user {
      username
      avatar
      tier
      amazing
    }
    category {
      name
      slug
    }
    title
    isPinned
    totalVotes
    totalReplies
    isOwner
    isUpvoted
    created
    views
    showing
  }
`,f=l.a`
  fragment ReplyParts on ReplyType {
    id
    user {
      username
      avatar
      tier
    }
    payload
    isPinned
    totalVotes
    isOwner
    isUpvoted
    created
    totalReplies
    replies {
      user {
        username
        avatar
      }
      id
      created
      isOwner
      payload
    }
  }
`},ogOi:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),o=a("/QsD"),s=l.a.createElement;t.a=({courses:e})=>s("div",{className:"max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-5 gap-x-10 pb-10"},null===e||void 0===e?void 0:e.map((e=>s(o.a,{course:e,key:null===e||void 0===e?void 0:e.slug}))))}},[["/EDR",2,1,5,0,3,4,6,7]]]);