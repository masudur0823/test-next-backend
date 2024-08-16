// import { connectionString } from "@/lib/db";
// import { Task } from "@/lib/models/task";
import { Task } from "../lib/models/task";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

const connectionString = `mongodb+srv://masud:MaSuDmArJaN@cluster0.5dy0m.mongodb.net/taskDB?retryWrites=true&w=majority&appName=Cluster0`;

export async function GET() {
  let data = [];
  let success = true;
  try {
    await mongoose.connect(connectionString); // connect mongodb
    data = await Task.find();
    console.log(data);
  } catch (error) {
    data = { result: error };
    success = false;
  }

  return NextResponse.json({ result: data, success });
}

export async function POST(request) {
  const payload = await request.json();
  await mongoose.connect(connectionString); // connect mongodb

  let task = new Task(payload); // payload {}

  const result = await task.save();

  return NextResponse.json({ result, success: true });
}
