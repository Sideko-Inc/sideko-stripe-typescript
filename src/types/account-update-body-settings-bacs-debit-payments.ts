import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodySettingsBacsDebitPayments
 */
export type AccountUpdateBodySettingsBacsDebitPayments = {
  displayName?: string | undefined;
};

/**
 * @internal
 * AccountUpdateBodySettingsBacsDebitPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodySettingsBacsDebitPayments = {
  display_name?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodySettingsBacsDebitPayments
 */
const SchemaIn$AccountUpdateBodySettingsBacsDebitPayments: z.ZodType<
  AccountUpdateBodySettingsBacsDebitPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodySettingsBacsDebitPayments
 */
const SchemaOut$AccountUpdateBodySettingsBacsDebitPayments: z.ZodType<
  External$AccountUpdateBodySettingsBacsDebitPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodySettingsBacsDebitPayments // the object to be transformed
> = z
  .object({
    displayName: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayName: "display_name",
    });
  });

export const Schemas$AccountUpdateBodySettingsBacsDebitPayments = {
  in: SchemaIn$AccountUpdateBodySettingsBacsDebitPayments,
  out: SchemaOut$AccountUpdateBodySettingsBacsDebitPayments,
};
