    function getCookie(name) {
        const cookieName = name + "=";
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(cookieName) === 0) {
                return cookie.substring(cookieName.length, cookie.length);
            }
        }
        return '';
    }


     
    
    //alert('hi')
    let Setting14b = getCookie("PagePrevent");

    function checkPageClose(event) {
      
        
            event.returnValue = "Prevent Page Close Is Active, You Can Click Off Of This";
      
       
     
    }
    function checkPageClose2() {
        if(Setting14b==="true") {
        
            window.onbeforeunload = function(event) {
                // return a string to prevent the page from closing
                event.preventDefault();
                return "Prevent Page Close Is Active, You Can Click Off Of This";
            };
            window.addEventListener("beforeunload", checkPageClose);

        } 
        if(Setting14b==="false") {
        
        }
    }
    console.log('CookiePAGE Value: ' + Setting14b + "SzGames-Scripts Loaded")
    checkPageClose2()


    //CLOAK

    let tabData = {};
const tab = localStorage.getItem("tab");

if (tab) {
  try {
    tabData = JSON.parse(tab);
  } catch (e) {
    console.log("Error parsing tab data from localStorage", e);
  }
} else {

}

const settingsDefaultTab = {
  title: "Settings - Emerald Games",
  icon: "https://github.com/sz-games/home/blob/main/G.png?raw=true",
};

const setTitle = (title = "") => {
  document.title = title || settingsDefaultTab.title;
  if (title) {
    tabData.title = title;
  } else {
    delete tabData.title;
  }
  localStorage.setItem("tab", JSON.stringify(tabData));
};

const setFavicon = (url) => {
  const faviconLink = document.querySelector("link[rel='icon']");
  
  // Try to load the URL as an image
  const img = new Image();
  img.src = url;
  img.onload = () => {
    faviconLink.href = url;
    if (url) {
      tabData.icon = url;
    } else {
      delete tabData.icon;
    }
    localStorage.setItem("tab", JSON.stringify(tabData));
  };

  img.onerror = () => {
    // If the URL is not an image, use Google's Favicon API
    const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${url}`;
    faviconLink.href = faviconUrl || settingsDefaultTab.icon;
    if (url) {
      tabData.icon = faviconUrl;
    } else {
      delete tabData.icon;
    }
    localStorage.setItem("tab", JSON.stringify(tabData));
  };
};


const resetTab = () => {
  setTitle();
  setFavicon();

  localStorage.setItem("tab", JSON.stringify({}));
};


if (tabData.title) {
  document.title = tabData.title;
}

if (tabData.icon) {
  const faviconLink = document.querySelector("link[rel='icon']");
  faviconLink.href = tabData.icon;
}

//PANIC
let PANIC = localStorage.getItem('panic')

if(PANIC) {
    document.addEventListener('keydown', function(event) {
        if (event.key === '\\') {
            // Backslash key was pressed
            console.log("PANIC");
            window.location = PANIC;
        }
    });
    
} else {
    console.log('clear')
}

function panicURL() {
    let URL3 = document.getElementById('url-target2').value

    if(URL3.includes("https://")) {
    

        localStorage.setItem('panic', URL3)

        PANIC = localStorage.getItem('panic')
    } else {
        

        localStorage.setItem('panic', 'https://' + URL3)

        PANIC = localStorage.getItem('panic')
    }
}

function clearPANIC() {

    localStorage.clear('panic')

    console.log('clear')
    PANIC = localStorage.getItem('panic')

}

const _0x4482a8=_0xa809;(function(_0x4ef06e,_0x2f4dec){const _0x576ea8=_0xa809,_0x448bac=_0x4ef06e();while(!![]){try{const _0x1713ea=parseInt(_0x576ea8(0x16a))/0x1+-parseInt(_0x576ea8(0x18e))/0x2+parseInt(_0x576ea8(0x170))/0x3*(-parseInt(_0x576ea8(0x186))/0x4)+-parseInt(_0x576ea8(0x18a))/0x5+-parseInt(_0x576ea8(0x188))/0x6+parseInt(_0x576ea8(0x177))/0x7+parseInt(_0x576ea8(0x179))/0x8;if(_0x1713ea===_0x2f4dec)break;else _0x448bac['push'](_0x448bac['shift']());}catch(_0x4229ab){_0x448bac['push'](_0x448bac['shift']());}}}(_0x155a,0xc714b));function _0xa809(_0x17f3c7,_0x534530){const _0x7c1e66=_0x155a();return _0xa809=function(_0x59482f,_0x245fd1){_0x59482f=_0x59482f-0x16a;let _0x22bb34=_0x7c1e66[_0x59482f];return _0x22bb34;},_0xa809(_0x17f3c7,_0x534530);}const _0x26a236=(function(){let _0x599249=!![];return function(_0x3867e1,_0x37972e){const _0x3521e6=_0x599249?function(){const _0x1deb9f=_0xa809;if(_0x37972e){const _0x48a817=_0x37972e[_0x1deb9f(0x182)](_0x3867e1,arguments);return _0x37972e=null,_0x48a817;}}:function(){};return _0x599249=![],_0x3521e6;};}()),_0x7b83f9=_0x26a236(this,function(){const _0xe81952=_0xa809;return _0x7b83f9[_0xe81952(0x183)]()[_0xe81952(0x17e)](_0xe81952(0x17a))[_0xe81952(0x183)]()[_0xe81952(0x17d)](_0x7b83f9)['search'](_0xe81952(0x17a));});function _0x155a(){const _0x45becb=['createElement','711400smBNSr','appendChild','{}.constructor(\x22return\x20this\x22)(\x20)','info','1714570KKdKQk','20254cJIgMO','top','textContent','table','body','https://the--emerald-games--6wxkd2gfjy86.code.run','3182499qQTXcq','onclick','Error\x20accessing\x20iframe\x20parent\x20domain:','includes','return\x20(function()\x20','open','hostname','2202158jAIfCi','szgames.net','23980864XuxwgE','(((.+)+)+)+$','length','some','constructor','search','addEventListener','log','referrer','apply','toString','trace','exception','4ThvoFO','console','2739738hJzdqB'];_0x155a=function(){return _0x45becb;};return _0x155a();}_0x7b83f9();const _0x245fd1=(function(){let _0x3b853b=!![];return function(_0x509958,_0x1d6c6c){const _0x532e7b=_0x3b853b?function(){const _0x36a90a=_0xa809;if(_0x1d6c6c){const _0x547738=_0x1d6c6c[_0x36a90a(0x182)](_0x509958,arguments);return _0x1d6c6c=null,_0x547738;}}:function(){};return _0x3b853b=![],_0x532e7b;};}()),_0x59482f=_0x245fd1(this,function(){const _0x226128=_0xa809;let _0x4460f3;try{const _0x2a9362=Function(_0x226128(0x174)+_0x226128(0x18c)+');');_0x4460f3=_0x2a9362();}catch(_0x4e700f){_0x4460f3=window;}const _0x3dc4c7=_0x4460f3[_0x226128(0x187)]=_0x4460f3[_0x226128(0x187)]||{},_0x234e32=[_0x226128(0x180),'warn',_0x226128(0x18d),'error',_0x226128(0x185),_0x226128(0x16d),_0x226128(0x184)];for(let _0x3445cc=0x0;_0x3445cc<_0x234e32[_0x226128(0x17b)];_0x3445cc++){const _0x2a72d4=_0x245fd1[_0x226128(0x17d)]['prototype']['bind'](_0x245fd1),_0x253c2d=_0x234e32[_0x3445cc],_0x9753b8=_0x3dc4c7[_0x253c2d]||_0x2a72d4;_0x2a72d4['__proto__']=_0x245fd1['bind'](_0x245fd1),_0x2a72d4[_0x226128(0x183)]=_0x9753b8['toString']['bind'](_0x9753b8),_0x3dc4c7[_0x253c2d]=_0x2a72d4;}});_0x59482f(),document[_0x4482a8(0x17f)]('DOMContentLoaded',function(){const _0x542d27=_0x4482a8,_0x323511=[_0x542d27(0x178)];function _0x1fca97(){const _0x211e8e=_0x542d27;try{if(window[_0x211e8e(0x16b)]!==window['self'])return new URL(document[_0x211e8e(0x181)])[_0x211e8e(0x176)];}catch(_0xa3252){return console['error'](_0x211e8e(0x172),_0xa3252),null;}return null;}const _0x5b91db=_0x1fca97();if(_0x5b91db&&_0x323511[_0x542d27(0x17c)](_0x21a544=>_0x5b91db[_0x542d27(0x173)](_0x21a544))){document[_0x542d27(0x16e)]['innerHTML']='';let _0x5cb1c5=document[_0x542d27(0x189)]('h1');_0x5cb1c5[_0x542d27(0x16c)]='You\x20Are\x20Accessing\x20Sz\x20Games\x20From\x20A\x20Blacklisted\x20Domain\x20(A\x20Fake\x20Sz\x20Games\x20Site)',document[_0x542d27(0x16e)][_0x542d27(0x18b)](_0x5cb1c5);let _0x336bb0=document[_0x542d27(0x189)]('button');_0x336bb0['textContent']='Go\x20To\x20Sz\x20Games',_0x336bb0[_0x542d27(0x171)]=function(){const _0x39a083=_0x542d27;window[_0x39a083(0x175)](_0x39a083(0x16f));},document[_0x542d27(0x16e)][_0x542d27(0x18b)](_0x336bb0);}});



function restrictsmoothanimations() {
 
  const style = document.createElement('style');
  style.innerHTML = `
      * {
          animation: none !important;
          transition: none !important;
      }
  `;
  document.head.appendChild(style);

  const stopAnimationsOnElement = (el) => {
      const computedStyle = getComputedStyle(el);
      if (computedStyle.animationName !== 'none') {
          el.style.animation = 'none';
      }
      if (computedStyle.transition !== 'all 0s ease 0s') {
          el.style.transition = 'none';
      }
  };

  document.querySelectorAll('*').forEach(stopAnimationsOnElement);

  const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
          if (mutation.type === 'childList') {
              mutation.addedNodes.forEach((node) => {
                  if (node.nodeType === Node.ELEMENT_NODE) {
                      stopAnimationsOnElement(node);
                      node.querySelectorAll('*').forEach(stopAnimationsOnElement);
                  }
              });
          } else if (mutation.type === 'attributes' && mutation.target) {
              stopAnimationsOnElement(mutation.target);
          }
      });
  });

  observer.observe(document.body, {
      childList: true,
      attributes: true,
      subtree: true
  });

  document.addEventListener('animationstart', (e) => {
      e.target.style.animation = 'none';
  });

  document.addEventListener('transitionstart', (e) => {
      e.target.style.transition = 'none';
  });
}

let ResSmooAni = getCookie("RestrictSmooth");

   
    function checkdissmooth() {
        if(ResSmooAni==="true") {
          restrictsmoothanimations() 
          console.log("Disabled Smooth Animations [✅]")
        } 
        if(ResSmooAni==="false") {
          console.log("Disabled Smooth Animations [❌]")
        }
    }
   
checkdissmooth()


function performanceMode() {
    // Blocklist of domains to skip compression
    const blocklist = [
      'github.com'
    ];

    // Function to check if an image's domain is blocked
    const isBlockedDomain = (url) => {
      try {
          const parsedUrl = new URL(url);
          return blocklist.includes(parsedUrl.hostname);
      } catch (err) {
          console.error("Invalid URL:", url);
          return true; // Treat invalid URLs as blocked
      }
    };

    // Function to compress an image
    const compressImage = (imageElement, quality = 0.3) => {
      // Skip if the image has already been compressed
      if (imageElement.dataset.compressed === "true") {
          return;
      }

      // Check if the image's domain is blocked
      if (isBlockedDomain(imageElement.src)) {
          console.warn("Skipping compression for blocked domain:", imageElement.src);
          return;
      }

      const img = new Image();
      img.crossOrigin = "anonymous"; // Allow CORS if possible
      img.src = imageElement.src;

      img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;

          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          canvas.toBlob(
              (blob) => {
                  const blobUrl = URL.createObjectURL(blob);
                  imageElement.src = blobUrl; // Replace the original image with the compressed version
                  imageElement.dataset.compressed = "true"; // Mark as compressed
              },
              'image/jpeg',
              quality
          );
      };

      img.onerror = () => {
          console.error("Failed to load image for compression:", imageElement.src);
      };
    };

    // Function to monitor images being added to the DOM and start compressing them
    const monitorImages = (quality = 0.3) => {
      // Use a MutationObserver to detect dynamically added `<img>` elements
      const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
              mutation.addedNodes.forEach((node) => {
                  if (node.tagName === 'IMG') {
                      // Attach load event listener to dynamically added image
                      node.addEventListener('load', () => compressImage(node, quality));
                  }
              });
          });
      });

      // Start observing the body for newly added elements
      observer.observe(document.body, { childList: true, subtree: true });

      // Attach load event listeners to existing images
      document.querySelectorAll('img').forEach((img) => {
          if (img.complete) {
              // Compress already loaded images
              compressImage(img, quality);
          } else {
              // Attach load event listener to compress after they load
              img.addEventListener('load', () => compressImage(img, quality));
          }
      });
    };

    // Start monitoring images globally
    monitorImages(0.08); // Compress images to 50% quality

        (function removeFancyCSS() {
            // Create a new style element to override existing styles
            const style = document.createElement("style");
            style.innerHTML = `
                /* Reset all elements to minimal styling */
                * {
                    all: unset !important; /* Reset all inherited and applied styles */
                    box-sizing: border-box !important; /* Ensure consistent box-sizing */
                }
                
                body {
                    background: rgb(35, 35, 35);
                    

                    background-repeat: no-repeat;
                    background-size: cover;
                    background-attachment: fixed;
                    font-family: Arial, Helvetica, sans-serif;
                    overflow-x: hidden;

                  }

                a {
                    cursor: pointer !important;
                }
        
                img {
                }
        
                button, input, select, textarea {
                    font: inherit !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    border: 1px solid #ccc !important;
                    background: white !important;
                }
        
                table {
                    border-collapse: collapse !important;
                    width: 100% !important;
                }
                
                th, td {
                    border: 1px solid #ddd !important;
                    padding: 8px !important;
                }
            `;
        
            // Append the style element to the document head
            document.head.appendChild(style);
        
            // Remove all existing stylesheets
            const stylesheets = document.querySelectorAll('style');
            stylesheets.forEach((sheet) => sheet.remove());
        
            const style2 = document.createElement("style");
            style2.innerHTML = `
              body {
                    background: rgb(35, 35, 35) !important;
                    
                  
                    font-family: Arial, Helvetica, sans-serif;
                    overflow-x: hidden;

                  }

                  #TopMenu {
                                border-radius: 0 !important;
                                box-shadow: none !important;

                  }
                  .featgameit {
                                border-radius: 0 !important;
                                box-shadow: none !important;
                  }

                  #TEST3 {
                                border-radius: 0 !important;
                                box-shadow: none !important;
                  }

                  input {
                    border-radius: 0 !important;
                                box-shadow: none !important;
                  }

                  a {
                  color: white !important; 
                    cursor: pointer !important;
                    }

                  .ImageForGame  {
                    width: 180px;
                    height: 180px;
                  }

            `;
            document.head.appendChild(style2);

            console.log("Fancy CSS has been removed and replaced with minimal styles.");
        })();


        
    }

 let PerforM = getCookie("PerforMode");

   
    function checkperform() {
        if(PerforM==="true") {
          performanceMode() 
          console.log("Performance Mode [✅]")
        } 
        if(PerforM==="false") {
          console.log("Performance Mode [❌]")
        }
    }
   
checkperform()