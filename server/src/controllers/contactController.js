import {
  createContact,
  getContacts,
  getContactById,
  deleteContact,
} from "../services/contactService.js";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    if (!emailPattern.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    const contact = await createContact({
      name,
      email,
      subject,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Your message was sent successfully.",
      data: contact,
    });
  } catch (error) {
    console.error("Submit contact error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to save your message.",
    });
  }
};

export const listContacts = async (req, res) => {
  try {
    const contacts = await getContacts();

    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error("List contacts error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch contacts.",
    });
  }
};

export const findContact = async (req, res) => {
  try {
    const { id } = req.params;

    if (!/^\d+$/.test(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid contact ID.",
      });
    }

    const contact = await getContactById(Number(id));

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error("Find contact error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch contact.",
    });
  }
};

export const removeContact = async (req, res) => {
  try {
    const { id } = req.params;

    if (!/^\d+$/.test(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid contact ID.",
      });
    }

    const deleted = await deleteContact(Number(id));

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Contact not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Contact deleted successfully.",
    });
  } catch (error) {
    console.error("Delete contact error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to delete contact.",
    });
  }
};
