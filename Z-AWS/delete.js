const express = require('express');
const app = express();
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.ID,
    secretAccessKey: process.env.SECRET
});

const deleteFile = (path) => {
    var params = {
        Bucket: process.env.BUCKET_NAME,
        Key: path
    };

    s3.deleteObject(params, function (err, data) {
        if (!err) {
            console.log(data); // sucessfull response
            /*
            data = {}
            */
        } else {
            console.log(err); // an error ocurred
        }
    });
}

module.exports = deleteFile;

