import {
  External$PaymentIntentConfirmBodyPaymentMethodDataKlarnaDob,
  PaymentIntentConfirmBodyPaymentMethodDataKlarnaDob,
  Schemas$PaymentIntentConfirmBodyPaymentMethodDataKlarnaDob,
} from "./payment-intent-confirm-body-payment-method-data-klarna-dob";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodDataKlarna
 */
export type PaymentIntentConfirmBodyPaymentMethodDataKlarna = {
  dob?: PaymentIntentConfirmBodyPaymentMethodDataKlarnaDob | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodDataKlarna without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodDataKlarna = {
  dob?: External$PaymentIntentConfirmBodyPaymentMethodDataKlarnaDob | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodDataKlarna
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodDataKlarna: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodDataKlarna, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    dob: Schemas$PaymentIntentConfirmBodyPaymentMethodDataKlarnaDob.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dob: "dob",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodDataKlarna
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodDataKlarna: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodDataKlarna, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodDataKlarna // the object to be transformed
> = z
  .object({
    dob: Schemas$PaymentIntentConfirmBodyPaymentMethodDataKlarnaDob.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dob: "dob",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodDataKlarna = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodDataKlarna,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodDataKlarna,
};
