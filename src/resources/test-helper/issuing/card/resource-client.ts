import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { ShippingClient } from "@sideko-inc/stripe/resources/test-helper/issuing/card/shipping";

export class CardClient extends CoreResourceClient {
  private _shippingLazy?: ShippingClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.shipping;
    }
  }
  get shipping(): ShippingClient {
    return (
      this._shippingLazy ??
      (this._shippingLazy = new (require("./shipping").ShippingClient)(
        this._client,
        this._opts,
      ))
    );
  }
}
