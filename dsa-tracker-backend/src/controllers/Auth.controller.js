import { registerUser, loginUser } from "../services/Auth.service.js";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await registerUser(email, password);

    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { user, token } = await loginUser(email, password);

    const { password: _, ...safeUser } = user.toObject();

    res.status(200).json({
      message: "Login successful",
      token,
      user: safeUser,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};