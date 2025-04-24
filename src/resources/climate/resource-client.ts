import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { OrderClient } from "@sideko-inc/stripe/resources/climate/order";
import { ProductClient } from "@sideko-inc/stripe/resources/climate/product";
import { SuppliersClient } from "@sideko-inc/stripe/resources/climate/suppliers";

export class ClimateClient extends CoreResourceClient {
  private _orderLazy?: OrderClient; // lazy-loading cache
  private _productLazy?: ProductClient; // lazy-loading cache
  private _suppliersLazy?: SuppliersClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.order;
      this.product;
      this.suppliers;
    }
  }
  get order(): OrderClient {
    return (
      this._orderLazy ??
      (this._orderLazy = new (require("./order").OrderClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get product(): ProductClient {
    return (
      this._productLazy ??
      (this._productLazy = new (require("./product").ProductClient)(
        this._client,
        this._opts,
      ))
    );
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
