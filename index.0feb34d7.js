!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequire581e;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequire581e=a),a("5xtVg");var s=a("jaaYu");if((d=a("hiFhO")).refs.langValue.addEventListener("change",(function(e){var t=e.target.value;s.serverApi.setlang(t),localStorage.setItem("language",JSON.stringify(t)),location.reload()})),localStorage.getItem("language")){var i=JSON.parse(localStorage.getItem("language"));d.refs.langValue.value=i,s.serverApi.setlang(i)}s=a("jaaYu");if((d=a("hiFhO")).refs.trend.addEventListener("change",(function(e){var t=e.target.value;s.serverApi.setTrend(t),localStorage.setItem("selected-trend",JSON.stringify(t)),location.reload()})),localStorage.getItem("selected-trend")){var o=JSON.parse(localStorage.getItem("selected-trend"));d.refs.trend.value=o,s.serverApi.setTrend(o)}var l,c=a("bpxeT"),u=a("2TvXO"),p=a("iU1Pc"),d=a("hiFhO"),f=(s=a("jaaYu"),c=a("bpxeT"),u=a("2TvXO"),a("1VFfL")),v=(d=a("hiFhO"),s=a("jaaYu"),a("9PJ7S")),g=a("jcFG7"),m=a("j1lrD"),h=(m=a("j1lrD"),a("8UxLt")),y=a("9DSPe"),b=new(e(f))(d.refs.tuiContainer,g.options);function x(e){JSON.parse(localStorage.getItem("language"))||localStorage.setItem("language",JSON.stringify(d.refs.langValue.value)),s.serverApi.setPage(1);var t=e.map((function(e){var t=e.original_title,r=e.title,n=e.poster_path,a=e.id,s=e.genre_ids,i=e.release_date,o=(0,v.posterСheck)(n),l=(0,h.makeGenres)(s);return'\n        <li class="film__item" data-id="'.concat(a,'">\n        <img src="').concat(o,'" class="film__img" alt="').concat(t,'" />\n        <div>\n        <p class="film__title">').concat(r,'</p>\n        <p class="film__genre">').concat(l," | ").concat((0,y.makeDate)(i),"</p></div>\n      </li>")})).join("");return d.refs.gallery.innerHTML=t}function k(){return _.apply(this,arguments)}function _(){return(_=e(c)(e(u).mark((function t(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=[],"top"!==d.refs.trend.value){e.next=8;break}return e.next=5,s.serverApi.getTop();case 5:r=e.sent,e.next=17;break;case 8:if("popular"!==d.refs.trend.value){e.next=14;break}return e.next=11,s.serverApi.getPopular();case 11:r=e.sent,e.next=17;break;case 14:return e.next=16,s.serverApi.getPopularMovie();case 16:r=e.sent;case 17:s.serverApi.setTotalResults(r.total_results),x(r.results),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),console.log(e.t0);case 24:(0,m.spinnerStop)();case 25:case"end":return e.stop()}}),t,null,[[0,21]])})))).apply(this,arguments)}(0,m.spinnerPlay)(),b.on("beforeMove",(l=e(c)(e(u).mark((function t(r){var n;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,m.spinnerPlay)(),b.setTotalItems(s.serverApi.totalResults),"top"===d.refs.trend.value||"popular"===d.refs.trend.value?(b.setTotalItems(1e4),s.serverApi.setTotalResults(1e4)):b.setTotalItems(s.serverApi.totalResults),n=r.page,s.serverApi.setPage(n),k();case 6:case"end":return e.stop()}}),t)}))),function(e){return l.apply(this,arguments)}));var S=a("kiFmR"),A=a("5xtVg"),T=a("4cXS4"),L=a("5HOzi"),w=a("dkUq4"),O=(m=a("j1lrD"),a("3TKAW"));function C(){return(C=e(c)(e(u).mark((function t(r){var n,a,i,o,l,c,f,v,g;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("film__item"===r.target.parentElement.className){t.next=2;break}return t.abrupt("return");case 2:return(0,A.onOpenModal)(),(0,m.spinnerPlay)(),n=r.target.parentElement.dataset.id,t.next=7,s.serverApi.getDetailsMovie(n);case 7:return a=t.sent,t.next=10,(0,S.movieDescriptionMurkup)(a);case 10:i=t.sent,d.refs.movieDescription.insertAdjacentHTML("beforeend",i),(0,m.spinnerStop)(),(0,L.makeWatchTextContent)(a),(0,L.makeQueueTextContent)(a),o=document.querySelector("[data-add-watched]"),l=document.querySelector("[data-add-queue]"),c=document.querySelector("[data-modal-close]"),f=document.querySelector(".btn-ytb"),v=document.querySelector(".icon-youtube"),g=document.querySelector("[data-cast]"),s.serverApi.getTrailer(n).then((function(t){0!==t.results.length?(v.classList.add("icon-youtube__enable"),v.classList.remove("icon-youtube__disabled")):(v.classList.remove("icon-youtube__enable"),v.classList.add("icon-youtube__disabled"),f.setAttribute("disabled",!0),e(p).Notify.failure("Oh! Unfortunately there is no trailer",{position:"center-top",fontFamily:"inherit",borderRadius:"25px",clickToClose:!0}))})),s.serverApi.getCasts(n).then((function(e){0===e.length&&g.setAttribute("disabled",!0)})),o.addEventListener("click",(function(){return(0,T.onAddWatchClick)(a)})),l.addEventListener("click",(function(){return(0,T.onAddQueueClick)(a)})),f.addEventListener("click",w.handleClick),g.addEventListener("click",(function(){return(0,O.markupCast)(n)})),c.addEventListener("click",A.closeModal);case 28:case"end":return t.stop()}}),t)})))).apply(this,arguments)}k(),d.refs.gallery.addEventListener("click",(function(e){return C.apply(this,arguments)}));c=a("bpxeT"),u=a("2TvXO"),p=a("iU1Pc"),f=a("1VFfL"),d=a("hiFhO"),s=a("jaaYu"),g=a("jcFG7"),m=a("j1lrD");var j=" ";function E(){return(E=e(c)(e(u).mark((function t(r){return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),(0,m.spinnerPlay)(),document.querySelector(".header__form-input").addEventListener("change",(function(){s.serverApi.setPage(1),s.serverApi.setRequestCount()})),j=r.currentTarget.elements.serch_film.value.trim().toLowerCase()){t.next=9;break}return e(p).Notify.failure("Enter the name of the movie",{position:"center-top",fontFamily:"inherit",borderRadius:"25px",clickToClose:!0}),(0,m.spinnerStop)(),t.abrupt("return");case 9:return t.next=11,D();case 11:(0,m.spinnerStop)(),new(e(f))(d.refs.tuiContainer,g.options).on("beforeMove",(function(e){var t=e.page;s.serverApi.setPage(t),s.serverApi.incrementRequestCount(),D()})),r.target.reset();case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(){return F.apply(this,arguments)}function F(){return(F=e(c)(e(u).mark((function t(){var r,n,a;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.serverApi.getMovieOnDemand(j);case 2:if(r=t.sent,n=r.results,a=r.total_results,g.options.totalItems=a,a<20&&0!==a?d.refs.tuiContainer.classList.add("visually-hidden"):d.refs.tuiContainer.classList.remove("visually-hidden"),0!==n.length){t.next=12;break}return k(),e(p).Notify.failure("Search result not successful. Enter the correct movie name and",{position:"center-top",fontFamily:"inherit",borderRadius:"25px",clickToClose:!0}),window.history.go(),t.abrupt("return");case 12:x(n);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}d.refs.formRef.addEventListener("submit",(function(e){return E.apply(this,arguments)})),a("jcFG7"),a("aZhHc"),a("3ngM5"),a("dkUq4"),a("dUjMA"),a("fDiVl"),a("j1lrD"),a("iNWLi")}();
//# sourceMappingURL=index.0feb34d7.js.map