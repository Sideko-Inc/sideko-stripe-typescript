import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodySettingsBacsDebitPayments
 */
export type AccountCreateBodySettingsBacsDebitPayments = {
  displayName?: string | undefined;
};

/**
 * @internal
 * AccountCreateBodySettingsBacsDebitPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodySettingsBacsDebitPayments = {
  display_name?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodySettingsBacsDebitPayments
 */
const SchemaIn$AccountCreateBodySettingsBacsDebitPayments: z.ZodType<
  AccountCreateBodySettingsBacsDebitPayments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_name: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_name: "displayName",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodySettingsBacsDebitPayments
 */
const SchemaOut$AccountCreateBodySettingsBacsDebitPayments: z.ZodType<
  External$AccountCreateBodySettingsBacsDebitPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodySettingsBacsDebitPayments // the object to be transformed
> = z
  .object({
    displayName: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayName: "display_name",
    });
  });

export const Schemas$AccountCreateBodySettingsBacsDebitPayments = {
  in: SchemaIn$AccountCreateBodySettingsBacsDebitPayments,
  out: SchemaOut$AccountCreateBodySettingsBacsDebitPayments,
};
