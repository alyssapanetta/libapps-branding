// (function() {
//             var xhr = new XMLHttpRequest();
//             var url = 'https://test-mods-ualibraries-composer.pantheonsite.io/api/menu_items/main?_format=json';          
//             var container = document.querySelector('.container');
   
//             function buildMenuContainer(navmain) {
//                 var eventsContainer = document.createElement("div");
                
//                 eventsContainer.setAttribute("id", "lc-events-container");

//                 if (navmain.length == 0 ) {
//                     console.log('no main nav found')
//                 }

//                 for (var i = 0; i < navmain.length; i++) {
//                     var navlink = navmain[i];
// 					var navtitle = navlink.options[0][fragment];
						

//                 }

//                 return eventsContainer;
//             };

            
//             xhr.onreadystatechange = function() {
//                 if (xhr.readyState == 4 && xhr.status == 200) {
//                     var response = JSON.parse(xhr.responseText);
                    
//                     //while (container.firstChild) {
//                     //	container.removeChild(container.firstChild);
//                     //}
//                     console.log(response);
//                     container.appendChild(buildMenuContainer(response));
//                 }
//             }
//             xhr.open("GET", url, true);
//             xhr.send(null);

// })(); // end function()

  //////////////////////////////////////
 //    Full Page Navigation Menus    //
//////////////////////////////////////

(function () {
    'use strict';
      
      // SHOW and HIDE the MEGAMENUS using vanilla js 
      // build the functions to reproduce the jquery toggle

        let show = function (elem) { elem.classList.add('is-visible'); };     // Show an element
        let hide = function (elem) { elem.classList.remove('is-visible'); };    // Hide an element
        let toggle = function (elem) { elem.classList.toggle('is-visible'); };    // Toggle element visibility

      // add a global event listener for any clicks
      // then see if it's a click we're interested in 

    let toggleMainNav = function(event) {
        
        let openNav = document.querySelector('.is-visible');          // check to see if any navs are open
        //console.log('open nav is', openNav);
        let openNavLink = document.querySelector('.nav-is-open');     // check the header links too
        //console.log('open nav is', openNavLink);

        // // checking for keypress of escape
        // let key = event.key || event.keyCode;
        //   console.log (key);

        // close the open menu by clicking the x 
        if (event.target.closest('.close'))  //   
        { 
          toggle(openNav);
          openNavLink.classList.remove('nav-is-open');
          document.querySelector('.modal-backdrop').classList.remove('modal-backdrop');
          // document.body.classList.remove('stop-background-scroll');
        }

       // console.log(event.target);

       // console.log(event.target.closest('.menu--main'));

        if (!event.target.closest('.menu--main')) { 
           
      
        
        } else { 


        // handle clicks within the main menu
      
          event.preventDefault();                                       //make sure the link doesn't get followed
          //console.log ("clicked the main menu");
          if (openNav)  {  
            toggle(openNav);                                            // the nav 
            openNavLink.classList.remove('nav-is-open');                // the header link to the nav
            //console.log(openNav);
          }                                                             // toggle any open navs

          //console.log(event.target);
          let showNavID = event.target.closest('.nav-link').getAttribute('data-target');      
          // choose corresponding megamenu div by the menu target
          // using 'closest' lets us make the FontAwesome generated svg icon clickable, as well 

          let showNav = document.querySelector(showNavID);
         
          //only trigger the toggle when there is a corresponding menu div
          if (!showNav) { return; } else {                            
            toggle(showNav);                                            // show/hide the associated megamenu div  
            event.target.classList.toggle('nav-is-open');                  // add a class to the header link to the nav
            // console.log(event.target.classList);
            // document.body.classList.toggle('stop-background-scroll');
          }
        
          // Log the clicked element in the console
         //  console.log('show me', showNav);
        }

      };

    document.addEventListener('click', toggleMainNav, false);

    /**
     * Simulate a click event. Thanks, Cferdinandi : https://gomakethings.com/how-to-simulate-a-click-event-with-javascript/
     * @public
     * @param {Element} elem  the element to simulate a click on
     */
    var simulateClick = function (elem) {
      // Create our event (with options)
      var evt = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      // If cancelled, don't dispatch our event
      var canceled = !elem.dispatchEvent(evt);
    };

   
        
    // if(window.location.href.indexOf("#chat") > -1) {
    //   alert("chat open");
    // }
    

    let keyboardShortcuts = function(keyevent) {
        
        //exclude input fields 
        if (!(keyevent.target.classList.contains('form-control'))) {
          //  console.log(keyevent);

            let openNavLink = document.querySelector('.nav-is-open');     // figure out how to add the menu clicks
     
            switch(keyevent.key) {
              case 't':
                document.querySelector('#tools').classList.toggle('is-visible');
              //  document.querySelectorAll('[data-target="tools"]').classList.toggle('.nav-is-open');     // check the header links too
     
              break;
              case 's':
                document.querySelector('#services').classList.toggle('is-visible');
              break;
              case 'a':
                document.querySelector('#about').classList.toggle('is-visible');
              break;
              // case '':
              //   document.querySelector('#site-search').classList.toggle('is-visible');
              // break;
              case 'h':
                var chattrigger = document.querySelector('.s-lch-widget-float-btn');
                simulateClick(chattrigger);
              break;

              case 'Escape':
                document.querySelector('.is-visible').classList.remove('is-visible');
                document.querySelector('.nav-is-open').classList.remove('nav-is-open');
                document.querySelector('.modal-backdrop').classList.remove('modal-backdrop');
                document.querySelector('#s-lch-widget-18654').classList.remove('open');
              break;

            }
        }
    }

    document.addEventListener('keydown', keyboardShortcuts);

  })();


////////////////////////////////////
//
//
//    Convert any links to forms into modal popups that
//    load the form in an iFrame
//
//
/////////////////////////////////////


(function () {
  'use strict';

            document.addEventListener('click', function (event) {

              // If the clicked element doesn't have the right selector, bail
              if (!event.target.matches('.modal-form')) return;
            
              // Don't follow the link
               event.preventDefault();
            
              // Log the clicked element in the console
              console.log(event.target.href);
              
              document.querySelector('.modal-iframe').src = event.target.href;
              document.querySelector('.modal-title').innerHTML = event.target.innerHTML;
              
            }, false);




}());
