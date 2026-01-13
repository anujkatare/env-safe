export function envSafe(schema = {}){
    const errors = [];

    for(const key in schema){
        const rule = schema[key];
        const value = process.env[key];

        if(value === undefined || value === ''){
            errors.push(`Missing environment variable: ${key}`);
            continue;
        }

        if(Array.isArray(rule)){
            if(!rule.includes(value)){
                errors.push(
                    `${key} must be one of: ${rule.join(', ')} (got '${value}')`
                );
            }
            continue;
        }

        if(rule === 'number' && isNaN(Number(value))){
            errors.push(`${key} must be a number (got '${value}')`);
        }

        if (rule === "boolean" && !["true", "false"].includes(value)) {
           errors.push(`${key} should be boolean (true/false)`);
        }

        if (rule === "string" && typeof value !== "string") {
           errors.push(`${key} should be string`)
        }
    }

    if(errors.length > 0){
        console.error("\n❌ ENV-SAFE ERROR:\n")
        errors.forEach(err => console.error("•", err))
        console.error("\nFix env variables and restart the app.\n")
        process.exit(1)
    }

    console.log("✔ Environment variables validated")

}