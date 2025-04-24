import {
  External$TreasuryFinancialAccountCloseBodyForwardingSettings,
  Schemas$TreasuryFinancialAccountCloseBodyForwardingSettings,
  TreasuryFinancialAccountCloseBodyForwardingSettings,
} from "./treasury-financial-account-close-body-forwarding-settings";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountCloseBody
 */
export type TreasuryFinancialAccountCloseBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A different bank account where funds can be deposited/debited in order to get the closing FA's balance to $0
   */
  forwardingSettings?:
    | TreasuryFinancialAccountCloseBodyForwardingSettings
    | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (TreasuryFinancialAccountCloseBodyForwardingSettings | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountCloseBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountCloseBody = {
  expand?: string[] | undefined;
  forwarding_settings?:
    | External$TreasuryFinancialAccountCloseBodyForwardingSettings
    | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (External$TreasuryFinancialAccountCloseBodyForwardingSettings | undefined)
    | External$TreasuryFinancialAccountCloseBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountCloseBody
 */
const SchemaIn$TreasuryFinancialAccountCloseBody: z.ZodType<
  TreasuryFinancialAccountCloseBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    forwarding_settings:
      Schemas$TreasuryFinancialAccountCloseBodyForwardingSettings.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      forwarding_settings: "forwardingSettings",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountCloseBody
 */
const SchemaOut$TreasuryFinancialAccountCloseBody: z.ZodType<
  External$TreasuryFinancialAccountCloseBody, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountCloseBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    forwardingSettings:
      Schemas$TreasuryFinancialAccountCloseBodyForwardingSettings.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      forwardingSettings: "forwarding_settings",
    });
  });

export const Schemas$TreasuryFinancialAccountCloseBody = {
  in: SchemaIn$TreasuryFinancialAccountCloseBody,
  out: SchemaOut$TreasuryFinancialAccountCloseBody,
};
