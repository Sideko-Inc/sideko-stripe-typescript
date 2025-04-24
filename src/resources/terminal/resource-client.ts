import {
  CoreClient,
  CoreResourceClient,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { ConfigurationClient } from "@sideko-inc/stripe/resources/terminal/configuration";
import { ConnectionTokenClient } from "@sideko-inc/stripe/resources/terminal/connection-token";
import { LocationClient } from "@sideko-inc/stripe/resources/terminal/location";
import { ReaderClient } from "@sideko-inc/stripe/resources/terminal/reader";

export class TerminalClient extends CoreResourceClient {
  private _configurationLazy?: ConfigurationClient; // lazy-loading cache
  private _locationLazy?: LocationClient; // lazy-loading cache
  private _readerLazy?: ReaderClient; // lazy-loading cache
  private _connectionTokenLazy?: ConnectionTokenClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.configuration;
      this.location;
      this.reader;
      this.connectionToken;
    }
  }
  get configuration(): ConfigurationClient {
    return (
      this._configurationLazy ??
      (this._configurationLazy =
        new (require("./configuration").ConfigurationClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get location(): LocationClient {
    return (
      this._locationLazy ??
      (this._locationLazy = new (require("./location").LocationClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get reader(): ReaderClient {
    return (
      this._readerLazy ??
      (this._readerLazy = new (require("./reader").ReaderClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get connectionToken(): ConnectionTokenClient {
    return (
      this._connectionTokenLazy ??
      (this._connectionTokenLazy =
        new (require("./connection-token").ConnectionTokenClient)(
          this._client,
          this._opts,
        ))
    );
  }
}
