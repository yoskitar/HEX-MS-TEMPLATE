import { Application } from "express";
import MQTTConnection from "./apps/backend/app/broker/mqtt.client";
import MongoDBConnection from "./apps/backend/app/dataSourcesClients/mongodb.client";
import appClient from "./apps/backend/app/rest/http.client";
import config from "./apps/backend/config/config";
import logger from "./logger";

class Server {
    app: Application ;
    database: MongoDBConnection;
    mqtt: MQTTConnection;

    constructor() {
        this.database = new MongoDBConnection();
        this.mqtt = new MQTTConnection();
        this.app = appClient;
    }

    start(){
        try {
            this.app.listen(config.PORT, async () => {
                logger.info(`Servidor corriendo en el puerto: ${config.PORT}`);
                await this.database.connect();
                this.subscribeMQTT();
            });
        } catch (error) {
            logger.error(error);
        }
    }

    subscribeMQTT(){
        try {
            this.mqtt.connect();
            this.mqtt.initSubscriptions();
        } catch (error) {
            logger.error(error);
        }
    }
}
    
const server = new Server();
server.start();

export default server;