var button = document.getElementById('toggle'),
    monster = document.getElementById('monster'),
    $monster = $('#monster'),
    rocks = document.getElementsByClassName('rock'),
    feedRock = function() {
      button.setAttribute('disabled', 'disabled');
      monster.classList.add('eating');
      setTimeout(function() {
        monster.classList.remove('eating');
      }, 2000);

      configureRocks();
      requestAnimationFrame(moveRocks);
    },
    configureRocks = function() {
      var rock, $rock;
      var monsterMiddle = (monster.getBoundingClientRect().left + monster.getBoundingClientRect().right) / 2;
      for (var i = 0; i < rocks.length; i++) {
        rock = rocks[i];
        $rock = $(rock);
        rock.velX = (monsterMiddle - (rock.getBoundingClientRect().left + rock.getBoundingClientRect().right) / 2) / 30;
        rock.velY = -12 + Math.random() * 3;

        rock.newX = $rock.position().left;
        rock.newY = $rock.position().top;
        rock.style.bottom = '';
        rock.exist = true;
      }
    },
    start = null,
    last = 0,
    moveRocks = function(timestamp) {
      if (last === 0) last = timestamp;
      var elapsed = timestamp - last;
      var rock;
      var monsterRect = monster.getBoundingClientRect();

      for (var i = rocks.length - 1; i >= 0; i--) {
        rock = rocks[i];
        rock.newX += rock.velX * Math.abs(elapsed / 33.3333);
        rock.velY += 0.3;
        rock.newY += rock.velY * Math.abs(elapsed / 33.3333);

        rock.style.left = rock.newX + 'px';
        rock.style.top = rock.newY + 'px';

        if (rock.getBoundingClientRect().top > monsterRect.bottom) {
          rock.remove();
        }
        else if (rock.newX > monsterRect.left && rock.newX + rock.width < monsterRect.right) {
          if (rock.getBoundingClientRect().top > monsterRect.top && rock.getBoundingClientRect().top + rock.height < monsterRect.bottom) {
            rock.remove();
          }
        }
      }

      last = timestamp;
      if (rocks.length) {
        requestAnimationFrame(moveRocks);
      }
    };


button.onclick = feedRock;
