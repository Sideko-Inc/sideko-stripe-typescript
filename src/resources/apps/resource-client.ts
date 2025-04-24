import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { SecretClient } from "@sideko-inc/stripe/resources/apps/secret";

export class AppsClient extends CoreResourceClient {
  private _secretLazy?: SecretClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.secret;
    }
  }
  get secret(): SecretClient {
    return (
      this._secretLazy ??
      (this._secretLazy = new (require("./secret").SecretClient)(
        this._client,
        this._opts,
      ))
    );
  }
}
