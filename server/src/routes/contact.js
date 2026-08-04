
import express from "express";

import {
  submitContact,
  listContacts,
  findContact,
  removeContact,
} from "../controllers/contactController.js";

const router = express.Router();

/*
  POST /api/contact
  Submit a new contact message
*/
router.post("/", submitContact);

/*
  GET /api/contact
  Get all contact messages
*/
router.get("/", listContacts);

/*
  GET /api/contact/:id
  Get one contact message
*/
router.get("/:id", findContact);

/*
  DELETE /api/contact/:id
  Delete one contact message
*/
router.delete("/:id", removeContact);

export default router;
