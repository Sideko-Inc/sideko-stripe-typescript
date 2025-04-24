import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { LineItemClient } from "@sideko-inc/stripe/resources/payment-links/line-item";

export class PaymentLinksClient extends CoreResourceClient {
  private _lineItemLazy?: LineItemClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.lineItem;
    }
  }
  get lineItem(): LineItemClient {
    return (
      this._lineItemLazy ??
      (this._lineItemLazy = new (require("./line-item").LineItemClient)(
        this._client,
        this._opts,
      ))
    );
  }
}
