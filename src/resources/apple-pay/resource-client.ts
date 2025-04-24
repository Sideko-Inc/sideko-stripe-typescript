import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { DomainClient } from "@sideko-inc/stripe/resources/apple-pay/domain";

export class ApplePayClient extends CoreResourceClient {
  private _domainLazy?: DomainClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.domain;
    }
  }
  get domain(): DomainClient {
    return (
      this._domainLazy ??
      (this._domainLazy = new (require("./domain").DomainClient)(
        this._client,
        this._opts,
      ))
    );
  }
}
