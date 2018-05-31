import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
	model() {
		return hash({
	      	guest: this.store.createRecord('task'),
	      	users: this.store.findAll('task')
	    });	
	}
});
