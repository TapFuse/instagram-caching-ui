//
//      tapfuseInstagramCachingUi: Lifecycle Hooks
//

Template.tapfuseInstagramCachingUi.onCreated(() => {

});

Template.tapfuseInstagramCachingUi.onRendered(() => {

});

//
//      tapfuseInstagramCachingUi: Helpers
//

Template.tapfuseInstagramCachingUi.helpers({
  helper() {
    return '';
  },
});

//
//      tapfuseInstagramCachingUi: Event Handlers
//

Template.tapfuseInstagramCachingUi.events({
  'click .js-cacheButton'(e, t) {
    const options = {
      jobName: 'Cache user photos',
      interval: 'every 2 minutes',
      parameters: {
        username: 'matas.jonys',
      },
    };
    Meteor.call('startCachingUserPhotos', options);
  },
});

Meteor.startup(() => {
  Collection.tpServicesUiTemplates.insert({template: 'tapfuseInstagramCachingUi'});
});
