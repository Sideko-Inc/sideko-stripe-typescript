import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodyCustomTextTermsOfServiceAcceptanceObj0
 */
export type PaymentLinkUpdateBodyCustomTextTermsOfServiceAcceptanceObj0 = {
  message: string;
};

/**
 * @internal
 * PaymentLinkUpdateBodyCustomTextTermsOfServiceAcceptanceObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyCustomTextTermsOfServiceAcceptanceObj0 =
  {
    message: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyCustomTextTermsOfServiceAcceptanceObj0
 */
const SchemaIn$PaymentLinkUpdateBodyCustomTextTermsOfServiceAcceptanceObj0: z.ZodType<
  PaymentLinkUpdateBodyCustomTextTermsOfServiceAcceptanceObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyCustomTextTermsOfServiceAcceptanceObj0
 */
const SchemaOut$PaymentLinkUpdateBodyCustomTextTermsOfServiceAcceptanceObj0: z.ZodType<
  External$PaymentLinkUpdateBodyCustomTextTermsOfServiceAcceptanceObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyCustomTextTermsOfServiceAcceptanceObj0 // the object to be transformed
> = z
  .object({
    message: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      message: "message",
    });
  });

export const Schemas$PaymentLinkUpdateBodyCustomTextTermsOfServiceAcceptanceObj0 =
  {
    in: SchemaIn$PaymentLinkUpdateBodyCustomTextTermsOfServiceAcceptanceObj0,
    out: SchemaOut$PaymentLinkUpdateBodyCustomTextTermsOfServiceAcceptanceObj0,
  };
