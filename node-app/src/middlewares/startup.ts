import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import fs from 'fs';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';
import path from 'path';
import configs from '../configs/app.configs';

// import routes
import driverRoutes from '../routes/driver.routes';
import gpsLogRoutes from '../routes/gspLop.routes';
import insuranceRoutes from '../routes/insurance.routes';
import pointRoutes from '../routes/point.routes';
import productRoutes from '../routes/product.routes';
import roadTaxRoutes from '../routes/roadTax.routes';
import routeRoutes from '../routes/route.routes';
import tripRoutes from '../routes/trip.routes';
import uploaderRoutes from '../routes/uploader.routes';
import userRoutes from '../routes/user.routes';
import vehicleRoutes from '../routes/vehicle.routes';
import VueAppRoutes from '../routes/vue-app.routes';
import StandardRoutes from '../routes/standard.routes';

const router = express.Router();

router.use(helmet());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cors());
router.use(morgan('combined', { stream: fs.createWriteStream(path.join(__dirname, '../logs.log'), { flags: 'a' }) }));

// apply uploader routes
router.use(uploaderRoutes);

// apply service routes
// router.use('/service', productRoutes, driverRoutes, gpsLogRoutes, insuranceRoutes, pointRoutes, roadTaxRoutes, routeRoutes, tripRoutes, vehicleRoutes);
router.use('/service/user', userRoutes);

router.use(StandardRoutes);

// apply standard routes

// apply vue-app routes, public folders
router.use(VueAppRoutes);

// mongodb connection
mongoose.connect(configs.mongoose.connection, { useNewUrlParser: true })
    .then((res: typeof mongoose) => { console.log('Connected to MongoDB!'); })
    .catch((reason: any) => { console.log('Connection failed!', reason); });

export default router;
