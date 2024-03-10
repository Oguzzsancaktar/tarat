import mongoose from 'mongoose'

const qrInfoSchema = new mongoose.Schema({
  qr: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Qr",
  },
  info: {
    type: Object,
    required: true,
  },
}, { timestamps: true });


const QRInfoModel = mongoose.model("qrInfo", qrInfoSchema);
export default QRInfoModel;
