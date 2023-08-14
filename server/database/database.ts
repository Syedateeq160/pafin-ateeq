import { Userdb } from '../types/userdb'; 

import pgPromise from 'pg-promise';

const pgp = pgPromise();
const connectionConfig = {
  host: 'localhost',
  port: 5432,
  database: 'userdb',
  user: 'ateeq.syed',
  password: 'Pakistan123?'
};

const userdb = pgp(connectionConfig);

export default userdb;
