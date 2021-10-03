(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"3U7G":function(e,t,a){"use strict";var l=a("q1tI"),s=a.n(l),n=s.a.createElement;const o=({hasLink:e,children:t,username:a})=>e?n("a",{href:`/users/${a}`,target:"_blank"},t):n(s.a.Fragment,null,t);t.a=({url:e,className:t="w-16",tier:a,username:l="",xl:s,hasLink:r})=>n(o,{hasLink:r,username:l},n("div",{className:`${t} relative`},e?n("img",{src:e,className:"w-full rounded-full"}):n("div",{className:"w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-gray-100 "},n("svg",{className:"w-full h-full text-gray-300",fill:"currentColor",viewBox:"0 0 24 24"},n("path",{d:"M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"}))),a&&"[deleted]"!==l&&n("img",{src:`/badges/shield_${a}.svg`,className:`absolute ${s?"right-0 w-3/12 bottom-0":" w-6 -mt-6 right-0"} `})))},Lw9q:function(e,t,a){"use strict";var l=a("q1tI"),s=a.n(l).a.createElement;t.a=({children:e})=>s("div",{className:"mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"},e)},NoO4:function(e,t,a){"use strict";var l=a("q1tI"),s=a.n(l),n=a("YFqc"),o=a.n(n),r=s.a.createElement;t.a=({slug:e,isChallenge:t=!1,enrolledText:a,cta:l})=>r("div",{className:"fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-50"},r("div",{className:"max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8"},r("div",{className:"p-2 rounded-lg bg-green-500 shadow-lg sm:p-3"},r("div",{className:"flex items-center justify-between flex-wrap"},r("div",{className:"flex-1 flex justify-center md:justify-start items-center"},r("span",{className:"flex p-2 rounded-lg "},r("svg",{className:"h-6 w-6 text-white",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},r("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"}))),r("p",{className:"ml-3 font-medium text-white truncate"},r("span",{className:"md:inline"},a))),l&&r("div",{className:"order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"},r("div",{className:"rounded-md shadow-sm"},r(o.a,{href:t?"/c/[challenge]/lobby":"/[course]/lobby",as:t?`/c/${e}/lobby`:`/${e}/lobby`},r("a",{className:"flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-green-600 bg-white hover:text-green-500 focus:outline-none focus:ring  focus:ring-blue-400 transition ease-in-out duration-150"},l))))))))},d9lX:function(e,t,a){"use strict";var l=a("lTCR"),s=a.n(l),n=a("ttZb"),o=a("dkkg");const r=s.a`
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
  ${o.b}
`;t.a=e=>Object(n.c)(r,{variables:{slug:e},skip:""===e})},dkkg:function(e,t,a){"use strict";a.d(t,"e",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"f",(function(){return i})),a.d(t,"b",(function(){return d})),a.d(t,"h",(function(){return c})),a.d(t,"d",(function(){return m})),a.d(t,"g",(function(){return u})),a.d(t,"a",(function(){return g})),a.d(t,"j",(function(){return h})),a.d(t,"i",(function(){return p}));var l=a("lTCR"),s=a.n(l);const n=s.a`
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
`,o=s.a`
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
`,r=s.a`
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
`,i=s.a`
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
`,d=s.a`
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
`,c=s.a`
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
`,m=s.a`
  fragment CouponParts on CouponType {
    created
    discountAmount
    used
    id
    isExpired
    expirationDate
  }
`,u=s.a`
  fragment NoteParts on NoteType {
    id
    content
    minutes
    seconds
    created
  }
`,g=s.a`
  fragment CategoryParts on CategoryType {
    name
    id
    slug
    isPublic
    tagline
    totalThreads
  }
`,h=s.a`
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
`,p=s.a`
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
`},l1Az:function(e,t,a){"use strict";a.d(t,"h",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"j",(function(){return r})),a.d(t,"g",(function(){return i})),a.d(t,"e",(function(){return d})),a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return m})),a.d(t,"f",(function(){return u})),a.d(t,"i",(function(){return g})),a.d(t,"d",(function(){return h}));var l=a("NyWP");const s="https://api.nomadcoders.co",n=async()=>{try{const{status:e}=await fetch(`${s}/api/v1/users/is-logged-in`,{credentials:"include"});if(200!==e)throw Error();return!0}catch(e){return!1}},o=async e=>{try{const{status:t}=await fetch(`${s}/api/v1/users/complete-login`,{method:"POST",body:JSON.stringify({token:e}),headers:{"Content-Type":"application/json"},credentials:"include"});if(200!==t)throw Error();return!0}catch(t){return!1}},r=async e=>{try{const t=await fetch(e),a=await t.blob(),n=new FormData,{csrftoken:o}=Object(l.parseCookies)();n.append("avatar",a,"avatar");const{status:r}=await fetch(`${s}/api/v1/users/upload-avatar`,{method:"POST",body:n,headers:{"X-CSRFToken":o},credentials:"include"});if(200!==r)throw Error();return!0}catch(t){return console.log(t),!1}},i=async e=>{try{const t=new FormData;t.append("image",e),t.append("name",e.name),t.append("type","file");const a=await fetch("https://imgur-apiv3.p.rapidapi.com/3/image",{method:"POST",headers:{"x-rapidapi-host":"imgur-apiv3.p.rapidapi.com","x-rapidapi-key":"2ed3358e03msh3b67bd9bbf23302p1b655djsna503faeb2a0b",authorization:"Client-ID 0eae897bb46cebe"},body:t}),{data:l}=await a.json();return l?l.link:""}catch(t){return console.log(t),""}},d=async(e,t)=>{try{const a=await fetch("/api/cert-screenshot",{method:"POST",body:JSON.stringify({url:e,uuid:t})});if(200===a.status){const e=await a.json();if(e.url)return e.url}}catch(a){return console.log(a),""}},c=async e=>{try{const{status:t}=await fetch(`${s}/api/v1/users/github-login`,{method:"POST",body:JSON.stringify({code:e}),headers:{"Content-Type":"application/json"},credentials:"include"});if(200!==t)throw Error();return!0}catch(t){return!1}},m=async(e,t)=>{try{const{status:a}=await fetch(`${s}/api/v1/users/kakao-login`,{method:"POST",body:JSON.stringify({code:e,redirect_url:t}),headers:{"Content-Type":"application/json"},credentials:"include"});if(200!==a)throw Error();return!0}catch(a){return!1}},u=async()=>{let e=new Date;e.setDate(e.getDate()-1),e=e.toISOString().split("T")[0];try{const{rates:t}=await(await fetch(`https://api.exchangeratesapi.io/${e}?symbols=USD,KRW&base=KRW`)).json();return t.USD||0}catch(t){return 0}},g=async e=>{try{const{csrftoken:t}=Object(l.parseCookies)();await fetch(`${s}/api/v1/users/ref-sink`,{method:"POST",body:JSON.stringify({ref:e}),headers:{"X-CSRFToken":t,"Content-Type":"application/json"},credentials:"include"})}catch(t){console.log(t)}},h=async e=>{try{return await(await fetch(`${s}/api/v1/users/find-profile?pk=${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()}catch(t){console.log(t)}}},xTKP:function(e,t,a){"use strict";var l=a("q1tI"),s=a.n(l),n=a("l1Az"),o=a("3U7G"),r=s.a.createElement;t.a=({pk:e,hideAvatar:t=!1})=>{const{0:a,1:s}=Object(l.useState)(null);return Object(l.useEffect)((()=>{(async()=>{const t=await Object(n.d)(e);t&&s(t)})()}),[]),a?r("div",{className:"flex items-center"},t?null:r(o.a,{url:a.avatar,username:a.username,hasLink:!0,xl:!1,className:"w-9"}),r("a",{target:"_blank",href:`/users/${a.username}`,className:"text-xs ml-2 font-medium text-blue-500"},a.username)):r("div",{className:"px-9"})}},"zq+d":function(e,t,a){"use strict";var l=a("YFqc"),s=a.n(l),n=a("q1tI"),o=a.n(n),r=a("d9lX"),i=a("fdqv"),d=a("NoO4"),c=a("CI6J"),m=a("WxHy"),u=a("Lw9q"),g=a("Ue4y"),h=a("xTKP"),p=a("H8eV"),f=o.a.createElement;t.a=({tintColor:e,name:t,courseName:a,slug:l,weekNumber:v,duration:x,faqLink:b,hasBonus:w,discountAmount:N,scheduleLink:y,tasks:k,results:C,reviews:j,lgReviews:L,seoImage:M,cta:z,titleColor:T})=>{var D,O,S,$,E,H,R,B,P,F,q,W,V,A,I,Z,_,J,U,K,X,G,Y,Q;const{data:ee}=Object(r.a)(l),{0:te,1:ae}=Object(n.useState)(0),{0:le,1:se}=Object(n.useState)(0);Object(n.useEffect)((()=>{var e;null!==ee&&void 0!==ee&&ee.challenge&&(null!==ee&&void 0!==ee&&null!==(e=ee.challenge)&&void 0!==e&&e.inProgress&&ee.challenge.nextStartDate&&ee.challenge.nextFinishDate?(ae(ee.challenge.nextStartDate),se(ee.challenge.nextFinishDate)):ee.challenge.comingSoon&&ee.challenge.startDate&&ee.challenge.finishDate&&(ae(ee.challenge.startDate),se(ee.challenge.finishDate)))}),[ee]);const{0:ne,1:oe}=Object(n.useState)(0),re=()=>{L&&j&&oe((e=>0===e?0:e-1))};return f(g.a,null,f(p.a,{pageTitle:`${t} \u2013 \ub178\ub9c8\ub4dc \ucf54\ub354 Nomad Coders`,ogTitle:t,description:`\uc218\uac15\uc0dd\uc774\ub77c\uba74 \ub204\uad6c\ub098 \ubb34\ub8cc\ub85c \ucc38\uc5ec \uac00\ub2a5. \uc878\uc5c5\uc2dc ${N}% \ud560\uc778\ucfe0\ud3f0 \uae4c\uc9c0!`,path:`/${l}`,image:M}),f(m.a,{childrenClassName:"pt-10 sm:px-6 md:pt-16 lg:pt-20 pb-0",bgColor:e,angleBottom:!0},f("div",{className:"flex flex-col items-center pt-10 pb-5"},f("h1",{style:{color:T},className:"text-5xl sm:text-5xl"},t))),f("div",{className:"mt-0 md:mt-16 z-10 relative mb-20 flex justify-center text-sm font-semibold"},f("span",{className:"bg-blue-500 text-white px-5 py-1 shadow-md rounded-full mr-1"},x),f("span",{className:"text-blue-500 bg-white px-5 py-1 shadow-md rounded-full ml-1"},"D-",Object(i.e)(te)," \uc2dc\uc791")),f("div",{className:"absolute w-full hidden lg:block",style:{top:1500}},f(m.a,{bgColor:"#EFF6FF",angleTop:!0,angleBottom:!0})),f("div",{className:"z-10 relative"},f(u.a,null,f("div",{className:"grid grid-cols-4 pb-10 gap-11 h-full min-h-screen relative items-start"},f("div",{className:"z-10 col-span-4 lg:col-span-3"},f("div",{className:"md:mt-5 mb-32  grid grid-cols-1 gap-8 lg:gap-12 sm:grid-cols-3 lg:grid-cols-3"},f("div",{className:"bg-white overflow-hidden shadow rounded-lg"},f("div",{className:"px-4 py-5"},f("div",{className:"flex items-center"},f("div",{className:"flex-shrink-0 bg-blue-500 rounded-md p-3"},f("svg",{className:"h-6 w-6 text-white",fill:"currentColor",viewBox:"0 0 20 20"},f("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"}))),f("div",{className:"ml-5 w-0 flex-1"},f("dl",null,f("dt",{className:"text-sm leading-5 font-medium text-gray-500 truncate"},"\uae30\uac04"),f("dd",{className:"flex items-baseline"},f("div",{className:"text-2xl leading-8 font-semibold text-gray-900"},x))))))),f("div",{className:"bg-white overflow-hidden shadow rounded-lg"},f("div",{className:"px-4 py-5"},f("div",{className:"flex items-center"},f("div",{className:"flex-shrink-0 bg-blue-500 rounded-md p-3"},f("svg",{className:"h-6 w-6 text-white",fill:"currentColor",viewBox:"0 0 20 20"},f("path",{fillRule:"evenodd",d:"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"}))),f("div",{className:"ml-5 w-0 flex-1"},f("dl",null,f("dt",{className:"text-sm leading-5 font-medium text-gray-500 truncate"},"\uacfc\uc81c"),f("dd",{className:"flex items-baseline"},f("div",{className:"text-2xl leading-8 font-semibold text-gray-900"},null===ee||void 0===ee||null===(D=ee.challenge)||void 0===D?void 0:D.assignmentsNumber,"\uac1c"))))))),f("div",{className:"bg-white overflow-hidden shadow rounded-lg"},f("div",{className:"px-4 py-5"},f("div",{className:"flex items-center"},f("div",{className:"flex-shrink-0 bg-blue-500 rounded-md p-3"},f("svg",{className:"h-6 w-6 text-white",fill:"currentColor",viewBox:"0 0 20 20"},f("path",{d:"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"}))),f("div",{className:"ml-5 w-0 flex-1"},f("dl",null,f("dt",{className:"text-sm leading-5 font-medium text-gray-500 truncate"},"\uc2e0\uccad\uc790"),f("dd",{className:"flex items-baseline"},f("div",{className:"text-2xl leading-8 font-semibold text-gray-900"},null!==ee&&void 0!==ee&&null!==(O=ee.challenge)&&void 0!==O&&O.canEnroll||null!==ee&&void 0!==ee&&null!==(S=ee.challenge)&&void 0!==S&&S.isEnrolled?null===ee||void 0===ee||null===($=ee.challenge)||void 0===$?void 0:$.challengersNumber:null===ee||void 0===ee||null===(E=ee.challenge)||void 0===E?void 0:E.waitingNumber,"\uba85")))))))),f("div",{className:"block -mt-10 mb-20 bg-gray-50 py-10 px-14 rounded-md lg:hidden"},f("span",{className:"text-blue-500 font-semibold text-xl mb-14 block"},z.title),f("div",{className:"grid gap-8 md:gap-16 md:grid-cols-4 text-gray-600 font-semibold"},f("div",{className:"flex gap-3 md:gap-0 md:flex-col items-center mb-2"},f("svg",{className:"w-7 h-7 mb-1 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},f("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"})),f("span",null,"\uc218\uac15\uc0dd \ubb34\ub8cc \uc81c\uacf5")),f("div",{className:"flex gap-3 md:gap-0 md:flex-col items-center mb-2"},f("svg",{className:"w-7 h-7 mb-1 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},f("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})),f("span",null,"\uc2e4\uc804\ud615 \ucf54\ub529 \uacfc\uc81c")),f("div",{className:"flex gap-3 md:gap-0 md:flex-col items-center mb-2"},f("svg",{className:"w-7 h-7 mb-1 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},f("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})),f("span",null,"\uc9c8\uc758\uc751\ub2f5 \ucee4\ubba4\ub2c8\ud2f0")),f("div",{className:"flex gap-3 md:gap-0 md:flex-col items-center mb-2"},f("svg",{className:"w-7 h-7 mb-1 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},f("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"})),f("span",null,"\uc131\uacf5 \uc2dc ",N,"% \ud560\uc778\ucfe0\ud3f0"))),f(s.a,{href:`/c/${l}/join`},f("a",{className:"mt-8 mb-4 bg-blue-500 max-w-xs mx-auto text-white w-full block py-2 rounded-lg cursor-pointer transition-colors hover:bg-blue-400 text-center"},null!==ee&&void 0!==ee&&null!==(H=ee.challenge)&&void 0!==H&&H.canEnroll?null===ee||void 0===ee||null===(R=ee.challenge)||void 0===R?void 0:R.batch:((null===ee||void 0===ee||null===(B=ee.challenge)||void 0===B?void 0:B.batch)||0)+1,"\uae30 \ub4f1\ub85d\ud558\uae30")),f("span",{className:"text-sm text-center block"},"\ub9c8\uac10: ",new Date(1e3*te).getMonth()+1,"\uc6d4"," ",new Date(1e3*(te-86400)).getDate(),"\uc77c (\uc77c) \uc790\uc815\uae4c\uc9c0")),f("div",{className:"mb-12"},f("h3",{className:"text-3xl mb-3 font-bold"},"\ucc4c\ub9b0\uc9c0\ub294 \uc2ec\uce35 \uad50\uc721 \ud504\ub85c\uadf8\ub7a8 \uc785\ub2c8\ub2e4."),f("p",{className:"text-gray-600 leading-7"},"\ucc4c\ub9b0\uc9c0\ub294 \uc778\ud130\ub137 \uac15\uc758\ub97c \ucf54\ub529 \ucc4c\ub9b0\uc9c0\uc640 \uacb0\ud569\ud558\uc5ec"," ",f("span",{className:"font-bold"},"\uc790\uae30 \uc8fc\ub3c4\uc801\uc778 \ud559\uc2b5"),"\uc744 \ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc90d\ub2c8\ub2e4.",f("br",null),"\uc774\ubbf8 \uc218\ucc9c \uba85\uc758 \uc878\uc5c5\uc0dd\uc774 \uadf8 \ud559\uc2b5 \ud6a8\uacfc\ub97c \uc99d\uba85\ud588\uc5b4\uc694!"),f("div",{className:"flex items-stretch justify-between flex-wrap md:flex-nowrap mt-12 mb-32"},f("div",{className:"bg-white flex items-center flex-col shadow-lg px-9 py-10 rounded-lg"},f("img",{src:`/challenges/screens/${l}.jpeg`,className:"w-3/5 lg:w-full"}),f("span",{className:"text-blue-500 font-semibold mt-5 lg:mt-12 block text-center text-lg"},"\uc628\ub77c\uc778 \uac15\uc758")),f("span",{className:"opacity-0 md:opacity-100 md:flex self-center bg-white mx-4 shadow-md w-5 h-5 flex items-center justify-center rounded-full"},f("svg",{className:"w-6 h-6 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},f("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"}))),f("div",{className:"bg-white flex items-center flex-col shadow-lg px-9 py-10 rounded-lg"},f("img",{src:"/challenges/shared/screen.jpeg",className:"w-3/5 lg:w-full"}),f("span",{className:"text-blue-500 font-semibold mt-5 lg:mt-16 block text-center text-lg"},"\ucf54\ub529 \ucc4c\ub9b0\uc9c0")),f("span",{className:"opacity-0 md:opacity-100 md:flex self-center bg-white mx-4 shadow-md w-5 h-5 flex items-center justify-center rounded-full"},f("svg",{className:"w-6 h-6 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},f("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"}))),f("div",{className:"bg-white flex items-center flex-col shadow-lg px-9 py-10 rounded-lg"},f("img",{src:"/challenges/shared/slack.jpeg",className:"w-3/5 lg:w-full"}),f("span",{className:"text-blue-500 font-semibold mt-5 lg:mt-16 block text-center text-lg"},"\ucee4\ubba4\ub2c8\ud2f0"))),f("div",{className:""},f("h3",{className:"text-3xl mb-3 font-bold"},"\uc2e4\uc804\ud615 \ucf54\ub529\uc744 \uc2dc\uc791\ud558\uc138\uc694!"),f("p",{className:"text-gray-600 leading-7 mb-12"},t,"\uc5d0\uc11c\ub294",f("br",null),"\uae30\uac04 \ub0b4 \ud575\uc2ec \ub0b4\uc6a9\uc744 \uc644\uac15\ud558\uace0, \ud034\uc988\uc640 \uacfc\uc81c\ub85c \uac15\uc758 \ub0b4\uc6a9\uc744",f("span",{className:"font-bold"}," \ub098\ub9cc\uc758 \uc9c0\uc2dd"),"\uc73c\ub85c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",f("br",null),v,"\uc8fc \ud6c4\uc5d0 \ubcf8\uc778\ub9cc\uc758 ",a," \uc644\uc131\ud560 \uc218 \uc788\uc744 \uac70\uc5d0\uc694!"),f("div",{className:""},f("h4",{className:"text-xl mb-5 font-bold"},"\uc218\ud589 \uacfc\uc81c"),f("div",{className:"flex flex-col"},k.map(((e,t)=>f("span",{className:"mb-2 flex items-center",key:t},f("svg",{className:"w-5 h-5 mr-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},f("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"}))," ",e))),f("span",{className:"flex items-center text-gray-500"},f("svg",{className:"w-5 h-5 mr-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},f("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"})),"\uadf8 \uc678 \ub2e4\uc218"))))),f("div",{className:"mb-32"},f("div",{className:"relative z-10 mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 "},C.map(((e,t)=>f("div",{key:t,className:"w-full bg-white shadow-lg relative rounded-md   overflow-hidden"},f("img",{className:" w-full relative z-10 rounded-t-md",src:`/challenges/results/${l}/${t+1}.jpg`}),f("div",{className:"flex px-3 py-2  bg-white absolute bottom-0 w-full  z-50 justify-between items-center text-sm font-medium"},f(h.a,{pk:e.pk,hideAvatar:!0}),f("div",{className:""},e.batch)))))),f("div",{className:"w-full block text-right mt-5"},f("a",{target:"_blank",href:`/faq/challenge/${b}`,className:"text-blue-500 font-medium"},"\ub354 \ub9ce\uc740 \uc878\uc5c5\uc791\ud488 \ubcf4\uae30 \u2192"))),f("div",{className:"mb-32"},f("h3",{className:"text-3xl mb-3 font-bold"},"\ucc4c\ub9b0\uc9c0 \uc131\uacf5 \uc2dc \uc81c\uacf5\ud569\ub2c8\ub2e4."),f("p",{className:"text-gray-600 leading-7"},"\uc5f4\uc2ec\ud788 \ud558\uc2dc\ub77c\uace0 \ud61c\ud0dd\uc744 \ub4dc\ub824\uc694!",f("br",null),"\uc878\uc5c5\uc5d0 \uc131\uacf5\ud55c \uacbd\uc6b0, \ub2e4\uc591\ud55c \ud61c\ud0dd\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),f("div",{className:"mt-10 flex flex-col md:flex-row gap-4 items-center"},w?f(o.a.Fragment,null,f("div",{style:{width:160,height:160},className:"rounded-lg overflow-hidden shadow-lg"},f("div",{style:{height:"70%"},className:"bg-blue-400 py-4 flex items-center justify-center px-8"},f("svg",{width:"37",height:"40",viewBox:"0 0 37 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.2769 5L37 33H0L1.1864 29.5198L10.7646 5H15.1445L18.2963 13.5604L21.8971 5H26.2769ZM15.1445 29.8792H21.4482L20.2618 27.199L18.2963 22.1208L15.1445 29.8792ZM13.1394 7.75942L4.37981 29.8792H11.951L12.3188 29.5198L16.6986 17.8406L15.5122 14.7198L13.1394 7.75942ZM32.2129 29.8792L31.3942 27.199L29.0195 21.3188L26.6466 14.7198L23.8645 7.75942L19.892 17.8406L24.6396 29.8812L32.2129 29.8792Z",fill:"white"}))),f("div",{style:{height:"30%"},className:"bg-blue-100 text-blue-500 font-semibold flex items-center justify-center"},f("span",null,"\ubcf4\ub108\uc2a4 \uac15\uc758"))),f("span",{className:"self-center bg-white  shadow-md w-5 h-5 flex items-center justify-center rounded-full"},f("svg",{className:"w-6 h-6 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},f("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})))):"",f("div",{style:{height:120,width:180},className:"flex"},f("div",{className:"text-blue-500 font-semibold leading-5 rounded-lg shadow-lg w-4/5 px-8 text-center flex items-center justify-between"},"\ucd5c\ub300 ",N,"% ",f("br",{className:"block md:hidden"}),"\ud560\uc778\ucfe0\ud3f0"),f("div",{className:"bg-blue-500 flex border-l-2 border-white border-dashed rounded-lg shadow-lg text-white w-1/5 items-center justify-center"},f("span",{style:{writingMode:"vertical-rl",textOrientation:"sideways-right"},className:"bg-blue-500 md:bg-white text-blue-500   text-sm font-medium  transform rotate-180 rounded-full px-px py-5 "},"\uc0ac\uc6a9\ud558\uae30"))),f("span",{className:"self-center bg-white  shadow-md w-5 h-5 flex items-center justify-center rounded-full"},f("svg",{className:"w-6 h-6 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},f("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"}))),f("div",{style:{height:160,width:130},className:"flex text-blue-500 font-semibold flex-col justify-center items-center bg-white shadow-lg rounded-lg"},f("svg",{className:"w-6 h-6 ",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},f("path",{fillRule:"evenodd",d:"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})),f("span",{className:"my-2"},"\ucc4c\ub9b0\uc9c0 \uc218\ub8cc\uc99d"),f("div",{className:"bg-gray-300 rounded-full w-4/5 py-1 mb-2"}),f("div",{className:"bg-gray-300 rounded-full w-4/5 py-1 mb-2"}),f("div",{className:"bg-gray-300 rounded-full w-4/5 py-1 mb-2"}),f("div",{className:"bg-gray-300 rounded-full w-4/5 py-1 mb-2"})))),f("div",{className:"mb-32 relative"},f("h3",{className:"text-3xl mb-10 font-bold"},"\uc5b4\ub5bb\uac8c \uc9c4\ud589\ub418\ub098\uc694?"),f("div",{className:"flex items-center mb-10 font-medium z-20 relative"},f("span",{className:"bg-blue-500 mr-3 flex items-center justify-center text-white font-medium w-9 h-9 rounded-full"},"1"),f("span",{className:"text-blue-500 w-2/12 md:w-20 font-semibold mr-12"},"\uac15\uc758 \uc2e0\uccad"),f("span",{className:"text-gray-500"},"\uac15\uc758 \uc608\uc2b5\uc740 \ud544\uc218")),f("div",{className:"flex items-center mb-10 font-medium z-20 relative"},f("span",{className:"bg-blue-500 mr-3 flex items-center justify-center text-white font-medium w-9 h-9 rounded-full"},"2"),f("span",{className:"text-blue-500 w-2/12 md:w-20 font-semibold mr-12"},"\ucc4c\ub9b0\uc9c0 ",f("br",{className:"block md:hidden"}),"\uc2e0\uccad"),f("span",{className:"text-gray-500"},"\ucc4c\ub9b0\uc9c0 \uc2e0\uccad\ud558\uae30")),f("div",{className:"flex items-center mb-10 font-medium z-20 relative"},f("span",{className:"bg-blue-500 mr-3 flex items-center justify-center text-white font-medium w-9 h-9 rounded-full"},"3"),f("span",{className:"text-blue-500 w-2/12 md:w-20 font-semibold mr-12"},"\ucc4c\ub9b0\uc9c0!!"),f("span",{className:"text-gray-500"},"\uc878\uc5c5\uc744 \ud5a5\ud574 \ub2ec\ub9ac\uae30!")),f("div",{className:"flex items-center mb-10 font-medium z-20 relative"},f("span",{className:"bg-blue-500 mr-3 flex items-center justify-center text-white font-medium w-9 h-9 rounded-full"},"4"),f("span",{className:"text-blue-500 w-2/12 md:w-20 font-semibold mr-12"},"\uc2ec\uc0ac \ubc0f ",f("br",{className:"block md:hidden"}),"\uc878\uc5c5"),f("span",{className:"text-gray-500"},"\uc131\uacf5 \uc2dc, \uc218\ub8cc\uc99d. \ud560\uc778\ucfe0\ud3f0 \uadf8\ub9ac\uace0"," ",f("br",{className:"block md:hidden"}),"\ubb34\ub8cc \uac15\uc758\uae4c\uc9c0")),f("div",{style:{left:17},className:"bg-blue-500 hidden lg:block absolute px-px h-4/6 bottom-0"})),j&&L?f("div",{className:""},f("h3",{className:"text-3xl mb-5 md:mb-10 font-bold"},"\uc218\uac15\uc0dd\ub4e4\uc758 \uc0dd\uc0dd\ud55c \ud6c4\uae30"),f("div",{className:"hidden md:block mb-80"},L.map(((e,t)=>f("div",{key:t,className:"relative w-full transition-opacity duration-500 "+(t===ne?"opacity-100 z-20":"opacity-0")},f("div",{className:"grid w-full top-0 absolute grid-cols-3 gap-6"},e.map(((e,t)=>e&&f("div",{key:t,className:"relative"},f("div",{className:"bg-white h-5/6 pb-8 z-10 rounded-lg flex flex-col shadow-lg px-4"},f("span",{style:{fontFamily:"cursive"},className:"text-blue-500 mt-8 -mb-2 opacity-40"},f("svg",{className:"h-10 w-10 transform scale-150 translate-x-2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},f("path",{d:"M4.4 15.52C6.28 15.52 7.6 14.24 7.6 12.16C7.6 10.24 6.12 9.08 4.4 9.08C4.24 9.08 4.12 9.08 3.96 9.12C3.96 6.56 5.28 4.84 7.88 3.44L6.52 0.839998C2.52 2.92 0.52 6 0.52 10.08C0.52 13.52 1.88 15.52 4.4 15.52ZM14.4 15.52C16.24 15.52 17.6 14.24 17.6 12.16C17.6 10.24 16.12 9.08 14.4 9.08C14.24 9.08 14.12 9.08 13.96 9.12C13.96 6.56 15.28 4.84 17.88 3.44L16.52 0.839998C12.52 2.92 10.52 6 10.52 10.08C10.52 13.52 11.88 15.52 14.4 15.52Z"}))),f("span",{className:"font-semibold text-gray-500"},e.text)),f("div",{className:"w-16 overflow-hidden left-2 border-top border-white z-0  inline-block absolute"},f("div",{className:"overflow-hidden h-6 w-6 bg-white -rotate-45 shadow-lg rounded-md transform origin-top-left"})),f("div",{className:"mt-6"},f(h.a,{pk:e.pk})))))))))),f("div",{className:"block md:hidden mb-80"},j.map(((e,t)=>e&&f("div",{key:t,className:"relative w-full transition-opacity duration-500 "+(t===ne?"opacity-100 z-20":"opacity-0")},f("div",{className:"grid w-full top-0 absolute grid-cols-1 gap-6"},f("div",{className:"bg-white py-5 z-10 rounded-lg flex flex-col shadow-lg px-4"},f("span",{style:{fontFamily:"cursive"},className:"text-blue-500 mt-8 -mb-2 opacity-40"},f("svg",{className:"h-10 w-10 transform scale-150 translate-x-2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},f("path",{d:"M4.4 15.52C6.28 15.52 7.6 14.24 7.6 12.16C7.6 10.24 6.12 9.08 4.4 9.08C4.24 9.08 4.12 9.08 3.96 9.12C3.96 6.56 5.28 4.84 7.88 3.44L6.52 0.839998C2.52 2.92 0.52 6 0.52 10.08C0.52 13.52 1.88 15.52 4.4 15.52ZM14.4 15.52C16.24 15.52 17.6 14.24 17.6 12.16C17.6 10.24 16.12 9.08 14.4 9.08C14.24 9.08 14.12 9.08 13.96 9.12C13.96 6.56 15.28 4.84 17.88 3.44L16.52 0.839998C12.52 2.92 10.52 6 10.52 10.08C10.52 13.52 11.88 15.52 14.4 15.52Z"}))),f("span",{className:"font-semibold text-gray-500"},e.text)),f("div",{className:"mt-1"},f(h.a,{pk:e.pk}))))))),f("div",{style:{marginTop:360},className:"justify-center gap-8 text-2xl hidden md:flex z-50 relative text-gray-400"},L.length>1?f(o.a.Fragment,null,f("span",{className:"select-none "+(0===ne?"opacity-50 cursor-auto":"opacity-100 cursor-pointer"),onClick:re},"\u2190"),f("span",{className:"select-none "+(ne===L.length-1?"opacity-50 cursor-auto":"opacity-100 cursor-pointer"),onClick:()=>{L&&j&&oe((e=>e===L.length-1?e:e+1))}},"\u2192")):null),f("div",{className:"justify-center gap-8 text-2xl flex -mt-10 md:hidden text-gray-400"},f("span",{className:"select-none "+(0===ne?"opacity-50 cursor-auto":"opacity-100 cursor-pointer"),onClick:re},"\u2190"),f("span",{className:"select-none "+(ne===j.length-1?"opacity-50 cursor-auto":"opacity-100 cursor-pointer"),onClick:()=>{L&&j&&oe((e=>e===j.length-1?e:e+1))}},"\u2192"))):null,f("div",{className:"my-16 mt-20 gap-y-16 flex flex-col md:flex-row justify-between"},f("div",{className:"flex flex-col items-center"},f("span",{className:"text-gray-500 font-medium"},"\uc2e0\uccad\uc790"),f("span",{className:"bg-gradient-to-b from-blue-500 to-blue-700 bg-clip-text text-transparent text-5xl font-semibold"},null!==ee&&void 0!==ee&&null!==(P=ee.challenge)&&void 0!==P&&P.canEnroll||null!==ee&&void 0!==ee&&null!==(F=ee.challenge)&&void 0!==F&&F.isEnrolled?null===ee||void 0===ee||null===(q=ee.challenge)||void 0===q?void 0:q.challengersNumber:null===ee||void 0===ee||null===(W=ee.challenge)||void 0===W?void 0:W.waitingNumber,"\uba85")),f("div",{className:"flex flex-col items-center md:border-l-2 md:border-r-2 border-gray-300 px-16"},f("span",{className:"text-gray-500 font-medium"},"\ucc4c\ub9b0\uc9c0 \uae30\uac04"),f("span",{className:"bg-gradient-to-b from-blue-500 to-blue-700 bg-clip-text text-center text-transparent text-5xl font-semibold"},new Date(1e3*te).getMonth()+1,"/",new Date(1e3*te).getDate(),f("br",{className:"block md:hidden"}),"~",f("br",{className:"block md:hidden"})," ",new Date(1e3*le).getMonth()+1,"/",new Date(1e3*le).getDate())),f("div",{className:"flex flex-col items-center"},f("span",{className:"text-gray-500 font-medium"},"\uc2e0\uccad \ub9c8\uac10"),f("span",{className:"bg-gradient-to-b from-blue-500 to-blue-700 bg-clip-text text-transparent text-5xl font-semibold"},new Date(1e3*(te-86400)).getMonth()+1,"/",new Date(1e3*(te-86400)).getDate())))),f("div",{style:{marginTop:-226},className:"bg-white hidden lg:flex rounded-lg sticky top-20 z-10 shadow-xl py-7 px-10 flex-col items-center"},f("span",{className:"text-blue-500 font-semibold text-xl mb-10 block"},z.title),f("div",{className:"flex flex-col text-gray-600 font-semibold text-sm"},f("div",{className:"flex items-center mb-2"},f("svg",{className:"w-4 h-4 mr-3 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},f("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"})),f("span",null,"\uc218\uac15\uc0dd \ubb34\ub8cc \uc81c\uacf5")),f("div",{className:"flex items-center mb-2"},f("svg",{className:"w-4 h-4 mr-3 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},f("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})),f("span",null,"\uc2e4\uc804\ud615 \ucf54\ub529 \uacfc\uc81c")),f("div",{className:"flex items-center mb-2"},f("svg",{className:"w-4 h-4 mr-3 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},f("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})),f("span",null,"\uc9c8\uc758\uc751\ub2f5 \ucee4\ubba4\ub2c8\ud2f0")),f("div",{className:"flex items-center mb-2"},f("svg",{className:"w-4 h-4 mr-3 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},f("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"})),f("span",null,"\uc131\uacf5 \uc2dc ",N,"% \ud560\uc778\ucfe0\ud3f0"))),f(s.a,{href:`/c/${l}/join`},f("a",{className:"mt-8 mb-4 bg-blue-500 text-white w-full py-2 rounded-lg cursor-pointer transition-colors hover:bg-blue-400 text-center"},null!==ee&&void 0!==ee&&null!==(V=ee.challenge)&&void 0!==V&&V.canEnroll?null===ee||void 0===ee||null===(A=ee.challenge)||void 0===A?void 0:A.batch:((null===ee||void 0===ee||null===(I=ee.challenge)||void 0===I?void 0:I.batch)||0)+1,"\uae30 \ub4f1\ub85d\ud558\uae30")),f("span",{className:"text-sm"},"\ub9c8\uac10: ",new Date(1e3*te).getMonth()+1,"\uc6d4"," ",new Date(1e3*(te-86400)).getDate(),"\uc77c (\uc77c) \uc790\uc815\uae4c\uc9c0")))),f("div",{className:"bg-blue-50 py-20"},f(u.a,null,f("div",{className:"flex flex-col md:flex-row md:items-center justify-between"},f("span",{className:"text-4xl  font-semibold"},"\ub0b4\uac00 \uc9c1\uc811 \ub9cc\ub4dc\ub294,",f("br",null),"\uc2e4\uc804\ud615 \ucf54\ub529\uc744"," ",f("span",{className:"text-blue-500 break-words block md:inline"},"\uc9c0\uae08 \uc2dc\uc791\ud558\uc138\uc694!")),f(s.a,{href:`/c/${l}/join`},f("a",{className:"mt-8 mb-4 w-full text-lg md:w-52 bg-blue-500 text-white lg:mr-10 py-2 rounded-lg cursor-pointer transition-colors hover:bg-blue-400 text-center"},null!==ee&&void 0!==ee&&null!==(Z=ee.challenge)&&void 0!==Z&&Z.canEnroll?null===ee||void 0===ee||null===(_=ee.challenge)||void 0===_?void 0:_.batch:((null===ee||void 0===ee||null===(J=ee.challenge)||void 0===J?void 0:J.batch)||0)+1,"\uae30 \ub4f1\ub85d\ud558\uae30")))))),f("div",{style:{boxShadow:"rgb(0 0 0 / 72%) -2px 0px 10px -4px"},className:"fixed flex lg:hidden  w-full  gap-5 md:gap-14 bottom-0 items-center justify-between z-50 h-16 px-5 md:px-14 py-3 bg-white "},f("span",{className:"text-blue-500 font-bold text-lg md:text-xl  w-full"},z.title),f(s.a,{href:`/c/${l}/join`},f("span",{className:"bg-blue-500 text-white w-full py-2 rounded-lg cursor-pointer transition-colors hover:bg-blue-400 text-center"},null!==ee&&void 0!==ee&&null!==(U=ee.challenge)&&void 0!==U&&U.canEnroll?null===ee||void 0===ee||null===(K=ee.challenge)||void 0===K?void 0:K.batch:((null===ee||void 0===ee||null===(X=ee.challenge)||void 0===X?void 0:X.batch)||0)+1,"\uae30 \ub4f1\ub85d\ud558\uae30"))),f("div",{className:"bg-blue-50 w-full py-60 hidden lg:hidden absolute",style:{bottom:-2880}}),(null===ee||void 0===ee?void 0:ee.challengeFaqs)&&ee.challengeFaqs.length>0&&f("div",{className:"relative bg-white pb-12"},f(c.a,{faqs:{faqs:null===ee||void 0===ee?void 0:ee.challengeFaqs}})),null!==ee&&void 0!==ee&&null!==(G=ee.challenge)&&void 0!==G&&G.isEnrolled||null!==ee&&void 0!==ee&&null!==(Y=ee.challenge)&&void 0!==Y&&Y.isWaiting?f(d.a,{isChallenge:!0,cta:"\uc774\ub3d9\ud558\uae30",enrolledText:"\uc774\ubbf8 \ucc4c\ub9b0\uc9c0\ub97c \ub4f1\ub85d\ud558\uc168\uc2b5\ub2c8\ub2e4. \ucc4c\ub9b0\uc9c0 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud558\uc138\uc694.",slug:ee.challenge.slug}):null,null!==ee&&void 0!==ee&&null!==(Q=ee.challenge)&&void 0!==Q&&Q.isCompleted?f(d.a,{isChallenge:!0,enrolledText:"\ucd95\ud558\ud569\ub2c8\ub2e4! \ucc4c\ub9b0\uc9c0\ub97c \uc878\uc5c5\ud558\uc168\uc2b5\ub2c8\ub2e4. \uc218\ub8cc\uc99d\uc744 \ud655\uc778\ud574\ubcf4\uc138\uc694."}):null)}}}]);