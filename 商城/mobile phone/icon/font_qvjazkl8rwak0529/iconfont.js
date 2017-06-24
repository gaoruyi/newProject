;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M792.819712 566.833152l109.868032-251.779072c5.387264-12.376064 4.369408-26.2144-2.715648-37.010432-6.89664-10.528768-18.260992-16.56832-31.178752-16.56832L350.844928 261.475328l-8.363008-37.351424c-6.396928-28.826624-34.958336-51.408896-65.022976-51.408896L144.917504 172.715008c-14.544896 0-26.37824 11.833344-26.37824 26.37824 0 14.54592 11.833344 26.379264 26.37824 26.379264l132.542464 0c5.588992 0 12.409856 5.098496 13.52192 10.129408l100.713472 448.893952c-32.521216 12.913664-54.491136 45.618176-54.491136 81.168384 0 47.593472 38.720512 86.31296 86.31296 86.31296 47.597568 0 86.320128-38.720512 86.320128-86.31296 0-10.98752-2.081792-21.761024-6.102016-31.840256l178.471936 0c-4.021248 10.082304-6.10304 20.854784-6.10304 31.840256 0 47.593472 38.720512 86.31296 86.313984 86.31296 47.598592 0 86.324224-38.720512 86.324224-86.31296 0-47.594496-38.724608-86.313984-86.324224-86.313984-5.64224 0-317.648896 0-317.648896 0l-18.8928-82.701312 320.191488 0C765.970432 596.64896 785.19808 584.382464 792.819712 566.833152zM766.570496 732.418048c16.659456 2.052096 29.415424 16.262144 29.415424 33.246208 0 18.502656-15.058944 33.55648-33.567744 33.55648-18.502656 0-33.55648-15.0528-33.55648-33.55648 0-14.42816 9.401344-27.33056 23.021568-31.840256C751.883264 733.824 759.109632 731.313152 766.570496 732.418048zM362.65472 314.232832l482.83648 0-100.221952 229.66272L414.058496 543.895552 362.65472 314.232832zM423.51616 799.220736c-18.502656 0-33.55648-15.0528-33.55648-33.55648 0-16.80896 12.60032-30.997504 29.064192-33.212416 6.943744-0.456704 15.035392 1.37216 15.035392 1.37216 13.620224 4.506624 23.020544 17.410048 23.020544 31.840256C457.080832 784.166912 442.023936 799.220736 423.51616 799.220736z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon59" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M354.369 391.605c0 22.606 18.326 40.932 40.932 40.932s40.932-18.326 40.932-40.932c0-22.606-18.326-40.932-40.932-40.932-22.606 0-40.932 18.326-40.932 40.932z"  ></path>' +
    '' +
    '<path d="M823.773 774.542l-131.425-131.415c40.099-49.786 61.895-111.263 61.895-176.1 0-75.168-29.273-145.838-82.427-198.991-53.154-53.154-123.822-82.426-198.987-82.426s-145.833 29.273-198.988 82.426c-53.153 53.154-82.425 123.822-82.425 198.989 0 75.168 29.274 145.832 82.426 198.976 35.724 35.723 80.348 61.188 129.047 73.641 22.911 5.858 46.422 8.784 69.935 8.784 24.981 0 49.962-3.304 74.191-9.909 16.359-4.456 26.006-21.332 21.55-37.69-4.459-16.358-21.335-26.008-37.69-21.548-76.066 20.727-157.919-0.997-213.619-56.697-41.555-41.547-64.442-96.791-64.442-155.557 0-58.766 22.886-114.018 64.444-155.574 85.783-85.783 225.361-85.783 311.144 0 41.556 41.556 64.444 96.809 64.444 155.575s-22.886 114.016-64.443 155.568c-11.99 11.988-11.991 31.425-0.003 43.415 1.504 1.503 3.124 2.818 4.833 3.944 1.127 1.708 2.441 3.329 3.944 4.832l143.183 143.173c5.995 5.994 13.85 8.991 21.707 8.991s15.714-2.998 21.708-8.992c11.989-11.989 11.988-31.428-0.001-43.415z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrow-right-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M543.683 764.018l0.008 0.008 1.049-1.137 297.916-317.429-60.368-56.657-242.758 258.659-260.543-240.734-56.186 60.806 320.872 296.492z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fenlei" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M64 896l896 0L960 768 64 768 64 896zM64 575.938l896 0L960 447.969 64 447.969 64 575.938zM64 128l0 127.938 896 0L960 128 64 128z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ren" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M811.1 823.9c-2.8-75.1-33.6-145.7-86.8-199-30-30-64.9-52.7-103.9-67.6 19.5-10.4 37.4-23.7 53.3-39.6 42.6-42.6 66.1-99.3 66.1-159.5 0-60.3-23.5-116.9-66.1-159.5-42.6-42.6-99.3-66.1-159.5-66.1-60.3 0-116.9 23.5-159.5 66.1-42.6 42.6-66.1 99.3-66.1 159.5s23.5 116.9 66.1 159.5c15.9 15.9 33.8 29.2 53.3 39.6-39 15-74 37.7-103.9 67.7-53.2 53.2-84.1 123.9-86.8 199l-0.1 3.1h45l0.1-2.9c2.7-63.2 28.8-122.6 73.6-167.4C379.6 613 437.5 587 499 583.3c5.1 0.3 10.2 0.5 15.2 0.5 4.9 0 10-0.2 15.2-0.5 61.5 3.6 119.5 29.7 163.2 73.4 44.8 44.8 71 104.3 73.6 167.4l0.1 2.9h45l-0.2-3.1zM694.8 358.3c0 93.4-72.8 172.4-165.8 180-9.9-0.5-19.8-0.5-29.7 0-93-7.6-165.8-86.6-165.8-180 0-99.6 81-180.6 180.6-180.6 99.7-0.1 180.7 81 180.7 180.6z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)