# 🌱 env-safe

env-safe is a lightweight JavaScript utility that validates environment variables BEFORE your application starts, helping you avoid runtime crashes caused by missing or invalid configuration.

---

WHY env-safe?

In real-world applications, environment variables are critical.
Common problems include:

- Missing environment variables
- Wrong data types (for example PORT=abc)
- Invalid environment values (for example NODE_ENV=prod)
- Errors discovered after deployment

env-safe catches these issues early and stops the app safely.

---

FEATURES

- Checks for missing environment variables
- Validates variable types (string, number, boolean)
- Supports allowed values (enums)
- Clear, human-readable error messages
- Zero dependencies
- DevOps and production friendly

---

INSTALLATION

Run:
npm install env-safe

Note:
env-safe does NOT load environment variables.
Use dotenv or your deployment platform to load them.

---

BASIC USAGE

Example code:

import "dotenv/config"
import { envSafe } from "env-safe"

envSafe({
  PORT: "number",
  JWT_SECRET: "string",
  NODE_ENV: ["development", "production"]
})

If all variables are valid, output will be:
✔ Environment variables validated

Your app continues normally.

---

ERROR EXAMPLES

1) Missing variable

.env file:
PORT=3000

Output:
ENV-SAFE ERROR:
- Missing env variable: JWT_SECRET
- Missing env variable: NODE_ENV
Fix env variables and restart the app.

---

2) Invalid type

.env file:
PORT=abc

Output:
ENV-SAFE ERROR:
- PORT should be a number (got "abc")

---

3) Invalid allowed value

.env file:
NODE_ENV=prod

Output:
ENV-SAFE ERROR:
- NODE_ENV must be one of: development, production (got "prod")

---

HOW IT HELPS IN PRODUCTION

- Prevents apps from starting with broken configuration
- Catches CI/CD and deployment mistakes early
- Makes debugging easier for teams
- Reduces runtime crashes

Perfect for:
- Node.js apps
- Next.js backends
- Docker containers
- CI/CD pipelines

---

IMPORTANT NOTES

- env-safe does NOT modify environment variables
- It only validates existing variables
- Designed to run once at app startup

---

LICENSE

MIT License © anujkatare

---

TIP

If this package helped you, consider starring the repository.
Feedback and contributions are welcome.
