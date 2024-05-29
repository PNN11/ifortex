import { MongoClient } from 'mongodb'

const url = process.env.MONGO_URL
const dbName = process.env.DB_NAME

if (!url) throw new Error('Missing database connection URL, please check you env variables, var name=MONGO_URL')
if (!dbName) throw new Error('Missing database name, please check you env variables, var name=DB_NAME')

const client = new MongoClient(url)

export const dataBase = client.db(dbName)

export type TDatabase = ReturnType<typeof client.db>
