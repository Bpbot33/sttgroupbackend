import mongoose from "mongoose";

async function connectDB() {
  const db = await mongoose.connect(
    "mongodb+srv://admin:admin@sttgroupbackenddb.iwb1dbn.mongodb.net/?retryWrites=true"
  );
  console.log("database connected to", db.connection.db.databaseName);
}

export default connectDB;
