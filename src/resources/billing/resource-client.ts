import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { AlertClient } from "@sideko-inc/stripe/resources/billing/alert";
import { CreditBalanceSummaryClient } from "@sideko-inc/stripe/resources/billing/credit-balance-summary";
import { CreditBalanceTransactionClient } from "@sideko-inc/stripe/resources/billing/credit-balance-transaction";
import { CreditGrantClient } from "@sideko-inc/stripe/resources/billing/credit-grant";
import { MeterClient } from "@sideko-inc/stripe/resources/billing/meter";
import { MeterEventClient } from "@sideko-inc/stripe/resources/billing/meter-event";
import { MeterEventAdjustmentClient } from "@sideko-inc/stripe/resources/billing/meter-event-adjustment";

export class BillingClient extends CoreResourceClient {
  private _alertLazy?: AlertClient; // lazy-loading cache
  private _creditBalanceSummaryLazy?: CreditBalanceSummaryClient; // lazy-loading cache
  private _creditBalanceTransactionLazy?: CreditBalanceTransactionClient; // lazy-loading cache
  private _creditGrantLazy?: CreditGrantClient; // lazy-loading cache
  private _meterLazy?: MeterClient; // lazy-loading cache
  private _meterEventAdjustmentLazy?: MeterEventAdjustmentClient; // lazy-loading cache
  private _meterEventLazy?: MeterEventClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.alert;
      this.creditBalanceSummary;
      this.creditBalanceTransaction;
      this.creditGrant;
      this.meter;
      this.meterEventAdjustment;
      this.meterEvent;
    }
  }
  get alert(): AlertClient {
    return (
      this._alertLazy ??
      (this._alertLazy = new (require("./alert").AlertClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get creditBalanceSummary(): CreditBalanceSummaryClient {
    return (
      this._creditBalanceSummaryLazy ??
      (this._creditBalanceSummaryLazy =
        new (require("./credit-balance-summary").CreditBalanceSummaryClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get creditBalanceTransaction(): CreditBalanceTransactionClient {
    return (
      this._creditBalanceTransactionLazy ??
      (this._creditBalanceTransactionLazy =
        new (require("./credit-balance-transaction").CreditBalanceTransactionClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get creditGrant(): CreditGrantClient {
    return (
      this._creditGrantLazy ??
      (this._creditGrantLazy =
        new (require("./credit-grant").CreditGrantClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get meter(): MeterClient {
    return (
      this._meterLazy ??
      (this._meterLazy = new (require("./meter").MeterClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get meterEventAdjustment(): MeterEventAdjustmentClient {
    return (
      this._meterEventAdjustmentLazy ??
      (this._meterEventAdjustmentLazy =
        new (require("./meter-event-adjustment").MeterEventAdjustmentClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get meterEvent(): MeterEventClient {
    return (
      this._meterEventLazy ??
      (this._meterEventLazy = new (require("./meter-event").MeterEventClient)(
        this._client,
        this._opts,
      ))
    );
  }
}
