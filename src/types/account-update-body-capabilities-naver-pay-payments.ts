import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesNaverPayPayments
 */
export type AccountUpdateBodyCapabilitiesNaverPayPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesNaverPayPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesNaverPayPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesNaverPayPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesNaverPayPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesNaverPayPayments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesNaverPayPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesNaverPayPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesNaverPayPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesNaverPayPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesNaverPayPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesNaverPayPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesNaverPayPayments,
};
