import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyConsentCollectionPaymentMethodReuseAgreement
 */
export type CheckoutSessionCreateBodyConsentCollectionPaymentMethodReuseAgreement =
  {
    position: "auto" | "hidden";
  };

/**
 * @internal
 * CheckoutSessionCreateBodyConsentCollectionPaymentMethodReuseAgreement without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyConsentCollectionPaymentMethodReuseAgreement =
  {
    position: "auto" | "hidden";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyConsentCollectionPaymentMethodReuseAgreement
 */
const SchemaIn$CheckoutSessionCreateBodyConsentCollectionPaymentMethodReuseAgreement: z.ZodType<
  CheckoutSessionCreateBodyConsentCollectionPaymentMethodReuseAgreement, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyConsentCollectionPaymentMethodReuseAgreement
 */
const SchemaOut$CheckoutSessionCreateBodyConsentCollectionPaymentMethodReuseAgreement: z.ZodType<
  External$CheckoutSessionCreateBodyConsentCollectionPaymentMethodReuseAgreement, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyConsentCollectionPaymentMethodReuseAgreement // the object to be transformed
> = z
  .object({
    position: z.enum(["auto", "hidden"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      position: "position",
    });
  });

export const Schemas$CheckoutSessionCreateBodyConsentCollectionPaymentMethodReuseAgreement =
  {
    in: SchemaIn$CheckoutSessionCreateBodyConsentCollectionPaymentMethodReuseAgreement,
    out: SchemaOut$CheckoutSessionCreateBodyConsentCollectionPaymentMethodReuseAgreement,
  };
