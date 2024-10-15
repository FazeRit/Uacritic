import {connect, Stan} from 'node-nats-streaming';

class NatsWrapper {
    private _client?: Stan;

    get client(): Stan {
        if (!this._client) {
            throw new Error('Cannot access NATS client before connecting');
        }
        return this._client;
    }

    connect(clusterId: string, clientId: string, url: string) {
        this._client = connect(clusterId, clientId, {url});

        console.log('Connecting to NATS...');

        return new Promise<void>((resolve, reject) => {
            this.client.on('connect', () => {
                console.log('Connected to NATS');
                resolve();
            });
            this.client.on('error', (err) => {
                reject(err);
            });
        });
    }
}

const natsWrapper = new NatsWrapper();
console.log(natsWrapper);

export {natsWrapper};
