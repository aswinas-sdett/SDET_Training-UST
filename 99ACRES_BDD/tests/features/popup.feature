
Feature: Check the popup

Background: Filling the form
    Given User is on Homeloan page
    And User fills in  LoanAmount as "4500000"
    And User fills in Tenure as "20"
    And User fills in Age as "30"

Scenario: Popup on pressing Lets get started button
    When User presses Let's get started button
    Then A popup for more details pops up

Scenario: Clicking on X button closes the popup
    When User presses Let's get started button
    And User clicks on the X button on the popup
    Then The popup should close
    