import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SetupIntentTypeSpecificPaymentMethodOptionsClient = {
  /**
   * Bank account verification method.
   */
  verificationMethod?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * @internal
 * SetupIntentTypeSpecificPaymentMethodOptionsClient without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentTypeSpecificPaymentMethodOptionsClient = {
  verification_method?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentTypeSpecificPaymentMethodOptionsClient
 */
const SchemaIn$SetupIntentTypeSpecificPaymentMethodOptionsClient: z.ZodType<
  SetupIntentTypeSpecificPaymentMethodOptionsClient, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    verification_method: z
      .enum(["automatic", "instant", "microdeposits"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      verification_method: "verificationMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentTypeSpecificPaymentMethodOptionsClient
 */
const SchemaOut$SetupIntentTypeSpecificPaymentMethodOptionsClient: z.ZodType<
  External$SetupIntentTypeSpecificPaymentMethodOptionsClient, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentTypeSpecificPaymentMethodOptionsClient // the object to be transformed
> = z
  .object({
    verificationMethod: z
      .enum(["automatic", "instant", "microdeposits"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      verificationMethod: "verification_method",
    });
  });

export const Schemas$SetupIntentTypeSpecificPaymentMethodOptionsClient = {
  in: SchemaIn$SetupIntentTypeSpecificPaymentMethodOptionsClient,
  out: SchemaOut$SetupIntentTypeSpecificPaymentMethodOptionsClient,
};
