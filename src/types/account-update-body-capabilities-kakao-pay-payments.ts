import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesKakaoPayPayments
 */
export type AccountUpdateBodyCapabilitiesKakaoPayPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesKakaoPayPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesKakaoPayPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesKakaoPayPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesKakaoPayPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesKakaoPayPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesKakaoPayPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesKakaoPayPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesKakaoPayPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesKakaoPayPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesKakaoPayPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesKakaoPayPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesKakaoPayPayments,
};
