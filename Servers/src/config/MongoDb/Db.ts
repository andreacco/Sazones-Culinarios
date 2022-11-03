/* eslint-disable @typescript-eslint/no-non-null-assertion */
import  mongoose from 'mongoose';
import config from '../ConfigEntorno/Config'

mongoose.connect( config.Db! )
    .then(() => console.log('database conect'))
    .catch((error) => console.log('Error database conect ', error))