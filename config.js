const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    SESSION_ID: process.env.SESSION_ID === undefined ? 'VAJIRA-MD=XR8QQByQ#CJJiiNGmwIhP2B1iCYrdc1YdroL1_iYXGEvZnQ6PRAA' : process.env.SESSION_ID,
    OWNER_NUMBER: '94767748006',
   // Put news sender jid below you need to send news
    hiru: '120363201439891862@g.us',
    lankadeepa: '120363201439891862@g.us',
    itn: '120363201439891862@g.us',
    bbc: '120363201439891862@g.us',
    gossiplankanews: '120363201439891862@g.us',
    dasathalankanews: '120363201439891862@g.us',
    siyatha: '120363201439891862@g.us',
    derana: '120363201439891862@g.us'
};

