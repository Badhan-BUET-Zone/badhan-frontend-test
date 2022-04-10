import {idStart, getTextFromIdStart} from "../../plugins/helpers";
import env from '../../plugins/env'
describe('Donations', () => {
    it('should create a donation from person card', async () => {
        cy.visit(env.FRONTEND_URL)
        cy.get('#signInPhoneTextBox').type(env.SUPERADMIN_PHONE)
        cy.get("#signInPasswordTextBox").type(env.SUPERADMIN_PASSWORD)
        cy.get("#signInButton").click()
        cy.get('#filterNameTextboxId').type("mr")
        cy.get("#filterPublicDataRadioId").parent().click()
        cy.get("#filterNotAvailableCheckboxId").parent().click()
        cy.get("#filterSearchButtonId").click()
        cy.get(idStart("personCardId_")).first().click()
        cy.get(idStart("personCardDatePickerId_")).click()
        cy.get(idStart("personCardDatePickerCalenderId_")).first().contains('23').click()
        cy.get(idStart('personCardDatePickerOkButtonId_')).click()
        cy.get(idStart('personCardDonationButtonId_')).click()
        cy.contains("Successfully added donation")
        cy.get(idStart("personCardSeeProfileButtonId_")).click()
        cy.get("#personDetailsDonationHistoryButtonId").click()
        cy.get(idStart("donationCardDeleteButtonId_")).first().click()
        cy.get("#confirmationBoxButtonId").click()
        cy.contains("Successfully deleted donation")
        cy.get("#personDetailsNewDonationTextboxId").click()
        cy.get("#personDetailsNewDonationDatePickerId").contains('23').click()
        cy.get("#personDetailsNewDonationDatePickerOkButtonId").click()
        cy.get("#personDetailsNewDonationOkButtonId").click()
        cy.contains("Added donation")
        cy.get(idStart("donationCardDeleteButtonId_")).first().click()
        cy.get("#confirmationBoxButtonId").click()
        cy.contains("Successfully deleted donation")
        cy.get("#pageTitleBackButtonId").click()
        cy.get("#topBarVerticalDotsId").click();
        cy.get("#signOutButtonId").click()
        cy.get("#confirmationBoxButtonId").click();
    })})