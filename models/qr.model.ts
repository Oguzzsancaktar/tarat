import mongoose from 'mongoose'

const qrSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
  qrInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "QrInfo",
    default: null,
  },
  status: {
    type: Number,
    enum: [0, 1, 2, 3],
    default: 0,
  },
}, { timestamps: true });


const QRModel = mongoose.model("qr", qrSchema);
export default QRModel;
