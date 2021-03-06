/**
 * @file
 * Contains main Yoke bar event handling and User page template helpers
 */

Template.omnibar.events({
  // Inserting a yoke
  'submit .omnibar-form': function(event) {
    var yokeMsg = $("#yoke-text").val();
    $("#yoke-text").val('');
    Yokes.insert({
      'user': Meteor.userId(),
      'msg': yokeMsg,
      'createdAt': new Date()
    });
    return false;
  }
});

Template.home.helpers({
  /**
   * Check if current user follows the user who owns current page.
   * invoked when in the users route.
   */
  followsUser: function() {
    return Graph.find({
      user: Meteor.userId(),
      follows: this.userContext
    }).count() ? true : false;
  }
});