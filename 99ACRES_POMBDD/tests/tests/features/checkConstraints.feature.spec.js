// Generated from: tests\features\checkConstraints.feature
import { test } from "playwright-bdd";

test.describe('Check the visibility of constraints', () => {

  test('No constraints showing on correct values', { tag: ['@correctValues'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('User is on Homeloan page', null, { page }); 
    await When('User fills in  LoanAmount as "4500000"', null, { page }); 
    await And('User fills in Tenure as "20"', null, { page }); 
    await And('User fills in ROI as "10"', null, { page }); 
    await Then('MonthlyEMI is "₹ 43,430"', null, { page }); 
  });

  test('Constraints showing on incorrect values', { tag: ['@incorrectValues'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('User is on Homeloan page', null, { page }); 
    await When('User fills in  LoanAmount as "4500000000"', null, { page }); 
    await And('User fills in Tenure as "99"', null, { page }); 
    await And('User fills in ROI as "0"', null, { page }); 
    await Then('LoanAmount constraint appears', null, { page }); 
    await And('Tenure constraint appears', null, { page }); 
    await And('ROI constraint appears', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\checkConstraints.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":["@correctValues"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Homeloan page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User fills in  LoanAmount as \"4500000\"","stepMatchArguments":[{"group":{"start":29,"value":"\"4500000\"","children":[{"start":30,"value":"4500000","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And User fills in Tenure as \"20\"","stepMatchArguments":[{"group":{"start":24,"value":"\"20\"","children":[{"start":25,"value":"20","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And User fills in ROI as \"10\"","stepMatchArguments":[{"group":{"start":21,"value":"\"10\"","children":[{"start":22,"value":"10","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then MonthlyEMI is \"₹ 43,430\"","stepMatchArguments":[{"group":{"start":14,"value":"\"₹ 43,430\"","children":[{"start":15,"value":"₹ 43,430","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":14,"pickleLine":11,"tags":["@incorrectValues"],"steps":[{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given User is on Homeloan page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User fills in  LoanAmount as \"4500000000\"","stepMatchArguments":[{"group":{"start":29,"value":"\"4500000000\"","children":[{"start":30,"value":"4500000000","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And User fills in Tenure as \"99\"","stepMatchArguments":[{"group":{"start":24,"value":"\"99\"","children":[{"start":25,"value":"99","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And User fills in ROI as \"0\"","stepMatchArguments":[{"group":{"start":21,"value":"\"0\"","children":[{"start":22,"value":"0","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then LoanAmount constraint appears","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"And Tenure constraint appears","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"And ROI constraint appears","stepMatchArguments":[]}]},
]; // bdd-data-end