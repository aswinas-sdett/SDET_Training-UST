// Generated from: tests\features\checkPieValues.feature
import { test } from "playwright-bdd";

test.describe('Check the correctness of Pie Chart', () => {

  test.beforeEach('Background: Filling the form', async ({ Given, When, And, page }, testInfo) => { if (testInfo.error) return;
    await Given('User is on Homeloan page', null, { page }); 
    await When('User fills in  LoanAmount as "4500000"', null, { page }); 
    await And('User fills in Tenure as "20"', null, { page }); 
    await And('User fills in ROI as "10"', null, { page }); 
  });
  
  test('Check the values in pie Chart', { tag: ['@pie'] }, async ({ Then, And, page }) => { 
    await Then('the value of Interest Amount is "56.82 %"', null, { page }); 
    await And('the value of Principal Amount is "43.18 %"'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\checkPieValues.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":13,"pickleLine":10,"tags":["@pie"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is on Homeloan page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User fills in  LoanAmount as \"4500000\"","isBg":true,"stepMatchArguments":[{"group":{"start":29,"value":"\"4500000\"","children":[{"start":30,"value":"4500000","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And User fills in Tenure as \"20\"","isBg":true,"stepMatchArguments":[{"group":{"start":24,"value":"\"20\"","children":[{"start":25,"value":"20","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And User fills in ROI as \"10\"","isBg":true,"stepMatchArguments":[{"group":{"start":21,"value":"\"10\"","children":[{"start":22,"value":"10","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then the value of Interest Amount is \"56.82 %\"","stepMatchArguments":[{"group":{"start":32,"value":"\"56.82 %\"","children":[{"start":33,"value":"56.82 %","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"And the value of Principal Amount is \"43.18 %\"","stepMatchArguments":[{"group":{"start":33,"value":"\"43.18 %\"","children":[{"start":34,"value":"43.18 %","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end