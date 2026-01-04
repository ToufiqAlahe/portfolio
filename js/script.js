/*======JS=======*/

// Aos
AOS.init({
  offset: 100,
  delay: 50,
  duration: 1000,
  easing: 'linear'
});

// jQuery - Wait for page ready
$(document).ready(function () {
  // Skill bars
  $('#skill1').simpleSkillbar({ background: 'var(--accent-color)' });
  $('#skill2').simpleSkillbar({ background: 'var(--accent-color)' });
  $('#skill3').simpleSkillbar({ background: 'var(--accent-color)' });
  $('#skill4').simpleSkillbar({ background: 'var(--accent-color)' });
  $('#skill5').simpleSkillbar({ background: 'var(--accent-color)' });
  $('#skill6').simpleSkillbar({ background: 'var(--accent-color)' });

  // Counter
  $(".counter").counterUp();

});

