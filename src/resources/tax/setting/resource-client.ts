import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/tax/setting/request-types";
import { Schemas$TaxSettingUpdateBody } from "@sideko-inc/stripe/types/tax-setting-update-body";
import { Schemas$TaxSettings } from "@sideko-inc/stripe/types/tax-settings";
import * as z from "zod";

export class SettingClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Retrieve settings
   *
   * <p>Retrieves Tax <code>Settings</code> for a merchant.</p>
   *
   * GET /v1/tax/settings
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.TaxSettings> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/tax/settings",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$TaxSettings.in,
      opts,
    });
  }
  /**
   * Update settings
   *
   * <p>Updates Tax <code>Settings</code> parameters used in tax calculations. All parameters are editable but none can be removed once set.</p>
   *
   * POST /v1/tax/settings
   */
  update(
    request: requests.UpdateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.TaxSettings> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/tax/settings",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TaxSettingUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          defaults: "deepObject",
          expand: "deepObject",
          head_office: "deepObject",
        },
        explode: { defaults: true, expand: true, head_office: true },
      },
      responseSchema: Schemas$TaxSettings.in,
      opts,
    });
  }
}
