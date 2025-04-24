import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { AuthorizationClient } from "@sideko-inc/stripe/resources/issuing/authorization";
import { CardClient } from "@sideko-inc/stripe/resources/issuing/card";
import { CardholderClient } from "@sideko-inc/stripe/resources/issuing/cardholder";
import { DisputeClient } from "@sideko-inc/stripe/resources/issuing/dispute";
import { PersonalizationDesignClient } from "@sideko-inc/stripe/resources/issuing/personalization-design";
import { PhysicalBundleClient } from "@sideko-inc/stripe/resources/issuing/physical-bundle";
import { SettlementClient } from "@sideko-inc/stripe/resources/issuing/settlement";
import { TokenClient } from "@sideko-inc/stripe/resources/issuing/token";
import { TransactionClient } from "@sideko-inc/stripe/resources/issuing/transaction";

export class IssuingClient extends CoreResourceClient {
  private _authorizationLazy?: AuthorizationClient; // lazy-loading cache
  private _cardholderLazy?: CardholderClient; // lazy-loading cache
  private _cardLazy?: CardClient; // lazy-loading cache
  private _disputeLazy?: DisputeClient; // lazy-loading cache
  private _personalizationDesignLazy?: PersonalizationDesignClient; // lazy-loading cache
  private _physicalBundleLazy?: PhysicalBundleClient; // lazy-loading cache
  private _settlementLazy?: SettlementClient; // lazy-loading cache
  private _tokenLazy?: TokenClient; // lazy-loading cache
  private _transactionLazy?: TransactionClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.authorization;
      this.cardholder;
      this.card;
      this.dispute;
      this.personalizationDesign;
      this.physicalBundle;
      this.settlement;
      this.token;
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
  get cardholder(): CardholderClient {
    return (
      this._cardholderLazy ??
      (this._cardholderLazy = new (require("./cardholder").CardholderClient)(
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
  get dispute(): DisputeClient {
    return (
      this._disputeLazy ??
      (this._disputeLazy = new (require("./dispute").DisputeClient)(
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
  get physicalBundle(): PhysicalBundleClient {
    return (
      this._physicalBundleLazy ??
      (this._physicalBundleLazy =
        new (require("./physical-bundle").PhysicalBundleClient)(
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
  get token(): TokenClient {
    return (
      this._tokenLazy ??
      (this._tokenLazy = new (require("./token").TokenClient)(
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
