// Generated from: tests\features\popup.feature
import { test } from "playwright-bdd";

test.describe('Check the popup', () => {

  test.beforeEach('Background: Filling the form', async ({ Given, And, page }, testInfo) => { if (testInfo.error) return;
    await Given('User is on Homeloan page', null, { page }); 
    await And('User fills in  LoanAmount as "4500000"', null, { page }); 
    await And('User fills in Tenure as "20"', null, { page }); 
    await And('User fills in Age as "30"', null, { page }); 
  });
  
  test('Popup on pressing Lets get started button', async ({ When, Then, page }) => { 
    await When('User presses Let\'s get started button', null, { page }); 
    await Then('A popup for more details pops up', null, { page }); 
  });

  test('Clicking on X button closes the popup', async ({ When, Then, And, page }) => { 
    await When('User presses Let\'s get started button', null, { page }); 
    await And('User clicks on the X button on the popup', null, { page }); 
    await Then('The popup should close', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\popup.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":13,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is on Homeloan page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And User fills in  LoanAmount as \"4500000\"","isBg":true,"stepMatchArguments":[{"group":{"start":29,"value":"\"4500000\"","children":[{"start":30,"value":"4500000","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And User fills in Tenure as \"20\"","isBg":true,"stepMatchArguments":[{"group":{"start":24,"value":"\"20\"","children":[{"start":25,"value":"20","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And User fills in Age as \"30\"","isBg":true,"stepMatchArguments":[{"group":{"start":21,"value":"\"30\"","children":[{"start":22,"value":"30","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User presses Let's get started button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then A popup for more details pops up","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is on Homeloan page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And User fills in  LoanAmount as \"4500000\"","isBg":true,"stepMatchArguments":[{"group":{"start":29,"value":"\"4500000\"","children":[{"start":30,"value":"4500000","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And User fills in Tenure as \"20\"","isBg":true,"stepMatchArguments":[{"group":{"start":24,"value":"\"20\"","children":[{"start":25,"value":"20","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And User fills in Age as \"30\"","isBg":true,"stepMatchArguments":[{"group":{"start":21,"value":"\"30\"","children":[{"start":22,"value":"30","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When User presses Let's get started button","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And User clicks on the X button on the popup","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then The popup should close","stepMatchArguments":[]}]},
]; // bdd-data-end