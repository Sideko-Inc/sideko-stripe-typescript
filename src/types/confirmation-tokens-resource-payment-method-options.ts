import {
  ConfirmationTokensResourcePaymentMethodOptionsResourceCard,
  External$ConfirmationTokensResourcePaymentMethodOptionsResourceCard,
  Schemas$ConfirmationTokensResourcePaymentMethodOptionsResourceCard,
} from "./confirmation-tokens-resource-payment-method-options-resource-card";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Payment-method-specific configuration
 */
export type ConfirmationTokensResourcePaymentMethodOptions = {
  /**
   * This hash contains the card payment method options.
   */
  card?: ConfirmationTokensResourcePaymentMethodOptionsResourceCard | undefined;
};

/**
 * @internal
 * ConfirmationTokensResourcePaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConfirmationTokensResourcePaymentMethodOptions = {
  card?:
    | External$ConfirmationTokensResourcePaymentMethodOptionsResourceCard
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConfirmationTokensResourcePaymentMethodOptions
 */
const SchemaIn$ConfirmationTokensResourcePaymentMethodOptions: z.ZodType<
  ConfirmationTokensResourcePaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card: Schemas$ConfirmationTokensResourcePaymentMethodOptionsResourceCard.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card: "card",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConfirmationTokensResourcePaymentMethodOptions
 */
const SchemaOut$ConfirmationTokensResourcePaymentMethodOptions: z.ZodType<
  External$ConfirmationTokensResourcePaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  ConfirmationTokensResourcePaymentMethodOptions // the object to be transformed
> = z
  .object({
    card: Schemas$ConfirmationTokensResourcePaymentMethodOptionsResourceCard.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card: "card",
    });
  });

export const Schemas$ConfirmationTokensResourcePaymentMethodOptions = {
  in: SchemaIn$ConfirmationTokensResourcePaymentMethodOptions,
  out: SchemaOut$ConfirmationTokensResourcePaymentMethodOptions,
};
