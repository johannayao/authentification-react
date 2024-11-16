import reservation from "../models/reservation.js";

// function addNote()
export const addNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (title === "" || content === "") {
      res.status(401).json({ message: "Veuillez remplir les champs " });
    }

    const note = new Notes({
      title: title,
      content: content,
      created_at: new Date(),
    });

    await note.save();
    res.status(200).json({ data: note, message: "Note save" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
// function getAllNotes
export const getAllNotes = async (req, res) => {
  try {
    const notes = await Notes.find();
    res.status(200).json({ data: notes, message: "All notes" });
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Une erreur est survenue" });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const idNote = req.params.id;
    console.log(typeof idNote);
    const note = await Notes.findById(idNote);
    res.status(200).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateNote = async (req, res) => {
  try {
    const idNote = req.params.id;
    const { title, content } = req.body;

    if (title === "" || content === "") {
      res.status(401).json({ message: "Veuillez remplir les champs " });
    }

    const noteToModified = {
      title: title,
      content: content,
    };

    await Notes.findByIdAndUpdate(idNote, noteToModified);
    res.status(200).json({ data: noteToModified, message: "Note updated" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: error.message, message: "Une erreur est survenue" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const idNote = req.params.id;
    const note = await Notes.findByIdAndDelete(idNote);
    res.status(200).json({ data: note, message: "Note deleted" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: error.message, message: "Une erreur est survenue" });
  }
};
