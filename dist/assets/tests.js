define('elixirhunt/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass jshint.\nadapters/application.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nadapters/application.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('elixirhunt/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass jshint.\napp.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 6, col 1, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 13, col 3, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 18, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n7 errors');
  });
});
define('elixirhunt/tests/controllers/admin/auth/login.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/admin/auth/login.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/admin/auth/login.js should pass jshint.\ncontrollers/admin/auth/login.js: line 1, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/admin/auth/login.js: line 4, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n2 errors');
  });
});
define('elixirhunt/tests/controllers/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/index.js should pass jshint.\ncontrollers/index.js: line 1, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/index.js: line 8, col 49, Missing semicolon.\ncontrollers/index.js: line 32, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/index.js: line 36, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/index.js: line 51, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/index.js: line 55, col 5, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/index.js: line 62, col 27, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/index.js: line 70, col 30, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/index.js: line 71, col 47, Missing semicolon.\ncontrollers/index.js: line 80, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/index.js: line 84, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/index.js: line 88, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n12 errors');
  });
});
define('elixirhunt/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('elixirhunt/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('elixirhunt/tests/helpers/humanize-date.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/humanize-date.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/humanize-date.js should pass jshint.\nhelpers/humanize-date.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nhelpers/humanize-date.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nhelpers/humanize-date.js: line 3, col 29, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nhelpers/humanize-date.js: line 4, col 3, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nhelpers/humanize-date.js: line 9, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n5 errors');
  });
});
define('elixirhunt/tests/helpers/if-empty.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/if-empty.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/if-empty.js should pass jshint.\nhelpers/if-empty.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nhelpers/if-empty.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nhelpers/if-empty.js: line 4, col 3, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nhelpers/if-empty.js: line 5, col 3, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nhelpers/if-empty.js: line 14, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n5 errors');
  });
});
define('elixirhunt/tests/helpers/markdown-decode.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/markdown-decode.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/markdown-decode.js should pass jshint.\nhelpers/markdown-decode.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nhelpers/markdown-decode.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nhelpers/markdown-decode.js: line 3, col 31, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nhelpers/markdown-decode.js: line 5, col 3, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nhelpers/markdown-decode.js: line 12, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n5 errors');
  });
});
define('elixirhunt/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'elixirhunt/tests/helpers/start-app', 'elixirhunt/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _elixirhuntTestsHelpersStartApp, _elixirhuntTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _elixirhuntTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _elixirhuntTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('elixirhunt/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('elixirhunt/tests/helpers/nl2br.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/nl2br.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/nl2br.js should pass jshint.\nhelpers/nl2br.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nhelpers/nl2br.js: line 3, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nhelpers/nl2br.js: line 3, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nhelpers/nl2br.js: line 8, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nhelpers/nl2br.js: line 8, col 22, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nhelpers/nl2br.js: line 13, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n6 errors');
  });
});
define('elixirhunt/tests/helpers/resolver', ['exports', 'elixirhunt/resolver', 'elixirhunt/config/environment'], function (exports, _elixirhuntResolver, _elixirhuntConfigEnvironment) {

  var resolver = _elixirhuntResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _elixirhuntConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _elixirhuntConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('elixirhunt/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('elixirhunt/tests/helpers/start-app', ['exports', 'ember', 'elixirhunt/app', 'elixirhunt/config/environment'], function (exports, _ember, _elixirhuntApp, _elixirhuntConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _elixirhuntConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _elixirhuntApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('elixirhunt/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('elixirhunt/tests/models/post.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/post.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/post.js should pass jshint.\nmodels/post.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/post.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('elixirhunt/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'resolver.js should pass jshint.\nresolver.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nresolver.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('elixirhunt/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 4, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nrouter.js: line 26, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors');
  });
});
define('elixirhunt/tests/routes/404.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/404.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/404.js should pass jshint.\nroutes/404.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/404.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/404.js: line 5, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});
define('elixirhunt/tests/routes/admin/jobs/edit.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/admin/jobs/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/admin/jobs/edit.js should pass jshint.\nroutes/admin/jobs/edit.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/admin/jobs/edit.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('elixirhunt/tests/routes/admin/jobs/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/admin/jobs/new.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/admin/jobs/new.js should pass jshint.\nroutes/admin/jobs/new.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/admin/jobs/new.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('elixirhunt/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass jshint.\nroutes/index.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/index.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/index.js: line 5, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});
define('elixirhunt/tests/routes/stats.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/stats.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/stats.js should pass jshint.\nroutes/stats.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/stats.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/stats.js: line 7, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});
define('elixirhunt/tests/services/keen.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/keen.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/keen.js should pass jshint.\nservices/keen.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nservices/keen.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nservices/keen.js: line 4, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nservices/keen.js: line 11, col 16, \'template literal syntax\' is only available in ES6 (use \'esversion: 6\').\nservices/keen.js: line 10, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/keen.js: line 14, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/keen.js: line 16, col 9, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/keen.js: line 26, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/keen.js: line 27, col 9, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n9 errors');
  });
});
define('elixirhunt/tests/test-helper', ['exports', 'elixirhunt/tests/helpers/resolver', 'ember-qunit'], function (exports, _elixirhuntTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_elixirhuntTestsHelpersResolver['default']);
});
define('elixirhunt/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('elixirhunt/tests/unit/helpers/empty-test', ['exports', 'elixircave/helpers/empty', 'qunit'], function (exports, _elixircaveHelpersEmpty, _qunit) {

  (0, _qunit.module)('Unit | Helper | empty');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _elixircaveHelpersEmpty.empty)([42]);
    assert.ok(result);
  });
});
define('elixirhunt/tests/unit/helpers/empty-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/empty-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/empty-test.js should pass jshint.');
  });
});
define('elixirhunt/tests/unit/helpers/humanize-date-test', ['exports', 'elixircave/helpers/humanize-date', 'qunit'], function (exports, _elixircaveHelpersHumanizeDate, _qunit) {

  (0, _qunit.module)('Unit | Helper | humanize date');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _elixircaveHelpersHumanizeDate.humanizeDate)([42]);
    assert.ok(result);
  });
});
define('elixirhunt/tests/unit/helpers/humanize-date-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/humanize-date-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/humanize-date-test.js should pass jshint.');
  });
});
define('elixirhunt/tests/unit/helpers/if-empty-test', ['exports', 'elixircave/helpers/if-empty', 'qunit'], function (exports, _elixircaveHelpersIfEmpty, _qunit) {

  (0, _qunit.module)('Unit | Helper | if empty');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _elixircaveHelpersIfEmpty.ifEmpty)([42]);
    assert.ok(result);
  });
});
define('elixirhunt/tests/unit/helpers/if-empty-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/if-empty-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/if-empty-test.js should pass jshint.');
  });
});
define('elixirhunt/tests/unit/helpers/markdown-decode-test', ['exports', 'elixircave/helpers/markdown-decode', 'qunit'], function (exports, _elixircaveHelpersMarkdownDecode, _qunit) {

  (0, _qunit.module)('Unit | Helper | markdown decode');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _elixircaveHelpersMarkdownDecode.markdownDecode)([42]);
    assert.ok(result);
  });
});
define('elixirhunt/tests/unit/helpers/markdown-decode-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/markdown-decode-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/markdown-decode-test.js should pass jshint.');
  });
});
define('elixirhunt/tests/unit/helpers/nl2br-test', ['exports', 'elixircave/helpers/nl2br', 'qunit'], function (exports, _elixircaveHelpersNl2br, _qunit) {

  (0, _qunit.module)('Unit | Helper | nl2br');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _elixircaveHelpersNl2br.nl2br)([42]);
    assert.ok(result);
  });
});
define('elixirhunt/tests/unit/helpers/nl2br-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/nl2br-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/nl2br-test.js should pass jshint.');
  });
});
define('elixirhunt/tests/unit/models/post-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('post', 'Unit | Model | post', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('elixirhunt/tests/unit/models/post-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/post-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/post-test.js should pass jshint.');
  });
});
define('elixirhunt/tests/unit/routes/admin/jobs/edit-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:admin/jobs/edit', 'Unit | Route | admin/jobs/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('elixirhunt/tests/unit/routes/admin/jobs/edit-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/admin/jobs/edit-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/admin/jobs/edit-test.js should pass jshint.');
  });
});
define('elixirhunt/tests/unit/routes/admin/jobs/new-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:admin/jobs/new', 'Unit | Route | admin/jobs/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('elixirhunt/tests/unit/routes/admin/jobs/new-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/admin/jobs/new-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/admin/jobs/new-test.js should pass jshint.');
  });
});
define('elixirhunt/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('elixirhunt/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('elixirhunt/tests/unit/routes/stats-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:stats', 'Unit | Route | stats', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('elixirhunt/tests/unit/routes/stats-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/stats-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/stats-test.js should pass jshint.');
  });
});
define('elixirhunt/tests/unit/services/keen-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:keen', 'Unit | Service | keen', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('elixirhunt/tests/unit/services/keen-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/keen-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/keen-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('elixirhunt/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map