import jwt from "jsonwebtoken";

export default (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[0];

    const decodedToken = jwt.verify(token, "papa");
    const clientId = decodedToken.clientId;
    
    req.auth = {
      clientId: clientId
    };

    if (!req.auth.clientId) {
      res.status(401).json({
        error: "Invalid token",
        message: "Vous n'êtes pas autorisé",
        status: false
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({
      error: error,
      message:
        "Une erreur est survenue lors de la vérification du token. Veuillez vous reconnecter svp.",
      status: false
    });
  }
};
