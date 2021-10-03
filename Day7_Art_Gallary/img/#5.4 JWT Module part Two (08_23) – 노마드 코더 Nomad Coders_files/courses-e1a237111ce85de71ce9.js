_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[54],{"/QsD":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),s=a("YFqc"),o=a.n(s),i=a("20a2"),r=a.n(i),d=a("vOnD"),m=a("4C6B"),u=a("kiXb"),c=l.a.createElement;const g=d.a.div`
  ${e=>e.clickeable?"\n    cursor:pointer;\n    &:hover {\n    .bg {\n      transform: translateY(-5px);\n    }\n    .info {\n      transform: translateY(-10px);\n    }\n    img {\n      transform: scale(1.1);\n    }\n  }":""};
`;t.a=({course:e,clickeable:t=!0})=>{const{t:a}=Object(u.useTranslation)();return c(g,{onClick:()=>{if(t&&(null===e||void 0===e||!e.isComingSoon)){null!==e&&void 0!==e&&e.isEnrolled?r.a.push("/[course]/lobby",`/${null===e||void 0===e?void 0:e.slug}/lobby`):r.a.push(`/${null===e||void 0===e?void 0:e.slug}`);!0&&window.scrollTo(0,0)}},className:"flex flex-col items-center",clickeable:t&&!(null!==e&&void 0!==e&&e.isComingSoon)},c("div",{className:"overflow-hidden bg rounded-lg relative bg-white shadow-lg",style:{transition:"transform 0.2s ease-in-out"}},(null===e||void 0===e?void 0:e.level)&&c("span",{style:{position:"absolute",top:10,left:10},className:`inline-flex items-center px-3 py-0.5 z-10 rounded-full text-sm font-medium leading-5 ${"\uace0\uae09"===e.level.name?"bg-purple-100 text-purple-500":""} ${"\uc911\uae09"===e.level.name?"bg-green-100 text-green-500":""}\n            ${"\ucd08\uae09"===e.level.name?"bg-yellow-100 text-yellow-600":""} shadow`},a(null===e||void 0===e?void 0:e.level.name)),c("img",{src:null===e||void 0===e?void 0:e.thumbnail,className:"w-full",style:{transition:"transform 0.2s ease-in-out"}})),c("div",{className:"text-center info shadow-xl flex flex-col w-11/12 justify-center  relative bg-white -top-14 rounded-lg z-0 py-5 px-2",style:{transition:"transform 0.2s ease-in-out",textOverflow:"ellipsis",maxHeight:106}},null!==e&&void 0!==e&&e.isComingSoon?c("div",{className:"px-4"},c("h3",{className:"text-xl overflow-hidden"},e?a(e.name):"Loading..."),c("h4",{className:"mt-2 mb-1"},"Coming Soon")):null!==e&&void 0!==e&&e.isEnrolled?t?c(o.a,{href:"/[course]/lobby",as:`/${null===e||void 0===e?void 0:e.slug}/lobby`},c("a",{className:"px-4"},c("h3",{className:"text-xl overflow-hidden mb-5 w-full",style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}},a(null===e||void 0===e?void 0:e.name)),c(m.a,{progress:(null===e||void 0===e?void 0:e.progress)||0,progressLectures:(null===e||void 0===e?void 0:e.progressLectures)||0}))):c("div",{className:"px-4"},c("h3",{className:"text-xl overflow-hidden mb-5",style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}},a(null===e||void 0===e?void 0:e.name)),c(m.a,{progress:(null===e||void 0===e?void 0:e.progress)||0,progressLectures:(null===e||void 0===e?void 0:e.progressLectures)||0})):t?c(o.a,{href:`/${null===e||void 0===e?void 0:e.slug}`},c("a",null,c("h3",{className:"text-xl overflow-hidden"},e?a(e.name):"Loading..."),(null===e||void 0===e?void 0:e.subtitleOne)&&c("h4",{className:"mt-2 mb-1"},a(null===e||void 0===e?void 0:e.subtitleOne)),(null===e||void 0===e?void 0:e.subtitleTwo)&&c("h4",{className:"text-sm"},a(null===e||void 0===e?void 0:e.subtitleTwo)))):c("span",null,c("h3",{className:"text-xl overflow-hidden"},e?a(e.name):"Loading..."),(null===e||void 0===e?void 0:e.subtitleOne)&&c("h4",{className:"mt-2 mb-1"},a(null===e||void 0===e?void 0:e.subtitleOne)),(null===e||void 0===e?void 0:e.subtitleTwo)&&c("h4",{className:"text-sm"},a(null===e||void 0===e?void 0:e.subtitleTwo)))))}},"4C6B":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),s=l.a.createElement;t.a=({progress:e,progressLectures:t})=>{const a=()=>{if(0!==e&&0!==t){const a=Math.floor(e/t*100);return a>100?100:a}return 0};return s(l.a.Fragment,null,s("div",{className:"h-3 w-full bg-blue-200 rounded-full relative"},s("div",{className:"h-3 bg-blue-700 rounded-full",style:{width:`${a()}%`}})),s("span",{className:"mt-3 text-md font-medium block"},a(),"% complete"))}},H8eV:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),s=a("g4pe"),o=a.n(s),i=l.a.createElement;t.a=({description:e="",pageTitle:t,ogTitle:a=t,image:n="graphDefault",price:l,index:s,path:r})=>i(o.a,null,i("title",null,t),i("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i("meta",{name:"description",content:e}),i("meta",{property:"og:title",content:a}),i("meta",{property:"og:type",content:"website"}),i("meta",{property:"og:url",content:`https://nomadcoders.co${r}`}),i("meta",{property:"og:image",content:`https://d1telmomo28umc.cloudfront.net/media/seo/${n}.jpg`}),i("meta",{property:"og:description",content:e}),i("meta",{property:"og:site_name",content:"Nomad Coders"}),i("meta",{property:"og:locale",content:"ko_KR"}),i("meta",{property:"og:image:width",content:"1200"}),i("meta",{property:"og:image:height",content:"630"}),i("meta",{property:"fb:admins",content:"2366600330252017"}),i("meta",{charSet:"utf-8"}),i("link",{rel:"canonical",href:"https://nomadcoders.co/"}),i("meta",{name:"robots",content:"index, follow"}),i("meta",{name:"twitter:title",content:a}),i("meta",{name:"twitter:description",content:e}),i("meta",{name:"twitter:image",content:n}),i("meta",{name:"naver-site-verification",content:"202966525a961e258ded0fcc0042857cea6d15f3"}))},Lw9q:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n).a.createElement;t.a=({children:e})=>l("div",{className:"mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"},e)},XzLi:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/courses",function(){return a("d5eT")}])},d5eT:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),s=a("lTCR"),o=a.n(s),i=a("ttZb"),r=a("Ue4y"),d=a("Lw9q"),m=a("dkkg");const u=o.a`
  query getCourses($allCourses: Boolean!) {
    courses(allCourses: $allCourses) {
      ...CourseCard
    }
  }
  ${m.e}
`;o.a`
  query getChallenges($allChallenges: Boolean!) {
    challenges(allChallenges: $allChallenges) {
      ...ChallengeCard
    }
  }
  ${m.b}
`;var c=a("ogOi"),g=a("p3ZU"),p=a("H8eV"),v=a("kiXb"),f=l.a.createElement;const x=o.a`
  query levels {
    levels {
      name
      color
    }
  }
`,b=o.a`
  query filterBadges {
    filterBadges {
      id
      name
      image
    }
  }
`;t.default=()=>{var e,t,a;const{data:l}=Object(i.c)(u,{variables:{allCourses:!0}}),{data:s}=Object(i.c)(x),{data:o}=Object(i.c)(b),{0:m,1:y}=Object(n.useState)(null),{0:h,1:w}=Object(n.useState)(null),{0:N,1:C}=Object(n.useState)(null),k=e=>C(e),T=()=>y(null),$=()=>w(null),L=()=>C(null),O=()=>{if(l&&l.courses){let e=l.courses;if(null!==m&&null!==s&&void 0!==s&&s.levels){const t=s.levels[m];e=e.filter((e=>{var a;return(null===e||void 0===e||null===(a=e.level)||void 0===a?void 0:a.name)===(null===t||void 0===t?void 0:t.name)}))}if(null!==h&&null!==o&&void 0!==o&&o.filterBadges){const t=o.filterBadges[h];e=e.filter((e=>null===e||void 0===e?void 0:e.badges.some((e=>e.id===(null===t||void 0===t?void 0:t.id)))))}return null!==N&&(e=e.filter((e=>{if(e){if(1===N)return!0===e.isFree||1==e.isReward;if(2===N)return!1===e.isFree&&!1===e.isReward}}))),e}},{t:j}=Object(v.useTranslation)();return f(r.a,null,f(p.a,{pageTitle:"All Courses \u2013 \ub178\ub9c8\ub4dc \ucf54\ub354 Nomad Coders",ogTitle:"All Courses \u2013 \ub178\ub9c8\ub4dc \ucf54\ub354 Nomad Coders",description:j("\ucd08\uae09\ubd80\ud130 \uace0\uae09\uae4c\uc9c0! \ub2c8\uaf2c\uc324\uacfc \ud568\uaed8 \ud480\uc2a4\ud0dd\uc73c\ub85c \uc131\uc7a5\ud558\uc138\uc694!"),path:"/courses",image:"allCourses2"}),f(d.a,null,f("div",{className:"pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-28 pb-56"},f("div",{className:"mb-10 sm:mb-28"},f("h2",{className:"text-5xl text-center tracking-tight leading-tight font-semibold text-gray-900  sm:leading-none"},"All Courses"),f("p",{className:"mt-3 text-center text-base text-gray-500 sm:mt-3 sm:text-lg sm:mx-auto md:text-xl lg:mx-0"},j("\ucd08\uae09\ubd80\ud130 \uace0\uae09\uae4c\uc9c0! \ub2c8\uaf2c\uc324\uacfc \ud568\uaed8 \ud480\uc2a4\ud0dd\uc73c\ub85c \uc131\uc7a5\ud558\uc138\uc694!"))),f("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-y-20 gap-x-5 mb-20"},f("div",{className:"flex flex-col items-center border-gray-300 lg:border-r"},f("div",{className:"flex flex-col items-center"},f("span",{className:"h-5 cursor-pointer mb-5 flex items-center font-medium",onClick:T},null===m?"Filter by Level":f("svg",{fill:"currentColor",viewBox:"0 0 20 20",className:"w-5 h-5 text-gray-600"},f("path",{d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd",fillRule:"evenodd"}))),f("div",{className:"grid grid-cols-3 gap-5"},null===s||void 0===s||null===(e=s.levels)||void 0===e?void 0:e.map(((e,t)=>e&&f("span",{key:t,onClick:()=>(e=>y(e))(t),className:`cursor-pointer ${null===m?"opacity-100":""} bg-gray-200 text-gray-900 inline-flex justify-center items-center px-4 py-1 rounded-full font-medium leading-5 ${m===t?`opacity-100 shadow-sm ${"\uace0\uae09"===e.name?"bg-purple-100 text-purple-500":""} ${"\uc911\uae09"===e.name?"bg-green-100 text-green-500":""}\n                              ${"\ucd08\uae09"===e.name?"bg-yellow-100 text-yellow-500":""} `:"opacity-75"}  `},j(e.name)))))),f("div",{className:"flex flex-col items-center mt-20"},f("span",{className:"h-5 cursor-pointer mb-5 flex items-center font-medium",onClick:L},null===N?"Filter by Price":f("svg",{fill:"currentColor",viewBox:"0 0 20 20",className:"w-5 h-5 text-gray-600"},f("path",{d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd",fillRule:"evenodd"}))),f("div",{className:"grid grid-cols-2 gap-5"},f("span",{onClick:()=>k(1),className:`cursor-pointer ${null===N?"opacity-100":""} bg-gray-200 text-gray-900 inline-flex justify-center items-center px-4 py-1 rounded-full font-medium leading-5 ${1===N?"opacity-100 shadow-sm bg-teal-100 text-teal-700":"opacity-75"}  `},j("Free")),f("span",{onClick:()=>k(2),className:`cursor-pointer ${null===N?"opacity-100":""} bg-gray-200 text-gray-900 inline-flex justify-center items-center px-4 py-1 rounded-full font-medium leading-5 ${2===N?"opacity-100 shadow-sm bg-blue-100 text-blue-700":"opacity-75"}  `},j("Paid"))))),f("div",{className:"flex flex-col items-center"},f("span",{className:"h-5 cursor-pointer flex items-center mb-5 font-medium",onClick:$},null===h?"Filter by Tech":f("svg",{fill:"currentColor",viewBox:"0 0 20 20",className:"w-5 h-5 text-gray-600"},f("path",{d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd",fillRule:"evenodd"}))),f("div",{className:"grid grid-cols-5 md:grid-cols-5 gap-x-3 lg:gap-y-0 gap-y-2"},null===o||void 0===o||null===(t=o.filterBadges)||void 0===t?void 0:t.map(((e,t)=>e&&f(g.a,{key:t,onClick:()=>(e=>w(e))(t),url:(null===e||void 0===e?void 0:e.image)||"",name:null===e||void 0===e?void 0:e.name,imgClassName:"w-20 h-20 border-4",className:"cursor-pointer "+(h===t||null===h?"opacity-100":"opacity-50")})))))),f("div",null,0!==(null===(a=O())||void 0===a?void 0:a.length)?f(c.a,{courses:O()}):f("div",{className:" shadow-inner mx-auto bg-gray-50 sm:rounded-lg"},f("div",{className:"px-4 py-5 sm:p-6"},f("h3",{className:"text-lg leading-6 font-medium text-gray-900"},"No courses found."),f("div",{className:"mt-2 max-w-xl text-sm leading-5 text-gray-500"},f("p",null,"There are no courses with your filter criteria")),f("div",{className:"mt-5"},f("span",{className:"inline-flex rounded-md shadow-sm"},f("button",{onClick:()=>{T(),$(),L()},type:"button",className:"inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring  focus:ring-blue-400  active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"},"Clear all filters")))))))))}},dkkg:function(e,t,a){"use strict";a.d(t,"e",(function(){return s})),a.d(t,"c",(function(){return i})),a.d(t,"f",(function(){return r})),a.d(t,"b",(function(){return d})),a.d(t,"h",(function(){return m})),a.d(t,"d",(function(){return u})),a.d(t,"g",(function(){return c})),a.d(t,"a",(function(){return g})),a.d(t,"j",(function(){return p})),a.d(t,"i",(function(){return v}));var n=a("lTCR"),l=a.n(n);const s=l.a`
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
`,o=l.a`
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
`,i=l.a`
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
  ${o}
`,r=l.a`
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
`,d=l.a`
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
`,m=l.a`
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
`,u=l.a`
  fragment CouponParts on CouponType {
    created
    discountAmount
    used
    id
    isExpired
    expirationDate
  }
`,c=l.a`
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
`,v=l.a`
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
`},ogOi:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),s=a("/QsD"),o=l.a.createElement;t.a=({courses:e})=>o("div",{className:"max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-5 gap-x-10 pb-10"},null===e||void 0===e?void 0:e.map((e=>o(s.a,{course:e,key:null===e||void 0===e?void 0:e.slug}))))},p3ZU:function(e,t,a){"use strict";var n=a("MX0m"),l=a.n(n),s=a("q1tI"),o=a.n(s).a.createElement;t.a=({url:e,name:t,className:a,onClick:n,imgClassName:s="w-24 h-24 sm:h-32 sm:w-32 border-8"})=>o("div",{onClick:n||(()=>null),className:`jsx-876546408 flex flex-col items-center justify-center ${a}`},o("div",{id:"badgeImg",style:{backgroundSize:"cover",backgroundPosition:"center center",backgroundImage:`url("${e}")`},className:`jsx-876546408 rounded-full shadow-lg border-white  bg-white ${s}`}),o("span",{className:"jsx-876546408 text-center hidden md:block mt-3 z-50 relative bg-gray-100 shadow font-medium text-gray-500 text-sm py-x px-2 rounded"},t),o(l.a,{id:"876546408"},["span.jsx-876546408{opacity:0;z-index:0;-webkit-transform:translateY(-20px);-ms-transform:translateY(-20px);transform:translateY(-20px);-webkit-transition:-webkit-transform 0.2s ease-in-out,opacity 0.2s ease-in-out;-webkit-transition:transform 0.2s ease-in-out,opacity 0.2s ease-in-out;transition:transform 0.2s ease-in-out,opacity 0.2s ease-in-out;}","#badgeImg.jsx-876546408{-webkit-transition:-webkit-transform 0.2s ease-in-out;-webkit-transition:transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out;}","div.jsx-876546408:hover #badgeImg.jsx-876546408{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}","div.jsx-876546408:hover span.jsx-876546408{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}"]))}},[["XzLi",2,1,5,0,3,4,6,7]]]);