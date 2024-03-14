import STATUS_CODES from 'http-status-codes';
import QRCode from 'qrcode'
import dataAccess from '../data-access';
import fs from 'fs';


const createQr = async (req, res) => {
  try {
    const newQr = await dataAccess.qrDataAccess.createQr();

    QRCode.toString(newQr._id.toString(), {
      errorCorrectionLevel: 'H',
      type: 'svg',
    }, function (err, data) {
      if (err) throw err;
      fs.writeFileSync(`./qrCodes/${newQr._id.toString()}.svg`, data);
    });

    return res.status(STATUS_CODES.CREATED).json(newQr);
  } catch (error) {
    console.log("error", error)
    return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({ message: "Error creating QR code" });
  }
};

const getQr = async (req, res) => {
  const { qrId } = req.params;
  try {
    const qr = await dataAccess.qrDataAccess.getQr(qrId);
    if (qr && qr?.length > 0) {
      return res.status(STATUS_CODES.OK).json(qr[0]);
    }
    return res.status(STATUS_CODES.NOT_FOUND).json({ message: "QR code not found" });
  } catch (error) {
    console.log("error", error)
    return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({ message: "Error getting QR code" });
  }
}


export default { createQr, getQr };
