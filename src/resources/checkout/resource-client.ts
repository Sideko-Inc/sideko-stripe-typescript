import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { SessionClient } from "@sideko-inc/stripe/resources/checkout/session";

export class CheckoutClient extends CoreResourceClient {
  private _sessionLazy?: SessionClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.session;
    }
  }
  get session(): SessionClient {
    return (
      this._sessionLazy ??
      (this._sessionLazy = new (require("./session").SessionClient)(
        this._client,
        this._opts,
      ))
    );
  }
}
