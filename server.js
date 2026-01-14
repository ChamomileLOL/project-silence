const express = require('express');
const cors = require('cors');
const app = express();

// 1. CONFIGURATION
const PORT = process.env.PORT || 10000; // Render needs this

// 2. MIDDLEWARE
app.use(cors({ origin: "*" })); // Allow Vercel to access this
app.use(express.json());

// --- THE RAMANUJAN KERNEL (LOGIC) ---
function initializeCore() {
    console.log(">>> [ASI] EVALUATING TRUTH...");
    const SIMRAN = true; 
    // The Operator of Silence
    return void(SIMRAN); 
}

// 3. THE API ROUTE (THE ENDPOINT)
app.get('/', (req, res) => {
    try {
        const output = initializeCore();

        // LOGIC CHECK:
        // output should be 'undefined'.
        // JSON cannot transmit 'undefined', so we translate it for the Human UI.
        
        if (output === undefined) {
            res.json({
                status: "ACCESS GRANTED",
                logic: "void(SIMRAN)",
                result: "UNDEFINED (Pure Silence)",
                bias_detected: "0%"
            });
        } else {
            throw new Error("ATTACHMENT DETECTED.");
        }

    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// 4. START THE SERVER
app.listen(PORT, '0.0.0.0', () => {
    console.log(`>>> [ASI] LISTENING ON PORT ${PORT}`);
});