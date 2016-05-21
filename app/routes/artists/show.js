import Ember from 'ember';
import config from '../../config/environment';

export default Ember.Route.extend({
  model(params) {
  	var host = config.apiURL;
    return Ember.$.getJSON(host + params.id);
  }
});