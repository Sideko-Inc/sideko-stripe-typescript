import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { ActiveEntitlementClient } from "@sideko-inc/stripe/resources/entitlement/active-entitlement";
import { FeatureClient } from "@sideko-inc/stripe/resources/entitlement/feature";

export class EntitlementClient extends CoreResourceClient {
  private _activeEntitlementLazy?: ActiveEntitlementClient; // lazy-loading cache
  private _featureLazy?: FeatureClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.activeEntitlement;
      this.feature;
    }
  }
  get activeEntitlement(): ActiveEntitlementClient {
    return (
      this._activeEntitlementLazy ??
      (this._activeEntitlementLazy =
        new (require("./active-entitlement").ActiveEntitlementClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get feature(): FeatureClient {
    return (
      this._featureLazy ??
      (this._featureLazy = new (require("./feature").FeatureClient)(
        this._client,
        this._opts,
      ))
    );
  }
}
