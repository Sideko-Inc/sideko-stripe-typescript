import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodyConsentCollectionPaymentMethodReuseAgreement
 */
export type PaymentLinkCreateBodyConsentCollectionPaymentMethodReuseAgreement =
  {
    position: "auto" | "hidden";
  };

/**
 * @internal
 * PaymentLinkCreateBodyConsentCollectionPaymentMethodReuseAgreement without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyConsentCollectionPaymentMethodReuseAgreement =
  {
    position: "auto" | "hidden";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyConsentCollectionPaymentMethodReuseAgreement
 */
const SchemaIn$PaymentLinkCreateBodyConsentCollectionPaymentMethodReuseAgreement: z.ZodType<
  PaymentLinkCreateBodyConsentCollectionPaymentMethodReuseAgreement, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    position: z.enum(["auto", "hidden"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      position: "position",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyConsentCollectionPaymentMethodReuseAgreement
 */
const SchemaOut$PaymentLinkCreateBodyConsentCollectionPaymentMethodReuseAgreement: z.ZodType<
  External$PaymentLinkCreateBodyConsentCollectionPaymentMethodReuseAgreement, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyConsentCollectionPaymentMethodReuseAgreement // the object to be transformed
> = z
  .object({
    position: z.enum(["auto", "hidden"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      position: "position",
    });
  });

export const Schemas$PaymentLinkCreateBodyConsentCollectionPaymentMethodReuseAgreement =
  {
    in: SchemaIn$PaymentLinkCreateBodyConsentCollectionPaymentMethodReuseAgreement,
    out: SchemaOut$PaymentLinkCreateBodyConsentCollectionPaymentMethodReuseAgreement,
  };
