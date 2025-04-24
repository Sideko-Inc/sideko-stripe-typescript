import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * This hash contains the card payment method options.
 */
export type ConfirmationTokensResourcePaymentMethodOptionsResourceCard = {
  /**
   * The `cvc_update` Token collected from the Payment Element.
   */
  cvcToken?: string | null | undefined;
};

/**
 * @internal
 * ConfirmationTokensResourcePaymentMethodOptionsResourceCard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConfirmationTokensResourcePaymentMethodOptionsResourceCard =
  {
    cvc_token?: string | null | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConfirmationTokensResourcePaymentMethodOptionsResourceCard
 */
const SchemaIn$ConfirmationTokensResourcePaymentMethodOptionsResourceCard: z.ZodType<
  ConfirmationTokensResourcePaymentMethodOptionsResourceCard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cvc_token: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cvc_token: "cvcToken",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConfirmationTokensResourcePaymentMethodOptionsResourceCard
 */
const SchemaOut$ConfirmationTokensResourcePaymentMethodOptionsResourceCard: z.ZodType<
  External$ConfirmationTokensResourcePaymentMethodOptionsResourceCard, // output type of this zod object
  z.ZodTypeDef,
  ConfirmationTokensResourcePaymentMethodOptionsResourceCard // the object to be transformed
> = z
  .object({
    cvcToken: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cvcToken: "cvc_token",
    });
  });

export const Schemas$ConfirmationTokensResourcePaymentMethodOptionsResourceCard =
  {
    in: SchemaIn$ConfirmationTokensResourcePaymentMethodOptionsResourceCard,
    out: SchemaOut$ConfirmationTokensResourcePaymentMethodOptionsResourceCard,
  };
