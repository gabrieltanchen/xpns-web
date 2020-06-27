import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | income/settings', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:income/settings');
    assert.ok(route);
  });
});
