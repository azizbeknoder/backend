import express from "express"; // Faqat bitta import bo'lishi kerak
import cors from "cors";
import configFunction from "./common/config/config.service.js";
import userController from "./controller/user.controller.js";

const app = express();

function init() {
  // CORS ni barcha manzillarga ruxsat berish
  app.use(cors());

  // JSON ma'lumotlarini pars qilish
  app.use(express.json());

  // Foydalanuvchi bilan bog'liq barcha so'rovlarni userController'ga yo'naltirish
  app.use("/user", userController);

  // Portni olish (agar mavjud bo'lmasa, 4000 portini ishlatish)
  const PORT = configFunction("EXPRESS_PORT") || 4000;

  // Serverni ishga tushurish
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}

init();
