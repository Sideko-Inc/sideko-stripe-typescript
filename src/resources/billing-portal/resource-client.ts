import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { ConfigurationClient } from "@sideko-inc/stripe/resources/billing-portal/configuration";
import { SessionClient } from "@sideko-inc/stripe/resources/billing-portal/session";

export class BillingPortalClient extends CoreResourceClient {
  private _configurationLazy?: ConfigurationClient; // lazy-loading cache
  private _sessionLazy?: SessionClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.configuration;
      this.session;
    }
  }
  get configuration(): ConfigurationClient {
    return (
      this._configurationLazy ??
      (this._configurationLazy =
        new (require("./configuration").ConfigurationClient)(
          this._client,
          this._opts,
        ))
    );
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
