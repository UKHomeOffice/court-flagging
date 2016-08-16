Given(/^I am on the start page for the form$/) do
  visit config['cfn_host']
end

Then(/^I can see the questions for the (.*) page of the form$/) do | header |
  expect(page).to have_content CONTENT["#{header}_header"]
end

Then(/^I am taken to the (.*) page of the form$/) do | header |
  expect(page).to have_content CONTENT["#{header}_header"]
end

Then(/^I enter a police force$/) do
  fill_in CONTENT['f_police_force'], :with => CONTENT['c_police_force']
end

Then(/^I enter the asn reference$/) do
  fill_in CONTENT['f_asn_reference'], :with => CONTENT['c_asn_reference']
end

Then(/^I enter my email address$/) do
  fill_in CONTENT['f_originator_email'], :with => CONTENT['c_originator_email']
end


When(/^I click continue$/) do
  click_button("Continue")
end

When(/^I click Send/) do
  click_button("Send")
end

When(/^I click the back link$/) do
  click_link('Back')
end

Then(/^I should see the (.*) error$/) do | type |
  expect(page).to have_content CONTENT["#{type}_error"]
end

Then(/^I should see the headers and my information in the summary:$/) do | table |
  table.rows_hash.each do | header, information |
    expect(page).to have_content CONTENT[header]
    expect(page).to have_content CONTENT[information]
  end
end

When(/^I click change (.*) from the (.*) page$/) do | change, step |
  find(:xpath, "//a[@href='/#{step}/edit##{CONTENT[change]}']").click
end

Then(/^I should see (.*) on the page$/) do | field |
  expect(page).to have_content CONTENT[field]
end

When(/^I change (.*) to (.*)$/) do | field, text |
  step "I enter #{text} into the #{field} field"
end


Then(/^I am taken to the confirmation page$/) do
  expect(page).to have_content CONTENT['confirmation_content']
  expect(page).to have_content CONTENT['confirmation_content_detail']
    expect(page).to have_content CONTENT['c_police_force']
end

