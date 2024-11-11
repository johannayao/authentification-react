import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const clientSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true },
    tel: { type: String, required: true },
    password: { type: String, required: true },
  });
  clientSchema.plugin(uniqueValidator);
  
  const Clients = mongoose.model("Clients", clientSchema);
  
  export default Clients;