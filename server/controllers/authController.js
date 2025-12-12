import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Users from '../models/user.js';

const JWT_SECRET = process.env.JWT_Secret_Key;

export async function signup (req, res) {
  const data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  };
  let existingUser = await Users.findOne({ email: req.body.email });
  if (existingUser) return res.status(400).json({ message: 'User already exists' });

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const newUser = {
    name: data.name, 
    email: data.email, 
    password: hashedPassword,
    role: data.role
  };

  const User= await Users.insertMany(newUser);
  const token = jwt.sign({ id: newUser._id, name: newUser.name, role: newUser.role }, JWT_SECRET, { expiresIn: '1h' });

  res.cookie('token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    maxAge: 3600000,
  });

  res.status(201).json({ message: 'Signup successful', status: "ok"});
}

export async function login (req, res) {
  const { email, password } = req.body;
  const user = await Users.findOne({ email: email });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id, name: user.name, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

  res.cookie('token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    maxAge: 3600000,
  });

  res.status(200).json({ message: 'Logged in successfully', status: "ok"});
}

export async function googleAuthSignUp (req, res) {
  const credential = req.body.credential;
  const role = req.body.role;
  const data = jwt.decode(credential);
  try {
    const newUser = {
      name: data.name,
      email: data.email,
      password: "-",
      role: role
    } 
    const User= await Users.insertMany(newUser);
    const token = jwt.sign({ id: newUser._id, name: newUser.name, role: role }, JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 3600000,
    });
    res.status(201).json({ message: 'Signup successful', status: "ok"});
  } catch (e) {
    console.log(e);
    res.status(500).json({error: e});
  }
}

export async function googleAuthLogin (req, res) {
  const credential = req.body.credential;
  const data = jwt.decode(credential);
  try {
    const user = await Users.findOne({ email: data.email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id, name: user.name, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 3600000,
    });
    res.status(201).json({ message: 'Signup successful', status: "ok"});
  } catch (e) {
    console.log(e);
    res.status(500).json({error: e});
  }
}

export async function logout (req, res) {
  res.clearCookie('token', {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  });
  res.json({ message: 'Logged out successfully' });
}

export async function getUserId(req, res) {
  res.json({id: req.user.id})
}
