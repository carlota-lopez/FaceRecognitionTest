var AWS = require('aws-sdk'); 

AWS.config.region = 'eu-central-1';

//get reference to Rekognition client
var rekognition = new AWS.Rekognition({apiVersion: '2016-06-27'});

exports.handler = (event, context, callback) => {
    var filename = event.filename;
    var employeeId = event.employeeid;
 
    var srcBucket = 'compare-faces-hack';
    var srcKey = employeeId + ".jpg";
 
    var targetBucket = 'face-scan-hack';
    var targetKey = decodeURIComponent(filename.replace(/\+/g, " "));
    
    var params = {
        SimilarityThreshold: 90, 
        SourceImage: {
            S3Object: {
                Bucket: srcBucket, 
                Name: srcKey
            }
        }, 
        TargetImage: {
            S3Object: {
                Bucket: targetBucket, 
                Name: targetKey
            }
        }
    };
     rekognition.compareFaces(params, function(err, result) {
        if (err) {
            console.log(err, err.stack);
            callback('could not compare faces');
            return;
        }
        else { 
            console.log(JSON.stringify(result));
            if (result !== null && result.FaceMatches !== null && result.FaceMatches.length > 0) { 
                var item = result.FaceMatches[0];
                console.log(JSON.stringify(item));
                if (item !== null && item.Face !== null && item.Face.Confidence > 80) {
                    callback(null, {"result": "Green"});  
                    return;  
                } else {
                    callback(null, {"result": "Red"});
                    return;
                }
            }
            else {
                callback(null, {"result": "Red"});
                return;
            }
        }
    });
}
