import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { FeatureClient } from "@sideko-inc/stripe/resources/treasury/financial-accounts/feature";

export class FinancialAccountsClient extends CoreResourceClient {
  private _featureLazy?: FeatureClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.feature;
    }
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
