const hero = document.querySelector('.services');
        const text = hero.querySelector('h1');
        walk = 25;
      
        function shadow(e) {
          const {offsetWidth: width, offsetHeight: height} = hero;
          let { offsetX: x, offsetY: y } = e;
      
          if (this !== e.target) {
            x = x + e.target.offsetLeft;
            y = y + e.target.offsetTop;
          }
      
          const xWalk = Math.round((x / width * walk) - (walk / 2));
          const yWalk = Math.round((y / height * walk) - (walk / 2));
      
          text.style.textShadow = `${xWalk}px ${yWalk}px 0 blue`;
      
        }
      
        hero.addEventListener('mousemove', shadow);