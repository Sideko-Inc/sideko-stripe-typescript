
### respond <a name="respond"></a>
Respond to fraud challenge

<p>Respond to a fraud challenge on a testmode Issuing authorization, simulating either a confirmation of fraud or a correction of legitimacy.</p>

**API Endpoint**: `POST /v1/test_helpers/issuing/authorizations/{authorization}/fraud_challenges/respond`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res =
  await client.testHelper.issuing.authorization.fraudChallenges.respond({
    confirmed: true,
    authorization: "string",
  });
```
