import {
  External$PaymentMethodDetailsCardPresent,
  PaymentMethodDetailsCardPresent,
  Schemas$PaymentMethodDetailsCardPresent,
} from "./payment-method-details-card-present";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CardGeneratedFromPaymentMethodDetails = {
  cardPresent?: PaymentMethodDetailsCardPresent | undefined;
  /**
   * The type of payment method transaction-specific details from the transaction that generated this `card` payment method. Always `card_present`.
   */
  type: string;
};

/**
 * @internal
 * CardGeneratedFromPaymentMethodDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CardGeneratedFromPaymentMethodDetails = {
  card_present?: External$PaymentMethodDetailsCardPresent | undefined;
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CardGeneratedFromPaymentMethodDetails
 */
const SchemaIn$CardGeneratedFromPaymentMethodDetails: z.ZodType<
  CardGeneratedFromPaymentMethodDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card_present: Schemas$PaymentMethodDetailsCardPresent.in.optional(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card_present: "cardPresent",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CardGeneratedFromPaymentMethodDetails
 */
const SchemaOut$CardGeneratedFromPaymentMethodDetails: z.ZodType<
  External$CardGeneratedFromPaymentMethodDetails, // output type of this zod object
  z.ZodTypeDef,
  CardGeneratedFromPaymentMethodDetails // the object to be transformed
> = z
  .object({
    cardPresent: Schemas$PaymentMethodDetailsCardPresent.out.optional(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardPresent: "card_present",
      type: "type",
    });
  });

export const Schemas$CardGeneratedFromPaymentMethodDetails = {
  in: SchemaIn$CardGeneratedFromPaymentMethodDetails,
  out: SchemaOut$CardGeneratedFromPaymentMethodDetails,
};
