import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesKakaoPayPayments
 */
export type AccountCreateBodyCapabilitiesKakaoPayPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesKakaoPayPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesKakaoPayPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesKakaoPayPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesKakaoPayPayments: z.ZodType<
  AccountCreateBodyCapabilitiesKakaoPayPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesKakaoPayPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesKakaoPayPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesKakaoPayPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesKakaoPayPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesKakaoPayPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesKakaoPayPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesKakaoPayPayments,
};
