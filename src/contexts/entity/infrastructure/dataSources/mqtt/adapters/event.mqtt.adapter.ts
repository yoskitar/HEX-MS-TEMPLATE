
import { Event } from '../../../../domain/entities/event.entity';
import mqtt from 'mqtt';
import logger from '../../../../../../logger/index';
import NotifierRepository from '../../../../domain/repositories/notifier.repository';

class MqttBrokerAdapter implements NotifierRepository {

    public async notifyEvent(event: Event){
        try {
            logger.debug("Notifier start");
            const mqttClient = this.getMQTTClient();
            logger.debug("Notifier got");
            mqttClient.on("connect",function(){	
                logger.debug("mqtt connected");
                mqttClient.publish(event.type,event.meta.toString());
                logger.debug("Published!");
                mqttClient.end();
            });
        } catch (error) {
            console.log(error);
        }
    };

    private getMQTTClient() {
        logger.debug("Notifier getting...");
        return mqtt.connect('mqtts://',{
            rejectUnauthorized: false,
            clean: true, 
            port: 8883, 
            username: '', 
            password: ''}
        );
    };
}
export default MqttBrokerAdapter;