import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodyCustomTextTermsOfServiceAcceptanceObj0
 */
export type PaymentLinkCreateBodyCustomTextTermsOfServiceAcceptanceObj0 = {
  message: string;
};

/**
 * @internal
 * PaymentLinkCreateBodyCustomTextTermsOfServiceAcceptanceObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyCustomTextTermsOfServiceAcceptanceObj0 =
  {
    message: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyCustomTextTermsOfServiceAcceptanceObj0
 */
const SchemaIn$PaymentLinkCreateBodyCustomTextTermsOfServiceAcceptanceObj0: z.ZodType<
  PaymentLinkCreateBodyCustomTextTermsOfServiceAcceptanceObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyCustomTextTermsOfServiceAcceptanceObj0
 */
const SchemaOut$PaymentLinkCreateBodyCustomTextTermsOfServiceAcceptanceObj0: z.ZodType<
  External$PaymentLinkCreateBodyCustomTextTermsOfServiceAcceptanceObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyCustomTextTermsOfServiceAcceptanceObj0 // the object to be transformed
> = z
  .object({
    message: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      message: "message",
    });
  });

export const Schemas$PaymentLinkCreateBodyCustomTextTermsOfServiceAcceptanceObj0 =
  {
    in: SchemaIn$PaymentLinkCreateBodyCustomTextTermsOfServiceAcceptanceObj0,
    out: SchemaOut$PaymentLinkCreateBodyCustomTextTermsOfServiceAcceptanceObj0,
  };
