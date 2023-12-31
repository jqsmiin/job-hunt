import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User must have a name!"],
    },
    email: {
      type: String,
      required: [true, "User must have a email!"],
    },
    password: {
      type: String,
      required: [true, "User must have a password!"],
    },
    role: {
      type: String,
      required: true,
      enum: ["employee", "company", "admin"],
      default: "employee",
    },
    aboutCompany: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem corporis, velit quia laudantium, id ullam quas repellendus,consectetur quibusdam asperiores totam vel atque veniam.",
    },
    photo: {
      type: String,
      default:
        "https://utfs.io/f/46cf1157-84dc-4979-9ffb-ab9519624875_user.png",
    },
    myJobs: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Job",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
