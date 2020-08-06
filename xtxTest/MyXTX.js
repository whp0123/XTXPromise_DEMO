function MY_INIT(){
    return new Promise(function(resolve) {
        init(function () {
            resolve("success");
        }, function () {
            resolve("fail");
        });
    });
}

function MY_SOF_Login(certID, pinPwd){
    return new Promise(function(resolve) {
        SOF_Login(certID, pinPwd, function(data) {
            let loginResult = data.retVal;
            if (!loginResult) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
}

function MY_SOF_GetPinRetryCount(certID){
    return new Promise(function(resolve) {
        SOF_GetPinRetryCount(certID, function(data) {
            let loginNum = data.retVal;
            if (loginNum) {
                resolve(loginNum);
            } else {
                resolve("");
            }
        });
    });
}

function MY_SOF_GetUserList(){
    return new Promise(function(resolve) {
        SOF_GetUserList(function(data) {
            var certs = data.retVal.split("&&&");
            resolve(certs);
        });
    });
} 

function MY_SOF_ExportUserCert(certId){
    return new Promise(function(resolve) {
        SOF_ExportUserCert(certId, function(data) {
            let base64Cert = data.retVal;
            if (typeof base64Cert === 'undefined' || base64Cert === null) {
                resolve("");
            } else {
                resolve(base64Cert);
            }
        });
    });
} 

function MY_SOF_GetCertInfo(certID, certInfoType){
    return new Promise(function(resolve){
        SOF_GetCertInfo(certID, certInfoType, function(data) {
            let certInfo = data.retVal;
            if (typeof certInfo === 'undefined' || certInfo === null) {
                resolve("");
            } else {
                resolve(certInfo);
            }
        });
    });
} 

function MY_ReadFileEx(certID, fileName){
    return new Promise(function(resolve) {
        ReadFileEx(certID, fileName, function(data) {
            let existFileContent = data.retVal;
            if (typeof existFileContent === 'undefined' || existFileContent === null) {
                resolve("");
            } else {
                resolve(existFileContent);
            }
        });
    });
} 

function MY_WriteFileEx(userCertID, fileName, fileContent, isVerifyLoginResult=false){
    return new Promise(function(resolve){
        WriteFileEx(userCertID, fileName, fileContent, isVerifyLoginResult, function(data) {
            let writeResult = data.retVal;
            if (writeResult) {
                resolve(existFileContent);
            } else {
                resolve("");
            }
        });
    });
}

function MY_SOF_SignData(certID, plainData){
    return new Promise(function(resolve){
        SOF_SignData(certID, plainData, function(data) {
            let signedData = data.retVal;
            if (signedData) {
                resolve(signedData);
            } else {
                resolve("");
            }
        });
    });
}

function MY_SOF_VerifySignedData(base64Cert, plainData, signedData){
    return new Promise(function(resolve){
        SOF_VerifySignedData(base64Cert, plainData, signedData,function (data) {
            let verifyResult = data.retVal;
            if (typeof verifyResult !== 'undefined' || existFileContent !== null) {
                resolve(verifyResult);
            } else {
                resolve("");
            }
        });
    });
}