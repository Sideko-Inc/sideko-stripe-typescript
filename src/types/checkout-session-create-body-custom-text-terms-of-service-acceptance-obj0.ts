import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyCustomTextTermsOfServiceAcceptanceObj0
 */
export type CheckoutSessionCreateBodyCustomTextTermsOfServiceAcceptanceObj0 = {
  message: string;
};

/**
 * @internal
 * CheckoutSessionCreateBodyCustomTextTermsOfServiceAcceptanceObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyCustomTextTermsOfServiceAcceptanceObj0 =
  {
    message: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyCustomTextTermsOfServiceAcceptanceObj0
 */
const SchemaIn$CheckoutSessionCreateBodyCustomTextTermsOfServiceAcceptanceObj0: z.ZodType<
  CheckoutSessionCreateBodyCustomTextTermsOfServiceAcceptanceObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    message: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      message: "message",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyCustomTextTermsOfServiceAcceptanceObj0
 */
const SchemaOut$CheckoutSessionCreateBodyCustomTextTermsOfServiceAcceptanceObj0: z.ZodType<
  External$CheckoutSessionCreateBodyCustomTextTermsOfServiceAcceptanceObj0, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyCustomTextTermsOfServiceAcceptanceObj0 // the object to be transformed
> = z
  .object({
    message: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      message: "message",
    });
  });

export const Schemas$CheckoutSessionCreateBodyCustomTextTermsOfServiceAcceptanceObj0 =
  {
    in: SchemaIn$CheckoutSessionCreateBodyCustomTextTermsOfServiceAcceptanceObj0,
    out: SchemaOut$CheckoutSessionCreateBodyCustomTextTermsOfServiceAcceptanceObj0,
  };
