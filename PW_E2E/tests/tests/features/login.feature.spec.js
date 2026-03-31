// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('Login Functionality', () => {

  test('Log in with valid credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('User is on login page', null, { page }); 
    await When('User enters username', null, { page }); 
    await And('User enters password', null, { page }); 
    await And('User clicks Login button', null, { page }); 
    await Then('User is logged in successfully', null, { page }); 
    await And('User is able to navigate to product page', null, { page }); 
  });

  test('Log in with locked out user credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('User is on login page', null, { page }); 
    await When('User enters locked out username', null, { page }); 
    await And('User enters password', null, { page }); 
    await And('User clicks Login button', null, { page }); 
    await Then('User gets error message', null, { page }); 
    await And('User is still on login page', null, { page }); 
  });

  test('Log in with invalid username', async ({ Given, When, Then, And, page }) => { 
    await Given('User is on login page', null, { page }); 
    await When('User enters invalid username', null, { page }); 
    await And('User enters password', null, { page }); 
    await And('User clicks Login button', null, { page }); 
    await Then('User gets invalid username error message'); 
    await And('User is still on login page', null, { page }); 
  });

  test('Log in with problem user credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('User is on login page', null, { page }); 
    await When('User enters problem username', null, { page }); 
    await And('User enters password', null, { page }); 
    await And('User clicks Login button', null, { page }); 
    await Then('User is logged in successfully', null, { page }); 
    await And('User is able to navigate to product page', null, { page }); 
    await And('The image of product is an image of a dog', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User enters username","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And User enters password","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And User clicks Login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then User is logged in successfully","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And User is able to navigate to product page","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given User is on login page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When User enters locked out username","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And User enters password","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And User clicks Login button","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then User gets error message","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"And User is still on login page","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given User is on login page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When User enters invalid username","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"And User enters password","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And User clicks Login button","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then User gets invalid username error message","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"And User is still on login page","stepMatchArguments":[]}]},
  {"pwTestLine":33,"pickleLine":28,"tags":[],"steps":[{"pwStepLine":34,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given User is on login page","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When User enters problem username","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"And User enters password","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"And User clicks Login button","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then User is logged in successfully","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"And User is able to navigate to product page","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"And The image of product is an image of a dog","stepMatchArguments":[]}]},
]; // bdd-data-end