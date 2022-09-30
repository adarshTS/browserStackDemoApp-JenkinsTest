userName = process.env.BROWSERSTACK_USERNAME
accessKey = process.env.BROWSERSTACK_ACCESS_KEY
browserstackLocal = process.env.BROWSERSTACK_LOCAL
buildName = process.env.BROWSERSTACK_BUILD_NAME;
browserstackLocalIdentifier = process.env.BROWSERSTACK_LOCAL_IDENTIFIER
app = process.env.BROWSERSTACK_APP_ID

var capabilities = {
    "browserstack.user" : userName,
    "browserstack.key" : accessKey,
    "app" : app,
    "build" : buildName,
    "device" : "Samsung Galaxy S8",
    "browserstack.local" : browserstackLocal,
    "browserstack.localIdentifier" : browserstackLocalIdentifier
}

driver = wd.promiseRemote("https://hub-cloud.browserstack.com/wd/hub");

driver
  .init(capabilities)
  await driver.init(caps)
      .then(function () {
          return driver.waitForElementByAccessibilityId("filter-btn", asserters.isDisplayed && asserters.isEnabled).click();
        }) 
      .then(function() {
          return driver.waitForElementByXPath("//android.widget.Button[@content-desc=\"Samsung\"]/android.widget.TextView", asserters.isDisplayed && asserters.isEnabled).click();
        })
      .then(function() {
          return (new wd.TouchAction(driver)).tap({x: 1000, y: 700}).perform();
        })
  .fin(function() { return driver.quit(); })
  .done();
