"use strict";(self.webpackChunkbookshelf_app=self.webpackChunkbookshelf_app||[]).push([[826,787],{255:(e,t,o)=>{var n="bookList",i="not-yet";const s=function(e){var t=e.messageSuccessDelete,o=void 0===t?"":t,n=e.bookTitle,s=void 0===n?"":n,a=e.bookId,c=void 0===a?0:a,r=e.bookList,l=document.createElement("div"),d=document.createElement("div");d.setAttribute("class","wrapper-overlay"),l.setAttribute("class","alert-ask"),l.innerHTML='\n  <img\n      src="./src/images/icons/question.png"\n      alt="question icon"\n      width="30"\n      class="mb-1"\n    />\n    <div class="ask-message mb-1">\n      Apakah anda yakin ingin menghapus data buku berjudul "'.concat(s,'" ini ?\n    </div>\n    <div class="btn-group mb-1">\n      <button class="btn-submit">Ya</button>\n      <button class="btn-danger">Tidak</button>\n    </div>\n  '),l.querySelector(".btn-danger").addEventListener("click",(function(){l.classList.remove("show-alert-ask"),d.classList.remove("show-modal")})),l.querySelector(".btn-submit").addEventListener("click",(function(){r.deleteBookById(c),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=document.createElement("div");t.setAttribute("class","alert-success ".concat("not-yet"===i?"bg-primary":"bg-secondary")),t.innerText=e,document.body.appendChild(t),setTimeout((function(){t.classList.add("show-alert-success")}),0),setTimeout((function(){t.remove()}),2e3)}(o),l.classList.remove("show-alert-ask"),d.classList.remove("show-modal")})),d.appendChild(l),document.body.appendChild(d),setTimeout((function(){l.classList.add("show-alert-ask"),d.classList.add("show-modal")}),0)},a={init:function(e){var t=e.book,o=void 0===t?{}:t,n=e.bookList,i=void 0===n?{}:n;return this.book=o,this.bookList=i,this.render()},render:function(){var e=this.bookList,t=document.createElement("div");t.setAttribute("class","book-item column-12 column-sm-6 column-lg-4 column-xxl-3   ".concat(!1===this.book.isComplete?"shadow-primary":"shadow-secondary")),t.innerHTML='<h2 class="line-clamp '.concat(!1===this.book.isComplete?"text-primary":"text-secondary",'  title" title="').concat(this.book.title,'">\n    ').concat(this.book.title,'\n  </h2>\n\n  <div class="author line-clamp fw-5">').concat(this.book.author,'</div>\n  <div class="year fw-4">').concat(this.book.year,'</div>\n\n  <div class="action">\n  ').concat(!1===this.book.isComplete?'<img src="./images/icons/checked.png" alt="checked icon" width="30" class="icon" />':'<img src="./images/icons/undo.png" alt="undo icon" width="30" class="icon" />','\n    \n    <img\n      src="./images/icons/trash.png"\n      alt="trash"\n      width="30"\n      class="icon"\n    />\n  </div>');var o=this.book.title,n=this.book.id;return t.querySelector("img:last-child").addEventListener("click",(function(){s({messageSuccessDelete:'Buku berjudul "'.concat(o,'" berhasil dihapus!!'),bookTitle:o,bookId:n,bookList:e})})),t.querySelector("img:first-child").addEventListener("click",(function(){e.updateIsCompleteBookById(n),t.remove()})),t}},c=document.querySelector(".input-search");var r={init:function(e){var t=this,o=e.books,n=void 0===o?[]:o,i=e.type,s=void 0===i?"not-yet":i,a=e.container;this.books=n,this.type="not-yet"!==s,this.container=a,this.render(n.filter((function(e){return e.isComplete===t.type})))},add:function(e){var t=this;this.books.unshift(e),localStorage.setItem(n,JSON.stringify(this.books)),c.value="",this.render(this.books.filter((function(e){return e.isComplete===t.type})))},deleteBookById:function(e){var t=this;this.books=this.books.filter((function(t){return t.id!==e})),localStorage.setItem(n,JSON.stringify(this.books)),this.render(this.books.filter((function(e){return e.isComplete===t.type})))},updateIsCompleteBookById:function(e){this.books=this.books.map((function(t){return t.id===e&&(t.isComplete=!t.isComplete),t})),localStorage.setItem(n,JSON.stringify(this.books))},setType:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"not-yet";this.type="not-yet"!==t,this.render(this.books.filter((function(t){return t.isComplete===e.type})))},search:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.render(this.books.filter((function(o){return!(!o.title.toLowerCase().includes(t.toLowerCase())||o.isComplete!==e.type)&&o})))},render:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.container.innerHTML="",0!==t.length&&t?t.forEach((function(t){e.container.appendChild(a.init({book:t,bookList:e}))})):this.container.innerHTML='<div class="column-12 text-center">Data Buku Tidak Ditemukan</div>'}};const l=r;function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}o(138),o(736);var u=document.getElementById("not-yet"),m=document.getElementById("done"),h=document.querySelector("#not-yet a"),b=document.querySelector("#done a"),v=document.querySelector(".btn-add"),p=document.querySelector(".close"),y=document.querySelector(".wrapper-overlay"),k=document.querySelector(".book-list"),f=document.querySelector(".title-page");if(void 0!==("undefined"==typeof Storage?"undefined":d(Storage)))if(localStorage.getItem(n)){var g=JSON.parse(localStorage.getItem(n));l.init({books:g,type:"not-yet",container:k})}else localStorage.setItem(n,JSON.stringify([])),l.init({books:[],type:"not-yet",container:k});else alert("your browser is not support web storage, this app will not run!!");c.addEventListener("keyup",(function(e){l.search(e.target.value)}));var S=function(e){i=e};v.addEventListener("click",(function(){y.classList.add("show-modal")})),p.addEventListener("click",(function(){y.classList.remove("show-modal")})),h.addEventListener("click",(function(){L({tabActive:"not-yet",tabActiveElem:u,anotherTabElem:m,inputSearchElem:c})})),b.addEventListener("click",(function(){L({tabActive:"done",tabActiveElem:m,anotherTabElem:u,inputSearchElem:c})}));var L=function(e){var t=e.tabActive,o=void 0===t?"not-yet":t,n=e.tabActiveElem,i=e.anotherTabElem,s=e.inputSearchElem;S(o),n.classList.add("active"),i.classList.remove("active"),s.value="",l.setType(o),"done"===o?E("Daftar Buku Yang Sudah Selesai Dibaca","text-secondary"):"not-yet"===o&&E("Daftar Buku Yang Belum Selesai Dibaca","text-primary")},E=function(e,t){f.innerText=e,f.setAttribute("class","title-page ".concat(t))};v.addEventListener("click",(function(){y.classList.add("show-modal")}));var w=document.getElementById("judul"),C=document.getElementById("penulis"),B=document.getElementById("tahun"),I=document.getElementById("isComplete");document.getElementById("form-add-book").addEventListener("submit",(function(e){e.preventDefault();var t=w.value,o=C.value,n=B.value,i=I.checked;console.log(d(i));var s={id:+new Date,title:t,author:o,year:n,isComplete:i};l.add(s),alert("Buku baru berhasil di tambahkan"),w.value="",C.value="",B.value=2016,I.checked=!1}))},736:(e,t,o)=>{o(138),console.log("index2.js")}},e=>{e(e.s=255)}]);