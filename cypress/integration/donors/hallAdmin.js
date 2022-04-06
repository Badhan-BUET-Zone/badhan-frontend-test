import { idStart, getTextFromIdStart } from '../../plugins/helpers'

describe('Admin Promotion', () => {
    it('should promote volunteer to admin', async () => {
        cy.visit('http://localhost:8080')
        cy.get("#signInPhoneTextBox").type(Cypress.env('SUPERADMIN_PHONE'))
        cy.get("#signInPasswordTextBox").type(Cypress.env('SUPERADMIN_PASSWORD'))
        cy.get("#signInButton").click()
        cy.get("#hamburgerButtonId").click()
        cy.get('#membersNavigationId').click()

        const firstVolunteerName = await getTextFromIdStart("volunteerNameId_",0)
        const firstVolunteerBatch = await getTextFromIdStart("volunteerBatchId_",0)
        const secondVolunteerName = await getTextFromIdStart("volunteerNameId_",1)
        const secondVolunteerBatch = await getTextFromIdStart("volunteerBatchId_",1)

        cy.get("#hamburgerButtonId").click()
        cy.get('#homeNavigationId').click()
        cy.get('#filterNameTextboxId').type(firstVolunteerName)
        cy.get('#filterBatchTextboxId').type(firstVolunteerBatch)
        cy.get("#filterSpecifyHallRadioId").parent().click()
        cy.get("#filterNotAvailableCheckboxId").parent().click()
        cy.get("#filterSearchButtonId").click()
        cy.get(idStart("personCardId_")).first().click()
        cy.get(idStart("personCardSeeProfileButtonId_")).click()
        cy.get(idStart("profileSettingsId")).click()
        cy.get("#promoteToHallAdminButtonId").click()
        cy.contains("Successfully changed hall admin")
        cy.get("#pageTitleBackButtonId").click()
        cy.get('#filterNameTextboxId').clear().type(secondVolunteerName)
        cy.get('#filterBatchTextboxId').clear().type(secondVolunteerBatch)
        cy.get("#filterSpecifyHallRadioId").parent().click()
        cy.get("#filterSearchButtonId").click()
        cy.get(idStart("personCardId_")).first().click()
        cy.get(idStart("personCardSeeProfileButtonId_")).click()
        cy.wait(500)
        cy.get(idStart("profileSettingsId")).click()
        cy.get("#promoteToHallAdminButtonId").click()
        cy.contains("Successfully changed hall admin")
        cy.get("#pageTitleBackButtonId").click()
        cy.get("#topBarVerticalDotsId").click()
        cy.get("#signOutButtonId").click();
        cy.get("#confirmationBoxButtonId").click()

    })})
