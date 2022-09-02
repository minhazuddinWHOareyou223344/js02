let togglerbtn = document.querySelector('#nav .togglerbtn span');
console.log(togglerbtn)

togglerbtn.addEventListener(
    'click',  sidebarOpen   )
function sidebarOpen (){
    let sidebar = document.querySelector('.sideber')

    sidebar.classList.toggle(`activesidebar`)
   $(window) .scroll(function(){
    console.log(`minhaz`)
   })
}