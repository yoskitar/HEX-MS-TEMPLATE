import mongoose, { Connection } from 'mongoose';
import config  from '../../config/config';
import logger from '../../../../logger/index';

export default class MongoDBConnection {
    connection: Connection | any;

    constructor() {
        this.connection = null;
    }

    connect(){
        if (this.connection) return this.connection;
        return mongoose.connect(config.DB,{
            //Indexación de los modelos para cada secuencia de
            //eventos disparada.
            useCreateIndex: true,
            //Necesario ya que el parser string por defecto
            //esta deprecated.
            useNewUrlParser: true,
            //Permite usar el nuevo motor de monitorización
            //y decubrimiento del servidor.
            useUnifiedTopology: true,
            //Set SSL CA CERT
            //sslCA: certFileBuf,

        }).then(connection => {
            this.connection = connection;
            logger.info(new Date().toString() + ": " + "MongoDB connected");
        }).catch(err => logger.error(err));
    }
}