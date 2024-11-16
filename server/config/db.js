import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://yaojohanna2003:papa@cluster0.1posn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("Connexion MongoDB reussie ! "))
    .catch(() => console.log("Connexion a MongoDB echouée !"));
};

export default connectDB;
