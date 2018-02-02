import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('media/media-upload', 'Integration | Component | media/media upload', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{media/media-upload}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#media/media-upload}}
      template block text
    {{/media/media-upload}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
