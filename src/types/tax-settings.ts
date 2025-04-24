import {
  External$TaxProductResourceTaxSettingsDefaults,
  Schemas$TaxProductResourceTaxSettingsDefaults,
  TaxProductResourceTaxSettingsDefaults,
} from "./tax-product-resource-tax-settings-defaults";
import {
  External$TaxProductResourceTaxSettingsHeadOffice,
  Schemas$TaxProductResourceTaxSettingsHeadOffice,
  TaxProductResourceTaxSettingsHeadOffice,
} from "./tax-product-resource-tax-settings-head-office";
import {
  External$TaxProductResourceTaxSettingsStatusDetails,
  Schemas$TaxProductResourceTaxSettingsStatusDetails,
  TaxProductResourceTaxSettingsStatusDetails,
} from "./tax-product-resource-tax-settings-status-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * You can use Tax `Settings` to manage configurations used by Stripe Tax calculations.
 *
 * Related guide: [Using the Settings API](https://stripe.com/docs/tax/settings-api)
 */
export type TaxSettings = {
  defaults: TaxProductResourceTaxSettingsDefaults;
  headOffice?: TaxProductResourceTaxSettingsHeadOffice | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "tax.settings";
  /**
   * The status of the Tax `Settings`.
   */
  status: "active" | "pending";
  statusDetails: TaxProductResourceTaxSettingsStatusDetails;
};

/**
 * @internal
 * TaxSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxSettings = {
  defaults: External$TaxProductResourceTaxSettingsDefaults;
  head_office?: External$TaxProductResourceTaxSettingsHeadOffice | undefined;
  livemode: boolean;
  object: "tax.settings";
  status: "active" | "pending";
  status_details: External$TaxProductResourceTaxSettingsStatusDetails;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxSettings
 */
const SchemaIn$TaxSettings: z.ZodType<
  TaxSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    defaults: Schemas$TaxProductResourceTaxSettingsDefaults.in,
    head_office: Schemas$TaxProductResourceTaxSettingsHeadOffice.in.optional(),
    livemode: z.boolean(),
    object: z.enum(["tax.settings"]),
    status: z.enum(["active", "pending"]),
    status_details: Schemas$TaxProductResourceTaxSettingsStatusDetails.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      defaults: "defaults",
      head_office: "headOffice",
      livemode: "livemode",
      object: "object",
      status: "status",
      status_details: "statusDetails",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxSettings
 */
const SchemaOut$TaxSettings: z.ZodType<
  External$TaxSettings, // output type of this zod object
  z.ZodTypeDef,
  TaxSettings // the object to be transformed
> = z
  .object({
    defaults: Schemas$TaxProductResourceTaxSettingsDefaults.out,
    headOffice: Schemas$TaxProductResourceTaxSettingsHeadOffice.out.optional(),
    livemode: z.boolean(),
    object: z.enum(["tax.settings"]),
    status: z.enum(["active", "pending"]),
    statusDetails: Schemas$TaxProductResourceTaxSettingsStatusDetails.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      defaults: "defaults",
      headOffice: "head_office",
      livemode: "livemode",
      object: "object",
      status: "status",
      statusDetails: "status_details",
    });
  });

export const Schemas$TaxSettings = {
  in: SchemaIn$TaxSettings,
  out: SchemaOut$TaxSettings,
};
