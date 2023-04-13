function initialSetup() {
    if (document.getElementById("red") != null) {
      setTimeout(function() {
        document.getElementById('red').style.display = 'block';
      }, 5000);
    }
  }

  initialSetup();

  function initialSetup1() {
    if (document.getElementById("gul") != null) {
      setTimeout(function() {
        document.getElementById('gul').style.display = 'block';
      }, 3000);
    }
  }

  initialSetup1();

  function initialSetup2() {
    if (document.getElementById("blue") != null) {
      setTimeout(function() {
        document.getElementById('blue').style.display = 'block';
      }, 27000);
    }
  }

  initialSetup2()

  function initialSetup3() {
    if (document.getElementById("yellow") != null) {
      setTimeout(function() {
        document.getElementById('yellow').style.display = 'block';
      }, 10000);
    }
  }
  
  initialSetup3()

  function initialSetup4() {
    if (document.getElementById("green") != null) {
      setTimeout(function() {
        document.getElementById('green').style.display = 'block';
      }, 14000);
    }
  }

  initialSetup4()

  function initialSetup5() {
    if (document.getElementById("pink") != null) {
      setTimeout(function() {
        document.getElementById('pink').style.display = 'block';
      }, 13500);
    }
  }

  initialSetup5()

  function initialSetup6() {
    if (document.getElementById("purple") != null) {
      setTimeout(function() {
        document.getElementById('purple').style.display = 'block';
      }, 12500);
    }
  }

  initialSetup6()


  var elem = document.documentElement;
        function openFullscreen() {
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem.mzRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
          } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
          }
        }
        
        function closeFullscreen() {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.mzExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
          }
        }





        var typeWriter = document.getElementById('type-writer');
var dataText = typeWriter.getAttribute('data-text');

var count = 0;
var dataTextLength = dataText.length;

var setText = function () {
  setTimeout(function () {
    typeWriter.textContent = typeWriter.textContent + dataText.charAt(count);
    count++;
    if (count <= dataTextLength) {
      setText();
    }
  }, 50);
}

window.onload = () => {
  setText()
}