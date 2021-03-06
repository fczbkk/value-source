import * as x from './../src/sources/environment.js';


describe('environment', function () {

  describe('current_url', function () {

    it('should get current URL', function () {
      const expectation = document.location.toString();
      expect(x.current_url()).toEqual(expectation);
    });

  });

  describe('frame_name', function () {

    let original_name;

    beforeAll(function () {
      original_name = window.name;
    });

    afterEach(function () {
      window.name = original_name;
    });

    it('unnamed window', function () {
      window.name = '';
      expect(x.frame_name()).toEqual('');
    });

    it('named window', function () {
      window.name = 'aaa';
      expect(x.frame_name()).toEqual('aaa');
    });

  });

  xdescribe('frame_id', function () {
    // TODO can not be tested in PhantomJS
  });

  xdescribe('frame_element', function () {
    // TODO can not be tested in PhantomJS
  });

  xdescribe('frame_depth', function () {
    // TODO can not be tested in PhantomJS
  });

  xdescribe('frame_attribute', function () {
    // TODO can not be tested in PhantomJS
  });

  // TODO can not be tested in PhantomJS
  xdescribe('window_focus', function () {

    it('should return `true` if window has focus', function () {
      document.body.focus();
      expect(x.window_focus()).toEqual(true);
    });

    it('should return `false` if window does not have focus', function () {
      document.body.blur();
      expect(x.window_focus()).toEqual(false);
    });

  });

});
