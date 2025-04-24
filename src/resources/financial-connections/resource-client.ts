import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { AccountClient } from "@sideko-inc/stripe/resources/financial-connections/account";
import { SessionClient } from "@sideko-inc/stripe/resources/financial-connections/session";
import { TransactionClient } from "@sideko-inc/stripe/resources/financial-connections/transaction";

export class FinancialConnectionsClient extends CoreResourceClient {
  private _accountLazy?: AccountClient; // lazy-loading cache
  private _sessionLazy?: SessionClient; // lazy-loading cache
  private _transactionLazy?: TransactionClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.account;
      this.session;
      this.transaction;
    }
  }
  get account(): AccountClient {
    return (
      this._accountLazy ??
      (this._accountLazy = new (require("./account").AccountClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get session(): SessionClient {
    return (
      this._sessionLazy ??
      (this._sessionLazy = new (require("./session").SessionClient)(
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
