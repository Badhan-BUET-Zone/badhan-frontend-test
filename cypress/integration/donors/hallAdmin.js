import { idStart, getTextFromIdStart } from '../../plugins/helpers'
import env from '../../plugins/env'
describe('Admin Promotion', () => {
    it('should promote volunteer to admin', async () => {
        // go to members page
        cy.visit(env.FRONTEND_URL)
        cy.get('#signInPhoneTextBox').type(env.SUPERADMIN_PHONE)
        cy.get("#signInPasswordTextBox").type(env.SUPERADMIN_PASSWORD)
        cy.get("#signInButton").click()
        cy.get("#hamburgerButtonId").click()
        cy.get('#membersNavigationId').click()

        // get the names and batch numbers of the first 2 volunteers
        const firstVolunteerName = await getTextFromIdStart("volunteerNameId_",0)
        const firstVolunteerBatch = await getTextFromIdStart("volunteerBatchId_",0)

        // promote the first volunteer to hall admin
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

        // sign out from UI
        cy.get("#pageTitleBackButtonId").click()
        cy.get("#topBarVerticalDotsId").click()
        cy.get("#signOutButtonId").click();
        cy.get("#confirmationBoxButtonId").click()

    })})
