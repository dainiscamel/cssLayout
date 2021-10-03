(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{JcIq:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var s=a("dkkg"),l=a("lTCR"),n=a.n(l),r=a("ttZb");const o=n.a`
  query courseDetail($slug: String!) {
    course(slug: $slug) {
      ...CourseCard
      name
      slug
      isEnrolled
      isFree
      isReward
      isForSale
      isComplete
      level {
        name
        color
      }
      totalPrice
      adminText
      enAdminText
      sections {
        id
        course {
          slug
        }
        order
        publicName
        lectures {
          id
          publicName
          canSee
          isCompleted
          freePreview
        }
      }
      bonuses {
        ...CourseCard
      }
    }
  }
  ${s.e}
`;t.b=e=>Object(r.c)(o,{variables:{slug:e},skip:!e})},NoO4:function(e,t,a){"use strict";var s=a("q1tI"),l=a.n(s),n=a("YFqc"),r=a.n(n),o=l.a.createElement;t.a=({slug:e,isChallenge:t=!1,enrolledText:a,cta:s})=>o("div",{className:"fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-50"},o("div",{className:"max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8"},o("div",{className:"p-2 rounded-lg bg-green-500 shadow-lg sm:p-3"},o("div",{className:"flex items-center justify-between flex-wrap"},o("div",{className:"flex-1 flex justify-center md:justify-start items-center"},o("span",{className:"flex p-2 rounded-lg "},o("svg",{className:"h-6 w-6 text-white",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},o("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"}))),o("p",{className:"ml-3 font-medium text-white truncate"},o("span",{className:"md:inline"},a))),s&&o("div",{className:"order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"},o("div",{className:"rounded-md shadow-sm"},o(r.a,{href:t?"/c/[challenge]/lobby":"/[course]/lobby",as:t?`/c/${e}/lobby`:`/${e}/lobby`},o("a",{className:"flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-green-600 bg-white hover:text-green-500 focus:outline-none focus:ring  focus:ring-blue-400 transition ease-in-out duration-150"},s))))))))},Po2v:function(e,t,a){"use strict";var s=a("q1tI"),l=a.n(s),n=a("YFqc"),r=a.n(n),o=a("20a2"),i=a.n(o),d=l.a.createElement;const c=({section:e,isEnrolled:t,lectureView:a,nowWatching:l,toggleSidebar:n})=>{const o=Object(s.createRef)();return Object(s.useEffect)((()=>{o.current&&o.current.focus()}),[l]),d("div",{className:"flex flex-col mb-10 w-full"},d("div",{className:"-my-2 py-2 overflow-x-auto sm:-mx-6 px-1 sm:px-6 lg:-mx-8 lg:px-8"},d("div",{className:"align-middle inline-block  w-full shadow overflow-hidden rounded-md sm:rounded-lg border-b border-gray-200"},d("span",{className:"px-6 py-3 block min-w-full border-b border-gray-200 bg-white text-left text-sm leading-4 font-medium text-gray-800 uppercase tracking-wider"},e.publicName),d("div",{className:"min-w-full"},d("div",null,e.lectures&&e.lectures.map(((s,c)=>s&&d("button",{ref:l===s.id?o:null,onClick:t||s.freePreview?()=>{return t=s.id,n&&n(),void i.a.push("/[course]/lectures/[id]",`/${e.course.slug}/lectures/${t}`);var t}:()=>null,key:s.id,className:` focus:outline-none ${t||s.freePreview?"cursor-pointer focus:ring  focus:ring-blue-400  focus:outline-none":"cursor-not-allowed"} w-full  h-full flex justify-between ${l===s.id?"bg-blue-500 shadow-md block":s.isCompleted?"bg-gray-100":c%2!==0?"bg-white":"bg-gray-50"}`},d("span",{className:`px-6 py-4 whitespace-nowrap text-sm leading-5 overflow-hidden font-medium flex items-center ${l===s.id?"text-white":s.isCompleted?"text-gray-400":t||s.freePreview?"text-gray-900":"text-gray-400"}  `},s.publicName," ",!t&&!s.freePreview&&d("svg",{viewBox:"0 0 20 20",fill:"currentColor",className:"lock-closed w-4 h-4 ml-2"},d("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})),(s.isCompleted||l===s.id)&&d("svg",{fill:"currentColor",viewBox:"0 0 20 20",className:"ml-2 w-5 h-5 "+(l===s.id?"text-white":"")},d("path",{d:""+(l!==s.id?"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z":"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"),clipRule:"evenodd",fillRule:"evenodd"}))),!a&&d("span",{className:"px-6 py-4 hidden md:block  whitespace-nowrap text-right text-sm leading-5 font-medium"},t||s.freePreview?d(r.a,{href:"/[course]/lectures/[id]",as:`/${e.course.slug}/lectures/${s.id}`},d("a",{className:"hover:text-blue-900 "+(s.isCompleted?"text-gray-400":"text-blue-600")},t?"Watch now":"Free Preview"," ","\u2192")):d("span",{className:"cursor-not-allowed opacity-25"},"Watch now \u2192"))))))))))};t.a=({sections:e,isEnrolled:t=!1,full:a=!1,lectureView:n=!1,nowWatching:r,maxSections:o=2,toggleSidebar:i})=>{const{0:m,1:u}=Object(s.useState)(a),g=()=>u(!0);return e?d("div",{className:"flex flex-col items-center w-full"},e.map(((e,a)=>e.order<=o||m?d(c,{nowWatching:r,lectureView:n,section:e,key:a,isEnrolled:t,toggleSidebar:i}):null)),e.length>=2&&!m&&e.length!==o&&d("span",{className:"inline-flex mx-auto rounded-md shadow-sm"},d("button",{onClick:g,type:"button",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring  focus:ring-blue-400  active:bg-blue-700 transition ease-in-out duration-150"},d("svg",{fill:"currentColor",viewBox:"0 0 20 20",className:"-ml-1 mr-2 h-5 w-5"},d("path",{fillRule:"evenodd",d:"M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",clipRule:"evenodd"})),"See all (",e.length,") sections"))):d(l.a.Fragment,null,[...new Array(5)].map(((e,t)=>d("div",{className:"w-full rounded shadow bg-white p-16 mb-10",key:t}))))}},XWDb:function(e,t,a){"use strict";var s=a("lTCR"),l=a.n(s),n=a("ttZb"),r=a("SnHM");const o=l.a`
  query faqs($english: Boolean!) {
    faqs(english: $english) {
      question
      answer
    }
  }
`;t.a=()=>{const e=Object(r.a)();return Object(n.c)(o,{variables:{english:e}})}},ZFJm:function(e,t,a){"use strict";var s=a("q1tI"),l=a.n(s),n=a("WxHy"),r=a("YFqc"),o=a.n(r),i=l.a.createElement;var d=({cta:e,href:t})=>i(o.a,{href:t},i("a",null,i("span",{className:"inline-flex rounded-md shadow-sm"},i("button",{type:"button",className:"inline-flex items-center px-10 py-3 border border-transparent leading-6 font-medium  text-xl rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring  focus:ring-blue-400  active:bg-blue-700 transition ease-in-out duration-150"},e)))),c=a("kiXb"),m=l.a.createElement;t.a=({firstStat:e,firstLabel:t,secondStat:a,secondLabel:s,thirdStat:l,thirdLabel:r,cta:o,removeAccent:i=!1})=>{const{t:u}=Object(c.useTranslation)();return m(n.a,{childrenClassName:"px-4"},m("div",{className:"rounded-lg bg-white shadow-md sm:grid sm:grid-cols-3"},m("div",{className:"border-b border-gray-100 p-6 text-center flex flex-col justify-center sm:border-0 sm:border-r"},m("p",{className:"text-5xl sm:text-3xl md:text-5xl leading-none font-extrabold text-blue-600"},e),t&&m("p",{className:"mt-2 text-lg leading-6 font-medium text-gray-500"},u(t))),m("div",{className:"border-t border-b border-gray-100 p-6 text-center flex flex-col justify-center sm:border-0 sm:border-l sm:border-r"},m("p",{className:"text-5xl sm:text-3xl md:text-5xl leading-none font-extrabold text-blue-600"},a),s&&m("p",{className:"mt-2 text-lg leading-6 font-medium text-gray-500"},u(s))),m("div",{className:"border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l flex flex-col justify-center"},m("p",{className:"text-5xl sm:text-3xl md:text-5xl leading-none font-extrabold text-blue-600"},u(l||"")),r&&m("p",{className:"mt-2 text-lg leading-6 font-medium text-gray-500"},u(r)))),o&&m("div",{className:"flex justify-center mt-10"},m(d,{cta:o,href:"#start"})))}},bOAM:function(e,t,a){"use strict";var s=a("q1tI"),l=a.n(s),n=a("WxHy"),r=a("MX0m"),o=a.n(r),i=a("kiXb"),d=l.a.createElement;var c=({level:e,color:t,bgColor:a="bg-white"})=>{const{t:s}=Object(i.useTranslation)();return d("span",{className:o.a.dynamic([["1004693106",[t]]])+" "+`inline-flex items-center px-3 py-0.5 rounded-full text-xs md:text-sm font-medium leading-5 ${a}`},s(e.name),d(o.a,{id:"1004693106",dynamic:[t]},[`span.__jsx-style-dynamic-selector{color:${t};}`]))},m=l.a.createElement;var u=()=>{const{0:e,1:t}=Object(s.useState)(!1),a=e=>{window.scrollY>2500?t(!0):t(!1)};return Object(s.useEffect)((()=>{window.addEventListener("scroll",a)}),[]),m("a",{style:{zIndex:99},href:"#",className:` ${e?"opacity-100":"opacity-0"} w-12 h-12 cursor-pointer fixed left-5 bottom-5 p-3 rounded-full  text-white bg-blue-600 hover:bg-blue-500 transition ease-in-out duration-150`},m("svg",{fill:"currentColor",viewBox:"0 0 20 20"},m("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})))},g=l.a.createElement;t.a=({bgColor:e,title:t,subtitle:a,level:s,logo:l,textColor:r="text-white",badgeBgColor:o="bg-white"})=>{const{t:d}=Object(i.useTranslation)();return g(n.a,{bgColor:e,childrenClassName:"py-10 sm:py-12 sm:px-6 md:py-16 lg:py-20",containerClassName:"pb-20 md:pb-36"},g("div",{className:`flex flex-col items-center hangug ${r}`},"string"===typeof l?g("img",{src:l,className:"w-1/2 sm:w-1/5 mb-4"}):l,g("h1",{className:"text-3xl sm:text-5xl"},d(t)),g("h2",{className:"text-2xl sm:text-2xl mb-4 text-center"},g("span",{dangerouslySetInnerHTML:{__html:d(a)}})),s&&g(c,{level:s,color:e,bgColor:o})),g(u,null))}},dkkg:function(e,t,a){"use strict";a.d(t,"e",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"f",(function(){return i})),a.d(t,"b",(function(){return d})),a.d(t,"h",(function(){return c})),a.d(t,"d",(function(){return m})),a.d(t,"g",(function(){return u})),a.d(t,"a",(function(){return g})),a.d(t,"j",(function(){return b})),a.d(t,"i",(function(){return p}));var s=a("lTCR"),l=a.n(s);const n=l.a`
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
`,r=l.a`
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
`,o=l.a`
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
`,c=l.a`
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
`,m=l.a`
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
`,b=l.a`
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
`,p=l.a`
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
`},hMOa:function(e,t,a){"use strict";var s=a("q1tI"),l=a.n(s),n=a("kiXb"),r=l.a.createElement;t.a=({title:e,className:t,subtitle:a,hangug:s,titleClassName:l,subtitleClassName:o})=>{const{t:i}=Object(n.useTranslation)();return r("div",{className:`text-gray-900 leading-9 text-center tracking-tight sm:leading-10 mb-5 md:mb-20  ${s?"hangug":""} ${t||""}  `},r("h3",{className:`text-4xl font-semibold hangug mb-3 ${l||""}`},i(e)),a&&r("h5",{className:`text-xl md:text-2xl font-medium ${o||""}`},i(a)))}},y0zT:function(e,t,a){"use strict";var s=a("q1tI"),l=a.n(s),n=a("kiXb"),r=a("WxHy"),o=a("hMOa"),i=l.a.createElement;t.a=({courseName:e,specList:t,libs:a,angleTop:s})=>{const{t:l}=Object(n.useTranslation)();return i(r.a,{angleTop:s,bgColor:"#f4f5f7"},i(o.a,{title:l("\uad6c\ud604\ud558\ub294 \uae30\ub2a5\uacfc \ubc30\uc6b0\ub294 \ucee8\uc149"),className:"text-gray-900"}),i("div",{className:"mt-10 lg:mt-0 grid grid-cols-1 lg:grid-cols-2 gap-14"},i("div",{className:`grid ${t.length>1?"grid-cols-2":"grid-cols-1"} gap-5`},t.map(((e,t)=>i("div",{key:t,className:"shadow-xl rounded-md overflow-hidden bg-gray-50",style:{minHeight:250}},i("div",{className:"text-center text-md font-medium bg-white py-2 shadow"},i("h4",null,e.name)),i("div",{className:"flex flex-col ml-3 pt-3"},e.items.map(((e,t)=>i("span",{key:t,className:"text-sm mb-3 flex items-center"},i("svg",{fill:"currentColor",viewBox:"0 0 20 20",className:"w-4 h-4 mr-1 text-green-500"},i("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})),e)))))))),i("div",{className:"bg-gray-900 shadow-xl rounded-md overflow-hidden"},i("div",{className:"p-3 bg-gray-700"},i("div",{className:"grid grid-cols-3 gap-1 w-12"},i("div",{className:"w-3 h-3 rounded-full bg-red-500"}),i("div",{className:"w-3 h-3 rounded-full bg-yellow-300"}),i("div",{className:"w-3 h-3 rounded-full bg-green-500"}))),i("div",{className:"text-white m-3 block code"},"{",i("div",{className:"ml-4"},i("div",null,'"',i("span",{className:"text-yellow-200"},"name"),'":"',i("span",{style:{color:"#00FFFF"}},e),'",'),i("div",null,'"',i("span",{className:"text-yellow-200"},"section"),'":"',i("span",{style:{color:"#00FFFF"}},"What are we using?"),'",'),i("div",null,'"',i("span",{className:"text-yellow-200"},"packages"),'": [',a.map(((e,t)=>i("div",{className:"ml-10",key:t},'"',i("span",{style:{color:"#00FFFF"}},e),'"')))),i("div",null,"]")),"}"))))}}}]);