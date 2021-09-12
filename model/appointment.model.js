const mongoose = require("mongoose");
const Schema = mongoose.Schema,
  model = mongoose.model.bind(mongoose),
  ObjectId = mongoose.Schema.Types.ObjectId;
  
const appointmentSchema = new Schema(
  {
    drId: ObjectId,
    userId: ObjectId,
    name: String,
    email: String,
    phone: Number,
    date: String,
    aptoken: Number,
    prescription: [{ img: { type: String }, update: { type: String } }],
    medicine: [String],
    created_at: Date,
  },
  { timestamps: true }
);
const Appointment = model("Appointment", appointmentSchema);
module.exports = Appointment;
