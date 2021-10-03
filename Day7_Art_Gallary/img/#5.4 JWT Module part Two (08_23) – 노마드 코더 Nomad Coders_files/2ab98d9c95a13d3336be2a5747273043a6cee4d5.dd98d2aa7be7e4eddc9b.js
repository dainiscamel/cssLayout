(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"/QsD":function(e,t,l){"use strict";var n=l("q1tI"),a=l.n(n),o=l("YFqc"),r=l.n(o),i=l("20a2"),s=l.n(i),c=l("vOnD"),d=l("4C6B"),u=l("kiXb"),m=a.a.createElement;const g=c.a.div`
  ${e=>e.clickeable?"\n    cursor:pointer;\n    &:hover {\n    .bg {\n      transform: translateY(-5px);\n    }\n    .info {\n      transform: translateY(-10px);\n    }\n    img {\n      transform: scale(1.1);\n    }\n  }":""};
`;t.a=({course:e,clickeable:t=!0})=>{const{t:l}=Object(u.useTranslation)();return m(g,{onClick:()=>{if(t&&(null===e||void 0===e||!e.isComingSoon)){null!==e&&void 0!==e&&e.isEnrolled?s.a.push("/[course]/lobby",`/${null===e||void 0===e?void 0:e.slug}/lobby`):s.a.push(`/${null===e||void 0===e?void 0:e.slug}`);!0&&window.scrollTo(0,0)}},className:"flex flex-col items-center",clickeable:t&&!(null!==e&&void 0!==e&&e.isComingSoon)},m("div",{className:"overflow-hidden bg rounded-lg relative bg-white shadow-lg",style:{transition:"transform 0.2s ease-in-out"}},(null===e||void 0===e?void 0:e.level)&&m("span",{style:{position:"absolute",top:10,left:10},className:`inline-flex items-center px-3 py-0.5 z-10 rounded-full text-sm font-medium leading-5 ${"\uace0\uae09"===e.level.name?"bg-purple-100 text-purple-500":""} ${"\uc911\uae09"===e.level.name?"bg-green-100 text-green-500":""}\n            ${"\ucd08\uae09"===e.level.name?"bg-yellow-100 text-yellow-600":""} shadow`},l(null===e||void 0===e?void 0:e.level.name)),m("img",{src:null===e||void 0===e?void 0:e.thumbnail,className:"w-full",style:{transition:"transform 0.2s ease-in-out"}})),m("div",{className:"text-center info shadow-xl flex flex-col w-11/12 justify-center  relative bg-white -top-14 rounded-lg z-0 py-5 px-2",style:{transition:"transform 0.2s ease-in-out",textOverflow:"ellipsis",maxHeight:106}},null!==e&&void 0!==e&&e.isComingSoon?m("div",{className:"px-4"},m("h3",{className:"text-xl overflow-hidden"},e?l(e.name):"Loading..."),m("h4",{className:"mt-2 mb-1"},"Coming Soon")):null!==e&&void 0!==e&&e.isEnrolled?t?m(r.a,{href:"/[course]/lobby",as:`/${null===e||void 0===e?void 0:e.slug}/lobby`},m("a",{className:"px-4"},m("h3",{className:"text-xl overflow-hidden mb-5 w-full",style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}},l(null===e||void 0===e?void 0:e.name)),m(d.a,{progress:(null===e||void 0===e?void 0:e.progress)||0,progressLectures:(null===e||void 0===e?void 0:e.progressLectures)||0}))):m("div",{className:"px-4"},m("h3",{className:"text-xl overflow-hidden mb-5",style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}},l(null===e||void 0===e?void 0:e.name)),m(d.a,{progress:(null===e||void 0===e?void 0:e.progress)||0,progressLectures:(null===e||void 0===e?void 0:e.progressLectures)||0})):t?m(r.a,{href:`/${null===e||void 0===e?void 0:e.slug}`},m("a",null,m("h3",{className:"text-xl overflow-hidden"},e?l(e.name):"Loading..."),(null===e||void 0===e?void 0:e.subtitleOne)&&m("h4",{className:"mt-2 mb-1"},l(null===e||void 0===e?void 0:e.subtitleOne)),(null===e||void 0===e?void 0:e.subtitleTwo)&&m("h4",{className:"text-sm"},l(null===e||void 0===e?void 0:e.subtitleTwo)))):m("span",null,m("h3",{className:"text-xl overflow-hidden"},e?l(e.name):"Loading..."),(null===e||void 0===e?void 0:e.subtitleOne)&&m("h4",{className:"mt-2 mb-1"},l(null===e||void 0===e?void 0:e.subtitleOne)),(null===e||void 0===e?void 0:e.subtitleTwo)&&m("h4",{className:"text-sm"},l(null===e||void 0===e?void 0:e.subtitleTwo)))))}},"2l1A":function(e,t,l){"use strict";var n=l("q1tI"),a=l("20a2"),o=l("MO+g");t.a=(e,t)=>{const l=Object(o.a)(),r=Object(a.useRouter)();Object(n.useEffect)((()=>{l||(r.replace({pathname:"/join",query:{flash:e}}),localStorage.setItem("returnUrl",t))}),[l])}},"4C6B":function(e,t,l){"use strict";var n=l("q1tI"),a=l.n(n),o=a.a.createElement;t.a=({progress:e,progressLectures:t})=>{const l=()=>{if(0!==e&&0!==t){const l=Math.floor(e/t*100);return l>100?100:l}return 0};return o(a.a.Fragment,null,o("div",{className:"h-3 w-full bg-blue-200 rounded-full relative"},o("div",{className:"h-3 bg-blue-700 rounded-full",style:{width:`${l()}%`}})),o("span",{className:"mt-3 text-md font-medium block"},l(),"% complete"))}},FAu7:function(e,t,l){"use strict";l.r(t),l.d(t,"tints",(function(){return N}));var n=l("q1tI"),a=l.n(n),o=l("Ue4y"),r=l("Lw9q"),i=l("20a2"),s=l("2l1A"),c=l("d9lX"),d=l("/QsD"),u=l("0b+E"),m=l("lTCR"),g=l.n(m),p=l("ttZb"),v=l("WoFR"),h=l("Py3f"),f=l("H8eV"),b=l("WxHy"),w=l("fdqv"),x=l("YFqc"),y=l.n(x),C=a.a.createElement;const N={"airbnb-challenge":{tintColor:"#FF385C",titleColor:"white"},"css-layout-challenge":{tintColor:"#0474EA",titleColor:"white"},"instaclone-challenge":{tintColor:"#E02541",titleColor:"white"},"kokoa-challenge":{tintColor:"#FADE4B",titleColor:"black"},"nuber-eats-challenge":{tintColor:"#19262B",titleColor:"white"},"python-challenge":{tintColor:"#FFCE42",titleColor:"#3671A3"},"reactjs-challenge":{tintColor:"#282C34",titleColor:"white"},"vanillajs-challenge":{tintColor:"#ECC94B",titleColor:"#2C3135"},"wetube-challenge":{tintColor:"#ff0400",titleColor:"white"}},O=g.a`
  mutation joinChallenge($slug: String!) {
    joinChallenge(slug: $slug) {
      ok
    }
  }
`;t.default=()=>{var e,t,l,m,x,$,j;const T=Object(i.useRouter)(),k=T.query.challenge?T.query.challenge.toString():"",{data:E}=Object(c.a)(k),{data:F}=Object(h.a)(),[P,{loading:D,called:S}]=Object(p.b)(O,{variables:{slug:k},update:(e,t)=>{var l,n;if(null!==(l=t.data)&&void 0!==l&&null!==(n=l.joinChallenge)&&void 0!==n&&n.ok&&null!==F&&void 0!==F&&F.me){var a,o,r;const t=`user:${F.me.username}`;if(null!==E&&void 0!==E&&null!==(a=E.challenge)&&void 0!==a&&a.canEnroll){const l=g.a`
          fragment waitingChallenges on UserType {
            enrolledChallenges {
              slug
            }
          }
        `,n=e.readFragment({id:t,fragment:l});n&&"enrolledChallenges"in n&&e.writeFragment({id:t,fragment:l,data:{__typename:"UserType",enrolledChallenges:[null===E||void 0===E?void 0:E.challenge,...n.enrolledChallenges]}});const a=g.a`
          fragment isEnrolled on ChallengeType {
            isEnrolled
          }
        `;e.writeFragment({id:`challenge:${k}`,fragment:a,data:{__typename:"ChallengeType",isEnrolled:!0}})}else{const l=g.a`
          fragment waitingChallenges on UserType {
            waitlistChallenges {
              slug
            }
          }
        `,n=e.readFragment({id:t,fragment:l});n&&"waitlistChallenges"in n&&e.writeFragment({id:t,fragment:l,data:{__typename:"UserType",waitlistChallenges:[null===E||void 0===E?void 0:E.challenge,...n.waitlistChallenges]}});const a=g.a`
          fragment isWaiting on ChallengeType {
            isWaiting
          }
        `;e.writeFragment({id:`challenge:${k}`,fragment:a,data:{__typename:"ChallengeType",isWaiting:!0}})}const l=`course:${null===E||void 0===E||null===(o=E.challenge)||void 0===o?void 0:o.course.slug}`,n=g.a`
        fragment promptCourse on CourseType {
          promptChallenge
        }
      `,s=e.readFragment({id:l,fragment:n});var i;if(s&&"promptChallenge"in s)e.writeFragment({id:`course:${null===E||void 0===E||null===(i=E.challenge)||void 0===i?void 0:i.course.slug}`,fragment:n,data:{__typename:"CourseType",promptChallenge:!1}});u.a.event({category:"Challenges",action:`Enrolled in ${k}`}),T.push(`/c/${null===E||void 0===E||null===(r=E.challenge)||void 0===r?void 0:r.slug}/lobby`)}}});Object(n.useEffect)((()=>{window.scrollTo(0,0)}),[]),Object(s.a)("\ucc4c\ub9b0\uc9c0 \uc2e0\uccad\uc744 \ud558\ub824\uba74, \uba3c\uc800 \ub85c\uadf8\uc778 \ud574\uc57c \ud569\ub2c8\ub2e4.",`/c/${k}/join`),Object(n.useEffect)((()=>{!S&&null!==E&&void 0!==E&&E.challenge&&(E.challenge.isEnrolled||E.challenge.isWaiting||E.challenge.isOnReview||E.challenge.isCompleted)&&T.replace("/challenges")}),[E,S]);const{0:R,1:q}=Object(n.useState)(0);return Object(n.useEffect)((()=>{var e;null!==E&&void 0!==E&&E.challenge&&(null!==E&&void 0!==E&&null!==(e=E.challenge)&&void 0!==e&&e.inProgress&&E.challenge.nextStartDate&&E.challenge.nextFinishDate?q(E.challenge.nextStartDate):E.challenge.comingSoon&&E.challenge.startDate&&E.challenge.finishDate&&q(E.challenge.startDate))}),[E]),C(o.a,null,C(f.a,{pageTitle:"Join Challenge \u2013 \ub178\ub9c8\ub4dc \ucf54\ub354 Nomad Coders",description:"\uac15\uc758\ub9cc\uc73c\ub85c\ub294 \ubd80\uc871\ud574! \uba71\uc0b4\uc7a1\uace0 \uce90\ub9ac\ud558\ub294 \ucc4c\ub9b0\uc9c0\uc5d0 \ubb34\ub8cc\ub85c \ucc38\uc5ec\ud558\uc138\uc694!",path:`/c/${k}/join`,image:"challenges"}),C(b.a,{childrenClassName:"pt-10 sm:px-6 md:pt-16 lg:pt-20 pb-0",bgColor:""===k?"#3B81F6":N[k].tintColor,angleBottom:!0},C("div",{className:"flex flex-col items-center pt-10 pb-5"},C("h1",{style:{color:""===k?"white":N[k].titleColor},className:"text-5xl sm:text-5xl text-center"},null===E||void 0===E||null===(e=E.challenge)||void 0===e?void 0:e.name,C("br",null),"\uc2e0\uccad\ud558\uae30"))),C("div",{className:"mt-0 md:mt-16 z-10 relative mb-20 flex justify-center text-sm font-semibold"},C("span",{className:"bg-blue-500 text-white px-5 py-1 shadow-md rounded-full mr-1"},null===E||void 0===E||null===(t=E.challenge)||void 0===t?void 0:t.duration),C("span",{className:"text-blue-500 bg-white px-5 py-1 shadow-md rounded-full ml-1"},"D-",Object(w.e)(R)," \uc2dc\uc791")),C(r.a,null,C("div",{className:"mb-80 max-w-sm w-full mx-auto"},null!==E&&void 0!==E&&E.challenge?C("div",{className:"flex flex-col items-center justify-center"},null!==E&&void 0!==E&&null!==(l=E.challenge)&&void 0!==l&&l.course.isEnrolled?C(a.a.Fragment,null,C("div",{className:"rounded-md bg-green-50 p-4 mb-10"},C("div",{className:"flex"},C("div",{className:"flex-shrink-0"},C("svg",{className:"h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},C("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}))),C("div",{className:"ml-3"},C("h3",{className:" font-bold text-green-800"},"\uc218\uac15\uc0dd \uc785\ub2c8\ub2e4."),C("div",{className:"mt-2 text-green-700"},C("p",null,"\uc544\ub798 \ubc84\ud2bc\uc744 \ub20c\ub7ec \ucc4c\ub9b0\uc9c0\ub97c \uc2e0\uccad\ud558\uc138\uc694."))))),D?C(v.a,{size:"xl",spinnerClassName:"bg-gray-700"}):C("span",{onClick:()=>{P()},className:"font-medium mb-4 px-4 text-lg md:w-52 bg-blue-500 text-white py-3 rounded-lg cursor-pointer transition-colors hover:bg-blue-400 text-center"},"\ucc4c\ub9b0\uc9c0 \uc2e0\uccad \u2192")):C(a.a.Fragment,null,C("div",{className:"rounded-md bg-red-50 p-4 mb-10"},C("div",{className:"flex"},C("div",{className:"flex-shrink-0"},C("svg",{className:"h-5 w-5 text-red-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},C("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}))),C("div",{className:"ml-3"},C("h3",{className:" font-bold text-red-800"},"\uc218\uac15\uc0dd\uc774 \uc544\ub2d9\ub2c8\ub2e4."),C("div",{className:"mt-2 text-red-700"},C("p",null,"\uc544\ub798 \uac15\uc758 \uc2e0\uccad \ud6c4, \uc774 \ud398\uc774\uc9c0\ub97c \uc0c8\ub85c\uace0\uce68 \ud558\uc138\uc694."))))),C(d.a,{clickeable:!1,course:{name:null===E||void 0===E||null===(m=E.challenge)||void 0===m?void 0:m.course.name,subtitleOne:null===E||void 0===E||null===(x=E.challenge)||void 0===x?void 0:x.course.subtitleOne,thumbnail:null===E||void 0===E||null===($=E.challenge)||void 0===$?void 0:$.course.thumbnail,slug:null===E||void 0===E||null===(j=E.challenge)||void 0===j?void 0:j.course.slug}}),C(y.a,{href:`/${E.challenge.course.slug}`},C("a",{className:"mt-0 font-medium mb-4 px-4 text-lg md:w-52 bg-blue-500 text-white py-3 rounded-lg cursor-pointer transition-colors hover:bg-blue-400 text-center"},"\uba3c\uc800! \uac15\uc758 \uc2e0\uccad \u2192")))):C("div",{className:"py-28"}))))}},H8eV:function(e,t,l){"use strict";var n=l("q1tI"),a=l.n(n),o=l("g4pe"),r=l.n(o),i=a.a.createElement;t.a=({description:e="",pageTitle:t,ogTitle:l=t,image:n="graphDefault",price:a,index:o,path:s})=>i(r.a,null,i("title",null,t),i("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i("meta",{name:"description",content:e}),i("meta",{property:"og:title",content:l}),i("meta",{property:"og:type",content:"website"}),i("meta",{property:"og:url",content:`https://nomadcoders.co${s}`}),i("meta",{property:"og:image",content:`https://d1telmomo28umc.cloudfront.net/media/seo/${n}.jpg`}),i("meta",{property:"og:description",content:e}),i("meta",{property:"og:site_name",content:"Nomad Coders"}),i("meta",{property:"og:locale",content:"ko_KR"}),i("meta",{property:"og:image:width",content:"1200"}),i("meta",{property:"og:image:height",content:"630"}),i("meta",{property:"fb:admins",content:"2366600330252017"}),i("meta",{charSet:"utf-8"}),i("link",{rel:"canonical",href:"https://nomadcoders.co/"}),i("meta",{name:"robots",content:"index, follow"}),i("meta",{name:"twitter:title",content:l}),i("meta",{name:"twitter:description",content:e}),i("meta",{name:"twitter:image",content:n}),i("meta",{name:"naver-site-verification",content:"202966525a961e258ded0fcc0042857cea6d15f3"}))},Lw9q:function(e,t,l){"use strict";var n=l("q1tI"),a=l.n(n).a.createElement;t.a=({children:e})=>a("div",{className:"mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"},e)},WxHy:function(e,t,l){"use strict";var n=l("rePB"),a=l("q1tI"),o=l.n(a),r=l("vOnD"),i=o.a.createElement;const s=(e,t,l)=>{let n="",a="",o="",r=l||5;switch(e){case"left":a="top"===t?-r:r,o="left";break;case"right":a="top"===t?r:-r,o="right";break;default:a="",o=""}return n=`${t}:0; transform-origin: ${o} ${t}; transform: skewY(${a}deg);`,n},c="\n        content: '';\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        background: inherit;\n        z-index: -1;\n    ",d=r.a.div`
  ${e=>e.attrs.noMargin?null:(e=>{let t=0,l=0;return void 0!==e.top&&(t=70),void 0!==e.bottom&&(l=70),`margin: ${t}px 0px ${l}px 0px;`})(e.attrs)}
  width: 100%;
  position: relative;
  background-color: ${e=>e.attrs.bgColor} !important;
  z-index: 2;
  min-height: 200px;
  &:before {
    ${c}
    ${e=>s(e.attrs.top,"top",e.attrs.skew)}
  }
  &:after {
    ${c}
    ${e=>s(e.attrs.bottom,"bottom",e.attrs.skew)}
  }
`,u=r.a.div`
  width: 100%;
  overflow: visible;
`;var m=e=>i(d,{attrs:e,style:e.style,className:e.className},i(u,{style:{width:"100%",overflow:"visible"}},e.children)),g=o.a.createElement;function p(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function v(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?p(Object(l),!0).forEach((function(t){Object(n.a)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):p(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}t.a=({containerClassName:e,childrenClassName:t,bgColor:l,angleTop:n,angleBottom:a,children:o,forcedContainerStyle:r,skew:i=5})=>n||a?g(m,{bgColor:l,top:n?"left":void 0,bottom:a?"right":void 0,noMargin:!0,skew:i,className:`w-full ${e||""}`},g("div",{style:r||{},className:`mx-auto max-w-screen-xl px-4 ${t||""} sm:px-6 lg:px-8`},o)):g("section",{style:v({},l&&{background:l}),className:`w-full ${e||""}`},g("div",{className:`mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8  ${t||""}`},o))},d9lX:function(e,t,l){"use strict";var n=l("lTCR"),a=l.n(n),o=l("ttZb"),r=l("dkkg");const i=a.a`
  query challenge($slug: String!) {
    challenge(slug: $slug) {
      ...ChallengeCard
      finishDate
      nextStartDate
      nextFinishDate
      waitingNumber
    }
    challengeFaqs {
      question
      answer
    }
  }
  ${r.b}
`;t.a=e=>Object(o.c)(i,{variables:{slug:e},skip:""===e})},dkkg:function(e,t,l){"use strict";l.d(t,"e",(function(){return o})),l.d(t,"c",(function(){return i})),l.d(t,"f",(function(){return s})),l.d(t,"b",(function(){return c})),l.d(t,"h",(function(){return d})),l.d(t,"d",(function(){return u})),l.d(t,"g",(function(){return m})),l.d(t,"a",(function(){return g})),l.d(t,"j",(function(){return p})),l.d(t,"i",(function(){return v}));var n=l("lTCR"),a=l.n(n);const o=a.a`
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
`,r=a.a`
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
`,i=a.a`
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
  ${r}
`,s=a.a`
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
`,c=a.a`
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
`,d=a.a`
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
`,u=a.a`
  fragment CouponParts on CouponType {
    created
    discountAmount
    used
    id
    isExpired
    expirationDate
  }
`,m=a.a`
  fragment NoteParts on NoteType {
    id
    content
    minutes
    seconds
    created
  }
`,g=a.a`
  fragment CategoryParts on CategoryType {
    name
    id
    slug
    isPublic
    tagline
    totalThreads
  }
`,p=a.a`
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
`,v=a.a`
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
`}}]);