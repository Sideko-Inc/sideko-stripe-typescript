
### list <a name="list"></a>
List all files

<p>Returns a list of the files that your account has access to. Stripe sorts and returns the files by their creation dates, placing the most recently created files at the top.</p>

**API Endpoint**: `GET /v1/files`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.file.list();
```

### get <a name="get"></a>
Retrieve a file

<p>Retrieves the details of an existing file object. After you supply a unique file ID, Stripe returns the corresponding file object. Learn how to <a href="/docs/file-upload#download-file-contents">access file contents</a>.</p>

**API Endpoint**: `GET /v1/files/{file}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.file.get({ file: "string" });
```

### create <a name="create"></a>
Create a file

<p>To upload a file to Stripe, you need to send a request of type <code>multipart/form-data</code>. Include the file you want to upload in the request, and the parameters for creating a file.</p>

<p>All of Stripe’s officially supported Client libraries support sending <code>multipart/form-data</code>.</p>

**API Endpoint**: `POST /v1/files`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";
import fs from "fs";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.file.create({
  file: fs.createReadStream("./file.txt"),
  purpose: "account_requirement",
});
```
