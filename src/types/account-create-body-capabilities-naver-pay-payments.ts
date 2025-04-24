import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesNaverPayPayments
 */
export type AccountCreateBodyCapabilitiesNaverPayPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesNaverPayPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesNaverPayPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesNaverPayPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesNaverPayPayments: z.ZodType<
  AccountCreateBodyCapabilitiesNaverPayPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesNaverPayPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesNaverPayPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesNaverPayPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesNaverPayPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesNaverPayPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesNaverPayPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesNaverPayPayments,
};
