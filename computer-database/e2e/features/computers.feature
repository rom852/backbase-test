Feature: Computers Base scenarios


  Scenario: User should be able to open application and see main page
    Given user opens Computers application
    And assert Computers main page is opened


  Scenario: User should be able to add new computer
    Given user opens Computers application
    And assert Computers main page is opened
    And user clicks 'Add a new computer' button
    And assert 'Add a computer' page is displayed
    When user adds new computer
    And user searches for last added computer
    And assert last added computer displayed correctly in table

