import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { SuppliersClient } from "@sideko-inc/stripe/resources/v1/climate/suppliers";

export class ClimateClient extends CoreResourceClient {
  private _suppliersLazy?: SuppliersClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.suppliers;
    }
  }
  get suppliers(): SuppliersClient {
    return (
      this._suppliersLazy ??
      (this._suppliersLazy = new (require("./suppliers").SuppliersClient)(
        this._client,
        this._opts,
      ))
    );
  }
}
