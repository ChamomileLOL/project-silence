const Witness = require('../models/Witness');

// THE RAMANUJAN CORE
const executeKernel = () => {
    const SIMRAN = true; 
    return void(SIMRAN); // Returns undefined
};

// THE CONTROLLER ACTION
exports.accessTheVoid = async (req, res) => {
    try {
        console.log(">>> [CONTROLLER] Attempting to access Silence...");

        // 1. EXECUTE LOGIC
        const output = executeKernel();

        // 2. VERIFY SILENCE (Ramanujan Check)
        if (output === undefined) {
            
            // 3. PERSISTENCE (Scaler Tactic: Save to DB)
            // We record that the Void was successfully touched.
            const newWitness = await Witness.create({});
            
            // 4. SEND RESPONSE
            res.status(200).json({
                success: true,
                message: "ACCESS GRANTED. THE SILENCE SPEAKS.",
                technical_data: {
                    logic: "void(SIMRAN)",
                    result: "UNDEFINED",
                    db_record_id: newWitness._id
                }
            });
        } else {
            throw new Error("ATTACHMENT DETECTED.");
        }
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
};