import { Injectable } from '@nestjs/common';
import { Bucket, Cluster, Collection, Authenticator } from 'couchbase';
import * as couchbase from 'couchbase';

@Injectable()
export class CouchBaseAdapterService {
  private collection: Collection;
  private cluster: Cluster;
  async connectDb(): Promise<Cluster> {

    // const clusterConnStr = 'couchbase://65.2.191.139';
    // const username = 'admin';
    // const password = 'admin2304';

    const clusterConnStr = 'couchbase://localhost';
    const username = 'Administrator';
    const password = 'new_pwd';

    try {
      const cluster = await couchbase.connect(clusterConnStr, {
        username: username,
        password: password,
        timeouts: {
          connectTimeout: 10000,
          resolveTimeout: 10000
        }
      });


    //   return cluster.bucket('data-collection');
    // console.log(cluster)
    return cluster
    } catch (e) {
      console.log(e)
      throw e;
    }
  }
}
