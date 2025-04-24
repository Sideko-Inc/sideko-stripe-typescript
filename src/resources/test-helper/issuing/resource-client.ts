import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { AuthorizationClient } from "@sideko-inc/stripe/resources/test-helper/issuing/authorization";
import { CardClient } from "@sideko-inc/stripe/resources/test-helper/issuing/card";
import { PersonalizationDesignClient } from "@sideko-inc/stripe/resources/test-helper/issuing/personalization-design";
import { SettlementClient } from "@sideko-inc/stripe/resources/test-helper/issuing/settlement";
import { TransactionClient } from "@sideko-inc/stripe/resources/test-helper/issuing/transaction";

export class IssuingClient extends CoreResourceClient {
  private _authorizationLazy?: AuthorizationClient; // lazy-loading cache
  private _cardLazy?: CardClient; // lazy-loading cache
  private _personalizationDesignLazy?: PersonalizationDesignClient; // lazy-loading cache
  private _settlementLazy?: SettlementClient; // lazy-loading cache
  private _transactionLazy?: TransactionClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.authorization;
      this.card;
      this.personalizationDesign;
      this.settlement;
      this.transaction;
    }
  }
  get authorization(): AuthorizationClient {
    return (
      this._authorizationLazy ??
      (this._authorizationLazy =
        new (require("./authorization").AuthorizationClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get card(): CardClient {
    return (
      this._cardLazy ??
      (this._cardLazy = new (require("./card").CardClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get personalizationDesign(): PersonalizationDesignClient {
    return (
      this._personalizationDesignLazy ??
      (this._personalizationDesignLazy =
        new (require("./personalization-design").PersonalizationDesignClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get settlement(): SettlementClient {
    return (
      this._settlementLazy ??
      (this._settlementLazy = new (require("./settlement").SettlementClient)(
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
