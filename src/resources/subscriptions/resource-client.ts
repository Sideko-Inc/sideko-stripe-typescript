import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { DiscountClient } from "@sideko-inc/stripe/resources/subscriptions/discount";

export class SubscriptionsClient extends CoreResourceClient {
  private _discountLazy?: DiscountClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.discount;
    }
  }
  get discount(): DiscountClient {
    return (
      this._discountLazy ??
      (this._discountLazy = new (require("./discount").DiscountClient)(
        this._client,
        this._opts,
      ))
    );
  }
}
