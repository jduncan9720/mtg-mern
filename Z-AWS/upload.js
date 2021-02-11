require("dotenv").config
const express = require('express');
const app = express();
const AWS = require('aws-sdk');
const multer  = require('multer');
const multers3 = require('multer-s3');


const s3 = new AWS.S3({
    accessKeyId: process.env.ID,
    secretAccessKey: process.env.SECRET
});

const uploadFile = multer({
    storage: multers3({
      s3: s3,
      acl: 'public-read',
      bucket: process.env.BUCKET_NAME,
      metadata: (req, file, cb) => {
        cb(null, {fieldName: file.fieldname})
      },
      key: (req, file, cb) => {
        cb(null, Date.now().toString() + '-' + file.originalname)
      }
    })
  });

module.exports = uploadFile;