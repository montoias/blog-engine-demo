import Ember from 'ember';

export default Ember.Route.extend({
    model({ id }) {
        return this.get('store').findRecord('post', id);
    },

    actions: {
        deletePost(model) {
            model.deleteRecord();

            this.transitionTo('index');
        }
    }
});
