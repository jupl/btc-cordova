# Changelog

#### 0.10.4 (March 9, 2014)
- Fix bug with running Cordova tasks on existing project
- Update BTC
  - Update BrowserSync
  - Update Bluebird
  - Update PhantomJS
  - Update Selenium Webdriver

#### 0.10.3 (March 7, 2014)
- Update Hammer.js
  - Update how Hammer and jquery.hammer is added to Bower
- Update BTC
  - Update Express.js
  - Include Normalize.css by default

#### 0.10.2 (February 28, 2014)
- Update BTC
  - Add BrowserSync as an option for autoreload
  - Update paths for code and site testing

#### 0.10.1 (February 26, 2014)
- Update BTC
  - Rename paths for generated JS/CSS
  - For index.html, use relative paths by default

### 0.10.0 (February 25, 2014)
- Update Cordova to 3.4
- Update FastClick to 1.0.0
- Update BTC
  - Simplify generator-related tasks by reusing code
  - Installing test-related modules does not modify `package.json`
  - Install Bower components automatically after running `npm install`

#### 0.9.2 (February 11, 2014)
- Update BTC
  - Revert to editing `package.json` and `bower.json`

#### 0.9.1 (February 11, 2014)
- Update BTC
  - Simplify scaffold-related tasks
  - Fix issue with waiting for files to build before running tasks

### 0.9.0 (February 10, 2014)
- Simplify server
- No need to copy config.xml anymore
- Rename `cordova:gen` to `cordova:init`
- Update BTC
  - Simplify Brunch config
  - Enforce strict mode
  - Remove dashes in generators
  - Detect browsers in Karma
  - Unify `add:codetesting` and `add:sitetesting` tasks
  - Add aliases to generator tasks

#### 0.8.1 (February 5, 2014)
- Update BTC
  - Fix bug in `npm:clean`

### 0.8.0 (February 5, 2014)
- Update BTC
  - Do not install code/site testing-related packages by default
  - Add tasks to install/uninstall code/site testing-related packages
  - Update Sinon Chai

#### 0.7.1 (February 4, 2014)
- Update BTC
  - Update karma-chai-plugins

### 0.7.0 (February 3, 2014)
- Update BTC
  - Clean npm cache for `npm:clean`
  - Add structure to `server` directory

#### 0.6.6 (January 31, 2014)
- Update BTC
  - Remove Autoprefixer for now

#### 0.6.5 (January 31, 2014)
- Update BTC
  - Fix Autoprefixer
  - Add `npm:clean` task

#### 0.6.4 (January 31, 2014)
- Update BTC
  - Add Autoprefixer
  - Clean up package.json

#### 0.6.3 (January 30, 2014)
- Update BTC
  - Update jQuery
  - Update normalize.css
  - Update Chai

#### 0.6.2 (January 15, 2014)
- Update BTC
  - Fix watch in `test:code`
  - Update Mocha
  - Update Bluebird
  - Update Nodemon

#### 0.6.1 (December 20, 2013)
- Add task to add/remove plugins
- Add task to upgrade device platform
- Add task to list device platforms and plugins
- Update BTC
  - Update Mocha
  - Update WebDriverJS

### 0.6.0 (December 14, 2013)
- Update Cordova to 3.3
- Update BTC
  - Allow multiple names to be specified per scaffold
  - Move default Jake task to Jakefile
  - Include server to customize and add services
  - Update packages

#### 0.5.2 (December 12, 2013)
- Update BTC
  - Fix Windows support
- Fix typo in copying `config.xml`

#### 0.5.1 (December 12, 2013)
- Update BTC

### 0.5.0 (December 4, 2013)
- Update BTC
- Update Cordova to 3.2
  - Stop referencing `res`
- Rename `cordova:init` to `cordova:gen`

#### 0.4.3 (November 14, 2013)
- Fix broken URL for device.js in generator
- Change device.js code from last update to work better for testing

#### 0.4.2 (November 14, 2013)
- Update BTC
- Change device.js' `device` to `devicejs` to avoid issues with Cordova

#### 0.4.1 (November 9, 2013)
- Update BTC

### 0.4.0 (November 9, 2013)
- Update BTC
- Add device.js
- Fix bug with package name

#### 0.3.1 (November 7, 2013)
- Check for existing of `cordova` variable, not `device` in testing

### 0.3.0 (November 6, 2013)
- Update BTC
- Update Cordova
- Move web build (`build/web` to `public`) and Cordova build (`build/cordova` to `cordova`)

### 0.2.0 (September 28, 2013)
- Update BTC
- Update Cordova
- Add FastClick and Hammer

#### 0.1.2 (April 15, 2013)
- Update Brunch Toolchain.

#### 0.1.1 (March 29, 2013)
- Add FastClick module.

### 0.1.0 (March 29, 2013)
- Initial release.
