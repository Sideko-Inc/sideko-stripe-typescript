import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { EarlyFraudWarningClient } from "@sideko-inc/stripe/resources/radar/early-fraud-warning";
import { ValueListClient } from "@sideko-inc/stripe/resources/radar/value-list";
import { ValueListItemClient } from "@sideko-inc/stripe/resources/radar/value-list-item";

export class RadarClient extends CoreResourceClient {
  private _valueListItemLazy?: ValueListItemClient; // lazy-loading cache
  private _valueListLazy?: ValueListClient; // lazy-loading cache
  private _earlyFraudWarningLazy?: EarlyFraudWarningClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.valueListItem;
      this.valueList;
      this.earlyFraudWarning;
    }
  }
  get valueListItem(): ValueListItemClient {
    return (
      this._valueListItemLazy ??
      (this._valueListItemLazy =
        new (require("./value-list-item").ValueListItemClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get valueList(): ValueListClient {
    return (
      this._valueListLazy ??
      (this._valueListLazy = new (require("./value-list").ValueListClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get earlyFraudWarning(): EarlyFraudWarningClient {
    return (
      this._earlyFraudWarningLazy ??
      (this._earlyFraudWarningLazy =
        new (require("./early-fraud-warning").EarlyFraudWarningClient)(
          this._client,
          this._opts,
        ))
    );
  }
}
