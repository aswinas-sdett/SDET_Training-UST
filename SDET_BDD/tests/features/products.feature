Feature: Product Functionality

    Background: User is logged in
        Given User is on login page
        When User enters username
        And User enters password
        And User clicks Login button
        Then User is logged in successfully

    @sanity @addProduct @regression
    Scenario: Adding a product to cart
        Given User is logged in successfully
        When User clicks on product 
        Then the product description is available
        When User clicks on Add to cart button
        Then the product is added to cart
        When user clicks on cart menu
        Then the cart is opened
        And user is able to view the added product

    @regression @viewProduct
    Scenario: View a product description
        Given User is logged in successfully
        When User clicks on product
        Then the product description is available 
        And User is able to see the entire product description