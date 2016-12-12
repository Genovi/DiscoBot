module.exports = {
  usage: '',
  description: 'Removes the 18+ role.',
  allowDM: false,
  process: (bot, message) => {
    let member = message.guild.member(message.author);
    let role = message.guild.roles.find('name', '18+');
    let currentRoles = [];

    for (var [id, currentRole] of member.roles) {

      // Check for region roles and ignore
      if (currentRole !== role) {
        currentRoles.push(currentRole);
      }
    }

    // Reapply the roles!
    member.setRoles(currentRoles);

    message.reply('I\'ve removed you from 18+ channels :smile:');

  }
};
