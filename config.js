const DBNAME = `bytheways-box-office`;
module.exports = {
    PORT: 3129,
    DBNAME,
    APPNAME: `Bytheway's Box Office`,
    DBURI: `mongodb+srv://${process.env.dbUSERNAME}:${process.env.dbPASSWORD}@cluster0-bnevs.mongodb.net/${DBNAME}?retryWrites=true&w=majority`,
};

