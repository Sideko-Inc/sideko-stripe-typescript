import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { CalculationClient } from "@sideko-inc/stripe/resources/tax/calculation";
import { CalculationsClient } from "@sideko-inc/stripe/resources/tax/calculations";
import { RegistrationClient } from "@sideko-inc/stripe/resources/tax/registration";
import { SettingClient } from "@sideko-inc/stripe/resources/tax/setting";
import { TransactionClient } from "@sideko-inc/stripe/resources/tax/transaction";

export class TaxClient extends CoreResourceClient {
  private _calculationLazy?: CalculationClient; // lazy-loading cache
  private _calculationsLazy?: CalculationsClient; // lazy-loading cache
  private _registrationLazy?: RegistrationClient; // lazy-loading cache
  private _settingLazy?: SettingClient; // lazy-loading cache
  private _transactionLazy?: TransactionClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.calculation;
      this.calculations;
      this.registration;
      this.setting;
      this.transaction;
    }
  }
  get calculation(): CalculationClient {
    return (
      this._calculationLazy ??
      (this._calculationLazy = new (require("./calculation").CalculationClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get calculations(): CalculationsClient {
    return (
      this._calculationsLazy ??
      (this._calculationsLazy =
        new (require("./calculations").CalculationsClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get registration(): RegistrationClient {
    return (
      this._registrationLazy ??
      (this._registrationLazy =
        new (require("./registration").RegistrationClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get setting(): SettingClient {
    return (
      this._settingLazy ??
      (this._settingLazy = new (require("./setting").SettingClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get transaction(): TransactionClient {
    return (
      this._transactionLazy ??
      (this._transactionLazy = new (require("./transaction").TransactionClient)(
        this._client,
        this._opts,
      ))
    );
  }
}
