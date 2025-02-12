import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findOrCreateContact = async (email?: string, phoneNumber?: string) => {
  const existingContacts = await prisma.contact.findMany({
    where: {
      OR: [{ email }, { phoneNumber }],
    },
  });

  if (existingContacts.length === 0) {
    // No existing contact, create a new primary contact
    const newContact = await prisma.contact.create({
      data: { email, phoneNumber, linkPrecedence: "primary" },
    });

    return formatResponse(newContact, []);
  }

  // Find the primary contact
  const primaryContact = existingContacts.find((contact) => contact.linkPrecedence === "primary") || existingContacts[0];

  // Check if we already have this exact email & phoneNumber combination
  const existingExactMatch = existingContacts.find((contact) => contact.email === email && contact.phoneNumber === phoneNumber);
  if (existingExactMatch) {
    return formatResponse(primaryContact, existingContacts.filter((c) => c.id !== primaryContact.id));
  }

  // Create a secondary contact if the email or phoneNumber is new
  const newSecondaryContact = await prisma.contact.create({
    data: {
      email,
      phoneNumber,
      linkedId: primaryContact.id,
      linkPrecedence: "secondary",
    },
  });

  const updatedContacts = [...existingContacts, newSecondaryContact];

  return formatResponse(primaryContact, updatedContacts.filter((c) => c.id !== primaryContact.id));
};

const formatResponse = (primary: any, secondaries: any[]) => ({
  primaryContatctId: primary.id,
  emails: [primary.email, ...new Set(secondaries.map((c) => c.email))].filter(Boolean),
  phoneNumbers: [primary.phoneNumber, ...new Set(secondaries.map((c) => c.phoneNumber))].filter(Boolean),
  secondaryContactIds: secondaries.map((c) => c.id),
});
