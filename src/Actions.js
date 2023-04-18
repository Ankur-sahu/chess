const Actions = { // these are event
    JOIN:'join',
    JOINED:'joined',
    DISCONNECTED:'disconnected',
    CODE_CHANGE:'code-change',
    SYNC_CODE:'sync-code',
    LEAVE:'leave',
    NOSPACE:"no-space",
    DISCONNECTING:"disconnecting",//if u want to access room member use this, it ll run before disconnected
}
module.exports = Actions