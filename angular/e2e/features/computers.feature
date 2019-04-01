Feature: Computers Base scenarios

  @P0 @Working
  Scenario: User should be able to open application and see main page
    Given user opens Computers application
    And assert Computers main page is opened
