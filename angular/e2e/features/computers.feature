Feature: Computers Base scenarios

  @P0
  Scenario: User should be able to open application and see main page
    Given user opens Computers application
    And assert Computers main page is opened

  @P0 @Working
  Scenario: User should be able to add new computer
    Given user opens Computers application
    And assert Computers main page is opened
    And user clicks 'Add a new computer' button
    And assert 'Add a computer' page is displayed
    When user adds new computer
