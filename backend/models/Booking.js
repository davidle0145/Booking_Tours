import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String
    },
    userEmail: {
      type: String,
    },
    fullName: {
      type: String,
      required: true,
    },
    tourName: {
        type: String,
        required: true
    },
    guestSize: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    bookAt: {
        type: Date,
        required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);

