function skillsMember() {
  var skills = ['HTML', 'CSS', 'JS'];
  var member = {
    name: 'John',
    skills: skills,
    showSkills: function() {
      var self = this;
      this.skills.forEach(function(skill) {
        console.log(`${self.name} knows ${skill}`);
      });
    }
  };

  member.showSkills();
}