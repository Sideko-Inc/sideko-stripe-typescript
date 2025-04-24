import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { ReversalClient } from "@sideko-inc/stripe/resources/transfers/reversal";

export class TransfersClient extends CoreResourceClient {
  private _reversalLazy?: ReversalClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.reversal;
    }
  }
  get reversal(): ReversalClient {
    return (
      this._reversalLazy ??
      (this._reversalLazy = new (require("./reversal").ReversalClient)(
        this._client,
        this._opts,
      ))
    );
  }
}
