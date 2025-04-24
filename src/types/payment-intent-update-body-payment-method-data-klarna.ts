import {
  External$PaymentIntentUpdateBodyPaymentMethodDataKlarnaDob,
  PaymentIntentUpdateBodyPaymentMethodDataKlarnaDob,
  Schemas$PaymentIntentUpdateBodyPaymentMethodDataKlarnaDob,
} from "./payment-intent-update-body-payment-method-data-klarna-dob";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodDataKlarna
 */
export type PaymentIntentUpdateBodyPaymentMethodDataKlarna = {
  dob?: PaymentIntentUpdateBodyPaymentMethodDataKlarnaDob | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodDataKlarna without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodDataKlarna = {
  dob?: External$PaymentIntentUpdateBodyPaymentMethodDataKlarnaDob | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodDataKlarna
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodDataKlarna: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodDataKlarna, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    dob: Schemas$PaymentIntentUpdateBodyPaymentMethodDataKlarnaDob.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dob: "dob",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodDataKlarna
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodDataKlarna: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodDataKlarna, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodDataKlarna // the object to be transformed
> = z
  .object({
    dob: Schemas$PaymentIntentUpdateBodyPaymentMethodDataKlarnaDob.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dob: "dob",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodDataKlarna = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodDataKlarna,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodDataKlarna,
};
