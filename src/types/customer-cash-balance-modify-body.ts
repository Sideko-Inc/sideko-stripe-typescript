import {
  CustomerCashBalanceModifyBodySettings,
  External$CustomerCashBalanceModifyBodySettings,
  Schemas$CustomerCashBalanceModifyBodySettings,
} from "./customer-cash-balance-modify-body-settings";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerCashBalanceModifyBody
 */
export type CustomerCashBalanceModifyBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A hash of settings for this cash balance.
   */
  settings?: CustomerCashBalanceModifyBodySettings | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (CustomerCashBalanceModifyBodySettings | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * CustomerCashBalanceModifyBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerCashBalanceModifyBody = {
  expand?: string[] | undefined;
  settings?: External$CustomerCashBalanceModifyBodySettings | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (External$CustomerCashBalanceModifyBodySettings | undefined)
    | External$CustomerCashBalanceModifyBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerCashBalanceModifyBody
 */
const SchemaIn$CustomerCashBalanceModifyBody: z.ZodType<
  CustomerCashBalanceModifyBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    settings: Schemas$CustomerCashBalanceModifyBodySettings.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      settings: "settings",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerCashBalanceModifyBody
 */
const SchemaOut$CustomerCashBalanceModifyBody: z.ZodType<
  External$CustomerCashBalanceModifyBody, // output type of this zod object
  z.ZodTypeDef,
  CustomerCashBalanceModifyBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    settings: Schemas$CustomerCashBalanceModifyBodySettings.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      settings: "settings",
    });
  });

export const Schemas$CustomerCashBalanceModifyBody = {
  in: SchemaIn$CustomerCashBalanceModifyBody,
  out: SchemaOut$CustomerCashBalanceModifyBody,
};
