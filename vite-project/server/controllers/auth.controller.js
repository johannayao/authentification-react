import Clients from "../models/clients.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  console.log("ici");

  const { nom, tel, email, password, prenom } = req.body;
  console.log(req.body);

  try {
    if (!nom || !prenom || !email || !tel || !password) {
      return res.status(400).json({
        message: "Veuillez renseigner tous les champs !",
        status: false
      });
    }

    if (password.length < 8 || password.length > 8) {
      return res.status(400).json({
        message: "Le mot de passe doit être entre 6 et 8 caractères",
        status: false
      });
    }

    if (tel.length !== 10) {
      return res.status(400).json({
        message: "Le numéro de tel doit être de 10 caractères",
        status: false
      });
    }

    const user = await Clients.findOne({ $or: [{ email }, { tel }] });
    if (user) {
      return res.status(400).json({
        message: "Cet utilisateur existe deja !",
        status: false
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const client = await Clients.create({
      nom,
      prenom,
      tel,
      email,
      password: hashedPassword
    });
    res.status(201).json({
      data: client,
      status: true,
      message: "Utilisateur creé avec succès  !"
    });
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.message });
  }
};

export const signIn = async (req, res) => {
  try {
    let { email, password } = req.body;
    console.log(req.body);

    if (!email || !password) {
      return res.status(400).json({
        message: "Veuillez renseigner tous les champs !",
        status: false
      });
    }

    const client = await Clients.findOne({ email });
    if (!client) {
      return res.status(400).json({
        message: "Cet utilisateur n'existe pas !",
        status: false
      });
    }

    let { nom, prenom, tel } = client;

    const isMatch = await bcrypt.compare(password, client.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Mot de passe incorrect !",
        status: false
      });
    }

    const token = jwt.sign({ clientId: client._id }, "papa", {
      expiresIn: "24h"
    });
    res.status(200).json({
      data: { nom, prenom, email, tel },
      token,
      status: true,
      message: "Connexion reussie !"
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Une erreur s'est produite", status: false });
  }
};

export const getUserConnected = async (req, res) => {
  try {
    const clientId = req.auth.clientId;
    if (!clientId) {
      return res
        .status(401)
        .json({ message: "Vous n'etes pas autorisé", status: false });
    }
    const client = await Clients.findById(clientId);
    if (!client) {
      return res
        .status(404)
        .json({ message: "Vous n'êtes pas autoriser", status: false });
    }

    res.status(200).json({ data: client, status: true });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
