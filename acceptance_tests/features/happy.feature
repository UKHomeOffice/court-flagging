@happy
Feature: I am able to navigate through the CFN form correctly

    Scenario: Happy path
    Given I am on the start page for the form
    Then I can see the questions for the details page of the form
    Then I enter a police force
    Then I enter my email address
    Then I enter the asn reference
    When I click continue
    Then I am taken to the confirm page of the form
    Then I should see the headers and my information in the summary:
      |  table_police_force         |  police-force          |
      |  table_originator_email     |  originator_email      |
      |  table_asn_reference        |  asn_reference         |
    When I click Send
    Then I am taken to the confirmation page

