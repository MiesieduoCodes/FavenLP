import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface Admin {
  email: string;
  password: string; // hashed
}

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey"; // better use env var

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const filePath = path.join(process.cwd(), "data", "admin.json");
    const file = await fs.readFile(filePath, "utf-8");
    const admin: Admin = JSON.parse(file);

    if (email !== admin.email) {
      return NextResponse.json({ success: false, message: "Invalid email" }, { status: 401 });
    }

    const isValid = await bcrypt.compare(password, admin.password);
    if (!isValid) {
      return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 });
    }

    // create JWT
    const token = jwt.sign({ email: admin.email }, JWT_SECRET, { expiresIn: "1h" });

    const res = NextResponse.json({ success: true, message: "Login successful" });
    res.cookies.set("session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60, // 1 hour
      path: "/",
    });

    return res;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
