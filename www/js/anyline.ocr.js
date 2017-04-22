/*
 * Anyline Cordova Plugin
 * anyline.ocr.js
 *
 * Copyright (c) 2016 Anyline GmbH
 */

if (anyline === undefined) {
    var anyline = {};
}
anyline.ocr = {
    onResult: function(result) {
        //this is called for every mrz scan result
        //the result is a json-object containing all the scaned values and check-digits

        console.log("Result: " + JSON.stringify(result));
        var div = document.getElementById('results');

        div.innerHTML = "<p>" + "<img src=\"" + result.imagePath + "\" width=\"100%\" height=\"auto\"/><br/>" +
            "<b>Result: </b> " + result.text + "</p>"
        + "<br/><i><b>Confidence:</b> " + result.confidence + "</i>"
        + "<br/><i><b>Outline Points:</b> " + result.outline + "</i>"
        + div.innerHTML;

        document.getElementById("details_scan_modes").removeAttribute("open");
        document.getElementById("details_results").setAttribute("open", "");
        window.scrollTo(0, 0);
    },

    onError: function(error) {
        //called if an error occurred or the user canceled the scanning
        if (error == "Canceled") {
            //do stuff when user has canceled
            // this can be used as an indicator that the user finished the scanning if canclelOnResult is false
            console.log("AnylineOcr scanning canceled");
            return;
        }

        alert(error);
    },

    licenseKey: "" +
        "eyJzY29wZSI6WyJBTEwiXSwicGxhdGZvcm0iOlsiaU9TIiwiQW5kcm9pZCIsIldpbmRvd3" +
        "MiXSwidmFsaWQiOiIyMDE3LTA1LTIyIiwibWFqb3JWZXJzaW9uIjoiMyIsImlzQ29tbWVy" +
        "Y2lhbCI6ZmFsc2UsInRvbGVyYW5jZURheXMiOjYwLCJpb3NJZGVudGlmaWVyIjpbImFuZH" +
        "JvaWQiXSwiYW5kcm9pZElkZW50aWZpZXIiOlsiYW5kcm9pZCJdLCJ3aW5kb3dzSWRlbnRp" +
        "ZmllciI6WyJhbmRyb2lkIl19CnJGVjVPbGN3TmFoeTh4NnJtVVVSbDUxKzRiSENsRnpnS3" +
        "FPcmVOa3NnVC84VmlzR29xa3czbi90NTFMdEVyam03ZDlpTDZTREdjQ3FPRVlEQ3RBeHov" +
        "RnpsUkJUQXBHZEgzWHllTTRGaS9WajQ2S3lUQjR2eStkWGY5R2tRbmU3K3BYTWdvc0tYcG" +
        "5IQXl5U0ZqMzRLY0FCaW9mbEFvUVVydEY0cWJUcDJLY1ErQ0JtYWhKTVJLd0tDYlcvbTNE" +
        "NkFPL1BSY2wvTi96amFZdjFyeHNYMDJUdE9kcmNKSzRSdVhPOUw3R0Q0YmJRQ3ZWTGxWeW" +
        "lzQzBYZ1hHdTNwaTI2eDlmaXh3b244YVVINTNoNEtVUWRHWDBKUmtWZVZTSWtmR1ZNejYv" +
        "VGRIa1BtcTBodSs3aUt6ODliYlZVZWlqRFBJT0ljRkt3TE5QOVlMSk1VQ2FWUT09",

    ibanViewConfig: {
        "captureResolution":"1080",
        "cutout": {
          "style": "rect",
          "maxWidthPercent": "80%",
          "maxHeightPercent": "80%",
          "alignment": "top_half",
          "width": 900,
          "ratioFromSize": {
            "width": 10,
            "height": 1
          },
          "strokeWidth": 2,
          "cornerRadius": 10,
          "strokeColor": "FFFFFF",
          "outerColor": "000000",
          "outerAlpha": 0.3,
          "feedbackStrokeColor": "0099FF"
        },
        "flash": {
          "mode": "manual",
          "alignment": "bottom_right"
        },
        "beepOnResult": true,
        "vibrateOnResult": true,
        "blinkAnimationOnResult": true,
        "cancelOnResult": true,
        "visualFeedback": {
          "style": "contour_point",
          "strokeColor": "0099FF",
          "strokeWidth": 2,
          "fillColor": "110099FF"
        }
      },

    ibanOcrConfig: {
        "scanMode": "LINE",
        "minCharHeight": 20,
        "maxCharHeight": 60,
        "traineddataFiles": ["assets/eng_no_dict.traineddata"],
        "charWhitelist": "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
        "validationRegex": "^[A-Z]{2}([0-9A-Z]\\s*){13,32}$",
        "minConfidence": 65,
        "minSharpness": 66,
        "removeSmallContours": true,
        "removeWhitespaces": true
    },

    anylineVoucherCodesViewConfig: {
        "captureResolution":"1080",
        "cutout": {
          "style": "rect",
          "maxWidthPercent": "80%",
          "maxHeightPercent": "80%",
          "alignment": "center",
          "width": 540,
          "ratioFromSize": {
            "width": 4,
            "height": 1
          },
          "strokeWidth": 2,
          "cornerRadius": 10,
          "strokeColor": "FFFFFF",
          "outerColor": "000000",
          "outerAlpha": 0.3
        },
        "flash": {
          "mode": "manual",
          "alignment": "bottom_right"
        },
        "beepOnResult": true,
        "vibrateOnResult": true,
        "blinkAnimationOnResult": true,
        "cancelOnResult": true,
        "visualFeedback": {
          "style": "contour_point",
          "strokeColor": "0099FF",
          "strokeWidth": 3
        }
      },

    anylineVoucherCodesOcrConfig: {
        "scanMode": "GRID",
        "minCharHeight": 45,
        "maxCharHeight": 85,
        "traineddataFiles": ["assets/anyline_capitals.traineddata"],
        "charWhitelist": "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        "validationRegex": "[A-Z0-9]{8}$",
        "minConfidence": 85,
        "removeSmallContours": true,
        "charCountX": 8,
        "charCountY": 1,
        "charPaddingXFactor": 0.5,
        "isBrightTextOnDark": true
    },

    scanIban: function() {
        // start the Anyline OCR scanning
        // pass the success and error callbacks, as well as the license key and the config to the plugin
        // see http://documentation.anyline.io/#anyline-config for config details
        // and http://documentation.anyline.io/#anylineOcrModule for module details

        cordova.exec(this.onResult, this.onError, "AnylineSDK", "ANYLINE_OCR", [this.licenseKey, this.ibanViewConfig,
            this.ibanOcrConfig
        ]);
    },

    scanAnylineVoucherCodes: function() {
        // start the Anyline OCR scanning
        // pass the success and error callbacks, as well as the license key and the config to the plugin
        // see http://documentation.anyline.io/#anyline-config for config details
        // and http://documentation.anyline.io/#anylineOcrModule for module details

        cordova.exec(this.onResult, this.onError, "AnylineSDK", "ANYLINE_OCR", [this.licenseKey,
            this.anylineVoucherCodesViewConfig, this.anylineVoucherCodesOcrConfig
        ]);
    }
};
