// Generated from: tests\features\urlRedirect.feature
import { test } from "playwright-bdd";

test.describe('URL Redirection', () => {

  test('Checking if clicking on button redirects correctly', { tag: ['@redirection'] }, async ({ Given, When, Then, context, page }) => { 
    await Given('User is on Homeloan page', null, { page }); 
    await When('User clicks Know More button of HDFC', null, { context, page }); 
    await Then('User is redirected to HDFC Policy page'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\urlRedirect.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@redirection"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is on Homeloan page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks Know More button of HDFC","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then User is redirected to HDFC Policy page","stepMatchArguments":[]}]},
]; // bdd-data-end