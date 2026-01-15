const mongoose = require('mongoose');

// SCALER TACTIC: Strict Schema Definition
const witnessSchema = new mongoose.Schema({
    event: { type: String, default: "ACCESSED_THE_VOID" },
    logic_used: { type: String, default: "void(SIMRAN)" },
    result_observed: { type: String, default: "undefined" },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Witness', witnessSchema);