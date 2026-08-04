import { query } from "../db.js";

export const createContact = async ({
  name,
  email,
  subject,
  message,
}) => {
  const result = await query(
    `INSERT INTO contacts
      (name, email, subject, message)
     VALUES ($1, $2, $3, $4)
     RETURNING
      id,
      name,
      email,
      subject,
      message,
      created_at`,
    [
      name.trim(),
      email.trim().toLowerCase(),
      subject?.trim() || "Portfolio Contact",
      message.trim(),
    ]
  );

  return result.rows[0];
};

export const getContacts = async () => {
  const result = await query(
    `SELECT
      id,
      name,
      email,
      subject,
      message,
      created_at
     FROM contacts
     ORDER BY created_at DESC`
  );

  return result.rows;
};

export const getContactById = async (id) => {
  const result = await query(
    `SELECT
      id,
      name,
      email,
      subject,
      message,
      created_at
     FROM contacts
     WHERE id = $1`,
    [id]
  );

  return result.rows[0] || null;
};

export const deleteContact = async (id) => {
  const result = await query(
    `DELETE FROM contacts
     WHERE id = $1
     RETURNING id`,
    [id]
  );

  return result.rows[0] || null;
};
