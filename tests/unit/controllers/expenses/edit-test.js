import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | expenses/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:expenses/edit');
    assert.ok(controller);
  });
});
