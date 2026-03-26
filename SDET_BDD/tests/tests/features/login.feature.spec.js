// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('Login Functionality', () => {

  test('Log in with valid credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('User is on login page', null, { page }); 
    await When('User enters username as "standard_user"', null, { page }); 
    await And('User enters password as "secret_sauce"', null, { page }); 
    await And('User clicks Login button', null, { page }); 
    await Then('User is logged in successfully', null, { page }); 
    await And('User is able to navigate to product page', null, { page }); 
  });

  test('Log in with glitch user credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('User is on login page', null, { page }); 
    await When('User enters username as "performance_glitch_user"', null, { page }); 
    await And('User enters password as "secret_sauce"', null, { page }); 
    await And('User clicks Login button', null, { page }); 
    await Then('User is logged in successfully', null, { page }); 
    await And('User is able to navigate to product page', null, { page }); 
  });

  test('Log in with problem user credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('User is on login page', null, { page }); 
    await When('User enters username as "problem_user"', null, { page }); 
    await And('User enters password as "secret_sauce"', null, { page }); 
    await And('User clicks Login button', null, { page }); 
    await Then('User is logged in successfully', null, { page }); 
    await And('User is able to navigate to product page', null, { page }); 
    await And('The image of product is an image of a dog', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":32,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":33,"keywordType":"Context","textWithKeyword":"Given User is on login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When User enters username as \"standard_user\"","stepMatchArguments":[{"group":{"start":24,"value":"\"standard_user\"","children":[{"start":25,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"And User enters password as \"secret_sauce\"","stepMatchArguments":[{"group":{"start":24,"value":"\"secret_sauce\"","children":[{"start":25,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"And User clicks Login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then User is logged in successfully","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"And User is able to navigate to product page","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":41,"tags":[],"steps":[{"pwStepLine":16,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"Given User is on login page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When User enters username as \"performance_glitch_user\"","stepMatchArguments":[{"group":{"start":24,"value":"\"performance_glitch_user\"","children":[{"start":25,"value":"performance_glitch_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":44,"keywordType":"Action","textWithKeyword":"And User enters password as \"secret_sauce\"","stepMatchArguments":[{"group":{"start":24,"value":"\"secret_sauce\"","children":[{"start":25,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":45,"keywordType":"Action","textWithKeyword":"And User clicks Login button","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"Then User is logged in successfully","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"And User is able to navigate to product page","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":49,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":50,"keywordType":"Context","textWithKeyword":"Given User is on login page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"When User enters username as \"problem_user\"","stepMatchArguments":[{"group":{"start":24,"value":"\"problem_user\"","children":[{"start":25,"value":"problem_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"And User enters password as \"secret_sauce\"","stepMatchArguments":[{"group":{"start":24,"value":"\"secret_sauce\"","children":[{"start":25,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":53,"keywordType":"Action","textWithKeyword":"And User clicks Login button","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"Then User is logged in successfully","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"And User is able to navigate to product page","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"And The image of product is an image of a dog","stepMatchArguments":[]}]},
]; // bdd-data-end